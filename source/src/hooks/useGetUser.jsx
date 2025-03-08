import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useGetUser = () => {
  const user_token = localStorage.getItem("authToken");

  const axiosSecure = useAxiosSecure();
  const { data: userData, isLoading: userLoading } = useQuery({
    queryKey: ["user-data", user_token],
    queryFn: async () => {
      if (user_token) {
        const res = await axiosSecure.get("/users/data");

        return res.data.data;
      } else {
        return null;
      }
    },
  });

  return { userData, userLoading };
};

export default useGetUser;
