import Container from "../container/Container";
import bgImage from "../../assets/images/affliate-bg.jpg"


const AffiliateHeroSection = () => {
  return (
    <section className="pt-[250px] pb-[180px] custom-md:pt-[200px] custom-md:pb-[140px] custom-sm:pt-[180px] custom-sm:pb-[120px] custom-xs:pt-[140px] custom-xs:pb-[90px] bg-red-200 bg-cover bg-no-repeat relative z-[1] affliate-hero" style={{backgroundImage:`url(${bgImage})`}}>
     <Container>
        <div className="text-center text-white">
            <h1 className="text-[42px] custom-md:text-[38px] custom-sm:text-[30px] custom-xs:text-[28px] font-bold capitalize">Affiliate Program</h1>
            <p className="w-[50%] mx-auto text-[18px] font-medium mt-3 max-md:w-[90%] custom-sm:text-base custom-xs:text-base">The TREKARIUS Affiliate Program serves as our initiative to reward the dedicated users of our equipment who wish to promote our products among their friends and followers.</p>
        </div>
     </Container>
    </section>
  );
};

export default AffiliateHeroSection;