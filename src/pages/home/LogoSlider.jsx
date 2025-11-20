"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Group from "../asserts/home/Group.png";

export default function LogoSlider() {
  const logos = [
    Group?.src,
    Group?.src,
    Group?.src,
    Group?.src,
    Group?.src,
    Group?.src,
    Group?.src,
    Group?.src,
  ];

  return (
    <div className="py-4 md:py-8 ">
      <div className="mx-auto container xl:max-w-[1230px] px-4">
        <div className="w-full py-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true} // Enable looping

            breakpoints={{
              300: { slidesPerView: 2 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            modules={[Autoplay]}
            className="w-full "
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-[50px] object-cover transition-transform duration-500"

                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
