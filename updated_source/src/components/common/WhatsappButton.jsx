import { SiteSettingsContext } from "@/context";
import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const {siteSettings} = useContext(SiteSettingsContext)
  return (
    <a
      href={`https://wa.me/${siteSettings?.phone}`}
      className="fixed bottom-10 right-10 custom-xs:bottom-5 custom-xs:right-5 h-[60px] w-[60px] custom-xs:w-[50px] custom-xs:h-[50px] custom-xs:text-[26px] flex items-center justify-center bg-[#25d366] z-[100] rounded-full text-[30px] text-white shadow-[2px_2px_3px_#999]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappButton;
