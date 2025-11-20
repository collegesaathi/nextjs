"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../asserts/home/Logo.png"
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
  const pathname = usePathname();

  const [dropdowns, setDropdowns] = useState({
    programs: false,
    more: false,
  });

  const toggleDropdown = (menu) => {
    setDropdowns((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-[1350px] z-50">
      <div className="w-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-[20px] px-6 py-4 flex items-center justify-between">

        {/* ----------- LOGO ----------- */}
        <Link href="/">
          <img
            src={Logo?.src}
            alt="University Logo"
            className="w-[150px] h-auto"
          />
        </Link>

        {/* ----------- MAIN NAV MENU ----------- */}
        <div className="hidden lg:flex items-center space-x-6">

          {/* EXPLORE PROGRAMS */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("programs")}
              className="w-[160px] h-[40px] border border-[#EC1E24] bg-[#FFF5F5] rounded-full px-4 flex items-center justify-between text-[14px]"
            >
              Explore Programs
              <img
                src="/icons/dropdown.svg"
                className={`w-4 transition-transform ${
                  dropdowns.programs ? "rotate-180" : ""
                }`}
              />
                <RiArrowDropDownLine />
            </button>

            {dropdowns.programs && (
              <div className="absolute top-[48px] left-0 bg-white border shadow-lg rounded-xl w-[200px] py-2">
                {[
                  "MBA Programs",
                  "Engineering",
                  "Medical",
                  "Arts & Science",
                ].map((item) => (
                  <a
                    key={item}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* TOP UNIVERSITIES */}
          <Link href="/all-university" className="text-[14px] font-medium">
            Top Universities
          </Link>

          {/* CLIKPICK BADGE */}
          <Link
            href="/compare"
            className="bg-[#EC1E24] text-white px-4 py-1.5 rounded-full text-[14px] font-medium"
          >
            ClikPick
          </Link>

          {/* PRO INSIGHT */}
          <Link href="/insights" className="text-[14px] font-medium">
            Pro Insight
          </Link>

          {/* MORE DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("more")}
              className="flex items-center space-x-1 text-[14px]"
            >
              <span>More</span>
              <img
                src="/icons/dropdown.svg"
                className={`w-4 transition-transform ${
                  dropdowns.more ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdowns.more && (
              <div className="absolute top-[28px] right-0 bg-white border shadow-lg rounded-xl w-[180px] py-2">
                {["About Us", "Contact", "Blog", "Support"].map((item) => (
                  <a
                    key={item}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* -------- HELPLINE + SEARCH -------- */}
        <div className="hidden lg:flex items-center space-x-4">

          {/* HELPLINE BUTTON */}
          <div className="relative">
            <button className="w-[140px] h-[40px] bg-gradient-to-r from-[#FF070F] to-[#AF0006] text-white rounded-[8px] font-bold text-[14px] shadow-md">
              9785-800-008
            </button>
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFF5F5] border border-[#EC1E24] text-[10px] px-2 py-0.5 rounded-full">
              HELPLINE
            </span>
          </div>

          {/* SEARCH INPUT */}
          <div className="relative">
            <input
              placeholder="Search"
              className="w-[120px] h-[40px] border border-[#EC1E24] rounded-full px-3 text-[14px]"
            />
            <div className="absolute top-0 right-2 h-full flex items-center">
              <i className="ri-search-line text-gray-700"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
