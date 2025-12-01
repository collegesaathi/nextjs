"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CoursesSwiper() {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const courses = [
    { title: "Executive MBA", image: "/img/university/course/1.png" },
    { title: "Online MBA", image: "/img/university/course/1.png" },
    { title: "BCom", image: "/img/university/course/1.png" },
    { title: "BBA", image: "/img/university/course/1.png" },
    { title: "MCA", image: "/img/university/course/1.png" },
  ];

  const updateProgress = (swiper) => {
    const total = swiper.slides.length - (swiper.params.loop ? 2 : 0);
    const value = ((swiper.realIndex + 1) / total) * 100;
    setProgress(value);
  };

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <section className=" px-8 py-8">
        <Header progress={progress} />

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateProgress(swiper);
          }}
          onSlideChange={updateProgress}
          loop
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="mt-10"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>

        <EnquiryBox />
      </section>
    </>
  );
}

/* ------------------ HEADER ------------------ */
function Header({ progress }) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-semibold text-[28px] text-[#282529]">
        NMIMS CODE: Courses
      </h2>

      <div className="flex items-center gap-2">
        <div className="w-[191px] h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-red-600 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <NavButtons />
      </div>
    </div>
  );
}

/* ------------------ MOBILE HEADER ------------------ */
function MobileHeader({ progress }) {
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-semibold text-[18px] text-[#282529]">
        NMIMS CODE: Courses
      </h2>
      <div className="flex items-center gap-2">
        <div className="w-[86px] h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-red-600 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <NavButtons small />
      </div>
    </div>
  );
}

/* ------------------ NAV BUTTONS ------------------ */
function NavButtons({ small }) {
  return (
    <>
      <button
        onClick={() => document.querySelector(".swiper").swiper.slidePrev()}
        className={`border border-red-600 rounded-full flex items-center justify-center ${
          small ? "w-4 h-4 text-xs" : "w-9 h-9"
        }`}
      >
        ←
      </button>
      <button
        onClick={() => document.querySelector(".swiper").swiper.slideNext()}
        className={`border rounded-full flex items-center justify-center ${
          small ? "w-4 h-4 text-xs" : "w-9 h-9"
        }`}
      >
        →
      </button>
    </>
  );
}

/* ------------------ COURSE CARD ------------------ */
function CourseCard({ course, mobile = false }) {
  return (
    <div
      className={`bg-[#f7f6f6] border rounded-[14px] p-2 flex flex-col ${
        mobile ? "h-[270px]" : "h-[290px]"
      }`}
    >
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[162px] object-cover rounded-[14px]"
        />

        <div className="absolute bottom-0 left-3 translate-y-[50%]">
          <div className="bg-white shadow-md rounded-[5px] w-[102px] h-[34px] flex justify-center items-center">
            <img src="/img/university/course/logo.png" className="h-5" alt="" />
          </div>
        </div>
      </div>

      <div className="pt-7 px-2 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[12px] text-[#282529]">NMIMS Online</span>
          <h3 className="font-semibold text-[16px] mt-1">
            {course.title}
          </h3>
        </div>

        <div className="flex justify-end">
          <button className="bg-red-600 hover:bg-red-700 text-white text-[10px] rounded-[6px] w-[81px] h-[18px]">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------ DESKTOP ENQUIRY ------------------ */
function EnquiryBox() {
  return (
    <div className="w-[740px] mx-auto h-[287px] grid grid-cols-2 bg-gradient-to-br from-[#fef0f0] to-[#fbdbdc] rounded-[18px] mt-8">
      <img src="/img/university/course/3.png" alt="" />

      <FormBox />
    </div>
  );
}

/* ------------------ MOBILE ENQUIRY ------------------ */
function MobileEnquiry() {
  return (
    <div className="bg-gradient-to-br from-[#fef0f0] to-[#fbdbdc] rounded-[18px] mt-8 py-4">
      <FormBox />
    </div>
  );
}

/* ------------------ FORM ------------------ */
function FormBox() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[280px]">
        <h3 className="font-semibold mb-4">Enquire Now</h3>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <Input label="Your Name" />
          <Input label="Email" />
          <Input label="Phone" />
          <Input label="OTP" />
        </div>

        <button className="bg-red-600 text-white text-xs px-4 py-1 rounded-full">
          Submit
        </button>
      </div>
    </div>
  );
}

function Input({ label }) {
  return (
    <div>
      <label className="text-[8px] text-gray-600">{label}</label>
      <input className="w-full h-[26px] rounded-full px-2 text-xs" />
    </div>
  );
}
