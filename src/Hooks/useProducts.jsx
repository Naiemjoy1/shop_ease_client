import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: products = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });

  return [products, loading, refetch];
};

export default useProducts;
