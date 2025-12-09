import Heading from "@/common/Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from "react";


function MarketingManagement() {

 



  
    return (<>
 <section className=" max-w-[1230px]  py-12 " id="marketing-section">
  <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-[#F8F9FA] p-8 rounded-[12px]">

    {/* LEFT TEXT CONTENT */}
    <div>
      <h2 className="text-[28px] md:text-[34px] font-bold text-[#1d1d1d] leading-tight">
        NMIMS Online MBA in <br /> Marketing Management
      </h2>

      <p className="text-[14px] md:text-[16px] text-gray-700 mt-4 leading-relaxed">
        The <span className="font-semibold">NMIMS Online MBA in Marketing
        Management</span> offers a specialised business degree to help you boost your
        career in the marketing field. The <span className="font-semibold">Online MBA curriculum
        at NMIMS</span> is the perfect blend of theoretical aspects and practical
        knowledge.
      </p>

      <p className="text-[14px] md:text-[16px] text-gray-700 mt-3 leading-relaxed">
        The coursework includes complete guidance on everything from business
        communication to international marketing. If you are a working professional
        or just an aspirant, looking for flexibility with quality education, the
        <span className="font-semibold"> Online MBA from NMIMS</span> could be the ideal option.
      </p>
    </div>

    {/* RIGHT IMAGE BOX */}
    <div className="relative w-full flex justify-center">
             <div className="absolute z-20 -top-6 right-20 w-20 h-20 rounded-full bg-[#dc2626] opacity-90"></div>
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* TOP-LEFT RED CIRCLE */}
   

        <img
          src="/images/marketing.png"
          alt="Marketing Management"
          className="w-full h-[320px] object-cover rounded-2xl"
        />

        {/* RED TAG */}
        <div className="absolute bottom-5 left-5 bg-red-600 text-white text-[12px] md:text-[13px] font-semibold px-4 py-2 rounded-full shadow-md">
          Marketing Management
        </div>
      </div>
    </div>

  </div>
</section>

    </>);
}

export default MarketingManagement;