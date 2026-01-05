import { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "../home/ContactSection";
import Head from 'next/head'

// Simple Chevron Icon Component for the button
const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-4 h-4 ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

function Sitemap() {
  const [activeTab, setActiveTab] = useState("Programs");
  const [isExpanded, setIsExpanded] = useState(false); // State for Read More

  const sitemapTabs = ["Programs", "Blogs", "Specialization", "Other"];

  const sitemapData = {
    Programs: [
      {
        title: "MCA",
        items: [
          "Amity University Online", "Lovely Professional University", "Chandigarh University",
          "Manipal University Online", "Sharda University", "Bharti Vidyapeeth",
          "Jain University", "Andhra University", "Parul University", "Gla University",
          "Graphic Era University", "Kurukshetra University", "Vignan University",
          "Uttarakhand University", "Mody University", "Manav Rachna University",
          "Srm University", "Sikkim Manipal University", "Amrita Vishwa Vidyapeetham",
          "Vgu Vivekananda Global University", "Mangalaytan Online University",
          "Datta Meghe Institute", "Shoolini University", "University Of Mysore",
        ],
      },
      {
        title: "MA",
        items: ["Amity University Online", "Lovely Professional University", "Chandigarh University"],
      },
      {
        title: "M.Com",
        items: [
          "Amity University Online", "Lovely Professional University", "Chandigarh University",
          "Manipal University Online", "Sharda University", "Bharti Vidyapeeth",
          "Jain University", "Andhra University", "Parul University",
        ],
      },
      {
        title: "B.Com",
        items: [
          "Amity University Online", "Lovely Professional University", "Chandigarh University",
          "Manipal University Online", "Sharda University",
        ],
      },
      {
        title: "Online BA",
        items: [
          "Amity University Online", "Lovely Professional University", "Chandigarh University",
          "Manipal University Online", "Sharda University", "Bharti Vidyapeeth",
        ],
      },
      {
        title: "Online MBA",
        items: [
          "Amity University Online", "Lovely Professional University", "Chandigarh University",
          "Manipal University Online", "Sharda University", "Bharti Vidyapeeth",
          "Jain University", "Andhra University", "Parul University", "Gla University",
          "Graphic Era University",
        ],
      },
    ],
    Blogs: [],
    Specialization: [],
    Other: [],
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
     <Head>
            <title>Universities & Online Courses Map | Collegesathi</title>
            <meta
                name="description"
                content="Browse universities and online courses across India using Collegesathi’s interactive map. Find programs that fit your goals."
            />

            <meta
                name="keywords"
                content=""
            />
        </Head>
    <Layout>

          <div className=" block lg:hidden absolute top-0 left-0 w-[100%] h-[40%] z-0 pointer-events-none">
          <Image
            src="/images/wave.png"
            alt="Background Wave"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      {/* --- HERO HEADER SECTION --- */}
      <div className="relative w-full pt-10 pb-16 md:pt-40 lg:pb-24 overflow-hidden">
  
        <div className=" hidden lg:block absolute top-0 left-0 w-full h-[100%] z-0 pointer-events-none">
          <Image
            src="/images/wave.png"
            alt="Background Wave"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto container sm:container md:container xl:max-w-[1230px] px-4 lg:px-10 xl:px-4">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-500 mb-4 font-medium">
            <Link href="/" className="hover:text-red-500 transition">Home</Link>
            <span className="mx-2">{'>'}</span>
            <span className="text-[#EC1E24]">Sitemap</span>
          </div>

          {/* Main Title */}
          <h1 className="text-[36px] md:text-[60px] font-[600] text-[#282529] my-6 md:my-10 lg:my-12 font-poppins leading-[60px]">
            Sitemap
          </h1>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-6 md:gap-16">
            {sitemapTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-[14px] md:text-[16px] font-medium transition-all font-poppins duration-300
                                    ${activeTab === tab
                    ? "text-[#EC1E24] border-b-2 border-[#EC1E24]"
                    : "text-[#282529] hover:text-gray-900 border-b-2 border-transparent"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-7xl mx-3 xl:mx-auto md:mt-10 mb-5 bg-white rounded-xl p-8 shadow-[0px_0px_20px_rgba(0,0,0,0.05)]">
        {activeTab === "Programs" && (
          <>
            <h2 className="text-[20px] md:text-[28px] font-[700] border-b border-[#BDBDBD] py-4 mb-6">
              Programs
            </h2>

            {/* Collapsible Container */}
            <div
              className={`relative overflow-hidden transition-all duration-700 ease-in-out ${
                isExpanded ? "max-h-[5000px]" : "max-h-[600px]"
              }`}
            >
              <div className="space-y-10 pb-4">
                {sitemapData.Programs.map((section, i) => (
                  <div key={i}>
                    <h3 className="text-[16px] md:text-[20px] font-[600] mb-4 text-gray-800">
                      {section.title}
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {section.items.map((item, index) => (
                        <span
                          key={index}
                          className="text-[13px] md:text-[15px] px-4 py-1.5 border border-[#FCD9D5] bg-[#FBFBFB] rounded-md text-[#EC1E24] hover:bg-red-50 transition-colors cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* White Fade Gradient (Only visible when collapsed) */}
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-32  pointer-events-none" />
              )}
            </div>

            {/* --- READ MORE BUTTON (Exact Style) --- */}
            <div className="relative mt-8 mb-4">
              {/* Horizontal Line */}
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              
              {/* Centered Button */}
              <div className="relative flex justify-center">
                <button
                  onClick={handleToggle}
                  className="flex items-center justify-center bg-white border border-gray-200 rounded-full px-8 py-2 text-[#EC1E24] font-medium shadow-sm hover:shadow-md transition-shadow focus:outline-none"
                >
                  {isExpanded ? "Read less" : "Read more"}
                  <ChevronIcon isOpen={isExpanded} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <ContactSection />
    </Layout>
    </>
  );
}

export default Sitemap;