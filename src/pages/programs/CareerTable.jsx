import React from 'react';

const CareerTable = () => {
  const universityData = [
    { position: "Marketing Manager", acc1: "₹7,00,000 to ₹15,00,000" ,acc2:"FMCG, E-commerce, Digital Agencies"},
     { position: "Business Analyst / Data Analyst", acc1: "₹6,00,000 to ₹12,00,000" ,acc2:"IT, Consulting, Finance"},
       { position: "Business Analyst / Data Analyst", acc1: "₹6,00,000 to ₹12,00,000" ,acc2:"IT, Consulting, Finance"},

         { position: "Business Analyst / Data Analyst", acc1: "₹6,00,000 to ₹12,00,000" ,acc2:"IT, Consulting, Finance"},


  ];

  return (
    <div className="max-w-[1230px] mx-auto  py-6 md:py-10 font-sans text-[#282529] font-poppins">
      {/* Heading & Intro */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-[28px] font-[600] mb-4">
        Career Opportunities
        </h2>
        <p className="text-[#4A4A4A] leading-relaxed text-[16px] font-[400]">
         After completing an Online MBA, professionals often step into high-growth roles such as:
        </p>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto  border border-gray-100 shadow-sm mb-10">
        <table className="w-full text-left border-collapse min-w-[700px] ">
          <thead>
            <tr className="bg-[#E31E24] text-white">
              <th className="py-4 px-6 font-[600] text-[16px]  border-r border-white leading-[18px]">Job Positions</th>
              <th className="py-4 px-6 font-[600] text-[16px]  border-r leading-[18px]">Accreditations</th>
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
                  <p 
              
                    className="text-[#282529]   font-[600] text-[14px] md:text-[16px]"
                  >
                    {uni.position}
                  </p>
                </td>
                <td className="py-4 px-1 md:px-6 text-[#4A4A4A] text-[14px]  border-r-[2px] border-[white] md:text-[16px]">
                  {uni.acc1}
                </td>
                  <td className="py-4 px-1 md:px-6 text-[#4A4A4A] text-[14px] md:text-[16px]">
                  {uni.acc2}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Content */}
   
    </div>
  );
};

export default CareerTable;