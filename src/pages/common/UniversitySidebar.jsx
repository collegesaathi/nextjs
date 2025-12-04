"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function UniversitySidebar() {
  const [activeItem, setActiveItem] = useState(0);
  const mobileSwiperRef = useRef(null);
  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const [canSlideNext, setCanSlideNext] = useState(true);


  const menuItems = [
    { id: "About",  label: "About", icon:"/images/university/sidebar/about.svg", activeIcon: "/images/university/sidebar/about.svg" },
    { id: "Fee",  label: "Fee", icon:"/images/university/sidebar/fee.svg", activeIcon: "/images/university/sidebar/active/fee.svg" },
    { label: "Approvals", icon:"/images/university/sidebar/approvals.svg", activeIcon: "/images/university/sidebar/active/approvals.svg" },
    { label: "Rankings", icon:"/images/university/sidebar/rankings.svg", activeIcon: "/images/university/sidebar/active/rankings.svg" },
    { label: "Courses", icon: "/images/university/sidebar/course.svg", activeIcon: "/images/university/sidebar/active/course.svg" },
    { label: "Advantages", icon: "/images/university/sidebar/advantages.svg", activeIcon: "/images/university/sidebar/active/advantages.svg" },
    { label: "Facts", icon: "/images/university/sidebar/facts.svg", activeIcon: "/images/university/sidebar/active/facts.svg" },
    { label: "Sample Certificate", icon: "/images/university/sidebar/certificate.svg", activeIcon: "/images/university/sidebar/active/certificate.svg" },
    { label: "Examination Pattern", icon: "/images/university/sidebar/examination.svg", activeIcon: "/images/university/sidebar/active/examination.svg" },
    { label: "Financial Aid", icon: "/images/university/sidebar/financial.svg", activeIcon: "/images/university/sidebar/active/financial.svg" },
    // { label: "Loan Facilities", icon: "/images/university/sidebar/loan.svg", activeIcon: "/images/university/sidebar/active/loan.svg" },
    // { label: "Campus Locations", icon: "/images/university/sidebar/campus.svg", activeIcon: "/images/university/sidebar/active/campus.svg" },
    { label: "Placement Partners", icon: "/images/university/sidebar/placement.svg", activeIcon: "/images/university/sidebar/active/placement.svg" },
    { label: "Career Services", icon: "/images/university/sidebar/career.svg", activeIcon: "/images/university/sidebar/active/career.svg" },
    { label: "Admission Process", icon: "/images/university/sidebar/admission.svg", activeIcon: "/images/university/sidebar/active/admission.svg" },
    { label: "FAQ", icon: "/images/university/sidebar/frequently.svg", activeIcon: "/images/university/sidebar/active/frequently.svg" },
    { label: "Similar Universities", icon: "/images/university/sidebar/similar.svg", activeIcon: "/images/university/sidebar/active/similar.svg" },
    { label: "Universities Comparison", icon: "/images/university/sidebar/universities.svg", activeIcon: "/images/university/sidebar/active/universities.svg" },
    { label: "Reviews", icon: "/images/university/sidebar/reviews.svg", activeIcon: "/images/university/sidebar/active/reviews.svg" },
  ];

  const sectionIds = [
    "about-section","fee-section", "approvals-section", "rankings-section", "courses-section", "advantages-section", "facts-section",
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
    if (!swiper) return;
  
    const maxTranslate = swiper.maxTranslate(); // negative number
    const currentTranslate = swiper.translate;  // current position
  
    setCanSlidePrev(currentTranslate < 0);
    setCanSlideNext(currentTranslate > maxTranslate);
  };

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <aside
  className="hidden lg:block sticky top-0 h-screen overflow-y-auto p-2 red-scroll"
>
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
      <div className="lg:hidden sticky top-0 z-50 bg-[#f9fafb] shadow-sm  py-2 
    flex items-center overflow-x-auto overflow-y-hidden whitespace-nowrap touch-pan-x no-scrollbar">

  {/* Left Chevron */}
  <button
  disabled={!canSlidePrev}
  onClick={() => {
    mobileSwiperRef.current?.slidePrev();
    updateNav(mobileSwiperRef.current);
  }}
  className={canSlidePrev ? "text-red-500" : "text-black opacity-40"}
>
    <ChevronLeft size={14} />
  </button>
  <Swiper
  modules={[FreeMode, Mousewheel, Keyboard]}
  slidesPerView="auto"
  freeMode={true}
  spaceBetween={8}
  onSwiper={(swiper) => {
    mobileSwiperRef.current = swiper;
    updateNav(swiper);
  }}
  onSlideChange={updateNav}
  onProgress={updateNav}
  onTouchMove={updateNav}
  className="w-full"
  style={{ scrollbarWidth: "none" }}
>

    {menuItems.map((item, index) => (
      <SwiperSlide key={index} className="!w-auto">
        <button
          onClick={() => {
            setActiveItem(index);
            scrollToSection(index);
          }}
          className={`flex items-center gap-2 px-3 h-[22px] rounded-full border text-xs whitespace-nowrap 
            ${activeItem === index ? "bg-[#ec1e24] text-white border-[#ec1e24]" : "border-gray-300"}`}
        >
          <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center 
            ${activeItem === index ? "bg-white" : "bg-gray-200"}`}>
            <img src={item.icon} className="w-3 h-3" alt="" />
          </div>
          {item.label}
        </button>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Right Chevron */}
  <button
  disabled={!canSlideNext}
  onClick={() => {
    mobileSwiperRef.current?.slideNext();
    updateNav(mobileSwiperRef.current);
  }}
  className={canSlideNext ? "text-red-500" : "text-black opacity-40"}
>
  <ChevronRight size={14} />
</button>

</div>




    </>
  );
}
