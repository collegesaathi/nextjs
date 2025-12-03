import Heading from "@/common/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from "react";

import Budget from "../assets/home/Budget.png";
import Confusion from "../assets/home/Confusion.png";
import EMIOptions from "../assets/home/EMIOptions.png";
import Suggestions from "../assets/home/Suggestions.png";
import Placements from "../assets/home/Placements.png"
import BackNext from "../components/BackNext";
function Approvals() {

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
    return (<>

        <div className="flex justify-between items-center px-6 mt-[50px]" id="approvals-section">
            {/* <Heading title={"Approvals and Accreditations"} />
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
            </div> */}

<BackNext
        title="Approvals and Accreditations"
     
        progress={progress}
        isBeginning={isBeginning}
        isEnd={isEnd}
        onPrev={navigatePrev}
  onNext={navigateNext}
      />
        </div>


        {/* Swiper Carousel */}

        <div className="px-6">
        <Swiper
            ref={swiperRef}
            modules={[Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            // Initialize Swiper and update state
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
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
            className="mySwiper "
            style={{ scrollbarWidth: "none" }}
        >
            {helpCards && helpCards?.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="px-2 ">
                        <div
                            className=" w-full h-[190px] lg:h-[202px] shadow-md !bg-[#0000001C] p-4 
            flex flex-row lg:flex-col items-center  justify-between 
            cursor-pointer group relative overflow-visible rounded-[20px]"
        
                            onClick={() => handleAction(item)}
                            onKeyDown={(e) => handleKeyDown(e, item)}
                            tabIndex={0}
                            role="button"
                            aria-label={`${item.title} - ${item.description}`}
                        >

                            {/* Image */}
                            <div className="flex justify-center bg-white rounded-[15px] items-center lg:justify-center mb-0 lg:mb-2 w-[40%] lg:w-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain  lg:h-[70px] lg:w-[70px] transition-transform duration-300 "
                                />
                            </div>

                            {/* Text */}
                            <div className="md:text-center w-[60%] lg:w-full pl-3 lg:pl-0">
                                <h2 className=" font-popins text-[14px] leading-5 mb-2 lg:text-[16.5px] 
              lg:leading-6 text-[#282529] lg:mb-3 transition-colors duration-300 ">
                                    {item.title}
                                </h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}


        </Swiper>
        </div>
    </>);
}

export default Approvals;