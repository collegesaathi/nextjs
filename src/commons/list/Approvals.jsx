import Heading from "@/common/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from "react";
import BackNext from "@/pages/components/BackNext";
function Approvals({approvals , approvalsdata}) {
    const swiperRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const updateProgress = (swiper) => {
        if (!swiper) return;

        const totalCards = approvalsdata?.length;
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
        <section className="w-full px-2 md:px-6 py-6 mx-auto" id="approvals-section">
            <div className="max-w-[1230px]">
                <BackNext
                    title={approvals?.title}
                    progress={progress}
                    isBeginning={isBeginning}
                    isEnd={isEnd}
                    onPrev={navigatePrev}
                    onNext={navigateNext}
                />
                 <div
                            className="text-[14px] md:text-[17px] font-poppins font-[400] text-[#363535] mb-6 font-poppins"
                            dangerouslySetInnerHTML={{ __html: approvals?.description || "" }}
                        />
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, A11y]}
                    spaceBetween={20}
                    slidesPerView={2}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        updateProgress(swiper);
                    }}
                    // Update state on slide change
                    onSlideChange={updateProgress}

                    // Responsive breakpoints for card display
                    breakpoints={{

                          320: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    className="mySwiper "
                    style={{ scrollbarWidth: "none" }}
                >
                    {approvalsdata && approvalsdata?.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="px-2 py-2">
                                <div
                                    className=" w-full h-[200] md:h-[300px]  shadow-md !bg-[#F7F6F6] p-4 
            flex flex-col items-center  justify-between 
            cursor-pointer group relative overflow-visible rounded-[20px]"

                                    onClick={() => handleAction(item)}
                                    onKeyDown={(e) => handleKeyDown(e, item)}
                                    tabIndex={0}
                                    role="button"
                                    aria-label={`${item.title} - ${item.description}`}
                                >

                                    {/* Image */}
                                 <div className="flex items-center justify-center bg-white rounded-[15px] 
     mb-0 lg:mb-2 w-full h-full lg:h-[300px] md:h-[130px] ">

  <img
    src={item.image}
    alt={item.title}
    className="object-contain object-center max-h-[90px] max-w-[230px] w-auto h-auto"
  />
</div>

                                    {/* Text */}
                                    <div className="md:text-center md:w-[60%] lg:w-full  py-4 lg:pl-0">
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