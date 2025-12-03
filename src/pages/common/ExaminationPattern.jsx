import Image from "next/image";
import Heading from "@/common/Heading";
export default function ExaminationPattern() {
    return (
        <>
         <section className="bg-[#f7f6f6] mt-[50px] px-4 md:px-6" id="examination-section">
  <div className="w-full max-w-[860px] mx-auto">
    <div className="space-y-6">

      <Heading title="NMIMS CDOE Examination Pattern" />

      <p className="font-poppins text-[15px] md:text-[16px] leading-[22px] md:leading-[25px] text-[#282529]">
        NMIMS Online courses are conducted with two different parts, which are internal
        assessments and end term examinations.
      </p>

      {/* ---------------- Internal Assessment Box ---------------- */}
      <div className="flex lg:flex-row flex-col items-center justify-between gap-6">

        {/* Left Box */}
        <div className="bg-[#F1EAFD] relative w-full lg:w-[460px] min-h-[200px] p-4 flex items-center justify-start rounded-xl shadow-lg hover:shadow-2xl">
          <p className="font-poppins font-bold text-[60px] sm:text-[80px] md:text-[96px] leading-[100%] text-[#282529]">
            30%
          </p>

          <Image
            src="/images/job1.png"
            alt="internal"
            width={260}
            height={260}
            className="absolute right-[-20px] sm:right-[-30px] bottom-[-5px] w-[180px] sm:w-[230px] md:w-[270px]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[300px]">
          <h3 className="font-poppins font-bold text-[22px] md:text-[26px] text-[#282529] mb-4">
            Internal Assessment
          </h3>

          <p className="font-poppins text-[15px] md:text-[17px] leading-[22px] md:leading-[25px] text-[#282529]">
            The Internal assessments cover 30% of the total marks, including online tests,
            case study submissions, assignments, discussions, and live projects.
          </p>
        </div>
      </div>

      {/* ---------------- End Term ---------------- */}
      <div className="flex lg:flex-row flex-col-reverse items-center justify-between gap-6 mt-10">

        {/* Left Content */}
        <div className="w-full lg:w-[310px]">
          <h3 className="font-poppins font-bold text-[22px] md:text-[26px] text-[#282529] mb-4">
            End-term Exams
          </h3>

          <p className="font-poppins text-[15px] md:text-[17px] leading-[22px] md:leading-[25px] text-[#282529]">
            The term-end examinations cover 70% of the total marks and are conducted at the 
            end of semesters to evaluate learning and growth.
          </p>
        </div>

        {/* Right Box */}
        <div className="bg-[#FDEAEB] relative w-full lg:w-[460px] min-h-[200px] px-4 flex items-center justify-between rounded-xl shadow-lg hover:shadow-2xl">
          <Image
            src="/images/job2.png"
            alt="endterm"
            width={200}
            height={200}
            className="absolute left-[-10px] bottom-[-5px] w-[150px] sm:w-[180px] md:w-[210px]"
          />

          <p className="font-poppins font-bold text-[60px] sm:text-[80px] md:text-[96px] text-[#282529] ml-auto">
            70%
          </p>
        </div>

      </div>

    </div>

    {/* ---------------- Footer Note ---------------- */}
    <div className="flex items-start gap-3 px-2 md:px-4 pt-10">
      <Image src="/images/university/play.svg" alt="" width={25} height={25} className="mt-1" />
      <p className="font-poppins text-[14px] md:text-[15px] leading-[20px] md:leading-[22px]">
        The examinations are secured with proctors supported by advanced digital tools. 
        Students must stay fair as any suspicious activity is treated as exam violation.
      </p>
    </div>
  </div>
</section>

        </>
    );
}
