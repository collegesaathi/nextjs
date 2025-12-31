'use client';

// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";

// CSS import (Ensure path is correct in your project)
// import "@/public/css/styled-scroll.css";

const studyPaths = [
  {
    id: "ug",
    label: "UG",
    n_icon_path: "/icons/normal/hat.svg",
    s_icon_path: "/icons/selected/hat.svg",
  },
  {
    id: "pg",
    label: "PG",
    n_icon_path: "/icons/normal/degree.svg",
    s_icon_path: "/icons/selected/degree.svg",
  },
  {
    id: "executive",
    label: "Executive Programs",
    n_icon_path: "/icons/normal/e-program.svg",
    s_icon_path: "/icons/selected/e-program.svg",
  },
  {
    id: "certifications",
    label: "Certifications",
    n_icon_path: "/icons/normal/cert.svg",
    s_icon_path: "/icons/selected/cert.svg",
  },
  {
    id: "law",
    label: "Law",
    n_icon_path: "/icons/normal/law.svg",
    s_icon_path: "/icons/selected/law.svg",
  },
  {
    id: "doctorfate",
    label: "Doctorate/Ph.D.",
    n_icon_path: "/icons/normal/doctor.svg",
    s_icon_path: "/icons/selected/doctor.svg",
  },
  {
    id: "doctotrate",
    label: "Doctorate/Ph.D.",
    n_icon_path: "/icons/normal/doctor.svg",
    s_icon_path: "/icons/selected/doctor.svg",
  },
  {
    id: "docto8rate",
    label: "Doctorate/Ph.D.",
    n_icon_path: "/icons/normal/doctor.svg",
    s_icon_path: "/icons/selected/doctor.svg",
  },
];

export default function PathSection() {
  // Local state to manage selection
  const [selectedPath, setSelectedPath] = useState(null);

  const handleNext = () => {
    if (selectedPath) {
      console.log("Selected Path ID:", selectedPath);
      // Aap yahan navigation logic likh sakte hain, e.g., router.push()
      alert(`Moving to next step with: ${selectedPath}`);
    }
  };

  return (
    <div className="grid lg:w-[29.625rem] h-[37.188rem] border-3 rounded-2xl border-white z-50 m-2">
      <Card className="shadow-xl h-[35.688rem] lg:w-[28rem] m-2">
        <CardHeader>
          <CardTitle className="text-[1.25rem] text-center">
            Select Your Study Path
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-2 fancy-scrollbar overflow-y-scroll max-h-[24rem] pr-1">
            {studyPaths.map((path) => (
              <Card
                key={path.id}
                className={`cursor-pointer transition-all shadow-none h-[122px] border-2 ${
                  selectedPath === path.id 
                  ? "border-red-500 bg-red-50/30" 
                  : "border-neutral-100 hover:border-neutral-200"
                }`}
                onClick={() => setSelectedPath(path.id)}
              >
                <CardContent className="relative grid place-content-center text-center space-y-2 py-1 h-full">
                  <img
                    src={selectedPath === path.id ? path.s_icon_path : path.n_icon_path}
                    className="mx-auto h-[2.063rem]"
                    alt={path.label}
                  />
                  <p className={`text-[0.875rem] lg:text-[1rem] leading-tight font-medium ${
                    selectedPath === path.id ? "text-red-600" : "text-[#B8B8B8]"
                  }`}>
                    {path.label}
                  </p>
                  
                  {/* Checkbox aligned to top-right */}
                  <div className="absolute top-2 right-2">
                    <Checkbox
                      checked={selectedPath === path.id}
                      onCheckedChange={() => setSelectedPath(path.id)}
                      onClick={(e) => e.stopPropagation()} // Prevents double toggle
                      className="rounded-full data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="destructive"
            size="lg"
            onClick={handleNext}
            disabled={!selectedPath}
            className="w-full text-lg font-medium h-[3.438rem] bg-[#EC1E24] hover:bg-red-700"
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}