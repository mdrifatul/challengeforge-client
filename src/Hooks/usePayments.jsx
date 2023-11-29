
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
const usePayments = () => {
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth();

  const {data: payments=[],isLoading:loading, refetch} = useQuery({
    queryKey: ['payments'], 
    queryFn: async() =>{
        const res = await axiosSecure.get(`/payments/${user?.email}`);
        return res.data
    }
  })
  
  return [payments,loading, refetch]
};

export default usePayments;