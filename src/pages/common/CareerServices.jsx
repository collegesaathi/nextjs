"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Imagess from "../assets/home/Budget.png"

// Import images & icons


const services = [
    {
        title: "Job Portal Access",
        icon: Imagess?.src,
        image: Imagess?.src,
        description:
            "6 months' access to platforms like IIMJobs, Updazz, and Hirist. Find a job, flag your applications, and rank your profile.",
    },
    {
        title: "Coaching",
        icon: Imagess?.src,
        image: Imagess?.src,
        description:
            "Work one-on-one with a career coach, who will help you plan and consult about your career strategy and goals to build a clear pathway to success.",
    },
    {
        title: "Profile Development",
        icon: Imagess?.src,
        image: Imagess?.src,
        description:
            "Work with an expert to improve your resume, create a solid LinkedIn & social media profile, and develop your personal brand.",
    },
    {
        title: "Mock Interviews",
        icon: Imagess?.src,
        image: Imagess?.src,
        description:
            "Participate in mock interview sessions to feel confident about real job interviews, career changes, and internal promotions.",
    },
    {
        title: "Assessment",
        icon: Imagess?.src,
        image: Imagess?.src,
        description:
            "Explore your strengths through aptitude and psychometric tests, which will help guide you to optimum career options in marketing or related fields.",
    },
];

export default function CareerServices() {
    const desktopSwiperRef = useRef(null);
    const mobileSwiperRef = useRef(null);

    const [desktopProgress, setDesktopProgress] = useState(0);
    const [mobileProgress, setMobileProgress] = useState(0);

    const updateProgress = (swiper, setProgress) => {
        const total = swiper.slides.length - (swiper.loopedSlides || 0);
        setProgress(((swiper.realIndex + 1) / total) * 100);
    };

    return (
        <section >
            {/* Desktop */}
            <div className="">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-[26px] font-semibold font-poppins text-[#363535]">
                        NMIMS Career Services
                    </h2>

                    {/* Progress & Arrows */}
                    <div className="flex items-center space-x-4">
                        <div className="w-[191px] h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-red-600 rounded-full"
                                style={{ width: `${desktopProgress}%` }}
                            />
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

                <p className="font-poppins text-[17px] text-[#282529] mb-8">
                    With online programs at <strong>NMIMS CDOE</strong>, the students can get multiple career
                    benefits that will help them craft a strong professional path. The NMIMS CDOE placements
                    provide excellent growth opportunities.
                </p>

                {/* Desktop Swiper */}
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    loop={true}
                    onSwiper={(swiper) => {
                        desktopSwiperRef.current = swiper;
                        updateProgress(swiper, setDesktopProgress);
                    }}
                    onSlideChange={(swiper) => updateProgress(swiper, setDesktopProgress)}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 25 },
                        1024: { slidesPerView: 2, spaceBetween: 30 },
                        1280: { slidesPerView: 2, spaceBetween: 30 },
                    }}
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index} className="overflow-hidden">
                            <div className="w-full bg-white rounded-[30px] transition-all duration-300 group relative cursor-pointer my-3">
                                <div className="overflow-hidden rounded-t-[30px]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        height={220}
                                        width={500}
                                        className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5 border border-t-0 border-[#D4D2D2] rounded-b-[30px] h-[200px] relative z-10 group-hover:border-[#EC1E24]/30 transition-colors duration-300">
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src={service.icon}
                                            alt={service.title

                                            }
                                            width={100}
                                            height={200}
                                            className="object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <h3 className="font-poppins font-semibold text-[16.5px] text-[#2D2D2D] group-hover:text-[#EC1E24] transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="font-poppins text-sm mt-4 text-[#2D2D2D] leading-[22px]">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#EC1E24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[30px]" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    );
}
