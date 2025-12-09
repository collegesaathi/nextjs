"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import StarRating from "@/common/StarRating";
import Image from "next/image";

import BackNext from "../components/BackNext";

export default function Reviews() {
    const [activeTab, setActiveTab] = useState("average");
    const [desktopProgress, setDesktopProgress] = useState(0);

    const desktopSwiperRef = useRef(null);
    const infraSwiperRef = useRef(null);
    const curriculumSwiperRef = useRef(null);
    const valueSwiperRef = useRef(null);

    const swiperRef = useRef(null);
  

    const [progress, setProgress] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);


    

    useEffect(() => {
        AOS.init({ once: true, easing: "ease-out-quad", offset: 120 });
    }, []);

    const tabs = [
        { id: "average", name: "Average Ratings" },
        { id: "infrastructure", name: "Digital Infrastructure" },
        { id: "curriculum", name: "Curriculum" },
        { id: "value", name: "Value For Money" },
    ];

    const ratingsBreakdown = [
        { stars: 5, percentage: 58 },
        { stars: 4, percentage: 24 },
        { stars: 3, percentage: 8 },
        { stars: 2, percentage: 6 },
        { stars: 1, percentage: 4 },
    ];

    const peripheralRatings = [
        { name: "Average Ratings", rating: 3.2 },
        { name: "Digital Infrastructure", rating: 4.2 },
        { name: "Curriculum", rating: 3.9 },
        { name: "Value For Money", rating: 3.1 },
    ];

    const reviews = [
        { type: "average", rating: 4, content: "Great experience overall with quality faculty." },
        { type: "infrastructure", rating: 5, content: "Fantastic online platform and support." },
        { type: "curriculum", rating: 4, content: "Updated curriculum with industry focus." },
        { type: "value", rating: 3, content: "Good ROI but could improve." },
        { type: "average", rating: 4, content: "Great experience overall with quality faculty." },
        { type: "infrastructure", rating: 5, content: "Fantastic online platform and support." },
        { type: "curriculum", rating: 4, content: "Updated curriculum with industry focus." },
        { type: "value", rating: 3, content: "Good ROI but could improve." },
    ];

    const filteredReviews = (type) =>
        type === "average" ? reviews : reviews.filter((r) => r.type === type);

    // const updateProgress = (swiper) => {
    //     const total = swiper.slides.length - (swiper.params.loop ? 2 : 0);
    //     setDesktopProgress(((swiper.realIndex + 1) / total) * 100);
    // };

    const getCurrentSwiper = () => {
        if (activeTab === "average") return desktopSwiperRef.current;
        if (activeTab === "infrastructure") return infraSwiperRef.current;
        if (activeTab === "curriculum") return curriculumSwiperRef.current;
        if (activeTab === "value") return valueSwiperRef.current;
    };

    const slidePrev = () => getCurrentSwiper()?.slidePrev();
    const slideNext = () => getCurrentSwiper()?.slideNext();





    const updateProgress = (swiper) => {
        if (!swiper) return;

        const totalCards = reviews.length;
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
        <section className="px-6 py-6 block" id="reviews-section">
            <div className="max-w-[1230px]">

             

<BackNext
                  
                  title="NMIMS CDOE Reviews"
               
                  progress={progress}
                  isBeginning={isBeginning}
                  isEnd={isEnd}
                  onPrev={navigatePrev}
            onNext={navigateNext}
                />


                {/* Rating Overview */}
                <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="border p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Ratings Overview</h3>

                        {ratingsBreakdown.map((r, i) => (
                            <div key={i} className="flex items-center gap-3 mb-2">
                                <span>{r.stars}★</span>
                                <div className="flex-1 h-2 bg-gray-200 rounded">
                                    <div style={{ width: `${r.percentage}%` }}
                                        className="h-full bg-yellow-400 rounded"></div>
                                </div>
                                <span>{r.percentage}%</span>
                            </div>
                        ))}
                         <div className="mt-[20px] space-y-2">
                         <p className="font-poppins text-[17px] font-[600]">Write Your Review</p>
                         <p className="text-[10px] w-[170px]">Share your feedback and help other students</p>
                         <button className="w-[129px] h-[21px] rounded-[6px] bg-[#ec1e24] font-poppins text-[12px] leading-[18px] text-white flex items-center justify-center">
                                            Add to Compare
                                        </button>
                         </div>
                  
                    </div>



                     <div className=" justify-center flex flex-col gap-4 h-full">

                     <div className="flex items-center justify-center gap-4  rounded-[8px] py-2 bg-[#fcf0ee] h-1/3">
                <div className=" w-full h-auto  flex flex-col items-center justify-center py-6">
                  <h3 className="font-poppins font-semibold text-[30px] sm:text-[55px] text-[#282529]">4.5</h3>
                  <StarRating rating="4.5" />
                  <p className="font-poppins text-[12px] text-[#282529]">
                    Based on 20 Reviews
                  </p>
                </div>
      
              </div>
                    <div className="border p-5 rounded-lg h-2/3">
                        <h3 className="text-xl font-semibold mb-4">Peripheral Ratings</h3>
                        {peripheralRatings.map((cat, i) => (
                            <div key={i} className="flex justify-between text-sm ">
                                <span>{cat.name}</span>
                                <div className=" flex justify-center gap-2 items-center">
                                <span className="text-[17px] font-[600]">{cat.rating}</span>
                                <StarRating rating={cat.rating} />
                                </div>
                            </div>
                        ))}
                    </div>

                    </div>
                </div>
                {/* Tabs */}
                <div className="flex flex-wrap gap-3 mb-8 mt-[40px]">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 h-[30px] rounded-full border 
                ${activeTab === tab.id ? "bg-red-600 text-white" : "text-gray-600"}`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Swiper */}
                {tabs.map((tab) => (
                    activeTab === tab.id && (
                        <Swiper
                            key={tab.id}
                            spaceBetween={15}
                            loop
                            breakpoints={{
                                0: {
                                    slidesPerView: 1, // Mobile
                                },
                                768: {
                                    slidesPerView: 2, // Tablet
                                },
                                1024: {
                                    slidesPerView: 4, // Desktop
                                },
                            }}

                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                                updateProgress(swiper);
                            }}
                            onSlideChange={updateProgress}
                        >
                            {filteredReviews(tab.id).map((review, i) => (
                                <SwiperSlide key={i}>
                                    <div className="bg-gray-100 rounded-lg p-6 h-[200px] flex flex-col justify-between">
                                        <p className="text-sm text-gray-800">{review.content}</p>

                                        <div className="flex gap-1">

                                            <Image src="/images/university/reviewprofile.svg" alt="profile" width={50} height={50}/>

                                            <div>
                                            <p>{review.type}</p>
                                            <StarRating rating= {review?.rating}/>
                                            </div>
                                          
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )
                ))}



            </div>
        </section>
    );
}
