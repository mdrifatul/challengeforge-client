import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: 'http://localhost:5000'
  baseURL: 'https://challengeforge-server.vercel.app'
})

const useaxiosPublic = () => {
  return axiosPublic
};

export default useaxiosPublic;