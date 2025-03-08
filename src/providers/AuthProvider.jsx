import { AuthContext } from "@/context";
import { useEffect, useState } from "react";
import useGetUser from "@/hooks/useGetUser";
import useLogout from "@/hooks/useLogout";
import Loader from "@/components/common/Loader";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("authToken") || null
  );

  const { userData, userLoading } = useGetUser();
  const { logOut, isLoading: logoutLoading } = useLogout();

  useEffect(() => {
    if (userData) {
      setUser(userData);
    }
  }, [userData]);

  if (userLoading) {
    return (
      <Loader />
    );
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authToken,
        setAuthToken,
        userData,
        userLoading,
        logOut,
        logoutLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
