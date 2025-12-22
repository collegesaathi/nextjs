import React from "react";
import Heading from "@/common/Heading";

function Financial({financialAid}) {
  return (
    <>
      <div className="w-full px-2 md:px-6 py-6 ">
        <section className="" id="financial-aid-section">
          <div className="max-w-[1230px]">
            <div>
              <Heading title={financialAid?.title} />

                  <div
                        className="font-poppins text-[14px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4"
                        dangerouslySetInnerHTML={{ __html: financialAid?.description || "" }}
                    />
            </div>

            
{financialAid?.aid && (
   <div className="bg-white border-[2px] border-[#ec1e24] overflow-hidden mt-[30px] rounded-lg">

              {/* Header */}
              <div className="bg-[#ec1e24] text-white text-center py-3 flex items-center justify-center">
                <h3 className="font-poppins font-semibold text-[16px] md:text-[17px]">
                  NMIMS Online University Loan Facilities
                </h3>
              </div>

              {/* --- RESPONSIVE SCROLL WRAPPER --- */}

          
              <div className="overflow-x-auto">
  <table className="min-w-[700px] w-full border-[2px] border-[#ec1e24] text-center">
    <thead>
      <tr>
        {["Total Fees", "Loan Amount", "Tenure", "Interest", "Monthly EMI"].map((label, i) => (
          <th
            key={i}
            className=" py-4 border-b border-[#f47c80] text-[14px] lg:text-[16px] font-poppins font-semibold"
          >
            <span className="bg-[#ec1e24] text-white px-4 py-1 rounded-lg">
              {label}
            </span>
          </th>
        ))}
      </tr>
    </thead>

    <tbody>
      {financialAid?.aid?.map((item, index) => (
        <React.Fragment key={index}>
          {/* Course Title Row */}
          <tr className="bg-[#f9f1f1]">
            <td
              colSpan={5}
              className="py-3 font-poppins font-semibold text-[14px] md:text-[17px] border-b border-[#ec1e24]"
            >
              {item.courseName}
            </td>
          </tr>

          {/* Data Row */}
          <tr className="text-[14px] md:text-[16px] text-[#282529]">
            {[
              `₹${item.totalFees}`,
              `₹${item.loanAmount ?? 0}`,
              `${item.tenure} Months`,
              `${item.interest}%`,
              `₹${item.emi}`
            ].map((value, i) => (
              <td
                key={i}
                className="px-4 py-3 border-r border-b border-[#ec1e24] last:border-r-0"
              >
                {value}
              </td>
            ))}
          </tr>
        </React.Fragment>
      ))}
    </tbody>
  </table>
</div>


            </div>
)}
           
          </div>
        </section>
      </div>

    </>
  );
}

export default Financial;
