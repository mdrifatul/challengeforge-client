import axios from "axios";
import { useNavigate } from 'react-router-dom';
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  // baseURL: 'http://localhost:5000'
  baseURL: 'https://challengeforge-server.vercel.app'
})

const useAxiosSecure = () => {
  const {logOut} = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(function (config){
    const token = localStorage.getItem('access-token')
    config.headers.authorization = `Bearar ${token}`
    return config
  },function (error) {
    return Promise.reject(error);
  })

  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    const status = error.response?.status;
    if(status  === 401 || status === 403) {
      logOut();
      navigate('/login')
    }
    return Promise.reject(error);
  });
  
  return axiosSecure 
};

export default useAxiosSecure;