import React from "react"
import Link from "next/link";
import Image from "next/image";

export default function BlogHero(){

       const smallPosts = [
        {
            tag: "Online MBA",
            tagColor: "bg-orange-100 text-orange-600",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            img: "/images/blog/online.png"
        },
        {
            tag: "Doctorate",
            tagColor: "bg-green-100 text-green-600",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            img: "/images/blog/doctorate.png"
        },
        {
            tag: "Career Development",
            tagColor: "bg-purple-100 text-purple-600",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
            img: "/images/blog/carrer.png"
        }
    ];
    return(

        <>
        <div className="my-20 font-poppins">
           <div className="text-center mb-10 ">
                    <h1 className="text-[24px] md:text-[36px] font-[600] text-[#282529]">Collegesathi Blog</h1>
                    <p className="text-gray-500 mt-2 max-w-2xl text-[16px] mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid
                    </p>
                </div>

           
                <div className="flex w-full gap-8">
                    
                    {/* Featured Post (Left) */}
                    <div className=" w-1/2 relative group cursor-pointer">
                        <div className="relative  w-full overflow-hidden rounded-3xl">
                            <img 
                                src="/images/blog/bloghero.png" // Replace with your image path
                                alt="Featured Blog"
                              
                                className="object-cover transition-transform duration-300 "
                            />
                            {/* Overlay Text Content (Matching the image style) */}
                         
                        </div>
                    </div>

                    {/* Small Posts List (Right) */}
                    <div className=" w-1/2 flex flex-col justify-between">
                        {smallPosts.map((post, index) => (
                            <div key={index} className="flex gap-4 items-start group cursor-pointer">
                                <div className="relative w-32 h-24 md:w-40 md:h-18 shrink-0 overflow-hidden rounded-xl">
                                    <Image src={post.img} alt="blog" fill className="object-cover" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded w-fit ${post.tagColor}`}>
                                        {post.tag}
                                    </span>
                                    <h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-red-600">
                                        {post.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- BOTTOM CTA BANNER --- */}
                <div className="mt-16 relative bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100 overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Left: Character Image */}
                        <div className="flex items-center gap-6">
                            <div className="relative w-24 h-24 md:w-32 md:h-32">
                                <Image 
                                    src="/images/student-character.png" // Replace with your 3D character image
                                    alt="CS Clikpick"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                                    Compare & Explore Verified Online Universities
                                </h3>
                                <p className="text-lg text-gray-700">
                                    at one place with <span className="text-red-600 font-bold uppercase">CS Clikpick!</span>
                                </p>
                            </div>
                        </div>

                        {/* Right: Action Button */}
                        <Link href="/compare">
                            <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-2xl transition-all shadow-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="arrow_forward" />
                                    <path d="M13 5l7 7-7 7M5 12h14" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* --- PAGINATION DOTS --- */}
                <div className="flex justify-center gap-2 mt-8">
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span className="w-2 h-2 rounded-full bg-red-600"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                </div>
                </div>

                </>
    )
}