"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import Image from "next/image";

const campuses = [
  { id: 1, name: "Mumbai", image: "/img/university/showcase/1.png" },
  { id: 2, name: "Indore", image: "/img/university/showcase/2.png" },
  { id: 3, name: "Shirpur", image: "/img/university/showcase/3.png" },
  { id: 4, name: "Mumbai", image: "/img/university/showcase/1.png" },
  { id: 5, name: "Indore", image: "/img/university/showcase/2.png" },
  { id: 6, name: "Shirpur", image: "/img/university/showcase/3.png" },
];

export default function UniversityCampusCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="w-full lg:w-[860px] py-8 px-4 lg:px-6">
      <h2 className="font-poppins font-semibold text-[18px] lg:text-[28px] text-[#282529] mb-4">
        NMIMS CDOE Campuses
      </h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {campuses.map((campus, index) => (
          <SwiperSlide key={campus.id}>
            <div
              className="campus-card bg-white border border-[#bcbcbc] p-2 lg:p-4 rounded-[12px] flex items-center gap-3 my-3 cursor-pointer relative overflow-hidden
                          transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg hover:border-[#EC1E24]/30"
            >
              <div className="w-[46.33px] h-[46.33px] lg:w-[71px] lg:h-[71px] rounded-full overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-110">
                <Image
                  src={campus.image}
                  alt={campus.name}
                  width={71}
                  height={71}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-poppins text-[14px] lg:text-[17px] text-[#333] transition-colors duration-300 hover:text-[#EC1E24]">
                {campus.name}
              </span>

              {/* Shine Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#EC1E24]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
