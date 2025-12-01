"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import StarRating from "@/common/StarRating";

export default function Reviews() {
    const [activeTab, setActiveTab] = useState("average");
    const [desktopProgress, setDesktopProgress] = useState(0);

    const desktopSwiperRef = useRef(null);
    const infraSwiperRef = useRef(null);
    const curriculumSwiperRef = useRef(null);
    const valueSwiperRef = useRef(null);

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

    const updateProgress = (swiper) => {
        const total = swiper.slides.length - (swiper.params.loop ? 2 : 0);
        setDesktopProgress(((swiper.realIndex + 1) / total) * 100);
    };

    const getCurrentSwiper = () => {
        if (activeTab === "average") return desktopSwiperRef.current;
        if (activeTab === "infrastructure") return infraSwiperRef.current;
        if (activeTab === "curriculum") return curriculumSwiperRef.current;
        if (activeTab === "value") return valueSwiperRef.current;
    };

    const slidePrev = () => getCurrentSwiper()?.slidePrev();
    const slideNext = () => getCurrentSwiper()?.slideNext();

    return (
        <section className="w-full px-6 py-12 mx-auto hidden lg:block">
            <div className="w-[860px]">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-[26px] font-bold text-[#363535]">NMIMS CDOE Reviews</h2>

                    <div className="flex items-center gap-4">
                        <div className="w-[191px] h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div style={{ width: `${desktopProgress}%` }} className="h-full bg-red-600"></div>
                        </div>

                        <button onClick={slidePrev} className="w-[35px] h-[35px] rounded-full border flex justify-center items-center">
                            {/* <RiArrowLeftLongLine /> */}
                        </button>
                        <button onClick={slideNext} className="w-[35px] h-[35px] rounded-full border flex justify-center items-center">
                            {/* <RiArrowRightLongLine /> */}
                        </button>
                    </div>
                </div>
                {/* Rating Overview */}
                <div className="mt-14 grid grid-cols-2 gap-8">
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
                    </div>

                    <div className="border p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Peripheral Ratings</h3>
                        {peripheralRatings.map((cat, i) => (
                            <div key={i} className="flex justify-between text-sm">
                                <span>{cat.name}</span>
                                <span>{cat.rating}</span>
                                <StarRating rating={cat.rating} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Tabs */}
                <div className="flex gap-3 mb-8">
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
                                if (tab.id === "average") desktopSwiperRef.current = swiper;
                                if (tab.id === "infrastructure") infraSwiperRef.current = swiper;
                                if (tab.id === "curriculum") curriculumSwiperRef.current = swiper;
                                if (tab.id === "value") valueSwiperRef.current = swiper;
                                updateProgress(swiper);
                            }}
                            onSlideChange={updateProgress}
                        >
                            {filteredReviews(tab.id).map((review, i) => (
                                <SwiperSlide key={i}>
                                    <div className="bg-gray-100 rounded-lg p-6 h-[200px] flex flex-col justify-between">
                                        <p className="text-sm text-gray-800">{review.content}</p>

                                        <div className="flex gap-1">
                                            <StarRating rating= {review?.rating}/>
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
