import { api } from "@/api";
import AffiliateHeroSection from "@/components/AffiliatePage/AffiliateHeroSection";
import HowToApply from "@/components/AffiliatePage/HowToApply";
import PayoutsSection from "@/components/AffiliatePage/PayoutsSection";
import PerksSection from "@/components/AffiliatePage/PerksSection";
import WhoWeArePage from "@/components/AffiliatePage/WhoWeArePage";
import WhyUsSection from "@/components/AffiliatePage/WhyUsSection";
import HelmetComponent from "@/components/common/HelmetComponent";
import WhatsappButton from "@/components/common/WhatsappButton";
import { useQuery } from "@tanstack/react-query";

const AffiliatePage = () => {
  const { data: affiliateCmsData, isLoading } = useQuery({
    queryKey: ["affiliateCmsData"],
    queryFn: async () => {
      const res = api.get("/affiliate/cms");
      return (await res).data.data;
    },
  });
  const {data:AffiliateMetaData, isLoading:metaLoading} = useQuery({
    queryKey:["AffiliateMetaData"],
    queryFn: async () => {
      const response = await api.get('/seo/page/content?page=affiliate_program');
      return response?.data?.data;
    }
  })

  return (
    <>
      <HelmetComponent item={AffiliateMetaData} />
      <AffiliateHeroSection data={affiliateCmsData?.affiliate_banner} />
      <WhoWeArePage data={affiliateCmsData?.affiliate_who_are_we} />
      <PerksSection data={affiliateCmsData?.affiliate_the_perks} />
      <PayoutsSection data={affiliateCmsData?.affiliate_the_payouts} />
      <WhyUsSection data={affiliateCmsData?.affiliate_why_us} />
      <HowToApply data={affiliateCmsData?.affiliate_how_to_apply} />
      <WhatsappButton />
    </>
  );
};

export default AffiliatePage;
