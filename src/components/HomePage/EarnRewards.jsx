import { Link } from "react-router-dom";
import Container from "../container/Container";
import rewardImg from "../../assets/images/reward.png";

function EarnRewards({data}) {
  return (
    <section className="pt-[60px] custom-xs:pt-10 pb-[100px] custom-sm:pb-[70px] custom-xs:pb-[60px]">
      <Container>
        <div
          className="py-[150px] custom-2xl:py-[110px] custom-xl:py-[110px] max-md:py-[80px] custom-xs:!py-[50px] px-10 bg-rewardBg rounded-[32px] text-center relative bg-cover bg-no-repeat earn-reward-section z-[1] overflow-hidden"
          style={{ backgroundImage: `url(${import.meta.env.VITE_SERVER_URL}/${data?.background_image})` }}
        >
          <h3 className="text-[48px] max-md:text-[34px] custom-xs:!text-[26px] custom-sm:!text-[28px] font-bold text-white" data-aos="fade-up">
            {data?.title}
          </h3>
          <p
            className="text-base text-white mt-6 custom-xs:mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {data?.short_description}
          </p>
          <div data-aos="fade-up" data-aos-delay="150">
            <Link
              to={"/contest"}
              className="mt-6 inline-block text-base max-md:text-sm py-3 px-6 border-[2px] border-white rounded-[40px] duration-200 ease-in-out hover:bg-white hover:text-headingColor font-semibold text-white"
            >
              TAKE THE QUIZ
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default EarnRewards;
