import { api } from "@/api";
import WhatsappButton from "@/components/common/WhatsappButton";
import SocialIcon from "@/components/footer/SocialIcon";
import { SiteSettingsContext } from "@/context";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { CiClock2 } from "react-icons/ci";
import DOMPurify from 'dompurify';
import HelmetComponent from "@/components/common/HelmetComponent";

const ContactPage = () => {

  const {siteSettings} = useContext(SiteSettingsContext);

  const { data: socialIconsData, isLoading: socialIconLoading } = useQuery({
    queryKey: ["socialIcons"],
    queryFn: async () => {
      const response = await api.get("/social-links");
      return response?.data?.data;
    }, 
  });

  const {data:contactMetaData, isLoading:metaLoading} = useQuery({
    queryKey:["contactMetaData"],
    queryFn: async () => {
      const response = await api.get('/seo/page/content?page=contact');
      return response?.data?.data;
    }
  })

  return (
    <section className="min-h-[90vh] pb-[120px] max-md:min-h-full custom-xs:pb-20">
      <HelmetComponent item={contactMetaData}/>
      <div>
        <h1 className="text-[42px] text-headingColor text-center font-bold pt-[200px] pb-[120px] bg-[#f6f6f6] custom-sm:text-[28px] custom-sm:pt-[170px] custom-sm:pb-[90px] custom-xs:text-[24px] custom-xs:pt-[150px] custom-xs:pb-[90px]">
          Contact Us
        </h1>

        <div className="flex items-center justify-center mt-20  custom-xs:mt-14 ccustom-sm:flex-col custom-xs:flex-col custom-sm:justify-start custom-sm:items-start custom-sm:pl-10 custom-xs:justify-start custom-xs:items-start custom-xs:pl-10">
          <div className="pr-10 border-r custom-sm:pr-0 custom-sm:border-0 custom-xs:border-0">
            <h2 className="text-[18px] font-semibold custom-xs:text-base">CALL 📞 US</h2>
            <p className="flex items-center gap-1 mt-5 text-headingColor font-medium">
              WHATSAPP
              <a
                href="tel:+447570749591"
                className="hover:text-primaryBlue duration-100 ease-in-out"
              >
                {siteSettings?.phone}
              </a>
            </p>
            <p className="flex items-center gap-1 text-headingColor font-medium mt-2">
              EMAIL
              <a
                href="tel:+447570749591"
                className="hover:text-primaryBlue duration-100 ease-in-out"
              >
                {siteSettings?.email}
              </a>
            </p>
          </div>
          <div className="pl-10 custom-sm:pl-0 custom-sm:pt-5 custom-xs:pl-0">
            <h2 className="text-[18px] custom-xs:text-base custom-xs:pt-7 font-semibold flex items-center gap-1">
              Operating Hours
              <span className="text-[22px] custom-xs:text-[18px]">
                <CiClock2 />
              </span>{" "}
              and Weekends
            </h2>
            <div className="common-html-box text-headingColor font-medium" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(siteSettings?.operating_hours)}}></div>
          </div>
        </div>
        <div className="common-html-box text-[18px] font-medium text-center mt-20 custom-xs:mt-10 w-[900px] max-md:w-[90%] mx-auto custom-md:text-base custom-xs:text-base custom-sm:text-base" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(siteSettings?.description)}}>
        </div>
        <div className="max-md:mt-6 flex items-center justify-center mt-10">
          <SocialIcon socialIconsData={socialIconsData} type="contact" />
        </div>
        <WhatsappButton />
      </div>
    </section>
  );
};

export default ContactPage;
