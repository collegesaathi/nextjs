import React, { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Popup = ({ isOpen, onClose, children, size, title ,height ,bg ,top}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null; // Render nothing if the popup is not open

  return (
    <div className={`fixed inset-0 flex items-center justify-center  z-50 px-3  ${top}`}>
      <div className={` rounded-lg w-full shadow-lg ${size} ${bg ? bg : "bg-white"}`}>
        <div className={`p-4 text-gray-800 overflow-y-auto  ${height} relative`}>
          <div className="flex items-center justify-between mb-4 p-2">
            <h3 className="text-[30px] font-semibold text-red-600">{title}</h3>

            <div className=" flex absolute right-4 top-4  bg-white rounded-full w-12 h-12 items-center justify-center ">
                <IoCloseSharp
              size={30}
              className="cursor-pointer text-red-600"
              onClick={onClose}
            />
            </div>
          
          </div>
           <div
           className={`p-4 text-gray-800 max-h-[90vh] overflow-y-auto ${height}`}
         >
          {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup;


