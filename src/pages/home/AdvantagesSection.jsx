"use client";
import { useState, useRef } from "react";
import ProgressSteps from "./ProgressSteps";

export default function AdvantagesSection({ universities = [] }) {
  const [progress, setProgress] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 1, title: "Search University", completed: true },
    { id: 2, title: "Compare", completed: false },
    { id: 3, title: "Choose", completed: false },
    { id: 4, title: "Apply", completed: false },
  ];

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const filteredUniversities = universities.filter((u) =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectUniversity = (uni) => {
    setSearchQuery(uni.name);
    setDropdownOpen(false);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    console.log("Searching:", searchQuery);
  };

  return (
      <div className="py-8 md:py-12 ">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
      {/* ===================== DESKTOP VERSION ===================== */}
      <div className="hidden lg:block py-16">
        <div className="w-[1174px] mx-auto flex justify-between items-center">
          <div className="flex items-start justify-between w-full pb-7">
            <div>
              <p className="font-normal text-[16px] text-[#282529] mb-4">
                What Sets Us Apart
              </p>
              <h2 className="font-poppins font-[600] xl:text-28 text-custom7 text-18">
                Discover the <span className="text-[#EC1E24]">Collegesathi Advantages</span>
              </h2>
            </div>

            {/* Progress + Arrow buttons */}
            <div className="flex items-center space-x-4">
              <div className="w-[82px] md:w-[191px] h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-600 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <button
                className="w-[35px] h-[35px] rounded-full flex items-center justify-center border border-custom2 text-custom2"
                onClick={() => setProgress(p => Math.max(0, p - 10))}
              >
                <i className="ri-arrow-left-long-line text-[18px]"></i>
              </button>

              <button
                className="w-[35px] h-[35px] rounded-full flex items-center justify-center border border-custom2 text-custom2"
                onClick={() => setProgress(p => Math.min(100, p + 10))}
              >
                <i className="ri-arrow-right-long-line text-[18px]"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Services + Search Box */}
        <div className="w-[1174px] mx-auto flex justify-between items-center">
          {/* Left Card */}
          <div className="w-[478px] h-[418px] rounded-[29px] border border-[#FFB8B8] bg-[#FFF6F6] p-6">
            <h2 className="font-semibold text-[24px] text-[#282529] mb-2">
              Our Services
            </h2>
            <p className="w-[244px] text-[16px] text-[#282529] mb-4">
              Empowering students to make informed decisions.
            </p>

            <div className="rounded-br-full rounded-tr-full border border-[#FFF5F5] h-[52px] flex items-center justify-center bg-white w-[302px] mb-3">
              <h2 className="text-[18px] text-[#282529]">
                Explore 50+ Universities
              </h2>
            </div>

            <div className="ml-auto rounded-bl-full rounded-tl-full w-[363px] h-[55px] border border-[#EC1E24] bg-gradient-to-r from-[#EC1E24] to-[#FF6363] flex items-center justify-center">
              <h2 className="text-[18px] text-white">
                100% post admission support
              </h2>
            </div>

            <div className="rounded-full border border-[#FFF5F5] h-[52px] flex items-center justify-center bg-white w-[302px] mb-8">
              <h2 className="text-[18px] text-[#282529]">
                Personalized expert guidance
              </h2>
            </div>
          </div>

          {/* Right Search Section */}
          <div className="w-[676px] h-[418px] rounded-[29px] border border-[#FFB8B8] bg-[#FFEBEB] relative p-[25px]">
            <div className="relative z-10">
              <h2 className="text-[24px] font-semibold text-center text-[#282529] mb-4">
                Know About Your Favourite University
              </h2>
              <p className="text-[16px] text-center text-[#282529] mb-6">
                Check details and make an informed decision.
              </p>

              {/* Search Box */}
              <div className="flex justify-center">
                <div className="w-[563px] h-[54px] rounded-[7px] bg-[#F7F6F6] p-[4px] flex items-center justify-between relative">
                  {/* Dropdown Button */}
                  <button
                    onClick={toggleDropdown}
                    className="bg-white w-[44px] h-[48px] rounded-[5px] flex items-center justify-center"
                  >
                    <img src="/img/university-main/adv/arrowDown.svg" />
                  </button>

                  {/* Input */}
                  <div className="bg-white shadow w-[452px] h-full rounded-tl-[5px] rounded-tr-[5px] relative">
                    <input
                      type="text"
                      className="w-full h-full px-4 text-[13px] bg-transparent outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search University..."
                    />

                    {/* Dropdown */}
                    {isDropdownOpen && (
                      <div className="absolute top-[48px] left-0 w-full bg-white shadow max-h-[200px] overflow-y-auto z-30 rounded-b-[7px]">
                        <ul>
                          {filteredUniversities.map((university) => (
                            <li
                              key={university.id}
                              onClick={() => selectUniversity(university)}
                              className="h-[40px] px-4 flex items-center cursor-pointer hover:bg-[#F7F6F6]"
                            >
                              <span className="flex-1">{university.name}</span>
                              <span className="text-[10px] text-gray-400 ml-2">
                                {university.location}
                              </span>
                            </li>
                          ))}

                          {filteredUniversities.length === 0 && (
                            <li className="h-[40px] flex items-center px-4 text-gray-400">
                              No universities found
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Search Button */}
                  <button
                    onClick={handleSearch}
                    className="w-[25px] h-full flex items-center justify-center"
                  >
                    <img src="/img/university-main/adv/search.svg" />
                  </button>
                </div>
              </div>
            </div>

            <img
              src="/img/university-main/adv/effect.png"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>

<ProgressSteps/>    
      </div>

      {/* ===================== MOBILE VERSION ===================== */}
      <div className="lg:hidden block pt-8 pb-5 px-4">
        <p className="text-[14px] text-[#282529] mb-3">What Sets Us Apart</p>
        <h2 className="text-[20px] font-semibold">
          Discover the <br />
          <span className="text-[#EC1E24]">Collegesathi Advantages</span>
        </h2>

        {/* Mobile Cards */}
        <div className="mt-5">
          {/* Services Card */}
          <div className="w-full p-6 rounded-[29px] border border-[#FFB8B8] bg-[#FFF6F6]">
            <h2 className="text-[14px] font-semibold mb-2">Our Services</h2>
            <p className="text-[8px] w-[244px] mb-4">
              Empowering students to make informed decisions.
            </p>

            <div className="w-[220px] h-[30px] rounded-br-full rounded-tr-full border mb-3 bg-white flex items-center justify-center">
              <p className="text-[10px]">Explore 50+ Universities</p>
            </div>

            <div className="w-[250px] h-[30px] rounded-[28px] border bg-gradient-to-r from-[#EC1E24] to-[#FF6363] text-white flex items-center justify-center ml-auto">
              <p className="text-[10px]">100% post admission support</p>
            </div>

            <div className="w-[258px] h-[30px] rounded-full border bg-white flex items-center justify-center mt-4">
              <p className="text-[10px]">Personalized expert guidance</p>
            </div>
          </div>

          {/* Search Card -- Mobile */}
          <div className="w-full h-[300px] rounded-[29px] border border-[#FFB8B8] bg-[#FFEBEB] flex items-center justify-center mt-6">
            <div>
              <h2 className="text-[14px] font-semibold text-center mb-4">
                Know About Your Favourite University
              </h2>
              <p className="text-[8px] text-center">
                Check details and make an informed decision.
              </p>

              <div className="flex justify-center mt-4">
                <div className="w-[320px] h-[35px] bg-[#F7F6F6] p-[4px] rounded-[7px] flex items-center justify-between relative">
                  <button
                    onClick={toggleDropdown}
                    className="w-[27px] h-[27px] bg-white rounded-[5px] flex items-center justify-center"
                  >
                    <img src="/img/university-main/adv/arrowDown.svg" className="w-[12px]" />
                  </button>

                  <div className="w-[260px] h-full bg-white shadow rounded-tl-[5px] rounded-tr-[5px] relative">
                    <input
                      type="text"
                      className="px-3 w-full h-full text-[8px] bg-transparent outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                    />

                    {isDropdownOpen && (
                      <div className="absolute top-[27px] w-full max-h-[120px] bg-white shadow rounded-b-[7px] z-20 overflow-y-auto">
                        <ul>
                          {filteredUniversities.map((u) => (
                            <li
                              key={u.id}
                              onClick={() => selectUniversity(u)}
                              className="h-[28px] px-3 flex items-center text-[8px] cursor-pointer hover:bg-[#F7F6F6]"
                            >
                              <span className="flex-1 truncate">{u.name}</span>
                              <span className="text-[6px] ml-1 text-gray-400">
                                {u.location}
                              </span>
                            </li>
                          ))}

                          {filteredUniversities.length === 0 && (
                            <li className="h-[28px] px-3 flex items-center text-gray-400 text-[8px]">
                              No universities found
                            </li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleSearch}
                    className="w-[18px] flex items-center justify-center"
                  >
                    <img src="/img/university-main/adv/search.svg" className="w-[14px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Unlimited Support */}
          <div className="w-full relative h-[207px] mt-6">
            <img src="/img/1.png" alt="university" className="w-full h-full" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h2 className="text-[28px] text-[#EC1E24] mb-2 font-semibold">
                Unlimited Support
              </h2>
              <p className="text-[16px] text-[#282529] mb-3">
                Get unbiased support and 24*7 assistance
              </p>
              <button className="bg-[#EF1E24] h-[40px] text-white px-4 rounded-[4px]">
                Schedule Your Call
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
