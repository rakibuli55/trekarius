import CommonButton from "@/components/common/CommonButton";
import Container from "@/components/container/Container";
import { Link } from "react-router-dom";
import CommunityImg from "../assets/images/community.png";

function JoinCommunityPage() {
  return (
    <section className="py-[200px] custom-xs:py-[100px] custom-xs:pb-[80px] text-center">
      <Container>
        <div className="w-[684px] custom-sm:w-full custom-xs:w-full mx-auto">
          <h1
            className="text-[40px] custom-md:text-[30px] custom-sm:text-[28px] custom-xs:text-[24px] font-semibold text-headingColor"
            data-aos="fade-up"
          >
            Join the community to start the conversation
          </h1>
          <img
            className="w-[424px] custom-sm:w-full h-[260px] custom-xs:h-[200px] my-[48px] mx-auto"
            src={CommunityImg}
            data-aos="zoom-in"
            alt="CommunityImg"
          />
          <div data-aos="fade-up">
            <Link to={"/community"}>
              <CommonButton text="Join Now" type="fill" bgColor="#1687C7" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default JoinCommunityPage;
