import Container from "../container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogCard from "./BlogCard";
import { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";


function LatestBlogs() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current?.swiper;
    setIsBeginning(swiperInstance?.isBeginning);
    setIsEnd(swiperInstance?.isEnd);
  };

  const { data: latestBlogs, isLoading } = useQuery({
    queryKey: ["latestBlogs"],
    queryFn: async () => {
      const response = await api.get("/blog/latest");
      return response?.data?.data;
    },
  });

  return (
    <section className="pt-[40px] pb-[40px] custom-xl:pb-[120px] max-md:py-[10px] custom-sm:!py-[10px] custom-xs:!py-[10px] px-10 max-md:px-4">
      <Container>
        {/* title  */}
        <div className="mb-[40px] custom-sm:mb-[30px] custom-xs:mb-[30px]">
          <h3 className="text--xl" data-aos="fade-up">
            Latest Blogs
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
                  slidesPerView: 4,
                },
              }}
              className="mySwiper"
              speed="1200"
              onSlideChange={handleSlideChange}
              onSwiper={handleSlideChange}
            >
              {latestBlogs?.map((blog, index) => (
                <SwiperSlide key={blog?.id} className="h-full">
                  <div data-aos="fade-up" data-aos-delay={index * 100} className="h-full">
                    <BlogCard item={blog} />
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

export default LatestBlogs;
