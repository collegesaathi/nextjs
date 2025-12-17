import React, { useState, useMemo } from "react";
import SVGIcon from "@/common/SVGIcon";
import Layout from "../components/Layout";
import ContactSection from "../home/ContactSection";
import Link from "next/link";
import Image from "next/image";

// 1. Updated JSON Data with 'category' keys
const faqData = [
  // --- General ---
  {
    id: 1,
    category: "General",
    question: "What is an Online MBA and how does it work in India?",
    answer:
      "An Online MBA is a Master of Business Administration which is delivered through the online platform, especially for the students who cannot attend the regular classes because of their work and other reasons.",
  },
  {
    id: 2,
    category: "General",
    question: "Is an Online MBA degree recognized in India?",
    answer:
      "Yes, online MBA programs that are approved by the UGC (University Grants Commission) and AICTE are fully recognized in India and abroad for jobs and higher education.",
  },
  
  // --- Online Universities ---
  {
    id: 3,
    category: "Online Universities",
    question: "Which universities are best for Online MBA in India?",
    answer:
      "Some of the top universities include Amity University, Manipal University Jaipur, Jain University, NMIMS, and Lovely Professional University (LPU), among others.",
  },
  {
    id: 4,
    category: "Online Universities",
    question: "How do I check if a university is UGC approved?",
    answer:
      "You can visit the official DEB-UGC website to check the list of approved universities for online and distance education.",
  },

  // --- Courses ---
  {
    id: 5,
    category: "Courses",
    question: "Can I get a job after finishing an Online MBA?",
    answer:
      "Yes, absolutely. Since the degree is recognized, major corporations and startups alike hire Online MBA graduates for management roles.",
  },
  {
    id: 6,
    category: "Courses",
    question: "What specializations are available?",
    answer:
      "Common specializations include Marketing, Finance, HR, Operations, Data Science, and International Business.",
  },

  // --- CS ClickPick ---
  {
    id: 7,
    category: "CS ClickPick",
    question: "Is there any entrance exam?",
    answer:
      "It depends on the university. Some universities conduct their own entrance exams or accept scores from CAT/MAT/GMAT, while others offer direct admission based on graduation marks.",
  },
];

// Define the menu items
const categories = ["General", "Online Universities", "Courses", "CS ClickPick"];

export default function FaqSection() {
  // State for the Active Category (Sidebar)
  const [activeCategory, setActiveCategory] = useState("General");
  
  // State for the Active Accordion Item
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter Data based on Active Category
  const filteredData = useMemo(() => {
    return faqData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if already open
    } else {
      setActiveIndex(index); // Open clicked item
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveIndex(null); // Close all accordions when switching categories
  };

  return (
    <>
      <Layout>
        {/* Hero Section */}
        <div className="relative py-10">
          <div className="absolute top-0 left-0 w-full h-[100%] -z-2 pointer-events-none">
            <Image
              src="/images/faqbg.png"
              alt="Background Wave"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mx-auto container sm:container md:container xl:max-w-[1230px] px-4 py-4 md:mt-20 lg:mt-20 ">
            <div className="py-4 text-sm text-gray-500 mt-6">
              <nav className="flex items-center gap-2">
                <span className="text-gray-400">
                  <Link href="/">Home </Link>
                </span>
                <span>{">"}</span>
                <span className="text-red-600 font-medium">FAQs</span>
              </nav>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left Content */}
              <div>
                <p className="text-[36px] text-center md:text-start md:text-[60px] font-[600] leading-[48px] md:leading-[68px]">
                  Frequently Asked Questions
                </p>

                <p className="text-[#282529] mt-2 text-center md:text-start">
                  Find answers to common questions about online courses and
                  universities.
                </p>

                <button className="mt-5 flex gap-2 mx-auto md:mx-0 items-center bg-gradient-to-t from-[#B91217] to-[#EC1E24] text-white font-[600] px-5 py-2 rounded-md text-[20px] md:text-[24px] font-poppins shadow">
                  <SVGIcon name="pen" color="white" size={22} />
                  Ask Your Query
                </button>
              </div>

              <div className="hidden md:block">
                <Image
                  src="/images/faq.png"
                  alt="FAQ Illustration"
                  width={480}
                  height={320}
                />
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Body */}
        <div className="mx-auto container sm:container md:container xl:max-w-[1230px] px-4 py-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* --- SIDEBAR MENU --- */}
          <div className="pr-0 md:pr-4">
            <p className="text-[22px] font-[600] font-poppins mb-3 hidden md:block">
              Categories
            </p>
            
            {/* 
                Mobile: Horizontal Scroll (flex, overflow-x-auto)
                Desktop: Vertical List (md:block, border-l)
            */}
            <ul className="
                flex md:block 
                overflow-x-auto md:overflow-visible 
                whitespace-nowrap md:whitespace-normal
                gap-8 md:gap-8 
             md:border-l-2 
             border-[#EDEEF0] 
             leading-[22px]
                pb-2 md:pb-0 md:px-4
               no-scrollbar
            ">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <li
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`
                      cursor-pointer text-[16px] transition-all duration-200
                      md:mb-8 last:md:mb-0
                      ${
                        isActive
                          ? "text-[#EC1E24] font-semibold border-b-2 md:border-b-0 border-[#EC1E24] md:border-l-2 md:border-[#EC1E24] md:-ml-[18px] md:pl-4"
                          : "text-gray-600 hover:text-red-500 font-[400]"
                      }
                    `}
                  >
                    {cat}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* --- FAQs Accordion Container --- */}
          <div className="md:col-span-3 flex flex-col gap-4">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={item.id}
                    className={`
                      border rounded-lg transition-all duration-300 overflow-hidden bg-[#F9FAFB] border border-[#D2D2D2]
                    
                    `}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center p-5 text-left focus:outline-none font-poppins"
                    >
                      <span className="font-[600] text-[#282529] text-[16px] leading-[24px]">
                        {item.question}
                      </span>
                      <span className="ml-4 flex-shrink-0 text-gray-500">
                        {/* Chevron Icon Rotation */}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* Accordion Content */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {/* Dashed Separator Line (Only visible when open) */}
                        <div className="border-t border-dashed border-[#D2D2D2]"></div>

                        {/* Answer Text */}
                        <p className="p-5 text-[#282529] font-[400] text-[16px] leading-[28px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-5 text-center text-gray-500 border rounded-lg bg-gray-50">
                No FAQs found for this category.
              </div>
            )}

            {/* <div className="mt-4 ">
              <a
                href="#"
                className="text-[#282529] text-[16px] font-[600] inline-flex items-center leading-[16px] border-b-2 border-[#EE1E24] "
              > 
                Load More
              </a>
            </div> */}
          </div>
        </div>
        <ContactSection />
      </Layout>
    </>
  );
}