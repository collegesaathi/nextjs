import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Listing from "@/pages/api/Listing";
import { toast } from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay ,EffectFade } from "swiper/modules";
import "swiper/css";

function EnquiryBox() {

    const bannerImages = [
    "/images/university/formbg.webp",
    "/images/university/formbg2.webp", // Doosri image ka path yahan likhein
    "/images/university/formbg3.webp", // Teesri image ka path yahan likhein
  ];
  return (
    <div className="max-w-[1230px] px-2 md:px-6 py-6 " data-aos="fade-up">
      <div className="lg:w-full mt-8 rounded-[18px] min-h-[400px] bg-gradient-to-br from-[#fef0f0] to-[#fbdbdc] grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="hidden md:flex justify-center w-full h-full">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
             fadeEffect={{ crossFade: true }} // Image change hote waqt smooth lagega
            autoplay={{
              delay: 2000, // 2 seconds
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full"
          >
            {bannerImages.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`banner-${index}`}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-full ">
          <FormBox />
        </div>
      </div>
    </div>
  );
}

function FormBox() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [otpSent, setOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [timer, setTimer] = useState(0);
  const [otpLoading, setOtpLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone_number: "",
    email: "",
    content: "Enquiry from Banner",
    otp: "",
    course_id: "1",
    city: "jaipur",
    state: "rajasthan",
    page_name: router?.asPath

  });



    const logos = [
    
    "/images/university/Amrita.svg",
    "/images/university/sharda.svg",
  
    "/images/university/Amrita.svg",
    "/images/university/sharda.svg",
  ];


 

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  const handleSendOtp = async () => {
    if (form.phone_number.length !== 10) {
      return toast.error("Please enter a valid 10-digit number");
    }
    setOtpLoading(true);
    try {
      const main = new Listing();
      await main.SendOtp(form.phone_number);
      toast.success("OTP sent successfully!");
      setOtpSent(true);
      setTimer(90);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send OTP");
    } finally {
      setOtpLoading(false);
    }
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(form.email)) return toast.error("Please enter a valid email address!");
    if (!isVerified) return toast.error("Please verify your mobile number first!");
    if (loading) return;

    setLoading(true);
    try {
      const main = new Listing();
      const response = await main.ContactAdd({
        ...form,
        page_name: router?.asPath

      });
      if (response?.data?.status) {
        toast.success(response.data.message);
        setForm({
          name: "", phone_number: "", email: "", otp: "", content: "Enquiry from Banner",
          city: "jaipur", state: "rajasthan", page_name: router?.asPath

        });
        setOtpSent(false);
        setIsVerified(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (form.otp.length < 4) return toast.error("Enter valid OTP");
    setOtpLoading(true);
    try {
      const main = new Listing();
      const res = await main.VerifyOtp(form.phone_number, form.otp);
      if (res) {
        toast.success("Mobile number verified!");
        handleSubmit()
        setIsVerified(true);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Invalid OTP");
    } finally {
      setOtpLoading(false);
    }
  };

 

  return (
    <div className="w-full p-4 flex justify-center md:justify-start">
      <div className="w-full max-w-lg">
        <div className="flex gap-2 justify-center border-b border-gray-300 pb-2 mb-5">
        <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {logos.map((src, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <img 
                  src={src} 
                  alt="university logo" 
                  width={80} 
                  height={30} 
                  className="object-cover w-full" 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <h3 className="font-[600] mb-6 text-[18px]">Enquire Now</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
          <Input label="Your Name" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} />
          <Input label="Email" name="email" placeholder="example@gmail.com" value={form.email} onChange={handleChange} />

          {/* Phone Input with +91 Prefix */}
          <div className="relative">
            <Input
              label="Phone"
              name="phone_number"
              prefix="+91" // <--- Prefix Added Here
              placeholder="00000 00000"
              value={form.phone_number}
              disabled={isVerified}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) handleChange({ target: { name: "phone_number", value } });
              }}
            />
            {!isVerified && (
              <button
                type="button"
                onClick={handleSendOtp}
              disabled={otpLoading || form.phone_number.length !== 10 || timer > 0}
                className="absolute right-2 bottom-[6px] bg-red-600 text-white text-[12px] px-2 py-1.5 rounded-full hover:bg-red-700 disabled:bg-gray-400 transition-all z-10"
              >
                 {otpSent ? (timer > 0 ? `Resend` : "Resend") : "Send OTP"}
              </button>
            )}
            {isVerified && (
              <span className="absolute right-3 bottom-2 text-green-600 text-[10px] font-bold">Verified ✓</span>
            )}
          </div>

          <div className="relative">
            <Input
              label="OTP"
              name="otp"
              placeholder="xxxx"
              value={form.otp}
              disabled={!otpSent || isVerified}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 4) handleChange({ target: { name: "otp", value } });
              }}
            />
            {otpSent && !isVerified && (
              <button
                type="button"
                onClick={handleVerifyOtp}
                disabled={otpLoading || form.otp.length < 4}
                className="absolute right-2 bottom-[6px] bg-black text-white text-[10px] px-3 py-1.5 rounded-full disabled:bg-gray-400 z-10"
              >
                Verify
              </button>
            )}
          </div>
        </div>

        {otpSent && !isVerified && timer > 0 && (
          <p className="text-[12px] text-gray-500 mt-[-10px] ml-2">Resend in {timer}s</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading || !isVerified}
          className="bg-red-600 text-white text-sm w-full py-3 rounded-full hover:bg-red-700 transition mt-4 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Submit Enquiry"}
        </button>
      </div>
    </div>
  );
}

/* ------------------ MODIFIED INPUT COMPONENT ------------------ */
function Input({ label, placeholder, name, value, onChange, disabled, prefix }) {
  return (
    <div className="flex flex-col w-full">
      <label className="text-[14px] text-gray-600 mb-1">{label}</label>
      <div className="relative flex items-center">
        {/* +91 visual prefix */}
        {prefix && (
          <span className="absolute left-4 text-[12px] text-gray-900 font-semibold border-r border-gray-300 pr-2 pointer-events-none">
            {prefix}
          </span>
        )}
        <input
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          type="text"
          // Conditional padding: if prefix exists, add more left padding (pl-12)
          className={`w-full h-[40px] bg-white border border-gray-400 rounded-full text-[12px] focus:outline-none focus:ring-1 focus:ring-red-500 disabled:bg-gray-100 disabled:text-gray-500 
            ${prefix ? "pl-14" : "px-4"}`} 
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default EnquiryBox;