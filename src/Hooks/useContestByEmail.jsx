import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useaxiosPublic from "./useaxiosPublic";

const useContestByEmail = () => {
  const axiosPublic = useaxiosPublic();
  const {user} = useAuth();

  const {data: contest = [], isLoading: loading, refetch} = useQuery({
    queryKey: ['contest'], 
    queryFn: async() =>{
        const res = await axiosPublic.get(`/contest?email=${user?.email}`);
        return res.data;
    }
})
  return [contest, loading, refetch]
};

export default useContestByEmail;