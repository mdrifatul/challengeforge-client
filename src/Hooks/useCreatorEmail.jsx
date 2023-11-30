import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCreatorEmail = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();


  const {data :submitedCreator=[],refetch,isLoading:loading} = useQuery({
    queryKey: ['submitedCreator'], 
    queryFn: async() =>{
        const res = await axiosSecure.get(`/submitted/${user?.email}`);
        return res.data;
    }
  })

  return [submitedCreator, refetch,loading]
};

export default useCreatorEmail;