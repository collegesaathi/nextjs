"use client";
import { useState } from "react";
import { MapPin, ChevronDown } from "lucide-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import jaipuroffice from "../assets/home/office-jaipur.png";

export default function VisitUs() {
    const [activeCity, setActiveCity] = useState("jaipur");
    const [isAddressOpen, setIsAddressOpen] = useState(true);

    const data = {
        jaipur: {
            // Added multiple images for the slider (using same image for demo)
            images: [jaipuroffice?.src, jaipuroffice?.src, jaipuroffice?.src],
            address:
                "152/1, First floor Shiprapath, Mansarovar Patel Marg, opp. MRF Tyre Showroom, Jaipur, Rajasthan 302020",
        },
        gurugram: {
            images: [jaipuroffice?.src, jaipuroffice?.src],
            address:
                "UG Floor, Plot No. xxx, Sector xx, Near Cyberhub, Gurugram, Haryana 122001",
        },
    };

    const toggleAddress = () => {
        setIsAddressOpen(!isAddressOpen);
    };

    return (
        <div className="py-4 md:py-10">
            <div className="mx-auto container sm:container md:container xl:max-w-[1230px] md:px-4">
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
                        onClick={() => {
                            setActiveCity("jaipur");
                            setIsAddressOpen(false); // Optional: close address when switching cities
                        }}
                        className={`px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all cursor-pointer 
            ${activeCity === "jaipur"
                                ? "bg-[#282529] text-white"
                                : "bg-gray-200 text-[#8A8A8A]"
                            }`}
                    >
                        <MapPin size={16} /> Jaipur
                    </button>

                    <button
                        onClick={() => {
                            setActiveCity("gurugram");
                            setIsAddressOpen(false);
                        }}
                        className={`px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all cursor-pointer 
            ${activeCity === "gurugram"
                                ? "bg-[#282529] text-white"
                                : "bg-[#ECEBEB] text-[#8A8A8A]"
                            }`}
                    >
                        <MapPin size={16} /> Gurugram
                    </button>
                </div>

                {/* Swiper Slider replacing static Image */}
                <div className="w-full max-w-[1174px] mx-auto overflow-hidden rounded-[12px] shadow-md">
                    <Swiper
                        key={activeCity} // Re-initializes swiper when city changes
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        navigation={true}
                        autoplay={{ delay: 3000 }}
                        modules={[Pagination, Navigation, Autoplay]}
                        className="mySwipercontact"
                    >
                        {data[activeCity].images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`${activeCity} office ${index + 1}`}
                                    className="w-full h-[300px] md:h-[500px] object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Address Box with Toggle */}
                <div 
                    className="w-full max-w-[1174px] mx-auto mt-6 bg-white shadow p-6 rounded-[12px] border-2 border-[#DFDFDF] cursor-pointer"
                    onClick={toggleAddress}
                >
                    <div className="flex justify-between items-center">
                        <h3 className="font-[600] font-poppins text-[18px] md:text-[20px] leading-[26px] md:leading-[30px]">
                            {activeCity === "jaipur" ? "Jaipur Address:" : "Gurugram Address:"}
                        </h3>
                        <ChevronDown 
                            className={`transition-transform duration-300 ${isAddressOpen ? "rotate-180" : "rotate-0"}`} 
                        />
                    </div>

                    {/* Collapsible Content */}
                    <div className={`overflow-hidden transition-all duration-300 ${isAddressOpen ? "max-h-40 mt-4" : "max-h-0"}`}>
                        <p className="font-poppins font-normal text-[16px] leading-[23px] text-[#282529] text-left">
                            {data[activeCity].address}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}