'use client';
import React, { useRef, useState, } from 'react';
import MBACard from '../../common/MBACard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Heading from '../../common/Heading';
import MBA from "../assets/home/MBA.png"

import BackNext from '../components/BackNext';




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
        swiperRef.current?.slidePrev();
    };

    const navigateNext = () => {
        swiperRef.current?.slideNext();
    };
  


    return (
        <div className="py-4 md:py-8 ">
            <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
         


<BackNext
        title=" Best Trending Online"
        midtitle="MBA Specializations"
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
                        swiperRef.current = swiper;
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