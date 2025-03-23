import Container from '../../components/container/Container';
import CommonButton from '../common/CommonButton';
import logo from '../../assets/images/treakaruis.png';
import { animateScroll as scroll, scroller } from "react-scroll";

function PreOrderSection({preorderData}) {


  const scrollToFeatureBackpack = () => {
    scroller.scrollTo("featureBackpack", {
      duration: 800,
      smooth: "easeInOutQuad",
      offset: 0,
    });
  };

  return (
    <section className="pt-[65px] custom-xs:pt-5">
      <Container>
        <div className="p-[87px] custom-md:p-[60px] custom-sm:p-[30px] custom-xs:p-5 bg-primaryOrange text-center rounded-[20px] relative z-[1] custom-xs:rounded-[16px] custom-xs:pb-7 overflow-hidden">
          <div className="max-md:relative max-md:h-[350px] max-md:w-[422px] custom-xs:!h-[280px] custom-sm:!w-full custom-xs:!w-full max-md:mx-auto max-md:mb-[30px] custom-xs:!mb-5">
            <img
              className="absolute top-0 right-0  custom-xs:right-[50px] bottom-0 h-full !w-full custom-lg:w-[330px] lg:w-[330px] xl:w-[330px] object-cover custom-sm:w-full custom-xs:w-full custom-xs:left-0 z-[-1] max-md:z-[1] lg:rounded-r-[20px] custom-lg:rounded-l-none lg:rounded-l-none rounded-[16px]"
              src={`${import.meta.env.VITE_SERVER_URL}/${preorderData?.file_url}`}
              alt=""
            />
          </div>
          <h3 className="w-[868px] max-md:w-full mx-auto text-[32px] font-bold text-white custom-xs:text-[18px]">
            {preorderData?.title}
          </h3>
          <button className="mt-6 inline-block"  onClick={scrollToFeatureBackpack}>
            <CommonButton text="Reserve your bag now" type="fill" bgColor="#1687C7" />
          </button>
        </div>
      </Container>
    </section>
  );
}

export default PreOrderSection;
