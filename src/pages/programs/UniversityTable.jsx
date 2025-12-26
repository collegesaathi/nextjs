import React from 'react';

const UniversityTable = () => {
  const universityData = [
    { name: "Manipal University Online", acc: "AICTE, NAAC, NBA, QS, UGC" },
    { name: "NMIMS CDOE", acc: "DEB, NAAC, NIRF, UGC" },
    { name: "Chandigarh University", acc: "AICTE, NAAC, QS, UGC, WES" },
    { name: "JAIN Online University", acc: "AICTE, AIU, NAAC, NIRF, QS, UGC, WES" },
    { name: "Dr. D.Y. Patil Vidyapeeth University Pune", acc: "AICTE, AIU, ISO, NAAC, QS, UGC, WES" },
    { name: "DY Patil Navi Mumbai", acc: "AICTE, ISO, NAAC, UGC" },
    { name: "Sharda University", acc: "AICTE, ARIIA, ISO, NAAC, NBA, NIRF, QS, UGC" },
    { name: "Parul University", acc: "AICTE, ARIIA, MARC, NAAC, NBA, QS, UGC, WASC" },
    { name: "IMT CDL Ghaziabad", acc: "UGC, NAAC, WES" },
  ];

  return (
    <div className="max-w-[1230px] mx-auto  py-12 font-sans text-[#282529] font-poppins">
      {/* Heading & Intro */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-[28px] font-[600] mb-4">
          Top Indian Institutes Offering Online MBAs
        </h2>
        <p className="text-[#4A4A4A] leading-relaxed text-[16px] font-[400]">
          To pursue an Online MBA, it is very important for you to choose the accredited and approved university to gain every advantage of the Online MBA. Some of the top online universities offering Online MBA is mentioned as follows:
        </p>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden rounded-xl border border-gray-100 shadow-sm mb-10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#E31E24] text-white">
              <th className="py-4 px-6 font-[600] text-[16px]  border-r border-white leading-[18px]">Name of the University</th>
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
                    className="text-[#E31E24] underline underline-offset-4 font-medium hover:text-black transition-colors text-[14px] md:text-[16px]"
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
      <div className="space-y-6 text-[#4A4A4A] leading-relaxed text-[15px]">
        <p>
          These respected institutions offer a variety of online and executive MBA programs specifically designed for busy professionals to sharpen their managerial skills and boost their careers without putting their jobs on hold. Each program comes with its own set of eligibility requirements, fee structures, and admission processes, to attract candidates from various backgrounds and experiences.
        </p>
        <p>
          By providing flexibility, academic rigor, and the esteemed reputation of these universities, the online MBA programs provide a chance for individuals to enhance their knowledge and expertise in management while effectively managing their work commitments.
        </p>
      </div>
    </div>
  );
};

export default UniversityTable;