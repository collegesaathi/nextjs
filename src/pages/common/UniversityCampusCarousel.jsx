"use client";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import { useRef, useState } from "react";
import Image from "next/image";
import Heading from "@/common/Heading";
import BackNext from "../components/BackNext";



export default function UniversityCampusCarousel() {
  const campuses = [
    { id: 1, name: "Mumbai", image: "/images/university/showcase/1.png" },
    { id: 2, name: "Indore", image: "/images/university/showcase/2.png" },
    { id: 3, name: "Shirpur", image: "/images/university/showcase/3.png" },
    { id: 4, name: "Mumbai", image: "/images/university/showcase/1.png" },
    { id: 5, name: "Indore", image: "/images/university/showcase/2.png" },
    { id: 6, name: "Shirpur", image: "/images/university/showcase/3.png" },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  // Carousel breakpoints for responsive design
  const carouselBreakpoints = {
    320: { slidesPerView: 2, spaceBetween: 16 },
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

    const totalCards = campuses.length;
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

    <div className="mt-[50px] px-6">


    <BackNext
        title="NMIMS CDOE Campuses"
     
        progress={progress}
        isBeginning={isBeginning}
        isEnd={isEnd}
        onPrev={navigatePrev}
  onNext={navigateNext}
      />
{/* 
      <div className="flex justify-between items-center mb-6">
        <Heading title={"        NMIMS CDOE Campuses"} />
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


      <Swiper
        slidesPerView={4}
        spaceBetween={24}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current =  swiper ;
          updateProgress(swiper);
        }}
        // Update state on slide change
        onSlideChange={updateProgress}
        breakpoints={carouselBreakpoints}
        style={{ scrollbarWidth: "none" }}
      >
        {campuses.map((campus, index) => (
          <SwiperSlide key={campus.id}>
            <div
              className="campus-card bg-white border border-[#bcbcbc] p-2 lg:p-4 rounded-[12px] flex items-center gap-3 my-3 cursor-pointer relative overflow-hidden
                          transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg hover:border-[#EC1E24]/30"
            >
              <div className="w-[46.33px] h-[46.33px] lg:w-[71px] lg:h-[71px] rounded-full overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-110">
                <Image
                  src={campus.image}
                  alt={campus.name}
                  width={71}
                  height={71}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="font-poppins text-[14px] lg:text-[17px] text-[#333] transition-colors duration-300 hover:text-[#EC1E24]">
                {campus.name}
              </span>

              {/* Shine Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#EC1E24]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}
