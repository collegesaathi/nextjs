"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Logo1 from "../asserts/icon/1714460449-university-image.jpg"
import Logo2 from "../asserts/icon/1716465446-university-image.jpg"
import Logo3 from "../asserts/icon/1737094952-university-image.png"
import Logo4 from "../asserts/icon/1717076333-university-image.png"
import Logo5 from "../asserts/icon/1717763861-university-image.png"
import Logo6 from "../asserts/icon/1719322053-university-image.png"
import Logo7 from "../asserts/icon/1719387404-university-image.png"


export default function LogoSlider() {
  const logos = [
    Logo1?.src,
    Logo2?.src,
    Logo3?.src,
    Logo4?.src,
    Logo5?.src,
    Logo6?.src,
    Logo7?.src,
  ];

  return (
    <div className="py-8 md:py-12 ">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true} // Enable looping

          breakpoints={{
            300: { slidesPerView: 2 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
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
  );
}
