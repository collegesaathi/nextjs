import React from 'react';

// Mock Data for the jobs to keep the code clean
const jobCategories = [
  {
    title: "Business Development",
    jobs: [
      { title: "Business Development Executive", location: "Gurugram, Haryana" },
      { title: "Business Development Executive", location: "Gurugram, Haryana" },
    ]
  },
  {
    title: "Digital Marketing",
    jobs: [
      { title: "Content Writer", location: "Jaipur, Rajasthan" },
      { title: "Front-end Developer", location: "Jaipur, Rajasthan" },
      { title: "Graphic Designer", location: "Jaipur, Rajasthan" },
    ]
  }
];

function OpenPositions() {
    return (
        <section className="py-10 md:py-10 bg-gray-50 font-poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- Top Header Section (Centered) --- */}
                <div className="flex flex-col justify-center text-center mb-16 ">
                    <h2 className="text-[28px] md:text-[40px] font-[600] tracking-tight text-[#282529] mb-4">
                        Who We Are & How to Join Us
                    </h2>
                    <p className="text-[16px] text-[#282529] max-w-3xl mx-auto leading-relaxed">
                        Behind every successful student is someone who believes in them — that’s who we are at Collegesathi. 
                        We guide students to discover, explore, and achieve their academic goals with support and expert guidance.
                    </p>
                </div>

                {/* --- Open Positions Title --- */}
                <div className="mb-6">
                    <h3 className="text-[26px] md:text-[32px] font-[600] text-[#282529]">Open Positions</h3>
                </div>

                {/* --- Filters Section --- */}
                <div className="flex flex-col md:flex-row gap-3 items-start md:items-center mb-12">
                    <span className="text-gray-600 text-[16px] font-medium whitespace-nowrap">Filter by</span>
                    
                    {/* Location Dropdown */}
                    <div className="relative w-full md:w-64">
                        <select className="w-full appearance-none bg-white border border-gray-300 text-gray-500 text-[14px] py-1.5 px-2 pr-8 rounded focus:outline-none focus:ring-1 focus:ring-gray-400">
                            <option>All Locations</option>
                            <option>Gurugram</option>
                            <option>Jaipur</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                         
                        </div>
                    </div>

                    {/* Department Dropdown */}
                    <div className="relative w-full md:w-64">
                        <select className="w-full appearance-none bg-white border border-gray-300 text-gray-500 text-[14px] py-1.5 px-2 pr-8 rounded focus:outline-none focus:ring-1 focus:ring-gray-400">
                            <option>All departments</option>
                            <option>Business Development</option>
                            <option>Digital Marketing</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>

                    {/* Reset Button */}
                    <button className="px-4 py-1.5 border border-gray-300 rounded bg-white text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                        Reset filters
                    </button>
                </div>

                {/* --- Job Listings --- */}
                <div className="space-y-10 mb-20">
                    {jobCategories.map((category, index) => (
                        <div key={index}>
                            <h4 className="text-[24px] font-[600] text-gray-900 mb-4">{category.title}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.jobs.map((job, jIndex) => (
                                    <div key={jIndex} className="bg-[#FFFCFA] p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                                        <h5 className="font-[600] text-[16px] text-gray-900 mb-1">{job.title}</h5>
                                        <p className="text-gray-500 text-[14px]">{job.location}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Sticky Note with Pin --- */}
                <div className="relative mt-12">
                    {/* The Note Container */}
                    <div className="relative bg-[#FFF8E7] border border-[#F5E6C6] rounded-xl p-8 md:p-10 shadow-sm">
                        
                        {/* The Pin Image */}
                        {/* Adjust width (w-12) and positioning (top/left) based on your exact PNG size */}
                        <div className="absolute -top-4 md:-top-7  left-1/2 md:left-6 md:left-10 z-10">
                            <img 
                                src="/images/career/pin.svg" 
                                alt="Red Pin" 
                                className="w-15 md:w-18 drop-shadow-md" 
                            />
                        </div>

                        {/* Note Text */}
                        <p className="text-[#4A4036] text-[15px] md:text-[16px] leading-relaxed pt-2">
                            We're on the mission to transform education through guidance, empathy, and technology. 
                            Join our team to transform the lives of students across the world. Explore our open roles, 
                            apply online, and take your first step toward making an impact on the lives of thousands of people.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default OpenPositions;