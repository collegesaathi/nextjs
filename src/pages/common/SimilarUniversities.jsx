'use client'

import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'

import Heading from '@/common/Heading'

export default function SimilarUniversities() {
    // Award items data
    const universities = [
        {
            name: 'Manipal University Online',
            ranking: 75,
            fee: 175000,
        },
        {
            name: 'OP Jindal University',
            ranking: 75,
            fee: 175000,
        },
        {
            name: 'Dr. D.Y. Patil Vidyapeeth University Pune',
            ranking: 75,
            fee: 175000,
        },
        {
            name: 'Amity University Online',
            ranking: 75,
            fee: 175000,
        },
        {
            name: 'Lovely Professional University',
            ranking: 75,
            fee: 175000,
        },
    ]

    // Carousel breakpoints for responsive design
    const carouselBreakpoints = {
        320: { slidesPerView: 1, spaceBetween: 16 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 24 },
        1024: { slidesPerView: 4, spaceBetween: 24 },
    }

    // Active slide tracking
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const swiperRef = useRef(null)

    // Handle slide change from carousel
    const onSlideChange = (swiper) => {
        setCurrentSlideIndex(swiper.realIndex)
    }

    // Check if a slide is currently active/visible
    const isActiveSlide = (index) => {
        return currentSlideIndex === index
    }

    const handleSwiper = (swiper) => {
        swiperRef.current = swiper
    }

    const goToSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index)
        }
    }


    const [progress, setProgress] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const updateProgress = (swiper) => {
        if (!swiper) return;

        const totalCards = universities.length;
        const visibleSlides = swiper.params.slidesPerView;

        // Beginning arrow logic
        if (visibleSlides === 4) {
            setIsBeginning(false); // Desktop: Left arrow always active
        } else {
            setIsBeginning(swiper.isBeginning);
        }

        setIsEnd(swiper.isEnd); // Right arrow normal

        // Progress = (current visible end position / total items)
        const currentVisibleEnd = swiper.activeIndex + visibleSlides;

        let progressValue = (currentVisibleEnd / totalCards) * 100;

        // Limit between 0–100
        progressValue = Math.min(100, Math.max(0, progressValue));

        setProgress(progressValue);
        handleSwiper()
    };


    const navigatePrev = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    const navigateNext = () => {
        swiperRef.current?.swiper.slideNext();
    };
    const progressBarTotalWidth =
        typeof window !== "undefined" && window.innerWidth >= 1024 ? "180px" : "120px";


    const progressWidthStyle = {
        width: `${progress}%`,
    };

    return (
        <>
            {/* Desktop Version */}
            <div className="py-4 md:py-8 ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">

                    <div className="flex justify-between items-center mb-6">
                        <Heading title={" Similar Universities"} />
                        <div className="flex flex-wrap items-center justify-end md:space-x-4">
                            <div className={`w-[${progressBarTotalWidth}] h-1.5 bg-gray-300 rounded-full overflow-hidden`}>
                                <div
                                    className="h-full bg-[#EC1E24] transition-all duration-300 ease-in-out"
                                    style={progressWidthStyle}
                                ></div>
                            </div>
                            <div className="flex space-x-2 mt-4 md:mt-0">
                                <button
                                    type="button"
                                    onClick={navigatePrev}
                                    disabled={isBeginning}
                                    className={`
                                    w-6 h-6
                        md:w-8 md:h-8 rounded-full flex items-center justify-center 
                        transition-all duration-200 flex-shrink-0
                        ${isBeginning
                                            ? 'bg-gray-100 border border-gray-300 cursor-not-allowed text-gray-400 opacity-60'
                                            : 'bg-white border border-[#EC1E24] hover:bg-red-50 cursor-pointer text-[#EC1E24]'
                                        }
                    `}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    onClick={navigateNext}
                                    disabled={isEnd}
                                    className={`
                             w-6 h-6
                        md:w-8 md:h-8  rounded-full flex items-center justify-center 
                        transition-all duration-200 flex-shrink-0
                        ${isEnd
                                            ? 'bg-gray-100 border border-gray-300 cursor-not-allowed text-gray-400 opacity-60'
                                            : 'bg-white border border-gray-300 hover:border-[#EC1E24] hover:text-[#EC1E24] cursor-pointer text-gray-500'
                                        }
                    `}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        data-aos="zoom-in-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        data-aos-once="true"
                    >
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={24}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination]}
                            onSwiper={(swiper) => {
                                swiperRef.current = { swiper };
                                updateProgress(swiper);
                            }}
                            // Update state on slide change
                            onSlideChange={updateProgress}
                            breakpoints={carouselBreakpoints}
                        >
                            {universities?.map((university, index) => (
                                <SwiperSlide key={index} className="px-2 my-3">
                                    <div className="
            w-full h-[100px] rounded-[15px] bg-[#f7f6f6] 
            p-4 flex flex-col justify-between cursor-pointer 
            transition-transform duration-300 hover:scale-105
          ">
                                        <h3 className="font-poppins font-semibold text-[14px] text-[#363535] mb-3">
                                            {university.name}
                                        </h3>

                                        <div className="flex items-center space-x-1.5">
                                            {/* Fee Section */}
                                            <div className="flex items-center space-x-1.5 font-poppins font-light text-[14px] text-[#282529]">
                                                <img src="/img/similar/money.svg" alt="similar" />
                                                <span>INR {university.fee}</span>
                                            </div>

                                            {/* Middle Divider */}
                                            <div className="flex items-center">
                                                <div className="w-[3px] h-[3px] rounded-full bg-[#282529]"></div>

                                                <div className="
                  w-[50px] border-[0.75px] bg-white h-[15px] border-[#f7f6f6]
                  font-poppins font-light text-[6px] text-[#282529]
                  rounded-full flex items-center justify-center mx-1
                ">
                                                    NIRF Ranking
                                                </div>

                                                <p className="font-poppins font-semibold text-[14px] text-[#282529]">
                                                    {university.ranking}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
            </div>



        </>
    )
}