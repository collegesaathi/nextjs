"use client";

import { useState } from "react";
import Heading from "@/common/Heading";
import Image from "next/image";

function Eligibility({eligibilitycriteria}) {
  console.log("gvdgvnhgbn",eligibilitycriteria)
  const [activeTab, setActiveTab] = useState("indian"); // default tab

  return (
    <>
      <section className="w-full px-6 py-6">
        <div className="max-w-[1230px]">
          <Heading title="NMIMS Online MBA Eligibility Criteria" />

          {/* MAIN WRAPPER */}
          <div className="bg-[#FEE4E4] rounded-[18px] mt-10 border border-[#BCBCBCCC]">

            {/* TABS */}
            <div className="w-full flex font-poppins font-[600] text-[14px] md:text-[17px]">
              
              {/* Indian Students Tab */}
              <button
                onClick={() => setActiveTab("indian")}
                className={`w-1/2 py-4 rounded-l-[17px] text-center transition-all
                ${activeTab === "indian" 
                  ? "bg-[#FEE4E4] text-black" 
                  : "bg-white text-[#666]"}
                `}
              >
                Indian Students
              </button>

              {/* Foreign Students Tab */}
              <button
                onClick={() => setActiveTab("foreign")}
                className={`w-1/2 py-4 rounded-r-[17px] text-center transition-all
                ${activeTab === "foreign" 
                  ? "bg-[#FEE4E4] text-black" 
                  : "bg-white text-[#666]"}
                `}
              >
                Foreign Students
              </button>

            </div>

            {/* CONTENT BOX */}
            <div className="px-4 pb-6">
              <div className="bg-white w-full px-6 sm:px-8 py-10 mt-10 rounded-[12px]">

                {activeTab === "indian" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-1">

                    {/* CARD 1 */}

                    {eligibilitycriteria?.IndianCriteria?.map((item,index)=>(
                          <div className=" p-6  md:border-r border-[#FCF0EE] space-y-2 md:space-y-8">
                      <div className="bg-[#FCF0EE] h-12 w-12 rounded-full flex justify-center items-center">
                        <img src={item.images} width={30} height={40} />
                      </div>
                      <h3 className="font-semibold text-[18px]">{item.title}</h3>
                      {/* <p className="text-[14px] leading-6" dangerouslySetInnerHTML={{ __html: item?.description || "" }}> */}
                            <p className="text-[14px] leading-6" >
                    {item.description}
                      </p>
                    </div>

                    ))}
                

                    {/* CARD 2 */}
                    {/* <div className=" p-6 md:border-r border-[#FCF0EE] space-y-2 md:space-y-8">
                      <div className="bg-[#FCF0EE] h-12 w-12 rounded-full flex justify-center items-center">
                        <Image src="/images/courses/icons/Educational.svg" width={30} height={40} />
                      </div>
                      <h3 className="font-semibold text-[18px]">Grades</h3>
                      <p className="text-[14px] leading-6">
                        Minimum 50% marks (45% for SC/ST/OBC/PwD).
                      </p>
                    </div> */}

                    {/* CARD 3 */}
                    {/* <div className="rounded-[12px] p-6 space-y-2 md:space-y-8">
                      <div className="bg-[#FCF0EE] h-12 w-12 rounded-full flex justify-center items-center">
                        <Image src="/images/courses/icons/Educational.svg" width={30} height={40} />
                      </div>
                      <h3 className="font-semibold text-[18px]">Work experience</h3>
                      <p className="text-[14px] leading-6">
                        Work experience is not mandatory, but helpful.
                      </p>
                    </div> */}

                  </div>
                )}

                {activeTab === "foreign" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-1">

                    {/* CARD 1 */}
                     {eligibilitycriteria?.NRICriteria?.map((item,index)=>(
                          <div className=" p-6  md:border-r border-[#FCF0EE] space-y-2 md:space-y-8">
                      <div className="bg-[#FCF0EE] h-12 w-12 rounded-full flex justify-center items-center">
                        <img src={item.images} width={30} height={40} />
                      </div>
                      <h3 className="font-semibold text-[18px]">{item.title}</h3>
                      {/* <p className="text-[14px] leading-6" dangerouslySetInnerHTML={{ __html: item?.description || "" }}> */}
                            <p className="text-[14px] leading-6" >
                    {item.description}
                      </p>
                    </div>

                    ))}

                    {/* CARD 2 */}
                    {/* <div className="p-6 md:border-r border-[#FCF0EE] space-y-2 md:space-y-8">
                      <div className="bg-[#FCF0EE] h-12 w-12 rounded-full flex justify-center items-center">
                        <Image src="/images/courses/icons/Educational.svg" width={30} height={40} />
                      </div>
                      <h3 className="font-semibold text-[18px]">English Proficiency</h3>
                      <p className="text-[14px] leading-6">
                        IELTS/TOEFL score may be required depending on nationality.
                      </p>
                    </div> */}

                    {/* CARD 3 */}
                    {/* <div className=" p-6 space-y-2 md:space-y-8">
                      <div className="bg-[#FCF0EE] h-12 w-12 rounded-full flex justify-center items-center">
                        <Image src="/images/courses/icons/Educational.svg" width={30} height={40} />
                      </div>
                      <h3 className="font-semibold text-[18px]">Passport & Visa</h3>
                      <p className="text-[14px] leading-6">
                        Valid passport and international student verification.
                      </p>
                    </div> */}

                  </div>
                )}

              </div>
            </div>

          </div>
          <EnquiryBox />
        </div>
      </section>
    </>
  );
}






function EnquiryBox() {
  return (
    <div className="w-[1000px] mx-auto mt-8 lg:mt-12 rounded-[18px] bg-gradient-to-br from-[#fef0f0] to-[#fbdbdc] p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">

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




function FormBox() {
  return (
    <div className="w-full flex justify-center md:justify-start max-w-[1230px]">
      <div className="w-full max-w-sm">

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
