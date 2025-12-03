import React from "react";
import Heading from "@/common/Heading";

const facts = [
  {
    title: "Years of Excellence",
    description:
      "NMIMS University was founded over 40 years ago and has established a great place in the education industry with its quality education. It has earned all the required accreditation and approvals and maintains its standards.",
  },
  {
    title: "Programs for Professionals",
    description:
      "The NMIMS CDOE courses are flexible and advanced, designed for professionals to help them hone skills and competencies for their professional growth.",
  },
  {
    title: "Salary Increase",
    description:
      "NMIMS Alumni have reported an average increase in salaries of 45%. This shows the skills earned and the value of NMIMS programs in the job market.",
  },
  {
    title: "Distinguished Alumni",
    description:
      "The alumni network of NMIMS CDOE consists of over 82,000 professionals, leaders and highly successful individuals across multiple fields of industry.",
  },
  {
    title: "Students Empowered",
    description:
      "The University has empowered over 185,000 students academically and professionally, making NMIMS a valuable university.",
  },
];

function Facts() {
  return (
    <>
      {/* Desktop Version */}
      <section className="w-full px-4 md:px-6 mt-[50px]" id="facts-section">
  <div className="bg-[#fcf0ee] py-10 md:py-16 flex justify-center">
    <div className="relative z-10 w-full max-w-[860px]">
{/* 
      <h2 className="font-poppins font-[600] text-[22px] md:text-[28px] leading-[32px] md:leading-[42px] text-[#282529] my-6 md:my-8">
        Facts related to <br /> NMIMS CDOE
      </h2> */}

      <Heading title=" Facts related to  NMIMS CDOE " />

      <div className="rounded-[20px] bg-white shadow-[0px_1px_10px_rgba(0,0,0,0.09)] p-4 md:p-8">

        <div className="flex">

          {/* Timeline + Content Together Row by Row */}
          <div className="flex-1">

          {facts.map((item, index) => (
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
        {item.title}
      </h3>

      {/* Add Space Between Title & Description */}
      <p className="font-poppins text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] text-[#282529] mt-2">
        {item.description}
      </p>
    </div>

  </div>
))}


          </div>

        </div>

      </div>

    </div>
  </div>
</section>



    </>
  );
}

export default Facts;
