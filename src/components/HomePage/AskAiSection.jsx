import Container from "../container/Container";
import { useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

function AskAiSection() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="pb-[65px]">
      <Container>
        <div className="p-[65px] max-md:p-[30px] bg-primaryBlue rounded-[20px] custom-xs:!p-5">
          <h3 className="text-[32px] custom-md:text-[26px] font-bold text-white text-center custom-xs:text-[20px]">
            We got you covered, plan your trip now!
          </h3>
          <form
            className="hero-form flex custom-sm:flex-col custom-xs:flex-col items-center gap-5 custom-xs:gap-4 mt-8 custom-xs:mt-5 w-[760px] max-md:w-full mx-auto"
            data-aos="fade-up"
            data-aos-delay="150"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative w-[82%] max-md:w-[79.5%] custom-sm:!w-full custom-xs:!w-full">
              <input
                className="w-full py-3 custom-xs:py-3 custom-xs:rounded-[8px] custom-xs:text-sm px-[44px] custom-xs:pr-5 bg-white rounded-[12px] text-base text-headingColor focus:outline-none"
                type="text"
                name="search"
                placeholder="Search where you want to go, ask ai"
                {...register("search")}
              />
              <p className="absolute top-1/2 translate-y-[-50%] left-4 text-paragraphColor text-[20px]">
                <IoSearchOutline />
              </p>
            </div>
            <button className="button flex items-center custom-sm:w-full custom-sm:justify-center custom-sm:text-sm font-semibold custom-xs:w-full custom-xs:justify-center custom-xs:text-sm text-white p-3 gap-2 bg-primaryBlue rounded-[12px] custom-xs:rounded-[8px] duration-200 ease-in-out hover:bg-primaryOrange">
              Ask AI
              <FaArrowRight />
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default AskAiSection;
