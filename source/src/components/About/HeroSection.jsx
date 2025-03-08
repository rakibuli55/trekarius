import Container from "../container/Container";

function HeroSection({ data }) {
  return (
    <section className="mt-[90px]">
      <Container>
        <div
          className="bg-cover bg-no-repeat bg-center py-[260px] custom-md:py-[180px] custom-sm:py-[140px] custom-xs:py-[120px] text-center rounded-[16px]"
          style={{
            backgroundImage: `url(${import.meta.env.VITE_SERVER_URL}/${
              data?.file_url
            })`,
          }}
          data-aos="fade-in"
        >
          <h1
            className="text-[56px] custom-md:text-[40px] custom-sm:text-[34px] custom-xs:text-[30px] font-bold text-white"
            data-aos="fade-up"
          >
            {data?.title}
          </h1>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
