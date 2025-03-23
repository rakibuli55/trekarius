import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/447570749591"
      className="fixed bottom-10 right-10 h-[60px] w-[60px] flex items-center justify-center bg-[#25d366] z-[100] rounded-full text-[30px] text-white shadow-[2px_2px_3px_#999]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsappButton;
