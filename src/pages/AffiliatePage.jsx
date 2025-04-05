import AffiliateHeroSection from "@/components/AffiliatePage/AffiliateHeroSection";
import HowToApply from "@/components/AffiliatePage/HowToApply";
import PayoutsSection from "@/components/AffiliatePage/PayoutsSection";
import PerksSection from "@/components/AffiliatePage/PerksSection";
import WhoWeArePage from "@/components/AffiliatePage/WhoWeArePage";
import WhyUsSection from "@/components/AffiliatePage/WhyUsSection";
import WhatsappButton from "@/components/common/WhatsappButton";

const AffiliatePage = () => {
  return (
    <>
      <AffiliateHeroSection />
      <WhoWeArePage />
      <PerksSection />
      <PayoutsSection />
      <WhyUsSection />
      <HowToApply />
      <WhatsappButton />
    </>
  );
};

export default AffiliatePage;
