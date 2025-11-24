'use client';
import React, { useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BlogCard from '../common/BlogCard';
import Heading from '../common/Heading';
import MBA from "../asserts/icon/1716465446-university-image.jpg"
import GlobalButton from '../common/GlobalButton';
export default function Blogs() {
    const blogData = [
        { id: 1, title: '15 Top Online MBA Colleges in India.... 1', imageSrc: '/images/sikkim-manipal.jpg', topText: 'A Complete Guide to Sikkim Manipal University Online Programs', date: 'Oct 10, 2024', source: 'Collegesathi' },
        { id: 2, title: '15 Top Online MBA Colleges in India.... 2', imageSrc: '/images/top-online-mba.jpg', topText: '15 Top Online MBA Colleges in India in 2025', date: 'Oct 10, 2024', source: 'Collegesathi' },
        { id: 3, title: '15 Top Online MBA Colleges in India....3', imageSrc: '/images/mit-pune.jpg', topText: 'Discover MIT Pune Distance Education Programs & Learn on Your Terms', date: 'Oct 10, 2024', source: 'Collegesathi', views: 126, shares: 21 },
        { id: 4, title: 'Another Important Blog Post', imageSrc: '/images/placeholder-4.jpg', topText: 'Latest Trends in EdTech', date: 'Oct 15, 2024', source: 'Collegesathi' },
        { id: 5, title: 'Future of Online Education', imageSrc: '/images/placeholder-5.jpg', topText: 'How AI is changing learning', date: 'Oct 20, 2024', source: 'Collegesathi' },
    ];
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const updateProgress = (swiper) => {
        if (!swiper) return;

        const totalCards = blogData?.length;
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
        swiperRef.current?.swiper.slidePrev();
    };

    const navigateNext = () => {
        swiperRef.current?.swiper.slideNext();
    };
    const progressBarTotalWidth = '180px';

    const progressWidthStyle = {
        width: `${progress}%`,
    };

    return (
        <div className="py-8 md:py-12 ">
            <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">

                <div className="flex justify-between items-center mb-6">
                    <Heading title={" Explore Our Latest"} midtitle={"Blogs"} />

                    <div className="flex items-center space-x-4">
                        <div className={`w-[${progressBarTotalWidth}] h-1.5 bg-gray-300 rounded-full overflow-hidden`}>
                            <div
                                className="h-full bg-[#EC1E24] transition-all duration-300 ease-in-out"
                                style={progressWidthStyle}
                            ></div>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                type="button"
                                onClick={navigatePrev}
                                disabled={isBeginning}
                                className={`
                        w-8 h-8 rounded-full flex items-center justify-center 
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
                        w-8 h-8 rounded-full flex items-center justify-center 
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
                    </div>
                </div>
                <Swiper
                    ref={swiperRef}
                   
                    modules={[Navigation, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    onSwiper={(swiper) => {
                        swiperRef.current = { swiper };
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
                    {blogData && blogData?.map((blog, index) => (
                        <SwiperSlide key={blog.id}>
                            <BlogCard
                                isActive={index === activeIndex}
                                title={blog.title}
                                imageSrc={MBA?.src}
                                topText={blog.topText}
                                date={blog.date}
                                source={blog.source}
                                views={blog.views}
                                shares={blog.shares}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex  justify-center text-center mt-8">
                    {/* <button className="px-8 py-3 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-150 shadow-lg">
                       
                    </button> */}
                    <GlobalButton title={" View More"} />
                </div>
            </div>


        </div>
    );
}