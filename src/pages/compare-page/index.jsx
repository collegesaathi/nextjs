'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';

// UI Components (Shadcn UI assumed)
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";


// import BasicDetails from "@/components/chartCards/basic";
// import StudyPathChart from "@/components/chartCards/selectedStudyPathChart";
// import OnlineCourseChart from "@/components/chartCards/selectedCourseChart";
// import SpecializationChart from "@/components/chartCards/selectedSpecializationChart";


// import PathSection from "@/components/compare/PathSection";
import PathSection from './PathSection';
// import CourseSection from "@/components/compare/CourseSection";
// import SpecializationSection from "@/components/compare/SpecializationSection";
// import UniSection from "@/components/compare/UniSection";

// import CompareRatings from "@/components/cards/CompareRatings";
// import HiringBrands from "@/components/cards/HiringBrands";


// import { useCompareStore } from "@/store/useCompareStore"; 

export default function ComparePage() {
 
    // const { 
    //     currentStep, 
    //     selectedCourse, 
    //     selectedPath, 
    //     selectedUniversity, 
    //     selectedSpecialization 
    // } = useCompareStore();




    // Left side chart logic
    // const renderLeftContent = () => {
    //     if (currentStep === 'path' && selectedPath) {
    //         return <StudyPathChart />;
    //     } else if (currentStep === 'course' && selectedCourse) {
    //         return <OnlineCourseChart />;
    //     } else if (currentStep === 'specialization' && selectedSpecialization) {
    //         return <SpecializationChart />;
    //     } else if (currentStep === 'compare' && selectedUniversity?.length > 0) {
    //         return <img src="/images/cmp-3.png" alt="Compare" />;
    //     } else {
    //         return <BasicDetails />;
    //     }
    // };

    return (
        <div className="pt-10 pb-6 lg:py-20">
            {/* Main Content */}
            <main className="relative mx-auto">
                {/* Hero Section */}
                <div className="relative z-30 text-center mb-4 lg:mb-16">
                    <h1 className="text-[2.25rem] lg:text-[4rem] font-bold text-gray-900 mb-4">
                        Compare with CS ClikPick
                    </h1>
                    <p className="text-[#282529] text-[1rem] lg:text-[1.25rem]">
                        Get insights, compare and find your perfect Specialization
                        <br className="hidden sm:block" />
                        within seconds
                    </p>
                </div>

                {/* Main Card Section */}
                <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
                    {/* Left Side - Illustration Card */}
                    <div className="hidden lg:block z-30 absolute top-76 left-24">
                        {/* {renderLeftContent()} */}
                    </div>

                    {/* Empty div for layout (to match your Vue grid setup) */}
                    <div></div>

                    {/* Right Side - Selection Card */}
                    <div className="z-[999] lg:ml-20">
                        {/* Vue's <component :is> is replaced by calling the function/component */}
           
                    </div>
                </div>

                {/* Companies Section */}
                <div className="relative z-[9999]">
                    {/* <HiringBrands /> */}
                </div>

                {/* Trust Section */}
                {/* <CompareRatings /> */}

                {/* Decorative Elements */}
                <div className="absolute top-[28rem] left-[30rem] w-0 h-2 rounded-full shadow-[0px_0px_300px_300px_#FFF5DC] z-10"></div>
                <div className="absolute lg:top-[40rem] top-[28rem] left-40 w-0 h-2 rounded-full shadow-[0px_0px_500px_500px_#FCD6D6]/60 lg:shadow-[0px_0px_300px_300px_#FCD6D6] z-10"></div>
                <div className="absolute top-[34rem] right-[28rem] w-0 h-2 rounded-full shadow-[0px_0px_300px_300px_#FCD6D6] z-40 hidden lg:block"></div>
                <div className="absolute bottom-[24rem] left-0 w-1/2 h-0 rounded-full shadow-[0px_0px_200px_100px_#FCD6D6] z-40 hidden lg:block"></div>
                <div className="absolute top-[48rem] right-5 w-0 h-2 rounded-full shadow-[0px_0px_300px_300px_#FBF0D3] z-50 hidden lg:block"></div>
            </main>
        </div>
    );
}