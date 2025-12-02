"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
    {
        id: 1,
        title: "Register Online",
        description:
            "Fill out the registration form with your basic details, and be cautious and avoid errors.",
    },
    {
        id: 2,
        title: "Upload Documents",
        description:
            "Upload your educational certificates, passport-size photo, and ID proof in clear copies in the correct format for verification.",
    },
    {
        id: 3,
        title: "Pay the Fees",
        description:
            "You can pay the fee online or send the demand draft: SVKM's NMIMS to Mumbai. Ensure keeping a copy of your payment receipt for tracking purpose.",
    },
    {
        id: 4,
        title: "Wait For Confirmation",
        description:
            "After verification, you will receive a unique student number. You can access all your course material and university services using your student number.",
    },
];

export default function StepsSection() {
    useEffect(() => {
        AOS.init({
            once: true,
            easing: "ease-out-quart",
        });
    }, []);

    return (
        <section className="bg-[#FFEDED] py-16 px-4">
            <div className="w-full lg:w-[1006px] px-4 mx-auto flex flex-col lg:flex-row gap-8 md:gap-20 items-start">
                {/* Left Text */}
                <div className="lg:w-4/12">
                    <h2 className="text-[26px] font-semibold font-poppins text-[#ED2024] mb-4">
                        How to Apply
                    </h2>
                    <p className="text-gray-800 text-sm font-sans">
                        Applying to <strong>SVKM's NMIMS CODE</strong> is a simple and smooth
                        process. There are a few simple steps to follow:
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid lg:grid-cols-2 gap-10 w-full lg:w-8/12">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`
                relative p-6 rounded-2xl shadow-lg
                transition-all duration-300
                ${step.id === 1 ? "bg-[#ED2024] text-white" : "bg-white text-black"}
            `}
                        >
                            {/* OUTSIDE NUMBER BADGE */}
                            <div
                                className={`
                    w-12 h-12 flex items-center justify-center rounded-full 
                    absolute -top-6 -left-6 text-[20px] font-bold
                    shadow-md
                    ${step.id === 1 ? "bg-white text-[#ED2024]" : "bg-gray-400 text-white"}
                `}
                            >
                                {step.id}
                            </div>

                            {/* TITLE */}
                            <h3
                                className={`text-lg font-semibold mb-2 
                ${step.id === 1 ? "text-white" : "text-gray-900"}`}
                            >
                                {step.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className={`text-sm leading-relaxed`}>
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
