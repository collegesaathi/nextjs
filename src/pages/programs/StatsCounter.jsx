"use client";
import React, { useState, useEffect, useRef } from "react";

const CounterItem = ({ endValue, suffix, label }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = endValue / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, endValue]);

  return (
    <div ref={countRef} className="flex flex-col items-center text-center font-poppins">
      <h2 className="text-5xl text-[40px] md:text-[70px]  font-[600] text-[#282529] mb-2 leading-[40px] md:leading-[80px] ">
        {count}{suffix}
      </h2>
      <p className="text-[12px] md:text-[16px] font-[400] text-[#282529] uppercase leading-[16px] ">
        {label}
      </p>
    </div>
  );
};

export default function StatsCounter() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          <CounterItem endValue={95} suffix="%" label="Growth In Career" />
          <CounterItem endValue={15} suffix="+" label="Cutting-Edge Specializations" />
          <CounterItem endValue={2} suffix="" label="Years of Learning" />
        </div>
      </div>
    </section>
  );
}