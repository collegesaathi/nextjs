import React, { useState,useRef } from "react";

import Layout from "../components/Layout";
import Link from "next/link";
import { Search, ChevronRight, ChevronLeft, XCircle,ChevronDown } from "lucide-react";
import StarRating from "@/common/Rating";
import BestPartnerCount from "../home/BestPartnerCount";
import ExploreUniversities from "../home/ExploreUniversities";
import Confusion from "../home/Confusion";
import { useRouter } from "next/router";

// import { fetchComparisonDetails } from "@/lib/ssrFetch";


const comparisonData = {
  approvals: {
    show: true,
    
    nirf: ["21", "73", "151"],
     icons: [
      ["/icons/UGCLogo.svg", "/icons/deb.svg", "/icons/deb.svg", "/icons/aprovallogo.svg", "/icons/aprovallogo.svg", "/icons/aprovallogo.svg"], // Uni 1
      ["/icons/aprovallogo.svg","/icons/deb.svg", "/icons/aprovallogo.svg", "/icons/aprovallogo.svg"],                   
  ["/icons/aprovallogo.svg", "/icons/deb.svg", "/icons/aprovallogo.svg", "/icons/aprovallogo.svg"],                  
    ]
  },

  duration: {
    show: true,
    timeFrame: ["2 Years", "2 Years", "1 Year"],
    mode: ["Online", "Online", "Online"]
  },

  fees: {
    show: true,
    total: ["1,96,000", "1,75,000", "1,50,000"],
    semester: ["55,000", "43,750", "45,000"]
  },
  placement: {
    show: true,
    value: [true, true, true],

  },

  eligibility: {
    show: true,

    qualification: [
      "Bachelor’s Degree (10+2+3) inany discipline from recognised University or an equivalent degree recognised by Association of Indian Universities (AIU).",
      "Candidates must have a 10 + 2 + 3-year bachelor’s degree from a recognizeduniversity/institution or anequivalent qualification asrecognized by the Association of Indian Universities.  ",
      "Bachelor's degree in any discipline from a recognized university."

    ],
    grades: [
      "Bachelor’s Degree (10+2+3) inany discipline from resociation of Indian Universities (AIU).",
      "Candidates must have a 10 + 2 + 3-year anequivalent qualification asrecognized by the Association of Indian Universities.  ",
      "Bachelor's degree in any discipline from a recognized university."

    ],
    exam: [false, false, false],
    experience: [false, false, true]
  },



  ratings: {
    show: true,
    student: [4.0, 3.8, 4.2],
    satisfaction: [80, 76, 92]
  },
  curriculum: {
    show: true,
    credit: ["102", "90", "72"],
    values: [true, true, true]

  },

  finance: {
    show: true,

    scholarships: [true, false, true],
    emiloan: [true, true, false]

  },
  examination: {
    show: true,
    examsyear: [
      "June & December",
      "April/May & November/December",
      "May/June & November/December"
    ],
    flexibilitydate: [true, true, false],
    flexibilitytime: [false, true, true],
    examinationfee: ["Excluded", "Included", "Excluded"],
    Convocation: [true, true, true]
  }
};



const tabList = [
  { id: "approvals", title: "Approvals & Rankings" },
  { id: "duration", title: "Duration & Mode" },
  { id: "fees", title: "Fees Structure" },
  { id: "finance", title: "Financial Aid" },
  { id: "placement", title: "Placement" },

  { id: "eligibility", title: "Eligibility" },

  { id: "curriculum", title: "Curriculum" },
  { id: "examination", title: "Examination" },
  { id: "ratings", title: "Ratings" },
];




const ScoreCircle = ({ score }) => (
  <div className="relative flex items-center justify-center w-12 h-12 md:w-26 md:h-26 my-2">
    <svg className="w-full h-full transform -rotate-90">
      <circle cx="50%" cy="50%" r="40%" stroke="#E5E7EB" strokeWidth="12" fill="transparent" />
      <circle cx="50%" cy="50%" r="40%" stroke="#22C55E" strokeWidth="12" fill="transparent"
        strokeDasharray="100" strokeDashoffset={100 - (score * 10)} strokeLinecap="round" />
    </svg>
    <span className="absolute text-[10px] bg-[#F1F1F1] p-2 rounded-full border border-[#E2E2E3] md:text-[14px] font-[600] text-[#282529]">{score}</span>
  </div>
);

const ApprovalIcons = ({ icons }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (!icons) return null;
  
  const initialIcons = icons.slice(0, 3);
  const extraIcons = icons.slice(3);

  return (
    <div className="flex flex-col items-center py-3 w-full">
      {/* Overlapping Icons (First 3) */}
      <div className="flex -space-x-3 mb-2">
        {initialIcons.map((iconPath, index) => (
          <div 
            key={index} 
            className="w-6 h-6 md:w-10 md:h-10 bg-white border border-gray-200 rounded-full p-1.5 shadow-sm flex items-center justify-center z-[1]"
          >
            <img 
              src={iconPath} 
              alt="approval" 
              className="w-full h-full object-contain" 
              onError={(e) => e.target.src = "/icons/default-approval.svg"} 
            />
          </div>
        ))}
      </div>

      {/* Extra Icons (Shown on Expand) */}
      {extraIcons.length > 0 && (
        <>
          <div className={`flex flex-wrap justify-center gap-2 overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
            {extraIcons.map((iconPath, index) => (
              <div key={index} className="w-8 h-8 bg-white border border-gray-100 rounded-full p-1 shadow-sm flex items-center justify-center">
                <img src={iconPath} alt="extra-approval" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>

          {/* Toggle Arrow */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-1 hover:scale-110 transition-transform"
          >
            <ChevronDown 
                className={`w-4 h-4 text-[#EC1E24] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
                strokeWidth={3} 
            />
          </button>
        </>
      )}
    </div>
  );
};

const SatisfactionGauge = ({ percentage }) => (
  <div className="relative w-16 h-12 md:w-30 md:h-15 overflow-hidden">
    <svg viewBox="0 0 100 50" className="w-full h-full">
      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#E5E7EB" strokeWidth="8" />
      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#22C55E" strokeWidth="8"
        strokeDasharray="126" strokeDashoffset={126 - (percentage / 100) * 126} />
    </svg>
    <div className="absolute bottom-0 w-full text-center text-[12px] md:text-[16px]  text-[#282529]">{percentage}%</div>
  </div>
);



const RowWrapper = ({ label, children, isPink = false, highlight = false }) => (
  <div className={highlight ? "border-2 border-red-400 rounded-lg overflow-hidden my-2" : ""}>
    {/* Mobile Label */}
    <div className={`md:hidden ${isPink ? "bg-[#FFF2F2]" : "md:bg-white"} py-1 md:py-2 text-center text-[11px] font-[600] bg-[#FFF2F2] uppercase border-y border-red-50`}>
      {label}
    </div>
    {/* Content Grid */}
    <div className={`grid grid-cols-3 md:grid-cols-4 shadow-md  ${isPink ? "bg-[#FFF2F2]" : "bg-white"}`}>
      <div className="hidden md:flex md:p-6 text-sm font-[600] text-[#282529] border-r items-center" style={{
       borderImage: "linear-gradient(180deg, rgba(206, 203, 203, 0) 0%, #cac2c2ff 47%, rgba(173, 170, 170, 0) 80%) 1"
      }}>
        {label}
      </div>
      {children}
    </div>
  </div>
);

const DataCell = ({ children }) => (
  <div className=" flex items-center  py-1 justify-center border-r last:border-0 bg-white md:bg-transparent min-h-[20px]  text-center"
    style={{
      borderImage: "linear-gradient(180deg, rgba(206, 203, 203, 0) 0%, #cac2c2ff 47%, rgba(173, 170, 170, 0) 80%) 1"
    }}>
    {children}
  </div>
);



const ApprovalRow = ({ isPink,data }) => (
  <RowWrapper label="Approvals" isPink={isPink}>
   {data.icons.map((uniIcons, i) => (
      <DataCell key={i}>
        <ApprovalIcons icons={uniIcons} nirfRank={data.nirf[i]} />
      </DataCell>
    ))}
  </RowWrapper>
);

const TextRow = ({ label, values, isPink }) => (
  <RowWrapper label={label} isPink={isPink}>
    {values.map((v, i) => <DataCell key={i}><span className="text-[10px] md:text-[16px] font-poppins leading-[27px]">{v}</span></DataCell>)}
  </RowWrapper>
);

const StatusRow = ({ label, values, isPink }) => (
  <RowWrapper label={label} isPink={isPink}>
    {values.map((v, i) => (
      <DataCell key={i}>
        <div className="flex items-center py-2 gap-1.5">
          <div className="w-2 h-2 rounded-full  bg-gradient-to-b from-[#A6FF38] to-[#1DBF20]   animate-[softPulse_1.5s_ease-in-out_infinite]"></div>
          <span className="text-[10px] md:text-[16px] ">{v}</span>
        </div>
      </DataCell>
    ))}
  </RowWrapper>
);

const PriceRow = ({ label, values, isPink }) => (
  <RowWrapper label={label} isPink={isPink}>
    {values.map((v, i) => (
      <DataCell key={i}>
        <div className="flex items-center gap-1 py-2 text-[10px] md:text-[16px] ">
          <img src="/images/money.svg" className=" w-3 h-3 md:w-4 md:h-4 object-cover" alt="fee" />
          <span className="">₹ {v}</span>
        </div>
      </DataCell>
    ))}
  </RowWrapper>
);

const BooleanRow = ({ label, values, isPink, highlight }) => (
  <RowWrapper label={label} isPink={isPink} >
    {values.map((v, i) => (
      <DataCell key={i}>
        <img src={v ? "/images/comaparetick.png" : "/images/cross.png"} alt="icon" className=" w-3 h-3 md:w-5 md:h-5" />
      </DataCell>
    ))}
  </RowWrapper>
);

const EligibilityRow = ({ label, details = [], isPink, activeDetail, onToggle }) => (
  <>
    <RowWrapper label={label} isPink={isPink}>
      {details.map((_, i) => (
        <DataCell key={i}>
          <div
           onClick={() => onToggle(activeDetail === label ? null : label)}
            className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-70"
          >
            <img src="/images/view_file.svg" className="w-4 md:w-6  object-cover" alt="view" />
            <span className="text-[8px] font-bold underline text-red-400 uppercase">
              {activeDetail === label ? "Hide" : "View"}
            </span>
          </div>
        </DataCell>
      ))}
    </RowWrapper>

    {activeDetail === label && (
      <div className="grid grid-cols-3 md:grid-cols-4 bg-[#F8F8F8] border-b border-gray-100">
        <div className="hidden md:block border-gray-200" />
        {details.map((text, i) => (
          <div
            key={i}
            className="p-4 md:p-8 text-center text-[10px] md:text-[12px] text-gray-500 italic"
          >
            {text}
          </div>
        ))}
      </div>
    )}
  </>
);

const Curriculum = ({ label, values = [], isPink }) => (
  <>
    <RowWrapper label={label} isPink={isPink}>
      {values?.map((item, i) => (
        <DataCell key={i}>
          {item && (
            <div className="flex flex-col items-center  ">
              <img src="/images/pdf_file.svg" className="w-5 h-5 md:w-10 md:h-10 object-cover" alt="view" />

            </div>
          )}
        </DataCell>
      ))}
    </RowWrapper>
  </>
);



const RatingRow = ({ label, values, isPink, type }) => (
  <RowWrapper label={label} isPink={isPink}>
    {values.map((v, i) => (
      <DataCell key={i}>
        {type === "stars" ? (
          <div className="flex flex-col items-center ">
            <StarRating rating={v} />
            <span className="text-[16px] mt-1">{v.toFixed(1)}</span>
          </div>
        ) : (
          <SatisfactionGauge percentage={v} />
        )}
      </DataCell>
    ))}
  </RowWrapper>
);



export default function Compare({ compareData }) {
  const [activeDetail, setActiveDetail] = useState(null);
  const [activeSection, setActiveSection] = useState("approvals");
   const [isExpanded, setIsExpanded] = useState(false);

  const universities = [
    { id: 1, name: "NMIMS CDOE", logo: "/images/compare/unilogo.png", score: 9.8 },
    { id: 2, name: "MANIPAL ONLINE", logo: "/images/compare/unilogo.png", score: 9.2 },
    { id: 3, name: "OP JINDAL GLOBAL", logo: "/images/compare/unilogo.png", score: 8.9 },
  ];

  const orderedSectionIds = [
    activeSection,
    ...tabList.map((s) => s.id).filter((id) => id !== activeSection),
  ];

  const router = useRouter()
  const { slug } = router.query


  const scrollRef = useRef(null);

const scroll = (direction) => {
  if (scrollRef.current) {
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollTo = direction === "left" 
      ? scrollLeft - 200 
      : scrollLeft + 200;
    
    scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  }
};


  const renderSectionContent = (id) => {
    switch (id) {
      case "approvals":
        return comparisonData?.approvals?.show && (
          <>
            <div className="mt-4">
              <p className="hidden md:block px-6 py-2 text-[16px] font-poppins font-[400] text-[#282529] leading-[27px]">
                APPROVALS & RANKINGS
              </p>
            </div>

         <ApprovalRow 
        data={comparisonData.approvals} 
        isPink={false} 
      />

            {comparisonData.approvals?.nirf && (
              <TextRow
                label="NIRF Ranking"
                values={comparisonData.approvals.nirf}
                isPink={true}
              />
            )}
          </>
        );
      case "duration":
        return comparisonData?.duration?.show && (
          <>
            <div className="md:mt-4">
              <p className="hidden md:block px-6 py-2 text-[16px] font-poppins font-[400] text-[#282529] leading-[27px]">
                DURATION & MODE
              </p>
            </div>

            {comparisonData.duration?.timeFrame && (
              <TextRow
                label="Time Frame"
                values={comparisonData.duration.timeFrame}
                isPink={false}
              />
            )}

            {comparisonData.duration?.mode && (
              <StatusRow
                label="Mode of Education"
                values={comparisonData.duration.mode}
                isPink={true}
              />
            )}
          </>
        )
      case "fees":
        return comparisonData?.fees?.show && (
          <>
            <div className="md:mt-4">
              <p className="hidden md:block px-6 py-2 text-[16px] font-poppins font-[400]  text-[#282529] leading-[27px]">
                FEE STRUCTURE
              </p>
            </div>

            {comparisonData.fees?.total && (
              <PriceRow
                label="Total Program Fee"
                values={comparisonData.fees.total}
                isPink={false}
              />
            )}

            {comparisonData.fees?.semester && (
              <PriceRow
                label="Per Semester Fee"
                values={comparisonData.fees.semester}
                isPink={true}
              />
            )}
          </>
        )
      case "eligibility":
        return comparisonData?.eligibility?.show && (
          <>
            <div className="md:mt-4">
              <p className="hidden md:block px-6 py-2 text-[16px] font-poppins font-[400] text-[#282529] leading-[27px]">
                ELIGIBILITY CRITERIA
              </p>
            </div>

            {comparisonData?.eligibility?.qualification?.length > 0 && (
              <EligibilityRow
                label="Educational Qualifications"
                details={comparisonData.eligibility.qualification}
                isPink={false}
                activeDetail={activeDetail}
                onToggle={setActiveDetail}
              />
            )}

            {comparisonData?.eligibility?.grades?.length > 0 && (
              <EligibilityRow
                label="Minimum Grades"
                details={comparisonData.eligibility.grades}
                isPink={true}
                activeDetail={activeDetail}
                onToggle={setActiveDetail}
              />
            )}

            {comparisonData?.eligibility?.exam && (
              <>
                <BooleanRow
                  label="Work Experience Requirement"
                  values={comparisonData.eligibility.experience}
                  isPink={false}
                />
                <BooleanRow
                  label="Work Experience Requirement"
                  values={comparisonData.eligibility.exam}
                  isPink={true}
                />

              </>
            )}

          </>
        )
      case "finance":
        return comparisonData?.finance?.show && (
          <>
            <div className="md:mt-4">
              <p className="hidden md:block px-6 py-2 text-[16px] font-poppins font-[400] text-[#282529] leading-[27px]">
                FINANCIAL AID
              </p>
            </div>

            {comparisonData.finance?.scholarships && (
              <BooleanRow
                label="Scholarships"
                values={comparisonData.finance.scholarships}
                isPink={false}
              />
            )}

            {comparisonData.finance?.emiloan && (
              <BooleanRow
                label="EMI / Loan"
                values={comparisonData.finance.emiloan}
                isPink={true}
              />
            )}
          </>
        )
      case "placement":
        return comparisonData?.placement?.show && (
          <>
            <div className="md:mt-4"><p className="hidden md:block px-6 py-2 text-[16px] font-poppins font-[400] text-[#282529] leading-[27px]">Placement and Hiring Partners</p>
              <BooleanRow label="Placement Partners" values={comparisonData.placement.value} />

            </div>
          </>

        )
      case "curriculum":
        return comparisonData?.curriculum.show && (
          <>

            <div className="md:mt-4">
              <p className="hidden md:block px-6 py-2 text-[16px] font-poppins font-[400] text-[#282529] leading-[27px]">
                Course Curriculum
              </p>
            </div>


            <Curriculum
              label="Syllabus"
              values={comparisonData.curriculum.values}
              isPink={false}
            />
            <TextRow
              label="Credits"
              values={comparisonData.curriculum.credit}
              isPink={true} />
          </>


        )
      case "examination":
        return comparisonData?.examination.show && (
          <>
            <div className="md:mt-4">
              <p className="hidden md:block px-6 py-2 text-[16px] font-poppins font-[400] text-[#282529] leading-[27px]">
                Examination
              </p>
            </div>
            <TextRow
              label="Exams in a year"
              values={comparisonData.examination.examsyear}
              isPink={false} />
            <BooleanRow
              label="Flexibility to select exam date"
              values={comparisonData.examination.flexibilitydate}
              isPink={true} />
            <BooleanRow
              label="Flexibility to select exam time"
              values={comparisonData.examination.flexibilitytime}
              isPink={false} />
            <TextRow
              label="Examination Fee"
              values={comparisonData.examination.examinationfee}
              isPink={true} />
            <BooleanRow
              label="Convocation"
              values={comparisonData.examination.Convocation}
              isPink={false} />

          </>

        )
      case "ratings":
        return comparisonData?.ratings?.show && (
          <>
            <div className="md:mt-4">
              <p className="hidden md:block px-6 py-2 text-[16px] font-poppins font-[400] text-[#282529] leading-[27px]">
                RATINGS
              </p>
            </div>

            {comparisonData.ratings?.student && (
              <RatingRow
                label="Student Rankings"
                values={comparisonData.ratings.student}
                isPink={false}
                type="stars"
              />
            )}

            {comparisonData.ratings?.satisfaction && (
              <RatingRow
                label="Satisfaction Rate"
                values={comparisonData.ratings.satisfaction}
                isPink={true}
                type="gauge"
              />
            )}
          </>
        )

    }
  }




  return (
    <Layout>
      <div className="mx-auto container xl:max-w-[1280px] px-2 md:px-4 py-6 md:mt-24 font-poppins">

        {/* Header Logic (Search/Tabs) */}
        <div className="flex items-center justify-end text-[#282529] md:mt-3 lg:mt-8 mb-4 gap-3 font-semibold cursor-pointer text-xs md:text-sm">
          <div className="bg-[#EFF3F6] rounded p-0.5"><ChevronRight size={18} color="#EC1E24" /></div>
          Get insights of your perfect university!
        </div>






        <div className="md:py-6">



          <div className="bg-[#F9FAFB]  py-4 md:p-4 border-[1px] border-[#CECECE] rounded-[16px]">

            {/* --- HEADER TITLE --- */}
            <div className="flex flex-row justify-between items-center px-2  mb-6">
              <div className="px-2 md:px-0 ">
                <h1 className="text-[14px] md:text-[24px] font-[600] items-center font-poppins  text-[#282529]">
                  Choose criteria to filter
                </h1>
              </div>


              <div className="block bg-white md:hidden items-center relative w-30">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-8 pr-4 py-1.5 text-[11px] md:text-xs border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                />
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2" />
              </div>

            </div>

            {/* --- FILTER BAR & SEARCH --- */}
         <div className="p-2 flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
    
    {/* Scrollable Tabs Wrapper */}
    <div className="relative flex items-center w-full md:max-w-[700px] group">
      
      {/* Left Arrow */}
      <button 
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 bg-white shadow-md rounded-full p-1.5 border border-gray-100 hover:bg-gray-50 md:flex items-center justify-center"
      >
        <ChevronLeft size={18} className="text-[#EC1E24]" />
      </button>

      {/* Tabs Container */}
      <div 
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth px-10 w-full"
      >
        {tabList.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveSection(tab.id);
              setActiveDetail(null);
            }}
            className={`px-6 py-2 rounded-full text-[11px] md:text-xs font-medium whitespace-nowrap transition-all shrink-0
              ${activeSection === tab.id
                ? "bg-[#EC1E24] text-white shadow-md"
                : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Right Arrow */}
      <button 
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 bg-white shadow-md rounded-full p-1.5 border border-gray-100 hover:bg-gray-50 md:flex items-center justify-center"
      >
        <ChevronRight size={18} className="text-[#282529]" />
      </button>
    </div>

    {/* Search Box */}
    <div className="hidden md:block relative w-full md:w-64 bg-white">
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-8 pr-4 py-1.5 text-xs border border-gray-300 rounded-[8px] focus:outline-none focus:border-red-500"
      />
      <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2" />
    </div>

  </div>





            {/* Top Comparison Header */}
            <div className="grid grid-cols-3 md:grid-cols-4 bg-white rounded-t-xl overflow-hidden">
              <div className="hidden md:flex md:p-1 items-center justify-center border-r "
                style={{
               borderImage: "linear-gradient(180deg, rgba(206, 203, 203, 0) 0%, #cac2c2ff 47%, rgba(173, 170, 170, 0) 80%) 1"
                }}>
                <button className="bg-[#EC1E24] text-white px-8 py-2.5 rounded-md text-xs font-bold uppercase shadow-lg">Attributes</button>
              </div>
              {compareData?.data?.universities.map((uni) => (
                <div key={uni.id} className="p-1 py-5 md:py-6  md:p-4 flex flex-col items-center border-r last:border-0  relative"
                  style={{
                 borderImage: "linear-gradient(180deg, rgba(206, 203, 203, 0) 0%, #cac2c2ff 47%, rgba(173, 170, 170, 0) 80%) 1"
                  }}>
                  <XCircle className="absolute top-0 right-1 md:top-2 md:right-2 text-[#B5B4B4] cursor-pointer w-3 h-3 md:w-6 h-6" />
                  <img src={uni.icon} className="h-8 md:h-12 object-contain mb-2" alt={uni.icon_alt} />
                  <p className="text-[10px] md:text-[16px]  text-center uppercase truncate w-full">{uni.name}</p>
                  <ScoreCircle score={uni.score} />
                  <Link
                    href={`/university/${uni?.slug}`}
                    className="mt-2 w-full bg-[#EC1E24] text-white text-[10px] md:text-[14px] text-center  md:py-1.5 rounded uppercase">View University</Link>
                </div>
              ))}
            </div>

            <div>

            </div>

            {orderedSectionIds.map((id) => (
              <div key={id} className={id === activeSection ? "" : ""}>
                {renderSectionContent(id)}
              </div>
            ))}





          </div>
        </div>
      </div>


      <BestPartnerCount />
      <ExploreUniversities />
      {/* <Confusion /> */}
    </Layout>
  );
}


// export async function getServerSideProps(context) {
//     return await fetchComparisonDetails(context);
// }
