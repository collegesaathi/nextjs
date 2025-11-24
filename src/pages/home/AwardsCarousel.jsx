'use client'

import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import ABP from "../asserts/home/ABP.svg";
import Edtech from "../asserts/home/Edtech.svg";
import Outlook from "../asserts/home/Outlook-B.svg";
import The from "../asserts/home/The.svg"
import Heading from '../common/Heading'

export default function AwardsCarousel() {
    // Award items data
    const awardItems = [
        {
            id: 1,
            image: ABP?.src,
            title: 'Award Title 1',
            year: '2024'
        },
        {
            id: 2,
            image: Outlook?.src,
            title: 'Award Title 2',
            year: '2024'
        },
        {
            id: 3,
            image: Edtech?.src,
            title: 'Award Title 3',
            year: '2024'
        },
        {
            id: 4,
            image: The?.src,
            title: 'Award Title 4',
            year: '2024'
        },
        {
            id: 2,
            image: Outlook?.src,
            title: 'Award Title 2',
            year: '2024'
        },
        {
            id: 3,
            image: Edtech?.src,
            title: 'Award Title 3',
            year: '2024'
        },
        {
            id: 4,
            image: The?.src,
            title: 'Award Title 4',
            year: '2024'
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

        const totalCards = awardItems.length;
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
    const progressBarTotalWidth = '220px';

    const progressWidthStyle = {
        width: `${progress}%`,
    };

    return (
        <>
            {/* Desktop Version */}
            <div className="py-8 md:py-12 ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">

                    <div className="flex flex-wrap md:justify-between items-center mb-2 md:mb-0">
                        <Heading title={"  Our Achievements & "} midtitle={"Awards"} />
                        <div className="flex items-center space-x-6 md:space-x-4">
                            <div className="flex justify-center w-full">
                                <div
                                    className={`w-[${progressBarTotalWidth}] h-1.5 bg-gray-300 rounded-full overflow-hidden mb-3 md:mb-0`}
                                >
                                    <div
                                        className="h-full bg-[#EC1E24] transition-all duration-300 ease-in-out"
                                        style={progressWidthStyle}
                                    ></div>
                                </div>
                            </div>


                            <div className="flex space-x-2">
                                <button
                                    type="button"
                                    onClick={navigatePrev}
                                    disabled={isBeginning}
                                    className={`
                        w-8 h-8 rounded-full flex items-center justify-center 
                        transition-all duration-200 flex-shrink-0
                        ${isBeginning
                                            ? 'bg-gray-100 border border-gray-300 cursor-not-allowed text-gray-400 opacity-60'
                                            : 'bg-white border border-[#EC1E24] hover:bg-red-50 cursor-pointer text-[#EC1E24]'
                                        }
                    `}
                                >
                                    {/* Left Arrow Icon (←) */}
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

                                {/* Custom Next Button (Gray Border when active) */}
                                <button
                                    type="button"
                                    onClick={navigateNext}
                                    disabled={isEnd}
                                    className={`
                        w-8 h-8 rounded-full flex items-center justify-center 
                        transition-all duration-200 flex-shrink-0
                        ${isEnd
                                            ? 'bg-gray-100 border border-gray-300 cursor-not-allowed text-gray-400 opacity-60'
                                            : 'bg-white border border-gray-300 hover:border-[#EC1E24] hover:text-[#EC1E24] cursor-pointer text-gray-500'
                                        }
                    `}
                                >
                                    {/* Right Arrow Icon (→) */}
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
                            modules={[Autoplay]}
                            onSwiper={(swiper) => {
                                swiperRef.current = { swiper };
                                updateProgress(swiper);
                            }}
                            // Update state on slide change
                            onSlideChange={updateProgress}
                            breakpoints={carouselBreakpoints}
                        >
                            {awardItems.map((item, index) => (
                                <SwiperSlide key={item.id}>
                                    <div
                                        className={`
                    flex flex-col items-center justify-center transition-all duration-300 cursor-pointer pt-10
                    ${isActiveSlide(index) ? 'active-slide' : ''}
                  `}
                                    >
                                        <div className="relative mb-4">
                                            <img src={item.image} alt={item.title} className="w-[243px] h-auto" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Pagination Dots */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {awardItems.slice(0, 4).map((_, index) => (
                                <div
                                    key={`dot-${index}`}
                                    onClick={() => goToSlide(index)}
                                    className={`
                  w-[9px] h-[9px] rounded-full cursor-pointer transition-all duration-300
                  ${currentSlideIndex === index ? 'bg-[#EC1E24]' : 'bg-[#DFDFDF]'}
                `}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}