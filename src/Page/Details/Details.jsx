import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useaxiosPublic from "../../Hooks/useaxiosPublic";
import Loading from "../Loading/Loading";

const Details = () => {
  const { id } = useParams();
  const axiosPublic = useaxiosPublic();
  // const {loading} = useAuth();

  const { data: details = [], isPending: panding } = useQuery({
    queryKey: ["details", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/contest/${id}`);
      return res.data;
    },
  });

  const {
    _id,
    name,
    image,
    attempted,
    description,
    contestprice,
    deadline,
    prizemoney,
  } = details;
  // const presendDate = new Date().toLocaleDateString();

  return (
    <>
      {panding ? (
        <Loading></Loading>
      ) : (
        <div className="card card-compact bg-[#03425e] shadow-xl flex md:flex-row w-11/12 mx-auto my-20 rounded-lg md:rounded-e-lg">
          <img
            className="md:w-1/2 h-cover rounded-lg md:rounded-l-lg"
            src={image}
            alt="food"
          />
          <div className="card-body text-white">
            <h2 className="card-title font-bold text-3xl">{name}</h2>
            <p className="text-2xl font-semibold">{}</p>
            <p className="text-xl">participation: {attempted}</p>
            <p className="text-xl font-semibold">Price Money: $ {prizemoney}</p>
            <p className="text-lg font-semibold">
              Counter Price : $ {contestprice}
            </p>
            <p className="text-lg font-semibold">Dealine : {deadline}</p>
            <p className="text-base">{description}</p>
            <div className="card-actions justify-start mt-3">
              <Link to={`/payment/${_id}`}>
                <button className="btn btn-white text-[#0776a6]">
                  Registration
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
