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
            tagColor: "bg-orange-100 ",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            img: "/images/blog/online.png"
        },
        {
            tag: "Doctorate",
            tagColor: "bg-green-100 ",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            img: "/images/blog/doctorate.png"
        },
        {
            tag: "Career Development",
            tagColor: "bg-purple-100 ",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            img: "/images/blog/carrer.png"
        }
    ];

    // Slider Data (Aap isse dynamic bana sakte hain)
    const sliderItems = [1, 2, 3]; 

    return (
        <>
            {/* Custom CSS for Red Pagination Dots */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: #d1d5db !important; /* gray-300 */
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background: #dc2626 !important; /* red-600 */
              
                    border-radius: 5px;
                }
                .swiper-pagination {
                    position: relative !important;
                    margin-top: 20px;
                }
            `}</style>

            <div className="my-20 font-poppins px-4 md:px-10">
                <div className="text-center mb-10 ">
                    <h1 className="text-[24px] md:text-[36px] font-[600] text-[#282529]">Collegesathi Blog</h1>
                    <p className="text-gray-500 mt-2 max-w-3xl text-[16px] mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid
                    </p>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-8">
                    {/* Featured Post (Left) */}
                    <div className="w-full md:w-1/2 relative group cursor-pointer">
                        <div className="relative w-full overflow-hidden rounded-3xl">
                            <img
                                src="/images/blog/bloghero.png"
                                alt="Featured Blog"
                                className="object-cover w-full h-full transition-transform duration-300 "
                            />
                        </div>
                    </div>

                    {/* Small Posts List (Right) */}
                    <div className="w-full md:w-1/2 flex flex-col justify-between gap-4">
                        {smallPosts.map((post, index) => (
                            <div key={index} className="flex gap-4 items-start group cursor-pointer">
                                <div className="relative w-32 h-24 md:w-40 md:h-20 shrink-0 overflow-hidden rounded-[5px]">
                                    <Image src={post.img} alt="blog" fill className="object-cover" />
                                </div>
                                <div className="flex flex-col justify-between gap-2">
                                    <span className={`text-[11px] uppercase font-[400] px-2 py-0.5 rounded w-fit ${post.tagColor}`}>
                                        {post.tag}
                                    </span>
                                    <h3 className="text-sm md:text-lg font-[600] text-[#282529] line-clamp-2 font-poppins">
                                        {post.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- SWIPER SLIDER SECTION --- */}
                <div className="mt-16">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        className="mySwiper"
                    >
                        {sliderItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col relative bg-[url('/images/blog/sliderbg.png')] bg-no-repeat bg-cover rounded-3xl border border-gray-100 px-6 md:px-20  overflow-hidden">
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                        {/* Left: Character Image & Text Container */}
                                        <div className="flex items-center gap-6 w-full justify-between">
                                            <div className="relative w-20 h-20 md:w-32 md:h-32 shrink-0">
                                                <Image
                                                    src="/images/blog/scholarboy.png"
                                                    alt="CS Clikpick"
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="text-center  flex-1">
                                                <h3 className="text-lg md:text-[22px] font-[500] max-w-xl text-gray-800  mx-auto ">
                                                    Compare & Explore Verified Online Universities at one place with <span className="text-red-600 font-[600] ">CS Clikpick!</span>
                                                </h3>
                                            </div>
                                            <div>
                                                <Link href="/compare">
                                                    <button className="bg-red-600 hover:bg-red-700 text-white  md:px-8 py-1 rounded-2xl transition-all shadow-lg flex items-center justify-center">
                                                       <FaArrowRightLong size={20} />
                                                    </button>
                                                </Link>
                                            </div>
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