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
        <div className="py-8 md:py-12 ">
            <div className="mx-auto container sm:container md:container lg:container xl:max-w-[900px]  px-4">
                {/* Desktop */}
                <div className="flex justify-between items-center h-full gap-5">
                    <div className="
    w-[273px] h-auto 
    border-2 border-[#FFB8B8] 
    rounded-[19px] 
    bg-white 
    flex flex-col lg:flex-row
    items-center lg:items-start
    px-2 py-2
    md:px-3 md:py-4 gap-2 md:gap-4 
">
                        {/* ICON */}
                        <div className="
        w-[40px] h-[40px] md:w-[62px] md:h-[62px] 
        rounded-full 
        bg-gradient-to-b from-[#AE1014] to-[#EC1E24] 
        flex items-center justify-center
    ">
                            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.68535 6.23886H16.3625V1.4509H17.5398V5.61014H18.9814V1.4509H20.2549V0H0.792969V1.4509H4.68535V6.23886Z" fill="white" />
                                <path d="M6.12891 9.16729C6.12891 11.6074 8.10138 13.5925 10.5259 13.5925C12.9503 13.5925 14.9228 11.6074 14.9228 9.16729V7.68994H6.12891V9.16729Z" fill="white" />
                                <path d="M16.2826 13.792L10.5238 21.6291L4.76505 13.792C2.02841 14.4993 0 17.0032 0 19.9749V24.7618H21.0477V19.9749C21.0477 17.0032 19.0193 14.4993 16.2826 13.792V13.792Z" fill="white" />
                                <path d="M14.6314 13.5923H14.3558C13.3289 14.4953 11.9863 15.0432 10.5188 15.0432C9.05129 15.0432 7.70859 14.4953 6.68181 13.5923H6.40625L10.5188 19.1892L14.6314 13.5923Z" fill="white" />
                            </svg>
                        </div>

                        {/* TEXT */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-[14px] md:text-[30px] font-poppins font-[600] text-[#282529]">30k+</h2>
                            <p className="text-[10px] md:text-[14px] font-poppins text-[#282529]">Students</p>
                        </div>
                    </div>


                    <div className="w-[273px] h-auto 
    border-2 border-[#FFB8B8] 
    rounded-[19px] 
    bg-white 
    flex flex-col lg:flex-row
    items-center lg:items-start
    px-2 py-2
    md:px-3 md:py-4 gap-2 md:gap-4 ">
                        <div className="  w-[40px] h-[40px] md:w-[62px] md:h-[62px] 
        rounded-full 
        bg-gradient-to-b from-[#AE1014] to-[#EC1E24] 
        flex items-center justify-center">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9996 4.16689V2.08344C24.9996 0.938124 24.0618 0 22.916 0H2.0834C0.93689 0 0 0.938124 0 2.08344V4.16689H24.9996Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.25V22.9163C0 24.062 0.936858 25.0001 2.0834 25.0001H22.9162C24.0618 25.0001 24.9996 24.062 24.9996 22.9163V6.25H0ZM7.28906 9.375H12.4974V11.4584H7.28906V9.375ZM3.125 19.7921H5.2084V17.709H3.125V19.7921ZM5.2084 15.6241H3.125V13.541H5.2084V15.6241ZM3.125 11.4584H5.2084V9.375H3.125V11.4584ZM7.28906 13.541H16.6639V15.6241H7.28906V13.541ZM9.375 19.7921H14.5833V17.709H9.375V19.7921ZM21.8724 19.7921H16.6641V17.709H21.8724V19.7921ZM14.5859 11.4584H21.8774V9.375H14.5859V11.4584Z" fill="white" />
                            </svg>


                        </div>
                        {/* TEXT */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-[14px] md:text-[30px] font-poppins font-[600] text-[#282529]">200+</h2>
                            <p className="text-[10px] md:text-[14px] font-poppins text-[#282529]">Programs</p>
                        </div>
                    </div>

                    <div className="w-[273px] h-auto 
    border-2 border-[#FFB8B8] 
    rounded-[19px] 
    bg-white 
    flex flex-col lg:flex-row
    items-center lg:items-start
    px-2 py-2
    md:px-3 md:py-4 gap-2 md:gap-4 ">
                        <div className=" w-[40px] h-[40px] md:w-[62px] md:h-[62px] 
        rounded-full 
        bg-gradient-to-b from-[#AE1014] to-[#EC1E24] 
        flex items-center justify-center">

                            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.771305 13.7061H5.39913C5.83112 13.7061 6.17044 14.057 6.17044 14.5038V24.0769C6.17044 24.5236 5.83112 24.8746 5.39913 24.8746H0.771305C0.339323 24.8746 0 24.5236 0 24.0769V14.5038C0 14.057 0.339323 13.7061 0.771305 13.7061ZM2.30859 17.6942C2.30859 18.141 2.64792 18.492 3.0799 18.492C3.51188 18.492 3.8512 18.141 3.8512 17.6942C3.8512 17.2474 3.51188 16.8965 3.0799 16.8965C2.64792 16.8965 2.30859 17.2474 2.30859 17.6942Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.8585 6.25161C13.7688 6.18367 13.7249 6.07028 13.744 5.95629L14.0576 4.03897L12.7273 2.68103C12.6496 2.60188 12.6208 2.48022 12.6546 2.3715C12.689 2.26163 12.7781 2.18247 12.888 2.16594L14.7251 1.88597L15.5473 0.141729C15.5963 0.0372107 15.7131 0 15.8061 0C15.8992 0 16.0159 0.0372106 16.0644 0.14117L16.887 1.88597L18.7242 2.16594C18.8341 2.18247 18.9232 2.26163 18.9576 2.37207C18.9914 2.48018 18.9626 2.60182 18.8848 2.68099L17.5547 4.03894L17.8682 5.95625C17.8873 6.07025 17.8433 6.18367 17.7537 6.25157C17.6667 6.31759 17.5489 6.32939 17.4509 6.2752L15.8061 5.37031L14.1624 6.27463C14.0647 6.3286 13.9483 6.31924 13.8585 6.25161V6.25161Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2023 6.25161C20.1126 6.18367 20.0686 6.07028 20.0878 5.95629L20.4013 4.03897L19.0711 2.68103C18.9933 2.60188 18.9645 2.48022 18.9984 2.3715C19.0328 2.26163 19.1219 2.18247 19.2318 2.16594L21.0689 1.88597L21.891 0.141729C21.9401 0.0372107 22.0568 0 22.1499 0C22.2429 0 22.3596 0.0372106 22.4081 0.14117L23.2308 1.88597L25.0679 2.16594C25.1778 2.18247 25.2669 2.26163 25.3013 2.37207C25.3352 2.48018 25.3064 2.60182 25.2285 2.68099L23.8984 4.03894L24.2119 5.95625C24.2311 6.07025 24.1871 6.18367 24.0974 6.25157C24.0104 6.31759 23.8926 6.32939 23.7946 6.2752L22.1499 5.37031L20.5062 6.27463C20.4085 6.3286 20.2921 6.31924 20.2023 6.25161V6.25161Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.85904 6.25229C7.7688 6.18377 7.72486 6.07034 7.74403 5.95634L8.05757 4.03903L6.72734 2.68105C6.64956 2.6019 6.62078 2.48024 6.65463 2.37153C6.689 2.26165 6.77811 2.1825 6.88804 2.16596L8.72512 1.88599L9.54724 0.141729C9.59633 0.0372106 9.71307 0 9.80612 0C9.89914 0 10.0159 0.0372106 10.0644 0.14117L10.887 1.88599L12.7241 2.16596C12.8341 2.1825 12.9232 2.26165 12.9576 2.37209C12.9914 2.4802 12.9626 2.60186 12.8848 2.68102L11.5546 4.03898L11.8682 5.9563C11.8873 6.07032 11.8433 6.18374 11.7537 6.25163C11.6667 6.31764 11.5489 6.32946 11.4509 6.27526L9.80612 5.37037L8.16244 6.2747C8.06206 6.3301 7.9448 6.31703 7.85904 6.25229V6.25229Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.21787 6.25161C1.12823 6.18367 1.08424 6.07028 1.1034 5.95629L1.41694 4.03897L0.0867501 2.68103C0.00893403 2.60188 -0.0198326 2.48022 0.0139809 2.3715C0.0483895 2.26163 0.137474 2.18247 0.247421 2.16594L2.0845 1.88597L2.90666 0.141777C2.95571 0.0372106 3.07243 0 3.1655 0C3.25852 0 3.37524 0.0372106 3.42374 0.14117L4.24642 1.88597L6.08352 2.16594C6.19346 2.18247 6.28257 2.26163 6.31695 2.37207C6.35076 2.48018 6.32201 2.60182 6.24417 2.68099L4.91401 4.03894L5.22755 5.95625C5.24671 6.07025 5.20269 6.18367 5.11304 6.25157C5.02603 6.31759 4.90825 6.32939 4.81027 6.2752L3.1655 5.37031L1.52182 6.27463C1.42407 6.3286 1.30766 6.31924 1.21787 6.25161V6.25161Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1313 20.2418C23.2393 20.513 23.301 20.8162 23.301 21.1353C23.301 22.2362 22.576 23.1616 21.5887 23.4328C21.6966 23.704 21.7583 24.0072 21.7583 24.3263C21.7583 25.6506 20.7248 26.7195 19.4445 26.7195H15.4491C13.8603 26.7195 12.3177 26.0495 11.1916 24.8847C10.3431 24.0231 9.18621 23.5285 8.01391 23.5285H7.875V15.5509H8.66172C10.0654 15.519 11.4693 15.1201 12.7033 14.4022C15.588 12.695 15.588 11.8174 15.588 10.0943C15.588 9.88692 15.6651 9.61568 15.8194 9.4721C15.9582 9.31259 16.1588 9.16895 16.3593 9.16895C17.9945 9.16895 19.321 9.96672 19.9073 11.3228C20.4472 12.5674 20.2467 14.0831 19.4136 15.551H22.5297C23.8101 15.551 24.8436 16.62 24.8436 17.9443C24.8436 19.0451 24.1186 19.9706 23.1313 20.2418V20.2418Z" fill="white" />
                            </svg>

                        </div>
                        {/* TEXT */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-[14px] md:text-[30px] font-poppins font-[600] text-[#282529]">4.2 Rating</h2>
                            <p className="text-[10px] md:text-[14px] font-poppins text-[#282529]">By students</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
