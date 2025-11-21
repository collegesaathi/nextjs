"use client";
import { useEffect, useRef, useState } from "react";

const statsData = [
  {
    count: "200+",
    title: "Courses",
    description: "Perfect program that suits your goals",
  },
  {
    count: "150+",
    title: "Specializations",
    description: "Cutting-edge specializations",
  },
  {
    count: "100+",
    title: "Career Experts",
    description: "1+1 Personalized career counselling",
  },
  {
    count: "30000+",
    title: "Students",
    description: "Have accomplished their career & academic goals",
  },
];

export default function BestPartnerCount() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // INTERSECTION OBSERVER
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // SMOOTH COUNTER HOOK
  const useCounter = (endValue, duration = 2000) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!visible) return; // only start when visible

      let start = 0;
      const end = parseInt(endValue.replace(/\D/g, "")); // extract number
      const increment = end / (duration / 16); // ~60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setValue(end);
        } else {
          setValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [endValue, duration, visible]);

    return value;
  };

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Main Red Box */}
      <div className="bg-red-600 text-white p-6 md:p-10 rounded-xl shadow-2xl">
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-8">
          What makes Collegesathi the Best Search Partner for Online University?
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-red-500">
          {statsData.map((stat, index) => {
            const number = useCounter(stat.count, 2000);

            return (
              <div
                key={stat.title}
                className={`p-4 text-center ${
                  index < 2 ? "pb-8 lg:pb-4" : ""
                } ${index >= 2 ? "pt-8 lg:pt-4" : ""}`}
              >
                {/* Animated Count */}
                <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">
                  {number.toLocaleString()}+
                </p>

                {/* Title */}
                <p className="text-lg md:text-xl font-bold mb-1">
                  {stat.title}
                </p>

                {/* Description */}
                <p className="text-sm opacity-90 leading-snug">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
