import Image from "next/image";
import Heading from "@/common/Heading";
export default function ExaminationPattern({ examPatterns }) {
  console.log("examPatterns", examPatterns)
  return (
    <>
      <div className="mt-[50px] px-6 py-6   bg-[#f7f6f6]">
        <section className="w-full py-6 mx-auto" id="examination-section">
          <div className=" max-w-[1230px]">
            <div className="space-y-6  pt-5  pb-5">
              <Heading title={examPatterns?.title} classes={""} />
              <div
                className="font-poppins text-[15px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4 [&_*]:!bg-transparent"
                dangerouslySetInnerHTML={{ __html: examPatterns?.description || "" }}
              />
              {examPatterns?.patterns?.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between gap-6 
      ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* IMAGE + PERCENTAGE BOX */}
                  <div className="bg-[#F1EAFD] relative w-full md:w-[500px] min-h-[200px] p-4 flex items-center justify-start rounded-xl shadow-lg hover:shadow-2xl">
                    <p className="font-poppins font-bold text-[60px] sm:text-[80px] md:text-[96px] leading-[100%] text-[#282529]">
                      {item?.percentage}%
                    </p>

                    <img
                      src={item?.image}
                      alt={item?.patternName}
                      width={60}
                      height={60}
                      className="absolute right-0 bottom-[-5px] w-[180px] sm:w-[30px] md:w-[170px]"
                    />
                  </div>

                  {/* TEXT SECTION */}
                  <div className="w-full md:w-[500px]">
                    <h3 className="font-poppins font-bold text-[22px] md:text-[28px] text-[#282529] mb-4">
                      {item?.patternName}
                    </h3>

                    <div
                      className="font-poppins text-[15px] md:text-[17px] leading-[22px] md:leading-[25px] text-[#282529]  [&_*]:!bg-transparent"
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    />
                  </div>
                </div>
              ))}

            </div>
            {/* ---------------- Footer Note ---------------- */}
            <div className="flex items-start gap-3 px-2 md:px-4 pt-10">
              <div
                className="font-poppins text-[15px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4 data [&_*]:!bg-transparent "
                dangerouslySetInnerHTML={{ __html: examPatterns?.bottompatterndesc || "" }}
              />
            </div>
          </div>
        </section>
      </div>

    </>
  );
}
