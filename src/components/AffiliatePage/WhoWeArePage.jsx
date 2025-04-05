import indentityImage from "../../assets/images/authImg.png";

const WhoWeArePage = () => {
  return (
    <section className="py-[120px]">
      <div className="w-[80%] mx-auto">
        <div className="flex items-center flex-wrap">
          {/* text */}
          <div className="w-[50%]">
            <h2 className="title-common">who we are</h2>
            <p className="text-[18px] font-medium mt-8">
              Our company was born out of the exhilarating experience of
              embarking on a mission that took us halfway across the globe.
              Motivated by the desire to explore all 195 countries, we found
              inspiration in the freedom of travel and the connections we made
              with people from diverse cultures. Embracing this diversity, we
              strive to promote and encourage a sense / feeling of liberation
              through travel.
            </p>
            <p className="text-[18px] font-medium mt-5">
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
          <div className="w-[50%] indentity-image-wrap pl-20">
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

export default WhoWeArePage;
