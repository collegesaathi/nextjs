"use client"; // Next.js App router use kar rahe hain toh ye zaroori hai
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaArrowRightLong } from "react-icons/fa6";

export default function BlogHero() {

    const smallPosts = [
        {
            tag: "Online MBA",
            tagColor: "bg-orange-100 text-orange-700",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            img: "/images/blog/online.png"
        },
        {
            tag: "Doctorate",
            tagColor: "bg-green-100 text-green-700",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            img: "/images/blog/doctorate.png"
        },
        {
            tag: "Career Development",
            tagColor: "bg-purple-100 text-purple-700",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            img: "/images/blog/carrer.png"
        }
    ];

    const sliderItems = [1, 2, 3]; 

    return (
        <>
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: #d1d5db !important;
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background: #dc2626 !important;
                    width: 20px !important;
                    border-radius: 5px !important;
                }
                .swiper-pagination {
                    position: relative !important;
                    margin-top: 20px !important;
                }
            `}</style>

            <div className="max-w-7xl mx-auto  md:px-10 my-8 lg:my-16 font-poppins">
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#282529]">
                        Collegesathi Blog
                    </h1>
                    <p className="text-[#282529] mt-3 max-w-2xl text-sm md:text-base mx-auto opacity-80">
                        Stay updated with the latest insights, career advice, and education trends from our experts.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-10">
                    
                    {/* Featured Post (Left) */}
                    <div className="w-full lg:w-3/5 group cursor-pointer">
                        <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden rounded-2xl md:rounded-3xl">
                            <Image
                                src="/images/blog/bloghero.png"
                                alt="Featured Blog"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay for mobile readability if needed */}
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                        </div>
                    </div>

                    {/* Small Posts List (Right) */}
                    <div className="w-full lg:w-2/5 flex flex-col gap-6 justify-between">
                        {smallPosts.map((post, index) => (
                            <div key={index} className="flex gap-4 items-center group cursor-pointer">
                                <div className="relative shrink-0 overflow-hidden rounded-xl shadow-sm">
                                    <img 
                                        src={post.img} 
                                        alt="blog" 
                                        fill 
                                        className="object-cover  " 
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className={`text-[10px] md:text-[11px] uppercase font-semibold px-2 py-1 rounded w-fit ${post.tagColor}`}>
                                        {post.tag}
                                    </span>
                                    <h3 className="text-sm md:text-base lg:text-lg font-[600] text-[#282529] line-clamp-2 leading-snug group-hover:text-red-600 transition-colors">
                                        {post.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- SWIPER SLIDER SECTION --- */}
                <div className="mt-12 md:mt-20">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 4000 }}
                        pagination={{ clickable: true }}
                        className="rounded-3xl overflow-hidden"
                    >
                        {sliderItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative bg-[#FFF5F5] bg-[url('/images/blog/sliderbg.png')] bg-no-repeat bg-cover rounded-3xl border border-red-50 p-6 md:px-12 lg:px-20 min-h-[140px] flex items-center">
                                    <div className="flex flex-row items-center justify-between w-full gap-4">
                                        
                                        {/* Left: Character Image */}
                                        <div className="relative w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36 shrink-0">
                                            <Image
                                                src="/images/blog/scholarboy.png"
                                                alt="CS Clikpick"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* Center: Text Container */}
                                        <div className="flex-1 text-left px-2 md:px-6">
                                            <h3 className="text-sm md:text-xl lg:text-2xl font-medium text-gray-800 leading-tight">
                                                Compare & Explore Verified Online Universities at one place with 
                                                <span className="text-red-600 font-bold ml-1">CS Clikpick!</span>
                                            </h3>
                                        </div>

                                        {/* Right: Button */}
                                        <div className="shrink-0">
                                            <Link href="/compare">
                                                <button className="bg-red-600 hover:bg-red-700 text-white p-3 md:px-8 md:py-3 rounded-full md:rounded-2xl transition-all shadow-lg flex items-center justify-center group">
                                                   <FaArrowRightLong className="text-lg md:text-xl group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}