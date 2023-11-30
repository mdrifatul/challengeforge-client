import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useaxiosPublic from "./useaxiosPublic";

const useContest = () => {
  const axiosPublic = useaxiosPublic();
  const [page, setPage] = useState(1)
  const limit = 10;


  const {data: contest = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['contestAll'], 
    queryFn: async() =>{
        const res = await axiosPublic.get(`/contest?page=${page}&limit=${limit}`);
        return res.data
    }
})
  return [contest, loading, refetch,page,limit,setPage]
};

export default useContest;