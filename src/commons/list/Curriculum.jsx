"use client";

import { useState } from "react";
import Heading from "@/common/Heading";
import { ChevronDown } from "lucide-react";

const curriculumData = [
  {
    title: "Semester I",
    subjects: [
      "Micro & Macro Economics",
      "Marketing Management",
      "Business Communication",
      "Micro & Macro Economics",
      "Marketing Management",
      "Business Communication",
    ],
  },
  {
    title: "Semester II",
    subjects: ["Subject A", "Subject B", "Subject C"],
  },
  {
    title: "Semester III",
    subjects: ["Subject A", "Subject B", "Subject C"],
  },
  {
    title: "Semester IV",
    subjects: ["Subject A", "Subject B", "Subject C"],
  },
];

function Curriculum(curriculum) {
  console.log("curriculam",curriculum)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-2 sm:px-6 py-6 mx-auto">
      <div className="max-w-[1230px]">
        <Heading title={curriculum?.curriculum?.title} />
<div className="mt-6 flex flex-col gap-3">
  {curriculum?.curriculum?.semesters?.map((sem, index) => {

    const subjectList =
      sem?.subjects?.[0]?.description?.split("\n") || [];

    return (
      <div key={index} className="w-full">
        
        {/* HEADER */}
        <button
          onClick={() => toggleAccordion(index)}
          className="w-full flex items-center justify-between 
                     bg-[#F7F6F6] border border-[#BCBCBC80] rounded-[8px] px-4 py-3
                     text-left font-[600] text-[17px] font-poppins"
        >
          {sem?.title}

          <ChevronDown
            size={20}
            className={`text-red-500 transition-transform duration-300 ${
              openIndex === index ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* CONTENT */}
        {openIndex === index && (
          <div className="mt-3 bg-[#F7F6F6] border border-[#BCBCBC80] rounded-[12px] px-4 py-4">
            <div className="w-full bg-white rounded-[12px] px-6 py-6 text-[14px] leading-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {subjectList.map((sub, i) => (
                <p key={i} className="text-gray-700">{sub}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
}

export default Curriculum;
