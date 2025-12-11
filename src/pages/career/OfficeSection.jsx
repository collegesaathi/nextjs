"use client";
import { useState, useRef, useEffect } from "react";

// Mock data
const galleryImages = [
  { id: 1, src: "/images/career/slider1.png", type: "tall", width: 200, height: 350 },
  { id: 2, src: "/images/career/slider2.png", type: "medium", width: 280, height: 280 }, 
  { id: 3, src: "/images/career/slider3.png", type: "wide", width: 372, height: 244 }, 
  { id: 4, src: "/images/career/slider4.png", type: "small", width: 200, height: 200 }, 
  { id: 5, src: "/images/career/slider1.png", type: "tall", width: 200, height: 350 },
  { id: 6, src: "/images/career/slider2.png", type: "medium", width: 280, height: 280 }, 
  { id: 7, src: "/images/career/slider3.png", type: "wide", width: 372, height: 244 }, 
  { id: 8, src: "/images/career/slider4.png", type: "small", width: 200, height: 200 }, 
  { id: 9, src: "/images/career/slider2.png", type: "medium", width: 280, height: 280 }, 
  { id: 10, src: "/images/career/slider3.png", type: "wide", width: 372, height: 244 }, 
  { id: 11, src: "/images/career/slider4.png", type: "small", width: 200, height: 200 },
];

export default function OfficeSection() {
  const [activeTab, setActiveTab] = useState("jaipur");
  const [selectedImage, setSelectedImage] = useState(2); 
  
  // Refs for scrolling logic
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 1. Function to center the selected image smoothly
  const scrollToCenter = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const children = container.children;
    const selectedChild = children[index];

    if (selectedChild) {
      // Calculate position to center the element
      const containerWidth = container.offsetWidth;
      const childWidth = selectedChild.offsetWidth;
      const childLeft = selectedChild.offsetLeft;

      const newScrollPosition = childLeft - containerWidth / 2 + childWidth / 2;

      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  // 2. Effect: Whenever selectedImage changes, scroll to it
  useEffect(() => {
    scrollToCenter(selectedImage);
  }, [selectedImage]);

  // 3. Mouse Drag Logic (to simulate slider feel on desktop)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fastness
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className=" py-8 md:py-20  min-h-screen">
      
      {/* CSS to Hide Scrollbar but keep functionality */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ================= SLIDER SECTION ================= */}
      <div className="relative  w-full overflow-hidden">
        
        {/* Horizontal Dashed Line */}
        <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-blue-400 -translate-y-1/2 z-0"></div>

        {/* Scrollable Container with Refs and Events */}
        <div 
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex items-center gap-10 px-10 overflow-x-auto md:pb-12 pt-12 no-scrollbar relative z-10 cursor-grab active:cursor-grabbing"
        >
          
          {galleryImages.map((img, index) => {
            const isActive = index === selectedImage;

            return (
              <div
                key={img.id}
                onClick={() => setSelectedImage(index)} // This triggers the useEffect to scroll
                className="relative shrink-0 transition-all duration-300 group flex flex-col items-center justify-center select-none"
              >
     
                {/* Vertical Dashed Line (Active only) */}
                {isActive && (
                  <div className="absolute bottom-full left-1/2 h-20 border-l-2 border-dashed border-blue-400 -translate-x-1/2 mb-4">
                    <div className="absolute -top-1 -left-[5px] w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                )}

                {/* Image Container */}
                <div
                  className={`relative rounded-xl overflow-hidden bg-white transition-all duration-300 
                    ${isActive ? "ring-4 ring-blue-500 shadow-xl scale-105" : "hover:opacity-90"}
                  `}
                  style={{
                    width: isActive ? `${img.width}px` : `${img.width * 0.9}px`,
                    height: isActive ? `${img.height}px` : `${img.height * 0.9}px`,
                  }}
                >
                  <img
                    src={img.src}
                    alt="Gallery"
                    className="w-full h-full object-cover pointer-events-none" // Prevents dragging image itself
                  />
                </div>

                {/* Size Tag */}
                {isActive && (
                  <div className="mt-3 bg-[#2D9CDB] text-white text-xs font-semibold px-2 py-1 rounded">
                    {img.width} × {img.height}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center py-8 md:py-20">
        <div className="flex flex-col items-center md:items-start py-4">
          <h2 className="text-[24px] md:text-[40px] font-[600] text-[#282529] text-center md:text-left">Our Offices</h2>
          <p className="text-[#282529] text-center  md:text-left text-[16px] mt-4 max-w-md leading-relaxed">
  We like working together in our offices with our team, where we share ideas, knowledge and opportunities.
   Here, we learn, grow and work to transform the lives of people.
          </p>

          <div className="flex mx-auto md:mx-0 mt-6 bg-white rounded-xl p-1 w-max shadow-sm border border-gray-100">
            <button
              onClick={() => setActiveTab("jaipur")}
              className={`px-6 py-5 rounded-md text-sm font-medium transition-colors ${
                activeTab === "jaipur"
                  ? "bg-[#63A46C] text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Jaipur
            </button>

            <button
              onClick={() => setActiveTab("gurugram")}
              className={`px-6 py-5 rounded-md text-sm font-medium transition-colors ${
                activeTab === "gurugram"
                  ? "bg-[#6FB584] text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Gurugram
            </button>
          </div>

          <a href="#" className="text-red-600 mt-8 text-[16px]  inline-flex items-center gap-2 font-medium underline">
            Start Your Journey with Us 
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="rounded-2xl overflow-hidden shadow-lg  w-full max-w-sm rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src={activeTab === "jaipur" ? "/images/career/officejaipur.png" : "/images/office-gurugram.jpg"}
              className="w-full h-[480px] object-cover rounded-xl"
              alt="Office location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}