"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export default function UniversitySidebar() {
  const [activeItem, setActiveItem] = useState(0);
  const mobileSwiperRef = useRef(null);
  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const [canSlideNext, setCanSlideNext] = useState(true);


  const menuItems = [
    { id: "Fee",  label: "Fee", icon: "/img/university/sidebar/fee.svg", activeIcon: "/img/university/sidebar/active/fee.svg" },
    { label: "Approvals", icon: "/img/university/sidebar/approvals.svg", activeIcon: "/img/university/sidebar/active/approvals.svg" },
    { label: "Rankings", icon: "/img/university/sidebar/rankings.svg", activeIcon: "/img/university/sidebar/active/rankings.svg" },
    { label: "Courses", icon: "/img/university/sidebar/course.svg", activeIcon: "/img/university/sidebar/active/course.svg" },
    { label: "Advantages", icon: "/img/university/sidebar/advantages.svg", activeIcon: "/img/university/sidebar/active/advantages.svg" },
    { label: "Facts", icon: "/img/university/sidebar/facts.svg", activeIcon: "/img/university/sidebar/active/facts.svg" },
    { label: "Sample Certificate", icon: "/img/university/sidebar/certificate.svg", activeIcon: "/img/university/sidebar/active/certificate.svg" },
    { label: "Examination Pattern", icon: "/img/university/sidebar/examination.svg", activeIcon: "/img/university/sidebar/active/examination.svg" },
    { label: "Financial Aid", icon: "/img/university/sidebar/financial.svg", activeIcon: "/img/university/sidebar/active/financial.svg" },
    { label: "Loan Facilities", icon: "/img/university/sidebar/loan.svg", activeIcon: "/img/university/sidebar/active/loan.svg" },
    { label: "Campus Locations", icon: "/img/university/sidebar/campus.svg", activeIcon: "/img/university/sidebar/active/campus.svg" },
    { label: "Placement Partners", icon: "/img/university/sidebar/placement.svg", activeIcon: "/img/university/sidebar/active/placement.svg" },
    { label: "Career Services", icon: "/img/university/sidebar/career.svg", activeIcon: "/img/university/sidebar/active/career.svg" },
    { label: "Admission Process", icon: "/img/university/sidebar/admission.svg", activeIcon: "/img/university/sidebar/active/admission.svg" },
    { label: "FAQ", icon: "/img/university/sidebar/frequently.svg", activeIcon: "/img/university/sidebar/active/frequently.svg" },
    { label: "Similar Universities", icon: "/img/university/sidebar/similar.svg", activeIcon: "/img/university/sidebar/active/similar.svg" },
    { label: "Universities Comparison", icon: "/img/university/sidebar/universities.svg", activeIcon: "/img/university/sidebar/active/universities.svg" },
    { label: "Reviews", icon: "/img/university/sidebar/reviews.svg", activeIcon: "/img/university/sidebar/active/reviews.svg" },
  ];

  const sectionIds = [
    "fee-section", "approvals-section", "rankings-section", "courses-section", "advantages-section", "facts-section",
    "certificate-section", "examination-section", "financial-aid-section", "loan-facilities-section", "campus-locations-section",
    "placement-partners-section", "career-services-section", "admission-process-section", "faq-section", 
    "similar-universities-section", "universities-comparison-section", "reviews-section"
  ];

  /* ---------- Scroll ---------- */
  const scrollToSection = (index) => {
    const target = document.getElementById(sectionIds[index]);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ---------- Intersection Observer ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionIds.indexOf(entry.target.id);
          if (index !== -1) setActiveItem(index);
        }
      });
    }, { threshold: 0.3 });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ---------- Swiper Navigation ---------- */
  const updateNav = (swiper) => {
    setCanSlidePrev(!swiper.isBeginning);
    setCanSlideNext(!swiper.isEnd);
  };

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <aside className="hidden lg:block sticky top-0 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-200 p-7">
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setActiveItem(index);
                  scrollToSection(index);
                }}
                className={`w-[242px] h-[32px] rounded-[29px] flex items-center gap-2 px-2 border transition-all duration-300 hover:translate-x-1 hover:shadow-md
                  ${activeItem === index ? "bg-[#ec1e24] text-white" : "border-gray-300"}
                `}
              >
                <div className={`w-8 h-8 flex items-center justify-center rounded-full ${activeItem === index ? "bg-white" : "bg-[#eeecec]"}`}>
                  <img src={activeItem === index ? item.activeIcon : item.icon} className="w-4 h-4" alt="" />
                </div>
                <span className="text-sm">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden sticky top-0 z-50 bg-[#f9fafb] shadow-sm px-4 py-2 flex items-center">
        <button disabled={!canSlidePrev} onClick={() => mobileSwiperRef.current?.slidePrev()}
          className={`mr-2 ${canSlidePrev ? "text-red-500" : "text-gray-400"}`}>◀</button>

        <Swiper
          modules={[FreeMode, Mousewheel, Keyboard]}
          spaceBetween={8}
          slidesPerView="auto"
          freeMode
          onSwiper={(swiper) => {
            mobileSwiperRef.current = swiper;
            updateNav(swiper);
          }}
          onProgress={(_, p) => {
            setCanSlidePrev(p > 0);
            setCanSlideNext(p < 1);
          }}
          className="w-full"
        >
          {menuItems.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <button
                onClick={() => {
                  setActiveItem(index);
                  scrollToSection(index);
                }}
                className={`flex items-center gap-2 px-3 h-[22px] rounded-full border text-xs whitespace-nowrap 
                  ${activeItem === index ? "bg-[#ec1e24] text-white border-[#ec1e24]" : "border-gray-300"}
                `}
              >
                <div id={activeItem?.id} className={`w-[18px] h-[18px] rounded-full flex items-center justify-center ${activeItem === index ? "bg-white" : "bg-gray-200"}`}>
                  <img src={activeItem === index ? item.activeIcon : item.icon} className="w-3 h-3" alt="" />
                </div>
                {item.label}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <button disabled={!canSlideNext} onClick={() => mobileSwiperRef.current?.slideNext()}
          className={`ml-2 ${canSlideNext ? "text-red-500" : "text-gray-400"}`}>▶</button>
      </div>
    </>
  );
}
