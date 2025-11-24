import React from "react";
import { IconContext } from "react-icons";

export default function GlobalButton({
    title,
    onClick,
    classes = "",
}) {
    return (
        <div className="md:flex flex-wrap justify-between items-center">

            <button
                onClick={onClick}
                className="
    w-full cursor-pointer mb-3 
    h-[40px] min-w-[130px]
    bg-[#EC1E24] text-white 
    text-[12px] md:text-[14px]
     font-[600] font-poppins tracking-[-0.04em]
    border border-[#EC1E24]
    rounded-full outline-none
    flex items-center justify-center    
    hover:text-[#EC1E24] hover:bg-white
    transition-all duration-150
  "
            >
                {title}
            </button>

        </div>
    );
}
