import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import CommonButton from "../common/CommonButton";

const HowToApply = ({ data }) => {
  return (
    <section className="py-[100px] max-md:py-[60px] bg-[rgba(22,135,199,0.05)] custom-xs:!py-12">
      <div className="w-[80%] mx-auto text-center max-md:w-full">
        <h3 className="text-[34px] max-md:text-[28px] custom-xs:!text-[24px] capitalize font-bold text-headingColor">
          {data?.title}
        </h3>
        <p
          className="common-html-box mt-5 text-[18px] w-[70%] mx-auto custom-xs:text-base custom-xs:w-[95%]"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.description),
          }}
        ></p>
        <Link to={`${data?.button_link}`} className="inline-block mt-10 custom-xs:mt-7">
          <CommonButton text={data?.button_text} type="fill" bgColor="#1687C7" />
        </Link>
      </div>
    </section>
  );
};

export default HowToApply;
