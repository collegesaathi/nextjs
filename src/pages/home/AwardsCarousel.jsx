'use client'

import { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Group from "../asserts/home/Group.png"

export default function AwardsCarousel() {
    // Award items data
    const awardItems = [
        {
            id: 1,
            image: Group?.src,
            title: 'Award Title 1',
            year: '2024'
        },
        {
            id: 2,
            image: Group?.src,
            title: 'Award Title 2',
            year: '2024'
        },
        {
            id: 3,
            image: Group?.src,
            title: 'Award Title 3',
            year: '2024'
        },
        {
            id: 4,
            image: Group?.src,
            title: 'Award Title 4',
            year: '2024'
        },
        {
            id: 5,
            image: Group?.src,
            title: 'Award Title 5',
            year: '2023'
        },
        {
            id: 6,
            image: Group?.src,
            title: 'Award Title 6',
            year: '2023'
        },
        {
            id: 7,
            image: Group?.src,
            title: 'Award Title 7',
            year: '2023'
        },
        {
            id: 8,
            image: Group?.src,
            title: 'Award Title 8',
            year: '2023'
        },
    ]

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

    return (
        <>
            {/* Desktop Version */}
            <section className="py-16 bg-white hidden lg:block">
                <div
                    className="w-[1178px] mx-auto"
                    data-aos="zoom-in-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    data-aos-once="true"
                >
                    {/* Custom Header */}
                    <div className="text-left mb-8">
                        <h2 className="font-poppins text-[28px] md:text-[32px] font-semibold text-[#1D1F2C] leading-tight">
                            Our Achievements & <span className="text-[#EC1E24]">Awards</span>
                        </h2>
                    </div>

                    {/* Swiper Carousel */}
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={24}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        onSwiper={handleSwiper}
                        onSlideChange={onSlideChange}
                        breakpoints={carouselBreakpoints}
                    >
                        {awardItems.map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <div
                                    className={`
                    flex flex-col items-center justify-center transition-all duration-300 cursor-pointer pt-10
                    ${isActiveSlide(index) ? 'active-slide' : ''}
                  `}
                                >
                                    <div className="relative mb-4">
                                        <img src={item.image} alt={item.title} className="w-[243px] h-auto" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {awardItems.slice(0, 4).map((_, index) => (
                            <div
                                key={`dot-${index}`}
                                onClick={() => goToSlide(index)}
                                className={`
                  w-[9px] h-[9px] rounded-full cursor-pointer transition-all duration-300
                  ${currentSlideIndex === index ? 'bg-[#EC1E24]' : 'bg-[#DFDFDF]'}
                `}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mobile Version */}
            <section className="py-8 bg-white lg:hidden block">
                <div className="w-full mx-auto px-4">
                    {/* Custom Header */}
                    <div className="text-left mb-8">
                        <h2 className="font-poppins text-[20px] md:text-[32px] font-semibold text-[#1D1F2C] leading-tight">
                            Our Achievements & <span className="text-[#EC1E24]">Awards</span>
                        </h2>
                    </div>

                    {/* Swiper Carousel */}
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={15}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        onSwiper={handleSwiper}
                        onSlideChange={onSlideChange}
                    >
                        {awardItems.map((item, index) => (
                            <SwiperSlide key={item.id}>
                                <div
                                    className={`
                    flex flex-col items-center justify-center transition-all duration-300 cursor-pointer pt-4
                    ${isActiveSlide(index) ? 'active-slide' : ''}
                  `}
                                >
                                    {/* Award Image */}
                                    <div className="relative">
                                        <img src={item.image} alt={item.title} className="w-[243px] h-auto" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {awardItems.slice(0, 3).map((_, index) => (
                            <div
                                key={`dot-${index}`}
                                onClick={() => goToSlide(index)}
                                className={`
                  w-[9px] h-[9px] rounded-full cursor-pointer transition-all duration-300
                  ${currentSlideIndex === index ? 'bg-[#EC1E24]' : 'bg-[#DFDFDF]'}
                `}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}