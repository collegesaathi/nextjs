import React, { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import {
    Search,
    ChevronRight,
    ChevronLeft,
    CheckCircle2,
    XCircle,
    FileText,
    X
} from "lucide-react";
import ExploreUniversities from "../home/ExploreUniversities";
import BestPartnerCount from "../home/BestPartnerCount";
import Confusion from "../home/Confusion";



  const rankingData = [21, 73, 151];

// --- MOCK DATA FOR COMPARISON ---
const universities = [
    {
        id: 1,
        name: "NMIMS CDOE",
        logo: "/images/compare/unilogo.png", // Replace with actual path
        score: 9.8,
        reviews: 400,
    },
    {
        id: 2,
        name: "MANIPAL UNIVERSITY ONLINE",
        logo: "/images/compare/unilogo.png", // Replace with actual path
        score: 9.2,
        reviews: 350,
    },
    {
        id: 3,
        name: "OP JINDAL GLOBAL UNIVERSITY",
        logo: "/images/compare/unilogo.png", // Replace with actual path
        score: 8.9,
        reviews: 120,
    },
];

const comparisonSections = [
    {
        title: "Approvals & Rankings",
        rows: [
            {
                label: "Approvals",
                type: "approval_icon", // Custom renderer
                values: ["View", "View", "View"],
            },
            {
                label: "NIRF Ranking",
                type: "text",
                values: ["21", "73", "151"],
            },
        ],
    },
    {
        title: "Duration & Mode",
        rows: [
            { label: "Time frame", type: "text", values: ["2 years", "2 years", "1 year"] },
            { label: "Mode of Education", type: "status_green", values: ["Online", "Online", "Online"] },
        ],
    },
    {
        title: "Fee Structure",
        rows: [
            { label: "Total Program Fee", type: "price", values: ["₹ 196,000", "₹ 1,75,000", "₹ 1,50,000"] },
            { label: "Per Semester Fee", type: "price", values: ["₹ 55,000", "₹ 43,750", "₹ 45,000"] },
        ],
    },
    {
        title: "Financial Aid",
        rows: [
            { label: "Scholarships", type: "boolean", values: [true, true, true] },
            { label: "EMI/Loan", type: "boolean", values: [true, true, true] },
        ],
    },
    {
        title: "Placement and Hiring Partners",
        rows: [
            { label: "Placement Partners", type: "boolean", values: [true, true, true] },
        ],
    },
    {
        title: "Eligibility Criteria",
        rows: [
            { label: "Educational Qualifications", type: "doc_view", values: ["View", "View", "View"], note: true },
            { label: "Minimum Grades", type: "doc_view", values: ["View", "View", "View"] },
            { label: "Work Experience Requirement", type: "boolean_cross", values: [false, false, false] },
            { label: "Entrance Exam", type: "boolean_cross", values: [false, false, false] },
        ],
    },
    {
        title: "Course Curriculum",
        rows: [
            { label: "Syllabus", type: "pdf", values: ["View", "View", "View"] },
            { label: "Credits", type: "text", values: ["102", "90", "72"] },
        ],
    },
];

// --- HELPER COMPONENT FOR SCORE CIRCLE ---
const ScoreCircle = () => (
    <div className="w-16 h-16 rounded-full bg-[#22C55E] flex items-center justify-center relative mx-auto my-3 shadow-md border-4 border-white ring-1 ring-gray-100">
        <div className="text-white text-xs font-bold flex flex-col items-center leading-tight">
            {/* Placeholder icon inside circle */}
            <div className="w-2 h-2 bg-white rounded-full mb-1"></div>
            <span className="scale-75">Score</span>
        </div>
        {/* Small play icon imitation */}
        <div className="absolute bottom-1 right-0 bg-white rounded-full p-0.5 shadow-sm">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
        </div>
    </div>
);


export default function Compare() {
    const [activeTab, setActiveTab] = useState("Approvals & Rankings");

    return (
        <Layout>
            <div className="mx-auto container sm:container md:container xl:max-w-[1280px] px-4 py-6 md:mt-24 font-poppins text-[#282529]">

                <div className="md:py-6">
                    <div className="flex items-center justify-right place-self-end leading-[27px] text-[#282529] my-3 gap-3 font-[600] cursor-pointer hover:text-[#EC1E24]">
                        <div className="bg-[#EFF3F6]  flex items-center rounded-[3px] "><ChevronRight width={20} height={20} color={"#EC1E24"} /></div>
                        <p className="text-[12px] lg:text-[14px] ">Get insights of your perfect university! </p>

                    </div>


                    <div className="bg-[#F9FAFB] p-2 py-4 md:p-4 border-[1px] border-[#CECECE] rounded-[16px]">

                        {/* --- HEADER TITLE --- */}
                        <div className="flex flex-row justify-between items-center  mb-6">
                            <div>
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
                        <div className="   p-2 flex flex-col md:flex-row items-center justify-between gap-4 mb-8">

                            {/* Scrollable Tabs */}
                            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar mask-gradient">
                                <button className="p-1 rounded-full bg-white hover:bg-gray-100">

                                    <ChevronLeft className="w-6 h-6 text-[#EC1E24]" />
                                </button>

                                <button className="bg-[#EC1E24] text-white px-6 py-2 rounded-full text-xs font-medium whitespace-nowrap shadow-md shadow-red-200">
                                    Approvals & Rankings
                                </button>
                                <button className="bg-white text-gray-500 hover:bg-gray-50 px-6 py-2 rounded-full text-xs font-medium whitespace-nowrap border border-transparent hover:border-gray-200 transition">
                                    Tuition & Mode
                                </button>
                                <button className="bg-white text-gray-500 hover:bg-gray-50 px-6 py-2 rounded-full text-xs font-medium whitespace-nowrap border border-transparent hover:border-gray-200 transition">
                                    Fee Structure
                                </button>
                                <button className="bg-white text-gray-500 hover:bg-gray-50 px-6 py-2 rounded-full text-xs font-medium whitespace-nowrap border border-transparent hover:border-gray-200 transition">
                                    Financial Aid
                                </button>

                                <button className="p-1 rounded-full  bg-white hover:bg-gray-100"><ChevronRight className="w-6 h-6 text-gray-400" /></button>
                            </div>

                            {/* Search Box */}
                            <div className=" hidden md:block relative w-full md:w-64 bg-white">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-8 pr-4 py-1.5 text-xs border border-gray-300 rounded-[8px] focus:outline-none focus:border-red-500"
                                />
                                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2" />
                            </div>
                        </div>


                        {/* --- COMPARISON TABLE CONTAINER --- */}
                        <div className="w-full pb-10">


                            <div className="w-full  rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                                {/* 1. UNIVERSITY HEADER ROW */}
                                <div className="grid grid-cols-4 border-b border-gray-200">

                                    {/* Col 1: Attributes Label */}
                                    <div className="p-1 md:p-6 flex flex-col justify-center items-center border-r border-gray-100">
                                        {/* Responsive Button: Small on mobile, Big on Desktop */}
                                        <button className="bg-[#EC1E24] text-white px-2 py-1 md:px-8 md:py-2.5 rounded md:rounded-md text-[8px] md:text-sm font-bold shadow-sm md:shadow-lg shadow-red-200 break-words w-full md:w-auto">
                                            Attributes
                                        </button>
                                    </div>

                                    {/* Cols 2-4: Universities */}
                                    {universities.map((uni) => (
                                        <div key={uni.id} className="relative p-1 md:p-4 flex flex-col items-center justify-between border-r border-gray-100 last:border-0 bg-white group">

                                            {/* Close Icon */}
                                            <button className="absolute top-1 right-1 md:top-2 md:right-2 text-gray-300 hover:text-red-500 transition">
                                                <XCircle className="w-3 h-3 md:w-5 md:h-5" />
                                            </button>

                                            {/* Logo Section */}
                                            <div className="min-h-[40px] md:h-12 mb-1 md:mb-2 flex flex-col gap-1 md:gap-5 mt-4 md:mt-6 items-center justify-center">
                                                {uni.logo && (
                                                    <img
                                                        src={uni.logo}
                                                        className="items-center justify-center place-self-center max-w-[40px] md:max-w-full h-auto"
                                                        alt={uni.name}
                                                    />
                                                )}
                                                <div className="text-[8px] md:text-[10px] font-bold text-center text-gray-800 uppercase px-0 md:px-4 leading-tight break-words">
                                                    {uni.name}
                                                </div>
                                            </div>

                                            {/* Score Circle - Scale down on mobile if needed, or keep standard */}
                                            <div className="scale-75 md:scale-100 origin-center">
                                                <ScoreCircle />
                                            </div>

                                            <button className="mt-1 md:mt-2 bg-[#EC1E24] text-white text-[8px] md:text-[10px] uppercase font-bold px-2 py-1 md:px-6 md:py-1.5 rounded shadow-sm hover:bg-red-700 transition w-full md:w-3/4 whitespace-nowrap overflow-hidden text-ellipsis">
                                                View
                                                <span className="hidden md:inline"> University</span>
                                            </button>
                                        </div>
                                    ))}
                                </div>



                                 <div className="w-full max-w-[1200px] mx-auto p-4 font-poppins text-[#282529]">
      
      {/* Section Title */}
      <h3 className="text-[16px] font-medium text-gray-700 mb-4">
        Approvals & Rankings
      </h3>

      {/* Main Card Container */}
      <div className="bg-white rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
        
        {/* --- ROW 1: APPROVALS (White Background) --- */}
        <div className="flex w-full">
        <div className="p-6 flex items-center text-[14px] font-bold text-gray-800 border-r border-gray-100 w-1/4">
            Approvals
          </div>
        <div className="grid grid-cols-4 border-b border-gray-100 w-2/4">
          
          {/* Label Column */}
       

          {/* Data Columns (Repeated 3 times) */}
          {[1, 2, 3].map((item, index) => (
            <div 
              key={index} 
              className="p-4 flex flex-col items-center justify-center border-r border-gray-100 last:border-0"
            >
              {/* Fake Accreditation Logos Group */}
              <div className="flex items-center space-x-1 mb-1">
                {/* Logo 1 (Pinkish) */}
                <div className="w-6 h-6 rounded-full bg-[#FCE7E7] border border-white shadow-sm flex items-center justify-center text-[8px] text-red-400">
                  A
                </div>
                {/* Logo 2 (Red Icon style) */}
                <div className="w-7 h-7 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-1">
                  <div className="w-full h-full rounded-full border-2 border-red-500 border-dashed"></div>
                </div>
                {/* Logo 3 (Yellowish) */}
                <div className="w-6 h-6 rounded-full bg-[#FFF9C4] border border-white shadow-sm flex items-center justify-center text-[8px] text-yellow-600">
                  U
                </div>
              </div>

              {/* Red Chevron Down */}
       
            </div>
          ))}
        </div>
        </div>

        {/* --- ROW 2: NIRF RANKING (Pink Background) --- */}
        <div className="grid grid-cols-4 bg-[#FFF5F5]">
          
          {/* Label Column */}
          <div className="p-6 flex items-center text-[14px] font-bold text-gray-800 border-r border-gray-100/50">
            NIRF Ranking
          </div>

          {/* Data Columns */}
          {rankingData.map((rank, index) => (
            <div 
              key={index} 
              className="p-4 flex items-center justify-center text-[14px] font-medium text-gray-700 border-r border-gray-100/50 last:border-0"
            >
              {rank}
            </div>
          ))}
        </div>

      </div>
    </div>


                         
                            </div>
                        </div>
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

// // --- HELPER COMPONENT FOR SCORE CIRCLE ---
// const ScoreCircle = () => (
//     <div className="w-16 h-16 rounded-full bg-[#22C55E] flex items-center justify-center relative mx-auto my-3 shadow-md border-4 border-white ring-1 ring-gray-100">
//         <div className="text-white text-xs font-bold flex flex-col items-center leading-tight">
//             {/* Placeholder icon inside circle */}
//             <div className="w-2 h-2 bg-white rounded-full mb-1"></div>
//             <span className="scale-75">Score</span>
//         </div>
//         {/* Small play icon imitation */}
//         <div className="absolute bottom-1 right-0 bg-white rounded-full p-0.5 shadow-sm">
//             <div className="w-3 h-3 bg-green-600 rounded-full"></div>
//         </div>
//     </div>
// );


// export default function Compare() {
//     const [activeTab, setActiveTab] = useState("Approvals & Rankings");

//     return (
//         <Layout>
//             <div className="mx-auto container sm:container md:container xl:max-w-[1280px] px-4 py-6 md:mt-24 font-poppins text-[#282529]">

//                 <div className="md:py-6">
//                     <div className="flex items-center justify-right place-self-end leading-[27px] text-[#282529] my-3 gap-3 font-[600] cursor-pointer hover:text-[#EC1E24]">
//                         <div className="bg-[#EFF3F6]  flex items-center rounded-[3px] "><ChevronRight width={20} height={20} color={"#EC1E24"} /></div>
//                         <p className="text-[12px] lg:text-[14px] ">Get insights of your perfect university! </p>

//                     </div>


//                     <div className="bg-[#F9FAFB] p-2 py-4 md:p-4 border-[1px] border-[#CECECE] rounded-[16px]">

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
//                         <div className="w-full pb-10">


//                             <div className="w-full  rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

//                                 {/* 1. UNIVERSITY HEADER ROW */}
//                                 <div className="grid grid-cols-4 border-b border-gray-200">

//                                     {/* Col 1: Attributes Label */}
//                                     <div className="p-1 md:p-6 flex flex-col justify-center items-center border-r border-gray-100">
//                                         {/* Responsive Button: Small on mobile, Big on Desktop */}
//                                         <button className="bg-[#EC1E24] text-white px-2 py-1 md:px-8 md:py-2.5 rounded md:rounded-md text-[8px] md:text-sm font-bold shadow-sm md:shadow-lg shadow-red-200 break-words w-full md:w-auto">
//                                             Attributes
//                                         </button>
//                                     </div>

//                                     {/* Cols 2-4: Universities */}
//                                     {universities.map((uni) => (
//                                         <div key={uni.id} className="relative p-1 md:p-4 flex flex-col items-center justify-between border-r border-gray-100 last:border-0 bg-white group">

//                                             {/* Close Icon */}
//                                             <button className="absolute top-1 right-1 md:top-2 md:right-2 text-gray-300 hover:text-red-500 transition">
//                                                 <XCircle className="w-3 h-3 md:w-5 md:h-5" />
//                                             </button>

//                                             {/* Logo Section */}
//                                             <div className="min-h-[40px] md:h-12 mb-1 md:mb-2 flex flex-col gap-1 md:gap-5 mt-4 md:mt-6 items-center justify-center">
//                                                 {uni.logo && (
//                                                     <img
//                                                         src={uni.logo}
//                                                         className="items-center justify-center place-self-center max-w-[40px] md:max-w-full h-auto"
//                                                         alt={uni.name}
//                                                     />
//                                                 )}
//                                                 <div className="text-[8px] md:text-[10px] font-bold text-center text-gray-800 uppercase px-0 md:px-4 leading-tight break-words">
//                                                     {uni.name}
//                                                 </div>
//                                             </div>

//                                             {/* Score Circle - Scale down on mobile if needed, or keep standard */}
//                                             <div className="scale-75 md:scale-100 origin-center">
//                                                 <ScoreCircle />
//                                             </div>

//                                             <button className="mt-1 md:mt-2 bg-[#EC1E24] text-white text-[8px] md:text-[10px] uppercase font-bold px-2 py-1 md:px-6 md:py-1.5 rounded shadow-sm hover:bg-red-700 transition w-full md:w-3/4 whitespace-nowrap overflow-hidden text-ellipsis">
//                                                 View
//                                                 <span className="hidden md:inline"> University</span>
//                                             </button>
//                                         </div>
//                                     ))}
//                                 </div>



//                                  <div className="w-full max-w-[1200px] mx-auto p-4 font-poppins text-[#282529]">
      
//       {/* Section Title */}
//       <h3 className="text-[16px] font-medium text-gray-700 mb-4">
//         Approvals & Rankings
//       </h3>

//       {/* Main Card Container */}
//       <div className="bg-white rounded-xl shadow-[0px_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
        
//         {/* --- ROW 1: APPROVALS (White Background) --- */}
//         <div className="grid grid-cols-4 border-b border-gray-100">
          
//           {/* Label Column */}
//           <div className="p-6 flex items-center text-[14px] font-bold text-gray-800 border-r border-gray-100">
//             Approvals
//           </div>

//           {/* Data Columns (Repeated 3 times) */}
//           {[1, 2, 3].map((item, index) => (
//             <div 
//               key={index} 
//               className="p-4 flex flex-col items-center justify-center border-r border-gray-100 last:border-0"
//             >
//               {/* Fake Accreditation Logos Group */}
//               <div className="flex items-center space-x-1 mb-1">
//                 {/* Logo 1 (Pinkish) */}
//                 <div className="w-6 h-6 rounded-full bg-[#FCE7E7] border border-white shadow-sm flex items-center justify-center text-[8px] text-red-400">
//                   A
//                 </div>
//                 {/* Logo 2 (Red Icon style) */}
//                 <div className="w-7 h-7 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-1">
//                   <div className="w-full h-full rounded-full border-2 border-red-500 border-dashed"></div>
//                 </div>
//                 {/* Logo 3 (Yellowish) */}
//                 <div className="w-6 h-6 rounded-full bg-[#FFF9C4] border border-white shadow-sm flex items-center justify-center text-[8px] text-yellow-600">
//                   U
//                 </div>
//               </div>

//               {/* Red Chevron Down */}
       
//             </div>
//           ))}
//         </div>

//         {/* --- ROW 2: NIRF RANKING (Pink Background) --- */}
//         <div className="grid grid-cols-4 bg-[#FFF5F5]">
          
//           {/* Label Column */}
//           <div className="p-6 flex items-center text-[14px] font-bold text-gray-800 border-r border-gray-100/50">
//             NIRF Ranking
//           </div>

//           {/* Data Columns */}
//           {rankingData.map((rank, index) => (
//             <div 
//               key={index} 
//               className="p-4 flex items-center justify-center text-[14px] font-medium text-gray-700 border-r border-gray-100/50 last:border-0"
//             >
//               {rank}
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>


//                                 {/* 2. DATA SECTIONS */}
//                                 {comparisonSections.map((section, sIdx) => (
//                                     <div key={sIdx}>

//                                         {/* Section Title */}
//                                         <div className="px-2 md:px-6 py-2 md:py-4 ">
//                                             <h3 className="text-[10px] md:text-sm font-semibold text-gray-700">{section.title}</h3>
//                                         </div>


//                                         {section.rows.map((row, rIdx) => {
//                                             const bgClass = rIdx % 2 === 0 ? "bg-[#FFF5F5]" : "bg-white";

//                                             return (


//                                                 <div key={rIdx} className={`grid grid-cols-2 ${bgClass} border-b border-gray-50 last:border-0`}>
//                                                            <div className="p-1 w-1/3 md:p-4 md:pl-6 text-[9px] md:text-[13px] font-semibold text-gray-800 flex items-center border-r border-gray-100/50 break-words leading-tight">
//                                         {row.label}
//                                     </div>
//                                                     <div className={`grid grid-cols-4 ${bgClass} border-b border-gray-50 last:border-0 cols-span-4 `}>

                                                    


//                                                     {/* Label Column - Responsive Text & Padding */}
//                                                     {/* <div className="p-1 md:p-4 md:pl-6 text-[9px] md:text-[13px] font-semibold text-gray-800 flex items-center border-r border-gray-100/50 break-words leading-tight">
//                                         {row.label}
//                                     </div> */}

//                                                     {/* Data Columns */}
//                                                     {row.values.map((val, vIdx) => (
//                                                         <div key={vIdx} className="p-1 md:p-4 flex flex-col items-center justify-center text-center border-r border-gray-100/50 last:border-0 relative">

//                                                             {/* RENDER LOGIC */}

//                                                             {/* 1. Approval Icons */}
//                                                             {row.type === 'approval_icon' && (
//                                                                 <div className="flex flex-col items-center gap-1 cursor-pointer group">
//                                                                     <div className="flex -space-x-1">
//                                                                         <div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-pink-200 border border-white"></div>
//                                                                         <div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-red-200 border border-white"></div>
//                                                                         <div className="w-3 h-3 md:w-6 md:h-6 rounded-full bg-yellow-100 border border-white"></div>
//                                                                     </div>
//                                                                     <span className="text-[8px] md:text-[10px] text-red-500 font-medium group-hover:underline">View</span>
//                                                                 </div>
//                                                             )}

//                                                             {/* 2. Standard Text */}
//                                                             {row.type === 'text' && (
//                                                                 <span className="text-[9px] md:text-[13px] font-medium text-gray-700 break-all">{val}</span>
//                                                             )}

//                                                             {/* 3. Status Green */}
//                                                             {row.type === 'status_green' && (
//                                                                 <div className="flex items-center gap-1 md:gap-1.5 flex-col md:flex-row">
//                                                                     <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500"></div>
//                                                                     <span className="text-[9px] md:text-[13px] text-gray-700">{val}</span>
//                                                                 </div>
//                                                             )}

//                                                             {/* 4. Price */}
//                                                             {row.type === 'price' && (
//                                                                 <div className="flex items-center gap-1 font-semibold">
//                                                                     <span className="text-green-600 text-[8px] md:text-[13px] break-all">{val}</span>
//                                                                 </div>
//                                                             )}

//                                                             {/* 5. Boolean (Green Check) */}
//                                                             {row.type === 'boolean' && val === true && (
//                                                                 <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center text-white">
//                                                                     <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="md:w-3 md:h-3">
//                                                                         <polyline points="20 6 9 17 4 12"></polyline>
//                                                                     </svg>
//                                                                 </div>
//                                                             )}

//                                                             {/* 6. Boolean Cross (Red Cross) */}
//                                                             {row.type === 'boolean_cross' && (
//                                                                 <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#EC1E24] flex items-center justify-center text-white">
//                                                                     <X className="w-2.5 h-2.5 md:w-3 md:h-3" strokeWidth={3} />
//                                                                 </div>
//                                                             )}

//                                                             {/* 7. Doc View */}
//                                                             {row.type === 'doc_view' && (
//                                                                 <div className="flex flex-col items-center gap-0.5 md:gap-1 cursor-pointer hover:opacity-80">
//                                                                     <div className="text-[#EC1E24]">
//                                                                         <FileText className="w-3 h-3 md:w-[18px] md:h-[18px]" />
//                                                                     </div>
//                                                                     <span className="text-[8px] md:text-[10px] text-[#EC1E24] font-medium">View</span>
//                                                                 </div>
//                                                             )}

//                                                             {/* 8. PDF */}
//                                                             {row.type === 'pdf' && (
//                                                                 <div className="flex items-center justify-center cursor-pointer">
//                                                                     <div className="w-6 h-6 md:w-8 md:h-8 rounded bg-red-100 flex items-center justify-center text-[#EC1E24]">
//                                                                         <FileText className="w-3 h-3 md:w-4 md:h-4" />
//                                                                     </div>
//                                                                 </div>
//                                                             )}

//                                                             {/* Note for long text */}
//                                                             {row.note && vIdx === 1 && rIdx === 0 && (
//                                                                 <div className="absolute top-8 left-[-50px] md:left-auto md:top-12 w-[150%] md:w-[110%] z-30 bg-white p-2 text-[8px] md:text-[10px] text-gray-500 shadow-md rounded border border-gray-100 hidden group-hover:block">
//                                                                     Candidates must have 10+2+3 bachelor degree...
//                                                                 </div>
//                                                             )}

//                                                             {/* Specific Text Blurb logic for first row of Eligibility */}
//                                                             {row.label === "Educational Qualifications" && (
//                                                                 <p className="mt-1 md:mt-2 text-[7px] md:text-[9px] text-gray-500 leading-tight md:leading-3 px-0 md:px-2 break-words">
//                                                                     {vIdx === 1
//                                                                         ? "10+2+3 Bachelor's degree."
//                                                                         : "Bachelor's degree."}
//                                                                 </p>
//                                                             )}

//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                                 </div>
//                                             );
//                                         })}
//                                     </div>
                                    
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//             </div>
//             <BestPartnerCount />
//             <ExploreUniversities />
//             <Confusion />

//         </Layout>
//     );
// }