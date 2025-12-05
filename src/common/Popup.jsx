import React, { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Popup = ({ isOpen, onClose, children, size, title ,height }) => {
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
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/20 z-50 px-3 ">
      <div className={`bg-white rounded-lg w-full shadow-lg ${size}`}>
        <div className={`p-4 text-gray-800 overflow-y-auto max-h-full ${height} relative`}>
          <div className="flex items-center justify-between mb-4 p-2">
            <h3 className="text-[30px] font-semibold text-red-600">{title}</h3>
            <IoCloseSharp
              size={30}
              className="cursor-pointer absolute right-4 top-4 text-red-600"
              onClick={onClose}
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
export default Popup;