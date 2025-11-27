'use client';

import React, { useState, useMemo } from "react";
import { Search, ChevronLeft } from "lucide-react";
import clsx from "clsx";
// import { courseData } from "@/store/courseData";

export default function CourseFilter() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [activeSubFilter, setActiveSubFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentView, setCurrentView] = useState("main");
  const [expandedFilter, setExpandedFilter] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedParentFilter, setSelectedParentFilter] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const courseData = "";
  // Convert store data → usable format
  const filters = useMemo(() => {
    return Object.keys(courseData).map((name) => ({
      name,
      icon: courseData[name]?.icon,
      hasSubItems: courseData[name]?.subItems?.length > 0,
    }));
  }, []);

  function handleViewTransition(newView) {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(newView);
      setIsTransitioning(false);
    }, 150);
  }

  function handleFilterClick(filterName) {
    const hasSubItems = courseData[filterName]?.subItems?.length > 0;

    if (hasSubItems) {
      const isExpanded = expandedFilter === filterName;
      setActiveFilter(isExpanded ? null : filterName);
      setExpandedFilter(isExpanded ? null : filterName);
    } else {
      setActiveFilter(activeFilter === filterName ? null : filterName);
    }
  }

  function handleSubItemClick(subItem, parentFilter) {
    const hasSpecializations =
      courseData[parentFilter]?.specializations?.[subItem];

    if (hasSpecializations) {
      setSelectedItem(subItem);
      setSelectedParentFilter(parentFilter);
      handleViewTransition("details");
    } else {
      setActiveSubFilter(activeSubFilter === subItem ? null : subItem);
    }
  }

  function handleSpecializationClick(specialization) {
    setActiveSubFilter(
      activeSubFilter === specialization ? null : specialization
    );
  }

  function handleBack() {
    handleViewTransition("main");
    setSelectedItem(null);
    setSelectedParentFilter(null);
  }

  const filtered = useMemo(() => {
    const query = searchQuery.toLowerCase();

    return filters.filter((f) => {
      if (f.name.toLowerCase().includes(query)) return true;

      const subItems = courseData[f.name]?.subItems || [];
      return subItems.some((s) => s.toLowerCase().includes(query));
    });
  }, [searchQuery, filters]);

  return (
    <div className="shadow-md transition-all duration-500">
      <div className="bg-gradient-to-b from-white to-[#EFEFEF] shadow-md shadow-neutral-200 rounded-md pt-4 w-full">

        {/* HEADER */}
        <div className="flex gap-1 px-2 justify-center items-center text-neutral-600 text-[0.875rem] mb-4">
          {currentView === "details" && (
            <button
              onClick={handleBack}
              className="hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
          )}
          Courses & Specializations
        </div>

        {/* SEARCH */}
        <div className="relative mb-6 px-4 lg:px-3">
          <input
            type="text"
            placeholder="Search here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-1 text-xs border border-neutral-400 rounded-full focus:outline-none focus:ring-2 focus:ring-[#EC1E24]"
          />
          <Search size={14} className="absolute right-8 top-1.5 text-neutral-300" />
        </div>

        {/* BODY */}
        <div className="pb-3 relative overflow-hidden">

          {/* MAIN VIEW */}
          {currentView === "main" && (
            <div className="space-y-1">
              {filtered.map((filter, index) => {
                const Icon = filter.icon;

                return (
                  <div key={index} className="relative px-2">

                    <div
                      onClick={() => handleFilterClick(filter.name)}
                      className={clsx(
                        "flex items-center gap-2 px-4 py-1 rounded-full cursor-pointer transition-all",
                        activeFilter === filter.name
                          ? "bg-[#EC1E24] text-white scale-[1.02]"
                          : "text-[#282529] hover:scale-[1.02]"
                      )}
                    >
                      <span>{Icon && <Icon />}</span>
                      <span className="flex-1 text-[0.875rem]">
                        {filter.name}
                      </span>
                    </div>

                    {/* SUB ITEMS */}
                    {filter.hasSubItems && (
                      <div
                        className={clsx(
                          "overflow-hidden transition-all duration-500",
                          expandedFilter === filter.name
                            ? "max-h-96 opacity-100 mt-2"
                            : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="rounded-xl p-2 space-y-1">
                          {courseData[filter.name]?.subItems?.map((subItem) => (
                            <div
                              key={subItem}
                              onClick={() =>
                                handleSubItemClick(subItem, filter.name)
                              }
                              className={clsx(
                                "flex items-center gap-3 pl-3 py-1 cursor-pointer",
                                activeSubFilter === subItem
                                  ? "text-red-600"
                                  : "text-neutral-700"
                              )}
                            >
                              <div
                                className={clsx(
                                  "w-1 h-4 rounded-md",
                                  activeSubFilter === subItem
                                    ? "bg-[#EC1E24]"
                                    : "border"
                                )}
                              />
                              <div
                                className={clsx(
                                  "w-2 h-2 rounded-full border-2",
                                  activeSubFilter === subItem
                                    ? "border-[#EC1E24]"
                                    : "border-gray-400"
                                )}
                              />
                              <span className="text-[0.875rem]">
                                {subItem}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* DETAILS VIEW */}
          {currentView === "details" && (
            <div
              className={clsx(
                "transition-all duration-300 space-y-3",
                isTransitioning
                  ? "opacity-0 -translate-x-4"
                  : "opacity-100 translate-x-0"
              )}
            >
              <div className="flex flex-col px-7 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full border-2 border-[#EC1E24]" />
                  <span className="text-[#8F8E90]">{selectedItem}</span>
                </div>
                <hr />
              </div>

              {(selectedParentFilter && selectedItem
                ? courseData[selectedParentFilter]?.specializations?.[selectedItem]
                : []
              )?.map((sp, index) => (
                <div key={index} className="px-7">

                  <div
                    onClick={() => handleSpecializationClick(sp)}
                    className="flex items-center gap-2 cursor-pointer text-[0.875rem]"
                  >
                    <div
                      className={clsx(
                        "w-2 h-2 rounded-full border-2",
                        activeSubFilter === sp
                          ? "border-[#EC1E24]"
                          : "border-gray-400"
                      )}
                    />
                    <span className="text-[#5e5e5f]">{sp}</span>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
