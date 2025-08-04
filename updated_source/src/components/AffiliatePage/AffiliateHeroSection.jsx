import Container from "../container/Container";


const AffiliateHeroSection = ({data}) => {
  return (
    <section className="pt-[250px] pb-[180px] custom-md:pt-[200px] custom-md:pb-[140px] custom-sm:pt-[180px] custom-sm:pb-[120px] custom-xs:pt-[140px] custom-xs:pb-[90px] bg-cover bg-no-repeat relative z-[1] affliate-hero" style={{backgroundImage:`url(${import.meta.env.VITE_SERVER_URL}/${data?.file_url})`}}>
     <Container>
        <div className="text-center text-white">
            <h1 className="text-[42px] custom-md:text-[38px] custom-sm:text-[30px] custom-xs:text-[28px] font-bold capitalize">{data?.title}</h1>
            <p className="w-[50%] mx-auto text-[18px] font-medium mt-3 max-md:w-[90%] custom-sm:text-base custom-xs:text-base">{data?.description}</p>
        </div>
     </Container>
    </section>
  );
};

export default AffiliateHeroSection;