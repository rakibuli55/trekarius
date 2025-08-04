import { useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useApplyCupon = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [isManualLoading, setIsManualLoading] = useState(false);
  const {
    data: validCuponCodeData,
    isLoading
  } = useQuery({
    queryKey: ["validCuponCodeData"],
    enabled: false, 
    initialData: null,
  });

  const fetchValidCuponCode = async (code) => {
    setIsManualLoading(true);
    try {
      const response = await axiosSecure.get(`/coupon/${code}`);
      // Manually set the query data
      queryClient.setQueryData(["validCuponCodeData"], response.data);
      return response.data;
    } finally {
      setIsManualLoading(false);
    }
  };

  const resetValidCuponCode = () => {
    queryClient.setQueriesData(["validCuponCodeData"], null)
  }

  return { 
    validCuponCodeData, 
    validCuponCodeLoading: isManualLoading,
    fetchValidCuponCode,
    resetValidCuponCode 
  };
};

export default useApplyCupon;