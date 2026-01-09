'use client'
import React, { useState, useRef, useEffect } from "react"
import { X, Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";
import Listing from "../api/Listing";
import { useRole } from '@/context/RoleContext';
import { MdClose } from "react-icons/md";
import Link from "next/link";

export default function CompareComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const [universities, setUniversities] = useState([])
  const [Courseuniversities, setCourseUniversities] = useState([])

  console.log("universities" ,universities)
  const {
    selectedUnis,
    isCompareOpen,
    selectedCourses,
    setIsCompareOpen,
    course,
    toggleCourse,
    toggleUniversity
  } = useRole();


  const comparisonSlug = selectedUnis.map(u => u.slug).join('-vs-');
  const comparisonUrl = `/compare-universities/${comparisonSlug}`;
  useEffect(() => {
    const fetchUniversity = async () => {
      setLoading(true)
      try {
        const main = new Listing();
        const response = await main.UniversityAll();
        setUniversities(response?.data?.data)
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    if (isCompareOpen) fetchUniversity();
  }, [isCompareOpen]);



useEffect(() => {
  const fetchCourseNames = async () => {
    try {
      if (!Array.isArray(course) || course.length === 0) return;

      setLoading(true);

      const selectedCourse = course[0];

      const payload = {
        course_name: selectedCourse?.name,
        category_id: selectedCourse?.category_id || null,
      };

      const main = new Listing();
      const response = await main.CompareUniversity(payload);

      const apiUniversities = response?.data?.data || [];

      // 🔥 already selected university IDs
      const selectedUniIds = selectedUnis?.map((u) => u.id) || [];

      // 🔥 filter out already selected universities
      const filteredUniversities = apiUniversities.filter(
        (uni) => !selectedUniIds.includes(uni.id)
      );

      setCourseUniversities(filteredUniversities);
    } catch (error) {
      console.error("Error fetching universities:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchCourseNames();
}, [course, selectedUnis]);




  if (!isCompareOpen) return null;
  const handleClose = () => setIsCompareOpen(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 300 : scrollLeft + 300;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  


  return (

    <div className="fixed inset-0 z-[999] flex items-center justify-center ">
      {/* Background Blur/Transparency Layer */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal Content Box */}
      <div className="relative w-full  bg-white shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
        >
          <MdClose size={28} />
        </button>
        <div className="w-full flex flex-col items-center py-10 px-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Add Course To Compare
          </h2>

          {/* Horizontal Slider Section */}
          <div className="relative w-full px-12 mb-4">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border shadow-lg p-2 rounded-full text-gray-500 hover:text-black z-10"
            >
              <ChevronLeft size={24} />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-5 no-scrollbar scroll-smooth pb-4 px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {course?.map((uni) => (
                <div
                  key={uni.id}
                  className="min-w-[200px] h-[180px] border border-gray-100 rounded-2xl bg-white p-2 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-center">
                    <img src={uni?.university.icon} alt={uni.icon_alt} className="max-h-full object-contain" />
                  </div>
                  <p className="text-[14px] font-[600] text-center text-[#282529]">
                    {uni.name}
                  </p>
                  <button
                    onClick={() => toggleCourse(uni)}
                    className="relative w-10 h-10 self-start z-[1]"
                  >
                    {!selectedCourses.find(u => u.id === uni.id) && (
                      <span className="pulse-wrapper absolute inset-0 -z-10"></span>
                    )}

                    {selectedCourses.find(u => u.id === uni.id) && (
                      <span className="pulse-wrapper-green absolute inset-0 -z-10"></span>
                    )}
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center text-white
                    ${selectedCourses.find(u => u.id === uni.id) ? 'bg-[#037938]' : 'bg-red-600'}`}>
                      {selectedCourses.find(u => u.id === uni.id) ? <FaCheck size={20} /> : <Plus size={20} className="z-1" />}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border shadow-lg p-2 rounded-full text-gray-500 hover:text-black z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>

           <div className="relative w-full px-12 mb-4">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border shadow-lg p-2 rounded-full text-gray-500 hover:text-black z-10"
            >
              <ChevronLeft size={24} />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-5 no-scrollbar scroll-smooth pb-4 px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {Courseuniversities?.map((uni) => (
                <div
                  key={uni.id}
                  className="min-w-[200px] h-[180px] border border-gray-100 rounded-2xl bg-white p-2 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-center">
                    <img src={uni?.icon} alt={uni.icon_alt} className="max-h-full object-contain" />
                  </div>
                  <p className="text-[14px] font-[600] text-center text-[#282529]">
                    {uni.name}
                  </p>
                  <button
                    onClick={() => toggleUniversity(uni)}
                    className="relative w-10 h-10 self-start z-[1]"
                  >
                    {!selectedCourses.find(u => u.id === uni.id) && (
                      <span className="pulse-wrapper absolute inset-0 -z-10"></span>
                    )}

                    {selectedCourses.find(u => u.id === uni.id) && (
                      <span className="pulse-wrapper-green absolute inset-0 -z-10"></span>
                    )}
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center text-white
                    ${selectedCourses.find(u => u.id === uni.id) ? 'bg-[#037938]' : 'bg-red-600'}`}>
                      {selectedCourses.find(u => u.id === uni.id) ? <FaCheck size={20} /> : <Plus size={20} className="z-1" />}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border shadow-lg p-2 rounded-full text-gray-500 hover:text-black z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Selection Bucket (Dashed Container) */}
          <div className="w-full  min-h-[240px] bg-gray-50/60 border-2 border-dashed border-gray-300 rounded-[2rem] flex flex-wrap items-center justify-center gap-8 p-8 mb-4">
            {selectedUnis.length === 0 ? (
              <div className="text-gray-400 text-center ">
                <Plus size={48} className="mx-auto mb-3 opacity-20" />
                <p className="text-lg">Select universities from above to start comparing</p>
              </div>
            ) : (
              selectedUnis && selectedUnis?.map((uni) => (
                <div
                
                  key={uni.id}
                  className="relative w-[280px] h-[250px] bg-gray-100 rounded-2xl shadow-xl flex flex-col items-center justify-center"
                >

                  {/* Inner Light Gray Box */}
                  <div className="w-[85%] h-[70%] border border-gray-200 bg-white rounded-2xl flex flex-col items-center justify-end pb-6">

                    {/* University Name */}
                    <p className="text-[16px] font-[600] text-center text-[#282529]">
                      {uni.name}
                    </p>
                  </div>

                  {/* Floating White Logo Card */}
                  <div className="absolute top-4 w-[170px] h-[120px] bg-white rounded-2xl shadow-lg flex items-center justify-center">

                    <img
                      src={uni?.icon}
                      alt={uni.icon_alt}
                      className="max-h-[75px] object-cover"
                    />

                    {/* Close Button */}
                    <button
                      onClick={() => toggleUniversity(uni)}
                      className="absolute -right-14 top-4 w-7 h-7 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition"
                    >
                      <MdClose size={16} />
                    </button>
                  </div>

                </div>
              ))
            )}
          </div>

          {/* Action Button */}
          <div className="mt-6">
            <Link
              href={comparisonUrl}
              disabled={selectedUnis.length < 2}
              className={`px-16 py-4 rounded-xl font-bold text-white text-xl shadow-xl transition-all ${selectedUnis.length >= 2
                ? 'bg-red-600 hover:bg-red-700 hover:-translate-y-1 active:translate-y-0'
                : 'bg-gray-300 cursor-not-allowed'
                }`}
            >
              Compare Now
            </Link>
          </div>

        </div>
      </div>
    </div>


  );
}