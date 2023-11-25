import { useQuery } from "@tanstack/react-query";
import useaxiosPublic from "./useaxiosPublic";

const useContest = () => {
  const axiosPublic = useaxiosPublic();

  const {data: contest = [], isPending: loading, refetch} = useQuery({
    queryKey: ['menu'], 
    queryFn: async() =>{
        const res = await axiosPublic.get('/contest');
        return res.data;
    }
})
  return [contest, loading, refetch]
};

export default useContest;