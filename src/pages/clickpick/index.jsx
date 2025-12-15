import React, { useState, useMemo } from "react";
import Layout from "../components/Layout"; 
import Image from "next/image"; 
import Link from "next/link";

// --- DATA FOR STEPS 1-3 ---
const selectionData = [
  {
    id: "ug",
    title: "UG Courses",
    image: "/images/clickpick/degree/ug.png",
    courses: [
      {
        id: "bcom",
        title: "B.Com",
        image: "/images/clickpick/courses/ba.png",
        specs: [
          { id: "banking", title: "Banking & Finance", image: "/images/clickpick/degree/ug.png" },
          { id: "tax", title: "Taxation", image: "/images/clickpick/degree/ug.png" },
          { id: "acc", title: "Accounting" },
          { id: "gen", title: "General" },
        ],
      },
      {
        id: "bba",
        title: "BBA",
        image: "/images/clickpick/courses/bba.png",
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
        image: "/images/clickpick/courses/bca.png",
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
    image: "/images/clickpick/degree/pg.png",
    courses: [
      {
        id: "mba",
        title: "MBA",
        image: "/images/clickpick/courses/bcom.png",
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
  { id: "exec", title: "Executive Programs", image: "/images/clickpick/degree/executive.png", courses: [] },
  { id: "aiml", title: "AI ML/Data Science", image: "/images/clickpick/degree/ai.png", courses: [] },
  { id: "phd", title: "Doctorate/Ph.D", image: "/images/clickpick/degree/pg.png", courses: [] },
  { id: "law", title: "Law", image: "/images/clickpick/degree/ug.png", courses: [] },
  { id: "cert", title: "Certifications", image: "/images/clickpick/degree/ai.png", courses: [] },


];

// --- DATA FOR STEPS 4-9 ---

// Step 4
const studyHourOptions = [
  { id: "2-4", title: "2-4 Hours"}, 
  { id: "4-8", title: "4-8 Hours" },
  { id: "8-16", title: "8-16 Hours"  },
  { id: "16+", title: "16+ Hours" },
];

// Step 5
const scoreOptions = [
  { id: "below_50", title: "Below 50%" },
  { id: "50_75", title: "50% to 75%"},
  { id: "above_75", title: "Above 75%"},
];

// Step 6: Fee
const feeOptions = [
  { id: "less_1", title: "Less than 1 Lakh" },
  { id: "1_2", title: "1 Lakh to 2 Lakhs" },
  { id: "2_5", title: "2 Lakhs to 5 Lakhs" },
  { id: "5_plus", title: "5 Lakhs+" },
];

// Step 7 & 8: Yes/No Options
const yesNoOptions = [
  { id: "yes", title: "Yes" },
  { id: "no", title: "No" },
];

// Step 9: Scholarship Categories
const scholarshipOptions = [
  { id: "divyang", title: "Divyang (For persons with disabilities)" },
  { id: "defence", title: "Defence personnel" },
  { id: "alumni", title: "Merit ( 80% andabove in bachelor'sdegree)" },
  { id: "govt", title: "Government employees" },
  { id: "merit", title: "Merit | 80% and above in bachelor's degree" },
];


// --- COMPONENTS ---

const OptionCard = ({ title, image, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`
      cursor-pointer flex flex-col items-center justify-center
      px-1 rounded-[18px] border transition-all duration-200
      bg-white shadow-sm hover:shadow-md 
      min-h-[125px] w-full md:w-[184px]
      ${
        isActive
          ? "border-[#FB9F9F] bg-red-50 "
          : "border-[#FBE5E5] hover:border-red-300"
      }
    `}
  >
    {image && (
      <div
        className={`
          mb-3 w-14 h-14
          flex items-center justify-center
          rounded-full
          border-2 border-dotted
          ${isActive ? "bg-red-50 border-red-200" : "bg-gray-50 border-[#D1D0D0]"}
        `}
      >
        <Image
          src={image}
          alt={title}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
    )}

    <span
      className={`text-[14px] md:text-base font-[500] text-center ${
        isActive ? "text-[#EC1E24]" : "text-gray-700"
      }`}
    >
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
        alt="Money"
      />
    </div>
  </div>
);

const SidebarDynamicCard = ({ step }) => {
  if (step === 1) {
    return (
      <div className="bg-white border border-gray-100 shadow-sm rounded-xl text-center h-2/4 bg-[url('/images/clickpick/Admissionalert.png')]"></div>
    );
  }
  if (step === 2) {
    return (
      <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 text-center bg-[url('/images/clickpick/Admissionalert.png')]"></div>
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

// --- MAIN WIZARD ---

export default function CourseSelectionWizard() {
  const [step, setStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Selections Steps 1-3
  const [selectedDegree, setSelectedDegree] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSpec, setSelectedSpec] = useState(null);

  // Selections Steps 4-5
  const [studyHours, setStudyHours] = useState(null);
  const [scorePercentage, setScorePercentage] = useState(null);

  // Selections Steps 6-9
  const [avgFee, setAvgFee] = useState(null);
  const [emiPref, setEmiPref] = useState(null);
  const [placementPref, setPlacementPref] = useState(null);
  const [scholarshipCat, setScholarshipCat] = useState(null);


  const currentDegreeData = useMemo(() => {
    return selectionData.find((d) => d.id === selectedDegree);
  }, [selectedDegree]);

  const currentCourseData = useMemo(() => {
    if (!currentDegreeData) return null;
    return currentDegreeData.courses?.find((c) => c.id === selectedCourse);
  }, [currentDegreeData, selectedCourse]);

  // Logic to get items based on step
  const getItemsToDisplay = () => {
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

    if (step === 4) return studyHourOptions;
    if (step === 5) return scoreOptions;
    if (step === 6) return feeOptions;
    if (step === 7) return yesNoOptions; // EMI
    if (step === 8) return yesNoOptions; // Placement
    if (step === 9) return scholarshipOptions;

    return [];
  };

  const currentItems = getItemsToDisplay();

  // Navigation Logic
  const handleNext = () => {
    if (step === 1 && selectedDegree) setStep(2);
    else if (step === 2 && selectedCourse) setStep(3);
    else if (step === 3 && selectedSpec) setStep(4);
    else if (step === 4 && studyHours) setStep(5);
    else if (step === 5 && scorePercentage) setStep(6);
    else if (step === 6 && avgFee) setStep(7);
    else if (step === 7 && emiPref) setStep(8);
    else if (step === 8 && placementPref) setStep(9);
    else if (step === 9 && scholarshipCat) {
      // FINAL SUBMISSION
      alert(
        `Wizard Complete!\n` +
        `Degree: ${selectedDegree}\n` +
        `Course: ${selectedCourse}\n` +
        `Spec: ${selectedSpec}\n` +
        `Hours: ${studyHours}\n` +
        `Score: ${scorePercentage}\n` +
        `Fee: ${avgFee}\n` +
        `EMI: ${emiPref}\n` +
        `Placement: ${placementPref}\n` +
        `Scholarship: ${scholarshipCat}`
      );
    }
    setSearchTerm(""); // Reset search on any step change
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setSearchTerm("");
    }
  };

  // Progress Bar Logic (Total 9 steps)
  const progressWidth = `${(step / 9) * 100}%`;

  return (
    <Layout>
      <div className="mx-auto container sm:container md:container xl:max-w-[1230px] px-4 py-8 md:mt-20 lg:mt-24 ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8  ">
          
          {/* --- LEFT CONTENT (WIZARD) --- */}
          <div className="lg:col-span-3 ">
            <div className="bg-[#FCF1F1] border-8 border-[#CECECE4C] rounded-[25px] shadow-sm p-6 md:p-10 min-h-[500px] relative ">
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] h-2 rounded-full mb-8 p-2 relative items-center justify-center">
                <div
                  className="bg-gradient-to-r from-[#C3F449] to-[#5BBA3F] h-2 rounded-full transition-all duration-500 ease-out absolute top-1 left-0"
                  style={{ width: progressWidth }}
                ></div>
                {/* Dot */}
                <div
                  className="w-3.5 h-3.5 bg-white rounded-[5px] absolute top-[0px] transition-all duration-500 flex items-center justify-center shadow-sm"
                  style={{ left: `calc(${progressWidth} - 10px)` }}
                >
                  <div className="w-1.5 h-1.5 bg-[#A9A7B1] rounded-full" />
                </div>
              </div>

              {/* Step Title */}
              <h2 className="text-[20px] md:text-[24px] font-[600] text-center text-gray-800 mb-6 font-poppins px-4">
                {step === 1 && "Which degree are you interested in?"}
                {step === 2 && "Which course would you like to pursue?"}
                {step === 3 && "Do you have a specific specialization in mind?"}
                {step === 4 && "How many hours per week can you dedicate to studying?"}
                {step === 5 && "What percentage did you score in your last qualification?"}
                {step === 6 && "Choose the average fee you are willing to pay."}
                {step === 7 && "Would you prefer EMI or Installment payment options?"}
                {step === 8 && "Do you want universities that provide placement and career services?"}
                {step === 9 && "Do you belong to any of the following categories (for scholarship eligibility)?"}
              </h2>

              {/* Search Bar (Only for Step 2 and 3) */}
              {(step === 2 || step === 3) && (
                <div className="max-w-md mx-auto mb-8 ">
                  <div className="relative bg-white flex rounded-lg border items-center border-[#CECECE] focus:outline-none focus:border-red-500">
                    <input
                      type="text"
                      placeholder={step === 2 ? "Search for course..." : "Search for specialization..."}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-8 pr-4 py-1 text-[14px] rounded-lg"
                    />
                    <div className="absolute left-2 top-1.5">
                       <Image src="/images/search.svg" width={15} height={15} alt="search"/>
                    </div>
                  </div>
                </div>
              )}

              {/* GRID CONTAINER */}
              <div className="  ">
              <div className={`grid gap-3 mb-5 justify-items-center 
                ${(step === 7 || step === 8) ? 'grid-cols-2 max-w-sm mx-auto' : ''} 
                ${(step !== 7 && step !== 8) ? 'grid-cols-2 md:grid-cols-3 xl:grid-cols-4' : ''}
              `}>
                
                {/* Special "Not Decided" Option for Step 3 */}
                {step === 3 && (
                  <OptionCard
                    key="not_decided"
                    title="Not decided yet"
             
                    isActive={selectedSpec === "not_decided"}
                    onClick={() => setSelectedSpec("not_decided")}
                  />
                )}

                {/* Render Dynamic Items */}
                {currentItems.map((item) => {
                  let isActive = false;
                  
                  if (step === 1) isActive = selectedDegree === item.id;
                  if (step === 2) isActive = selectedCourse === item.id;
                  if (step === 3) isActive = selectedSpec === item.id;
                  if (step === 4) isActive = studyHours === item.id;
                  if (step === 5) isActive = scorePercentage === item.id;
                  if (step === 6) isActive = avgFee === item.id;
                  if (step === 7) isActive = emiPref === item.id;
                  if (step === 8) isActive = placementPref === item.id;
                  if (step === 9) isActive = scholarshipCat === item.id;

                  return (
                    <OptionCard
                      key={item.id}
                      title={item.title}
                      image={item.image || null}
                      isActive={isActive}
                      onClick={() => {
                        if (step === 1) setSelectedDegree(item.id);
                        if (step === 2) setSelectedCourse(item.id);
                        if (step === 3) setSelectedSpec(item.id);
                        if (step === 4) setStudyHours(item.id);
                        if (step === 5) setScorePercentage(item.id);
                        if (step === 6) setAvgFee(item.id);
                        if (step === 7) setEmiPref(item.id);
                        if (step === 8) setPlacementPref(item.id);
                        if (step === 9) setScholarshipCat(item.id);
                      }}
                    />
                  );
                })}
              </div>
              </div>

              {/* FOOTER BUTTONS */}
          <div className="w-full mt-8 px-4 flex flex-col md:flex-row justify-center gap-4 items-center font-poppins">
  {/* Back Button */}
  {step > 1 ? (
    <button
      onClick={handleBack}
      className="w-full md:w-auto px-20 py-2 rounded-md border border-gray-300 text-gray-600 font-[400] hover:bg-gray-50 bg-white transition-all"
    >
      Back
    </button>
  ) : (
    // Optional: Keep a placeholder div if you want the Next button to always stay on the right side
    // otherwise, you can remove this empty div.
    <div className="hidden md:block w-0"></div> 
  )}

  {/* Next/Submit Button */}
  <button
    onClick={handleNext}
    disabled={
      (step === 1 && !selectedDegree) ||
      (step === 2 && !selectedCourse) ||
      (step === 3 && !selectedSpec) ||
      (step === 4 && !studyHours) ||
      (step === 5 && !scorePercentage) ||
      (step === 6 && !avgFee) ||
      (step === 7 && !emiPref) ||
      (step === 8 && !placementPref) ||
      (step === 9 && !scholarshipCat)
    }
    className={`
      w-full md:w-auto px-20 py-2 rounded-md font-bold text-white transition-all
      ${
        (step === 1 && selectedDegree) ||
        (step === 2 && selectedCourse) ||
        (step === 3 && selectedSpec) ||
        (step === 4 && studyHours) ||
        (step === 5 && scorePercentage) ||
        (step === 6 && avgFee) ||
        (step === 7 && emiPref) ||
        (step === 8 && placementPref) ||
        (step === 9 && scholarshipCat)
          ? "bg-gradient-to-t from-[#B91217] to-[#EC1E24] hover:bg-red-700 shadow-lg shadow-red-700"
          : "bg-gray-300 cursor-not-allowed"
      }
    `}
  >
    {step === 9 ? "Submit" : "Next"}
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