import { api } from "@/api";
import { useMutation } from "@tanstack/react-query";

const getCode = async (userData) => {
  const response = await api.post("/coupon/subscribe", userData);
  return response.data;
};

const useGetDiscountCode = () => {
  return useMutation({
    mutationKey: ["discountCode"],
    mutationFn: getCode,
  });
};

export default useGetDiscountCode;
