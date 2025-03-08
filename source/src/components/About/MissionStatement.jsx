import Container from "../container/Container";
import AboutStep from "./AboutStep";
import EarnRewards from "../HomePage/EarnRewards";

function MissionStatement({data, rewardData}) {
  return (
    <section>
      <Container>
        <div>
          {/* mission statement  */}
          <div className="py-[120px] custom-md:py-[90px] custom-sm:py-[70px] custom-xs:py-[60px]">
            <h2
              className="text--xl text-headingColor mb-[30px] custom-xs:mb-[25px] text-center"
              data-aos="fade-up"
            >
              {data?.our_mission_statement_section?.title}
            </h2>
            <AboutStep
              text={data?.our_mission_statement_section?.short_description}
              img={data?.our_mission_statement_section?.file_url}
              shapeColor="#1687C7"
              isReversed={false}
              data={data?.our_mission_statement_section}
            />
          </div>
          {/* Our Vision Statement  */}
          <div className="py-[120px] custom-md:pt-[20px] custom-md:pb-[90px] custom-sm:pt-[0px] custom-sm:pb-[70px] custom-xs:pt-[0px] custom-xs:pb-[60px]">
            <h2
              className="text--xl text-headingColor mb-[30px] custom-xs:mb-[25px] text-center"
              data-aos="fade-up"
            >
              {data?.our_vision_statement_section?.title}
            </h2>
            <AboutStep
              text={data?.our_vision_statement_section?.short_description}
              img={data?.our_vision_statement_section?.file_url}
              shapeColor="#1687C7"
              isReversed={false}
              data={data?.our_vision_statement_section}
            />
          </div>
          {/* Brand Story  */}
          <div className="py-[120px] custom-md:pt-[20px] custom-md:pb-[90px] custom-sm:pt-[0px] custom-sm:pb-[70px] custom-xs:pt-[0px] custom-xs:pb-[60px]">
            <h2
              className="text--xl text-headingColor mb-[30px] text-center"
              data-aos="fade-up"
            >
              {data?.brand_story_section?.title}
            </h2>
            <AboutStep
              text={data?.brand_story_section?.short_description}
              img={data?.brand_story_section?.file_url}
              shapeColor="#1687C7"
              isReversed={false}
              data={data?.brand_story_section}
            />
          </div>
        </div>
      </Container>
      {/* divider  */}
      <div
        className="py-[60px] custom-xs:py-[40px] bg-primaryOrange text-[20px] custom-xs:text-[18px] font-semibold tetx-center text-white text-center"
        data-aos="fade-up"
      >
        Inspire and empower every traveler globally with our innovative travel
        gear.
      </div>
      <Container>
        <div>
          {/* Position Statement  */}
          <div className="py-[120px] custom-md:py-[90px] custom-sm:py-[70px] custom-xs:py-[70px]">
            <h2
              className="text--xl text-headingColor mb-[30px] text-center"
              data-aos="fade-up"
            >
              {data?.position_statement_section?.title}
            </h2>
            <AboutStep
              text={data?.position_statement_section?.short_description}
              img={data?.position_statement_section?.file_url}
              shapeColor="#1687C7"
              isReversed={false}
              data={data?.position_statement_section}
            />
          </div>
          {/* Value Proposition  */}
          <div className="py-[120px] custom-md:pt-[20px] custom-md:pb-[90px] custom-sm:pt-[0px] custom-sm:pb-[10px] custom-xs:pt-[0px] custom-xs:pb-[10px]">
            <h2
              className="text--xl text-headingColor mb-[30px] text-center"
              data-aos="fade-up"
            >
              {data?.value_proposition_section?.title}
            </h2>
            <AboutStep
              text={data?.value_proposition_section?.short_description}
              img={data?.value_proposition_section?.file_url}
              shapeColor="#1687C7"
              isReversed={false}
              data={data?.value_proposition_section}
            />
          </div>
        </div>
      </Container>
      <div className="mt-[60px] custom-md:mt-0 custom-xs:mt-10">
        <EarnRewards data={rewardData} />
      </div>
    </section>
  );
}

export default MissionStatement;
