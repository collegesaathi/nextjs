"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from "@/common/Heading";
import { sanitizeHtml } from "@/common/sanitizeHtml";

export default function StepsSection({ admissionProcess }) {
  const [activeStep, setActiveStep] = useState(1); // default selected step

  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-quart",
    });
  }, []);
  return (
    <>
      {admissionProcess?.process?.length > 1 && (

        <div className="mt-[20px] py-6 md:mt-[50px] bg-[#FCF0EE] "  data-aos="fade-up">
          <section className="px-3 sm:px-5 md:px-6 " id="admission-process-section">
            <div className="max-w-[1230px] ">

              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 mt-6 items-center ">

                {/* LEFT CONTENT */}
                <div className="w-full max-w-[800px] mx-auto">
                  <div className="flex flex-col text-left">
                    <Heading title={admissionProcess?.title} />
                  </div>

                  <div
                    className="custom-description font-poppins text-[14px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4 [&_*]:!bg-transparent "
                    dangerouslySetInnerHTML={{ __html: sanitizeHtml(admissionProcess?.description || "") || "" }}
                  />
                </div>

                {/* RIGHT SIDE STEPS */}
                <div className="flex justify-center items-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mx-2 sm:mx-0">

                    {admissionProcess?.process?.map((step, index) => (
                      <div
                        key={step.id}
                        onClick={() => setActiveStep(step.id)}
                        className="
                w-full max-w-[260px] 
                relative py-6 px-4
                    rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-none
                 cursor-pointer shadow-md
                transition-all duration-300
                hover:bg-[#ED2024] hover:text-white group
                bg-white text-black mx-auto
              "  data-aos="fade-up"
                      >
                        {/* STEP NUMBER */}
                        <div
                          className="
                  w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
                  absolute -top-5 -left-5 sm:-top-6 sm:-left-6
                  text-[16px] sm:text-[20px] font-bold shadow-md
                  group-hover:bg-white group-hover:text-[#ED2024]
                  bg-[#ED2024] text-white 
                " 
                        >
                          {index + 1}
                        </div>

                        <h3 className="text-[16px] sm:text-[17px] font-[600] mb-2">
                          {step.title}
                        </h3>

                        <p className="text-[13px] sm:text-sm leading-[18px] sm:leading-[20px] line-clamp-5 group-hover:line-clamp-none">
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
      )}
    </>

  );
}
