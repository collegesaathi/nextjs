"use client";
import { useState } from "react";

export default function OfficeSection() {
  const [active, setActive] = useState("jaipur");

  return (
    <div className="bg-[#F4F5F7] py-20">

      {/* ----------- TOP SCROLL GALLERY ------------- */}
      <div className="overflow-x-auto whitespace-nowrap px-6 flex gap-6 pb-10">
        <img
          src="/images/g1.jpg"
          className="h-72 w-56 object-cover rounded-xl inline-block"
        />
        <img
          src="/images/g2.jpg"
          className="h-72 w-56 object-cover rounded-xl inline-block"
        />
        <img
          src="/images/g3.jpg"
          className="h-72 w-56 object-cover rounded-xl inline-block"
        />
        <img
          src="/images/g4.jpg"
          className="h-72 w-56 object-cover rounded-xl inline-block"
        />
        {/* Add more as needed */}
      </div>

      {/* ----------- MAIN SECTION ------------- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-bold">Our Offices</h2>
          <p className="text-gray-600 mt-4 max-w-md leading-relaxed">
            We like working together in our offices with our team, where we share ideas,
            knowledge and opportunities. Here, we learn, grow and work to transform
            the lives of people.
          </p>

          {/* Tabs */}
          <div className="flex mt-6 bg-white rounded-xl p-1 w-max shadow-sm">
            <button
              onClick={() => setActive("jaipur")}
              className={`px-6 py-3 rounded-md text-sm font-medium ${
                active === "jaipur"
                  ? "bg-[#63A46C] text-white"
                  : "text-gray-700"
              }`}
            >
              Jaipur
            </button>

            <button
              onClick={() => setActive("gurugram")}
              className={`px-6 py-3 rounded-md text-sm font-medium ${
                active === "gurugram"
                  ? "bg-[#63A46C] text-white"
                  : "text-gray-700"
              }`}
            >
              Gurugram
            </button>
          </div>

          {/* Bottom Link */}
          <a
            href="#"
            className="text-red-600 mt-6 inline-block font-medium underline"
          >
            Start Your Journey with Us
          </a>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="rounded-2xl overflow-hidden shadow-md bg-white p-3 w-[300px]">
            <img
              src={
                active === "jaipur"
                  ? "/images/office-jaipur.jpg"
                  : "/images/office-gurugram.jpg"
              }
              className="w-full h-[380px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
