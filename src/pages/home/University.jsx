"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import UniversityCard from '../common/UniversityCard';

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
    console.log("swiper", swiper)
    if (!swiper || swiper.slides.length === 0) return 0;
    const totalCards = universityData.length;
    const visibleSlides = swiper.params.slidesPerView;
    const maxScrollableIndex = totalCards - Math.floor(visibleSlides);

    if (maxScrollableIndex <= 0) {
      setProgress(100);
      return;
    }

    const currentProgress = (swiper.activeIndex / maxScrollableIndex) * 100;
    setProgress(Math.min(100, Math.max(0, currentProgress)));

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
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Leading Online <span className="text-red-600">DBA</span> Universities
        </h1>
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
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {universityData?.map((uni) => (
          <SwiperSlide >
            <UniversityCard
              universityName={uni.name}
              description={uni.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}