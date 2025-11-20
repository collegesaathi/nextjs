"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Logo() {
    const [activeCategory, setActiveCategory] = useState(0);

    // Swiper Refs
    const desktopSwiper = useRef(null);
    const mobileSwiper = useRef(null);

    // Example Data (replace with your own)
    const universities = [
        { src: "/img/logo1.png", alt: "University 1" },
        { src: "/img/logo2.png", alt: "University 2" },
        { src: "/img/logo3.png", alt: "University 3" },
    ];

    const courseCategories = [
        { title: "MBA", subtitle: "Master Program" },
        { title: "BCA", subtitle: "Bachelor Program" },
        { title: "MCA", subtitle: "Master Program" },
    ];

    return (
        <div className="lg:pt-[50px]">

            {/* ========== Statistics Section ========== */}
            <div className="max-w-[927px] mx-auto px-4">
                {/* Desktop */}
                <div className="hidden lg:block h-[86px]">
                    <div className="flex justify-between items-center h-full">
                        <div className="w-[273px] h-[86px] border-2 border-[#FFB8B8] rounded-[19px] bg-white flex items-center px-3">
                            <div className="w-[62px] h-[62px] rounded-full bg-gradient-to-b from-[#AE1014] to-[#EC1E24] flex items-center justify-center">
                                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.68535 6.23886H16.3625V1.4509H17.5398V5.61014H18.9814V1.4509H20.2549V0H0.792969V1.4509H4.68535V6.23886Z" fill="white" />
                                    <path d="M6.12891 9.16729C6.12891 11.6074 8.10138 13.5925 10.5259 13.5925C12.9503 13.5925 14.9228 11.6074 14.9228 9.16729V7.68994H6.12891V9.16729Z" fill="white" />
                                    <path d="M16.2826 13.792L10.5238 21.6291L4.76505 13.792C2.02841 14.4993 0 17.0032 0 19.9749V24.7618H21.0477V19.9749C21.0477 17.0032 19.0193 14.4993 16.2826 13.792V13.792Z" fill="white" />
                                    <path d="M14.6314 13.5923H14.3558C13.3289 14.4953 11.9863 15.0432 10.5188 15.0432C9.05129 15.0432 7.70859 14.4953 6.68181 13.5923H6.40625L10.5188 19.1892L14.6314 13.5923Z" fill="white" />
                                </svg>

                            </div>
                            <div className="ps-4">
                                <h2 className="text-[30px] font-semibold">30k+</h2>
                                <p className="text-[14px]">Students</p>
                            </div>
                        </div>

                        <div className="w-[273px] h-[86px] border-2 border-[#FFB8B8] rounded-[19px] bg-white flex items-center px-3">
                            <div className="w-[62px] h-[62px] rounded-full bg-gradient-to-b from-[#AE1014] to-[#EC1E24] flex items-center justify-center">
                                <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.68535 6.23886H16.3625V1.4509H17.5398V5.61014H18.9814V1.4509H20.2549V0H0.792969V1.4509H4.68535V6.23886Z" fill="white" />
                                    <path d="M6.12891 9.16729C6.12891 11.6074 8.10138 13.5925 10.5259 13.5925C12.9503 13.5925 14.9228 11.6074 14.9228 9.16729V7.68994H6.12891V9.16729Z" fill="white" />
                                    <path d="M16.2826 13.792L10.5238 21.6291L4.76505 13.792C2.02841 14.4993 0 17.0032 0 19.9749V24.7618H21.0477V19.9749C21.0477 17.0032 19.0193 14.4993 16.2826 13.792V13.792Z" fill="white" />
                                    <path d="M14.6314 13.5923H14.3558C13.3289 14.4953 11.9863 15.0432 10.5188 15.0432C9.05129 15.0432 7.70859 14.4953 6.68181 13.5923H6.40625L10.5188 19.1892L14.6314 13.5923Z" fill="white" />
                                </svg>

                            </div>
                            <div className="ps-4">
                                <h2 className="text-[30px] font-semibold">200+</h2>
                                <p className="text-[14px]">Programs</p>
                            </div>
                        </div>

                        <div className="w-[273px] h-[86px] border-2 border-[#FFB8B8] rounded-[19px] bg-white flex items-center px-3">
                            <div className="w-[62px] h-[62px] rounded-full bg-gradient-to-b from-[#AE1014] to-[#EC1E24] flex items-center justify-center">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24.9996 4.16689V2.08344C24.9996 0.938124 24.0618 0 22.916 0H2.0834C0.93689 0 0 0.938124 0 2.08344V4.16689H24.9996Z" fill="white" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 6.25V22.9163C0 24.062 0.936858 25.0001 2.0834 25.0001H22.9162C24.0618 25.0001 24.9996 24.062 24.9996 22.9163V6.25H0ZM7.28906 9.375H12.4974V11.4584H7.28906V9.375ZM3.125 19.7921H5.2084V17.709H3.125V19.7921ZM5.2084 15.6241H3.125V13.541H5.2084V15.6241ZM3.125 11.4584H5.2084V9.375H3.125V11.4584ZM7.28906 13.541H16.6639V15.6241H7.28906V13.541ZM9.375 19.7921H14.5833V17.709H9.375V19.7921ZM21.8724 19.7921H16.6641V17.709H21.8724V19.7921ZM14.5859 11.4584H21.8774V9.375H14.5859V11.4584Z" fill="white" />
                                </svg>


                            </div>
                            <div className="ps-4">
                                <h2 className="text-[30px] font-semibold">30k+</h2>
                                <p className="text-[14px]">Students</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <div className="block lg:hidden">
                    <Swiper slidesPerView={3} spaceBetween={20} autoplay={{ delay: 3000 }}>
                        <SwiperSlide>
                            <div className="w-full h-[69px] border border-[#ffb8b8] rounded bg-white flex flex-col items-center justify-center">
                                <div className="w-[20px] h-[20px] bg-gradient-to-b from-[#AE1014] to-[#EC1E24] rounded-full flex items-center justify-center">
                                    <img src="/img/university-main/icons/students.svg" className="w-[10px]" />
                                </div>
                                <h2 className="text-[14px] font-semibold mt-1">30k+</h2>
                                <p className="text-[8px]">Students</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/* ========== Logos Section (example) ==========
            <div className="max-w-[1173px] mx-auto pt-[50px] px-4">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={4}
                    spaceBetween={40}
                    autoplay={{ delay: 2000 }}
                    loop
                    className="hidden lg:block"
                >
                    {universities.map((u, i) => (
                        <SwiperSlide key={i} className="flex justify-center">
                            <img src={u.src} alt={u.alt} className="h-10 object-contain" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div> */}

        </div>
    );
}
