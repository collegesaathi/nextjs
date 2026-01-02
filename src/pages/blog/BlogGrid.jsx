"use client";
import React, { useState } from 'react';
import { Search, Clock } from 'lucide-react';
import { FaStopwatch } from "react-icons/fa";
import { MdArrowRight } from "react-icons/md";

const BlogGrid = () => {
    // 1. Categories Data
    const categories = [
        "All", "Online MBA", "Top Online Universities", "UGC Updates", 
        "UG Program", "PG Program", "After 12th", 
        "Career Development", "Doctorate"
    ];

    // 2. Blog Posts Data (Sample Data)
    const allPostsData = [
        { id: 1, image: "/images/blog/blog1.png", tags: ["Online MBA", "UGC Updates","After 12th" ], title: "Top Online MBA Entrance Exams Every Aspirant Should Know", views: "25k Views", readTime: "8 minute read" },
        { id: 2, image: "/images/blog/blog2.png", tags: ["UG Program", "After 12th","Top Online Universities"], title: "Top 7 Distance MBA Colleges in India: Fees & Details", views: "18k Views", readTime: "5 minute read" },
        { id: 3, image: "/images/blog/blog3.png", tags: ["Doctorate", "PG Program"], title: "Top 7 Online PG Courses in India for Career Growth", views: "30k Views", readTime: "10 minute read" },
        { id: 4, image: "/images/blog/blog4.png", tags: ["UGC Updates", "Top Online Universities"], title: "Latest UGC Guidelines for Online Education 2025", views: "12k Views", readTime: "6 minute read" },
        { id: 5, image: "/images/blog/blog2.png", tags: ["After 12th", "Career Development"], title: "Top 10 In-Demand Courses after BBA for Success", views: "45k Views", readTime: "12 minute read" },
        { id: 6, image: "/images/blog/blog3.png", tags: ["Online MBA", "PG Program"], title: "10 MBA Specializations in Demand for 2025", views: "22k Views", readTime: "7 minute read" },
        { id: 7, image: "/images/blog/blog1.png", tags: ["UG Program"], title: "Affordable Online B.Com Specializations", views: "10k Views", readTime: "4 minute read" },
        { id: 8, image: "/images/blog/blog4.png", tags: ["Doctorate"], title: "High-Paying Jobs in India: Salary & Career Path", views: "50k Views", readTime: "15 minute read" },
        { id: 9, image: "/images/blog/blog1.png", tags: ["Career Development"], title: "How to Choose the Right Online University", views: "28k Views", readTime: "9 minute read" },
    ];

    // 3. States
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6); // Shuruat mein 6 dikhayenge

    // 4. Filter Logic
    const filteredPosts = allPostsData.filter(post => 
        activeCategory === "All" || post.tags.includes(activeCategory)
    );

    // 5. Handlers
    const handleViewAll = () => {
        setVisibleCount(allPostsData.length); // Saari posts dikha do
    };

    return (
        <section className="max-w-7xl mx-auto px-2  font-poppins">
            
            {/* --- Top Category Bar (Working Tabs) --- */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((cat, index) => (
                    <button 
                        key={index}
                        onClick={() => {
                            setActiveCategory(cat);
                            setVisibleCount(6); // Category change hone par wapas 6 par reset
                        }}
                        className={`px-4 py-1.5 text-[14px] font-[400] rounded-md transition-all duration-300 leading-[16px]  ${
                            activeCategory === cat 
                            ? "bg-[#FFF5F5] text-[#EC1E24] " 
                            : "bg-gray-100 text-[#282529]  "
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* --- All Categories & Search Row --- */}
            <div className="flex justify-between items-center border-t border-gray-100 pt-6 mb-10">
                <div className="relative group">
                    <button className="text-[#949494] text-sm flex items-center gap-1 hover:text-black font-medium">
                        {activeCategory === "All" ? "All categories" : activeCategory} 
                        <span className="text-[10px]"><MdArrowRight  size={24}/></span>
                    </button>
                </div>
                <div className="flex items-center gap-2 text-gray-400 border-b border-transparent focus-within:border-gray-300 transition-all">
                    <Search size={18} />
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="text-sm outline-none bg-transparent w-24 focus:w-40 transition-all text-gray-700"
                    />
                </div>
            </div>

            {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 items-stretch">
  {filteredPosts.slice(0, visibleCount).map((post) => (
    <div key={post.id} className="group cursor-pointer animate-fadeIn h-full flex flex-col">

      <div className="relative aspect-[16/8] overflow-hidden rounded-[15px] mb-4 shadow-sm">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      <div className="px-5 py-4 flex flex-col flex-1">

        <div className="flex flex-wrap gap-3 mb-3">
          {post.tags.slice(0, 3).map((tag, i) => (
            <span key={i} className="text-[11px] text-[#282529] font-[400] leading-[12px]">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-[22px] font-[600] text-[#282529] leading-[36px] -tracking-[0.5] mb-4 line-clamp-3">
          {post.title}
        </h3>

        <div className="flex items-center gap-4 text-gray-400 text-[12px] mt-auto">
          <div className="flex items-center gap-1">
            <span className="text-gray-300 text-lg leading-none">+</span>
            <span>{post.views}</span>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <FaStopwatch size={14} className="text-gray-300" />
            <span>{post.readTime}</span>
          </div>
        </div>

      </div>
    </div>
  ))}
</div>


            {/* No Results Message */}
            {filteredPosts.length === 0 && (
                <div className="text-center py-20 text-gray-400">
                    No blogs found in this category.
                </div>
            )}

            {/* --- View All Button (Working) --- */}
            {visibleCount < filteredPosts.length && (
                <div className="mt-16 flex justify-center">
                    <button 
                        onClick={handleViewAll}
                        className="bg-[#f02d2d] hover:bg-red-700 text-white font-semibold py-3 px-12 rounded-xl transition-all shadow-lg hover:shadow-red-200 active:scale-95"
                    >
                        View All
                    </button>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease forward;
                }
            `}</style>
        </section>
    );
};

export default BlogGrid;