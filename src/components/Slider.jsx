import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Donate Warm Clothing",
      description: "Help those in need by donating winter essentials.",
      image: "/slide-1.jpg",
    },
    {
      id: 2,
      title: "Avoid poors from cold.",
      description: "Serving poor people with blankets.",
      image: "/slide-2.jpg",
    },
    {
      id: 3,
      title: "Thanda Hotao",
      description: "Provides warm cloths for winter.",
      image: "/slide-3.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Initiatives
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="px-2 mx-auto"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 mt-4">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
