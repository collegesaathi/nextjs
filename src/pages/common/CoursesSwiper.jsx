"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BackNext from "../components/BackNext";

export default function CoursesSwiper() {
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
      <div className="flex px-6 mt-[50px]" id="courses-section">
   

<BackNext
                  
                  title="NMIMS CODE: Courses"
               
                  progress={progress}
                  isBeginning={isBeginning}
                  isEnd={isEnd}
                  onPrev={navigatePrev}
            onNext={navigateNext}
                />

   
      </div>
      <section className="px-6">
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

/* ------------------ COURSE CARD ------------------ */
function CourseCard({ course, mobile = false }) {
  return (
    <div
      className={`bg-[#f7f6f6] border rounded-[14px] p-2 flex flex-col ${mobile ? "h-[270px]" : "h-[290px]"
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
            <img src="/images/university/course/logo.png" className="h-5" alt="" />
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
      <img src="/images/university/course/3.png" alt="" />

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
          <Input label="Your Name" placeholder="jhon Doe" />
          <Input label="Email" placeholder= "example@gmail.com"/>
          <Input label="Phone" placeholder="+91 000 000 0000" />
          <Input label="OTP" placeholder="xxxx" />
        </div>

        <button className="bg-red-600 text-white text-xs px-4 py-1 rounded-full">
          Submit
        </button>
      </div>
    </div>
  );
}

function Input({ label,placeholder }) {
  return (
    <div>
      <label className="text-[8px] text-gray-600">{label}</label>
      <input 
  className="w-full h-[26px] bg-white text-black border border-gray-600 rounded-full px-2 text-[10px] placeholder:text-black"
  placeholder={placeholder}
/>
    </div>
  );
}
