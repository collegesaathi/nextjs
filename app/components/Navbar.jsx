"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [dropdowns, setDropdowns] = useState({
    programs: false,
    more: false,
    mobilePrograms: false,
    mobileMore: false,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle dropdown
  const toggleDropdown = (menu) => {
    setDropdowns((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((k) => {
        if (k !== menu) updated[k] = false;
      });
      updated[menu] = !prev[menu];
      return updated;
    });
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    if (isMobileMenuOpen) {
      setDropdowns({
        programs: false,
        more: false,
        mobilePrograms: false,
        mobileMore: false,
      });
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const close = (e) => {
      if (!e.target.closest(".dropdown-wrapper")) {
        setDropdowns({
          programs: false,
          more: false,
          mobilePrograms: false,
          mobileMore: false,
        });
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div
      className={`bg-no-repeat bg-cover bg-center pt-3 lg:pt-[43px] px-4 lg:px-0 relative ${
        pathname === "/" ? "lg:h-[426px]" : ""
      }`}
    >
      {/* Header Container */}
      <div className="max-w-[1276px] mx-auto flex items-center justify-between h-[54px] lg:h-[77px] rounded-[12px] px-4 lg:p-[32px] shadow-[0_0_16px_0_#0000004A] bg-white relative z-10">

        {/* LEFT LOGO + MOBILE MENU BTN */}
        <div className="flex space-x-2 lg:space-x-0">
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-8 h-8 text-gray-600"
          >
            {/* Hamburger / Close icon */}
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>

          {/* LOGO */}
          <Link href="/">
            <img
              src="/logo.avif"
              className="w-[103px] lg:w-[182px] h-auto mt-2"
              alt="University Logo"
            />
          </Link>
        </div>

        {/* MOBILE SEARCH */}
        <div className="lg:hidden w-[100px]">
          <div className="relative">
            <input
              placeholder="Search"
              className="w-full h-[34px] rounded-[18px] border border-[#EC1E24] text-[13px] px-3"
            />
            <div className="absolute top-0 right-0 px-2 h-full flex items-center">
              <i className="ri-search-line"></i>
            </div>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:block">
          <ul className="flex items-center space-x-6">

            {/* PROGRAMS DROPDOWN */}
            <li className="relative dropdown-wrapper">
              <button
                onClick={() => toggleDropdown("programs")}
                className="w-[151px] h-[34px] rounded-[18px] border border-[#EC1E24] bg-[#FFF5F5] px-2 flex justify-between items-center"
              >
                <span className="text-[13px]">Explore Programs</span>
                <img
                  src="/icons/dropdown.svg"
                  className={`transition-transform ${
                    dropdowns.programs ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdowns.programs && (
                <div className="absolute top-full left-0 mt-1 bg-white border shadow-lg rounded-lg w-48">
                  <ul className="py-2">
                    {["MBA Programs", "Engineering", "Medical", "Arts & Science"].map((v) => (
                      <li key={v}>
                        <a className="block px-4 py-2 hover:bg-gray-100 text-sm">{v}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* TOP UNIVERSITIES */}
            <li className="flex items-center space-x-2">
              <Link href="/all-university" className="text-[13px]">
                Top Universities
              </Link>
              <div className="w-[80px] h-[22px] rounded-[11px] bg-[#EC1E24] text-white flex items-center justify-center">
                <Link href="/compare" className="text-[13px]">
                  ClikPick
                </Link>
              </div>
            </li>

            {/* PRO INSIGHT */}
            <li>
              <Link href="/insights" className="text-[13px]">
                Pro Insight
              </Link>
            </li>

            {/* MORE DROPDOWN */}
            <li className="relative dropdown-wrapper">
              <button
                onClick={() => toggleDropdown("more")}
                className="flex items-center space-x-2"
              >
                <span className="text-[13px]">More</span>
                <img
                  src="/icons/dropdown.svg"
                  className={`w-[11px] transition-transform ${
                    dropdowns.more ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdowns.more && (
                <div className="absolute top-full right-0 mt-1 bg-white border rounded-lg shadow-lg w-40">
                  <ul className="py-2">
                    {["About Us", "Contact", "Blog", "Support"].map((v) => (
                      <li key={v}>
                        <a className="block px-4 py-2 hover:bg-gray-100 text-sm">{v}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* DESKTOP HELPLINE + SEARCH */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="shine-button w-[119px] h-[34px] bg-gradient-to-r from-[#FF070F] to-[#AF0006] text-white rounded-[5px] font-bold text-[13px] relative">
            9785-800-008
            <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2">
              <div className="border bg-[#FFF5F5] text-[7px] rounded-[18px] px-2">
                HELPLINE
              </div>
            </div>
            <div className="shine-overlay"></div>
          </button>

          <div className="relative">
            <input
              placeholder="Search"
              className="w-[93px] h-[34px] border border-[#EC1E24] rounded-[18px] px-3 text-[13px]"
            />
            <div className="absolute top-0 right-0 h-full px-2 flex items-center">
              <i className="ri-search-line"></i>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white mt-1 border shadow-lg rounded-lg absolute left-0 right-0 z-50">

          {/* Programs mobile dropdown */}
          <ul className="py-2">
            <li className="border-b">
              <button
                onClick={() => toggleDropdown("mobilePrograms")}
                className="w-full flex justify-between px-4 py-3"
              >
                <span>Explore Programs</span>
                <img
                  src="/icons/dropdown.svg"
                  className={`w-3 transition-transform ${
                    dropdowns.mobilePrograms ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdowns.mobilePrograms && (
                <div className="bg-gray-50 pl-4">
                  {["MBA Programs", "Engineering", "Medical", "Arts & Science"].map((v) => (
                    <a key={v} className="block px-4 py-2 text-gray-600">
                      {v}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li className="border-b">
              <Link href="/all-university" className="block px-4 py-3">
                Top Universities
              </Link>
            </li>

            <li className="border-b">
              <Link href="/compare" className="block px-4 py-3">
                ClikPick
              </Link>
            </li>

            {/* More mobile */}
            <li className="border-b">
              <button
                onClick={() => toggleDropdown("mobileMore")}
                className="w-full flex justify-between px-4 py-3"
              >
                <span>More</span>
                <img
                  src="/icons/dropdown.svg"
                  className={`w-3 transition-transform ${
                    dropdowns.mobileMore ? "rotate-180" : ""
                  }`}
                />
              </button>

              {dropdowns.mobileMore && (
                <div className="bg-gray-50 pl-4">
                  {["About Us", "Contact", "Blog", "Support"].map((v) => (
                    <a key={v} className="block px-4 py-2">
                      {v}
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Mobile actions */}
          <div className="px-4 py-3 border-t space-y-2">
            <button className="w-full h-[34px] bg-gradient-to-r from-[#FF070F] to-[#AF0006] text-white rounded-[5px] font-bold">
              9785-800-008
            </button>
            <button className="w-full h-[34px] border border-[#EC1E24] rounded-[18px] flex justify-center items-center">
              <span className="mr-2">Search</span> <i className="ri-search-line"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
