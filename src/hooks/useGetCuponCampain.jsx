import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";

const useGetCuponCampain = () => {
  const { data: cuponCodeCampainData, isLoading } = useQuery({
    queryKey: ["cupon-code-data"],
    queryFn: async () => {
      const response = await api.get("/coupon");
      return response.data;
    },
  });

  return { cuponCodeCampainData, isLoading };
};

export default useGetCuponCampain;
