'use client';

import { useState, useEffect, useRef } from 'react';
import Logo from "../assets/home/Logo.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import SearchBar from './SearchBar';
import Link from 'next/link';

export default function Navbar() {
  const [dropdowns, setDropdowns] = useState({
    programs: false,
    more: false,
    mobilePrograms: false,
    mobileMore: false,
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Carousel images
  const carouselImages = [
    {
      src: '/img/university-main/header.jpg',
      alt: 'University Campus 1'
    },
    {
      src: 'https://images.unsplash.com/20/cambridge.JPG?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'University Campus 2'
    },
    {
      src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'University Campus 3'
    },
    {
      src: 'https://images.unsplash.com/photo-1568792923760-d70635a89fdc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'University Campus 4'
    }
  ];

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      // Close all dropdowns when mobile menu is closed
      setDropdowns({
        programs: false,
        more: false,
        mobilePrograms: false,
        mobileMore: false,
      });
    }
  };

  // Toggle dropdown function
  const toggleDropdown = (dropdownName) => {
    setDropdowns(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName]
    }));
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdowns({
          programs: false,
          more: false,
          mobilePrograms: false,
          mobileMore: false,
        });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-no-repeat bg-cover bg-center pt-[10px] lg:pt-[10px] px-4 lg:px-0 relative   md:absolute md:top-6 md:left-1/2 md:-translate-x-1/2 w-full md:w-[92%] md:max-w-[1350px] z-50">
      <div
        ref={dropdownRef}
        className="max-w-[1276px] mx-auto flex items-center justify-between h-[54px] lg:h-[77px] rounded-[12px] px-4 lg:p-[20px] shadow-[0_0_16px_0_#0000004A] bg-white relative z-10"
      >
        <div className="flex space-x-2 lg:space-x-0">
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-8 h-8 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
          <div className="logo">
           <Link href="/">
              <img
                src={Logo.src}
                alt="University Logo"
                className="w-[103px] lg:w-[182px] h-auto mt-2"
              />
            </Link>
          </div>
        </div>

        <div className="lg:hidden flex w-[100px]">
          <SearchBar />
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center space-x-6">
            <li className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('programs')}
                className="w-[151px] h-[34px] rounded-[18px] border border-[#EC1E24] bg-[#FFF5F5] opacity-100 flex justify-between items-center px-2"
              >
                <span className="font-poppins font-normal text-[13px] leading-[100%] tracking-[0px] text-right text-[#282529]">
                  Explore Programs
                </span>
                <img
                  src="/img/university-main/icons/arrow.svg"
                  alt=""
                  className={`transition-transform duration-200 ${dropdowns.programs ? 'rotate-180' : ''}`}
                />
              </button>
              {/* Dropdown for Explore Programs */}
              {dropdowns.programs && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <ul className="py-2">
                    <li>
                     <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        MBA Programs
                      </Link>
                    </li>
                    <li>
                     <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Engineering
                      </Link>
                    </li>
                    <li>
                     <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Medical
                      </Link>
                    </li>
                    <li>
                     <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Arts & Science
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li className="flex items-center space-x-2">
             <Link
                href="/university"
                className="font-[Poppins] font-normal text-[13px] leading-[100%] tracking-[0px] text-right text-[#282529]"
              >
                Top Universities
              </Link>
              <div className="w-[100px] h-[15px] rounded-[11px] bg-[#EC1E24] flex items-center justify-center space-x-1.5">
                <img src="/img/university-main/icons/swap.svg" alt="" />
                <span className="font-[Poppins] font-normal text-[10px] leading-[100%] tracking-[0px] text-right text-white">
                  Compare Now
                </span>
              </div>
            </li>

            <li>
             <Link
                href=""
                className="font-normal text-[13px] leading-[100%] tracking-[0px] text-right text-[#282529] capitalize"
              >
                ClikPick
              </Link>
            </li>

            <li className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown('more')}
                className="flex items-center space-x-2"
              >
                <span className="font-normal text-[13px] leading-[100%] tracking-[0px] text-right text-[#282529]">
                  More
                </span>
                <img
                  src="/img/university-main/icons/arrow.svg"
                  alt=""
                  className={`w-[11px] transition-transform duration-200 ${dropdowns.more ? 'rotate-180' : ''}`}
                />
              </button>
              {/* Dropdown for More */}
              {dropdowns.more && (
                <div className="absolute top-full right-0 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <ul className="py-2">
                    <li>
                     <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        About Us
                      </Link>
                    </li>
                    <li>
                     <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Contact
                      </Link>
                    </li>
                    <li>
                     <Link href="#" className="block px-4-y-2 text-sm text-gray-700 hover:bg-gray-100">
                        Blog
                      </Link>
                    </li>
                    <li>
                     <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <ul className="py-2">
              <li className="border-b border-gray-100">
                <button
                  onClick={() => toggleDropdown('mobilePrograms')}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50"
                >
                  <span className="text-sm text-gray-700">Explore Programs</span>
                  <img
                    src="/img/university-main/icons/arrow.svg"
                    alt=""
                    className={`w-3 h-3 transition-transform duration-200 ${dropdowns.mobilePrograms ? 'rotate-180' : ''}`}
                  />
                </button>
                {/* Mobile Programs Dropdown */}
                {dropdowns.mobilePrograms && (
                  <div className="bg-gray-50">
                    <ul className="pl-4">
                      <li>
                       <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                          MBA Programs
                        </Link>
                      </li>
                      <li>
                       <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                          Engineering
                        </Link>
                      </li>
                      <li>
                       <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                          Medical
                        </Link>
                      </li>
                      <li>
                       <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                          Arts & Science
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <li className="border-b border-gray-100">
               <Link href="/university" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  Top Universities
                </Link>
              </li>

              <li className="border-b border-gray-100">
               <Link href="#" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50">
                  ClikPick
                </Link>
              </li>

              <li className="border-b border-gray-100">
                <button
                  onClick={() => toggleDropdown('mobileMore')}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50"
                >
                  <span className="text-sm text-gray-700">More</span>
                  <img
                    src="/img/university-main/icons/arrow.svg"
                    alt=""
                    className={`w-3 h-3 transition-transform duration-200 ${dropdowns.mobileMore ? 'rotate-180' : ''}`}
                  />
                </button>
                {/* Mobile More Dropdown */}
                {dropdowns.mobileMore && (
                  <div className="bg-gray-50">
                    <ul className="pl-4">
                      <li>
                       <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                          About Us
                        </Link>
                      </li>
                      <li>
                       <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                          Contact
                        </Link>
                      </li>
                      <li>
                       <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                          Blog
                        </Link>
                      </li>
                      <li>
                       <Link href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
                          Support
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>

            {/* Mobile action buttons */}
            <div className="px-4 py-3 border-t border-gray-100 space-y-2">
              <button
                type="button"
                className="w-full h-[34px] rounded-[5px] bg-gradient-to-r from-[#FF070F] to-[#AF0006] font-bold text-[13px] text-white flex items-center justify-center shine-button"
              >
                9785-800-008
              </button>
              
            </div>
          </div>
        )}

        <div className="hidden lg:block ">
         <div className='flex justify-center  gap-3 '> 
           <button
            type="button"
            className="w-[119.09px] h-[33.83px] rounded-[5px] bg-gradient-to-r from-[#FF070F] to-[#AF0006] font-bold text-[13px] leading-[100%] tracking-[0px] text-white flex items-center justify-center relative shine-button"
          >
            9785-800-008
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center translate-y-[-50%]">
              <div className="w-[61.88px] h-[14px] rounded-[18px] border border-[#EC1E24] bg-[#FFF5F5] font-medium text-[7px] text-right text-[#282529] flex items-center justify-center">
                HELPLINE
              </div>
            </div>
            {/* Shine effect overlay */}
            <div className="shine-overlay"></div>
          </button>
          <SearchBar />
         </div>
        </div>
      </div>

    </div>
  );
}