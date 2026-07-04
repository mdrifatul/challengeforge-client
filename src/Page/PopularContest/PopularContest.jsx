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
    <div className="w-full max-w-7xl mx-auto px-4 my-16">
      <div className="flex flex-col justify-center items-center gap-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">Explore <span className="text-[#0776a6]">Popular Contests</span></h2>
        <p className="text-gray-500 max-w-2xl text-lg">Discover the most attempted challenges and join the competition to prove your skills.</p>
        <div className="join w-full max-w-md shadow-md rounded-lg mt-4">
          <input onChange={(e) =>setSearch(e.target.value)} className="input input-bordered join-item w-full bg-gray-50 focus:outline-none focus:border-[#0776a6]" placeholder="Find Your Contest"/>
          <button onClick={()=>setTags(search)} className="btn join-item bg-[#0776a6] hover:bg-[#055b82] text-white border-none px-8">Search</button>
       </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {contests?.slice(0, 6).map((item) => <ContestCard key={item?._id} item={item}></ContestCard>)}
      </div>
    </div>}
    </>
  );
};

export default PopularContest;
