"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

import BackNext from "../components/BackNext";

// Import images & icons


const services = [
    {
        title: "Job Portal Access",
        icon: "/images/university/job.svg",
        image: "/images/university/service1.png",
        description:
            "6 months' access to platforms like IIMJobs, Updazz, and Hirist. Find a job, flag your applications, and rank your profile.",
    },
    {
        title: "Coaching",
        icon: "/images/university/coaching.svg",
        image: "/images/university/service1.png",
        description:
            "Work one-on-one with a career coach, who will help you plan and consult about your career strategy and goals to build a clear pathway to success.",
    },
    {
        title: "Profile Development",
        icon: "/images/university/coaching.svg",
        image: "/images/university/service1.png",
        description:
            "Work with an expert to improve your resume, create a solid LinkedIn & social media profile, and develop your personal brand.",
    },
    {
        title: "Mock Interviews",
        icon: "/images/university/service1.png",
        image: "/images/university/service1.png",
        description:
            "Participate in mock interview sessions to feel confident about real job interviews, career changes, and internal promotions.",
    },
    {
        title: "Assessment",
        icon: "/images/university/service1.png",
        image: "/images/university/service1.png",
        description:
            "Explore your strengths through aptitude and psychometric tests, which will help guide you to optimum career options in marketing or related fields.",
    },
];

export default function CareerServices() {



    const swiperRef = useRef(null);


    const [progress, setProgress] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    // const updateProgress = (swiper, setProgress) => {
    //     const total = swiper.slides.length - (swiper.loopedSlides || 0);
    //     setProgress(((swiper.realIndex + 1) / total) * 100);
    // };



    const updateProgress = (swiper) => {
        if (!swiper) return;

        const totalCards = services.length;
        const visibleSlides = swiper.params.slidesPerView;

        if (visibleSlides === 4) {
            setIsBeginning(false);
        } else {
            setIsBeginning(swiper.isBeginning);
        }

        setIsEnd(swiper.isEnd);

        const currentVisibleEnd = swiper.activeIndex + visibleSlides;

        let progressValue = (currentVisibleEnd / totalCards) * 100;

        // Limit between 0–100
        progressValue = Math.min(100, Math.max(0, progressValue));

        setProgress(progressValue);
    };


    const navigatePrev = () => {
        swiperRef.current?.slidePrev();
    };

    const navigateNext = () => {
        swiperRef.current?.slideNext();
    };


    return (
        <section className="mt-[50px] px-6">
            {/* Desktop */}
            <div className="">

                <BackNext

                    title="NMIMS CDOE Hiring and Placement Partners"

                    progress={progress}
                    isBeginning={isBeginning}
                    isEnd={isEnd}
                    onPrev={navigatePrev}
                    onNext={navigateNext}
                />


                <p className="font-poppins text-[17px] text-[#282529] mb-8">
                    With online programs at <strong>NMIMS CDOE</strong>, the students can get multiple career
                    benefits that will help them craft a strong professional path. The NMIMS CDOE placements
                    provide excellent growth opportunities.
                </p>

                {/* Desktop Swiper */}
                <Swiper

                    spaceBetween={30}
                    loop={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        updateProgress(swiper);
                    }}
                    onSlideChange={updateProgress}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },     // All mobiles
                        480: { slidesPerView: 1, spaceBetween: 25 },  // Small tablets
                        768: { slidesPerView: 2, spaceBetween: 25 },  // Tablets
                        1024: { slidesPerView: 2, spaceBetween: 30 }, // Laptop
                        1280: { slidesPerView: 2, spaceBetween: 30 }, // Desktop
                    }}
                    style={{ scrollbarWidth: "none" }}
                >
                    {services.map((service, index) => (
                        <SwiperSlide key={index} className="overflow-hidden">
                            <div className="w-full bg-white rounded-[30px] transition-all duration-300 group relative cursor-pointer my-3">
                                <div className="overflow-hidden rounded-t-[30px]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        height={300}
                                        width={600}
                                        className="w-full h-[220px] object-cover transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-5 border border-t-0 border-[#D4D2D2] rounded-b-[30px] h-[200px] relative z-10 group-hover:border-[#EC1E24]/30 transition-colors duration-300">
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={25}
                                            height={25}
                                            className="object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <h3 className="font-poppins font-semibold text-[17px] text-[#2D2D2D] group-hover:text-[#EC1E24] transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className="font-poppins text-[14px] mt-4 text-[#2D2D2D] leading-[22px]">
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
