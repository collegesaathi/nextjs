'use client';

import React, { useMemo, useState,useEffect } from "react";
import clsx from "clsx";
import Listing from "@/pages/api/Listing";
import { Search, ChevronLeft } from "lucide-react";
import { IoSchoolOutline } from "react-icons/io5";
import { useFilterStore } from "@/store/filterStore";
import { Loader } from "lucide-react";


export default function CourseFilter() {
  // Zustand states
  const activeCourseFilter = useFilterStore(s => s.activeCourseFilter);
  const setCourseFilter = useFilterStore(s => s.setCourseFilter);

  const activeCourseSubFilter = useFilterStore(s => s.activeCourseSubFilter);
  const setCourseSubFilter = useFilterStore(s => s.setCourseSubFilter);

  const activeSpecialization = useFilterStore(s => s.activeSpecialization);
  const setSpecialization = useFilterStore(s => s.setSpecialization);

  const courseSearchQuery = useFilterStore(s => s.courseSearchQuery);
  const setCourseSearchQuery = useFilterStore(s => s.setCourseSearchQuery);

  const expandedCourse = useFilterStore(s => s.expandedCourse);
  const setExpandedCourse = useFilterStore(s => s.setExpandedCourse);

  const selectedCourseParent = useFilterStore(s => s.selectedCourseParent);
  const setSelectedCourseParent = useFilterStore(s => s.setSelectedCourseParent);

  const selectedCourseItem = useFilterStore(s => s.selectedCourseItem);
  const setSelectedCourseItem = useFilterStore(s => s.setSelectedCourseItem);

  const currentView = useFilterStore(s => s.currentCourseView);
const setCurrentView = useFilterStore(s => s.setCurrentCourseView);

  // UI-only
  // const [currentView, setCurrentView] = useState("main");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [courseData, setCourseData] = useState({});
const [loading, setLoading] = useState(true);




const fetchcourse = async () => {
  setLoading(true);
  try {
    const main = new Listing();
    const response = await main.Univeristy();
    console.log("Full course API:", response);

    const categories = response?.data?.data?.categories || [];
    console.log("dfb",categories)

    const formatted = {};

    categories.forEach(cat => {
      formatted[cat.name] = {
        icon: IoSchoolOutline,
        subItems: cat.courses?.map(c => c.name) || [],
        specializations: {} 
      };
    });

    setCourseData(formatted);
  } catch (error) {
    console.error("Error fetching:", error);
  } finally {
    setLoading(false);
  }
};


useEffect(() => {
  fetchcourse();
}, []);



  // const courseData = {
  //   "PG Courses": {
  //     icon: IoSchoolOutline,
  //     subItems: ["MBA", "M.Com", "MCA", "M.Sc"],
  //     specializations: {
  //       "MBA": ["Finance", "Marketing", "Human Resources", "Operations", "International Business"],
  //       "M.Com": ["Advanced Accounting", "Financial Managment", "Taxation", "Auditing"],
  //     }
  //   },

  //   "UG Courses": {
  //     icon: IoSchoolOutline,
  //     subItems: ["BBA", "B.Com", "BCA", "BAJMC"],
  //     specializations: {
  //       "BBA": ["Financial Managment", "Banking And Insurance", "Digital Marketing", "Enterpreneurship", "Hospital Mangment"],
  //       "B.Com": ["Accounting & Finance", "Banking & Insurance", "Taxation", "Corporate Accounting", "Business Analytics"]
  //     }
  //   },

  //   "Executive Programms": {
  //     icon: IoSchoolOutline,
  //     subItems: ["Diploma", "Certification"],
  //     specializations: {
  //       "Diploma": ["Web Development", "Graphic Design"],
  //       "Certification": ["Python", "JavaScript", "Data Science"]
  //     }
  //   },

  //   "Certifications": {
  //     icon: IoSchoolOutline,
  //     subItems: ["Diploma", "Certification"],
  //     specializations: {
  //       "Diploma": ["Web Development", "Graphic Design"],
  //       "Certification": ["Python", "JavaScript", "Data Science"]
  //     }
  //   }
  // };


  const filters = useMemo(() => {
    return Object.keys(courseData).map((name) => ({
      name,
      icon: IoSchoolOutline,
      hasSubItems: courseData[name]?.subItems?.length > 0,
    }));
  }, [courseData]);
  

  // Search filtered list
  const filtered = useMemo(() => {
    const q = courseSearchQuery.toLowerCase();
    return filters.filter(f =>
      f.name.toLowerCase().includes(q) ||
      courseData[f.name]?.subItems?.some(s => s.toLowerCase().includes(q))
    );
  }, [courseSearchQuery, filters, courseData]);

  // Navigation animations
  function transition(to) {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(to);
      setIsTransitioning(false);
    }, 150);
  }
  

  // Click on course main filter (PG, UG, etc.)
  function handleFilterClick(filter) {
    if (expandedCourse === filter) {
      setExpandedCourse("");
      setCourseFilter("");
    } else {
      setExpandedCourse(filter);
      setCourseFilter(filter);
    }
  }

  // Click on sub item (MBA, BBA, etc.)
  function handleSubItemClick(item, parent) {
    const hasSpecs = courseData[parent]?.specializations?.[item];

    setSelectedCourseParent(parent);
    setSelectedCourseItem(item);

    if (hasSpecs) {
      transition("details");
    } else {
      setCourseSubFilter(item);
    }
  }

  return (
    <div className="bg-gradient-to-b from-white to-[#EFEFEF] shadow-md shadow-neutral-200 rounded-md">
      <div className="">

        {/* Header */}
        <div className="flex justify-center items-center gap-1 text-neutral-600 text-sm mb-4">
          {currentView === "details" && (
            <button onClick={() => transition("main")}>
              <ChevronLeft size={18} />
            </button>
          )}
          Courses & Specializations
        </div>

        {/* Search */}
        <div className="relative mb-6 px-4">
          <input
            type="text"
            placeholder="Search here..."
            value={courseSearchQuery}
            onChange={(e) => setCourseSearchQuery(e.target.value)}
            className="w-full px-4 py-1 text-xs border border-neutral-400 rounded-full"
          />
          <Search size={14} className="absolute right-8 top-1.5 text-neutral-300" />
        </div>

        {/* MAIN VIEW */}
        {currentView === "main" && (
          <div className="space-y-1 pb-3">
            
            {filtered && filtered?.map((f) => {
              const Icon = f.icon;

              return (
                <div key={f.name} className="relative px-2">
                  <div
                    onClick={() => handleFilterClick(f.name)}
                    className={clsx(
                      "flex items-center gap-2 px-4 py-1 rounded-full cursor-pointer",
                      activeCourseFilter === f.name ? "bg-red-500 text-white" : "text-black"
                    )}
                  >
                    <Icon size={20} />
                    <span className="text-[14px]">{f.name}</span>
                  </div>

                  {/* SUB ITEMS */}
                  {f.hasSubItems && (
                    <div className={clsx(
                      "transition-all overflow-hidden",
                      expandedCourse === f.name ? "max-h-96 mt-2 opacity-100" : "max-h-0 opacity-0"
                    )}>
                      {courseData[f.name].subItems.map(sub => (
                        <div key={sub}
                          className="flex items-center gap-3 pl-6 py-1 cursor-pointer text-[14px]"
                          onClick={() => handleSubItemClick(sub, f.name)}
                        >
                          <div className={clsx(
                            "w-2 h-2 rounded-full border-2  text-[14px]",
                            activeCourseSubFilter === sub ? "border-red-500" : "border-gray-400"
                          )} />
                          {sub}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* DETAILS VIEW */}
        {currentView === "details" && (
          <div className={clsx(
            "px-7 space-y-3 transition-all py-4",
            isTransitioning ? "opacity-0 -translate-x-3" : "opacity-100 translate-x-0"
          )}>
            <span className="text-gray-600 text-[14px]">{selectedCourseItem}</span>
            <hr />

            {courseData[selectedCourseParent]?.specializations?.[selectedCourseItem]?.map(sp => (
              <div key={sp} className="flex items-center gap-2 cursor-pointer text-[14px] "
                onClick={() => setSpecialization(sp)}
              >
                <div className={clsx(
                  "w-2 h-2 rounded-full border-2 text-[14px]",
                  activeSpecialization === sp ? "border-red-500" : "border-gray-400"
                )} />
                {sp}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
