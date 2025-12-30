"use client";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Link from "next/link";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import BackNext from "@/pages/components/BackNext";
import Listing from "@/pages/api/Listing";

export default function CoursesSwiper({ courseData, title, name,slug }) {

  console.log("sluggg",slug)

  const swiperRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const courses = [
    { title: "Executive MBA", image: "/images/university/course/1.png" },
    { title: "Online MBA", image: "/images/university/course/1.png" },
    { title: "BCom", image: "/images/university/course/1.png" },
    { title: "BBA", image: "/images/university/course/1.png" },
    { title: "MCA", image: "/images/university/course/1.png" },
  ];






  const updateProgress = (swiper) => {
    if (!swiper) return;

    const totalCards = courses.length;
    const visibleSlides = swiper.params.slidesPerView;

    if (visibleSlides === 4) {
      setIsBeginning(false);
    } else {
      setIsBeginning(swiper.isBeginning);
    }

    setIsEnd(swiper.isEnd);

    const currentVisibleEnd = swiper.activeIndex + visibleSlides;

    let progressValue = (currentVisibleEnd / totalCards) * 100;

    // Limit between 0–100
    progressValue = Math.min(100, Math.max(0, progressValue));

    setProgress(progressValue);
  };


  const navigatePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const navigateNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <>
      <section className="w-full px-2 md:px-6 py-6 mx-auto" id="courses-section">
        <div className="max-w-[1230px]">
          <BackNext
            title={`${title}`}
            progress={progress}
            isBeginning={isBeginning}
            isEnd={isEnd}
            onPrev={navigatePrev}
            onNext={navigateNext}
          />


          <section className="">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                updateProgress(swiper);
              }}
              onSlideChange={updateProgress}
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 },
              }}
              className=""
              style={{ scrollbarWidth: "none" }}
            >
              {courseData?.data?.map((course, index) => (

                <SwiperSlide key={index}>
                  <CourseCard course={course} name={name} slug={slug} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </section>
    </>
  );
}

/* ------------------ COURSE CARD ------------------ */
function CourseCard({ course, mobile = false, name,slug }) {
  return (
    <div
      className={`bg-[#f7f6f6] border rounded-[14px] p-2 flex flex-col ${mobile ? "h-[270px]" : "h-[290px]"
        }`}
    >
      <div className="relative">
        <img
          src={course.cover_image}
          alt={course.name}
          className="w-full h-[162px] object-cover rounded-[14px]"
        />

        <div className="absolute bottom-0 left-3 translate-y-[50%]">
          <div className="bg-white shadow-md rounded-[5px] w-[102px] h-[34px] flex justify-center items-center">
            <img src={course.icon} className="h-10 object-cover" alt={course.alt} />
          </div>
        </div>
      </div>

      <div className="pt-7 px-2 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[12px] text-[#282529]">NMIMS Online</span>
          <h3 className="font-semibold text-[16px] mt-1">
            {course.name}
          </h3>
        </div>

        <div className="flex justify-end">

          {name === "course" && (
            <Link href={`/specialisations/${course.slug}`}>
              <button className="cursor-pointer bg-red-600 hover:bg-red-700 text-white text-[10px] rounded-[6px] w-[81px] h-[18px]">
                Read More
              </button></Link>
          )}

          {name === "university" && (
            <Link href={`/university/${slug}/${course.slug}`}>
              <button className="cursor-pointer bg-red-600 hover:bg-red-700 text-white text-[10px] rounded-[6px] w-[81px] h-[18px]">
                Read More
              </button></Link>
          )}



        </div>
      </div>
    </div>
  );
}





