import { api } from "@/api";
import HelmetComponent from "@/components/common/HelmetComponent";
import Loader from "@/components/common/Loader";
import EarnRewards from "@/components/HomePage/EarnRewards";
import LatestBlogs from "@/components/HomePage/LatestBlogs";
import PreOrderSection from "@/components/HomePage/PreOrderSection";
import { useQuery } from "@tanstack/react-query";
import { Element } from "react-scroll";
import FeatheredBackpaks from "../components/HomePage/FeatheredBackpaks";
import HeroSection from "../components/HomePage/HeroSection";
import VideoSection from "../components/HomePage/VideoSection";

function HomePage() {
  const { data: homePageData, isLoading: homeLoading } = useQuery({
    queryKey: ["homePageData"],
    queryFn: async () => {
      const response = await api.get("/home/cms");
      return response?.data?.data;
    },
  });

  const {data:homeMetaData, isLoading:metaLoading} = useQuery({
    queryKey:["homeMetaData"],
    queryFn: async () => {
      const response = await api.get('/seo/page/content?page=home');
      return response?.data?.data;
    }
  })

  if (homeLoading) {
    return <Loader />;
  }
  console.log(homePageData);

  return (
    <>
      <HelmetComponent item={homeMetaData}/>
      <HeroSection homePageData={homePageData?.home_banner_section} />
      <PreOrderSection preorderData={homePageData?.pre_order_banner} />
      <Element name="featureBackpack">
        <FeatheredBackpaks />
      </Element>
      <VideoSection videoData={homePageData?.home_video_section} />
      {/* <NewArrivals /> */}
      {/* <PricingSection /> */}
      <LatestBlogs />
      <EarnRewards data={homePageData?.home_earn_rewards} />
      {/* <CryptoSection /> */}
    </>
  );
}

export default HomePage;
