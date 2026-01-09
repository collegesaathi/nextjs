import React from 'react';
import { BiSolidMessageRoundedError } from "react-icons/bi";

const SalaryTrends = () => {
  const universityData = [
    { name: "Entry-level HR Roles", acc: "FMCG, E-commerce, Digital Agencies" },
    { name: "Mid-level Professionals", acc: "IT, Consulting, Finance" },
    { name: "IT, Consulting, Finance", acc: "Banking, FinTech, Wealth Management" },

  ];

  return (
    <div className="max-w-[1230px] mx-auto  py-12 font-sans text-[#282529] font-poppins">
      {/* Heading & Intro */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-[28px] font-[600] mb-4">
  Salary Trends: An Online MBA in HR
        </h2>
        <p className="text-[#4A4A4A] leading-relaxed text-[16px] font-[400]">
   Remuneration after acquiring an online MBA in HRM is based on work experience, work function, geographical location, as well as the size of the organization. The average salary per annum:leting an Online MBA, professionals often step into high-growth roles such as:
        </p>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden  border border-gray-100 shadow-sm mb-10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#E31E24] text-white">
              <th className="py-4 px-6 font-[600] text-[16px]  border-r border-white leading-[18px]">Job Positions</th>
              <th className="py-4 px-6 font-[600] text-[16px] leading-[18px]">Accreditations</th>
            </tr>
          </thead>
          <tbody>
            {universityData.map((uni, index) => (
              <tr 
                key={index} 
                className=" bg-[#FFF5F5] border-b-[2px] border-white last:border-0"
              >
                <td className="py-4 px-1 md:px-6 border-r-[2px] border-[white]">
                  <a 
                    href="#" 
                    className="text-[#282529]  font-medium text-[14px] md:text-[16px]"
                  >
                    {uni.name}
                  </a>
                </td>
                <td className="py-4 px-1 md:px-6 text-[#4A4A4A] text-[14px] md:text-[16px]">
                  {uni.acc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Content */}
      <div className="bg-[#F7F6F6] p-2 px-4 rounded-2xl flex gap-3 items-center  w-fit">
             <div className="flex-shrink-0">
                <BiSolidMessageRoundedError size={20} className="text-gray-500" />
             </div>
             <p className="text-[14px] italic text-[#282529] font-[400]">
               Check the admission process and documents required, as it may vary from university to university.
             </p>
           </div>
    </div>
  );
};

export default SalaryTrends;