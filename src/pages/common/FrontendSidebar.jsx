"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function FrontendSidebar({ data, courseData }) {
  const [activeItem, setActiveItem] = useState(0);
  const mobileSwiperRef = useRef(null);
  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const [canSlideNext, setCanSlideNext] = useState(true);
  // Define all possible items and which data key they rely on
  const fullMenuConfig = [
    { id: "about-section", label: "About", dataKey: "about", icon: "/images/university/sidebar/about.svg", activeIcon: "/images/university/sidebar/about.svg" },
    { id: "fee-section", label: "Fee", isCourse: true, icon: "/images/university/sidebar/fee.svg", activeIcon: "/images/university/sidebar/active/fee.svg" },
    { id: "approvals-section", label: "Approvals", dataKey: "approvals", icon: "/images/university/sidebar/approvals.svg", activeIcon: "/images/university/sidebar/active/approvals.svg" },
    { id: "rankings-section", label: "Rankings", dataKey: "rankings", icon: "/images/university/sidebar/rankings.svg", activeIcon: "/images/university/sidebar/active/rankings.svg" },
    { id: "courses-section", label: "Courses", isCourse: true, icon: "/images/university/sidebar/course.svg", activeIcon: "/images/university/sidebar/active/course.svg" },
    { id: "advantages-section", label: "Advantages", dataKey: "advantages", icon: "/images/university/sidebar/advantages.svg", activeIcon: "/images/university/sidebar/active/advantages.svg" },
    { id: "facts-section", label: "Facts", dataKey: "facts", icon: "/images/university/sidebar/facts.svg", activeIcon: "/images/university/sidebar/active/facts.svg" },
    { id: "certificate-section", label: "Sample Certificate", dataKey: "certificates", icon: "/images/university/sidebar/certificate.svg", activeIcon: "/images/university/sidebar/active/certificate.svg" },
    { id: "examination-section", label: "Examination Pattern", dataKey: "examPatterns", icon: "/images/university/sidebar/examination.svg", activeIcon: "/images/university/sidebar/active/examination.svg" },
    { id: "financial-aid-section", label: "Financial Aid", dataKey: "financialAid", icon: "/images/university/sidebar/financial.svg", activeIcon: "/images/university/sidebar/active/financial.svg" },
    { id: "placement-partners-section", label: "Placement Partners", dataKey: "partners", icon: "/images/university/sidebar/placement.svg", activeIcon: "/images/university/sidebar/active/placement.svg" },
    { id: "career-services-section", label: "Career Services", dataKey: "services", icon: "/images/university/sidebar/career.svg", activeIcon: "/images/university/sidebar/active/career.svg" },
    { id: "admission-process-section", label: "Admission Process", dataKey: "admissionProcess", icon: "/images/university/sidebar/admission.svg", activeIcon: "/images/university/sidebar/active/admission.svg" },
    { id: "faq-section", label: "FAQ", dataKey: "faq", icon: "/images/university/sidebar/frequently.svg", activeIcon: "/images/university/sidebar/active/frequently.svg" },
    // Static items that always show
    { id: "similar-universities-section", label: "Similar Universities", isStatic: true, icon: "/images/university/sidebar/similar.svg", activeIcon: "/images/university/sidebar/active/similar.svg" },
    { id: "universities-comparison-section", label: "Universities Comparison", isStatic: true, icon: "/images/university/sidebar/universities.svg", activeIcon: "/images/university/sidebar/active/universities.svg" },
    { id: "reviews-section", label: "Reviews", isStatic: true, icon: "/images/university/sidebar/reviews.svg", activeIcon: "/images/university/sidebar/active/reviews.svg" },
  ];

  // Filter menuItems based on available data
  const menuItems = fullMenuConfig.filter(item => {
    if (item.isStatic) return true;
    if (item.isCourse) return courseData && courseData.length > 0;
    return data && data[item.dataKey] !== null && data[item.dataKey] !== undefined;
  });


  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = menuItems.findIndex(m => m.id === entry.target.id);
          if (index !== -1) setActiveItem(index);
        }
      });
    }, { threshold: 0.3 });

    menuItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [menuItems]);

  const updateNav = (swiper) => {
    if (!swiper) return;
    setCanSlidePrev(swiper.translate < 0);
    setCanSlideNext(swiper.translate > swiper.maxTranslate());
  };

  return (
    <>
      {/* DESKTOP */}
      <div className="hidden lg:block sticky top-0 h-screen overflow-y-auto p-2 red-scroll py-8 ">
        <ul className="space-y-4 flex flex-col justify-end items-end">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setActiveItem(index);
                  scrollToSection(item.id);
                }}
                className={`w-[242px] h-[32px] rounded-[29px] flex cursor-pointer items-center gap-2 border transition-all duration-300 hover:translate-x-1 hover:shadow-md
                  ${activeItem === index ? "bg-[#ec1e24] text-white" : "border-gray-300 text-gray-700"}
                `}
              >
                <div className={`w-8 h-8 flex items-center justify-center rounded-full ${activeItem === index ? "bg-white" : "bg-[#eeecec]"}`}>
                  <img src={activeItem === index ? item.activeIcon : item.icon} className="w-4 h-4" alt="" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* MOBILE */}
      <div className="lg:hidden sticky top-0 z-50 bg-[#f9fafb] shadow-sm py-2 flex items-center overflow-x-auto no-scrollbar">
        <button disabled={!canSlidePrev} onClick={() => mobileSwiperRef.current?.slidePrev()} className={canSlidePrev ? "text-red-500 px-1" : "text-black opacity-20 px-1"}>
          <ChevronLeft size={16} />
        </button>
        <Swiper
          modules={[FreeMode, Mousewheel, Keyboard]}
          slidesPerView="auto"
          freeMode={true}
          spaceBetween={8}
          onSwiper={(swiper) => (mobileSwiperRef.current = swiper)}
          onProgress={updateNav}
          className="w-full"
        >
          {menuItems.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <button
                onClick={() => {
                  setActiveItem(index);
                  scrollToSection(item.id);
                }}
                className={`flex items-center gap-2 px-3 h-[26px] rounded-full border text-xs whitespace-nowrap 
                ${activeItem === index ? "bg-[#ec1e24] text-white border-[#ec1e24]" : "border-gray-300 bg-white"}`}
              >
                {item.label}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <button disabled={!canSlideNext} onClick={() => mobileSwiperRef.current?.slideNext()} className={canSlideNext ? "text-red-500 px-1" : "text-black opacity-20 px-1"}>
          <ChevronRight size={16} />
        </button>
      </div>
    </>
  );
}