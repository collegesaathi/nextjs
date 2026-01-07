import Heading from "@/common/Heading";
import { sanitizeHtml } from "@/common/sanitizeHtml";

function UpdatedFee({ fees }) {
  console.log("fees", fees) 
  const feeItems = [
    fees?.tuition_fees && {
      label: "Total Tuition Fee",
      value: fees.tuition_fees,
      big: true,
    },
    fees?.annual_fees && {
      label: "Annual Fee",
      value: fees.annual_fees,
    },
    fees?.semester_wise_fees && {
      label: "Semester-Wise Fee",
      value: fees.semester_wise_fees,
    },
  ].filter(Boolean);

  const count = feeItems.length;

  if (count === 0) return null;

  return (
    <section className="w-full px-4 sm:px-6 py-6" id="about-section">
      <div className="max-w-[1230px]">
        <Heading title={fees?.fees_title} />

         <div
                        className="ont-poppins text-[14px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4 break-words whitespace-normal"
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(fees?.fees_desc || "") || "" }}
                      />

        <div className="bg-[#FEE4E4] p-5 sm:p-10 font-poppins rounded-[18px]">

          {/* 1 VALUE */}
          {count === 1 && (
            <div className="bg-white w-full px-10 py-10 rounded-[12px]">
              <p className="text-[14px]">{feeItems[0].label}</p>
              <p className="text-[48px] font-[600]">{feeItems[0].value}</p>
            </div>
          )}

          {/* 2 VALUES */}
          {count === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {feeItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white px-10 py-10 rounded-[12px]"
                >
                  <p className="text-[14px]">{item.label}</p>
                  <p className="text-[36px] font-[600]">{item.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* 3 VALUES (CURRENT DESIGN) */}
          {count === 3 && (
            <div className="flex flex-col lg:flex-row gap-4">

              {/* LEFT BIG */}
              <div className="bg-white w-full lg:w-2/3 px-10 py-10 rounded-[12px]">
                <p className="text-[14px]">{feeItems[0].label}</p>
                <p className="text-[48px] font-[600]">{feeItems[0].value}</p>
              </div>

              {/* RIGHT SMALL */}
              <div className="w-full lg:w-1/3 flex flex-col gap-4">
                {feeItems.slice(1).map((item, index) => (
                  <div
                    key={index}
                    className="bg-white px-8 py-6 rounded-[12px]"
                  >
                    <p className="text-[12px]">{item.label}</p>
                    <p className="text-[26px] font-[600]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default UpdatedFee;
