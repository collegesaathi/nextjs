"use client";

import { useRef, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import BackNext from "@/pages/components/BackNext";

export default function UniversityCampusCarousel({ universityCampuses, name }) {
  /* ================= SAFE DATA ================= */
  const nationalCampuses = Array.isArray(universityCampuses?.campus)
    ? universityCampuses.campus
    : [];

  const internationalCampuses = Array.isArray(
    universityCampuses?.campusInternationList
  )
    ? universityCampuses.campusInternationList
    : [];

  const hasNational = nationalCampuses.length > 1;
  const hasInternational = internationalCampuses.length > 1;

  // Tabs only when BOTH have data
  const showTabs = hasNational && hasInternational;

  /* ================= STATE ================= */
  const [activeTab, setActiveTab] = useState(
    hasNational ? "national" : "international"
  );

  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  /* ================= BREAKPOINTS ================= */
  const carouselBreakpoints = {
    320: { slidesPerView: 2, spaceBetween: 16 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 24 },
    1024: { slidesPerView: 4, spaceBetween: 24 },
  };

  /* ================= ACTIVE DATA ================= */
  const activeData = useMemo(() => {
    return activeTab === "international"
      ? internationalCampuses
      : nationalCampuses;
  }, [activeTab, nationalCampuses, internationalCampuses]);

  /* ================= PROGRESS ================= */
  const updateProgress = (swiper) => {
    if (!swiper || !activeData.length) return;

    const visibleSlides = swiper.params.slidesPerView;
    const currentVisibleEnd = swiper.activeIndex + visibleSlides;

    let value = (currentVisibleEnd / activeData.length) * 100;
    value = Math.min(100, Math.max(0, value));

    setProgress(value);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const navigatePrev = () => swiperRef.current?.slidePrev();
  const navigateNext = () => swiperRef.current?.slideNext();

  // Nothing to show
  if (!hasNational && !hasInternational) return null;

  return (
    <section className="px-2 md:px-6 py-6 bg-white">
      <div className="max-w-[1230px] mx-auto">
        {/* ================= TABS ================= */}
        {showTabs && (
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setActiveTab("national")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${
                  activeTab === "national"
                    ? "bg-[#EC1E24] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
            >
              National Campuses
            </button>

            <button
              onClick={() => setActiveTab("international")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${
                  activeTab === "international"
                    ? "bg-[#EC1E24] text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
            >
              International Campuses
            </button>
          </div>
        )}

        {/* ================= HEADER ================= */}
        <BackNext
          title={
            showTabs
              ? `${name} ${
                  activeTab === "international"
                    ? "International"
                    : "National"
                } Campuses`
              : hasNational
              ? `${name} National Campuses`
              : `${name} International Campuses`
          }
          progress={progress}
          isBeginning={isBeginning}
          isEnd={isEnd}
          onPrev={navigatePrev}
          onNext={navigateNext}
        />

        {/* ================= SLIDER ================= */}
        <Swiper
          key={activeTab} // 🔥 important: reset swiper on tab change
          slidesPerView={4}
          spaceBetween={24}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
          breakpoints={carouselBreakpoints}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateProgress(swiper);
          }}
          onSlideChange={updateProgress}
        >
          {activeData.map((campus, index) => (
            <SwiperSlide key={`${activeTab}-${index}`}>
              <CampusCard campus={campus} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

/* ================= CAMPUS CARD ================= */

function CampusCard({ campus }) {
  return (
    <div
      className="bg-white border border-[#bcbcbc]
      p-2 sm:p-3 lg:p-4 rounded-[12px]
      flex items-center gap-3 my-3
      cursor-pointer relative overflow-hidden
      transition-all duration-300
      hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="w-[46px] h-[46px] sm:w-[60px] sm:h-[60px] lg:w-[71px] lg:h-[71px] rounded-full overflow-hidden flex-shrink-0">
        <img
          src={campus?.image || "/images/default-campus.png"}
          alt={campus?.name || "Campus"}
          className="w-full h-full object-cover"
        />
      </div>

      <span className="font-poppins text-[13px] sm:text-[15px] lg:text-[17px] text-[#333]">
        {campus?.name}
      </span>
    </div>
  );
}
