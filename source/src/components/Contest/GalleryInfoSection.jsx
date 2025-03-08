
import { Link } from 'react-router-dom';
import CommonButton from '../common/CommonButton';
import AboutStep from '../About/AboutStep';
const GalleryInfoSection = ({data}) => {

  return (
    <div className="w-full mx-auto px-10 max-md:px-7 custom-sm:!px-5 custom-xs:!px-[18px]">
      <div className="py-[120px] custom-md:py-[90px] custom-sm:py-[70px] custom-xs:py-[60px]">
        <h2
          className="text--xl text-headingColor mb-[30px] custom-xs:mb-[25px] text-center"
          data-aos="fade-up"
        >
          {data?.best_culture_photo?.title}
        </h2>
        <AboutStep
          text={data?.best_culture_photo?.short_description}
          img={data?.best_culture_photo?.file_url}
          shapeColor={"#1687c7"}
          isReversed={false}
          data={data?.best_culture_photo}
        />
      </div>
      <div className="py-[120px] custom-md:py-[90px] custom-sm:py-[70px] custom-xs:py-[60px]">
        <h2
          className="text--xl text-headingColor mb-[30px] custom-xs:mb-[25px] text-center"
          data-aos="fade-up"
        >
          {data?.best_sunset_or_sunrise_photo?.title}
        </h2>
        <AboutStep
          text={data?.best_sunset_or_sunrise_photo?.short_description}
          img={data?.best_sunset_or_sunrise_photo?.file_url}
          shapeColor={"#ff7701"}
          isReversed={true}
          data={data?.best_sunset_or_sunrise_photo}
        />
      </div>
      <div className="py-[120px] custom-md:py-[90px] custom-sm:py-[70px] custom-xs:py-[60px]">
        <h2
          className="text--xl text-headingColor mb-[30px] custom-xs:mb-[25px] text-center"
          data-aos="fade-up"
        >
          {data?.best_adventure_photo?.title}
        </h2>
        <AboutStep
          text={data?.best_adventure_photo?.short_description}
          img={data?.best_adventure_photo?.file_url}
          shapeColor={"#ff7701"}
          isReversed={false}
          data={data?.best_adventure_photo}
        />
      </div>

      {/* CTA section */}
      <div
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${
            import.meta.env.VITE_SERVER_URL
          }/${data?.photo_contest_join?.file_url})`,
        }}
        className="py-14 sm:py-20 md:py-28 lg:py-32 2xl:py-40 px-5 rounded-2xl flex items-center !bg-center justify-center !bg-cover !bg-no-repeat"
      >
        {/* info */}
        <div className="text-white text-center space-y-3 md:space-y-5">
          <h3
            data-aos="fade-up"
            className="text--xl custom-md:text-[34px] custom-sm:text-[30px] custom-xs:text-[26px] text-white "
          >
            {data?.photo_contest_join?.title}
          </h3>
          <p data-aos="fade-up" className="md:text-lg md:w-[55%] mx-auto">
            {data?.photo_contest_join?.sub_title}
          </p>
          <Link
            to={"/contest/photo-contest"}
            className="max-md:mt-6 inline-block"
            data-aos="fade-up"
          >
            <CommonButton
              text={data?.photo_contest_join?.button_text}
              type="fill"
              bgColor="#FF7701"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryInfoSection;
