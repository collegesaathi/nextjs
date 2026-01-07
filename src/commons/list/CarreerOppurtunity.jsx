import Heading from "@/common/Heading";

function CarreerOppurtunity({ career }) {
  return (
    <>
      {career?.Career?.length > 1 && (
        <section className="px-2 md:px-6 py-6" id="advantages-section">
          <div className="max-w-[1230px]">
            <div className="mb-8">
              <Heading title={career?.title} />
              <div
                className="font-poppins text-[14px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4"
                dangerouslySetInnerHTML={{ __html: career?.description || "" }}
              />
            </div>

            <div className="mt-[30px]">
              <div className="w-full  overflow-x-auto">
                <table className="w-full border-collapse min-w-[700px]">
                  {/* ---------- HEADER ---------- */}
                  <thead>
                    <tr>
                      <th className="bg-[#ec1e24] text-white p-2 md:p-4 font-poppins font-semibold text-[12px] md:text-[17px] border-2 border-[#f47c80] h-[65px] text-left">
                        Job Roles
                      </th>
                      <th className="bg-[#ec1e24] text-white p-2 md:p-4 font-poppins font-semibold text-[12px] md:text-[17px] border-2 border-[#f47c80] h-[65px] text-left">
                        Annual Average Salary
                      </th>
                    </tr>
                  </thead>

                  {/* ---------- BODY ---------- */}
                  <tbody>
                    {career?.Career?.map((item, index) => (
                      <tr key={index}>
                        {/* Job Role */}
                        <td className="bg-white border-2 border-[#f47c80] p-3 md:p-4 font-poppins text-[12px] md:text-[17px] text-[#282529]">
                          {item.title}
                        </td>

                        {/* Salary */}
                        <td className="bg-white border-2 border-[#f47c80] p-3 md:p-4 font-poppins">
                          <div
                            className="text-[12px] md:text-[17px] text-[#363535] leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: item.salary }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}</>

  );
}

export default CarreerOppurtunity;
