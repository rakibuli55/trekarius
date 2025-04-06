import indentityImage from "../../assets/images/authImg.png";

const WhoWeArePage = () => {
  return (
    <section className="py-[120px] max-md:py-[60px] custom-xs:!pt-10 custom-xs:mb-0">
      <div className="w-[80%] mx-auto custom-2xl:w-[90%] custom-xl:w-[90%] max-md:w-[92%] custom-xs:!w-[90%]">
        <div className="flex items-center flex-wrap max-md:flex-col">
          {/* text */}
          <div className="w-[50%] max-md:order-2 max-md:w-full max-md:mt-6">
            <h2 className="title-common">who we are</h2>
            <p className="text-[18px] font-medium mt-8 max-md:mt-3 custom-xs:text-base">
              Our company was born out of the exhilarating experience of
              embarking on a mission that took us halfway across the globe.
              Motivated by the desire to explore all 195 countries, we found
              inspiration in the freedom of travel and the connections we made
              with people from diverse cultures. Embracing this diversity, we
              strive to promote and encourage a sense / feeling of liberation
              through travel.
            </p>
            <p className="text-[18px] font-medium mt-5 custom-xs:text-base">
              By partnering with us, you can assist TREKARIUS in expanding its
              reach to a broader audience, while also leaving a positive impact
              on your website visitors. Together, we can create a global
              platform that celebrates all cultures and communities united by
              the spirit of exploration. Additionally, we aim to provide people
              with access to cutting-edge travel gear that they can use with
              pride.
            </p>
          </div>
          {/* image  */}
          <div className="w-[50%] indentity-image-wrap pl-20 max-md:order-1 max-md:w-full max-md:pl-0">
            <div className="h-[580px] max-md:h-[400px] custom-xs:!h-[290px] overflow-hidden rounded-[30px] custom-xs:rounded-[14px]">
              <img
                className="w-full h-full duration-200 ease-in-out object-cover"
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

export default WhoWeArePage;
