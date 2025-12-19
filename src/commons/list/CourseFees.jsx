import Heading from "@/common/Heading";

function CourseFess() {
    return (


        <>
            <section className="w-full px-2 md:px-6 py-6 mx-auto" id="fee-section">
                <div className="max-w-[1230px]">
                    <Heading title=" Updated Course Fees for 2025" />
                    {/* Table */}
                    <div className="overflow-x-auto rounded-[13px] border-2 border-[#f47c80]">
                        <table className="w-full  font-poppins tracking-wide">
                            <thead>
                                <tr className="bg-red-600 text-white h-[65px]">
                                    {["Course", "Per Semester", "Total Fees"].map((heading, index) => (
                                        <th
                                            key={index}
                                            className={`py-3 px-4 text-left font-[500]  text-[14px] md:text-[17px] leading-[25px] ${index !== 2 ? "border-r-2 border-[#f47c80]" : ""
                                                }`}
                                        >
                                            {heading}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {[
                                    ["Online Executive MBA", "N/A", "₹ 4,00,000/-"],
                                    ["Online MBA", "₹ 55,000/-", "₹ 1,96,000/-"],
                                    ["Online BCom", "₹ 18,000/-", "₹ 94,000/-"],
                                    ["Online BBA", "₹ 30,000/-", "₹ 1,45,000/-"],
                                ].map((row, index) => (
                                    <tr key={index} className="border-t hover:bg-[#f9fafb]">
                                        <td className="py-3 px-1 md:px-4 text-[12px] md:text-[14px] border-r-2 border-[#f47c80] underline">
                                            {row[0]}
                                        </td>
                                        <td className="py-3 px-1 md:px-4 border-r-2 text-[12px] md:text-[14px] border-[#f47c80]">
                                            {row[1]}
                                        </td>
                                        <td className="py-3 px-1 md:px-4 text-[12px] md:text-[14px]">{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>



            </section>
        </>
    );
}

export default CourseFess;