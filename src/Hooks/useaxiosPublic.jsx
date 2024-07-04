import axios from "axios";


const axiosPublic = axios.create({
  // baseURL: 'https://challengeforge-server.vercel.app'
  baseURL: 'https://challengeforge-server.vercel.app'
})

const useaxiosPublic = () => {
  return axiosPublic
};

export default useaxiosPublic;