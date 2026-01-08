'use client';

import React, { useMemo, useState, useEffect } from "react";
import clsx from "clsx";
import Listing from "@/pages/api/Listing";
import { Search, ChevronLeft, Loader } from "lucide-react";
import { IoSchoolOutline } from "react-icons/io5";
import { useFilterStore } from "@/store/filterStore";

export default function CourseFilter() {
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

    const [isTransitioning, setIsTransitioning] = useState(false);
    const [courseData, setCourseData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchcourse = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.Univeristy();
            const categories = response?.data?.data?.categories || [];
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

    const filters = useMemo(() => {
        return Object.keys(courseData).map((name) => ({
            name,
            icon: IoSchoolOutline,
            hasSubItems: courseData[name]?.subItems?.length > 0,
        }));
    }, [courseData]);

    const filtered = useMemo(() => {
        const q = courseSearchQuery.toLowerCase();
        return filters.filter(f =>
            f.name.toLowerCase().includes(q) ||
            courseData[f.name]?.subItems?.some(s => s.toLowerCase().includes(q))
        );
    }, [courseSearchQuery, filters, courseData]);

    function transition(to) {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentView(to);
            setIsTransitioning(false);
        }, 150);
    }

    function handleFilterClick(filter) {
        if (expandedCourse === filter) {
            setExpandedCourse("");
            setCourseFilter("");
        } else {
            setExpandedCourse(filter);
            setCourseFilter(filter);
        }
    }

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

    if (loading) {
        return (
            <div className="w-full flex justify-center py-10">
                <Loader className="animate-spin w-6 h-6 text-red-600" />
            </div>
        );
    }

    return (
        <div className="bg-[#F8F8F8] shadow-sm border border-gray-100 rounded-xl py-4">
            {/* Header */}
            <div className="flex justify-center items-center gap-1 text-neutral-500 font-medium text-[15px] mb-4">
                {currentView === "details" && (
                    <button onClick={() => transition("main")} className="mr-2">
                        <ChevronLeft size={18} />
                    </button>
                )}
                Courses & Specializations
            </div>

            {/* Search Box - FIXED PINK BORDER */}
            <div className="relative mb-6 px-4">
                <input
                    type="text"
                    placeholder="Search here..."
                    value={courseSearchQuery}
                    onChange={(e) => setCourseSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 text-xs border border-gray-300 rounded-full bg-white outline-none focus:outline-none focus:ring-0 focus:border-gray-400 transition-all"
                />
                <Search size={14} className="absolute right-8 top-2.5 text-gray-400" />
            </div>

            {/* MAIN VIEW */}
            {currentView === "main" && (
                <div className="space-y-1 pb-3 px-2">
                    {filtered && filtered.map((f) => {
                        const Icon = f.icon;
                        const isExpanded = expandedCourse === f.name;

                        return (
                            <div key={f.name} className="relative">
                                {/* Parent Category (PG, UG, etc.) */}
                                <div
                                    onClick={() => handleFilterClick(f.name)}
                                    className={clsx(
                                        "flex items-center gap-3 px-4 py-2.5 rounded-full cursor-pointer transition-all duration-200",
                                        activeCourseFilter === f.name 
                                            ? "bg-[#EE2C2C] text-white shadow-md" 
                                            : "text-[#4A4A4A] hover:bg-gray-100"
                                    )}
                                >
                                    <Icon size={20} className={activeCourseFilter === f.name ? "text-white" : "text-gray-600"} />
                                    <span className="text-[14px] font-semibold">{f.name}</span>
                                </div>

                                {/* SUB ITEMS TREE */}
                                {f.hasSubItems && (
                                    <div className={clsx(
                                        "transition-all duration-300 ease-in-out overflow-hidden ml-4 relative",
                                        isExpanded ? "max-h-[1000px] mt-2 opacity-100" : "max-h-0 opacity-0"
                                    )}>
                                        {/* Vertical Connecting Line */}
                                        <div className="absolute left-[1px] top-0 bottom-4 w-[1px] bg-gray-200"></div>

                                        {courseData[f.name].subItems.map(sub => {
                                            const isSubActive = activeCourseSubFilter === sub;
                                            return (
                                                <div key={sub}
                                                    className="flex items-center gap-3 pl-6 py-2 cursor-pointer text-[14px] relative group"
                                                    onClick={() => handleSubItemClick(sub, f.name)}
                                                >
                                                    {/* Active Left Red Indicator Line */}
                                                    {isSubActive && (
                                                        <div className="absolute left-[0px] w-[4px] h-[18px] bg-[#EE2C2C] rounded-full" />
                                                    )}

                                                    {/* Custom Radio-style Dot */}
                                               <div className="w-[10px] h-[10px] flex items-center justify-center shrink-0">
                <img 
                    src={isSubActive ? "/images/university/reddot.svg" : "/images/university/dot.svg"} 
                    alt="indicator" 
                    className="w-full h-full object-contain" 
                />
            </div>
            {/* --- IMAGE DOTS END --- */}

            <span className={clsx(
                "font-[400] transition-colors",
                isSubActive ? "text-black" : "text-gray-400 group-hover:text-gray-600"
            )}>
                {sub}
            </span>
        </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* DETAILS VIEW (Specializations) */}
            {currentView === "details" && (
                <div className={clsx(
                    "px-7 space-y-3 transition-all py-4",
                    isTransitioning ? "opacity-0 -translate-x-3" : "opacity-100 translate-x-0"
                )}>
                    <span className="text-gray-800 font-bold text-[14px]">{selectedCourseItem}</span>
                    <hr className="border-gray-200" />

                    {courseData[selectedCourseParent]?.specializations?.[selectedCourseItem]?.map(sp => (
                        <div key={sp} className="flex items-center gap-3 cursor-pointer text-[14px] group"
                            onClick={() => setSpecialization(sp)}
                        >
                            <div className={clsx(
                                "w-[14px] h-[14px] rounded-full border-2 flex items-center justify-center bg-white",
                                activeSpecialization === sp ? "border-[#EE2C2C]" : "border-gray-300"
                            )}>
                                {activeSpecialization === sp && <div className="w-[6px] h-[6px] rounded-full bg-[#EE2C2C]" />}
                            </div>
                            <span className={activeSpecialization === sp ? "text-black font-medium" : "text-gray-500"}>
                                {sp}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}