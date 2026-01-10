import React from 'react';
import { Scale, FileBadge, ShieldCheck, Zap } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay, Scrollbar } from 'swiper/modules'; // Added Scrollbar

// IMPORTANT: You must import these styles for Swiper to work
import 'swiper/css';
import 'swiper/css/scrollbar'; // Added Scrollbar CSS

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

const CollegesathiAdvantages = ({ bgColor, sideBgColor }) => {
  return (
    <div className="max-w-[1200px] mx-auto  py-3 my-12 font-poppins text-[#282529]">
      <div className="flex flex-col md:flex-row w-full md:gap-24 items-start">
        
        {/* LEFT COLUMN: ADVANTAGES */}
        <div className="space-y-8 md:w-[60%]">
          <div>
            <h2 className="text-[20px] md:text-[28px] font-[600] mb-6 leading-[28px] tracking-[0]">
              Advantages of applying through Collegesathi
            </h2>
            <p className="text-[#282529] leading-[28px] font-[400] text-[16px] mb-4">
             Exploring 1000s of universities and picking a perfect one can be very difficult and exhausting. That’s where CollegeSathi steps in, making your journey a lot easier with their expert solutions for simplifying your research and finding your perfect fit. 

The following are the reasons why you should choose CollegeSathi to be your educational partner:
            </p>
            <p className="text-[#4A4A4A] leading-relaxed text-[15px]">
       The following are the reasons why you should choose CollegeSathi to be your educational partner:
            </p>
          </div>

          {/* Vertical Slider Wrapper */}
          <div className="relative group h-[320px] mb-32 lg:mb-0">
            {/* 
              REMOVED static red bar. 
              The 'Scrollbar' module below now acts as the moving red bar.
            */}
            
            <Swiper
              direction={'vertical'}
              modules={[Mousewheel, Autoplay, Scrollbar]}
              mousewheel={true}
              scrollbar={{ 
                draggable: true, 
                hide: false,
                el: '.custom-scrollbar' // Custom element for the red bar
              }}
              autoplay={{ delay: 4000 }}
              className="h-full  pr-6" // Added padding-right for the scrollbar
            >
              {advantageSlides.map((slide, index) => (
                <SwiperSlide key={index} className="!overflow-visible">
                  <div className="rounded-[30px] bg-[#2D241E] h-[180px] relative">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover rounded-[30px]"
                    />
                    
                    <div className="absolute -bottom-26 left-4 right-4 md:left-6 md:right-12 bg-white rounded-[20px] p-6 shadow-xl border border-gray-50 z-20">
                      <div className="flex items-start gap-4">
                        <div className="bg-gray-100 p-3 rounded-full flex-shrink-0 absolute -top-4 left-4">
                          {slide.icon}
                        </div>
                        <div className='mt-8'>
                          <h4 className="font-[600] text-[16px] mb-2">{slide.title}</h4>
                          <p className="text-[#282529] text-[14px] leading-[24px]">
                            {slide.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* THE MOVING RED BAR (Custom Scrollbar Element) */}
            <div className="custom-scrollbar absolute -right-10 top-0 h-full !w-[3px] bg-gray-100 rounded-full hidden md:block"></div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="border-3 border-dashed border-gray-200 rounded-[22px] p-2 md:p-6  py-8 relative bg-white md:w-[40%] ">
          <h2 className="text-[20px] md:text-[28px] font-[600] mb-6 leading-tight">
       Admission Process for Online MBAs: Eligibility & Entrance Exams
          </h2>

           <p className="text-[#282529] leading-[28px] font-[400] text-[16px] mb-4">
           Understanding online MBA eligibility criteria in India is crucial for anyone who is looking to enroll in top programs. Most leading Indian universities have set some basic academic standards, which usually include: 


            </p>
          <div className=" rounded-[12px] overflow-hidden flex flex-col sm:flex-row min-h-[220px]  mt-4"style={{ backgroundColor: bgColor }}>
            <div className="w-full sm:w-[40%] p-6 space-y-4  flex flex-col justify-center text-[14px]"style={{ backgroundColor: sideBgColor }}>
               <div className="text-gray-600 font-medium px-4">Educational Qualification</div>
               <div className="bg-white text-[#282529] font-bold py-3 px-6 rounded-xl shadow-sm border border-orange-100">Grades</div>
               <div className="text-gray-600 font-medium px-4">Work Experience</div>
            </div>
            <div className="w-full sm:w-[60%] p-8 flex items-center">
              <p className="text-[14px] text-[] leading-[18px]">
            The candidates must obtain at least 50% marks for general category applicants. A relaxation of this minimum to 45% marks for reserved categories like SC/ST and PwD candidates.
              </p>
            </div>
            <div className="absolute bottom-0 right-2  rotate-12 z-10">
              {/* <FileBadge size={48} className="text-orange-900" /> */}
              <img src="/images/programs/note.png" />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Style the background track of the scrollbar */
        .custom-scrollbar {
          background-color: #f3f4f6 !important; /* Light gray track */
        }

        /* Style the moving "drag" part (The Red Bar) */
        .custom-scrollbar .swiper-scrollbar-drag {
          background-color: #EC1E24 !important; /* Brand Red */
          width: 3px !important;
          border-radius: 99px;
        }

        /* Hide default pagination dots if you only want the red bar */
        .swiper-pagination {
          display: none;
        }

        .mySwiper !overflow-visible {
           overflow: visible !important;
        }
      `}</style>
    </div>
  );
};

export default CollegesathiAdvantages;