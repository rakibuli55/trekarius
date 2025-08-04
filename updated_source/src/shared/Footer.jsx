import { Link } from "react-router-dom";
import Container from "../components/container/Container";
import Logo from "../assets/images/logo/logo-footer.svg";
import SocialIcon from "../components/footer/SocialIcon";
import useSiteSettings from "@/hooks/useSiteSettings";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";

const menuItems = [
  { name: "Home", link: "/home" },
  { name: "About Us", link: "/about-us" },
];

function Footer() {
  const { siteSettings } = useSiteSettings();

  const { data: pages, isLoading: pagesLoading } = useQuery({
    queryKey: ["dynamicPages"],
    queryFn: async () => {
      const response = await api.get("/dynamic-pages");
      return response?.data?.data;
    },
  });
  const { data: socialIconsData, isLoading: socialIconLoading } = useQuery({
    queryKey: ["socialIcons"],
    queryFn: async () => {
      const response = await api.get("/social-links");
      return response?.data?.data;
    },
  });

  return (
    <footer className="bg-footerBg pt-[60px] px-5 custom-sm:px-0">
      <Container>
        <div className="flex items-center justify-between max-md:flex-col">
          {/* footer logo  */}
          <div className="max-md:mb-6" data-aos="fade-in">
            <Link to={"/"}>
              <img className="w-[98px] h-[48px]" src={Logo} alt="logo" />
            </Link>
          </div>
          {/* footer menu  */}
          <div>
            <ul className="flex custom-sm:flex-wrap custom-sm:gap-5 custom-xs:justify-center custom-xs:flex-wrap custom-xs:gap-5 custom-sm:justify-center items-center gap-8 max-md:gap-4 custom-xl:gap-4 custom-lg:gap-2">
              {menuItems.map((item, index) => (
                <li
                  key={item?.name}
                  data-aos="fade-in"
                  data-aos-delay={index * 100}
                >
                  <Link
                    to={item?.link}
                    className="menu-item menu-item-footer max-md:text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {pages?.map((item, index) => (
                <li
                  key={item?.page_title}
                  data-aos="fade-in"
                  data-aos-delay={index * 100}
                >
                  <Link
                    to={item?.page_slug}
                    className="menu-item menu-item-footer max-md:text-sm"
                  >
                    {item?.page_title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* footer social  */}
          <div className="max-md:mt-6">
            <SocialIcon socialIconsData={socialIconsData} />
          </div>
        </div>
      </Container>
      {/* copyright  */}
      <div className="py-8 mt-[60px] border-t border-[rgba(255,255,255,0.2)] text-center text-white capitalize custom-xs:text-sm">
        {siteSettings?.copyright_text}
      </div>
    </footer>
  );
}

export default Footer;
