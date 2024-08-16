import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://shop-ease-server-amber.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
