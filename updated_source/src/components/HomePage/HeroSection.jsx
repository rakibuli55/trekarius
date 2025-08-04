import Container from '../container/Container';
import { Link } from 'react-router-dom';
import { BannerLogoSvg } from '../SvgContainer/SvgContainer';

function HeroSection({ homePageData }) {
  return (
    <section className="mt-[90px] custom-xs:mt-[70px] ">
      <Container>
        <div
          className="bg-cover bg-center bg-no-repeat pt-[200px] pb-[230px] custom-xl:py-[170px] max-xl:py-[160px] custom-md:!py-[140px] custom-sm:!py-[100px] px-10 rounded-[32px] custom-sm:rounded-[20px] custom-xs:rounded-[12px]  custom-xs:px-5 custom-xs:!py-[55px] relative"
          style={{
            backgroundImage: `url('${import.meta.env.VITE_SERVER_URL}/${
              homePageData?.background_image
            }')`,
          }}
        >
          <div className="text-center">
            <h1
              className="text-[80px] custom-2xl:text-[60px] custom-xl:text-[60px] max-xl:text-[50px] custom-md:!text-[40px] custom-sm:!text-[30px] custom-xs:!text-[28px] custom-xs:leading-normal font-bold text-white w-[1166px] mx-auto custom-xl:w-[90%] custom-lg:w-full max-md:w-full"
              data-aos="fade-up"
            >
              {homePageData?.title}
            </h1>
            <p
              className="text--sm custom-2xl:text-[20px] max-xl:text-[20px] max-xl:mt-5 max-md:text-[18px] text-white mt-6 custom-xs:!text-base custom-xs:font-medium custom-xs:!leading-[28px] custom-xs:!mt-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {homePageData?.sub_title}
            </p>

            <div data-aos="fade-up" data-aos-delay="150">
              <Link
                to={"/shop"}
                className="mt-6 inline-block py-4 px-6 custom-xs:py-2 custom-xs:px-4 custom-xs:text-sm bg-white font-bold text-headingColor rounded-[8px] duration-200 ease-in-out border-[2px] border-white hover:bg-transparent hover:text-white"
              >
                {homePageData?.button_text}
              </Link>
            </div>
          </div>

          {/* logo */}
          <div className="absolute custom-xs:right-2 custom-xs:bottom-2 custom-sm:right-3 custom-sm:bottom-3 custom-md:right-5 custom-md:bottom-5 md:right-5 md:bottom-5">
            <BannerLogoSvg />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
