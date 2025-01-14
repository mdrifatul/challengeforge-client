import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loading from "../../Loading/Loading";
import './CardElement.css';



const CheckoutForm = () => {

  const {id} = useParams();
  const axiosPublic = useAxiosSecure()

  const {data: payment=[],isLoading: loading,refetch} = useQuery({
    queryKey: ['details', id],
    queryFn: async() =>{
      const res = await axiosPublic.get(`/contest/${id}`)
      return res.data
    }
  })
  const {_id,name,image,email,contestprice,deadline,prizemoney,attempted} = payment


  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {user} = useAuth();

  useEffect(() => {
    if (contestprice > 0) {
      axiosSecure.post("/create-payment-intent", { price: contestprice })
        .then((res) => {
          setClientSecret(res.data?.clientSecret);
        });
    }
  }, [axiosSecure, contestprice]);

  


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        // now save the payment in the database
        const payment = {
          name: user?.displayName, 
          userEmail: user.email,
          date: new Date(),
          transactionId: paymentIntent.id,
          contestId: _id,
          creatorEmail:email,
          price: contestprice,
          contestName:name,
          image:image,
          deadline:deadline,
          prizemoney:prizemoney,
          attempted:attempted
        };

        const res = await axiosSecure.post("/payments", payment);
        refetch();
          if (res.data) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Payment Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          navigate("/dashboard/participate");
        }
      }
    }
  };



  return (
    <div className="w-11/12 md:w-1/2 mx-auto my-24">
      {loading? <Loading></Loading>:<form onSubmit={handleSubmit} className="paymentCard">
        <CardElement
          className="paymentCard"
          options={{
            style: {
              base: {
                fontSize: "18px",  
                padding: "10px 14px",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div  className="text-center">
        <button type="submit" className="btn btn-sm bg-[#299fd2]  text-white mt-10 w-40" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        </div>
        <p className="text-red-600">{error}</p>
        {transactionId && <p className="text-white p-2 bg-green-600 rounded-xl mt-10 w-fit mx-auto"> Your transaction id: {transactionId}</p>}
      </form>}
    </div>
  );
};

export default CheckoutForm;