'use client'

import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import ABP from "../assets/home/ABP.svg";
import Edtech from "../assets/home/Edtech.svg";
import Outlook from "../assets/home/Outlook-B.svg";
import The from "../assets/home/The.svg"
import Heading from '@/common/Heading'
import BackNext from "../components/BackNext";

export default function Universities() {
    // Award items data
    const compareUniversities = [
        {
            name: 'Sharda University',
            shortName: 'SHARDA',
            rating: '4.2',
            reviews: '1.2k',
            logo: '/images/university/compare/1.png',
        },
        {
            name: 'SRM University',
            shortName: 'SRM',
            rating: '4.4',
            reviews: '2.1k',
            logo: '/images/university/compare/2.png',
        },
        {
            name: 'Jain University',
            shortName: 'JAIN',
            rating: '4.3',
            reviews: '1.8k',
            logo: '/images/university/compare/3.png',
        },
        {
            name: 'Manipal University',
            shortName: 'MANIPAL',
            rating: '4.5',
            reviews: '3.2k',
            logo: '/images/university/compare/4.png',
        },
        {
            name: 'Amity University',
            shortName: 'AMITY',
            rating: '4.1',
            reviews: '2.5k',
            logo: '/images/university/compare/1.png',
        },
        {
            name: 'LPU University',
            shortName: 'LPU',
            rating: '4.3',
            reviews: '4.1k',
            logo: '/images/university/compare/2.png',
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

        const totalCards = compareUniversities.length;
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
        swiperRef.current?.slidePrev();
    };

    const navigateNext = () => {
        swiperRef.current?.slideNext();
    };
    const progressBarTotalWidth =
        typeof window !== "undefined" && window.innerWidth >= 1024 ? "180px" : "120px";


    const progressWidthStyle = {
        width: `${progress}%`,
    };

    return (
        <>
            {/* Desktop Version */}
            <div className="py-4 md:py-8 " id="universities-comparison-section">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">

                    {/* <div className="flex justify-between items-center mb-6">
                        <Heading title={"Similar Universities"}/>
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
                    </div> */}


                    
            <BackNext
                  
                  title="Compare with Other Universities"
               
                  progress={progress}
                  isBeginning={isBeginning}
                  isEnd={isEnd}
                  onPrev={navigatePrev}
            onNext={navigateNext}
                />

                    <div   >
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={24}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay,  Pagination]}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                                updateProgress(swiper);
                            }}
                            // Update state on slide change
                            onSlideChange={updateProgress}
                            breakpoints={carouselBreakpoints}
                        >
                            {compareUniversities.map((university, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-full h-[232px] rounded-[10px] border border-[rgba(188,188,188,0.7)] p-3 flex flex-col justify-between items-center">

                                        {/* University Logo */}
                                        <div className="rounded-[14px] h-[81px] bg-white border border-[rgba(188,188,188,0.3)] shadow-[0px_0px_2px_rgba(0,0,0,0.11)] flex items-center justify-center p-3 text-center">
                                            <img
                                                src={university.logo}
                                                alt={university.name}
                                                className="w-full object-contain"
                                            />
                                        </div>

                                        {/* University Name */}
                                        <h3 className="font-poppins font-semibold text-[17px] leading-[25px] text-[#282529] text-center">
                                            {university.name}
                                        </h3>

                                        {/* Student Rating */}
                                        <div className="space-y-1.5 text-center">
                                            <p className="font-poppins text-[12px] leading-[18px] text-[#282529] font-light">
                                                Student Rating
                                            </p>

                                            <div className="flex justify-center items-center gap-1.5">
                                                <div className="flex gap-1.5 text-xs">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span
                                                            key={i}
                                                            className={
                                                                i < university.rating
                                                                    ? "text-yellow-400"
                                                                    : "text-[#DDDDDD]"
                                                            }
                                                        >
                                                            ★
                                                        </span>
                                                    ))}
                                                </div>

                                                <span className="font-poppins text-[8px] leading-[12px] text-[#61ab58] font-light">
                                                    ({university.reviews} Reviews)
                                                </span>
                                            </div>
                                        </div>

                                        {/* Button */}
                                        <button className="w-[129px] h-[21px] rounded-[6px] bg-[#ec1e24] font-poppins text-[12px] leading-[18px] text-white flex items-center justify-center">
                                            Add to Compare
                                        </button>
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