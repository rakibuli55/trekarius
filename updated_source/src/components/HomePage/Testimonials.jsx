import Container from "../container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import TestimonialCard from "./TestimonialCard";


function Testimonials() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current?.swiper;
    setIsBeginning(swiperInstance?.isBeginning);
    setIsEnd(swiperInstance?.isEnd);
  };

  const { data: testimonials, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const response = await api.get("/testimonials");
      return response?.data?.data;
    },
  });

  return (
    <section className="pt-[40px] pb-[100px] custom-xs:!pb-[40px] custom-xl:pb-[120px] max-md:py-[10px] custom-sm:!py-[10px] custom-xs:!py-[10px] px-10 max-md:px-4">
      <Container>
        {/* title  */}
        <div className="mb-[40px] custom-sm:mb-[30px] custom-xs:mb-[30px]">
          <h3 className="text--xl" data-aos="fade-up">
            Client's Feedback
          </h3>
        </div>
        <div className="relative">
          <div>
            <Swiper
              ref={swiperRef}
              slidesPerView="4"
              spaceBetween={24}
              navigation={false}
              modules={[Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1500: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
              speed="1200"
              onSlideChange={handleSlideChange}
              onSwiper={handleSlideChange}
            >
              {testimonials?.map((item, index) => (
                <SwiperSlide key={item?.id} className="h-full">
                  <div data-aos="fade-up" data-aos-delay={index * 100} className="h-full">
                    <TestimonialCard testimonial={item}/>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Custom navigation buttons */}
          <div className="swiper-navigation">
            <button
              className={`prev-btn ${isBeginning ? "disabled" : ""}`}
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <IoIosArrowBack />
            </button>
            <button
              className={`next-btn ${isEnd ? "disabled" : ""}`}
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
