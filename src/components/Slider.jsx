import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="my-4 max-h-[500px]"
    >
      <SwiperSlide>
        <img
          className="w-full h-full object-cover px-2 rounded-2xl"
          src="/slide-1.jpg"
          alt="slide-1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full px-2 rounded-xl"
          src="/slide-2.jpg"
          alt="slide-2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full px-2 rounded-xl"
          src="/slide-3.jpg"
          alt="slide-3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full px-2 rounded-xl"
          src="/slide-4.jpg"
          alt="slide-4"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
