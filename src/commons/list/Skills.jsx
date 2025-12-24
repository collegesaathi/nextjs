import React from "react";
import Heading from "@/common/Heading";

function Skills({ skills }) {
  const skillsList = skills?.skills || [];

  return (
    <section className="px-2 md:px-6 py-6" id="skills-section">
      <div className="max-w-[1230px] ">
        
        {/* --- Section Title & Description --- */}
        <div className="mb-8">
          <Heading title={skills?.title} />
          <div
            className="font-poppins text-[15px] sm:text-[16px] text-[#282529] leading-6 sm:leading-7 mb-4"
            dangerouslySetInnerHTML={{ __html: skills?.description || "" }}
          />
        </div>


        <div className="overflow-hidden mt-[30px] border-2 border-[#f47c80] rounded-t-lg">

          <div className="bg-[#ec1e24] text-white p-4 font-poppins font-bold text-[16px] md:text-[18px] text-center w-full">
            Skills
          </div>

          {/* 2. Grid Rows (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 bg-white">
            {skillsList.map((skill, index) => (
              <div
                key={index}
                className={`
                  flex items-start p-4 md:p-6 md:px-10
                  border-b border-[#f47c80]
                  ${index % 2 === 0 ? "md:border-r" : ""} 
                  /* The line above adds a right border only to the left column items on desktop */
                `}
              >
                {/* Green Check Icon */}
                <div className="mr-3 mt-1 min-w-[20px] ">
                <img src="/images/check.png" ></img>
                </div>

                {/* Skill Content */}
                <div className="font-poppins flex flex-col justify-center ">
                  <h3 className="text-[14px] md:text-[17px] font-[400] text-[#282529]">
                    {skill.title}
                  </h3>
                  
                  {/* Optional: Render description if it exists, otherwise hide */}
                  {skill.description && (
                    <div
                      className="text-[12px] text-gray-500 mt-1 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: skill.description,
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;