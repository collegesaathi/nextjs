"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import BackNext from "@/pages/components/BackNext";

const partners = [
  { name: "Zalaris India", logo: "/images/university/showcase/1.png" },
  { name: "Alchaw Metprint", logo: "/images/university/showcase/1.png" },
  { name: "IndiaMart", logo: "/images/university/showcase/1.png" },
  { name: "Lodestar UM", logo: "/images/university/showcase/1.png" },
];

export default function PlacementPartners({placements  ,PlacementPartners}) {
  const swiperRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateProgress = (swiper) => {
    if (!swiper) return;

    const totalCards = partners.length;
    const visibleSlides = swiper.params.slidesPerView;

    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    const currentVisibleEnd = swiper.activeIndex + visibleSlides;
    let progressValue = (currentVisibleEnd / totalCards) * 100;

    setProgress(Math.min(100, Math.max(0, progressValue)));
  };

  const navigatePrev = () => swiperRef.current?.slidePrev();
  const navigateNext = () => swiperRef.current?.slideNext();

  return (

    <div className="mt-[20px] md:mt-[50px] bg-white">
      <section className="w-full px-6 py-6 mx-auto" id="placement-partners-section">
        <div className="max-w-[1230px]">
          <BackNext
            title={placements?.title}
            progress={progress}
            isBeginning={isBeginning}
            isEnd={isEnd}
            onPrev={navigatePrev}
            onNext={navigateNext}
          />
          {/* Description */}
           <div
                            className="ont-poppins text-[15px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4"
                            dangerouslySetInnerHTML={{ __html: placements?.description || "" }}
                        />

        {/* Swiper */}
        <Swiper
          slidesPerView={1.3}
          spaceBetween={15}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateProgress(swiper);
          }}
          onSlideChange={updateProgress}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 18 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 22 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
            1280: { slidesPerView: 4, spaceBetween: 30 },
          }}
          style={{ scrollbarWidth: "none" }}
          className="py-4"
        >
          {PlacementPartners?.map((partner, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-[170px] sm:h-[180px] lg:h-[202px] 
                shadow-md bg-[#0000000D] p-4 rounded-[20px]
                flex flex-row sm:flex-row lg:flex-col 
                items-center lg:items-start justify-between
                cursor-pointer transition-all duration-300"
                >
                  <div className="bg-white w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] lg:w-full lg:h-[110px] rounded-[15px] flex items-center justify-center">
                    <img
                      src={partner.image}
                      alt={partner.title}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  <p className="mt-3 text-[15px] md:text-[16px] font-medium text-[#363535] font-poppins text-center ">
                    {partner.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>
    </div>
  );
}
