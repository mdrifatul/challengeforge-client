import axios from "axios";


const axiosPublic = axios.create({
  // baseURL: 'https://challengeforge-server.vercel.app'
  baseURL: 'http://localhost:5000'
})

const useaxiosPublic = () => {
  return axiosPublic
};

export default useaxiosPublic;