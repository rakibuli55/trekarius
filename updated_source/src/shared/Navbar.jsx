import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CommonButton from "../components/common/CommonButton";
import Container from "../components/container/Container";
import { IoMenuOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { GrClose } from "react-icons/gr";
import useAuth from "@/hooks/useAuth";
import UserProfile from "../components/common/UserProfile";
import useSiteSettings from "@/hooks/useSiteSettings";
import { CartContext } from "@/context";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Contest & Reward", link: "/contest" },
  { name: "Shop", link: "/shop" },
  { name: "Blog", link: "/blogs" },
  { name: "Become an Affiliate", link: "/affiliate" },
  { name: "Gallery", link: "/photo-gallery" },
  { name: "contact us", link: "/contact-us" },
];

function Navbar() {
  const { user } = useAuth();
  const {siteSettings} = useSiteSettings();
  const { cartItems } = useContext(CartContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const totalCartItems = cartItems?.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="py-4 custom-xs:py-3 bg-bodyColor fixed top-0 left-0 w-full z-50">
      <Container>
        <div className="flex items-center justify-between">
          {/* logo  */}
          <div data-aos="fade-in">
            <Link to={"/"}>
              <img
                className="w-[98px] h-[48px] custom-xs:w-[70px] custom-xs:h-[40px]"
                src={`${import.meta.env.VITE_SERVER_URL}/${siteSettings?.logo}`}
                alt="logo"
              />
            </Link>
          </div>
          {/* menu  */}
          <div className="max-xl:hidden">
            <ul className="flex items-center gap-6 2xl:gap-10">
              {menuItems.map((item, index) => (
                <li
                  key={item?.name}
                  data-aos="fade-in"
                  data-aos-delay={index * 100}
                >
                  <NavLink to={item?.link} className="menu-item capitalize">
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* header actions  */}
          <div className="flex items-center gap-3 max-xl:hidden">
            {/* actions  */}
            <ul className="flex items-center gap-3">
              <li data-aos="fade-in" data-aos-delay="100">
                <NavLink to={"/cart"} className="action-button relative">
                  <AiOutlineShoppingCart />
                  <p className="absolute h-4 w-4 text-[10px] flex items-center justify-center rounded-full border bg-primaryOrange text-white font-semibold top-[-5px] left-[0px]">{totalCartItems || 0}</p>
                </NavLink>
              </li>
              
            </ul>
            {/* buttons  */}
            {user ? (
              <UserProfile user={user} />
            ) : (
              <div className="flex items-center gap-3">
                <div data-aos="fade-in" data-aos-delay="350">
                  <Link to={"/login"}>
                    <CommonButton text="Login" type="fill" bgColor="#1687C7" />
                  </Link>
                </div>
                <div data-aos="fade-in" data-aos-delay="400">
                  <Link to={"/signup"}>
                    <CommonButton
                      text="Register"
                      type="border"
                      bgColor="#1687C7"
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* hamburger-menu  */}
          <div
            className="hidden max-xl:block text-primaryBlue text-[40px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <p className="text-[30px]">
                <GrClose />
              </p>
            ) : (
              <IoMenuOutline />
            )}
          </div>
        </div>
        {/* mobile menu  */}
        <div
          className={`hidden max-xl:block max-xl:w-[350px] custom-xs:!w-full max-xl:bg-white max-xl:h-full max-xl:fixed max-xl:top-0 max-xl:p-10 custom-xs:!pl-5 max-xl:z-[-1] shadow-lg duration-200 ease-in-out ${
            isMenuOpen ? "left-0" : "left-[-350px] custom-xs:left-[-100%]"
          }`}
        >
          <ul className="flex flex-col gap-4 mt-[70px]">
            {menuItems.map((item, index) => (
              <li
                key={item?.name}
                data-aos="fade-in"
                data-aos-delay={index * 100}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <NavLink to={item?.link} className="menu-item">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* header actions  */}
          <div className="flex flex-col gap-3 mt-10">
            {/* actions  */}
            <ul
              className="flex d items-center gap-3"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <li data-aos="fade-in" data-aos-delay="100">
                <NavLink to={"/cart"} className="action-button relative">
                  <AiOutlineShoppingCart />
                  <p className="absolute h-4 w-4 text-[10px] flex items-center justify-center rounded-full border bg-primaryOrange text-white font-semibold top-[-5px] left-[0px]">{totalCartItems || 0}</p>
                </NavLink>
              </li>
              
            </ul>
            {/* buttons  */}
            <div
              className="flex items-center gap-3 mt-5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div data-aos="fade-in" data-aos-delay="350">
                <Link to={"/login"}>
                  <CommonButton text="Login" type="fill" bgColor="#1687C7" />
                </Link>
              </div>
              <div data-aos="fade-in" data-aos-delay="400">
                <Link to={"/signup"}>
                  <CommonButton
                    text="Register"
                    type="border"
                    bgColor="#1687C7"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
