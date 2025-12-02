"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import BackNext from "../components/BackNext";


const partners = [
    { name: "Zalaris India", logo: "/images/university/showcase/1.png" },
    { name: "Alchaw Metprint", logo: "/images/university/showcase/1.png" },
    { name: "IndiaMart", logo: "/images/university/showcase/1.png" },
    { name: "Lodestar UM", logo: "/images/university/showcase/1.png" },
];

export default function PlacementPartners() {

    const swiperRef = useRef(null);
  

    const [progress, setProgress] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);




    const updateProgress = (swiper) => {
        if (!swiper) return;

        const totalCards = partners.length;
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
        swiperRef.current?.slidePrev();
    };

    const navigateNext = () => {
        swiperRef.current?.slideNext();
    };

    return (
        <section className="mt-[50px] px-6">
            <div className=" bg-white" >
        

                <BackNext
                  
        title="NMIMS CDOE Hiring and Placement Partners"
     
        progress={progress}
        isBeginning={isBeginning}
        isEnd={isEnd}
        onPrev={navigatePrev}
  onNext={navigateNext}
      />


                <p className="font-poppins text-[16px] text-[#282529]" id="placement-partners-section">
                    The students at <strong className="ml-1">NMIMS Center for Distance and Online Education CDOE </strong>
                    have immense hiring and placement opportunities. The university has tie-ups with topmost companies, briefly mentioned below:
                </p>

                {/* Desktop Swiper */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        updateProgress(swiper);
                    }}
                    onSlideChange={updateProgress}
                    breakpoints={{
                        768: { slidesPerView: 2, spaceBetween: 25 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                        1280: { slidesPerView: 4, spaceBetween: 30 },
                    }}
                    style={{ scrollbarWidth: "none" }}
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index} className="px-2 my-6">
                            <div className="w-full h-[190px] lg:h-[202px] shadow-md !bg-[#0000001C] p-4 
            flex flex-row lg:flex-col items-center lg:items-start justify-between 
            cursor-pointer group relative overflow-visible rounded-[20px]">
                                <div className="bg-white w-full h-[109px] rounded-[15px] flex items-center justify-center ">
                                    <Image
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        width={71}
                                        height={71}
                                        className="object-contain"
                                    />
                                </div>
                                <p className="mt-3 text-[16.5px] font-medium text-[#363535] font-poppins">
                                    {partner.name}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
