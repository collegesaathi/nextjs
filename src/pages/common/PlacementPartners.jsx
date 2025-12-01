"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaLeftRight, FaRightLeft } from "react-icons/fa6";

const partners = [
    { name: "Zalaris India", logo: "/img/university/showcase/1.png" },
    { name: "Alchaw Metprint", logo: "/img/university/showcase/1.png" },
    { name: "IndiaMart", logo: "/img/university/showcase/1.png" },
    { name: "Lodestar UM", logo: "/img/university/showcase/1.png" },
];

export default function PlacementPartners() {
    const desktopSwiperRef = useRef(null);
    const mobileSwiperRef = useRef(null);

    const [desktopProgress, setDesktopProgress] = useState(0);
    const [mobileProgress, setMobileProgress] = useState(0);

    // Update progress
    const updateProgress = (swiper, setProgress) => {
        const total = swiper.slides.length - (swiper.loopedSlides || 0);
        setProgress(((swiper.realIndex + 1) / total) * 100);
    };

    return (
        <section className="">
            <div className=" bg-white space-y-6">
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div className="mb-6">
                        <h3 className="font-poppins font-semibold text-[28px] text-[#363535] mb-6">
                            NMIMS CDOE Hiring and <br /> Placement Partners
                        </h3>
                    </div>

                    {/* Progress Bar & Arrows */}
                    <div className="flex items-center space-x-4">
                        <div className="w-[191px] h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-red-600 rounded-full"
                                style={{ width: `${desktopProgress}%` }}
                            ></div>
                        </div>
                        <button
                            onClick={() => desktopSwiperRef.current?.slidePrev()}
                            className={`w-[35px] h-[35px] rounded-full border flex items-center justify-center cursor-pointer ${desktopProgress > 90 ? "border-gray-400 text-gray-400" : "border-red-600 text-red-600"
                                }`}
                        >
                            <i className="ri-arrow-left-long-line text-18"></i>
                        </button>
                        <button
                            onClick={() => desktopSwiperRef.current?.slideNext()}
                            className={`w-[35px] h-[35px] rounded-full border flex items-center justify-center cursor-pointer ${desktopProgress > 10 ? "border-red-600 text-red-600" : "border-gray-400 text-gray-400"
                                }`}
                        >
                            <i className="ri-arrow-right-long-line text-18"></i>
                        </button>
                    </div>
                </div>

                <p className="font-poppins text-[17px] text-[#282529]">
                    The students at <strong>NMIMS Center for Distance and Online Education CDOE</strong>
                    have immense hiring and placement opportunities. The university has tie-ups with topmost companies, briefly mentioned below:
                </p>

                {/* Desktop Swiper */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    onSwiper={(swiper) => {
                        desktopSwiperRef.current = swiper;
                        updateProgress(swiper, setDesktopProgress);
                    }}
                    onSlideChange={(swiper) => updateProgress(swiper, setDesktopProgress)}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 25 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                        1280: { slidesPerView: 4, spaceBetween: 30 },
                    }}
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index} className="px-2 my-8">
                            <div className="bg-[#f7f6f6] shadow-sm h-[202px] rounded-[20px] p-5 flex flex-col justify-between items-center transition-transform hover:scale-105">
                                <div className="bg-white w-full h-[109px] rounded-[15px] flex items-center justify-center shadow-sm">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        width={71}
                                        height={71}
                                        className="object-contain"
                                    />
                                </div>
                                <p className="mt-3 text-[16.5px] font-medium text-[#363535] font-poppins">
                                    {partner.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
