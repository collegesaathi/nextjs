"use client";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import BackNext from "@/pages/components/BackNext";
import Listing from "@/pages/api/Listing";

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
      <section className="w-full px-6 py-6 mx-auto" id="courses-section">
        <div className="max-w-[1230px]">
          <BackNext
            title="NMIMS CODE: Courses"
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
              {courses.map((course, index) => (
                <SwiperSlide key={index}>
                  <CourseCard course={course} />
                </SwiperSlide>
              ))}
            </Swiper>
           <div className="px-2 md:px-6 pt-5 lg:pt-6">
                      <EnquiryBox />
           </div>
  
          </section>
        </div>
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
    <div className="w-full  mx-auto mt-8 rounded-[18px] bg-gradient-to-br from-[#fef0f0] to-[#fbdbdc] p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

      {/* Left Image on Desktop only */}
      <div className="hidden md:flex justify-center">
        <img
          src="/images/university/course/3.png"
          alt="course form"
          className="w-[80%] h-auto object-contain"
        />
      </div>

      {/* Form */}
      <FormBox />
    </div>
  );
}

/* ------------------ MOBILE ENQUIRY ------------------ */


/* ------------------ FORM ------------------ */
function FormBox() {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone_number: '',
    email: '',
    content: '',
    otp: '',
    course_id: "",
    city: 'jaipur',
    state: 'rajasthan',
    page_name: router?.pathname
  });

  // Correct handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const main = new Listing();
      const response = await main.ContactAdd({
        ...form,
        otp: form?.otp || "1234",
      });

      if (response?.data?.status) toast.success(response.data.message);
      else toast.error(response.data.message);



      // ✅ Reset form after submit
      setForm({
        name: '',
        phone_number: '',
        email: '',
        otp: '',
        page_name: router?.pathname
      });


    } catch (error) {
      console.error("API error:", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    }

    setLoading(false);

  };

  return (
    <div className="w-full flex justify-center md:justify-start">
      <div className="w-full max-w-sm">

        {/* Logos */}
        <div className="flex gap-2 justify-center border-b border-gray-300 pb-2 mb-3">
          <Image src="/images/university/course/4.png" alt="course logo" width={60} height={40} className="w-[90px] object-contain" />
          <Image src="/images/university/course/5.png" alt="course logo" width={60} height={40} className="w-[90px] object-contain" />
          <Image src="/images/university/course/6.png" alt="course logo" width={60} height={40} className="w-[90px] object-contain" />
        </div>

        <h3 className="font-semibold mb-3 text-lg">Enquire Now</h3>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <Input label="Your Name" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} />
          <Input label="Email" name="email" placeholder="example@gmail.com" value={form.email} onChange={handleChange} />
          <Input label="Phone" name="phone_number" placeholder="+91 000 000 0000" value={form.phone_number} onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            if (value.length <= 10) handleChange({ target: { name: "phone_number", value } });
          }} />
          <Input label="OTP" name="otp" placeholder="xxxx" value={form.otp} onChange={handleChange} />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-red-600 text-white text-sm w-full py-2 rounded-full hover:bg-red-700 transition"
        >
          {loading ? "Loading.." : "Submit"}
        </button>
      </div>
    </div>
  );
}


/* -------------------------------- INPUT ------------------------------------- */

function Input({ label, placeholder, name, value, onChange }) {
  return (
    <div>
      <label className="text-[10px] text-gray-600">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        className="w-full h-[32px] bg-white border border-gray-400 rounded-full px-3 text-[12px]"
        placeholder={placeholder}
      />
    </div>
  );
}
