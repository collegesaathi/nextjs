'use client'
import { useState } from "react"
import poupimage from "../assets/home/popup.webp"
import Image from "next/image"

export default function Index() {
    const [activeTab, setActiveTab] = useState("approvals")

    return (
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
            <div className="mt-6 w-[90%] md:w-[85%] lg:w-[1102px] bg-[linear-gradient(224.47deg,#C9060C_3.11%,#940105_100%),radial-gradient(84.52%_49.4%_at_41.87%_10.6%,rgba(255,0,0,0.49)_0%,rgba(255,0,0,0.36702)_20.6%,rgba(255,0,0,0.000049)_83.2%)] rounded-[18px] p-6 text-white flex gap-8">

                {/* LEFT SIDE – QUICK INSIGHTS */}
                <div className="w-[35%] flex flex-col gap-3">
                    <button className="text-white text-sm">&lt; Back</button>

                    <div className="text-xl font-bold mt-4">NMIMS CDOE Quick Insights</div>

                    <ul className="space-y-2 mt-3 text-sm">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full"></span>Lorem ipsum dolor sit</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full"></span>amet adipscit nunc ut</li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 bg-white rounded-full"></span>blandit nunc ut elit amet</li>
                    </ul>

                    {/* Ranking Badge */}
                    <div className="mt-5 bg-white text-black px-4 py-2 rounded-full w-max text-sm font-medium">
                        ⭐ Ranking #21
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


                    {activeTab === "approvals" && <Approvals />}
                    {activeTab === "courses" && <Courses />}
                    {activeTab === "campus" && <Campus />}
                </div>
            </div>
        </div>
    )
}

/* -------------------- TABS CONTENT -------------------- */

function Approvals() {
    return (
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


                    <div className="max-h-[72px] w-full md:w-[423px] overflow-y-auto flex flex-col gap-2 mt-2">
                        {["NAAC A+ Accreditation", "UGC Entitled", "Approved by AICTE", "MHRD Category 1"].map((item) => (
                            <div
                                key={item}
                                className="
        flex items-center justify-center gap-2
        px-3 py-2
        border border-[#EEEEEE]
        bg-[#F8F8F8]
        rounded-lg
        text-center
      "
                            >
                                <Image
                                    src={poupimage?.src}
                                    alt="images"
                                    width={30}
                                    height={30}
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


                    <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md text-sm">
                        Know More Details
                    </button>
                </div>
            </div>
        </div>
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

            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md text-sm">
                Know More Details
            </button>
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

            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md text-sm">
                Know More Details
            </button>
        </div>
    )
}


