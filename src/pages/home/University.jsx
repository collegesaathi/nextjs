"use client";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import UniversityCard from '../../common/UniversityCard';
import un1 from "../assets/home/un1.png"
import logoun from "../assets/home/logoun.png"
import Heading from '../../common/Heading';
import BackNext from '../components/BackNext';


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
    swiperRef.current?.slidePrev();
  };

  const navigateNext = () => {
    swiperRef.current?.slideNext();
  };



  return (

    <div className="py-4 md:py-8 bg-[#F9FAFB]">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
   

<BackNext
        title="Leading Online"
        midtitle="DBA"
        progress={progress}
        isBeginning={isBeginning}
        isEnd={isEnd}
        onPrev={navigatePrev}
  onNext={navigateNext}
      />
        <Swiper
          ref={swiperRef}
          modules={[Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current =  swiper ;
            updateProgress(swiper);
          }}
          onSlideChange={updateProgress}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
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