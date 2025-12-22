import Heading from "@/common/Heading";
import Link from "next/link";

function CourseFees({ courseData }) {
    return (
        <>
            <section className="w-full px-2 md:px-6 py-6 mx-auto" id="fee-section">
                <div className="max-w-[1230px]">
                    <Heading title=" Updated Course Fees for 2025" />
                    <div className="overflow-x-auto rounded-[13px] border-2 border-[#f47c80]">
                        <table className="w-full  font-poppins tracking-wide">
                            <thead>
                                <tr className="bg-red-600 text-white h-[65px]">
                                    <th
                                        className={`py-3 px-4 text-left font-[500]  text-[14px] md:text-[17px] leading-[25px] 
                                              `}
                                    >
                                        Course
                                    </th>
                                    <th
                                        className={`py-3 px-4 text-left font-[500]  text-[14px] md:text-[17px] leading-[25px] 
                                              `}
                                    >
                                        Per Semester
                                    </th>
                                    <th
                                        className={`py-3 px-4 text-left font-[500]  text-[14px] md:text-[17px] leading-[25px] 
                                              `}
                                    >
                                        Total Fees
                                    </th>

                                    <th
                                        className={`py-3 px-4 text-left font-[500]  text-[14px] md:text-[17px] leading-[25px] 
                                              `}
                                    >
                                        One Time Fees
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    courseData && courseData?.map((row, index) => (
                                        <tr key={index} className="border-t hover:bg-[#f9fafb]">
                                            <td className="py-3 px-1 md:px-4 text-[12px] md:text-[14px] border-r-2 border-[#f47c80] underline">
                                         <Link href={`/course/${row?.slug}`}>
                                                {row?.name}
                                         </Link>
                                            </td>
                                            <td className="py-3 px-1 md:px-4 border-r-2 text-[12px] md:text-[14px] border-[#f47c80]">
                                                {row?.fees?.semester_wise_fees}
                                            </td>

                                            <td className="py-3 px-1 md:px-4 border-r-2 text-[12px] md:text-[14px] border-[#f47c80]">    {row?.fees?.annual_fees}</td>
                                            <td className="py-3 px-1 md:px-4 border-r-2 text-[12px] md:text-[14px] border-[#f47c80]">    {row?.fees?.tuition_fees}</td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>



            </section>
        </>
    );
}

export default CourseFees;