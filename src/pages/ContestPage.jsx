import { api } from "@/api";
import HelmetComponent from "@/components/common/HelmetComponent";
import Loader from "@/components/common/Loader";
import FaqSection from "@/components/Contest/FaqSection";
import GalleryInfoSection from "@/components/Contest/GalleryInfoSection";
import HeroSection from "@/components/Contest/HeroSection";
import StepProcess from "@/components/Contest/StepProcess";
import { useQuery } from "@tanstack/react-query";

function ContestPage() {
  const { data: faqData, isLoading: faqLoading } = useQuery({
    queryKey: ["faq-data"],
    queryFn: async () => {
      const response = await api.get("/faq/all");
      return response?.data?.data;
    },
  });

  const { data: contestPageData, isLoading: contestLoading } = useQuery({
    queryKey: ["contestPageData"],
    queryFn: async () => {
      const response = await api.get("/contest/cms");
      return response?.data?.data;
    },
  });

  const {data:ContestRewardMetaData, isLoading:metaLoading} = useQuery({
    queryKey:["ContestRewardMetaData"],
    queryFn: async () => {
      const response = await api.get('/seo/page/content?page=contest_reward');
      return response?.data?.data;
    }
  })

  if (contestLoading) {
    return <Loader />;
  }
  return (
    <div className="overflow-x-hidden">
      <HelmetComponent item={ContestRewardMetaData} />
      <HeroSection data={contestPageData?.photo_contest_header} />
      <StepProcess />
      <GalleryInfoSection data={contestPageData} />
      <FaqSection data={faqData} />
    </div>
  );
}

export default ContestPage;
