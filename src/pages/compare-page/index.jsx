import React, { useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { Search, ChevronRight, ChevronLeft, XCircle } from "lucide-react";
import StarRating from "@/common/Rating";
import BestPartnerCount from "../home/BestPartnerCount";
import ExploreUniversities from "../home/ExploreUniversities";
import Confusion from "../home/Confusion";


const comparisonData = {
  approvals: {
    show: true,
    nirf: ["21", "73", "151"]
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
    value: [true,true,true],

  },

  eligibility: {
    show: true,
  
    qualification:[
       "Bachelor’s Degree (10+2+3) inany discipline from recognised University or an equivalent degree recognised by Association of Indian Universities (AIU).",
      "Candidates must have a 10 + 2 + 3-year bachelor’s degree from a recognizeduniversity/institution or anequivalent qualification asrecognized by the Association of Indian Universities.  ",
      "Bachelor's degree in any discipline from a recognized university."

    ],
    grades:[
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
 curriculum:{
    show:true,
    credit:["102","90","72"],
    values:[true,true,true]
  
  },

  finance:{
    show:true,

    scholarships:[true, false ,true],
    emiloan:[true ,true ,false]

  },
  examination:{
    show:true,
    examsyear:[
      "June & December",
      "April/May & November/December",
      "May/June & November/December"
    ],
    flexibilitydate:[true,true,false],
     flexibilitytime:[false,true,true],
      examinationfee:["Excluded","Included","Excluded"],
      Convocation:[true,true,true]
  }
};



const tabList = [
  { id: "approvals", title: "Approvals & Rankings" },
  { id: "duration", title: "Duration & Mode" },
  { id: "fees", title: "Fees Structure" },
      { id: "finance", title: "finance" },
  { id: "placement", title: "placement" },

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

const ApprovalIcons = () => (
  <div className="flex flex-col items-center">
    <div className="flex items-center -space-x-1.5 mb-1">
      {[1, 2, 3].map((i) => (
        <div key={i} className={`w-6 h-6 md:w-8 md:h-8 rounded-full border border-white shadow-sm bg-white overflow-hidden flex items-center justify-center ${i===2 ? 'z-10 w-7 h-7 md:w-9 md:h-9' : ''}`}>
          <img src="/images/comparelogo.png" alt="logo" className="w-[80%] h-[80%] object-contain" />
        </div>
      ))}
    </div>
    <ChevronRight className="w-4 h-4 text-[#EC1E24] rotate-90" strokeWidth={3} />
  </div>
);

const SatisfactionGauge = ({ percentage }) => (
  <div className="relative w-16 h-12 md:w-30 md:h-15 overflow-hidden">
    <svg viewBox="0 0 100 50" className="w-full h-full">
      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#E5E7EB" strokeWidth="12" />
      <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#22C55E" strokeWidth="12" 
            strokeDasharray="126" strokeDashoffset={126 - (percentage / 100) * 126} />
    </svg>
    <div className="absolute bottom-0 w-full text-center text-[12px] md:text-[16px]  text-[#282529]">{percentage}%</div>
  </div>
);



const RowWrapper = ({ label, children, isPink = false, highlight = false }) => (
  <div className={highlight ? "border-2 border-red-400 rounded-lg overflow-hidden my-2" : ""}>
    {/* Mobile Label */}
    <div className={`md:hidden ${isPink ? "bg-[#FFF2F2]" : "md:bg-white"} py-1 md:py-2 text-center text-[12px] font-bold bg-[#FFF2F2] uppercase border-y border-red-50`}>
      {label}
    </div>
    {/* Content Grid */}
    <div className={`grid grid-cols-3 md:grid-cols-4 shadow-md  ${isPink ? "bg-[#FFF2F2]" : "bg-white"}`}>
      <div className="hidden md:flex md:p-6 text-sm font-bold text-gray-700 border-r items-center" style={{
    borderImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #8b8b8b 47%, rgba(255,255,255,0) 80%) 1"
  }}>
        {label}
      </div>
      {children}
    </div>
  </div>
);

const DataCell = ({ children }) => (
  <div className="md:p-4 flex items-center py-2 justify-center border-r last:border-0 bg-white md:bg-transparent md:min-h-[70px]  text-center"
  style={{
    borderImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #8b8b8b 47%, rgba(255,255,255,0) 80%) 1"
  }}>
    {children}
  </div>
);



const ApprovalRow = ({ isPink }) => (
  <RowWrapper label="Approvals" isPink={isPink}>
    {[1, 2, 3].map((i) => <DataCell key={i}><ApprovalIcons /></DataCell>)}
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
          <div className="w-2 h-2 rounded-full  bg-gradient-to-b from-[#A6FF38] to-[#1DBF20]"></div>
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
            onClick={() => onToggle(label)}
            className="flex flex-col items-center cursor-pointer hover:opacity-70"
          >
            <img src="/images/viewfile.png" className=" w-4 h-4 md:w-7 md:h-7 object-cover" alt="view" />
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
              <img src="/images/pdf.png" className="w-5 h-5 md:w-10 md:h-10 object-cover" alt="view" />
           
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



export default function Compare() {
  const [activeDetail, setActiveDetail] = useState(null);
  const [activeSection, setActiveSection] = useState("approvals");

  const universities = [
    { id: 1, name: "NMIMS CDOE", logo: "/images/compare/unilogo.png", score: 9.8 },
    { id: 2, name: "MANIPAL ONLINE", logo: "/images/compare/unilogo.png", score: 9.2 },
    { id: 3, name: "OP JINDAL GLOBAL", logo: "/images/compare/unilogo.png", score: 8.9 },
  ];

  const orderedSectionIds = [
    activeSection,
    ...tabList.map((s) => s.id).filter((id) => id !== activeSection),
  ];



  const renderSectionContent =(id)=>{
    switch(id){
      case "approvals":
        return  comparisonData?.approvals?.show && (
  <>
    <div className="mt-4">
      <p className="hidden md:block px-6 py-2 text-[16px] font-poppins font-[400] text-[#282529] leading-[27px]">
        APPROVALS & RANKINGS
      </p>
    </div>

    <ApprovalRow isPink={false} />

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
case"eligibility":
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
        isPink={true}/>
  </>


)
case "examination":
return comparisonData?.examination.show &&(
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
    isPink={true}/>
         <BooleanRow 
          label="Flexibility to select exam time"
    values={comparisonData.examination.flexibilitytime}
    isPink={false}/>
      <TextRow
     label="Examination Fee"
        values={comparisonData.examination.examinationfee}
        isPink={true} />
         <BooleanRow 
          label="Convocation"
    values={comparisonData.examination.Convocation}
    isPink={false}/>
    
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
        <div className="flex items-center justify-end text-[#282529] mb-4 gap-3 font-semibold cursor-pointer text-xs md:text-sm">
           <div className="bg-[#EFF3F6] rounded p-0.5"><ChevronRight size={18} color="#EC1E24" /></div>
           Get insights of your perfect university!
        </div>

     




 <div className="md:py-6">
                


                    <div className="bg-[#F9FAFB]  py-4 md:p-4 border-[1px] border-[#CECECE] rounded-[16px]">

                         {/* --- HEADER TITLE --- */}
                         <div className="flex flex-row justify-between items-center  mb-6">
                             <div className="px-2 md:px-0 ">
                                <h1 className="text-[14px] md:text-[24px] font-[600] items-center font-poppins  text-[#282529]">
                                     Choose criteria to filter
                                 </h1>
                             </div>


                             <div className="block bg-white md:hidden relative w-20">
                                <input
                                     type="text"
                                     placeholder="Search"
                                     className="w-full pl-6 pr-4 py-1.5 text-[10px] md:text-xs border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                                 />
                                 <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2" />
                             </div>

                         </div>

                         {/* --- FILTER BAR & SEARCH --- */}
                  <div className="p-2 flex flex-col md:flex-row items-center justify-between gap-4 mb-8">

  {/* Scrollable Tabs */}
  <div className="w-full md:w-auto overflow-x-auto no-scrollbar max-w-[500px]">
    <div className="flex gap-2 w-max px-2">
      {tabList.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            setActiveSection(tab.id);
            setActiveDetail(null);
          }}
          className={`px-6 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all
            ${activeSection === tab.id
              ? "bg-[#EC1E24] text-white shadow-md"
              : "bg-white text-gray-500 border"}`}
        >
          {tab.title}
        </button>
      ))}
    </div>
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
            <div className="hidden md:flex md:p-6 items-center justify-center border-r "
            style={{
    borderImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #8b8b8b 47%, rgba(255,255,255,0) 80%) 1"
  }}>
              <button className="bg-[#EC1E24] text-white px-8 py-2.5 rounded-md text-xs font-bold uppercase shadow-lg">Attributes</button>
            </div>
            {universities.map((uni) => (
              <div key={uni.id} className="p-1 py-5 md:py-6  md:p-4 flex flex-col items-center border-r last:border-0  relative"
              style={{
    borderImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #8b8b8b 47%, rgba(255,255,255,0) 80%) 1"
  }}>
                <XCircle className="absolute top-0 right-1 md:top-2 md:right-2 text-[#B5B4B4] cursor-pointer w-3 h-3 md:w-6 h-6"  />
                <img src={uni.logo} className="h-8 md:h-12 object-contain mb-2" alt="logo" />
                <p className="text-[10px] md:text-[16px]  text-center uppercase truncate w-full">{uni.name}</p>
                <ScoreCircle score={uni.score} />
                <button className="mt-2 w-full bg-[#EC1E24] text-white text-[10px] md:text-[14px]  md:py-1.5 rounded uppercase">View University</button>
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
      <Confusion />
    </Layout>
  );
}



// import React, { useState } from "react";
// import Layout from "../components/Layout";
// import Image from "next/image";
// import Link from "next/link";
// import {
//     Search,
//     ChevronRight,
//     ChevronLeft,
//     CheckCircle2,
//     XCircle,
//     FileText,
//     X
// } from "lucide-react";
// import ExploreUniversities from "../home/ExploreUniversities";
// import BestPartnerCount from "../home/BestPartnerCount";
// import Confusion from "../home/Confusion";
// import StarRating from "@/common/Rating";



//   const rankingData = [21, 73, 151];

// // --- MOCK DATA FOR COMPARISON ---
// const universities = [
//     {
//         id: 1,
//         name: "NMIMS CDOE",
//         logo: "/images/compare/unilogo.png", // Replace with actual path
//         score: 9.8,
//         reviews: 400,
//     },
//     {
//         id: 2,
//         name: "MANIPAL UNIVERSITY ONLINE",
//         logo: "/images/compare/unilogo.png", // Replace with actual path
//         score: 9.2,
//         reviews: 350,
//     },
//     {
//         id: 3,
//         name: "OP JINDAL GLOBAL UNIVERSITY",
//         logo: "/images/compare/unilogo.png", // Replace with actual path
//         score: 8.9,
//         reviews: 120,
//     },
// ];

// const comparisonSections = [
//     {
//         title: "Approvals & Rankings",
//         rows: [
//             {
//                 label: "Approvals",
//                 type: "approval_icon", // Custom renderer
//                 values: ["View", "View", "View"],
//             },
//             {
//                 label: "NIRF Ranking",
//                 type: "text",
//                 values: ["21", "73", "151"],
//             },
//         ],
//     },
//     {
//         title: "Duration & Mode",
//         rows: [
//             { label: "Time frame", type: "text", values: ["2 years", "2 years", "1 year"] },
//             { label: "Mode of Education", type: "status_green", values: ["Online", "Online", "Online"] },
//         ],
//     },
//     {
//         title: "Fee Structure",
//         rows: [
//             { label: "Total Program Fee", type: "price", values: ["₹ 196,000", "₹ 1,75,000", "₹ 1,50,000"] },
//             { label: "Per Semester Fee", type: "price", values: ["₹ 55,000", "₹ 43,750", "₹ 45,000"] },
//         ],
//     },
//     {
//         title: "Financial Aid",
//         rows: [
//             { label: "Scholarships", type: "boolean", values: [true, true, true] },
//             { label: "EMI/Loan", type: "boolean", values: [true, true, true] },
//         ],
//     },
//     {
//         title: "Placement and Hiring Partners",
//         rows: [
//             { label: "Placement Partners", type: "boolean", values: [true, true, true] },
//         ],
//     },
//     {
//         title: "Eligibility Criteria",
//         rows: [
//             { label: "Educational Qualifications", type: "doc_view", values: ["View", "View", "View"], note: true },
//             { label: "Minimum Grades", type: "doc_view", values: ["View", "View", "View"] },
//             { label: "Work Experience Requirement", type: "boolean_cross", values: [false, false, false] },
//             { label: "Entrance Exam", type: "boolean_cross", values: [false, false, false] },
//         ],
//     },
//     {
//         title: "Course Curriculum",
//         rows: [
//             { label: "Syllabus", type: "pdf", values: ["View", "View", "View"] },
//             { label: "Credits", type: "text", values: ["102", "90", "72"] },
//         ],
//     },
// ];



// const sections = [
//   {
//     title: "Approvals & Rankings",
//     rows: [
//       { label: "Approvals", type: "approvals", values: [null, null, null] },
//       { label: "NIRF Ranking", type: "text", values: ["21", "73", "151"] },
//     ],
//   },
//   {
//     title: "Duration & Mode",
//     rows: [
//       { label: "Time Frame", type: "text", values: ["2 years", "2 years", "1 year"] },
//       { label: "Mode of Education", type: "status", values: ["Online", "Online", "Online"] },
//     ],
//   },
//   {
//     title: "Fee Structure",
//     rows: [
//       { label: "Total Program Fee", type: "price", values: ["1,96,000", "1,75,000", "1,80,000"] },
//       { label: "Per Semester Fee", type: "price", values: ["55,000", "43,750", "45,000"] },
//     ],
//   },
//   {
//     title: "Financial Aid",
//     rows: [
//       { label: "Scholarships", type: "boolean", values: [true, true, true] },
//       { label: "EMI/Loan", type: "boolean", values: [true, true, true], highlight: true },
//     ],
//   },
//   {
//     title: "Placement and Hiring Partners",
//     rows: [
//         { label: "Placement Partners", type: "boolean", values: [true, true, true] },
//     ]
//   },
//   {
//     title: "Eligibility Criteria",
//     rows: [
//  {
//   label: "Educational Qualifications",
//   type: "file",
//   values: [true, true, true],
//   details: [
//     "Bachelor's Degree (10+2+3) in any discipline from recognised University or an equivalent degree...",
//     "Candidates must have a 10 + 2 + 3-year bachelor's degree from a recognized university/institution...",
//     "Bachelor's degree in any discipline from a recognized university."
//   ]
// },
//       { label: "Minimum Grades", type: "file",  type: "file", values: [true, true, true] , details: [
//     "Bachelor's Degree (10+2+3) in any discipline from recognised University or an equivalent degree...",
//     "Candidates must have a 10 + 2 + 3-year bachelor's degree from a recognized university/institution...",
//     "Bachelor's degree in any discipline from a recognized university."
//   ]},
//       { label: "Work Experience Requirement", type: "cross", values: [true, true, true] },
//       { label: "Entrance Exam", type: "cross_mixed", values: [false, false, true] },
//     ],
//   },





//   {
//     title: "Course Curriculum",
//     rows: [
//       { label: "Syllabus", type: "pdf", values: [true, true, true] },
//       { label: "Credits", type: "text", values: ["102", "90", "72"] },
//     ],
//   },
//   {
//     title: "Examination",
//     rows: [
//       { label: "Exams in a year", type: "text", values: ["June & December", "April/May & November/December", "May/June & November/December"] },
//       { label: "Flexibility to select exam date", type: "boolean", values: [true, false, false] },
//       { label: "Flexibility to select exam time", type: "boolean", values: [true, true, false] },
//       { label: "Examination Fee", type: "text", values: ["Excluded", "Included", "Included"] },
//       { label: "Convocation", type: "boolean", values: [true, true, true] },
//     ],
//   },
//   {
//     title: "Ratings & Satisfaction Score",
//     rows: [
//       { label: "Student Rankings", type: "rating", values: [4.0, 3.8, 3.8] },
//       { label: "Student Satisfaction Rate", type: "satisfaction", values: [80, 76, 76] },
//     ],
//   },

// ];

// // --- HELPER COMPONENT FOR SCORE CIRCLE ---
// const ScoreCircle = ({ score }) => (
//   <div className="relative flex items-center justify-center w-14 h-14 md:w-20 md:h-20 my-2">
//     <svg className="w-full h-full transform -rotate-90">
//       <circle cx="50%" cy="50%" r="40%" stroke="#E5E7EB" strokeWidth="6" fill="transparent" />
//       <circle cx="50%" cy="50%" r="40%" stroke="#22C55E" strokeWidth="6" fill="transparent" 
//               strokeDasharray="100" strokeDashoffset={100 - score} strokeLinecap="round" />
//     </svg>
//     <span className="absolute text-xs md:text-lg font-bold text-gray-700">{score}</span>
//   </div>
// );

// const ApprovalIcons = () => (
//   <div className="flex flex-col items-center">

//     <div className="flex items-center -space-x-1.5 mb-1">
      
   
//       <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white shadow-sm bg-white overflow-hidden flex items-center justify-center">
//         <img 
//           src="/images/comparelogo.png" 
//           alt="Approval" 
//           className="w-[80%] h-[80%] object-contain"
//         />
//       </div>

 
//       <div className="w-7 h-7 md:w-9 md:h-9 rounded-full border border-white shadow-md bg-white overflow-hidden flex items-center justify-center z-10">
//         <img 
//           src="/images/comparelogo.png" 
//           alt="Approval" 
//           className="w-[80%] h-[80%] object-contain"
//         />
//       </div>

//       {/* Logo 3 (Right) */}
//       <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white shadow-sm bg-white overflow-hidden  flex items-center justify-center">
//         <img 
//           src="/images/comparelogo.png" // Replace with your actual path
//           alt="Approval" 
//           className="w-[31px] h-[31px] object-cover"
//         />
//       </div>

//     </div>

//     {/* Red arrow pointing down */}
//     <ChevronRight className="w-4 h-4 text-[#EC1E24] rotate-90" strokeWidth={3} />
//   </div>
// );



// const StarRatings = ({ rating }) => (
//   <div className="flex flex-col items-center">
//     <div className="flex gap-0.5 mb-1">


//       <StarRating rating={rating} />
//     </div>
//     <span className="text-xs font-bold text-gray-600">{rating.toFixed(1)}</span>
//   </div>
// );

// const     SatisfactionGauge = ({ percentage }) => (
//   <div className="relative w-12 h-8 overflow-hidden">
//     <svg viewBox="0 0 100 50" className="w-full h-full">
//       <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#E5E7EB" strokeWidth="12" />
//       <path 
//         d="M 10 50 A 40 40 0 0 1 90 50" 
//         fill="none" 
//         stroke="#22C55E" 
//         strokeWidth="12" 
//         strokeDasharray="126" 
//         strokeDashoffset={126 - (percentage / 100) * 126} 
//       />
//     </svg>
//     <div className="absolute bottom-0 w-full text-center text-[10px] font-bold text-gray-700">
//       {percentage}%
//     </div>
//   </div>
// );





// export default function Compare() {
//     const [activeTab, setActiveTab] = useState("Approvals & Rankings");
//     const [activeDetail, setActiveDetail] = useState(null);


    
// const toggleDetail = (rowLabel) => {
//   setActiveDetail(activeDetail === rowLabel ? null : rowLabel);
// };

//     return (
//         <Layout>
//             <div className="mx-auto container sm:container md:container xl:max-w-[1280px] px-2 md:px-4 py-6 md:mt-24 font-poppins text-[#282529]">

//                 <div className="md:py-6">
//                     <div className="flex items-center justify-right place-self-end leading-[27px] text-[#282529] my-3 gap-3 font-[600] cursor-pointer hover:text-[#EC1E24]">
//                         <div className="bg-[#EFF3F6]  flex items-center rounded-[3px] "><ChevronRight width={20} height={20} color={"#EC1E24"} /></div>
//                         <p className="text-[12px] lg:text-[14px] ">Get insights of your perfect university! </p>

//                     </div>


//                     <div className="bg-[#F9FAFB]  py-4 md:p-4 border-[1px] border-[#CECECE] rounded-[16px]">

//                         {/* --- HEADER TITLE --- */}
//                         <div className="flex flex-row justify-between items-center  mb-6">
//                             <div>
//                                 <h1 className="text-[14px] md:text-[24px] font-[600] items-center font-poppins  text-[#282529]">
//                                     Choose criteria to filter
//                                 </h1>
//                             </div>


//                             <div className="block bg-white md:hidden relative w-20">
//                                 <input
//                                     type="text"
//                                     placeholder="Search"
//                                     className="w-full pl-6 pr-4 py-1.5 text-[10px] md:text-xs border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
//                                 />
//                                 <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2" />
//                             </div>

//                         </div>

//                         {/* --- FILTER BAR & SEARCH --- */}
//                         <div className="   p-2 flex flex-col md:flex-row items-center justify-between gap-4 mb-8">

//                             {/* Scrollable Tabs */}
//                             <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar mask-gradient">
//                                 <button className="p-1 rounded-full bg-white hover:bg-gray-100">

//                                     <ChevronLeft className="w-6 h-6 text-[#EC1E24]" />
//                                 </button>

//                                 <button className="bg-[#EC1E24] text-white px-6 py-2 rounded-full text-xs font-medium whitespace-nowrap shadow-md shadow-red-200">
//                                     Approvals & Rankings
//                                 </button>
//                                 <button className="bg-white text-gray-500 hover:bg-gray-50 px-6 py-2 rounded-full text-xs font-medium whitespace-nowrap border border-transparent hover:border-gray-200 transition">
//                                     Tuition & Mode
//                                 </button>
//                                 <button className="bg-white text-gray-500 hover:bg-gray-50 px-6 py-2 rounded-full text-xs font-medium whitespace-nowrap border border-transparent hover:border-gray-200 transition">
//                                     Fee Structure
//                                 </button>
//                                 <button className="bg-white text-gray-500 hover:bg-gray-50 px-6 py-2 rounded-full text-xs font-medium whitespace-nowrap border border-transparent hover:border-gray-200 transition">
//                                     Financial Aid
//                                 </button>

//                                 <button className="p-1 rounded-full  bg-white hover:bg-gray-100"><ChevronRight className="w-6 h-6 text-gray-400" /></button>
//                             </div>

//                             {/* Search Box */}
//                             <div className=" hidden md:block relative w-full md:w-64 bg-white">
//                                 <input
//                                     type="text"
//                                     placeholder="Search"
//                                     className="w-full pl-8 pr-4 py-1.5 text-xs border border-gray-300 rounded-[8px] focus:outline-none focus:border-red-500"
//                                 />
//                                 <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2" />
//                             </div>
//                         </div>


//                         {/* --- COMPARISON TABLE CONTAINER --- */}
//                        <div className="bg-[#F9FAFB] rounded-[24px]  overflow-hidden p-1 md:p-6">
          
//           {/* University Cards Row */}
//           <div className="grid grid-cols-3 md:grid-cols-4 bg-white">
//             {/* Desktop Only Labels Column */}
//             <div className="hidden md:flex p-6 items-center justify-center border-r " style={{
//     borderImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #8b8b8b 47%, rgba(255,255,255,0) 80%) 1"
//   }}>
//                 <button className="bg-[#EC1E24] text-white px-8 py-2.5 rounded-md text-sm font-bold uppercase shadow-lg shadow-red-100">Attributes</button>
//             </div>

//             {universities.map((uni) => (
//               <div key={uni.id} className="p-2 md:p-6 flex flex-col items-center border-r last:border-0 relative "   style={{
//     borderImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #8b8b8b 47%, rgba(255,255,255,0) 80%) 1"
//   }}>
//                 <button className="absolute top-2 right-2 text-gray-300"><XCircle size={16} /></button>
//                 <div className="h-8 md:h-12  items-center gap-2 mb-2">
//                    <img src={uni.logo} className="h-6 md:h-10 object-contain" />
//                    <span className="hidden md:block text-[9px] font-bold text-gray-500 leading-tight uppercase w-20">{uni.fullName}</span>
//                 </div>
//                 <p className="text-[8px] md:text-[10px] font-extrabold text-center uppercase mb-1">{uni.name}</p>
//                 <ScoreCircle score={uni.score} />
//                 <button className="mt-2 w-full bg-[#EC1E24] text-white text-[8px] md:text-[10px] font-bold py-1.5 rounded uppercase">View University</button>
//               </div>
//             ))}
//           </div>

//           {/* Data Sections */}
//         {sections.map((section) => (
//   <div key={section.title} className="mt-4 md:mt-0">
//     {/* Desktop Section Title */}
//     <div className="hidden md:block px-6 py-4 text-sm font-semibold text-gray-500">
//       {section.title}
//     </div>

//     {section.rows.map((row, rowIndex) => {
//       // Har doosri row ko pink karne ke liye logic (index 1, 3, 5...)
//       const isPinkRow = rowIndex % 2 !== 0;
//       const rowBgColor = isPinkRow ? "bg-[#FFF9F9] rounded-br-[8px] rounded-bl-[8px]" : "bg-white rounded-tl-[8px] rounded-tr-[8px]"; // Light pink for odd rows

//       return (
//         <div 
//           key={row.label} 
//           className={row.highlight ? "border-2 border-blue-400 rounded-lg overflow-hidden my-2 md:my-0 md:rounded-none md:border-0 md:border-b" : ""}
//         >
//           {/* MOBILE VIEW Label: Background color matches the row */}
//           <div className={`md:hidden ${rowBgColor} py-2 text-center text-[11px] font-bold text-gray-800 uppercase tracking-wide border-y border-red-100`}>
//             {row.label}
//           </div>

//           {/* DATA ROW: Background color applied to the grid */}
//           <div className={`grid grid-cols-3 shadow-md  md:grid-cols-4  last:border-0 ${rowBgColor} ${row.highlight ? 'bg-red-50/30' : ''}`} >
            
//             {/* Desktop Only Row Label */}
//             <div className={`hidden md:flex p-6 text-sm font-bold text-gray-700 border-r items-center`}
//             style={{
//     borderImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #8b8b8b 47%, rgba(255,255,255,0) 80%) 1"
//   }}>
//               {row.label}
//             </div>

//           {row.values.map((val, idx) => (
//       <div 
//         key={idx} 
//         className="md:p-4 flex items-center justify-center border-r last:border-0 min-h-[60px]"
//         style={{ borderImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #8b8b8b 47%, rgba(255,255,255,0) 80%) 1" }}
//       >
//         {/* Logic for the "View" button click */}
//         {(row.type === "file" || (row.type === "cross_mixed" && idx === 2)) ? (
//           <div 
//             className="flex flex-col flex-wrap items-center gap-0.5 text-red-400 cursor-pointer hover:opacity-80 transition-opacity"
//             onClick={() => toggleDetail(row.label)}
//           >
//             <img src="/images/viewfile.png" className="w-5 h-5" alt="view" />
//             <span className="text-[8px] uppercase font-bold underline">
//               {activeDetail === row.label ? "Hide" : "View"}
//             </span>
//           </div>
//         ) : (
//           <>
//             {row.type === "approvals" && <ApprovalIcons />}
//             {row.type === "text" && <span className="text-[10px] md:text-[14px] p-1 font-[400] break-all">{val}</span>}
//             {row.type === "price" && (
//               <div className="flex items-center gap-1 text-[#282529] text-[10px] md:text-sm">
//                 <img src="/images/money.png" alt="money" />
//                 <span className="text-[8px] md:text-xs">₹</span> {val}
//               </div>
//             )}
//             {row.type === "boolean" && <img src="/images/comaparetick.png" alt="tick" />}
//             {row.type === "status" && (
//               <div className="flex items-center gap-1.5">
//                 <div className="w-2 h-2 rounded-full bg-[radial-gradient(circle,#A6FF38_0%,#1DBF20_100%)]"></div>
//                 <span className="text-[10px] md:text-sm text-[#282529] font-medium">{val}</span>
//               </div>
//             )}
//             {row.type === "cross" && <img src="/images/cross.png" alt="cross" />}
//             {row.type === "cross_mixed" && idx !== 2 && <img src="/images/cross.png" alt="cross" />}

//              {row.type === "pdf" && (
//       <Link href="#" className="hover:scale-110 transition-transform">
//         <img src="/images/pdf.png" className="w-8 h-8" alt="syllabus" />
//       </Link>
//     )}


//     {row.type === "rating" && <StarRatings rating={val} />}


//     {row.type === "satisfaction" && <SatisfactionGauge percentage={val} />}


  

  
//           </>
//         )}
//       </div>
//     ))}
//   </div>

//   {/* EXPANDABLE DETAILS SECTION (Matches your image) */}
//   {activeDetail === row.label && row.details && (
//     <div className={`grid grid-cols-3 md:grid-cols-4  ${rowBgColor} transition-all duration-300 ease-in-out`}>
//       {/* Empty column for Desktop Label alignment */}
//       <div className="hidden md:block border-r bg-[#F8F8F8]" style={{ borderImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #8b8b8b 47%, rgba(255,255,255,0) 80%) 1" }} />
      
//       {row.details.map((detail, dIdx) => (
//         <div 
//           key={dIdx} 
//           className="p-4 md:p-8 bg-[#F8F8F8] text-center text-[10px] md:text-[12px] text-gray-600 leading-relaxed border-r last:border-0"
//           style={{ borderImage: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #8b8b8b 47%, rgba(255,255,255,0) 80%) 1" }}
//         >
//           {detail}
//         </div>
//       ))}
//     </div>
//   )}
//         </div>
//       );
//     })}
//   </div>
// ))}
//         </div>
//                     </div>
//                 </div>


//             </div>
//             <BestPartnerCount />
//             <ExploreUniversities />
//             <Confusion />

//         </Layout>
//     );
// }













// import React, { useState } from "react";
// import Layout from "../components/Layout";
// import Link from "next/link";
// import {
//   Search,
//   ChevronRight,
//   ChevronLeft,
//   XCircle,
//   FileText,
// } from "lucide-react";
// import ExploreUniversities from "../home/ExploreUniversities";
// import BestPartnerCount from "../home/BestPartnerCount";
// import Confusion from "../home/Confusion";
// import StarRating from "@/common/Rating"; // Custom component you imported

// // --- 1. MOCK DATA ---
// const universities = [
//   { id: 1, name: "NMIMS CDOE", logo: "/images/compare/unilogo.png", score: 82, fullName: "CENTRE FOR DISTANCE AND ONLINE EDUCATION" },
//   { id: 2, name: "MANIPAL UNIVERSITY ONLINE", logo: "/images/compare/unilogo.png", score: 95, fullName: "ONLINE MANIPAL" },
//   { id: 3, name: "OP JINDAL GLOBAL UNIVERSITY", logo: "/images/compare/unilogo.png", score: 75, fullName: "O.P. JINDAL GLOBAL UNIVERSITY" },
// ];

// const sections = [
//   {
//     title: "Approvals & Rankings",
//     rows: [
//       { label: "Approvals", type: "approvals", values: [null, null, null] },
//       { label: "NIRF Ranking", type: "text", values: ["21", "73", "151"] },
//     ],
//   },
//   {
//     title: "Duration & Mode",
//     rows: [
//       { label: "Time Frame", type: "text", values: ["2 years", "2 years", "1 year"] },
//       { label: "Mode of Education", type: "status", values: ["Online", "Online", "Online"] },
//     ],
//   },
//   {
//     title: "Fee Structure",
//     rows: [
//       { label: "Total Program Fee", type: "price", values: ["1,96,000", "1,75,000", "1,80,000"] },
//       { label: "Per Semester Fee", type: "price", values: ["55,000", "43,750", "45,000"] },
//     ],
//   },
//   {
//     title: "Financial Aid",
//     rows: [
//       { label: "Scholarships", type: "boolean", values: [true, true, true] },
//       { label: "EMI/Loan", type: "boolean", values: [true, true, true], highlight: true },
//     ],
//   },
//   {
//     title: "Eligibility Criteria",
//     rows: [
//       { 
//         label: "Educational Qualifications", 
//         type: "file", 
//         values: [true, true, true],
//         details: [
//             "Bachelor's Degree (10+2+3) in any discipline from recognised University or an equivalent degree recognised by Association of Indian Universities (AIU).",
//             "Candidates must have a 10 + 2 + 3-year bachelor's degree from a recognized university/institution or equivalent.",
//             "Bachelor's degree in any discipline from a recognized university."
//         ]
//       },
//       { 
//         label: "Minimum Grades", 
//         type: "file", 
//         values: [true, true, true],
//         details: ["Min 50% marks", "Min 45% marks", "Passing Marks"]
//       },
//       { label: "Work Experience Requirement", type: "cross", values: [false, false, false] },
//       { label: "Entrance Exam", type: "cross_mixed", values: [false, false, true] },
//     ],
//   },
//   {
//     title: "Course Curriculum",
//     rows: [
//       { label: "Syllabus", type: "pdf", values: [true, true, true] },
//       { label: "Credits", type: "text", values: ["102", "90", "72"] },
//     ],
//   },
//   {
//     title: "Examination",
//     rows: [
//       { label: "Exams in a year", type: "text", values: ["June & December", "April/May & Nov/Dec", "May/June & Nov/Dec"] },
//       { label: "Flexibility to select exam date", type: "boolean", values: [true, true, false] },
//       { label: "Examination Fee", type: "text", values: ["Excluded", "Included", "Included"] },
//     ],
//   },
//   {
//     title: "Ratings & Satisfaction Score",
//     rows: [
//       { label: "Student Rankings", type: "rating", values: [4.0, 3.8, 3.8] },
//       { label: "Student Satisfaction Rate", type: "satisfaction", values: [80, 76, 76] },
//     ],
//   },
// ];

// // --- 2. HELPER UI COMPONENTS ---

// const ScoreCircle = ({ score }) => (
//     <div className="relative flex items-center justify-center w-14 h-14 md:w-20 md:h-20 my-2">
//       <svg className="w-full h-full transform -rotate-90">
//         <circle cx="50%" cy="50%" r="40%" stroke="#E5E7EB" strokeWidth="6" fill="transparent" />
//         <circle cx="50%" cy="50%" r="40%" stroke="#22C55E" strokeWidth="6" fill="transparent" 
//                 strokeDasharray="100" strokeDashoffset={100 - score} strokeLinecap="round" />
//       </svg>
//       <span className="absolute text-xs md:text-lg font-bold text-gray-700">{score}</span>
//     </div>
// );

// const ApprovalIcons = () => (
//     <div className="flex flex-col items-center">
//       <div className="flex items-center -space-x-1.5 mb-1">
//         {[1, 2, 3].map((i) => (
//           <div key={i} className={`w-6 h-6 md:w-8 md:h-8 rounded-full border border-white shadow-sm bg-white overflow-hidden flex items-center justify-center ${i === 2 ? 'z-10 scale-110' : ''}`}>
//             <img src="/images/comparelogo.png" className="w-[80%] h-[80%] object-contain" alt="" />
//           </div>
//         ))}
//       </div>
//       <ChevronRight className="w-4 h-4 text-[#EC1E24] rotate-90" strokeWidth={3} />
//     </div>
// );

// const SatisfactionGauge = ({ percentage }) => (
//     <div className="relative w-12 h-8 overflow-hidden">
//       <svg viewBox="0 0 100 50" className="w-full h-full">
//         <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#E5E7EB" strokeWidth="12" />
//         <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#22C55E" strokeWidth="12" strokeDasharray="126" strokeDashoffset={126 - (percentage / 100) * 126} />
//       </svg>
//       <div className="absolute bottom-0 w-full text-center text-[10px] font-bold text-gray-700">{percentage}%</div>
//     </div>
// );

// // --- 3. DESTRUCTURED CELL RENDERER ---

// const CellRenderer = ({ type, val, idx, onToggle, isActive, rowLabel }) => {
//     const components = {
//       approvals: () => <ApprovalIcons />,
//       text: () => <span className="text-[10px] md:text-[14px] p-1 font-[400] text-center">{val}</span>,
//       price: () => (
//         <div className="flex items-center gap-1 text-[#282529] text-[10px] md:text-sm">
//           <img src="/images/money.png" alt="" className="w-3 h-3 md:w-4 md:h-4" />
//           <span className="text-[8px] md:text-xs">₹</span> {val}
//         </div>
//       ),
//       boolean: () => <img src={val ? "/images/comaparetick.png" : "/images/cross.png"} alt="" className="w-5 h-5" />,
//       status: () => (
//         <div className="flex items-center gap-1.5">
//           <div className="w-2 h-2 rounded-full bg-[radial-gradient(circle,#A6FF38_0%,#1DBF20_100%)]"></div>
//           <span className="text-[10px] md:text-sm text-[#282529] font-medium">{val}</span>
//         </div>
//       ),
//       file: () => (
//         <div className="flex flex-col items-center gap-0.5 text-red-400 cursor-pointer" onClick={() => onToggle(rowLabel)}>
//           <img src="/images/viewfile.png" className="w-5 h-5" alt="" />
//           <span className="text-[8px] uppercase font-bold underline">{isActive ? "Hide" : "View"}</span>
//         </div>
//       ),
//       cross: () => <img src="/images/cross.png" alt="" className="w-5 h-5" />,
//       cross_mixed: () => idx === 2 ? components.file() : components.cross(),
//       pdf: () => <img src="/images/pdf.png" className="w-8 h-8 cursor-pointer hover:scale-110 transition" alt="" />,
//       rating: () => (
//         <div className="flex flex-col items-center">
//             <StarRating rating={val} />
//             <span className="text-[10px] font-bold mt-1">{val.toFixed(1)}</span>
//         </div>
//       ),
//       satisfaction: () => <SatisfactionGauge percentage={val} />,
//     };
  
//     const Render = components[type] || components.text;
//     return <Render />;
// };

// // --- 4. MAIN PAGE ---

// export default function Compare() {
//   const [activeDetail, setActiveDetail] = useState(null);
//   const toggleDetail = (label) => setActiveDetail(activeDetail === label ? null : label);

//   return (
//     <Layout>
//       <div className="mx-auto container max-w-[1280px] px-2 md:px-4 py-6 md:mt-24 font-poppins text-[#282529]">
        
//         {/* Top Hint */}
//         <div className="flex justify-end mb-4">
//           <div className="flex items-center gap-2 cursor-pointer group hover:text-[#EC1E24]">
//             <div className="p-1 bg-[#EFF3F6] rounded"><ChevronRight size={16} color="#EC1E24" /></div>
//             <p className="text-[12px] md:text-sm font-semibold">Get insights of your perfect university!</p>
//           </div>
//         </div>

//         <div className="bg-[#F9FAFB] p-2 md:p-6 border rounded-[16px]">
          
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-sm md:text-2xl font-bold">Choose criteria to filter</h1>
//             <div className="relative w-24 md:w-64">
//               <input type="text" placeholder="Search" className="w-full pl-8 pr-2 py-1.5 text-xs border rounded-lg bg-white outline-none" />
//               <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2" />
//             </div>
//           </div>

//           {/* Comparison Container */}
//           <div className="bg-white rounded-[24px] shadow-sm overflow-hidden">
            
//             {/* Table Header */}
//             <div className="grid grid-cols-3 md:grid-cols-4 border-b">
//               <div className="hidden md:flex p-6 items-center justify-center border-r" style={{ borderImage: "linear-gradient(180deg, transparent 0%, #8b8b8b 50%, transparent 100%) 1" }}>
//                 <button className="bg-[#EC1E24] text-white px-8 py-2.5 rounded-md text-sm font-bold uppercase shadow-lg">Attributes</button>
//               </div>
//               {universities.map((uni) => (
//                 <div key={uni.id} className="p-2 md:p-6 flex flex-col items-center border-r last:border-0 relative" style={{ borderImage: "linear-gradient(180deg, transparent 0%, #8b8b8b 50%, transparent 100%) 1" }}>
//                   <button className="absolute top-2 right-2 text-gray-300"><XCircle size={16} /></button>
//                   <img src={uni.logo} className="h-6 md:h-10 object-contain mb-2" alt="" />
//                   <p className="text-[8px] md:text-[10px] font-extrabold text-center uppercase">{uni.name}</p>
//                   <ScoreCircle score={uni.score} />
//                   <button className="mt-2 w-full bg-[#EC1E24] text-white text-[8px] md:text-[10px] font-bold py-1.5 rounded uppercase">View University</button>
//                 </div>
//               ))}
//             </div>

//             {/* Render Sections */}
//             {sections.map((section) => (
//               <div key={section.title}>
//                 <div className="hidden md:block px-6 py-4 text-sm font-semibold text-gray-500 bg-white">{section.title}</div>
                
//                 {section.rows.map((row, rIdx) => {
//                   const isPink = rIdx % 2 !== 0;
//                   const rowBg = isPink ? "bg-[#FFF9F9]" : "bg-white";

//                   return (
//                     <div key={row.label} className={row.highlight ? "border-2 border-blue-400 rounded-lg overflow-hidden my-2 md:my-0 md:rounded-none md:border-b" : ""}>
                      
//                       {/* Mobile Row Label Header */}
//                       <div className={`md:hidden ${rowBg} py-2 text-center text-[10px] font-bold uppercase border-y`}>{row.label}</div>

//                       {/* Main Grid Row */}
//                       <div className={`grid grid-cols-3 md:grid-cols-4 shadow-sm ${rowBg}`}>
//                         <div className="hidden md:flex p-6 text-sm font-bold text-gray-700 border-r items-center" style={{ borderImage: "linear-gradient(180deg, transparent 0%, #8b8b8b 50%, transparent 100%) 1" }}>
//                           {row.label}
//                         </div>
//                         {row.values.map((val, vIdx) => (
//                           <div key={vIdx} className="p-2 md:p-4 flex items-center justify-center border-r last:border-0 min-h-[60px]" style={{ borderImage: "linear-gradient(180deg, transparent 0%, #8b8b8b 50%, transparent 100%) 1" }}>
//                             <CellRenderer 
//                                 type={row.type} 
//                                 val={val} 
//                                 idx={vIdx} 
//                                 rowLabel={row.label} 
//                                 isActive={activeDetail === row.label} 
//                                 onToggle={toggleDetail} 
//                             />
//                           </div>
//                         ))}
//                       </div>

//                       {/* Expandable Content Area */}
//                       {activeDetail === row.label && row.details && (
//                         <div className={`grid grid-cols-3 md:grid-cols-4 ${rowBg} transition-all duration-300`}>
//                           <div className="hidden md:block border-r bg-[#F8F8F8]" style={{ borderImage: "linear-gradient(180deg, transparent 0%, #8b8b8b 50%, transparent 100%) 1" }} />
//                           {row.details.map((detail, dIdx) => (
//                             <div key={dIdx} className="p-4 bg-[#F8F8F8] text-center text-[10px] md:text-[12px] text-gray-600 leading-relaxed border-r last:border-0" style={{ borderImage: "linear-gradient(180deg, transparent 0%, #8b8b8b 50%, transparent 100%) 1" }}>
//                               {detail}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <BestPartnerCount />
//       <ExploreUniversities />
//       <Confusion />
//     </Layout>
//   );
// }














