import { Link } from "react-router-dom";
import CommonButton from "../common/CommonButton";

const HowToApply = () => {
  return (
    <section className="py-[100px] max-md:py-[60px] bg-[rgba(22,135,199,0.05)] custom-xs:!py-12">
      <div className="w-[80%] mx-auto text-center max-md:w-full">
        <h3 className="text-[34px] max-md:text-[28px] custom-xs:!text-[24px] capitalize font-bold text-headingColor">
          How to apply
        </h3>
        <p className="mt-5 text-[18px] w-[70%] mx-auto custom-xs:text-base custom-xs:w-[95%]">
          If you have reviewed our criteria and feel that you meet the
          qualifications, we encourage you to apply to join the program on
          (————). You can expect to receive a decision regarding your
          application—either approval or denial—within one week.{" "}
        </p>
        <Link to={"/"} className="inline-block mt-10 custom-xs:mt-7">
          <CommonButton text="Register here" type="fill" bgColor="#1687C7" />
        </Link>
      </div>
    </section>
  );
};

export default HowToApply;
