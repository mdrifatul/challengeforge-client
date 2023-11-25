import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useaxiosPublic from "../../Hooks/useaxiosPublic";

const Details = () => {
  const {id} = useParams();
  const axiosPublic = useaxiosPublic()

  const {data: details=[]} = useQuery({
    queryKey: ['details', id],
    queryFn: async() =>{
      const res = await axiosPublic.get(`/contest/${id}`)
      return res.data
    }
  })
  const {_id,name,image,attempted,description,contestprice,deadline,prizemoney} = details
  return (
    <div>
      <div className="card card-compact bg-[#03425e] shadow-xl flex flex-row w-11/12 mx-auto my-20 rounded-e-lg">
        <img className="w-1/2 h-cover rounded-l-lg" src={image} alt="food" />
        <div className="card-body text-white">
          <h2 className="card-title font-bold text-3xl">{name}</h2>
          <p className="text-2xl font-semibold">{}</p>
          <p className="text-xl">participation: {attempted}</p>
          <p className="text-xl font-semibold">Price Money: $ {prizemoney}</p>
          <p className="text-lg font-semibold">Counter Price : $ {contestprice}</p>
          <p className="text-lg font-semibold">Dealine : {deadline}</p>
          <p className="text-base">{description}</p>
          <div className="card-actions justify-start mt-3">
            <button className="btn btn-white text-[#0776a6]">Registration</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;