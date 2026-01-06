import Image from "next/image";
import Heading from "@/common/Heading";

export default function ExaminationPattern({ examPatterns = [] }) {

  const examPattern = examPatterns?.patterns && (examPatterns?.patterns) 

  return (
    <>
      {examPatterns?.title && (
        <div className=" px-2 md:px-6 py-6  bg-[#f7f6f6]">
          <section className="w-full py-6 mx-auto" id="examination-section">
            <div className=" max-w-[1230px]">
              <div className="space-y-6  pt-5  pb-5">
                <Heading title={examPatterns?.title} classes={""} />
                <div
                  className="custom-description font-poppins text-[14px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4 [&_*]:!bg-transparent"
                  dangerouslySetInnerHTML={{ __html: examPatterns?.description || "" }}
                />
                {examPattern?.length > 1 && (
                  <>
                    {examPattern?.map((item, index) => (
                      <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center justify-between gap-10  text-start
      ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                      >
                        {/* IMAGE + PERCENTAGE BOX */}
                        <div className={`relative w-full max-w-[450px] min-h-[200px] p-4 flex items-center  rounded-xl shadow-lg hover:shadow-2xl ${index % 2 !== 0 ? "bg-[#FCF0EE] justify-end" : "bg-[#F1EAFD] justify-start"}`}>
                          <p className="font-poppins font-bold text-[60px] sm:text-[80px] md:text-[96px] leading-[100%] text-[#282529] text-right">
                            {item?.percentage}
                          </p>
                          {item?.percentage === "30%" ? (
                            <img
                              src={"/images/new/Group2.webp"}
                              alt={item?.patternName}
                              width={60}
                              height={60}
                              className={`absolute right-0 bottom-0 w-[180px] sm:w-[30px] md:w-[163px] h-[153px] ${index % 2 !== 0 ? "left-0" : "right-0"}`}
                            />
                          ) : (
                            <img
                              src={"/images/new/Group3.webp"}
                              alt={item?.patternName}
                              width={60}
                              height={60}
                              className={`absolute right-0 bottom-0 w-[180px] sm:w-[30px] md:w-[163px] h-[153px] ${index % 2 !== 0 ? "left-0" : "right-0"}`}
                            />
                          )}

                        </div>
                        {/* TEXT SECTION */}
                        <div className="w-full md:max-w-[600px] ">
                          <h3 className="font-poppins font-bold text-[22px] md:text-[28px] text-[#282529] mb-4">
                            {item?.patternName}
                          </h3>
                          <div
                            className="font-poppins text-[14px] custom-description md:text-[17px] leading-[22px] md:leading-[25px] text-[#282529] line-clamp-4  [&_*]:!bg-transparent"
                            dangerouslySetInnerHTML={{ __html: item?.description }}
                          />
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              {/* ---------------- Footer Note ---------------- */}
              {/* {examPatterns?.bottompatterndesc  &&(   <div className="flex items-start gap-3 px-2 md:px-4 pt-10">
              <div
                className="font-poppins text-[14px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4 data [&_*]:!bg-transparent examination"
                dangerouslySetInnerHTML={{ __html: examPatterns?.bottompatterndesc || "" }}
              />
            </div>)} */}

            </div>
          </section>
        </div>
      )}

    </>
  );
}
