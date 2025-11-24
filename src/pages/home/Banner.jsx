"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Group1 from "../asserts/home/Group.png";
import Group2 from "../asserts/home/Group.png";
import Group3 from "../asserts/home/Group.png";
export default function Banner() {
    return (
        <div className="relative w-full">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full md:h-[400px] lg:h-[600px]"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <img
                        src={Group1.src}
                        alt="Banner 1"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <img
                        src={Group2.src}
                        alt="Banner 2"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <img
                        src={Group3.src}
                        alt="Banner 3"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
