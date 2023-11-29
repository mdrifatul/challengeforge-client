import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSubmit = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();


  const {data :submited=[],refetch} = useQuery({
    queryKey: ['submited'], 
    queryFn: async() =>{
        const res = await axiosSecure.get(`/submitted/${user?.email}`);
        return res.data;
    }
  })

  return [submited, refetch]
};

export default useSubmit;