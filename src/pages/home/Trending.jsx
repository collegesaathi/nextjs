'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import MBACard from '../common/MBACard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Heading from '../common/Heading';
import MBA from "../asserts/home/MBA.png"
export default function Trending() {
    const [activeIndex, setActiveIndex] = useState(1);
    const programData = [
        { id: 1, title: 'Data Science', tag: 'Transformative', rating: 5.0, imageSrc: '/images/data-science.jpg' },
        { id: 2, title: 'Project Management', tag: 'Focused', rating: 3.5, imageSrc: '/images/project-management.jpg' },
        { id: 3, title: 'Logistics and Supply Chain Management', tag: 'Dynamic', rating: 4.0, imageSrc: '/images/logistics.jpg' },
        { id: 4, title: 'Digital Marketing', tag: 'Trending', rating: 4.5, imageSrc: '/images/digital-marketing.jpg' },
        { id: 5, title: 'Healthcare Management', tag: 'Vital', rating: 4.2, imageSrc: '/images/healthcare.jpg' },
        { id: 1, title: 'Data Science', tag: 'Transformative', rating: 5.0, imageSrc: '/images/data-science.jpg' },
        { id: 2, title: 'Project Management', tag: 'Focused', rating: 3.5, imageSrc: '/images/project-management.jpg' },
        { id: 3, title: 'Logistics and Supply Chain Management', tag: 'Dynamic', rating: 4.0, imageSrc: '/images/logistics.jpg' },
        { id: 4, title: 'Digital Marketing', tag: 'Trending', rating: 4.5, imageSrc: '/images/digital-marketing.jpg' },
        { id: 5, title: 'Healthcare Management', tag: 'Vital', rating: 4.2, imageSrc: '/images/healthcare.jpg' },
    ];
    const swiperRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const updateProgress = (swiper) => {
        if (!swiper) return;

        const totalCards = programData?.length;
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
    const progressBarTotalWidth = '120px';

    const progressWidthStyle = {
        width: `${progress}%`,
    };


    return (
        <div className="py-4 md:py-8 ">
            <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
                <div className="flex justify-between items-center mb-6">
                    <Heading title={"Best Trending Online"} midtitle={"MBA Specializations"} lattitle={"2025"} />
                    <div className="flex flex-wrap items-center justify-end md:space-x-4">
                        <div className={`w-[${progressBarTotalWidth}] h-1.5 bg-gray-300 rounded-full overflow-hidden`}>
                            <div
                                className="h-full bg-[#EC1E24] transition-all duration-300 ease-in-out"
                                style={progressWidthStyle}
                            ></div>
                        </div>
                        <div className="flex  space-x-2 mt-4 md:mt-0">
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
                    {programData && programData?.map((program, index) => (
                        <SwiperSlide key={program.id}>
                            <MBACard
                                title={program.title}
                                tag={program.tag}
                                rating={program.rating}
                                progress={program.progress}
                                imageSrc={MBA?.src || '/placeholder-image.jpg'} // Fallback
                                isActive={index === activeIndex}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* "View More" Button at the bottom */}
                {/* <div className="text-center mt-8">
                    <button className="px-8 py-3 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-150 shadow-lg">
                        View More
                    </button>
                </div> */}

            </div>
        </div>
    );
}