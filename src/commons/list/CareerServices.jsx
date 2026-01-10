"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import BackNext from "@/pages/components/BackNext";
import { useRouter } from "next/router";
import Listing from "@/pages/api/Listing";

export default function CareerServices({ services }) {
    const router =  useRouter();
    const slug = router.query.universitySlug;

    const [ServciesData, setServciesData] = useState([]);
    const [Loading, setLoading] = useState(false);
    const fetchCourse = async (uniId) => {
        setLoading(true)
        try {
            const main = new Listing();
            const response = await main.UniServices(uniId);
            setServciesData(response?.data?.data)
        }
        catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCourse(slug)
    }, [slug])

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

        const totalCards = ServciesData?.services?.length;
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
        <>
            {services?.title && (
                <div className="px-2 md:px-6 py-6 bg-white">
                    <section className="w-full  mx-auto" id="career-services-section">
                        <div className="max-w-[1230px]">
                            {/* Desktop */}
                            <div className="" id="career-services-section">

                                <BackNext

                                    title={ServciesData?.title}

                                    progress={progress}
                                    isBeginning={isBeginning}
                                    isEnd={isEnd}
                                    onPrev={navigatePrev}
                                    onNext={navigateNext}
                                />

                                <div
                                    className="font-poppins text-[14px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4 break-words whitespace-normal"
                                    dangerouslySetInnerHTML={{ __html: ServciesData?.description || "" }}
                                />


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
                                    {Array.isArray(ServciesData?.services) && ServciesData?.services?.map((service, index) => (
                                        <SwiperSlide key={index} className="overflow-hidden">
                                            <div className="w-full bg-white rounded-[30px] transition-all duration-300 group relative cursor-pointer my-3 ">
                                                <div className="overflow-hidden rounded-t-[30px]">
                                                    <img
                                                        src={service.image || "/images/new/Group1.webp"}
                                                        alt={service.title}
                                                        height={300}
                                                        width={600}
                                                        className="w-full h-[305px] object-cover transition-transform duration-500"
                                                    />
                                                </div>

                                                <div className="p-5  border border-t-0 border-[#D4D2D2] px-16 rounded-b-[30px] h-full relative z-10 group-hover:border-[#EC1E24]/30 transition-colors duration-300 py-10 min-h-[200px]">
                                                    <div className="flex items-center space-x-4 ">
                                                        <img
                                                            src={service.icon || "/images/new/Group1.webp"}
                                                            alt={service.title}
                                                            width={25}
                                                            height={25}
                                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                        />
                                                        <h3 className="font-poppins font-semibold text-[17px] text-[#2D2D2D] group-hover:text-[#EC1E24] transition-colors duration-300">
                                                            {service.title}
                                                        </h3>
                                                    </div>

                                                    <p className="font-poppins font-[400]  text-[14px] mt-4 text-[#2D2D2D]  lg:line-clamp-3   xl:line-clamp-3 leading-[22px]">
                                                        {service.content}
                                                    </p>
                                                </div>

                                                {/* Hover Overlay */}
                                                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#EC1E24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[30px]" /> */}
                                            </div>

                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>

    );
}
