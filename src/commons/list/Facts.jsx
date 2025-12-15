import React from "react";
import Image from "next/image";


function Facts({ facts }) {
  return (
    <>
      <div className="mt-[50px]  bg-[#fcf0ee]">
        <section className="w-full px-6 py-6 mx-auto" id="facts-section">
          <div className="max-w-[1230px]">
            <div className="relative z-10  mt-[50px]">
              <h2
                className="
    font-poppins
    font-[600]
    text-[18px] md:text-[28px]
    leading-[24px] md:leading-[100%]
    tracking-[0px]
    text-[#282529]
    mb-4 md:mb-[30px]
    w-[250px]
  "
              >
                {facts?.title}

              </h2>
              <div className="rounded-[20px] bg-white max-w-[1000px] shadow-[0px_1px_10px_rgba(0,0,0,0.09)] p-4 md:p-8">
                <Image src="/images/university/factsbg.png" width={200} height={200} />

                <div className="flex">

                  {/* Timeline + Content Together Row by Row */}
                  <div className="flex-1">

                    {facts?.facts?.map((item, index) => (
                      <div key={index} className="flex gap-4 relative py-4">

                        {/* ---- Timeline Column ---- */}
                        <div className="flex flex-col items-center">

                          {/* Numbered Dot */}
                          <div className="w-7 h-7 bg-[#fcf0ee] rounded-full flex items-center justify-center">
                            <span className="font-poppins font-semibold text-[#ff8787] text-[16px]">
                              {index + 1}
                            </span>
                          </div>

                          {/* Auto Adjust Line */}
                          {index < facts.length - 1 && (
                            <div className="flex-grow w-[1px] bg-[#ffd5ce]"></div>
                          )}
                        </div>

                        {/* ---- Content Column ---- */}
                        <div className="flex-1 pb-4">
                          <h3 className="font-poppins font-semibold text-[15px] md:text-[17px] text-[#282529]">
                            {item.patternName}
                          </h3>

                          <div
                            className="font-poppins text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-[#282529] mt-2"
                            dangerouslySetInnerHTML={{ __html: item?.description || "" }}
                          />
                        </div>

                      </div>
                    ))}


                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Facts;
