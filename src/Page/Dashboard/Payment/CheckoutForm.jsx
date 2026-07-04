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
    <div className="w-full max-w-5xl mx-auto px-4 my-20">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          <div className="md:w-5/12 bg-gray-50 p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <img src={image} alt={name} className="w-20 h-20 rounded-xl object-cover shadow-sm" />
                <div>
                  <h3 className="font-bold text-gray-800 text-lg leading-tight">{name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Registration Fee</p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-800">${contestprice}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-gray-800">Total</span>
                  <span className="text-[#0776a6]">${contestprice}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-7/12 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Details</h2>
            <p className="text-gray-500 mb-8 text-sm">Complete your registration by providing your payment details.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="p-4 border border-gray-200 rounded-xl bg-gray-50/50 shadow-inner">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
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
              </div>
              
              <button 
                type="submit" 
                className="w-full py-2 bg-[#0776a6] hover:bg-[#055b82] disabled:bg-gray-300 disabled:transform-none disabled:shadow-none text-white text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1" 
                disabled={!stripe || !clientSecret}
              >
                Pay ${contestprice}
              </button>
              
              {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}
              {transactionId && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mt-4 text-center">
                  <p className="font-semibold">Payment Successful!</p>
                  <p className="text-sm font-mono mt-1">TxID: {transactionId}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;