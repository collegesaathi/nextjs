import Heading from "@/common/Heading";

function UpdatedFee({fees}) {
  console.log("fees",fees)
  return (
    <>
      <section className="w-full px-4 sm:px-6 py-6 " id="about-section">
        <div className="max-w-[1230px] ">
          <Heading title="NMIMS Online MBA updated fee 2025" />

          <div className="bg-[#FEE4E4] p-5 sm:p-10 gap-4 font-poppins rounded-[18px] 
                          flex flex-col lg:flex-row">

            {/* LEFT BIG BOX */}
            <div className="bg-white w-full lg:w-2/3 px-6 sm:px-10 py-6 sm:py-10 rounded-[12px]">
              <p className="text-[14px] font-[400]">Total Tuition Fee:</p>
              <p className="text-[32px] sm:text-[48px] font-[600]">{fees?.tuition_fees}</p>
            </div>

            {/* RIGHT SMALL BOXES */}
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              <div className="bg-white px-6 sm:px-8 py-4 rounded-[12px]">
                <p className="text-[12px] font-[400]">Annual Fee:</p>
                <p className="text-[20px] sm:text-[26px] font-[600]">{fees?.annual_fees}</p>
              </div>

              <div className="bg-white px-6 sm:px-8 py-4 rounded-[12px]">
                <p className="text-[12px] font-[400]">Semester-Wise Fee:</p>
                <p className="text-[20px] sm:text-[26px] font-[600]">{fees?.semester_wise_fees}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default UpdatedFee;
