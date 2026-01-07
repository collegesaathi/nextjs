import React from "react";
import Heading from "@/common/Heading";
import { sanitizeHtml } from "@/common/sanitizeHtml";
import scholarship from "@/JSon/unifinca"
import { useRouter } from "next/router";
function Financial({ financialAid, name }) {
  const router = useRouter();
  const universitySlug = router.query.universitySlug;
  const scholarshipData =  scholarship?.[universitySlug] || [];
  console.log("University Slug:", universitySlug);
  console.log("Scholarship Data:", scholarshipData);
  console.log(name)
  return (
    <>
      {financialAid?.title && (
        <div className="w-full px-2 md:px-6 py-6 ">
          <section className="" id="financial-aid-section">
            <div className="max-w-[1230px]">
              <div>
                <Heading title={financialAid?.title} />
                <div
                  className="font-poppins text-[14px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4 custom-description"
                  dangerouslySetInnerHTML={{ __html: sanitizeHtml(financialAid?.description || "") || "" }}
                />
              </div>


              {financialAid?.aid?.length > 1 && (
                <div className="bg-white border-[2px] border-[#ec1e24] overflow-hidden mt-[30px] rounded-lg">

                  {/* Header */}
                  <div className="bg-[#ec1e24] text-white text-center py-3 flex items-center justify-center">
                    <h3 className="font-poppins font-semibold text-[16px] md:text-[17px]">
                      {name} Loan Facilities
                    </h3>
                  </div>


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

              {scholarshipData?.length > 1 && (
                <div className="overflow-hidden mt-[30px]">
                  <table className="w-full border-collapse font-poppins">
                    {/* Header */}
                    <thead>
                      <tr>
                        <th className="bg-[#ec1e24] text-white p-4 font-semibold text-[14px] md:text-[17px] border-r-2 border-[#f47c80] h-[65px] text-left w-4/12">
                          Category
                        </th>
                        <th className="bg-[#ec1e24] text-white p-4 font-semibold text-[14px] md:text-[17px] border-r-2 border-[#f47c80] h-[65px] text-left w-4/12">
                          Scholarship Credit
                        </th>
                        <th className="bg-[#ec1e24] text-white p-4 font-semibold text-[14px] md:text-[17px] h-[65px] text-left w-4/12">
                          Eligibility / Documents
                        </th>
                      </tr>
                    </thead>

                    {/* Rows */}
                    <tbody>
                      {scholarshipData?.map((item, index) => (
                        <tr key={index} className="border-b-2 border-[#f47c80]">
                          <td className="bg-white border-r-2 border-l-2 border-[#f47c80] p-2 md:p-4 text-[11px] md:text-[17px] text-[#282529]">
                            {item?.category}
                          </td>
                          <td className="bg-white border-r-2 border-[#f47c80] p-2 md:p-4">
                            {item?.scholarship_credit}
                          </td>
                          <td className="bg-white border-r-2 border-[#f47c80] p-2 md:p-4">
                            {item?.eligibility_documents}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

            </div>
          </section>
        </div>
      )}


    </>
  );
}

export default Financial;
