import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperGallery = ({ images }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="flex">
          <div className="h-full w-full flex flex-col items-center justify-evenly">
            <img src={image} alt={`Imagen corporativa ${index + 1}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperGallery;
