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
            title: "Budget constraints?",
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
    return (<>
        <section className="w-full px-6 py-6 mx-auto" id="approvals-section">
            <div className="max-w-[1100px]">
                <BackNext
                    title="Approvals and Accreditations"
                    progress={progress}
                    isBeginning={isBeginning}
                    isEnd={isEnd}
                    onPrev={navigatePrev}
                    onNext={navigateNext}
                />
                <p className="text-[15px] md:text-[17px] font-poppins font-[400] text-[#363535] mb-6 font-poppins">
                    The online courses from the<strong> NMIMS CDOE</strong>  have gained high popularity and is supported by
                    various approvals/accreditations, which add to their value. These approvals and accreditations
                    are proof of the best education
                    quality and fair educational policies. These accreditations are:
                </p>
                {/* Swiper Carousel */}
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
                                    <div className="flex justify-center bg-white rounded-[15px] items-center lg:justify-center mb-0 lg:mb-2 w-full lg:w-[128px] h-[109px]">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-[70px] h-[70px] object-cover  lg:h-[70px] lg:w-[70px] transition-transform duration-300 "
                                        />
                                    </div>
                                    {/* Text */}
                                    <div className="md:text-center w-[60%] lg:w-full pl-3 lg:pl-0">
                                        <h2 className=" font-popins text-[15px] leading-5 mb-2 lg:text-[16px] 
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
        </section>
    </>);
}

export default Approvals;