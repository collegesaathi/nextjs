import React from "react";

const facts = [
  {
    title: "Years of Excellence",
    description:
      "NMIMS University was founded over 40 years ago and has established a great place in the education industry with its quality education. It has earned all the required accreditation and approvals and maintains its standards.",
  },
  {
    title: "Programs for Professionals",
    description:
      "The NMIMS CDOE courses are flexible and advanced, designed for professionals to help them hone skills and competencies for their professional growth.",
  },
  {
    title: "Salary Increase",
    description:
      "NMIMS Alumni have reported an average increase in salaries of 45%. This shows the skills earned and the value of NMIMS programs in the job market.",
  },
  {
    title: "Distinguished Alumni",
    description:
      "The alumni network of NMIMS CDOE consists of over 82,000 professionals, leaders and highly successful individuals across multiple fields of industry.",
  },
  {
    title: "Students Empowered",
    description:
      "The University has empowered over 185,000 students academically and professionally, making NMIMS a valuable university.",
  },
];

function Facts() {
  return (
    <>
      {/* Desktop Version */}
      <section className="w-full px-4 mt-[50px] " id="facts-section">
        <div className="bg-[#fcf0ee]  h-[750px]">
          <div className="relative z-10 w-full lg:w-[860px]">
            <h2 className="font-poppins font-[600] text-[28px] leading-[42px] text-[#282529] my-8 animate-fade-in-up">
              Facts related to <br /> NMIMS CDOE
            </h2>

            <div className="rounded-[23px] bg-white shadow-[0px_1px_10px_rgba(0,0,0,0.09)]  animate-fade-in-up animate-delay-200">
              <div className="flex justify-between">

                {/* Timeline */}
                <div className="w-8 flex flex-col items-center pt-4 ">
                  {[1, 2, 3, 4, 5].map((num, index) => (
                    <React.Fragment key={index}>
                      <div className="w-8 h-8 bg-[#fcf0ee] rounded-full flex items-center justify-center animate-bounce-gentle">
                        <p className="font-poppins font-semibold text-[#ff8787]">{num}</p>
                      </div>
                      {num < 5 && (
                        <div className="w-[1px] h-[100px] bg-[#ffd5ce] animate-line-grow"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1 ps-6 pt-4 space-y-6">
                  {facts.map((item, index) => (
                    <div
                      key={index}
                      className={`flex flex-wrap justify-between border-b last:border-none pb-6 animate-slide-in-right animate-delay-${500 + index * 200}`}
                    >
                      <div className="w-[165px]">
                        <h3 className="font-poppins font-semibold text-[17px] text-[#282529]">
                          {item.title}
                        </h3>
                      </div>
                      <div className="w-[430px]">
                        <p className="font-poppins text-[17px] leading-[22px] text-[#282529]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Facts;
