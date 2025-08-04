import Container from "../container/Container";
import PriceCard from "./PriceCard";
import HomeIcon from "../../assets/images/icons/home.svg";

import check from "../../assets/images/icons/check.png";

function PricingSection() {
  return (
    <section className="bg-pricingSectionBg py-[120px] max-md:py-[80px] custom-xs:!py-[60px]">
      <Container>
        <div className="text-center mb-10 custom-xs:mb-5">
          <h3
            className="text-[56px] custom-2xl:text-[38px] custom-xl:text-[38px] max-xl:text-[38px] custom-xs:!text-[26px] text-white font-semibold"
            data-aos="fade-up"
          >
            Upgrade your plan
          </h3>
        </div>
        <div className="flex custom-sm:flex-col custom-sm:gap-4 custom-xs:flex-col custom-xs:gap-0 justify-center gap-6">
          {/* price card  */}
          <div data-aos="fade-up" data-aos-delay="100">
            <PriceCard icon={HomeIcon} price="6.99">
              <ul className="pricing-feature">
                <li>
                  <img src={check} alt="check" />
                  Full access to blog and travel information
                </li>
                <li>
                  <img src={check} alt="check" />
                  Travel itinerary and photos and videos
                </li>
                <li>
                  <img src={check} alt="check" />
                 Access to world wide TREKARIUS travel community
                </li>
                
              </ul>
            </PriceCard>
          </div>
          {/* price card  */}
          {/* <div data-aos="fade-up" data-aos-delay="200">
            <PriceCard icon={tagIcon} price="39">
              <ul className="pricing-feature">
                <li>
                  <img src={check} alt="check" />
                  Everything in Free
                </li>
                <li>
                  <img src={check} alt="check" />
                  Early access to new features
                </li>
                <li>
                  <img src={check} alt="check" />
                  Access to OpenAI o1-preview, OpenAI o1-mini
                </li>
                <li className="disabled">
                  <img src={check} alt="check" />
                  Access to data analysis, file uploads, vision, web browsing,
                  and image generation
                </li>
              </ul>
            </PriceCard>
          </div> */}
        </div>
      </Container>
    </section>
  );
}

export default PricingSection;
