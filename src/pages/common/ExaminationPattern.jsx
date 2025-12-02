import Image from "next/image";
import Heading from "@/common/Heading";
export default function ExaminationPattern() {
    return (
        <>
            <section className="bg-[#f7f6f6] mt-[50px] px-6  " id="examination-section">
                <div className="w-[860px]">
                    <div className="space-y-6">

                        {/* <h2 className="font-poppins font-semibold text-[28px] leading-[42px] text-justify text-[#282529] animate-fade-in-up">
                            NMIMS CDOE Examination Pattern
                        </h2> */}

                        <Heading title="NMIMS CDOE Examination Pattern" />

                        <p className="font-poppins text-[16px] leading-[25px] text-[#282529] animate-fade-in-up animate-delay-200">
                            NMIMS Online courses are conducted with two different parts, which are internal
                            assessments and end term examinations.
                        </p>

                        {/* Internal Assessment */}
                        <div className="flex items-center justify-between lg:flex-row flex-col">
                            <div className="internal-box bg-[#F1EAFD] relative w-full lg:w-[455px] h-[211px] p-4 flex items-center mb-8 animate-slide-in-left animate-delay-400 rounded-xl shadow-lg hover:shadow-2xl">
                                <p className="font-poppins font-bold text-[96px] leading-[100%] text-[#282529] animate-count-up animate-delay-800">
                                    30%
                                </p>

                                <Image
                                    src="/images/job1.png"
                                    alt="internal"
                                    width={300}
                                    height={300}
                                    className="absolute right-[-40px] bottom-[-5px] animate-bounce-in animate-delay-1000"
                                />
                            </div>

                            <div className="w-[278px] flex flex-col items-start animate-slide-in-right animate-delay-600">
                                <h3 className="font-poppins font-bold text-[26px] text-[#282529] mb-5 w-full">
                                    Internal Assessment
                                </h3>

                                <p className="font-poppins text-[17px] leading-[25px] text-[#282529]">
                                    The Internal assessments cover 30% of the total marks, including online tests,
                                    case study submissions, assignments, as well as participation in discussions
                                    or forums and live projects.
                                </p>
                            </div>
                        </div>

                        {/* End Term */}
                        <div className="flex items-center mt-10 justify-between lg:flex-row flex-col-reverse">
                            <div className="w-[310px] animate-slide-in-left animate-delay-1200">
                                <h3 className="font-poppins font-bold text-[26px] text-[#282529] mb-8 pt-10 lg:pt-0">
                                    End-term exams
                                </h3>

                                <p className="font-poppins text-[17px] leading-[25px] text-[#282529]">
                                    The term-end examinations cover 70% of the total marks including the semester
                                    end examination which are conducted at the end of semesters to evaluate the
                                    learning and growth of the students.
                                </p>
                            </div>

                            <div className="assessment-box w-[453px] bg-[#FDEAEB] flex items-center h-[212px] px-4 justify-between relative animate-slide-in-right animate-delay-1000 rounded-xl shadow-lg hover:shadow-2xl">
                                <div className="w-[145px]" />

                                <Image
                                    src="/images/job2.png"
                                    alt="endterm"
                                    width={207}
                                    height={200}
                                    className="absolute left-[-10px] bottom-[-5px] animate-bounce-in animate-delay-1400"
                                />

                                <p className="font-poppins font-bold text-[96px] text-[#282529] animate-count-up animate-delay-1200">
                                    70%
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-start space-x-2.5 px-6 pt-10 animate-fade-in-up animate-delay-1600">
                        <Image src="/img/university/play.svg" alt="" width={25} height={25} className="animate-pulse-gentle" />
                        <p>
                            The examinations are secured with various proctors, supported with advanced digital tools
                            and mediums. The students are recommended to be fair during exams, as any suspicious
                            activity is considered as cheating and violation of the exams.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
