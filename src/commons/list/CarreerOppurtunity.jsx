import Heading from "@/common/Heading";

function CarreerOppurtunity({ career }) {


  return (

    <section className="px-2 md:px-6 py-6 " id="advantages-section">
      <div className="max-w-[1230px]">
        <div className="mb-8">

          <Heading title={career?.title} />

          <div
            className="font-poppins text-[14px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4"
            dangerouslySetInnerHTML={{ __html: career?.description || "" }}
          />

        </div>

        <div className="overflow-hidden mt-[30px]">
          <div className="w-full">

            {/* Header */}
            <div className="grid grid-cols-3 md:grid-cols-3">
              <div className="bg-[#ec1e24] text-white p-2 md:p-4 font-poppins font-semibold text-[12px] md:text-[17px] border-r-2 border-[#f47c80] h-[65px] flex items-center">
                Job Roles
              </div>

              <div className="bg-[#ec1e24] text-white p-2 md:p-4 font-poppins font-semibold text-[12px] md:text-[17px] border-r-2 border-[#f47c80] h-[65px] flex items-center">
                Responsibilities
              </div>

              <div className="bg-[#ec1e24] text-white  p-2 md:p-4 font-poppins font-semibold text-[12px] md:text-[17px] h-[65px] flex items-center">
                Annual Average Salary
              </div>
            </div>

            {/* Rows */}
            {career?.Career?.map((career, index) => (
              <div key={index} className="grid grid-cols-3 md:grid-cols-3">

                {/* Job Role */}
                <div className="bg-white border-b-2 border-l-2 border-r-2 border-[#f47c80] p-4 font-poppins">
                  <h3 className="text-[12px] md:text-[17px] text-[#282529]">
                    {career.title}
                  </h3>
                </div>

                {/* Responsibilities */}
                <div className="bg-white border-b-2 border-r-2 border-[#f47c80] p-1 md:p-4 font-poppins">
                  <div
                    className="text-[12px] md:text-[17px] text-[#363535] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: career.description }}
                  />
                </div>

                {/* Salary */}
                <div className="bg-white border-b-2 border-r-2 border-[#f47c80] p-1 md:p-4 font-poppins">
                  <div
                    className="text-[12px] md:text-[17px] text-[#363535] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: career.salary }}
                  />
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default CarreerOppurtunity;