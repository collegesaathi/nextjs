import React, { useState, useMemo } from "react";
import Layout from "../components/Layout"; // Assuming you have this
import Image from "next/image"; // Next.js Image component
import Link from "next/link";


const selectionData = [
  {
    id: "ug",
    title: "UG Courses",
    icon: "/images/icons/ug.svg", // Replace with your icon paths or SVG components
    courses: [
      {
        id: "bcom",
        title: "B.Com",
        specs: [
          { id: "banking", title: "Banking & Finance" },
          { id: "tax", title: "Taxation" },
          { id: "acc", title: "Accounting" },
          { id: "gen", title: "General" },
        ],
      },
      {
        id: "bba",
        title: "BBA",
        specs: [
          { id: "hr", title: "Human Resources" },
          { id: "marketing", title: "Marketing" },
          { id: "finance", title: "Finance" },
          { id: "ops", title: "Operations" },
        ],
      },
      {
        id: "bca",
        title: "BCA",
        specs: [
          { id: "cloud", title: "Cloud Computing" },
          { id: "ds", title: "Data Science" },
          { id: "ai", title: "Artificial Intelligence" },
          { id: "dev", title: "Full Stack Dev" },
        ],
      },
      { id: "ba", title: "BA", specs: [] },
    ],
  },
  {
    id: "pg",
    title: "PG Courses",
    icon: "/images/icons/pg.svg",
    courses: [
      {
        id: "mba",
        title: "MBA",
        specs: [
          { id: "it", title: "IT Management" },
          { id: "mkt", title: "Marketing" },
        ],
      },
      {
        id: "mca",
        title: "MCA",
        specs: [{ id: "fs", title: "Full Stack" }],
      },
    ],
  },
  { id: "exec", title: "Executive Programs", courses: [] },
  { id: "aiml", title: "AI ML/Data Science", courses: [] },
  { id: "phd", title: "Doctorate/Ph.D", courses: [] },
  { id: "cert", title: "Certifications", courses: [] },
];


const OptionCard = ({ title, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`
      cursor-pointer flex flex-col items-center justify-center 
      py-6 px-4 rounded-[18px] border transition-all duration-200
      bg-white shadow-sm hover:shadow-md h-[140px]
      ${
        isActive
          ? "border-[#FB9F9F] bg-red-50 ring-1 ring-red-600"
          : "border-[#FBE5E5] hover:border-red-300"
      }
    `}
  >

    <div className={`mb-3 p-3 rounded-full font-poppins ${isActive ? 'bg-white' : 'bg-gray-50'}`}>
   
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isActive ? "#DC2626" : "#4B5563"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    </div>
    <span className={`text-[14px] md:text-base font-[400]  text-center ${isActive ? 'text-red-700' : 'text-gray-700'}`}>
      {title}
    </span>
  </div>
);


const SidebarCardEMI = () => (
<div className="border border-[#DCFCE7] rounded-xl p-6 text-center mb-6 
                bg-[url('/images/clickpick/noemi.png')] 
                bg-cover bg-center h-1/3">
    <p className="font-semibold text-gray-700 mb-2">
      No-cost EMIs & <br /> scholarships Available
    </p>

    <div className="flex justify-center mt-2">
        <Image
          src="/images/clickpick/money.png"
          width={80}
          height={80}
        />
    </div>
</div>
);

const SidebarDynamicCard = ({ step }) => {
  if (step === 1) {
    return (
      <div className="bg-white border border-gray-100 shadow-sm rounded-xl  text-center h-2/4 bg-[url('/images/clickpick/Admissionalert.png')]">
  
      </div>
    );
  }
  if (step === 2) {
    return (
      <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 text-center bg-[url('/images/clickpick/Admissionalert.png')]">
      
      </div>
    );
  }
  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 text-center">
       <div className="text-red-500 text-3xl mb-2 flex justify-center">📞</div>
      <h3 className="font-bold text-gray-800">CS Support</h3>
      <p className="text-xs text-gray-500 mt-1">
        Free Personalized Expert Counseling Just For You!
      </p>
    </div>
  );
};

// --- 3. MAIN PAGE COMPONENT ---

export default function CourseSelectionWizard() {
  const [step, setStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Selections
  const [selectedDegree, setSelectedDegree] = useState(null); 
  const [selectedCourse, setSelectedCourse] = useState(null); 
  const [selectedSpec, setSelectedSpec] = useState(null);


  const currentDegreeData = useMemo(() => {
    return selectionData.find((d) => d.id === selectedDegree);
  }, [selectedDegree]);


  const currentCourseData = useMemo(() => {
    if (!currentDegreeData) return null;
    return currentDegreeData.courses?.find((c) => c.id === selectedCourse);
  }, [currentDegreeData, selectedCourse]);

  // Filter Logic for Search Bar
  const getFilteredItems = () => {
    if (step === 1) return selectionData;
    
    if (step === 2) {
      const courses = currentDegreeData?.courses || [];
      return courses.filter((c) =>
        c.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (step === 3) {
      const specs = currentCourseData?.specs || [];
      return specs.filter((s) =>
        s.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return [];
  };

  const filteredItems = getFilteredItems();

  // Navigation Logic
  const handleNext = () => {
    if (step === 1 && selectedDegree) {
      setStep(2);
      setSearchTerm("");
    } else if (step === 2 && selectedCourse) {
      setStep(3);
      setSearchTerm("");
    } else if (step === 3 && selectedSpec) {
      alert(`Wizard Complete! Selected: ${selectedDegree} > ${selectedCourse} > ${selectedSpec}`);
      // Redirect or Submit form here
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setSearchTerm("");
    }
  };

  // Progress Bar Width
  const progressWidth = step === 1 ? "33%" : step === 2 ? "66%" : "100%";

  return (
    <Layout>
      <div className="mx-auto container sm:container md:container xl:max-w-[1230px] px-4 py-8 md:mt-20 lg:mt-24">
        

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* --- LEFT CONTENT (WIZARD) --- */}
          <div className="lg:col-span-3">
            <div className="bg-[#FCF1F1] border-8 border-[#CECECE4C] rounded-[25px] shadow-sm p-6 md:p-10 min-h-[500px] relative">
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-2 rounded-full mb-8 relative">
                <div 
                    className="bg-[#A3E635] h-2 rounded-full transition-all duration-500 ease-out absolute top-0 left-0" 
                    style={{ width: progressWidth }}
                ></div>
                {/* Dot at end of progress */}
                <div 
                    className="w-4 h-4 bg-white border-2 border-[#A3E635] rounded-full absolute top-[-4px] transition-all duration-500"
                    style={{ left: `calc(${progressWidth} - 10px)` }}
                ></div>
              </div>

              <h2 className="text-2xl md:text-[24px]  font-[600] text-center text-gray-800 mb-6 font-poppins">
                {step === 1 && "Which degree are you interested in?"}
                {step === 2 && "Which course would you like to pursue?"}
                {step === 3 && "Do you have a specific specialization in mind?"}
              </h2>

              {(step === 2 || step === 3) && (
                <div className="max-w-md mx-auto mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder={step === 2 ? "Search for course..." : "Search for specialization..."}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-red-500 text-sm"
                        />
                        <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                    </div>
                </div>
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
                {/* Special "Not Decided" Option for Step 3 */}
                {step === 3 && (
                    <OptionCard 
                        title="Not decided yet" 
                        isActive={selectedSpec === 'not_decided'} 
                        onClick={() => setSelectedSpec('not_decided')}
                    />
                )}

                {/* Render Dynamic Items */}
                {filteredItems.map((item) => {
                    let isActive = false;
                    if(step === 1) isActive = selectedDegree === item.id;
                    if(step === 2) isActive = selectedCourse === item.id;
                    if(step === 3) isActive = selectedSpec === item.id;

                    return (
                        <OptionCard
                            key={item.id}
                            title={item.title}
                            isActive={isActive}
                            onClick={() => {
                                if(step === 1) setSelectedDegree(item.id);
                                if(step === 2) setSelectedCourse(item.id);
                                if(step === 3) setSelectedSpec(item.id);
                            }}
                        />
                    );
                })}
              </div>

              {/* FOOTER BUTTONS */}
              <div className="absolute bottom-8 left-0 w-full px-10 flex justify-center items-center">
                
                {/* Back Button */}
                {step > 1 ? (
                   <button 
                     onClick={handleBack}
                     className="px-8 py-2 rounded-md border border-gray-300 text-gray-600 font-medium hover:bg-gray-50"
                   >
                     Back
                   </button>
                ) : (
                    <div></div> 
                )}

                <button
                    onClick={handleNext}
                    disabled={
                        (step === 1 && !selectedDegree) ||
                        (step === 2 && !selectedCourse) ||
                        (step === 3 && !selectedSpec)
                    }
                    className={`
                        px-12 py-2 rounded-md font-bold text-white transition-colors
                        ${ 
                            ((step === 1 && selectedDegree) || 
                             (step === 2 && selectedCourse) || 
                             (step === 3 && selectedSpec))
                             ? "bg-[#FF0000] hover:bg-red-700 shadow-lg shadow-red-200" 
                             : "bg-gray-300 cursor-not-allowed"
                        }
                    `}
                >
                    Next
                </button>
              </div>

            </div>
          </div>

          {/* --- RIGHT SIDEBAR --- */}
          <div className="hidden lg:block lg:col-span-1 space-y-6 h-full">
             <SidebarCardEMI />
             <SidebarDynamicCard step={step} />
          </div>

        </div>
      </div>
    </Layout>
  );
}