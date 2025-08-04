import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { Link } from "react-router-dom";
import dummyAvatar from "../../assets/images/dummyUser.png";

function UserProfile({ user }) {
  const [isShow, setIsShow] = useState(false);
  const { setUser } = useAuth();

  const handleUserProfile = () => {
    setIsShow(!isShow);
  };

  const { logOut, logoutLoading } = useAuth();

  const handleLogout = () => {
    setIsShow(!isShow);
    logOut();
    logoutLoading && setUser(null);
  };

  const userAvatar = user?.avatar
    ? `${import.meta.env.VITE_SERVER_URL}/${user?.avatar}`
    : dummyAvatar;

  return (
    <div className="relative cursor-pointer">
      <div
        className="h-[55px] w-[55px] rounded-full overflow-hidden"
        onClick={handleUserProfile}
      >
        <img
          className="h-full w-full object-cover"
          src={userAvatar}
          alt="uservatar"
        />
      </div>
      <ul
        className={`${
          isShow ? "opacity-100 visible top-[65px]" : "opacity-0 invisible"
        } user-profile-dropdown absolute bg-white w-[200px] right-0 px-2 py-5 pt-3 rounded-[12px] border border-borderColor`}
      >
        <li onClick={handleUserProfile}>
          <Link to={"/account"}>Account</Link>
        </li>
        <li onClick={handleLogout}>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;
