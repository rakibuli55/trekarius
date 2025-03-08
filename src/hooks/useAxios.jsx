import { useEffect } from "react";
import useAuth from "./useAuth";
import { api } from "@/api";
import { removeToken } from "@/auth/authService";

function useAxios() {
  const { authToken, setAuthToken, setUser } = useAuth();

  useEffect(() => {
    if (!authToken) {
      console.warn("Auth token is not available yet.");
      return;
    }

    console.log("Token available:", authToken);

    const requestIntercept = api.interceptors.request.use(
      (config) => {
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.status === 401) {
          setUser(null);
          setAuthToken(null);
          removeToken();
        }
        return Promise.reject(error);
      }
    );
    // Cleanup interceptors on unmount
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [authToken, setAuthToken, setUser]);

  return api;
}

export default useAxios;
