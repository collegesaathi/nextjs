"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "@/common/Heading";

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
    const [activeStep, setActiveStep] = useState(1); // default selected step

    useEffect(() => {
        AOS.init({
            once: true,
            easing: "ease-out-quart",
        });
    }, []);
    return (
        <div className="mt-[20px] md:mt-[50px] bg-[#FCF0EE]">
            <section className="w-full px-6 py-6 mx-auto" id="admission-process-section">
                <div className="max-w-[1100px] mx-auto">
                    {/* Left Text */}
                    <div className="w-full flex flex-col lg:flex-row gap-8 md:gap-[10px]  mt-[20px] justify-left items-left">


                        <div className="w-full md:max-w-[350px] pt-[120px] px-8">
                            <div className="flex flex-col justify-center items-start text-left">
                                <Heading title="NMIMS Online MBA Admission Process" />
                            </div>

                            <p className="text-gray-800 text-sm font-sans text-left">
                                To get admission to any online programs, the students can directly contact
                                collegesathi.com. Other than that, the candidate needs to follow the
                                following information:
                            </p>
                        </div>

                        {/* Right Steps Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    onClick={() => setActiveStep(step.id)}
                                    className="
                w-[230px] h-auto
                relative p-6 rounded-2xl cursor-pointer
                transition-all duration-300
                hover:bg-[#ED2024] hover:text-white
                bg-white text-black
              "
                                >
                                    <div
                                        className="
                  w-12 h-12 flex items-center justify-center rounded-full 
                  absolute -top-6 -left-6 text-[20px] font-bold shadow-md
                  hover:bg-white hover:text-[#ED2024] bg-[#ED2024] text-white
                "
                                    >
                                        {step.id}
                                    </div>

                                    <h3 className="text-lg font-semibold mb-2">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}
