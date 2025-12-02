import React from "react";
import Heading from "@/common/Heading";

function Financial() {
    return (
        <>

        <div className="px-6 mt-[50px]">
            <div className="">
                {/* <h2 className="font-poppins font-semibold text-[28px] leading-[42px] text-[#282529] mb-4" id="financial-aid-section">
                    NMIMS Online MBA Financial Aid
                </h2> */}

                <Heading title="NMIMS Online MBA Financial Aid" />
                <p className="font-poppins text-[16px] leading-[25px] text-[#282529]">
                    The University proudly extends special incentives specifically
                    designed for the armed forces and Defense Personnel, as well as their
                    immediate family members. These incentives include a generous 20%
                    concession on the overall program fee, making higher education more
                    accessible and affordable for those who serve and protect our
                    nation.
                </p>
            </div>

            <div className="bg-white border-[2px] border-[#ec1e24] overflow-hidden mt-[30px]">

                {/* Header */}
                <div className="bg-[#ec1e24] text-white text-center py-3 h-[65px] flex items-center justify-center">
                    <h3 className="font-poppins font-semibold text-[17px]">
                        NMIMS Online University Loan Facilities
                    </h3>
                </div>

                <table className="min-w-full border-[2px] border-[#ec1e24] text-center">
                    <thead className="bg-white text-white">
                        <tr>
                            {["Total Fees", "Loan Amount", "Tenure", "Interest", "Monthly EMI"].map((label, i) => (
                                <th
                                    key={i}
                                    className="px-4 py-4 border-b  border-[#f47c80] last:border-r-0 text-[17px] font-poppins font-semibold"
                                >
                                    <span className="bg-[#ec1e24] px-4  rounded-lg">{label}</span>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {[
                            { name: "Online MBA", fees: "₹1,00,000", loan: "₹1,14,000", tenure: "20 Months", interest: "0%", emi: "₹5,700" },
                            { name: "Online MCA", fees: "₹1,00,000", loan: "₹1,14,000", tenure: "20 Months", interest: "0%", emi: "₹5,700" },
                            { name: "Online BBA", fees: "₹1,05,000", loan: "₹1,26,000", tenure: "20 Months", interest: "0%", emi: "₹6,300" },
                            { name: "Online BCA", fees: "₹1,05,000", loan: "₹1,26,000", tenure: "20 Months", interest: "0%", emi: "₹6,300" },
                        ].map((course, index) => (
                            <React.Fragment key={index}>
                                {/* Course Title Row */}
                                <tr className="bg-[#f9f1f1]">
                                    <td colSpan={5} className="py-3 font-poppins font-semibold text-[17px] border-b border-[#ec1e24]">
                                        {course.name}
                                    </td>
                                </tr>

                                {/* Course Data Row */}
                                <tr className="text-[16px] text-[#282529]">
                                    {[course.fees, course.loan, course.tenure, course.interest, course.emi].map((value, i) => (
                                        <td key={i} className="px-4 py-3 border-r border-b border-[#ec1e24] last:border-r-0">
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
        </>
    );
}

export default Financial;
