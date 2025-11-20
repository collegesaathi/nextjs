"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import Heading from "../common/Heading";
import Image from "next/image";
export default function Programs() {

  const [activeCategory, setActiveCategory] = useState(0);

  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);

  const navigatePrev = () => {
    desktopSwiperRef.current?.slidePrev();
    mobileSwiperRef.current?.slidePrev();
  };

  const navigateNext = () => {
    desktopSwiperRef.current?.slideNext();
    mobileSwiperRef.current?.slideNext();
  };

  // ---------------------------
  // 📌 Course Categories Data
  // ---------------------------
  const courseCategories = [
    { title: "Engineering", subtitle: "40 Courses" },
    { title: "Management", subtitle: "25 Courses" },
    { title: "Design", subtitle: "18 Courses" },
    { title: "IT & Software", subtitle: "50 Courses" },
    { title: "Medical", subtitle: "30 Courses" },
    { title: "Law", subtitle: "15 Courses" },
  ];

  // ---------------------------
  // 📌 Programs Data
  // ---------------------------
  const onlinePrograms = [
    {
      title: "B.Tech",
      icon: "/img/university-main/icons/btech.png",
      badge: { type: "trending", text: "Trending" },
    },
    {
      title: "MBA",
      icon: "/img/university-main/icons/mba.png",
      badge: { type: "standard", text: "Popular" },
    },
    {
      title: "BCA",
      icon: "/img/university-main/icons/bca.png",
      badge: { type: "standard", text: "Top Rated" },
    },
    {
      title: "MCA",
      icon: "/img/university-main/icons/mca.png",
      badge: { type: "trending", text: "New" },
    },
    {
      title: "LLB",
      icon: "/img/university-main/icons/law.png",
      badge: { type: "standard", text: "Best Seller" },
    },
    {
      title: "MBBS",
      icon: "/img/university-main/icons/medical.png",
      badge: { type: "trending", text: "Hot" },
    },
  ];
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className={`text-[24px] md:text-[30px] lg:text-[36px] xl:text-[45px] leading-[28px] md:leading-[40px] lg:leading-[54px] font-extrabold -tracking-[0.04em] text-[#282529] mb-[30px] lg:mb-[40px] max-w-[900px] mx-auto text-center `}>
        Explore  <span className="text-[#EC1E24]"> Top-ranked</span> Online Programs
      </h2>
      {/* -------------------------------------------------------------------------------- */}
      {/* DESKTOP CATEGORIES SLIDER */}
      {/* -------------------------------------------------------------------------------- */}
      <div className="max-w-[1174px] mx-auto my-[50px] px-4 hidden lg:block">
        <div className="w-full h-[74px] bg-[#FFF5F5] shadow-inner rounded-[6px]">
          <div className="flex items-center justify-between h-full px-4">
            {/* Prev */}
            <button
              type="button"
              onClick={navigatePrev}
              className="w-[30px] h-[30px] border border-[#C9C9C9] bg-white rounded-full flex items-center justify-center hover:border-red-600"
            >
              <FaCaretLeft size={24} className="!text-red-500 "/>
              {/* <Image width={15} height={15} src="/img/university-main/icons/angleLeft.svg" alt="prev" /> */}
            </button>

            <div className="flex-1 mx-4 overflow-hidden">
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView="auto"
                spaceBetween={15}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={(swiper) => (desktopSwiperRef.current = swiper)}
              >
                {courseCategories.map((cat, i) => (
                  <SwiperSlide key={i} className="!w-auto">
                    <div
                      onClick={() => setActiveCategory(i)}
                      className={`w-[190px] h-[54px] rounded-[6px] bg-white border transition-all cursor-pointer flex flex-col justify-center items-center ${activeCategory === i
                        ? "border-[#EC1E24] shadow-md"
                        : "border-[#CECECE] hover:border-[#EC1E24]"
                        }`}
                    >
                      <h2
                        className={`font-semibold text-[16px] ${activeCategory === i ? "text-[#EC1E24]" : "text-black"
                          }`}
                      >
                        {cat.title}
                      </h2>
                      <p
                        className={`text-[10px] ${activeCategory === i ? "text-[#EC1E24]" : "text-black"
                          }`}
                      >
                        {cat.subtitle}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={navigateNext}
              className="w-[30px] h-[30px] border border-[#C9C9C9] bg-white rounded-full flex items-center justify-center hover:border-red-600"
            >
              <FaCaretRight size={24} className="!text-red-500"/>

            </button>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------- */}
      {/* DESKTOP PROGRAMS GRID */}
      {/* -------------------------------------------------------------------------------- */}
      <div className="hidden lg:block">
        <div className="w-[1174px] mx-auto mt-[60px] px-4">
          <div className="w-full rounded-[25px] bg-white shadow-inner p-[28px] relative">

            {/* Online Badge */}
            <div className="absolute w-full flex justify-center -top-3">
              <div className="w-[92px] h-[22px] bg-red-600 text-white rounded-[11px] flex items-center justify-center">
                Online
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
              {onlinePrograms.map((p, i) => (
                <div
                  key={i}
                  className="max-w-[168px] h-[147px] rounded-[11px] border border-[#CECECE] flex flex-col justify-between cursor-pointer hover:shadow-lg transition"
                >
                  {/* Badge */}
                  <div className="flex justify-center pt-1">
                    <div
                      className={`w-[75px] h-[15px] text-[10px] rounded-bl-md rounded-br-md flex items-center justify-center ${p.badge.type === "trending"
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-black"
                        }`}
                    >
                      {p.badge.text}
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-2">
                    <Image src={p.icon} width={32} height={32} alt={p.title} />
                    <h2 className="text-[15px] font-semibold">{p.title}</h2>
                  </div>

                  <div className="p-2">
                    <button className="w-full bg-red-600 text-white rounded-[12px] text-[12px] h-[18px] hover:bg-red-700">
                      View Program
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All */}
          <div className="flex justify-center mt-6">
            <button className="w-[130px] h-[29px] bg-red-600 text-white rounded-[30px] text-[14px]">
              View All &gt;
            </button>
          </div>
        </div>
      </div>

      <div className="lg:hidden block px-4 mt-6">
        {/* Online Badge */}
        <div className="w-full rounded-[25px] bg-white shadow-inner p-[24px] relative">
          <div className="absolute w-full flex justify-center -top-3">
            <span className="w-[92px] h-[22px] bg-red-600 text-white rounded-[11px] flex items-center justify-center">
              Online
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-3">
            {onlinePrograms.slice(0, 6).map((p, i) => (
              <div
                key={i}
                className="w-full h-[116px] rounded-[11px] border border-[#CECECE] flex flex-col justify-between cursor-pointer hover:shadow-md"
              >
                <div className="flex justify-center pt-1">
                  <div
                    className={`w-[65px] h-[12px] text-[8px] rounded-bl-md rounded-br-md flex items-center justify-center ${p.badge.type === "trending"
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-black"
                      }`}
                  >
                    {p.badge.text}
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-1">
                  <Image src={p.icon} width={23} height={23} alt={p.title} />
                  <h2 className="text-[12px] font-semibold">{p.title}</h2>
                </div>

                <div className="px-2 pb-2">
                  <button className="w-full bg-red-600 text-white rounded-[12px] text-[8px] h-[12px]">
                    View Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All */}
        <div className="flex justify-center mt-6">
          <button className="w-[130px] h-[29px] bg-red-600 text-white rounded-[30px] text-[14px]">
            View All &gt;
          </button>
        </div>
      </div>

    </div>
  );
}
