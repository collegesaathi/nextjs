'use client';

import { ChevronDown } from "lucide-react";

export default function CollapsibleCard({ title, isOpen, onToggle, children }) {
  return (
    <div
      className={`mt-4 px-5 bg-gradient-to-b from-white to-[#EFEFEF] shadow-md shadow-neutral-200 rounded-md
        ${isOpen ? 'py-4' : ''}`}
    >
      <div
        onClick={onToggle}
        className={`flex justify-between items-center cursor-pointer
          ${!isOpen ? 'py-4' : ''}`}
      >
        <h2 className="text-[0.875rem] text-[#282529]/80">{title}</h2>

        <span
          className={`text-[#282529] transform transition-transform duration-300
            ${isOpen ? 'rotate-180' : ''}`}
        >
          <ChevronDown size={16} />
        </span>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden
          ${isOpen ? 'max-h-96 opacity-100 pt-3' : 'max-h-0 opacity-0'}`}
      >
        {children}
      </div>
    </div>
  );
}
