'use client'
import { useState } from "react";
import Popup from "@/common/Popup";
import { Search } from "lucide-react";
import Image from "next/image";

export default function SearchBar() {
    const [IsOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <>

            <div className="" onClick={() => setIsOpen(true)}>
                <input
                    placeholder="Search"
                    className="w-[93px] h-[34px] rounded-[18px] border border-[#EC1E24] flex items-center justify-center font-normal text-[13px] text-[#282529] px-3"
                />
                <div className="absolute top-0 right-0 px-2 flex items-center h-full">
                    <i className="ri-search-line"></i>
                </div>
            </div>
            <Popup isOpen={IsOpen} onClose={handleClose} size={"max-w-full"} height={"max-h-full"} bg={"bg-[rgba(252,214,214,1)]"} top={"md:top-[500px]"}>
                <div className="w-full flex flex-col justify-center items-center py-4 md:py-6 px-4 my-[24px] ">

                    <div className="">
                        <h2 className="text-[20px] md:text-[28px] font-[600] font-poppins text-center text-[#1E1E1E]">
                            Find your path with the right information!

                        </h2>
                        <Image src="/images/popup/vector.svg" width={200} height={50} className=" hidden md:block ml-auto" />

                    </div>


                    {/* Subheading */}
                    <p className="text-center text-[#282529] mt-2 text-[12px] font-poppins font-[400] md:text-base">
                        Discover online courses, universities & specializations.
                    </p>

                    {/* MAIN SEARCH SECTION BOX */}
                    <div className="
            mt-8 w-[95%] 
        bg-[rgba(239,237,237,0.5882)] backdrop-blur-sm shadow-2xl border-3 border-white
            rounded-[20px] p-4 md:p-6 
          ">

                        {/* SEARCH BAR */}

                        <div className="relative w-full">
                            <Search className=" absolute top-3 left-5 w-5 h-5 " />
                            <input
                                type="text"
                                placeholder='Search "University"'
                                className="w-full bg-white h-[42px] rounded-full pl-13 pr-14 text-[#282529] outline-none text-[12px] md:text-[14px] shadow-sm placeholder:text-[#282529]"
                            />
                            {/* <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" /> */}
                            <Image src="/images/popup/voice.svg" width={15} height={15} className="absolute right-5 top-1/2 -translate-y-1/2" />
                        </div>

                        {/* TRENDING COURSES */}
                        <div className="my-8">
                            <div className="flex items-center gap-1 mb-4">

                                <Image src="/images/popup/trending.svg" width={8} height={8} />
                                <p className="text-[12px] font-[600] font-poppins ">Trending Courses</p>
                            </div>


                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {["Online MBA", "Online BCA", "Online BBA", "Online B.Com", "Online MCA", "Online BAJMC", "Online MAJMC"].map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-1 bg-white rounded-full text-[#2825297F] font-poppins font-[400] text-[12px] shadow-sm cursor-pointer"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* SPECIALIZATIONS */}
                        <div className="my-8">
                            <div className="flex items-center gap-1 mb-4">

                                <Image src="/images/popup/demand.svg" width={8} height={8} />
                                <p className="text-[12px] font-[600] font-poppins ">In-demand Specializations</p>
                            </div>

                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {[
                                    "Online MBA in Marketing",
                                    "Online MBA in Business Analytics",
                                    "Online MCA in Data Science",
                                    "Online MCA in Cybersecurity",
                                    "Online MBA in Human Resource Management",
                                    "Online MCA in AI & Machine Learning"
                                ].map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-1 bg-white rounded-full text-[#2825297F] font-poppins font-[400] text-[12px] shadow-sm cursor-pointer"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </Popup>
        </>
    );
}
