"use client";
import React from "react";

export default function Confusion() {
    return (
        <div className="relative w-full bg-white py-20 px-4">

            {/* LEFT MAIN BOX */}
            <div className="max-w-6xl mx-auto relative">

                <div className="bg-gradient-to-r from-[#FFE7E7] to-[#FFECEC] p-10 rounded-[2rem] shadow-xl">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Don’t Let Confusion <br /> Take Over
                    </h2>

                    <button className="px-8 py-4 font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 transition duration-300 shadow-lg">
                        Compare online universities for <span className="font-extrabold">Free</span>
                    </button>
                </div>

                {/* RIGHT CARD — OVERLAPPING */}
                <div className="absolute top-1/2 right-0 translate-y-[-50%] w-[420px] max-w-sm">

                    {/* background shadow layer */}
                    <div className="absolute inset-0 bg-white border border-gray-100 rounded-[2rem] translate-x-4 translate-y-4 opacity-70"></div>

                    {/* main white card */}
                    <div className="relative p-8 bg-white border border-gray-200 rounded-[2rem] shadow-2xl">

                        <div className="flex items-center justify-between mb-8">
                            <p className="text-5xl font-extrabold text-gray-900">30,000+</p>

                            <div className="flex space-x-1">
                                <div className="w-4 h-4 rounded-full border-2 border-red-300"></div>
                                <div className="w-4 h-4 rounded-full border-2 border-red-300 ml-[-0.5rem] mt-1"></div>
                                <div className="w-4 h-4 rounded-full border-2 border-red-300 ml-[-0.5rem] mt-2"></div>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-10">
                            Students have found their path to success with Collegesathi
                        </p>

                        {/* Progress bar */}
                        <div className="mb-8">
                            <p className="text-sm font-medium text-gray-700 mb-2">
                                Access 100+ Online Universities in One Place
                            </p>

                            <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-green-300 to-green-500 w-[80%] rounded-full"></div>
                            </div>
                        </div>

                        <div className="flex items-center border-t pt-6">
                            <p className="text-gray-500 text-sm">Filter Online Universities with Clickpick</p>
                            <svg
                                className="w-5 h-5 ml-auto text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
