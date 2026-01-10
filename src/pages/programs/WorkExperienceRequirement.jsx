import React from 'react';
import { Info } from 'lucide-react';
import { BiSolidMessageRoundedError } from "react-icons/bi";

const WorkExperienceRequirement = () => {
  const entranceExams = [
    {
      abbr: "CAT",
      name: "(Common Admission Test)",
      bgColor: "bg-[#E0E1F8]", // Light Lavender
      textColor: "text-[#5B5FC7]"
    },
    {
      abbr: "GMAT",
      name: "(Graduate Management Admission Test)",
      bgColor: "bg-[#FCE1E3]", // Light Pink
      textColor: "text-[#D3404F]"
    },
    {
      abbr: "GRE",
      name: "(Graduate Record Examination)",
      bgColor: "bg-[#FDF1D3]", // Light Peach
      textColor: "text-[#B8860B]"
    }
  ];

  return (
    <div className="max-w-[1230px] mx-auto py-6 md:py-10 font-poppins text-[#282529]">
      
      {/* First Section */}
      <div className="mb-8">
        <h2 className="text-[20px] md:text-[28px] font-[600]  leading-[28px] mb-4">
          Work Experience Requirement for Online MBA
        </h2>
        <p className="text-[#282529] leading-[28px] text-[16px] md:text-[16px]">
          Having work experience can be an additional benefit for you, especially for specialized programs like Executive Post Graduate Programmes (EPGP), Executive MBAs (EMBA), and Working Managers' Programs (WMP). These courses are designed for working professionals, helping the students in implementing their learning into real world business situations.
        </p>
      </div>

      {/* Second Section */}
      <div className="mb-8">
        <h2 className="text-[20px] md:text-[28px] font-[600]  leading-[28px] mb-4">
          Work Experience Requirement for Online MBA
        </h2>
        <p className="text-[#282529] leading-[28px] text-[16px] md:text-[16px]">
          The admission process often includes competitive entrance exams that evaluate aptitude and managerial potential. While the specific exams can vary between institutions, they typically include:
        </p>

        {/* Exams Container */}
        <div className="border border-[#C5C5C5] my-6 rounded-[21px] p-2 md:p-6  flex flex-col md:flex-row gap-2 md:gap-6 items-stretch">
          {entranceExams.map((exam, index) => (
            <div 
              key={index} 
              className={`flex-1 ${exam.bgColor} rounded-[18px] p-2 flex flex-col items-center justify-center text-center md:min-h-[90px] shadow-sm`}
            >
              <h4 className={`font-[600] text-[16px] ${exam.textColor} mb-1`}>
                {exam.abbr}
              </h4>
              <p className={`text-[16px] font-[600] ${exam.textColor} leading-tight`}>
                {exam.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Info Pill */}
      <div className="md:mt-12 flex justify-center">
        <div className="bg-[#F7F6F6] border border-[#CFCFCF] rounded-[14px] md:rounded-[48px] md:rounded-full py-3 px-2 md:px-10 max-w-[900px] flex items-start  gap-2 shadow-sm">
          <div className=" mt-1">
            {/* <Info size={16} className="text-white fill-current" /> */}
            <BiSolidMessageRoundedError size={24} color="gray"  />
          </div>
          <p className="text-[#282529]  md:text-[14px] leading-[20px]">
            Some IIMs even have their own tests, like the IIM Ahmedabad Admission Test (IAT), to assess the qualifications of the candidates. After these tests, interviews, writing assessments, or group discussions at certain institutes.
          </p>
        </div>
      </div>

    </div>
  );
};

export default WorkExperienceRequirement;