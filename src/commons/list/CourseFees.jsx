import Heading from "@/common/Heading";
import Link from "next/link";

function CourseFees({ courseData, slug, feesDesc }) {
    const showPerSemester = courseData?.some(
        (row) => row?.fees?.semester_wise_fees
    );

    const showTotalFees = courseData?.some(
        (row) => row?.fees?.annual_fees
    );

    const showOneTimeFees = courseData?.some(
        (row) => row?.fees?.tuition_fees
    );

    return (
        <>
            <section className="w-full px-2 md:px-6 py-6 mx-auto" id="fee-section">
                <div className="max-w-[1230px]">
                    <Heading title=" Updated Course Fees for 2025" />
                    <p
                        className="custom-description mt-2 mb-2"
                    >
                        {feesDesc}
                    </p>

                    <div className="overflow-x-auto rounded-[13px] border-2 border-[#f47c80]">
                        <table className="w-full  font-poppins tracking-wide">
                            <thead>
                                <tr className="bg-red-600 text-white h-[65px]">
                                    <th className="py-3 px-4 text-left min-w-[150px]">
                                        Course
                                    </th>

                                    {showPerSemester && (
                                        <th className="py-3 px-4 text-left min-w-[150px]">
                                            Per Semester
                                        </th>
                                    )}

                                    {showTotalFees && (
                                        <th className="py-3 px-4 text-left min-w-[150px]">
                                            Annual Fees
                                        </th>
                                    )}

                                    {showOneTimeFees && (
                                        <th className="py-3 px-4 text-left min-w-[150px]">
                                            Total Tuition Fees
                                        </th>
                                    )}
                                </tr>
                            </thead>


                            <tbody>
                                {courseData?.map((row, index) => (
                                    <tr key={index} className="border-t hover:bg-[#f9fafb]">

                                        <td className="py-3 px-4 border-r underline">
                                            <Link href={`/university/${slug}/${row?.slug}`}>
                                                {row?.name}
                                            </Link>
                                        </td>

                                        {showPerSemester && (
                                            <td className="py-3 px-4 border-r">
                                                {row?.fees?.semester_wise_fees || "-"}
                                            </td>
                                        )}

                                        {showTotalFees && (
                                            <td className="py-3 px-4 border-r">
                                                {row?.fees?.annual_fees || "-"}
                                            </td>
                                        )}

                                        {showOneTimeFees && (
                                            <td className="py-3 px-4 border-r">
                                                {row?.fees?.tuition_fees || "-"}
                                            </td>
                                        )}
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

export default CourseFees;