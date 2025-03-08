import Container from "../container/Container";
import StepProcessCard from "./StepProcessCard";
import LineImgOne from "../../assets/images/line-01.png";
import LineImgTwo from "../../assets/images/line-02.png";
import giftIcon from "../../assets/images/gift.svg";
import uploadIcon from "../../assets/images/upload.svg";
import photoIcon from "../../assets/images/photo.svg";

function StepProcess() {
  return (
    <section className="py-[120px] custom-md:py-[80px] custom-sm:py-[60px] custom-xs:py-[60px] bg-[#fafafa]">
      <Container>
        <div>
          <h3 className="text-[64px] custom-2xl:text-[50px] custom-xl:text-[40px] custom-lg:text-[40px] custom-md:text-[34px] custom-sm:text-[30px] custom-xs:text-[26px] font-bold text-headingColor mb-[30px] custom-xs:mb-3 text-center">
            Three Step Process
          </h3>
        </div>
        <div>
          <div className="flex custom-2xl:flex-wrap custom-xl:flex-wrap custom-lg:flex-wrap max-md:flex-col max-md:items-center custom-lg:justify-start custom-2xl:gap-6 custom-xl:gap-6 justify-center custom-xl:justify-start -pl-3 -pr-3">
            <div className="step-wrapper mt-[30px]">
              <StepProcessCard
                line={LineImgOne}
                icon={photoIcon}
                iconBg="#1687C7"
                title="Capture Image"
                description="Capture raw footage of all the things you love to do."
              />
            </div>
            <div className="step-wrapper mt-[30px]">
              <StepProcessCard
                line={LineImgTwo}
                icon={uploadIcon}
                iconBg="#FF7701"
                title="Submit Photo"
                description="Upload your favorite photos, raw clips and edits."
              />
            </div>
            <div className="step-wrapper mt-[30px]">
              <StepProcessCard
                line={LineImgOne}
                icon={giftIcon}
                iconBg="#1687C7"
                title="Rewards"
                description="Get selected and get rewarded social media features."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default StepProcess;
