"use client";


import "swiper/css";

import Image from "next/image";
import { useState } from "react";

export default function EnquiryForm() {



  return (
    <>
      <section className="w-full px-6 py-6 mx-auto" id="courses-section">
        <div className="max-w-[1230px]">
       


          <section className="px-6">
      

            <EnquiryBox />
          </section>
        </div>
      </section>
    </>
  );
}

/* ------------------ COURSE CARD ------------------ */


/* ------------------ DESKTOP ENQUIRY ------------------ */
function EnquiryBox() {
  return (
    <div className="w-full mx-auto mt-8 rounded-[18px] bg-gradient-to-br from-[#fef0f0] to-[#fbdbdc] p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

      {/* Left Image on Desktop only */}
      <div className="hidden md:flex justify-center">
        <img
          src="/images/university/course/3.png"
          alt="course form"
          className="w-[90%] h-auto object-contain"
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
  const [gender, setGender] = useState("Male");

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-200">

      {/* Top Text */}
      <h2 className=" text-[14px] md:text-[17px] font-[400] font-poppins text-center">
        Apply from 100+ Online Approved Universities
      </h2>

      <p className="text-center text-[12px] md:text-[14px] text-gray-600 mt-1 font-[400]">
        No-Cost EMI From <span className="text-red-600 font-bold">₹4,585</span>
      </p>

      {/* Consult button */}
      <button className="w-full border border-gray-300 rounded-lg py-2 mt-4 flex justify-center items-center gap-2 font-[600] font-poppins text-[12px] md:text-[16px]">
        <Image src="/images/university/course/4.png" width={26} height={26} />
        Consult with Collegesathi experts.
      </button>

      {/* Gender Toggle */}
    <div className="grid grid-cols-2 gap-3 mt-2 col-span-2">
  <button
    className={`py-2 border border-gray-300 rounded-md text-sm font-medium ${
      gender === "Male" ? "bg-red-600 text-white" : "bg-white"
    }`}
    onClick={() => setGender("Male")}
  >
    Male
  </button>

  <button
    className={`py-2 border border-gray-300 rounded-md text-sm font-medium ${
      gender === "Female" ? "bg-red-600 text-white" : "bg-white"
    }`}
    onClick={() => setGender("Female")}
  >
    Female
  </button>
</div>


      {/* FORM INPUTS */}
      <div className="grid grid-cols-2 gap-3 mt-2   ">
        <Input placeholder="Full Name*" />
        <Input placeholder="Date Of Birth*" />

        <div>
          <Input placeholder="Mobile Number*" />
          <p className="text-green-600 text-[10px] mt-1">✔ Privacy assured</p>
        </div>

        {/* OTP */}
        <div>
          <Input placeholder="OTP" />
          <p className="flex justify-between text-[10px] mt-1">
            <span className="text-green-600">Verified</span>
            <span className="text-red-500 cursor-pointer">Resend</span>
          </p>
        </div>

        <Input placeholder="Email*" className="col-span-2" />
        
        <Input placeholder="Please Select State*" />
        <Input placeholder="Please Select City*" />
      </div>

      {/* CHECKBOX */}
      <div className="flex items-start gap-2 mt-3">
        <input type="checkbox" className="mt-1" />
        <p className="text-[11px] text-gray-600">
          I hereby authorize you to send notifications via SMS/RCS Messages,
          Promotional / Informational Messages.
        </p>
      </div>

      {/* SUBMIT BTN */}
      <button className="w-full mt-5 py-3 bg-red-600 text-white rounded-md text-sm font-semibold hover:bg-red-700 transition">
        Submit
      </button>
    </div>
  );
}

/* -------------------------------- INPUT ------------------------------------- */

function Input({ label,placeholder,className = "" }) {
  return (
    <div className={`w-full ${className}`}>
      <label className="text-[11px] text-gray-600">{label}</label>
      <input
        type="text"
        className="w-full h-[36px] border border-gray-300 rounded-md px-3 mt-1 text-sm focus:outline-red-400"
        placeholder={placeholder}
      />
    </div>
  );
}
