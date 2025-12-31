'use client'

import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import BackNext from '@/pages/components/BackNext'
import Listing from '@/pages/api/Listing'
import { useRole } from '@/context/RoleContext';

export default function Universities() {
    const [compareUniversities, setcompareUniversities] = useState("")
    const [Loading, setLoading] = useState(false)

     const { selectedUnis, toggleUniversity } = useRole();




    const fetchData = async () => {
        try {

            const main = new Listing();
            const response = await main.UniversityAll();
            const universities = response?.data?.data?.universities || [];
            console.log("universities" ,universities)
            setcompareUniversities(universities);
        } catch (error) {
            console.log("error", error);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);



    // Carousel breakpoints for responsive design
    const carouselBreakpoints = {
        320: { slidesPerView: 1, spaceBetween: 16 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 24 },
        1024: { slidesPerView: 4, spaceBetween: 24 },
    }

    // Active slide tracking
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const swiperRef = useRef(null)

    // Handle slide change from carousel
    const onSlideChange = (swiper) => {
        setCurrentSlideIndex(swiper.realIndex)
    }

    // Check if a slide is currently active/visible
    const isActiveSlide = (index) => {
        return currentSlideIndex === index
    }

    const handleSwiper = (swiper) => {
        swiperRef.current = swiper
    }

    const goToSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index)
        }
    }


    const [progress, setProgress] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const updateProgress = (swiper) => {
        if (!swiper) return;

        const totalCards = compareUniversities.length;
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
    const progressBarTotalWidth =
        typeof window !== "undefined" && window.innerWidth >= 1024 ? "180px" : "120px";


    const progressWidthStyle = {
        width: `${progress}%`,
    };

    return (
        <>
            {/* Desktop Version */}
            <div className="py-6 px-2 md:px-6 " id="universities-comparison-section">
                <div className=" container sm:container md:container lg:container xl:max-w-[1230px] ">


                    <BackNext

                        title="Compare with Other Universities"

                        progress={progress}
                        isBeginning={isBeginning}
                        isEnd={isEnd}
                        onPrev={navigatePrev}
                        onNext={navigateNext}
                    />

                    <div   >
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={24}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination]}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                                updateProgress(swiper);
                            }}
                            // Update state on slide change
                            onSlideChange={updateProgress}
                            breakpoints={carouselBreakpoints}
                        >
                            {compareUniversities && compareUniversities?.map((university, index) => {
                                 const isSelected = selectedUnis.some(u => u.id === university.id);

                                

                                return(
                                <SwiperSlide key={index}>
                                    <div className="w-full h-[232px] rounded-[10px] border border- [rgba(188,188,188,0.7)] p-3 flex flex-col justify-between items-center">

                                        {/* University Logo */}
                                        <div className="rounded-[14px] h-[81px] bg-white border border-[rgba(188,188,188,0.3)] shadow-[0px_0px_2px_rgba(0,0,0,0.11)] flex items-center justify-center p-3 text-center">
                                            <img
                                                src={university.icon}
                                                alt={university.name}
                                                className="w-full object-contain"
                                            />
                                        </div>

                                        {/* University Name */}
                                        <h3 className="font-poppins font-semibold text-[17px] leading-[25px] text-[#282529] text-center">
                                            {university.name}
                                        </h3>

                                        {/* Student Rating */}
                                        <div className="space-y-1.5 text-center">
                                            <p className="font-poppins text-[12px] leading-[18px] text-[#282529] font-light">
                                                Student Rating
                                            </p>

                                            <div className="flex justify-center items-center gap-1.5">
                                                <div className="flex gap-1.5 text-xs">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span
                                                            key={i}
                                                            className={
                                                                i < university.rating
                                                                    ? "text-yellow-400"
                                                                    : "text-[#DDDDDD]"
                                                            }
                                                        >
                                                            ★
                                                        </span>
                                                    ))}
                                                </div>

                                                <span className="font-poppins text-[8px] leading-[12px] text-[#61ab58] font-light">
                                                    ({university.reviews} Reviews)
                                                </span>
                                            </div>
                                        </div>

                                        {/* Button */}
                                        <button 
                                         onClick={() => toggleUniversity(university)}
                                        className={`w-[129px] h-[21px] rounded-[6px] bg-[#ec1e24] font-poppins text-[12px] leading-[18px] text-white flex items-center justify-center cursor-pointer ${isSelected ? "bg-gray-400" : "bg-[#ec1e24] text-white"}`}
                                        >
                                            Add to Compare
                                        </button>
                                    </div>
                                </SwiperSlide>
                                )
})}
                        </Swiper>

                    </div>
                </div>
            </div>



        </>
    )
}