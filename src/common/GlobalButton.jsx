import React from "react";
import { IconContext } from "react-icons";

export default function GlobalButton({
    children,
    onClick,
    classes = "",
}) {
    return (
        <div className="md:flex flex-wrap justify-between items-center">

            <button
                onClick={onClick}
                className="
    w-[74px] cursor-pointer py-[10px] px-[4.5px]
    h-[19px] min-w-[74px]
     text-[black] 
text-[12px]
               font-[400] font-poppins tracking-[-0.04em]
    border border-[gray]
    rounded-[2px] outline-none
    flex items-center justify-center    
    hover:text-[#EC1E24] hover:bg-white
    transition-all duration-150
  "
            >
                 {children}
            </button>

        </div>
    );
}
