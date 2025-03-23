import { api } from "@/api";
import Commitment from "@/components/About/Commitment";
import HeroSection from "@/components/About/HeroSection";
import MissionStatement from "@/components/About/MissionStatement";
import HelmetComponent from "@/components/common/HelmetComponent";
import Loader from "@/components/common/Loader";
import WhatsappButton from "@/components/common/WhatsappButton";
import { useQuery } from "@tanstack/react-query";

function AboutPage() {
  const { data: aboutPageData, isLoading } = useQuery({
    queryKey: ["about-data"],
    queryFn: async () => {
      const response = await api.get("/about/cms");
      return response?.data?.data;
    },
  });

  const { data: homePageData, isLoading: homeLoading } = useQuery({
    queryKey: ["aboutHomePageData"],
    queryFn: async () => {
      const response = await api.get("/home/cms");
      return response?.data?.data;
    },
  });

  const {data:aboutMetaData, isLoading:metaLoading} = useQuery({
    queryKey:["aboutMetaData"],
    queryFn: async () => {
      const response = await api.get('/seo/page/content?page=about_us');
      return response?.data?.data;
    }
  })

  if(isLoading) {
    return <Loader />
  }

    return (
      <div className="overflow-x-hidden">
        <HelmetComponent item={aboutMetaData} />
        <HeroSection data={aboutPageData?.our_mission_section} />
        <Commitment data={aboutPageData?.core_value_section} />
        <MissionStatement data={aboutPageData} rewardData={homePageData?.home_earn_rewards} />
        <WhatsappButton />
      </div>
    );
}

export default AboutPage;
