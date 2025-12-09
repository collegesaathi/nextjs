import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import { Search } from "lucide-react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { FaArrowRightLong } from "react-icons/fa6";

// --- DATA SECTION ---

// 1. DUMMY UNIVERSITY DATA (Level 3)
const universityData = [
    { name: "Manipal Online University", logo: "/images/programs/program1.svg" },
    { name: "NMIMS Online", logo: "/images/programs/program2.svg" },
    { name: "Chandigarh University", logo: "/images/programs/program3.svg" },
    { name: "Jain University", logo: "/images/programs/program4.svg" },
    { name: "DY Patil Navi Mumbai", logo: "/images/programs/program1.svg" },
    { name: "Deakin business school", logo: "/images/programs/program2.svg" },
    { name: "Amity University", logo: "/images/programs/program3.svg" },
    { name: "Lovely Professional University", logo: "/images/programs/program4.svg" },
];

const bbaSpecs = [
    { name: "Finance Management", image: "/images/programs/program1.svg" },
    { name: "Marketing Management", image: "/images/programs/program2.svg" },
    { name: "Business Analytics", image: "/images/programs/program3.svg" },
    { name: "Entrepreneurship", image: "/images/programs/program4.svg" },
        { name: "Finance Management", image: "/images/programs/program1.svg" },
    { name: "Marketing Management", image: "/images/programs/program2.svg" },
    { name: "Business Analytics", image: "/images/programs/program3.svg" },
    { name: "Entrepreneurship", image: "/images/programs/program4.svg" },
];

const bcaSpecs = [
    { name: "Cloud Computing", image: "/images/programs/program3.svg" },
    { name: "Artificial Intelligence", image: "/images/programs/program4.svg" },
    { name: "Data Science", image: "/images/programs/program1.svg" },
    { name: "Full Stack Development", image: "/images/programs/program2.svg" },
      { name: "Cloud Computing", image: "/images/programs/program3.svg" },
    { name: "Artificial Intelligence", image: "/images/programs/program4.svg" },
    { name: "Data Science", image: "/images/programs/program1.svg" },
    { name: "Full Stack Development", image: "/images/programs/program2.svg" },
];

const defaultSpecs = [
    { name: "General Specialization", image: "/images/programs/program1.svg" },
];

function Index() {
    // --- STATE ---
    const [selectedParentCourse, setSelectedParentCourse] = useState(null);
    const [selectedSpecialization, setSelectedSpecialization] = useState(null);
    const [selectedUniversity, setSelectedUniversity] = useState(null)
    const [selectedDomain, setSelectedDomain] = useState(null);

    const [openIndex, setOpenIndex] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleToggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

const courseData = [
  { name: "Online BBA", image: "/images/programs/program1.svg", specializations: bbaSpecs, domain: "PG Courses" },
  { name: "BCA", image: "/images/programs/program3.svg", specializations: bcaSpecs, domain: "UG Courses" },
  { name: "B.Com", image: "/images/programs/program2.svg", specializations: defaultSpecs, domain: "Executive Programs" },
  { name: "BAJMC", image: "/images/programs/program4.svg", specializations: defaultSpecs, domain: "PG Courses" },
  { name: "BBA in Analytics", image: "/images/programs/program1.svg", specializations: bbaSpecs, domain: "UG Courses" },
  { name: "Online BA", image: "/images/programs/program4.svg", specializations: defaultSpecs, domain: "Certification" },
  { name: "BBA in Analytics", image: "/images/programs/program1.svg", specializations: bbaSpecs, domain: "PG Courses" },
  { name: "Online BA", image: "/images/programs/program4.svg", specializations: defaultSpecs, domain: "Executive Programs" },
];


    const sidebarData = [
        { title: "PG Courses", sub: [] },
        { title: "UG Courses", sub: ["After 12th"] },
        { title: "Executive Programs", sub: [] },
        { title: "Certification", sub: [] },
        { title: "Doctorate/PhD", sub: [] },
    ];

  let displayData = selectedDomain
  ? courseData.filter(c => c.domain === selectedDomain)
  : courseData;
    let isUniversityView = false;

    if (selectedSpecialization) {
        displayData = universityData;
        isUniversityView = true;
    } else if (selectedParentCourse) {
        displayData = selectedParentCourse.specializations;
    }

    const handleBack = () => {
        if (selectedUniversity) {
            setSelectedUniversity(null);
        } else if (selectedSpecialization) {
            setSelectedSpecialization(null);
        } else if (selectedParentCourse) {
            setSelectedParentCourse(null);
            setSelectedIndex(null);
        }
    };

    const handleReset = () => {
        setSelectedParentCourse(null);
        setSelectedSpecialization(null);
        setSelectedIndex(null);
        setSelectedDomain(null)
    };

    return (
        <Layout>
            <div className="py-4 md:mt-20 lg:mt-20">
                <div className="w-full pt-8 md:pt-12  pb-10 mx-auto container xl:max-w-[1230px]">

                    {/* TOP BACK LINK */}
                    <div className="flex justify-between items-center gap-2 text-sm text-black font-medium cursor-pointer border-b border-[#E3E3E3] px-3 py-3">
                        <div className="flex gap-2" onClick={handleBack}>
                            <div className="text-[18px] w-5 h-5 bg-[#EFF3F6] items-center justify-center flex rounded">
                                <IoChevronForwardOutline color="red" className={selectedParentCourse ? "rotate-180" : ""} />
                            </div>
                            <p>
                                {selectedSpecialization
                                    ? `Back to ${selectedParentCourse.name}`
                                    : selectedParentCourse
                                        ? "Explore All Programs"
                                        : "Explore All Programs"}
                            </p>
                        </div>
                        <ImCross className="cursor-pointer" onClick={handleReset} />
                    </div>

                    <div className="w-full flex flex-col md:flex-row gap-3 lg:gap-1 mt-6">

                        {/* SIDEBAR */}
                        <div className="w-full md:w-[260px] bg-white rounded-xl  px-3 py-3 lg:p-5 h-fit ">
                            <h3 className="text-[16px] font-poppins text-[#EC1E24] mb-4">Browse by Domains</h3>
                            <div className="space-y-[29.5px] md:border border-[#CECECE] p-1 md:p-4 rounded-[10px]">
                                {sidebarData.map((item, i) => (
                                    <div key={i} className="md:border-l-[2px] border-[#CECECE] hover:border-[#EC1E24]">
                                      <div 
  onClick={() => {
      handleToggle(i);
      setSelectedDomain(item.title); // ← FILTER ACTIVE
      setSelectedParentCourse(null);
      setSelectedSpecialization(null);
  }}
  className="font-[400] py-2 flex justify-between items-center cursor-pointer md:pl-4 hover:text-[#EC1E24]"
>
                                            <p>{item.title}</p>
                                            <div className="md:hidden" style={{ transform: openIndex === i ? "rotate(90deg)" : "rotate(0deg)" }}>
                                                <IoChevronForwardOutline />
                                            </div>
                                        </div>
                                        <div className={`pl-6 mt-1 text-xs text-gray-500 hover:text-[#EC1E24] cursor-pointer ${openIndex === i ? "block" : "hidden"} md:block`}>
                                            {item.sub.map((s, idx) => (<p key={idx}>{s}</p>))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex-1">

                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 px-4">

                                {selectedParentCourse && (
                                    <div className="text-[15px] font-medium flex flex-col flex-wrap gap-1 shrink-0">

                                        {/* ------- LEVEL 1: Parent Course ------- */}
                                        {!selectedSpecialization && !selectedUniversity && (
                                            <div
                                                onClick={() => setSelectedSpecialization(null)}
                                                className="flex items-center text-[#EC1E24] cursor-pointer hover:underline"
                                            >
                                                <p>{selectedParentCourse.name}</p>
                                                <IoChevronForwardOutline className="mx-1" />
                                            </div>
                                        )}

                                        {/* ------- LEVEL 2: University selected ------- */}
                                        {selectedUniversity ? (
                                            <>
                                                <div className="flex items-center text-[#EC1E24]">
                                                    <p>{selectedUniversity.name}</p>
                                                    <IoChevronForwardOutline className="mx-1" />
                                                </div>
                                                <span className="text-gray-500">Online Universities</span>
                                            </>
                                        ) : selectedSpecialization ? (
                                            /* ------- LEVEL 2: Specialization selected ------- */
                                            <>
                                                <div className="flex items-center text-[#EC1E24]">
                                                    <p>{selectedSpecialization.name}</p>
                                                    <IoChevronForwardOutline className="mx-1" />
                                                </div>
                                                <span className="text-gray-500">Online Universities</span>
                                            </>
                                        ) : (
                                            /* ------- LEVEL 2: Nothing selected yet ------- */
                                            <span className="text-gray-500">Specializations</span>
                                        )}

                                    </div>
                                )}

                                {/* Search Bar */}
                                <div className={`
                    h-[50px] rounded-full bg-white flex items-center px-4 gap-2 border border-[#CECECE] 
                    transition-all duration-300 ease-in-out 
                    ${selectedParentCourse ? "w-full lg:w-[500px] xl:w-[800px]" : "w-full"}
                `}>
                                    <Search className="text-gray-400" width={20} height={20} />
                                    <input
                                        type="text"
                                        placeholder={
                                            isUniversityView
                                                ? 'Search "University"'
                                                : selectedParentCourse
                                                    ? `Search in ${selectedParentCourse.name}`
                                                    : 'Search "University"'
                                        }
                                        className="flex-1 outline-none text-[15px] placeholder:text-gray-400"
                                    />
                                    <Image src="/icons/normal/voice.svg" alt="mic" width={20} height={20} />
                                </div>
                            </div>

                            {/* GRID */}
                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 px-2 ">
                                {displayData.map((item, index) => {

                                    if (isUniversityView) {
                                        return (
                                            <div key={index} className="bg-white shadow-md hover:shadow-xl rounded-xl p-5 h-[240px] flex flex-col items-center md:items-start text-center justify-between transition-all">
                                                <div className="w-16 h-16 flex  mb-2">
                                                    <Image src={item.logo} width={60} height={60} alt={item.name} className="object-contain " />
                                                </div>

                                                <h3 className="text-[14px] font-poppins font-[600] text-black leading-tight ">
                                                    {item.name}
                                                </h3>

                                                <div className="w-full items-center flex flex-col gap-3 ">
                                                    <div
                                                        onClick={() => setSelectedUniversity(item)}
                                                        className="flex items-center  md:self-start gap-1 text-[14px] font-[400] font-poppins text-gray-500 cursor-pointer hover:text-[#EC1E24] transition-colors"
                                                    >
                                                        <p className="">View info </p>
                                                        <div><IoChevronForwardOutline /></div>
                                                    </div>

                                                    <div className="flex md:self-start items-center gap-2 cursor-pointer">
                                                        <input type="checkbox" id={`compare-${index}`} className="w-4 h-4 accent-red-600 cursor-pointer" />
                                                        <label htmlFor={`compare-${index}`} className="text-[14px] font-poppins text-[#2825297F] cursor-pointer select-none">Add to compare</label>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                    return (
                                        <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-5 h-[200px] flex flex-col justify-between" key={index}>
                                            <Image src={item.image} width={50} height={50} alt={item.name} className="self-center md:self-start"/>
                                            <h3 className="text-[14px] font-poppins font-[600] mt-2 self-center md:self-start">{item.name}</h3>

                                            {selectedParentCourse ? (
                                                <div
                                                    onClick={() => { setSelectedSpecialization(item), setSelectedUniversity(item) }}
                                                    className="mt-3 flex items-center gap-1 justify-center md:justify-start text-[14px] font-poppins text-gray-600 cursor-pointer hover:text-[#EC1E24]"
                                                >    

                                                <div className="flex items-center">
                                                   <p>View info </p> 
                                                   <div className="hidden md:block"> <IoChevronForwardOutline /> </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => {
                                                        setSelectedIndex(index);
                                                        setSelectedParentCourse(item);
                                                    }}
                                                    className={`mt-3 px-4 flex items-center gap-2 py-1 rounded-full text-[12px] md:ext-[14px] font-poppins font-[400] w-fit hover:bg-[#EC1E24] hover:text-[white]
                                ${selectedIndex === index
                                                            ? "bg-[#EC1E24] text-white"
                                                            : "bg-[#FFF5F5] text-red-600"
                                                        }`}
                                                >  


                                                   <p> View Specialization </p> 
                                                <div> <FaArrowRightLong className="hidden md:block" /></div> 
                                                </button>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                        {displayData?.length > 0 && (
  <div className="w-full flex justify-center mt-6">
    <button className="bg-red-600 text-white flex items-center gap-2 px-8 py-1 font-poppins font-[600] rounded-full text-[14px] shadow-md hover:bg-red-700 transition">
      <p>View All </p> 
      <div><FaArrowRightLong /></div>
    </button>
  </div>
)}




                        </div>    
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Index;