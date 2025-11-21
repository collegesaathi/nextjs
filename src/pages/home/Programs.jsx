"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import Heading from "../common/Heading";
import Image from "next/image";
import MCA from "../asserts/home/MCA.png"
import GlobalButton from "../common/GlobalButton";
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
    <div className="py-8 md:py-12 ">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
        <Heading title={"Explore"} midtitle={"Top-ranked"} lattitle={"Online Programs"} classes={"text-center"} />
        <div className="w-full h-[74px] bg-[#FFF5F5] shadow-inner rounded-[6px]">
          <div className="flex items-center justify-between h-full px-4 ">
            <button
              type="button"
              onClick={navigatePrev}
              className="w-[30px] h-[30px] border border-[#C9C9C9] bg-white rounded-full flex items-center justify-center hover:border-red-600"
            >
              <FaCaretLeft size={24} className="!text-red-500 " />
            </button>

            <div className="flex-1 mx-4 overflow-hidden">
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={6}
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
              <FaCaretRight size={24} className="!text-red-500" />

            </button>
          </div>
        </div>
        <div className="w-full rounded-[25px] bg-[#FFFFFF] shadow-inner p-[28px] relative my-6 md:my-10 border border-[#23232340]/25 ">

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
                <div className="flex justify-center ">
                  <div
                    className={`w-[75px] h-[15px] text-[10px] rounded-bl-md rounded-br-md font-[400] font-[Poppins]  text-center flex items-center justify-center ${p.badge.type === "trending"
                      ? "bg-[#D9F9A5] text-[#0B8F4F]"
                      : "bg-[#F7F6F6] text-[#282529]"
                      }`}
                  >
                    {p.badge.text}
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center space-y-2 mt-3">
                  <Image src={MCA} width={32} height={32} alt={p.title} />
                  <h2 className=" font-[Poppins]
          font-[600]
          text-[14px] md:text-[16px]
          leading-[100%]
          tracking-[0px]
          text-[#282529]
          ">{p.title}</h2>
                </div>

                <div className="p-2">
                  <button className="w-full bg-[#EC1E24] text-white rounded-[12px] font-[400] font-[Poppins] text-[12px] h-[18px] hover:bg-red-700 text-center">
                    View Program
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <GlobalButton title={"View All >"} />

        </div>
      </div>
    </div>
  );
}
