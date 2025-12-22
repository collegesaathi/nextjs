"use client";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import { useRef, useState } from "react";
import BackNext from "@/pages/components/BackNext";



export default function UniversityCampusCarousel({universityCampuses}) {
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
      <div className="px-2 md:px-6 py-6  bg-white">
        <section className="w-full mx-auto" id="financial-aid-section">
         <div className="max-w-[1230px] ">
  <BackNext
    title="NMIMS CDOE Campuses"
    progress={progress}
    isBeginning={isBeginning}
    isEnd={isEnd}
    onPrev={navigatePrev}
    onNext={navigateNext}
  />

  <Swiper
    slidesPerView={4}
    spaceBetween={24}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    modules={[Autoplay, Pagination]}
    onSwiper={(swiper) => {
      swiperRef.current = swiper;
      updateProgress(swiper);
    }}
    onSlideChange={updateProgress}
    breakpoints={carouselBreakpoints}
  >
    {universityCampuses?.campus?.map((campus) => (
      <SwiperSlide key={campus.id}>
        <div
          className="campus-card bg-white border border-[#bcbcbc] 
          p-2 sm:p-3 lg:p-4 rounded-[12px] flex items-center gap-3 
          my-3 cursor-pointer relative overflow-hidden
          transform transition-all duration-300 hover:scale-[1.02] 
          hover:-translate-y-1 hover:shadow-lg hover:border-[#EC1E24]/30"
        >
          <div className="w-[46px] h-[46px] sm:w-[60px] sm:h-[60px] lg:w-[71px] lg:h-[71px] 
          rounded-full overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-110">
            <img
              src={campus.image}
              alt={campus.name}
              width={71}
              height={71}
              className="object-cover w-full h-full"
            />
          </div>

          <span className="font-poppins text-[13px] sm:text-[15px] lg:text-[17px] 
          text-[#333] transition-colors duration-300 hover:text-[#EC1E24]">
            {campus.name}
          </span>

          <div className="absolute inset-0 bg-gradient-to-r from-[#EC1E24]/5 to-transparent 
          opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

        </section>
      </div>
    </>
  );
}
