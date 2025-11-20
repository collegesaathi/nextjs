'use client';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// Data for the cards
const helpCards = [
  {
    title: "Find EMI Facilities for different universities.",
    description: null, // Card 1 is just the title/action
    id: 1,
  },
  {
    title: "Budget constraints?",
    description: "We are here to take care of your finances.",
    id: 2,
  },
  {
    title: "Too much confusion?",
    description: "Don't worry explore the best universities.",
    id: 3,
  },
  {
    title: "Looking for placements?",
    description: "Discover different placement opportunities with us.",
    id: 4,
  },
  // Add more cards to ensure the carousel is scrollable
  {
    title: "Need expert advice?",
    description: "Talk to our counselors today.",
    id: 5,
  },
  {
    title: "Admission queries?",
    description: "Get quick answers to all your questions.",
    id: 6,
  },
  {
    title: "Admission queries?",
    description: "Get quick answers to all your questions.",
    id: 6,
  },
  {
    title: "Admission queries?",
    description: "Get quick answers to all your questions.",
    id: 6,
  },
  {
    title: "Admission queries?",
    description: "Get quick answers to all your questions.",
    id: 6,
  },
  {
    title: "Admission queries?",
    description: "Get quick answers to all your questions.",
    id: 6,
  },
];

const HelpSection = () => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateProgress = (swiper) => {
    console.log("swiper", swiper)
    // Calculate the progress based on the current slide position
    if (!swiper || swiper.slides.length === 0) return 0;

    // Use realIndex for progress calculation if loop is enabled, 
    // but since we are not using 'loop', use the simple index logic:
    const totalCards = helpCards.length;
    const visibleSlides = swiper.params.slidesPerView;
    const maxScrollableIndex = totalCards - Math.floor(visibleSlides);

    if (maxScrollableIndex <= 0) {
      setProgress(100);
      return;
    }

    const currentProgress = (swiper.activeIndex / maxScrollableIndex) * 100;
    setProgress(Math.min(100, Math.max(0, currentProgress)));

    // Update navigation states
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const navigatePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const navigateNext = () => {
    swiperRef.current?.swiper.slideNext();
  };
  const progressBarTotalWidth = '180px';

  const progressWidthStyle = {
    width: `${progress}%`,
  };


  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#282529]">
          Have Questions? We can <span className="text-[#EC1E24]">help!</span>
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`w-[${progressBarTotalWidth}] h-1.5 bg-gray-300 rounded-full overflow-hidden`}>
            <div
              className="h-full bg-[#EC1E24] transition-all duration-300 ease-in-out"
              style={progressWidthStyle}
            ></div>
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

      {/* Swiper Carousel */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        // Initialize Swiper and update state
        onSwiper={(swiper) => {
          swiperRef.current = { swiper };
          updateProgress(swiper);
        }}
        // Update state on slide change
        onSlideChange={updateProgress}

        // Responsive breakpoints for card display
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {helpCards && helpCards?.map((card) => (
          <SwiperSlide >
            <div className="h-80 border border-[#CECECE] p-6 flex flex-col justify-end bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-[10px]">
              <div className="min-h-[50%]">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-[#282529]">
                  {card.title}
                </h3>
                {/* Description (if exists) */}
                {card.description && (
                  <p className="text-gray-600">
                    {card.description}
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HelpSection;