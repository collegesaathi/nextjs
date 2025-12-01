"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Group1 from "../assets/home/Group.png";
import Group2 from "../assets/home/Group.png";
import Group3 from "../assets/home/Group.png";
import Groupphone from "../assets/home/Groupphone.png"
export default function Banner() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);
    return (
        <>
            {isMobile ? (
                <div class="px-4 py-5 lg:hidden">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="w-full h-[180px]"

                    >
                        <SwiperSlide >
                            <img
                                src={Groupphone.src}
                                alt="Banner 2"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img
                                src={Groupphone.src}
                                alt="Banner 2"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img
                                src={Groupphone.src}
                                alt="Banner 2"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            ) : (
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
            )}
        </>
    );
}
