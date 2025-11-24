"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import UniversityCard from '../common/UniversityCard';
import un1 from "../asserts/home/un1.png"
import logoun from "../asserts/home/logoun.png"
import Heading from '../common/Heading';


export default function University() {

  const universityData = [
    { id: 1, name: 'Swiss School of Business and Management (Card 1)', description: 'The Online Doctor of Business Administration (DBA) program at the Swiss School of Business and Management (SSBM) Geneva is specially designed for people planning to pursue a degree in business leaders...' },
    { id: 1, name: 'Swiss School of Business and Management (Card 2)', description: 'The Online Doctor of Business Administration (DBA) program at the Swiss School of Business and Management (SSBM) Geneva is specially designed for people planning to pursue a degree in business leaders...' },
    { id: 1, name: 'Swiss School of Business and Management (Card 3)', description: 'The Online Doctor of Business Administration (DBA) program at the Swiss School of Business and Management (SSBM) Geneva is specially designed for people planning to pursue a degree in business leaders...' },
    { id: 1, name: 'Swiss School of Business and Management (Card 4)', description: 'The Online Doctor of Business Administration (DBA) program at the Swiss School of Business and Management (SSBM) Geneva is specially designed for people planning to pursue a degree in business leaders...' },
    { id: 1, name: 'Swiss School of Business and Management (Card 5)', description: 'The Online Doctor of Business Administration (DBA) program at the Swiss School of Business and Management (SSBM) Geneva is specially designed for people planning to pursue a degree in business leaders...' },
    { id: 1, name: 'Swiss School of Business and Management (Card 1)', description: 'The Online Doctor of Business Administration (DBA) program at the Swiss School of Business and Management (SSBM) Geneva is specially designed for people planning to pursue a degree in business leaders...' },
    { id: 2, name: 'Swiss School of Business and Management (Card 2)', description: 'The Online Doctor of Business Administration (DBA) program at the Swiss School of Business and Management (SSBM) Geneva is specially designed for people planning to pursue a degree in business leaders...' },
    { id: 3, name: 'Swiss School of Business and Management (Card 3)', description: 'The Online Doctor of Business Administration (DBA) program at the Swiss School of Business and Management (SSBM) Geneva is specially designed for people planning to pursue a degree in business leaders...' },
    { id: 4, name: 'Swiss School of Business and Management (Card 4)', description: 'More universities to scroll through, showing the swiper functionality in action.' },
    { id: 5, name: 'Swiss School of Business and Management (Card 5)', description: 'Last card in the list to test the navigation buttons correctly.' },
  ];
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateProgress = (swiper) => {
    if (!swiper) return;

    const totalCards = universityData.length;
    const visibleSlides = swiper.params.slidesPerView;

    // Beginning arrow logic
    if (visibleSlides === 3) {
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

    <div className="py-8 md:py-12 ">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
        <div className="flex justify-between items-center mb-6">
          <Heading title={"Leading Online "} midtitle={"DBA"} lattitle={"Universities"} />
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
                        w-8 h-8 rounded-full flex items-center justify-center 
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
        <Swiper
          ref={swiperRef}
          modules={[Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = { swiper };
            updateProgress(swiper);
          }}
          onSlideChange={updateProgress}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {universityData?.map((uni) => (
            <SwiperSlide >
              <UniversityCard
                image={un1?.src}
                universityName={uni.name}
                description={uni.description}
                logoun={logoun}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}