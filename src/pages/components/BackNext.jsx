"use client";
import React from "react";
import Heading from "@/common/Heading";

export default function BackNext({
  title,
  midtitle,
  progress = 0,
  isBeginning = false,
  isEnd = false,
  onPrev = () => {},
  onNext = () => {},
}) {
  // Responsive progress bar width
  // const progressBarTotalWidth =
  //   typeof window !== "undefined" && window.innerWidth >= 1024
  //     ? "180px"
  //     : "110px";

  return (
    <div className="flex  justify-between items-center md:items-start  w-full"  >
      <Heading title={title} midtitle={midtitle} />

      <div className="flex flex-wrap items-center justify-end md:space-x-4">
        <div
          className="h-1.5 bg-gray-300 rounded-full overflow-hidden  w-24 sm:w-28 md:w-36 lg:w-44 xl:w-48"
     
        >
          <div
            className="h-full bg-[#EC1E24] transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex space-x-2 mt-4 md:mt-0">

          <button
            type="button"
            onClick={onPrev}
            disabled={isBeginning}
            className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center 
              transition-all duration-200 flex-shrink-0
              ${
                isBeginning
                  ? "bg-gray-100 border border-gray-300 cursor-not-allowed text-gray-400 opacity-60"
                  : "bg-white border border-[#EC1E24] hover:bg-red-50 cursor-pointer text-[#EC1E24]"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={onNext}
            disabled={isEnd}
            className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center 
              transition-all duration-200 flex-shrink-0
              ${
                isEnd
                  ? "bg-gray-100 border border-gray-300 cursor-not-allowed text-gray-400 opacity-60"
                  : "bg-white border border-gray-300 hover:border-[#EC1E24] hover:text-[#EC1E24] cursor-pointer text-gray-500"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
