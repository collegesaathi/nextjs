"use client";
import { useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import jaipuroffice from "../assets/home/office-jaipur.png"

export default function VisitUs() {
    const [activeCity, setActiveCity] = useState("jaipur");

    const data = {
        jaipur: {
            img: jaipuroffice?.src, // replace with your image
            address:
                "152/1, First floor Shiprapath, Mansarovar Patel Marg, opp. MRF Tyre Showroom, Jaipur, Rajasthan 302020",
        },
        gurugram: {
            img: jaipuroffice?.src, // replace with your image
            address:
                "UG Floor, Plot No. xxx, Sector xx, Near Cyberhub, Gurugram, Haryana 122001",
        },
    };

    return (
        < div className="py-4 md:py-10 " >
            <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  md:px-4" >
                <div className="text-center mb-8">
                    <h2 className="font-[600] text-center text-[28px] md:text-[40px] leading-[36px] md:leading-[50px]">
                        We’d love to meet you in person
                    </h2>
                    <span className="!text-[#EC1E24] font-[600] text-center text-[28px] md:text-[40px] leading-[36px] md:leading-[50px]">
                        Come Visit Us!
                    </span>

                </div>

                {/* Tabs */}
                <div className="flex items-center gap-3 justify-left mb-6">
                    <button
                        onClick={() => setActiveCity("jaipur")}
                        className={`px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all cursor-pointer 
            ${activeCity === "jaipur"
                                ? "bg-[#282529] text-white"
                                : "bg-gray-200 text-[#8A8A8A]"
                            }`}
                    >
                        <MapPin size={16} /> Jaipur
                    </button>

                    <button
                        onClick={() => setActiveCity("gurugram")}
                        className={`px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all cursor-pointer 
            ${activeCity === "gurugram"
                                ? "bg-[#282529] text-white"
                                : "bg-[#ECEBEB] text-[#8A8A8A]"
                            }`}
                    >
                        <MapPin size={16} />Gurugram
                    </button>
                </div>

                {/* Office Image */}
                <div className="w-full max-w-[1174px] mx-auto">
                    <img
                        src={data[activeCity].img}
                        alt="office"
                        className="w-full h-auto rounded-[5px] shadow-md"
                    />
                </div>

                {/* Address Box */}
                <div className="w-full max-w-[1174px] mx-auto mt-6 bg-white shadow p-6 rounded-[12px] border-2 border-[#DFDFDF]">
                    <div className="flex items-center justify-between">
                        <h3 className="font-[600] font-poppins text-center text-[18px] md:text-[20px] leading-[26px] md:leading-[30px]">
                            {activeCity === "jaipur" ? "Jaipur Address:" : "Gurugram Address:"}
                        </h3>
       
                    </div>

                    <p className="font-poppins font-normal text-[16px] leading-[23px] text-[#282529] text-left">
                        {data[activeCity].address}
                    </p>

                </div>
            </div>
        </div >

    );
}
