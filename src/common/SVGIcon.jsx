// components/SVGIcon.jsx
import React from "react";

const icons = {
  marketing: (
    <svg viewBox="0 0 24 24">
      <path d="M3 13h2v6H3v-6zm4-6h2v12H7V7zm4 4h2v8h-2v-8zm4-6h2v14h-2V5zm4-2h2v16h-2V3z" />
    </svg>
  ),

  download: (
    <svg viewBox="0 0 24 24">
      <path
        d="M12 3v10m0 0 4-4m-4 4-4-4M4 19h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  ),

  male: (
    <svg viewBox="0 0 24 24">
      <circle cx="8" cy="8" r="4" stroke="currentColor" fill="none" strokeWidth="1.6" />
      <path d="M14 2h8v8" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  ),

  female: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="6" r="4" stroke="currentColor" fill="none" strokeWidth="1.6" />
      <path d="M12 10v6M9 18h6" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </svg>
  ),
};

export default function SVGIcon({ name, size = 24, className = "", color = "currentColor" }) {
  const IconSvg = icons[name];

  if (!IconSvg) return null;

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        display: "inline-block",
        color: color,
      }}
    >
      {IconSvg}
    </div>
  );
}


{/* <SVGIcon name="download" size={20} className="text-gray-600" /> */}
