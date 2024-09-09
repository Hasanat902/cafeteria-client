import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://cafeteria-server-dun.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
