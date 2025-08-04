import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const   ProductSlider = ({ productImages }) => {
  
  return (
    <div className="rounded-[12px] overflow-hidden product-details-slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {productImages?.map((item) => (
          <SwiperSlide key={item?.id}>
            <div className="h-[250px] md:h-[350px] lg:h-[500px]">
              <img
                className="w-full h-full object-cover md:object-contain object-center rounded-[12px]"
                src={`${import.meta.env.VITE_SERVER_URL}/${item?.image_url}`}
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
