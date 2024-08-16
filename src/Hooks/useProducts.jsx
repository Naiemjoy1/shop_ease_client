import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useProducts = (page = 0, size = 10) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: productsData = {},
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["products", page, size],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products?page=${page}&size=${size}`);
      return res.data;
    },
  });

  const { totalProducts = 0, products = [] } = productsData;

  return [products, totalProducts, loading, refetch];
};

export default useProducts;
