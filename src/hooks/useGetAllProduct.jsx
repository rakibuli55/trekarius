import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetAllProduct = () => {
  const { data: allProducts, isLoading: allProductsLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const response = await api.get("/product/all");
      return response.data;
    },
  });

  return { allProducts, allProductsLoading };
};

export default useGetAllProduct;