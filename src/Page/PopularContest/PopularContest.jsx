import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useaxiosPublic from "../../Hooks/useaxiosPublic";
import ContestCard from "../AllContest/ContestCard";
import Loading from "../Loading/Loading";

const PopularContest = () => {

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState('');

  const axiosPublic = useaxiosPublic();
  const { data: contest = [], isPending: loading } = useQuery({
    queryKey: ["contest",tags],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/contest?sortField=attempted&sortOrder=desc&tags=${tags}`
      );
      return res.data;
    },
  });
  const contests = contest?.result

  return (
    <>
    {loading ? <Loading></Loading>:
    <div className=" mx-auto">
      <div className="flex justify-center items-center">
        <img src="./bgShape1.webp" className="h-20 lg:w-6/12 md:w-8/12 opacity-50" alt="" />
        <div className="absolute w-10/12 md:w-6/12 join flex justify-center mx-auto">
          <input onChange={(e) =>setSearch(e.target.value)} className="input input-bordered join-item w-96 border-[#0776a6]" placeholder="Find Your Contest"/>
          <button onClick={()=>setTags(search)} className="btn join-item bg-[#0776a6] text-white">Search</button>
       </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 w-10/12 md:w-11/12 mx-auto my-10">
        {contests.slice(0, 6).map((item) => <ContestCard key={item?._id} item={item}></ContestCard>)}
      </div>
    </div>}
    </>
  );
};

export default PopularContest;
