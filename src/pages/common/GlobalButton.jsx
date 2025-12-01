import React from "react";
import { IconContext } from "react-icons";

export default function GlobalButton({
    children,
    onClick,
    classes = "",
}) {
    return (
        <div className=" flex justify-between items-center">

            <button
                onClick={onClick}
                className={`
    w-[74px] cursor-pointer py-[14px] px-[4.5px]
    h-[19px] min-w-[74px]
     text-[black] 
text-[12px] group
               font-[400] font-poppins tracking-[-0.04em]
    border border-[gray]
    rounded-[8px] outline-none
    flex items-center justify-center    
    hover:text-[#EC1E24] hover:border-[#EC1E24]
    transition-all duration-300 transform hover:scale-105  ${classes} 
  `}
            >
                 {children}
            </button>

        </div>
    );
}
