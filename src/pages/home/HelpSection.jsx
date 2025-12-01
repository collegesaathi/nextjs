'use client';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Logo2 from "../assets/icon/1716465446-university-image.jpg"
import Image from 'next/image';
import Heading from '../../common/Heading';
import Budget from "../assets/home/Budget.png";
import Confusion from "../assets/home/Confusion.png";
import EMIOptions from "../assets/home/EMIOptions.png";
import Suggestions from "../assets/home/Suggestions.png";
import Placements from "../assets/home/Placements.png"
// Data for the cards
const helpCards = [
  {
    title: "Find EMI Facilities for different universities.",
    description: "We are here to take care of your finances.", // Card 1 is just the title/action
    id: 1,
    image: EMIOptions?.src
  },
  {
    title: "Budget constraints?",
    description: "We are here to take care of your finances.",
    id: 2,
    image: Budget?.src

  },
  {
    title: "Too much confusion?",
    description: "Don't worry explore the best universities.",
    id: 3,
    image: Confusion?.src

  },
  {
    title: "Looking for placements?",
    description: "Discover different placement opportunities with us.",
    id: 4,
    image: Placements?.src

  },
  // Add more cards to ensure the carousel is scrollable
  {
    title: "Need expert advice?",
    description: "Talk to our counselors today.",
    id: 5,
    image: Suggestions?.src
  },
  {
    title: "Admission queries?",
    description: "Get quick answers to all your questions.",
    id: 6,
    image: Placements?.src

  },
];

const HelpSection = () => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateProgress = (swiper) => {
    if (!swiper) return;

    const totalCards = helpCards.length;
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

  const handleAction = (item) => {
    // Handle action button clicks
    console.log('Action clicked:', item.action);

    // You can handle routing or other actions here
    switch (item.action) {
      case 'emi-options':
        // Navigate to EMI page or show modal
        console.log('Navigating to EMI options...');
        break;
      case 'budget-help':
        // Show budget help form
        console.log('Opening budget help...');
        break;
      case 'university-guide':
        // Navigate to universities page
        console.log('Opening university guide...');
        break;
      case 'placement-info':
        // Show placement information
        console.log('Showing placement info...');
        break;
      case 'career-guidance':
        // Open career guidance section
        console.log('Opening career guidance...');
        break;
      case 'scholarship-info':
        // Show scholarship information
        console.log('Showing scholarship info...');
        break;
      default:
        break;
    }
  };

  const handleKeyDown = (event, item) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleAction(item);
    }
  };

  return (
    <div className="py-4 md:py-8 ">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
        <div className="flex justify-between items-center mb-6">
          <Heading title={"Have Questions? We can"} midtitle={"help!"} />
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
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {helpCards && helpCards?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="px-2 py-4">
                <div
                  className="help-card w-full h-[190px] lg:h-[263px] border border-[#CECECE] p-4 
        flex flex-row lg:flex-col items-center lg:items-start justify-between 
        cursor-pointer group relative overflow-visible"
                  onClick={() => handleAction(item)}
                  onKeyDown={(e) => handleKeyDown(e, item)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${item.title} - ${item.description}`}
                >

                  {/* Image */}
                  <div className="flex justify-center items-center lg:justify-start mb-0 lg:mb-2 w-[40%] lg:w-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain  lg:h-[121px] lg:w-[121px] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Text */}
                  <div className="text-left w-[60%] lg:w-full pl-3 lg:pl-0">
                    <h2 className="font-semibold text-[14px] leading-5 mb-2 lg:text-[18px] 
          lg:leading-6 text-[#282529] lg:mb-3 transition-colors duration-300 group-hover:text-[#EC1E24]">
                      {item.title}
                    </h2>

                    <p className="font-normal text-[10px] lg:text-[14px] leading-relaxed tracking-[0px] 
          text-[#282529] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 
        transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-8 h-8 bg-[#EC1E24] rounded-full flex items-center justify-center text-white text-sm 
          group-hover:bg-gradient-to-br group-hover:from-[#EC1E24] group-hover:to-[#ff4757] 
          group-hover:shadow-lg group-hover:shadow-[#EC1E24]/40">
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
                    </div>
                  </div>

                  {/* Hover BG */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EC1E24]/5 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
                </div>
              </div>
            </SwiperSlide>
          ))}


        </Swiper>
      </div>
    </div>
  );
};

export default HelpSection;