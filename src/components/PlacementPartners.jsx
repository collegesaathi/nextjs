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
        <section className="w-full lg:w-[860px] px-4 lg:px-6 py-12 space-y-10 mx-auto">
            {/* Desktop Version */}
            <div className="hidden lg:block bg-white space-y-6">
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
                        1280: { slidesPerView: 3, spaceBetween: 30 },
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

            {/* Mobile Version */}
            <div className="block lg:hidden bg-white space-y-6">
                <div className="flex justify-between items-center mb-5">
                    <div>
                        <h2 className="text-[18px] font-semibold font-poppins mb-4">
                            NMIMS CDOE Hiring and Placement Partners
                        </h2>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-red-600 rounded-full"
                                style={{ width: `${mobileProgress}%` }}
                            ></div>
                        </div>
                        <button
                            onClick={() => mobileSwiperRef.current?.slidePrev()}
                            className="w-5 h-5 rounded-full flex items-center   text-red-600 justify-center border border-red-600"
                        >
                            <FaRightLeft size={24} />
                        </button>
                        <button
                            onClick={() => mobileSwiperRef.current?.slideNext()}
                            className="w-5 h-5 rounded-full flex text-red-600 items-center justify-center border border-red-600"
                        >
                            <FaLeftRight size={24} />

                        </button>
                    </div>
                </div>

                <p className="font-poppins text-[14px] text-[#282529] mb-6">
                    The students at <strong>NMIMS CDOE</strong> have immense hiring and placement opportunities with top companies.
                </p>

                {/* Mobile Swiper */}
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    loop={true}
                    onSwiper={(swiper) => {
                        mobileSwiperRef.current = swiper;
                        updateProgress(swiper, setMobileProgress);
                    }}
                    onSlideChange={(swiper) => updateProgress(swiper, setMobileProgress)}
                    breakpoints={{
                        320: { slidesPerView: 2, spaceBetween: 15 },
                        640: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index} className="px-2 my-4">
                            <div className="bg-[#F8F9FA] shadow-sm rounded-[20px] p-3 flex flex-col items-center transition-transform hover:scale-105">
                                <div className="bg-white w-full h-[109px] rounded-[15px] flex items-center justify-center shadow-sm mb-4">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        width={71}
                                        height={71}
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-[12px] font-medium text-[#363535] font-poppins text-center">
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
