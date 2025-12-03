import Heading from "@/common/Heading";

function CourseFess() {
    return (
    
    
    <>

    <div className="mt-[50px] px-6" id="fee-section">
       {/* <h2 
  className="font-semibold text-[28px] leading-[42px] text-[#282529] mt-8 mb-4"
  id="fee-section"
>
  Updated Course Fees for 2025
</h2> */}

<Heading title=" Updated Course Fees for 2025" />

        {/* Table */}
        <div className="overflow-x-auto rounded-[13px] border-2 border-[#f47c80]">
            <table className="w-full text-sm font-poppins tracking-wide">
                <thead>
                    <tr className="bg-red-600 text-white h-[65px]">
                        {["Course", "Per Semester", "Total Fees"].map((heading, index) => (
                            <th
                                key={index}
                                className={`py-3 px-4 text-left font-semibold text-[17px] leading-[25px] ${index !== 2 ? "border-r-2 border-[#f47c80]" : ""
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
                            <td className="py-3 px-4 border-r-2 border-[#f47c80] underline">
                                {row[0]}
                            </td>
                            <td className="py-3 px-4 border-r-2 border-[#f47c80]">
                                {row[1]}
                            </td>
                            <td className="py-3 px-4">{row[2]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        </div>
    </>
    );
}

export default CourseFess;