'use client'

import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import BackNext from '@/pages/components/BackNext'


export default function SimilarUniversities() {
    // Award items data
    const universities = [
        {
            name: 'Manipal University Online',
            ranking: 75,
            fee: 175000,
        },
        {
            name: 'OP Jindal University',
            ranking: 75,
            fee: 175000,
        },
        {
            name: 'Dr. D.Y. Patil Vidyapeeth University Pune',
            ranking: 75,
            fee: 175000,
        },
        {
            name: 'Amity University Online',
            ranking: 75,
            fee: 175000,
        },
        {
            name: 'Lovely Professional University',
            ranking: 75,
            fee: 175000,
        },
    ]

    // Carousel breakpoints for responsive design
    const carouselBreakpoints = {
        320: { slidesPerView: 1, spaceBetween: 16 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
    }

    // Active slide tracking
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const swiperRef = useRef(null)

    // Handle slide change from carousel
   

    // Check if a slide is currently active/visible
   

    const handleSwiper = (swiper) => {
        swiperRef.current = swiper
    }

   


    const [progress, setProgress] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const updateProgress = (swiper) => {
        if (!swiper) return;

        const totalCards = universities.length;
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
  

    return (
        <>
            {/* Desktop Version */}
            <div className="py-6 px-4 md:py-6 " id="similar-universities-section">
                <div className=" container sm:container md:container lg:container xl:max-w-[1230px] ">

                  


                    <BackNext

                        title=" Similar Universities"

                        progress={progress}
                        isBeginning={isBeginning}
                        isEnd={isEnd}
                        onPrev={navigatePrev}
                        onNext={navigateNext}
                    />

                    <div   >
                        <Swiper
                            spaceBetween={20}
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
                            {universities?.map((university, index) => (
                            <SwiperSlide key={index} className="px-2 my-3">
                            <div
                                className="
                                    w-full h-[114px]  rounded-[15px] bg-[#f7f6f6] 
                                    p-4 flex flex-col justify-between cursor-pointer 
                                    transition-transform duration-300 hover:scale-105
                                "
                            >
                                <h3 className="font-poppins font-semibold text-[17px] text-[#363535] mb-3 
                                    whitespace-normal break-words leading-tight line-clamp-2">
                                    {university.name}
                                </h3>
                        
                                <div className="flex items-center space-x-1.5">
                                    <div className="flex items-center space-x-1.5 font-poppins font-light text-[16px] text-[#282529]">
                                        <img src="/images/money.svg" alt="similar" />
                                        <span>INR {university.fee}</span>
                                    </div>
                        
                                    <div className="flex items-center">
                                        <div className="w-[3px] h-[3px] rounded-full bg-[#282529]"></div>
                        
                                        <div className="
                                           border-[0.75px] bg-white px-2  border-[#f7f6f6]
                                            font-poppins font-light text-[12px] text-[#282529]
                                            rounded-full flex items-center justify-center mx-1
                                        ">
                                            NIRF Ranking
                                        </div>
                        
                                        <p className="font-poppins font-semibold text-[16px] text-[#282529]">
                                            {university.ranking}
                                        </p>
                                    </div>
                                </div>
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