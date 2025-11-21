"use client";
import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

export default function StepsProgress() {
  const [progress, setProgress] = useState(0); // 0–100 smooth progress

  const steps = [
    "1-1 Counselling",
    "Compare Universities",
    "Select Perfect University",
    "Enrollment Assistance",
    "Admission Confirmation",
    "Post-Admission Guidance",
  ];

  // Smooth auto-increase
 useEffect(() => {
  const interval = setInterval(() => {
    setProgress((p) => {
      if (p >= 100) return 0; // restart from 0 again
      return p + 0.1; // SUPER SMOOTH
    });
  }, 10);

  return () => clearInterval(interval);
}, []);


  const currentStep = Math.floor((progress / 100) * steps.length);
  const stepFraction = (progress / 100) * steps.length - currentStep;

  return (
    <div className="w-full overflow-x-auto py-6">
      <div className="flex items-center gap-6 min-w-max px-4">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={index} className="flex items-center">
              {/* STEP BOX */}
              <div
                className={`flex items-center gap-2 px-6 py-3 rounded-full border
                  transition-all duration-500 ease-in-out
                  ${
                    isCompleted
                      ? "bg-red-50 border-red-500 text-red-600 font-semibold"
                      : isCurrent
                      ? "bg-white border-red-400 text-red-500"
                      : "bg-white border-gray-300 text-gray-400"
                  }
                `}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center border text-[10px]
                    transition-all duration-500 ease-in-out
                    ${
                      isCompleted
                        ? "bg-red-500 border-red-500 text-white"
                        : isCurrent
                        ? "border-red-400 text-red-400"
                        : "border-gray-400 text-gray-400"
                    }
                  `}
                >
                  {isCompleted ? <FaCheck size={10} /> : ""}
                </div>

                <span className="whitespace-nowrap text-sm">{step}</span>
              </div>

              {/* CONNECTOR LINE */}
              {index < steps.length - 1 && (
                <div className="w-24 h-[2px] mx-2 bg-gray-300 relative overflow-hidden rounded">
                  <div
                    className="absolute top-0 left-0 h-full bg-red-500 transition-all duration-75"
                    style={{
                      width: isCompleted
                        ? "100%"
                        : isCurrent
                        ? `${stepFraction * 100}%`
                        : "0%",
                    }}
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
