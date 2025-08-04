import useAxiosSecure from "./useAxiosSecure";
import { removeToken } from "@/auth/authService";
import { useState } from "react";
import toast from "react-hot-toast";

function useLogout() {
  const axiosSecure = useAxiosSecure();

  const [isLoading, setIsLoading] = useState(false);

  const logOut = async () => {
    setIsLoading(true);
    const loadingToast = toast.loading("Logging Out...");
    try {
      const response = await axiosSecure.post("/users/logout");
      if (response.data.success) {
        localStorage.removeItem("cart")
        removeToken();
        toast.success(`${response?.data?.message}`, { id: loadingToast });
        window.location.href = "/login";
      } else {
        console.error("Logout failed:", response.data.message);
      }
    } catch (error) {
      console.error("Logout error:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { logOut, isLoading };
}

export default useLogout;
