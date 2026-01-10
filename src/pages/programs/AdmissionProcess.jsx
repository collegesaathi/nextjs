import React from 'react';
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { Play, FolderOpen } from 'lucide-react';

const AdmissionProcess = () => {
  const steps = [
    {
      title: "Research Programs:",
      desc: "Compare institutions, costs, areas of specialization, and accreditation with the help of collegevidya."
    },
    {
      title: "Eligibility Check:",
      desc: "It is necessary that you fulfill the eligibility criteria of the chosen university. It normally requires a bachelor's degree in any field from an accredited university."
    },
    {
      title: "Application Submission:",
      desc: "The application form needs to be filled up online along with academic and other details."
    },
    {
      title: "Entrance Test or Direct Evaluation:",
      desc: "Some institutions require an entrance test score, while some institutions provide direct admission to students on the basis of performance and work experience."
    },
    {
      title: "Interview/Personal Assessment (if applicable):",
      desc: "There might be an online interview conducted by some institutions that would gauge your fit for the program."
    },
    {
      title: "Payment of Fees & Enrollment:",
      desc: "After the selection, it is necessary to pay the fees or select the EMI option to confirm the enrollment."
    }
  ];

  const documents = [
    "Mark sheets and degree certificate of graduation",
    "Identity proof: Aadhaar, Passport, or Driving License",
    "Resume or professional experience certificate",
    "Passport-size photographs"
  ];

  return (
    <div className="max-w-[1230px] mx-auto font-poppins text-[#282529] py-12">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-[20px] md:text-[28px] font-[600] font-poppins mb-4 leading-[28px]">
          How to Get Admission in an Online MBA in HR Management
        </h2>
        <p className="text-[#282529] text-[16px] leading-[28px]">
          The Online MBA in Human Resource Management opens doors to unlimited career opportunities in the HR department. To apply for this program, you can follow the following admission process:
        </p>
      </div>

      {/* Step by Step Section */}
      <div className="mb-10">
        <h3 className="text-[20px] font-[600] leading-[27px] mb-4">
          Step-by-Step Online MBA Admission Process
        </h3>
        <p className="text-[#282529] text-[16px] leading-[28px] mb-6">
          Securing admission into an online MBA in Human Resource Management is quite easy, as it is geared towards working professionals. The procedure to follow when seeking an online MBA in Human Resource Management includes:
        </p>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="mt-1.5 flex-shrink-0">
                <Play size={12} fill="#6b7280" className="text-[#282529]" />
              </div>
              <p className="text-[16px] leading-[28px]">
                <span className="font-[600]">{step.title}</span> {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Box Section */}
      <div className="bg-[#FFF4E6] rounded-2xl px-4 md:px-8 py-1 pb-6 mb-12 relative">
        {/* Floating Title Box */}
        <div className=" w-full lg:w-1/3 md:mx-auto mb-6 md:mb-0 bg-[#F6DDBD] px-2 py-3 rounded-br-lg rounded-bl-lg  border border-[#FAD7B8] text-center">
          <span className="font-[600] text-[18px]">Entrance Exams vs. Direct Admission</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-26 mt-8 relative">

              <span className="hidden md:block absolute left-1/2 top-6 h-[calc(100%-3rem)] w-[1px] bg-[#FAD7B8]" />

          <div className="bg-white p-6 rounded-xl border-[1px] border-[#FAD7B8] ">
            <p className="text-[15px] leading-[26px] text-[#282529] line-clamp-8 lg:line-clamp-4">
              Admission to certain universities depends on the performance in entrance tests such as CAT, MAT, XAT, GMAT, or online tests conducted by the university concerned.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-[#FAD7B8] ">
            <p className="text-[15px] leading-[26px] text-[#282529]">
              There is direct admission in many online MBA courses based on graduation marks and professional experience. This will make it easier for working professionals to get enrolled, rather than preparing for entrance exams.
            </p>
          </div>
        </div>
      </div>

      {/* Documents Section */}
      <div className="mb-8">
        <h3 className="text-[20px] font-[600] leading-[27px] mb-4">
          Documents Usually Required for Admission
        </h3>
        <p className="text-[#282529] text-[16px] leading-[28px] mb-6">
          While the requirements may vary from one university to another, applicants are usually required to submit the following documents:
        </p>

        <div className="space-y-4 mb-8">
          {documents.map((doc, index) => (
            <div key={index} className="flex gap-4 items-center">
              <div className="flex-shrink-0">
           
                 <img src="/images/programs/arrow.svg" />
              </div>
              <p className="text-[16px] leading-[24px] text-[#282529]">
                {doc}
              </p>
            </div>
          ))}
        </div>

        {/* Info Note Footer */}
        <div className="bg-[#FEF3D7] p-2 px-4 rounded-2xl flex gap-3 items-center  w-fit">
          <div className="flex-shrink-0">
             <BiSolidMessageRoundedError size={20} className="text-[#282529]" />
          </div>
          <p className="text-[14px] italic text-[#282529] font-[400]">
            Check the admission process and documents required, as it may vary from university to university.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;