"use client";

import { useEffect, useState } from "react";
import Heading from "@/common/Heading";
import Image from "next/image";
import SVGIcon from "@/common/SVGIcon";
import { sanitizeHtml } from "@/common/sanitizeHtml";

function Eligibility({ eligibilitycriteria }) {
  console.log("eligibilitycriteria", eligibilitycriteria)
  const [activeTab, setActiveTab] = useState("indian"); // default tab

  const indianData = eligibilitycriteria?.IndianCriteria || [];
  const foreignData = eligibilitycriteria?.NRICriteria || [];

  const hasIndian = Array.isArray(indianData) && indianData.length > 0;
  const hasForeign = Array.isArray(foreignData) && foreignData.length > 0;

  // Tabs tabhi dikhen jab dono data ho
  const showTabs = hasIndian && hasForeign;

  // Default active tab
  useEffect(() => {
    if (hasIndian) setActiveTab("indian");
    else if (hasForeign) setActiveTab("foreign");
  }, [hasIndian, hasForeign]);

  const getGridClass = (length) => {
    if (length === 1) return "grid-cols-1 justify-items-center";
    if (length === 2) return "grid-cols-1 md:grid-cols-2";
    return "grid-cols-1 md:grid-cols-3";
  };

  /* Render Cards */
  const renderCards = (data) => (
    <div className={`grid gap-1 ${getGridClass(data.length)}`}>
      {data.map((item, index) => (
        <div
          key={index}
          className="p-2 md:p-6 border-b md:border-b-0 md:border-r
          last:border-r-0 border-[#FCF0EE] space-y-4
          w-full md:max-w-[350px]"
        >
          {/* ICON */}
          {(item.title === "Educational Qualifications" ||
            item.title === "Educational Qualification") && (
              <div className="bg-[#FCF0EE] h-12 w-12 rounded-full flex justify-center items-center">
                <SVGIcon name="education" size={24} />
              </div>
            )}

          {item.title === "Grades" && (
            <div className="bg-[#FCF0EE] h-12 w-12 rounded-full flex justify-center items-center">
              <SVGIcon name="grade" size={24} />
            </div>
          )}

          {item.title === "Work Experience" && (
            <div className="bg-[#FCF0EE] h-12 w-12 rounded-full flex justify-center items-center">
              <SVGIcon name="work" size={24} />
            </div>
          )}

          <h3 className="font-semibold text-[16px] md:text-[18px]">
            {item.title}
          </h3>

          <div
            className="text-[14px] leading-6"
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(item?.description),
            }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <>
      {eligibilitycriteria?.IndianCriteria && (
        <section className="w-full px-2 md:px-6 py-6">
          <div className="max-w-[1230px]">
            <Heading title={eligibilitycriteria?.title} />
            {/* MAIN WRAPPER */}
            <div className="bg-[#FEE4E4] rounded-[18px] mt-10 border border-[#BCBCBCCC]">
              {/* TABS */}
              <div
                className={`w-full flex font-poppins font-[600] text-[14px] md:text-[17px] text-center 
  ${showTabs ? "justify-between" : "justify-center"}`}
              >

                {hasIndian && (
                  <button
                    onClick={() => setActiveTab("indian")}
                    className={`py-4 text-center transition-all
    ${hasIndian && hasForeign ? "w-1/2 rounded-br-[17px] rounded-tl-[17px]" : "w-[220px] rounded-[17px]"}
    ${activeTab === "indian" ? "bg-[#FEE4E4] text-black" : "bg-white text-[#666]"}`}
                  >
                    Indian Students
                  </button>
                )}

                {hasForeign && (
                  <button
                    onClick={() => setActiveTab("foreign")}
                    className={`py-4 text-center transition-all
    ${hasIndian && hasForeign ? "w-1/2 rounded-bl-[17px] rounded-tr-[17px]" : "w-[220px] rounded-[17px]"}
    ${activeTab === "foreign" ? "bg-[#FEE4E4] text-black" : "bg-white text-[#666]"}`}
                  >
                    Foreign Students
                  </button>
                )}




              </div>

              {/* CONTENT BOX */}
              <div className="px-4 pb-6">
                <div className="bg-white w-full px-6 md:px-8 md:py-10 mt-10 rounded-[12px]">

                  {/* Indian */}
                  {(activeTab === "indian" || !showTabs) && hasIndian &&
                    renderCards(indianData)}

                  {/* Foreign */}
                  {activeTab === "foreign" && hasForeign &&
                    renderCards(foreignData)}

                </div>
              </div>
            </div>

          </div>

        </section>
      )}
    </>
  );
}






function EnquiryBox() {
  return (
    <div className=" mx-auto mt-8 lg:mt-12 rounded-[18px] bg-gradient-to-br from-[#fef0f0] to-[#fbdbdc] p-4 sm:p-4 lg:p-6 flex  gap-4 items-center w-full">

      {/* Left Image on Desktop only */}
      <div className="hidden md:block md:flex justify-center w-1/2">
        <img
          src="/images/university/course/3.png"
          alt="course form"
          className="w-[90%] h-auto object-contain"
        />
      </div>

      {/* Form */}
      <div className=" w-full md:w-1/2 md:mx-auto">
        <FormBox />
      </div>

    </div>
  );
}




function FormBox() {
  return (
    <div className="w-full flex justify-center  ">
      <div className="w-full ">

        {/* Logos */}
        <div className="flex gap-4 justify-center border-b border-gray-300 pb-2 mb-3">
          <Image
            src="/images/university/course/4.png"
            alt="course logo"
            width={80}
            height={60}
            className=" w-[120px] object-contain"
          />
          <Image
            src="/images/university/course/5.png"
            alt="course logo"
            width={60}
            height={40}
            className=" w-[120px] object-contain"
          />
          <Image
            src="/images/university/course/6.png"
            alt="course logo"
            width={60}
            height={40}
            className="w-[0px] object-contain"
          />
        </div>

        <h3 className="font-semibold mb-3 text-lg">Enquire Now</h3>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <Input label="Your Name" placeholder="John Doe" />
          <Input label="Email" placeholder="example@gmail.com" />
          <Input label="Phone" placeholder="+91 000 000 0000" />
          <Input label="OTP" placeholder="xxxx" />
        </div>

        <button className="bg-red-600 text-white text-sm w-full py-2 rounded-full hover:bg-red-700 transition">
          Submit
        </button>
      </div>
    </div>
  );
}


function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-[10px] text-gray-600">{label}</label>
      <input
        className="w-full h-[32px] bg-white border border-gray-400 rounded-full px-3 text-[12px]"
        placeholder={placeholder}
      />
    </div>
  );
}





export default Eligibility;
