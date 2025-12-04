'use client'
import { useState } from "react"
import poupimage from "../assets/home/popup.webp"
import Image from "next/image"
import GlobalButton from "@/common/GlobalButton"
import Popup from "@/common/Popup"

export default function Index() {
    const [activeTab, setActiveTab] = useState("approvals")
    const [IsOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md text-sm" onClick={handleOpen}>
                Open

            </button>

            <Popup isOpen={IsOpen} onClose={handleClose} size={"max-w-full"} height={"max-h-full"}>
                <div className="w-full flex flex-col items-center py-6">

                    {/* TOP TAB BUTTONS */}
                    <div className="flex gap-4 bg-[linear-gradient(224.47deg,#BB0308_3.11%,#E9050C_48.29%,#BB0308_100%)] rounded-[8px] px-4 py-2 shadow" >
                        {["approvals", "courses", "campus", "ratings"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
  px-5 py-1 rounded-[4px] font-poppins font-[600] text-[16px] leading-[41px] transition-all
  ${activeTab === tab ? "bg-white text-[#EC1E24]" : "text-white "}
`}

                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* MAIN BOX */}
                    <div className="mt-6 w-[90%] md:w-[85%] lg:w-[1102px] bg-[linear-gradient(224.47deg,#C9060C_3.11%,#940105_100%),radial-gradient(84.52%_49.4%_at_41.87%_10.6%,rgba(255,0,0,0.49)_0%,rgba(255,0,0,0.36702)_20.6%,rgba(255,0,0,0.000049)_83.2%)] rounded-[18px] p-6 text-white flex justify-between gap-8">
                        {/* LEFT SIDE – QUICK INSIGHTS */}
                        <div className="w-[230px] h-[82px] flex flex-col gap-3 relative top-[64px]">


                            {/* Back Button */}
                            <button className="text-white text-sm">&lt; Back</button>

                            <div class="logo-box">
                                <img src="logo.png" class="logo-img" />
                            </div>

                            {/* Heading Block — fixed height as per your design */}
                            <div className=" flex items-center">
                                <h2 className="text-[32px] font-poppins leading-[41px] font-[600] ">
                                    NMIMS CDOE Quick Insights
                                </h2>
                            </div>

                            {/* Bullet List */}
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-white rounded-full"></span>
                                    <span className="   font-poppins
                    font-[400]
                    text-[14px]
                    leading-[100%]
                    tracking-[0px]
                    text-center">
                                        Lorem ipsum dolor sit
                                    </span>
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

                            {/* Ranking Badge */}
                            <div className="relative w-fit">

                                {/* Circle */}
                                <div
                                    className="
      w-[61px] h-[61px] 
      rounded-full bg-white 
      shadow-[4px_1px_4px_0px_#00000017]
      z-10 relative
    "
                                ></div>

                                {/* Gradient Badge */}
                                <div
                                    className="
      absolute 
      top-[8px] left-[22px]
      w-[167px] h-[44px]
      rounded-[12px]
      flex items-center pl-[55px]
      font-poppins text-[16px] font-medium text-[#282529]
      bg-[linear-gradient(105.26deg,#C69517_1.42%,#FBE598_84.42%)]
      shadow-[4px_1px_4px_0px_#00000017]
    "
                                >
                                    Ranking <span className="font-bold ml-1">#21</span>
                                </div>

                            </div>
                            <div className="flex flex-wrap gap-3 mt-4">

                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-[91px] h-[12px] rounded-full bg-white flex items-center justify-center text-[10px] text-black">
                                        #tag1
                                    </div>

                                    <div className="w-[91px] h-[12px] rounded-full bg-white flex items-center justify-center text-[10px] text-black">
                                        #tag2
                                    </div>

                                    <div className="w-[91px] h-[12px] rounded-full bg-white flex items-center justify-center text-[10px] text-black">
                                        #tag3
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-3">

                                    <div className="w-[150px] h-[12px] rounded-full bg-white flex items-center justify-center text-[10px] text-black">
                                        #tag4
                                    </div>

                                    <div className="w-[140px] h-[12px] rounded-full bg-[#D8F6A4] flex items-center justify-center text-[10px] text-black">
                                        #tag5
                                    </div>
                                </div>
                                <div className="flex items-center justify-center gap-3">


                                    <div className="w-[200px] h-[12px] rounded-full bg-white flex items-center justify-center text-[10px] text-black">
                                        #tag6
                                    </div>

                                    <div className="w-[130px] h-[12px] rounded-full bg-white flex items-center justify-center text-[10px] text-black">
                                        #tag7
                                    </div>
                                </div>

                            </div>


                        </div>
                        {/* RIGHT SIDE – CONTENT BOX */}
                        <div className="
  w-full md:w-[556px]
  h-[500px]
  rounded-[18px]
  border-2 border-white
  bg-[linear-gradient(180deg,#F9F6F6_0.56%,#F5C7C7_100%),radial-gradient(46.7%_42%_at_50%_-5.1%,#F9EAEA_0%,rgba(255,255,255,0.0001)_100%)]
  px-4 text-black
  flex justify-center items-center
">
                            <div className="flex justify-center items-center">
                                <div className="
        h-[469px]
        rounded-[18px]
        border-2 border-white
        text-black
        w-full md:w-[483px] bg-white flex justify-center items-center
    ">
                                    <div className="
        h-[381px]
        rounded-[18px]
        border-2 border-white
        text-black
        w-full md:w-[423px] bg-white ">
                                        {activeTab === "approvals" && <Approvals />}
                                        {activeTab === "courses" && <Courses />}
                                        {activeTab === "campus" && <Campus />}
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

/* -------------------- TABS CONTENT -------------------- */

function Approvals() {
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


            <div className="max-h-64 overflow-y-auto flex flex-col gap-3 mt-2">
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
    return (
        <div>
            <h2 className="text-center font-semibold text-lg mb-4">
                Courses offered by NMIMS CDOE
            </h2>

            <div className="grid grid-cols-2 gap-4 max-h-64 overflow-y-auto">
                {["MCA", "MA", "M.Tech", "LLM"].map((course) => (
                    <div
                        key={course}
                        className="border p-3 rounded-xl flex flex-col items-center"
                    >
                        <h3 className="font-semibold">{course}</h3>
                        <button className="mt-2 bg-red-600 text-white text-xs px-3 py-1 rounded">
                            View Program
                        </button>
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
        </div>
    )
}

function Campus() {
    const locations = [
        "Mumbai",
        "Shirpur",
        "Indore",
        "Mumbai",
        "Mumbai",
        "Shirpur",
        "Indore",
        "Mumbai",
    ]

    return (
        <div>
            <h2 className="text-center font-semibold text-lg mb-4">Campus Locations</h2>

            <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto">
                {locations.map((loc, i) => (
                    <div key={i} className="border rounded-lg p-3 text-center">
                        {loc}
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
        </div>
    )
}


