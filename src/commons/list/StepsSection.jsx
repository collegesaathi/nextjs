"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "@/common/Heading";

export default function StepsSection({ admissionProcess }) {
    const [activeStep, setActiveStep] = useState(1); // default selected step

    useEffect(() => {
        AOS.init({
            once: true,
            easing: "ease-out-quart",
        });
    }, []);
    return (
        <div className="mt-[20px]  md:mt-[50px] bg-[#FCF0EE]">
            <section className="px-6 py-6" id="admission-process-section">
                <div className="max-w-[1230px] ">
                    {/* Left Text */}
                    {/* <div className="w-full flex flex-col lg:flex-row gap-8 md:gap-[10px]  mt-[20px] justify-left items-left"> */}
                             <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-[10px]  mt-[20px] justify-center items-left">


                        <div className="w-full md:max-w-[800px] justify-center items-center mx-auto my-auto">
                            <div className="flex flex-col justify-left  text-left">
                                <Heading title={admissionProcess?.title} />
                            </div>
                            <div
                                className="font-poppins text-[15px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4"
                                dangerouslySetInnerHTML={{ __html: admissionProcess?.description || "" }}
                            />

                        </div>

                        {/* Right Steps Grid */}

                        <div className="flex justify-center items-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                                {admissionProcess?.process.map((step, index) => (
                                    <div
                                        key={step.id}
                                        onClick={() => setActiveStep(step.id)}
                                        className="
                w-[230px] h-auto
                relative py-6 px-4 rounded-2xl cursor-pointer
                transition-all duration-300
                hover:bg-[#ED2024] hover:text-white group
                bg-white text-black
              "
                                    >
                                        <div
                                            className="
                  w-12 h-12 flex items-center justify-center rounded-full 
                  absolute -top-6 -left-6 text-[20px] font-bold shadow-md
                  group-hover:bg-white group-hover:text-[#ED2024] bg-[#ED2024] text-white
                "
                                        >
                                            {index+1}
                                        </div>

                                        <h3 className="text-[17px] font-[600] mb-2">
                                            {step.title}
                                        </h3>

                                        <p className="text-sm leading-[18px] line-clamp-5">
                                            {step.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}
