import React, { useState } from 'react';
import { Plus, Minus, Info, Users, Heart, GraduationCap, Banknote, BarChart3 } from 'lucide-react';
import { BiSolidMessageRoundedError } from "react-icons/bi";

const Syllabus = () => {
  const [openSemester, setOpenSemester] = useState(0);

  const semesters = [
    {
      title: "Semester 1",
      subjects: [
        "Principles of Management",
        "Organizational Behavior",
        "Business Communication",
        "Financial & Managerial Accounting"
      ]
    },
    { title: "Semester 2", subjects: ["Marketing Management", "Human Resource Management", "Operations Management", "Business Ethics"] },
    { title: "Semester 3", subjects: ["Strategic Management", "HR Information Systems", "Labor Laws", "Performance Management"] },
    { title: "Semester 4", subjects: ["International HRM", "Organizational Development", "Project Work", "Viva Voce"] }
  ];

  const electives = [
    {
      title: "Talent Acquisition & Recruitment",
      desc: "Strategies for hiring the right talent that align with the organization's goals .",
      icon: <Users size={18} className="text-white" />
    },
    {
      title: "Employee Relations & Engagement",
      desc: "Managing workplace culture and employee satisfaction.",
      icon: <Heart size={18} className="text-white" />
    },
    {
      title: "Learning & Development",
      desc: "Training and upskilling employees effectively.",
      icon: <GraduationCap size={18} className="text-white" />
    },
    {
      title: "Compensation & Benefits Management",
      desc: "Structuring salary, perks, and incentives.",
      icon: <Banknote size={18} className="text-white" />
    },
    {
      title: "HR Analytics",
      desc: "Using data to make informed HR decisions.",
      icon: <BarChart3 size={18} className="text-white" />
    }
  ];

  const toggleSemester = (index) => {
    setOpenSemester(openSemester === index ? null : index);
  };

  return (
    <div className="max-w-[1230px] mx-auto font-sans text-[#282529] py-12 ">
      {/* Header Section */}
      <div className="mb-10">
        <h2 className="text-[20px] md:text-[28px] font-[600] font-poppins mb-4 leading-[28px]">
          Online MBA in HR Management Syllabus: What You Will Learn
        </h2>
        <p className="text-[#282529] text-[16px] leading-[28px]">
          Online MBA in Human Resource Management program provides skills and expertise in the department of HR. 
          The subjects included in the curriculum of this program prepares the students with in-demand skills in this niche.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Side: Semester Accordion */}
        <div className="lg:w-1/3">
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
            <div className="bg-[#E6E6E6] p-5">
              <h3 className="text-[20px] font-[600] leading-[27px]">
                Semester-Wise Overview of Online MBA in HR Management
              </h3>
            </div>
            
            <div className="p-2 ">
              {semesters.map((sem, idx) => (
                <div key={idx} className="border-b last:border-b-0 border-gray-100">
                  <button 
                    onClick={() => toggleSemester(idx)}
                    className="w-full flex items-center text-[16px] justify-between p-4 text-left font-[600] hover:bg-gray-50 transition-colors"
                  >
                    <span className={openSemester === idx ? "text-[#282529]" : "text-gray-800"}>
                      {sem.title}
                    </span>
                    <div className={`rounded-full p-0.5 ${openSemester === idx ? 'bg-[#ffdedb]' : 'bg-[#ffdedb]'}`}>
                        {openSemester === idx ? 
                            <Minus size={14} className="text-[#e3503e]" strokeWidth={3} /> : 
                            <Plus size={14} className="text-[#e3503e]" strokeWidth={3} />
                        }
                    </div>
                  </button>
                  
                  {openSemester === idx && (
                    <div className="px-4 pb-4 animate-fadeIn">
                      <ul className="space-y-2">
                        {sem.subjects.map((sub, sIdx) => (
                          <li key={sIdx} className="text-sm text-gray-600 flex items-start leading-[28px]">
                             {sub}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Info Note */}
          <div className="mt-4 bg-[#F7F6F6] p-2 rounded-2xl flex gap-3 items-start border-[1px] border-[#CFCFCF]">
            <div className=" rounded-full p-1 mt-0.5">
               <BiSolidMessageRoundedError size={24} color="gray"  />
            </div>
            <p className="text-[12px] text-[#282529] leading-[18px]">
              This generic syllabus outline provides a roadmap of what students can expect during an online MBA in HR, 
              though exact courses may vary from university to university.
            </p>
          </div>
        </div>

        {/* Right Side: Key Electives */}
        <div className="lg:w-2/3">
          <h3 className="text-[20px] font-[600] leading-[20px]mb-3">Key Electives in HR Management MBA</h3>
          <p className="text-gray-600 text-[16px] leading-[27px] mb-6">
            An online MBA in Human Resource Management offers several electives to help you focus on specific areas of HR. Popular electives include:
          </p>

          <div className="bg-[#FFF8F6] rounded-2xl px-2 py-4 md:p-8 relative overflow-hidden min-h-[500px] shadow-md">
            {/* Decorative Background Circle */}
      <div
      className="hidden md:block absolute -bottom-20 -right-20 w-60 h-60 rounded-full z-8 opacity-70"
      style={{
       background:
      "linear-gradient(209.44deg, rgba(252,204,186,1) 7.29%, rgba(255,255,255,1) 81.96%)"
      }}
    ></div>

      <div
  className=" hidden md:block absolute bottom-5 right-10 w-60 h-60 rounded-full z-8 opacity-30"
  style={{
 
         background: "linear-gradient(to bottom right, rgba(252, 204, 186, 10) 0.29%, rgba(255,255,255,0.3) 81.96%)"
  }}
></div>
            
            <div className="relative z-10 space-y-6 md:space-y-8">
              {electives.map((item, idx) => (
                <div key={idx} className="flex gap-6 relative">
                  {/* Vertical Line Connector */}
                  {idx !== electives.length - 1 && (
                    <div className="absolute left-[19px] top-10 w-[1px] h-full bg-[#e3503e]"></div>
                  )}
                  
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full  border border-[#e3503e] flex items-center justify-center shadow-lg shadow-orange-200">
                     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#e3503e] flex items-center justify-center shadow-lg shadow-orange-200">
                    {item.icon}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h4 className="font-[600] text-[16px] leading-[30px] text-[#282529] mb-1">{item.title}</h4>
                    <p className="font-[400] text-[16px] leading-[30px] text-[#282529]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Syllabus;