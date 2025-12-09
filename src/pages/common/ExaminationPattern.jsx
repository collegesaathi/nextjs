import Image from "next/image";
import Heading from "@/common/Heading";
export default function ExaminationPattern() {
  return (
    <>
      <div className="mt-[50px] px-6 py-6   bg-[#f7f6f6]">
        <section className="w-full px-6 py-6 mx-auto" id="examination-section">
          <div className=" max-w-[1230px]">
            <div className="space-y-6 px-4 pt-5  pb-5">
              <Heading title="NMIMS CDOE Examination Pattern" classes={""} />
              <p className="font-poppins text-[17px] md:text-[17px] leading-[22px] md:leading-[25px] text-[#282529]">
                NMIMS Online courses are conducted with two different parts, which are internal
                assessments and end term examinations.
              </p>
              {/* ---------------- Internal Assessment Box ---------------- */}
              <div className="flex flex-col md:flex-row  items-center justify-between gap-6">
                <div className="bg-[#F1EAFD] relative w-full md:w-[500px] min-h-[200px] p-4 flex items-center justify-start rounded-xl shadow-lg hover:shadow-2xl">
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
                <div className="w-full md:w-[500px]">
                  <h3 className="font-poppins font-bold text-[22px] md:text-[28px] text-[#282529] mb-4">
                    Internal Assessment
                  </h3>
                  <p className="font-poppins text-[15px] md:text-[17px] leading-[22px] md:leading-[25px] text-[#282529]">
                    The Internal assessments cover 30% of the total marks, including online tests,
                    case study submissions, assignments, discussions, and live projects.
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
      </div>

    </>
  );
}
