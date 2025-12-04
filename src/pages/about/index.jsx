'use client'
import { useState } from "react"
import poupimage from "../assets/home/popup.webp"
import Image from "next/image"
import GlobalButton from "@/common/GlobalButton"
import Popup from "@/common/Popup"
import StarRating from "@/common/Rating"
import { ChevronLeft } from "lucide-react";

export default function Index() {
    const [activeTab, setActiveTab] = useState("approvals")
    const [IsOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }


    const handleBack = () => {
        const index = tabOrder.indexOf(activeTab);
        if (index > 0) {
            setActiveTab(tabOrder[index - 1]);
        }
    };

    const tabOrder = ["approvals", "courses", "campus", "ratings"];

    return (
        <>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md text-sm" onClick={handleOpen}>
                Open

            </button>

            <Popup isOpen={IsOpen} onClose={handleClose} size={"max-w-full"} height={"max-h-full"}>
                <div className="w-full flex flex-col items-center py-2">

                    {/* TOP TAB BUTTONS */}
                    <div className="flex md:gap-4 bg-[linear-gradient(224.47deg,#BB0308_3.11%,#E9050C_48.29%,#BB0308_100%)] rounded-[8px] px-4 py-2 shadow " >
                        {["approvals", "courses", "campus", "ratings"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
  px-2 py-1 rounded-[4px] font-poppins font-[600] text-[16px] leading-[41px] transition-all 
  ${activeTab === tab ? "bg-white text-[#EC1E24]" : "text-white "}
`}

                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* MAIN BOX */}
                    <div className="
                    relative
    mt-6 w-[90%] md:w-[85%] lg:w-[1102px]
    bg-[linear-gradient(224.47deg,#C9060C_3.11%,#940105_100%),radial-gradient(84.52%_49.4%_at_41.87%_10.6%,rgba(255,0,0,0.49)_0%,rgba(255,0,0,0.36702)_20.6%,rgba(255,0,0,0.000049)_83.2%)]
    rounded-[18px] p-6 text-white
    flex flex-col md:flex-row
    justify-between gap-8
">

                        {tabOrder.indexOf(activeTab) > 0 && (
                            <button
                                onClick={handleBack}
                                className=" absolute md:hidden top-2 right-[-20] text-sm px-10"
                            >
                                <ChevronLeft size={20} />
                            </button>
                        )}

                        {/* LEFT SIDE – HIDE ON MOBILE */}
                        <div className="hidden md:flex w-1/3 h-auto flex-col gap-3 relative">
                            {/* Your entire left content remains unchanged */}
                            {/* BACK */}
                            {tabOrder.indexOf(activeTab) > 0 && (
                                <button
                                    onClick={handleBack}
                                    className="text-white text-sm text-left px-10"
                                >
                                    &lt; Back
                                </button>
                            )}





                            <div className=" px-10 my-6 space-y-4">
                                <div class="logo-box">
                                    <img src="logo.png" class="logo-img" />
                                </div>

                                <div className="flex items-center">
                                    <h2 className="text-[32px] font-poppins leading-[41px] font-[600]">
                                        NMIMS CDOE Quick Insights
                                    </h2>
                                </div>

                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                        Lorem ipsum dolor sit
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                        amet adipscit nunc ut
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                        blandit nunc ut elit amet
                                    </li>
                                </ul>
                            </div>

                            {/* ranking badge */}

                            <div className="px-10">
                                <div className=" relative">
                                    <div className="w-[61px] h-[61px] rounded-full bg-white shadow z-10 relative"></div>
                                    <div
                                        className="
                absolute 
                top-[8px] left-[22px]
                w-[167px] h-[44px]
                rounded-[12px]
                flex items-center pl-[55px]
                font-poppins text-[16px] font-medium text-[#282529]
                bg-[linear-gradient(105.26deg,#C69517_1.42%,#FBE598_84.42%)]
                shadow
        "
                                    >
                                        Ranking <span className="font-bold ml-1">#21</span>
                                    </div>
                                </div>
                            </div>

                            {/* hashtags */}
                            <div className="flex flex-wrap gap-3 mt-4 px-10">
                                {/* all tag divs remain unchanged */}
                                <div className="flex flex-wrap gap-[5px]">
                                    <div className="w-[57px] h-[15px] rounded-full bg-white flex items-center justify-center text-[12px] p-2 text-black">
                                        #tag1
                                    </div>
                                    <div className="w-[96px] h-[15px] rounded-full bg-white flex items-center justify-center text-[12px] p-2 text-black">
                                        #tag2
                                    </div>
                                    <div className="w-[75px] h-[15px] rounded-full bg-white flex items-center justify-center text-[12px] p-2 text-black">
                                        #tag3
                                    </div>
                                    <div className="w-[107px] h-[15px] rounded-full bg-white flex items-center justify-center text-[12px] p-2 text-black">
                                        #tag4
                                    </div>
                                    <div className="w-[105px] h-[15px] rounded-full bg-white flex items-center justify-center text-[12px] p-2 text-black">
                                        #tag5
                                    </div>
                                    <div className="w-[57px] h-[15px] rounded-full bg-white flex items-center justify-center text-[12px] p-2 text-black">
                                        #tag6
                                    </div>
                                    <div className="w-[122px] h-[15px] rounded-full bg-white flex items-center justify-center text-[12px] p-2 text-black">
                                        #tag7
                                    </div>

                                </div>
                            </div>
                        </div>




                        <div className="
    w-full md:w-2/3
    
    md:h-[500px]
    rounded-[18px]
    border-2 border-white
    bg-[linear-gradient(180deg,#F9F6F6_0.56%,#F5C7C7_100%)]
    px-4 text-black
    flex justify-center items-center
">




                            <div className="flex justify-center items-center w-full">
                                <div className="
            h-[469px]
            rounded-[18px]
            border-2 border-white
            w-full md:w-[583px] bg-white flex justify-center
        ">
                                    <div className="
                h-[281px]
                rounded-[18px]
                border-2 border-white
                w-full md:w-[453px] bg-white p-2
            ">
                                        {activeTab === "approvals" && <Approvals />}
                                        {activeTab === "courses" && <Courses />}
                                        {activeTab === "campus" && <Campus />}
                                        {activeTab === "ratings" && <Ratings />}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </Popup>
        </>

    )
}


function Approvals() {

    const approvalData = [
        {
            name: "NAAC A+ Accreditation",
            icon: "/images/popup/"

        },
        {
            name: "UGC Entitled",
            icon: ""
        },
        {
            name: "Approved by AICTE",
            icon: ""
        },
        {
            name: "MHRD Category 1",
            icon: "",
        },
        {
            name: "UGC Entitled",
            icon: ""
        },
        {
            name: "NAAC A+ Accreditation",
            icon: "",
        }

    ]
    return (


        <>
            <h2 className="
                    font-poppins
                    font-[600]
                    text-[20px]
                    leading-[41px]
                    tracking-[0px]
                    text-center
                    ">
                <span className="text-[#EC1E24]"> Approvals</span> of NMIMS CDOE
            </h2>


            <div className="max-h-85 overflow-y-auto flex flex-col gap-3 mt-2">
                {["NAAC A+ Accreditation", "UGC Entitled", "Approved by AICTE", "MHRD Category 1", "UGC Entitled", "NAAC A+ Accreditation",].map((item) => (
                    <div
                        className="
w-full md:w-[400px]
h-[72px]
    rounded-[11px]
    border-[1px] border-[#EEEEEE]
    bg-[#F8F8F8]
    flex items-center justify-center gap-3 
  "
                    >
                        <div className="flex items-center justify-left w-[300px]">
                            <Image
                                src={poupimage?.src}
                                alt="images"
                                width={85}
                                height={85}
                                className="object-contain"
                            />

                            <span className="
        text-[16px]
        font-normal
        font-poppins
        text-[#282529]
        leading-[20px]
      ">
                                {item}
                            </span>
                        </div>

                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-4 ">
                <button
                    className="
    w-[155px] 
    h-[41px]
    leading-[41px]
    rounded-[8px] 
    btn-red-gradient
    flex items-center justify-center
  "
                >
                    <span className="text-white text-[14px] font-[400] font-poppins">
                        Know More Details
                    </span>
                </button>
            </div>
        </>





    )
}

function Courses() {
    const coursesdata = [
        {
            name: "MCA",
            desc: "Innovative",
            image: "/images/popup/courses/1.svg",
            slug: "MCA"
        },
        {
            name: "MA",
            desc: "2 Years",
            image: "/images/popup/courses/1.svg",
            slug: "MA"
        },
        {
            name: "M.Tech",
            desc: "Advanced",
            image: "/images/popup/courses/1.svg",
            slug: "M.Tech"
        },
        {
            name: "LLM",
            desc: "High ROI",
            image: "/images/popup/courses/1.svg",
            slug: "LLM"
        },
        {
            name: "M.Tech",
            desc: "Advanced",
            image: "/images/popup/courses/1.svg",
            slug: "M.Tech"
        },
        {
            name: "LLM",
            desc: "High ROI",
            image: "/images/popup/courses/1.svg",
            slug: "LLM"
        },
    ];

    return (
        <div className="px-2 ">
            <h2 className="text-center font-[600] text-[20px] mb-4">
                <span className="text-[#EC1E24]">Courses</span> offered by NMIMS CDOE
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-85 overflow-y-auto pr-2">
                {coursesdata.map((course, i) => (
                    <div
                        key={i}
                        className="relative border rounded-xl flex flex-col items-center px-3 py-4 bg-[#ffffff]"
                    >

                        {/* TAG */}
                        <div className="
                            absolute top-0 left-1/2 -translate-x-1/2
                            bg-[#F2F2F2] text-[10px] px-2 py-[2px] rounded-b-md
                            text-[#777] font-medium
                        ">
                            {course.desc}
                        </div>

                        {/* ICON + TITLE */}
                        <div className="mt-5 flex flex-col items-center space-y-2">
                            <Image src={course.image} width={32} height={30} alt="" />
                            <h3 className="font-[600] text-[16px] text-[#282529]">
                                {course.name}
                            </h3>
                        </div>

                        {/* BUTTON */}
                        <button className="
                            mt-3 bg-[#EC1E24] text-white
                            text-xs px-3 py-2 w-full
                            rounded-[12px] font-medium
                        ">
                            View Program
                        </button>
                    </div>
                ))}
            </div>

            {/* Know More */}
            <div className="flex justify-center items-center mt-4 ">
                <button
                    className="
    w-[155px] 
    h-[41px]
    leading-[41px]
    rounded-[8px] 
    btn-red-gradient
    flex items-center justify-center
  "
                >
                    <span className="text-white text-[14px] font-[400] font-poppins">
                        Know More Details
                    </span>
                </button>
            </div>
        </div>
    )
}

function Campus() {
    const locations = [
        { name: "Mumbai", img: "/images/popup/campus/campus.png" },
        { name: "Shirpur", img: "/images/popup/campus/campus.png" },
        { name: "Indore", img: "/images/popup/campus/campus.png" },
        { name: "Mumbai", img: "/images/popup/campus/campus.png" },
        { name: "Mumbai", img: "/images/popup/campus/campus.png" },
        { name: "Shirpur", img: "/images/popup/campus/campus.png" },
        { name: "Indore", img: "/images/popup/campus/campus.png" },
        { name: "Mumbai", img: "/images/popup/campus/campus.png" },
    ];

    return (
        <div className="w-full">
            <h2 className="text-center font-[600] font-poppins text-[18px] md:text-[20px] mb-4">
                <span className="text-[#EC1E24]">Campus </span>Locations
            </h2>

            {/* Responsive Grid */}
            <div className="
          grid 
          grid-cols-1
        
          md:grid-cols-2
         
          gap-4
          max-h-85
          overflow-y-auto
          px-1
        ">
                {locations.map((loc, i) => (
                    <div
                        key={i}
                        className="border flex items-center gap-3 rounded-[12px] p-3"
                    >
                        <Image
                            src={loc.img}
                            alt="campus"
                            width={50}
                            height={50}
                            className="rounded-full sm:w-[60px] sm:h-[60px]"
                        />

                        <p className="text-[14px] sm:text-[15px] font-poppins font-[400]">
                            {loc.name}
                        </p>
                    </div>
                ))}
            </div>

            {/* Button */}
            <div className="flex justify-center items-center mt-4">
                <button className="
            w-[140px]
            sm:w-[155px]
            h-[40px]
            rounded-[8px]
            btn-red-gradient
            flex items-center justify-center
          ">
                    <span className="text-white text-[13px] sm:text-[14px] font-[400] font-poppins">
                        Know More Details
                    </span>
                </button>
            </div>
        </div>
    );
}

function Ratings() {
    const peripheralRatings = [
        { name: "Average Ratings", rating: 3.2 },
        { name: "Digital Infrastructure", rating: 4.2 },
        { name: "Curriculum", rating: 3.9 },
        { name: "Value For Money", rating: 3.1 },
    ];

    return (
        <div>
            <h2 className="text-center font-[600] font-poppins text-[20px] mb-4"><span className="text-[#EC1E24]">Ratings and Reviews </span>by Students</h2>

            <div className="  max-h-85 ">


                <div className="flex items-center justify-center gap-10 ">
                    <div className="w-[110px] sm:w-[126px] h-[95px] rounded-[8px] bg-[#fcf0ee] flex items-center justify-center space-y-1.5">
                        <h3 className="font-poppins font-[600] md:text-[52px] sm:text-[36px] text-[#282529]">4.5</h3>
                        <div className=" flex flex-col justify-center items-center">
                            <StarRating rating="4.5" />
                            <p className="font-poppins text-[8px] text-[#282529] text-center">
                                Based on 20 Reviews
                            </p>
                        </div>

                    </div>
                </div>


                <div className="border p-5 rounded-lg ">
                    <h3 className="text-xl font-semibold mb-4">Peripheral Ratings</h3>
                    {peripheralRatings.map((cat, i) => (
                        <div key={i} className="flex justify-between text-sm space-y-4">
                            <span>{cat.name}</span>
                            <div className=" flex justify-center gap-2 items-center">
                                <span className="text-[17px] font-[600]">{cat.rating}</span>
                                <StarRating rating={cat.rating} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="flex justify-center items-center mt-6 ">
                <button
                    className="
    w-[155px] 
    h-[41px]
    leading-[41px]
    rounded-[8px] 
    btn-red-gradient
    flex items-center justify-center
  "
                >
                    <span className="text-white text-[14px] font-[400] font-poppins">
                        Know More Details
                    </span>
                </button>
            </div>
        </div>
    )
}


