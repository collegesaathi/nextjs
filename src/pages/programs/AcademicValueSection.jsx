import React from 'react';

const AcademicValueSection = () => {
  return (
    <div className="max-w-[1200px] mx-auto  py-6 md:py-10 space-y-14 font-poppins text-[#282529]">
      
      {/* Section 1: Accreditation (Text Left, Image Right) */}
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-[20px] md:text-[28px] font-[600] leading-[28px]">
            Accreditation and Academic Value
          </h2>
          <p className="text-[#282529] leading-[28px] text-[16px]">
            Indian online MBA programs are known for their accreditation and 
            academic excellence. Institutions offering these programs ensure 
            that the curriculum and teaching methods maintain high standards 
            to provide students with a quality education comparable to 
            on-campus MBA programs. The common accreditations and 
            approvals are UGC, DEB, AICTE and NAAC accreditations, which 
            reflect the high standards for the courses.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
              src="/images/programs/entrance.png" 
         
            alt="Accreditation Illustration" 
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Section 2: Entrance Exams (Image Left, Text Right) */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
           src="/images/programs/acadmic.png" 
            alt="Entrance Exams Illustration" 
            className="max-w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-[20px] md:text-[28px] font-[600] leading-[28px]">
            Entrance Exams
          </h2>
          <p className="text-[#282529] leading-[28px] text-[16px]">
            Admission to online MBA programs in India often requires candidates to 
            take some entry tests such as the Common Admission Test (CAT), 
            Graduate Management Admission Test (GMAT), or Graduate Record 
            Examination (GRE). These exams help determine the candidate's 
            aptitude for the program and ensure a competitive selection process. 
            However, all universities do not ask for an entrance exam, the candidate 
            can take admission on the basis of eligibility.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AcademicValueSection;