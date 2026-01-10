import React, { useState } from 'react'; // 1. useState import kiya
import { Scale, ShieldCheck, Zap } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';

const advantageSlides = [
  {
    title: "Comprehensive University Comparison",
    desc: "CollegeSathi allows you to compare over 100 online colleges on one platform. This simplifies the comparison of different courses based on courses offered, fees structure, accreditation, and more and makes a well-informed decision that suits your career interests.",
    icon: <Scale size={24} className="text-gray-600" />,
    image: "/images/programs/comparison.png"
  },
  {
    title: "Verified Course Accreditation",
    desc: "We only partner with UGC-DEB and AICTE approved universities. This ensures that your online degree holds the same value as a regular degree for jobs and higher education.",
    icon: <ShieldCheck size={24} className="text-gray-600" />,
    image: "/images/programs/comparison.png"
  },
  {
    title: "Expert Career Guidance",
    desc: "Our experts provide 1-on-1 counseling to help you choose the right specialization and university that aligns perfectly with your long-term career aspirations.",
    icon: <Zap size={24} className="text-gray-600" />,
    image: "/images/programs/comparison.png"
  },
  {
    title: "Global Networking",
    desc: "Interact with a global community of learners and alumni to expand your professional network and gain international perspectives.",
    icon: <Scale size={24} className="text-gray-600" />,
    image: "/images/programs/comparison.png"
  },
  {
    title: "Flexible Learning Schedule",
    desc: "Study at your own pace with 24/7 access to recorded lectures and digital resources, perfect for working professionals.",
    icon: <ShieldCheck size={24} className="text-gray-600" />,
    image: "/images/programs/comparison.png"
  },
  {
    title: "Placement Assistance",
    desc: "Access dedicated career support services, including resume building, interview prep, and job placement drives.",
    icon: <Zap size={24} className="text-gray-600" />,
    image: "/images/programs/comparison.png"
  }
];

// 2. Admission Tabs ka data array
const admissionData = [
  {
    id: "edu",
    label: "Educational Qualification",
    content: "The candidate must have completed a Bachelor's degree from a recognized university in any discipline. Most universities require a 10+2+3 or 10+2+4 pattern of education."
  },
  {
    id: "grades",
    label: "Grades",
    content: "The candidates must obtain at least 50% marks for general category applicants. A relaxation of this minimum to 45% marks for reserved categories like SC/ST and PwD candidates."
  },
  {
    id: "work",
    label: "Work Experience",
    content: "While not mandatory for all programs, some executive online MBAs require 2-3 years of professional work experience. Regular online MBAs usually accept fresh graduates."
  }
];

const CollegesathiAdvantages = ({ bgColor = "#FFF4F0", sideBgColor = "#FFEBE3",yellow }) => {
  // 3. Active tab state (Default: Grades)
  const [activeTab, setActiveTab] = useState(admissionData[1]);

  const imageSrc = yellow
  ? "/images/programs/note.png"
  : "/images/programs/purplecertificate.svg";

  return (
    <div className="max-w-[1200px] mx-auto py-6 md:py-10 font-poppins text-[#282529]">
      <div className="flex flex-col md:flex-row w-full md:gap-24 items-start">
        
        {/* LEFT COLUMN: Same as before */}
        <div className="space-y-8 md:w-[60%]">
          <div>
            <h2 className="text-[20px] md:text-[28px] font-[600] mb-6 leading-[28px]">
              Advantages of applying through Collegesathi
            </h2>
            <p className="text-[#282529] leading-[28px] font-[400] text-[16px] mb-4">
              Exploring 1000s of universities and picking a perfect one can be very difficult and exhausting...
            </p>
          </div>

          <div className="relative group h-[320px] mb-32 lg:mb-0">
            <Swiper
              direction={'vertical'}
              modules={[Mousewheel, Autoplay, Scrollbar]}
              mousewheel={true}
              scrollbar={{ draggable: true, hide: false, el: '.custom-scrollbar' }}
              autoplay={{ delay: 4000 }}
              className="h-full pr-6"
            >
              {advantageSlides.map((slide, index) => (
                <SwiperSlide key={index} className="!overflow-visible">
                  <div className="rounded-[30px] bg-[#2D241E] h-[200px] relative">
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-[30px]" />
                    <div className="absolute -bottom-26 left-4 right-4 md:left-6 md:right-12 bg-white rounded-[20px] p-6 shadow-sm border border-gray-50 z-20">
                      <div className="flex items-start gap-4">
                        <div className="bg-gray-100 p-3 rounded-full flex-shrink-0 absolute -top-4 left-4">
                          {slide.icon}
                        </div>
                        <div className='mt-8'>
                          <h4 className="font-[600] text-[16px] mb-2">{slide.title}</h4>
                          <p className="text-[#282529] text-[14px] leading-[24px]">{slide.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-scrollbar absolute -right-10 top-0 h-full !w-[3px] bg-gray-100 rounded-full hidden md:block"></div>
          </div>
        </div>

        {/* RIGHT COLUMN: Updated with Clickable Tabs */}
        <div className="border-3 border-dashed border-gray-200 rounded-[22px] p-2 md:p-6 py-8 relative bg-white md:w-[40%] ">
          <h2 className="text-[20px] md:text-[28px] font-[600] mb-6 leading-tight">
            Admission Process for Online MBAs: Eligibility & Entrance Exams
          </h2>

          <p className="text-[#282529] leading-[28px] font-[400] text-[16px] mb-4">
            Understanding online MBA eligibility criteria in India is crucial...
          </p>

          <div className="rounded-[12px] overflow-hidden flex flex-col sm:flex-row min-h-[250px] mt-4" style={{ backgroundColor: bgColor }}>
            
            {/* Tab Sidebar */}
            <div className="w-full sm:w-[45%] p-4 space-y-3 flex flex-col justify-center" style={{ backgroundColor: sideBgColor }}>
              {admissionData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item)}
                  className={`text-left px-4 py-3 rounded-xl transition-all duration-300 text-[14px] ${
                    activeTab.id === item.id
                      ? "bg-white text-[#282529] font-bold shadow-md border border-orange-100 scale-105"
                      : "text-gray-600 font-medium hover:bg-white/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Tab Content Area */}
            <div className="w-full sm:w-[55%] p-6 flex items-center relative">
              <p className="text-[14px] text-[#282529] leading-[22px] animate-fadeIn">
                {activeTab.content}
              </p>
            </div>

            <div className="absolute bottom-0 right-2 rotate-12 z-10 opacity-30 sm:opacity-100">
       <img src={imageSrc} alt="icon" className="w-16 md:w-auto" />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .custom-scrollbar { background-color: #f3f4f6 !important; }
        .custom-scrollbar .swiper-scrollbar-drag {
          background-color: #EC1E24 !important;
          width: 3px !important;
          border-radius: 99px;
        }
        .swiper-pagination { display: none; }
      `}</style>
    </div>
  );
};

export default CollegesathiAdvantages;