import { api } from "@/api";
import WhatsappButton from "@/components/common/WhatsappButton";
import SocialIcon from "@/components/footer/SocialIcon";
import { useQuery } from "@tanstack/react-query";
import { CiClock2 } from "react-icons/ci";

const ContactPage = () => {
  const { data: socialIconsData, isLoading: socialIconLoading } = useQuery({
    queryKey: ["socialIcons"],
    queryFn: async () => {
      const response = await api.get("/social-links");
      return response?.data?.data;
    },
  });

  return (
    <section className="min-h-[90vh] pb-[120px]">
      <div>
        <h1 className="text-[42px] text-headingColor text-center font-bold pt-[200px] pb-[120px] bg-[#f6f6f6]">
          Contact Us
        </h1>

        <div className="flex items-center justify-center mt-20">
          <div className="pr-10 border-r">
            <h2 className="text-[18px] font-semibold">CALL 📞 US</h2>
            <p className="flex items-center gap-1 mt-5 text-headingColor font-medium">
              WHATSAPP
              <a
                href="tel:+447570749591"
                className="hover:text-primaryBlue duration-100 ease-in-out"
              >
                +447570749591
              </a>
            </p>
            <p className="flex items-center gap-1 text-headingColor font-medium mt-2">
              EMAIL
              <a
                href="tel:+447570749591"
                className="hover:text-primaryBlue duration-100 ease-in-out"
              >
                info@trekarius.com
              </a>
            </p>
          </div>
          <div className="pl-10">
            <h2 className="text-[18px] font-semibold flex items-center gap-1">
              Operating Hours
              <span className="text-[22px]">
                <CiClock2 />
              </span>{" "}
              and Weekends
            </h2>
            <p className="text-headingColor font-medium mt-5">
              Weekdays: 8AM TO 5PM (GMT)
            </p>
            <p className="text-headingColor font-medium mt-2">
              Weekends: 8AM to 3PM (GMT)
            </p>
            <p className="text-headingColor font-medium mt-2">
              Operating hours 8AM - 5PM (GMT)
            </p>
          </div>
        </div>
        <p className="text-[18px] font-medium text-center mt-20 w-[900px] mx-auto">
          Or Contact us via your preferred social media platforms. Our
          representatives are available to assist and address inquiries on
          weekdays from 8AM to 5PM (GMT).
        </p>
        <div className="max-md:mt-6 flex items-center justify-center mt-10">
          <SocialIcon socialIconsData={socialIconsData} type="contact" />
        </div>
        <WhatsappButton />
      </div>
    </section>
  );
};

export default ContactPage;
