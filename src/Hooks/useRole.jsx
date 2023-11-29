import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const {data: role, isLoading} = useQuery({
    // enabled: !loading && !!user?.email,
    queryKey: ['role'],
    queryFn: async() => {
      const res = await axiosSecure.get(`/users/${user?.email}`)
      return res.data
    }
  })
  
  
  return [role, isLoading]
};

export default useRole;