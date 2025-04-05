import indentityImage from "../../assets/images/authImg.png";

const WhyUsSection = () => {
  return (
    <section className="pt-[50px] pb-[120px]">
      <div className="w-[80%] mx-auto">
        <div className="flex items-center flex-wrap flex-row-reverse">
          {/* text */}
          <div className="w-[50%]">
            <h2 className="title-common">Why us</h2>
            <p className="text-[18px] font-medium mt-8">
            We stand out from other companies by providing tailored video content and authentic engagement on our social media channels. Our emphasis is on real individuals and genuine travel experiences, creating connections between people and communities. We celebrate and elevate the voices of various cultures as they utilize our gear on their adventures that blend exploration with cultural immersion. 
            </p>
          </div>
          {/* image  */}
          <div className="w-[50%] indentity-image-wrap pr-20">
            <div className="h-[580px] overflow-hidden rounded-[30px]">
              <img
                className="w-full h-full duration-200 ease-in-out"
                src={indentityImage}
                alt="indentityImage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;