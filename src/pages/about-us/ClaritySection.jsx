import React, { useState } from 'react';
import { FaUsers, FaBookOpen, FaGraduationCap, FaHandshake, FaRocket } from 'react-icons/fa';
import Image from 'next/image';

const features = [
    {
        id: 1,
        title: 'Personalized Counseling',
        details: 'Our experts are always there for you, providing one-on-one sessions to solve your every doubt and smooth your journey.',
        image: "/images/about/clarity1.png",
        color: 'text-red-500'
    },
    {
        id: 2,
        title: 'Student Resources',
        details: 'Get the details about your favourite online university, backed with expert guidance clearing your every doubt to help you make an informed decision.',
      image: "/images/about/clarity2.png",
        color: 'text-blue-500'
    },
    {
        id: 3,
        title: 'Post-admission Support',
        details: 'We don’t stop after admission; our team is dedicated with you to support and after getting admission.',
         image: "/images/about/clarity3.png",
        color: 'text-yellow-500'
    },
    {
        id: 4,
        title: 'Trusted Partnerships',
        details: 'Strong connections with UGC online universities and institutions to ensure your success.',
          image: "/images/about/clarity4.png",
        color: 'text-green-500'
    },
      {
        id: 5,
        title: 'Trusted Partnerships',
        details: 'Strong connections with UGC online universities and institutions to ensure your success.',
          image: "/images/about/clarity5.png",
        color: 'text-green-500'
    },
];

const DEFAULT_ACTIVE_ID = 2; // Student Resources

const ClaritySection = () => {
    const [activeFeatureId, setActiveFeatureId] = useState(DEFAULT_ACTIVE_ID);

    return (
        <section className="py-10  bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADING */}
                <div className="text-center mb-12 sm:mb-16 font-poppins">
                    <h2 className="text-[26px] md:text-[32px] font-[600] leading-[32px] text-[#282529]">
                        Clarity at Every Step
                    </h2>
                    <p className="mt-4 text-[16px] text-[#282529] font-[400] max-w-xl mx-auto leading-[24px]">
                        We take your future very seriously, and we continuously develop ourselves to help you achieving your dreams
                    </p>
                </div>

                {/* CONTENT GRID */}
             <div className="flex relative flex-col lg:flex-row  divide-x-0 lg:divide-x divide-gray-200 ">
  {/* Gradient Top Border */}
  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent z-10"></div>
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent z-10"></div>

  {/* --- LEFT SIDE --- */}
  <div className="lg:w-1/2 py-8 lg:pr-12 flex flex-col justify-center">
    <ul className="space-y-8 md:space-y-12 text-center">
      {features.map((feature) => {
        const isActive = activeFeatureId === feature.id;
        return (
          <li
            key={feature.id}
            onClick={() => setActiveFeatureId(feature.id)}
            className={`cursor-pointer transition-all duration-500 ease-in-out transform origin-left ${
              isActive
                ? "opacity-100 blur-0 scale-105"
                : "opacity-20 blur-[2px] hover:opacity-60 hover:blur-[1px] hover:scale-100"
            }`}
          >
            <span
              className={`text-[20px] sm:text-[28px] font-bold tracking-tight leading-tight ${
                isActive ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {feature.title}
            </span>
          </li>
        );
      })}
    </ul>
  </div>

  {/* --- RIGHT SIDE --- */}
  <div className="lg:w-1/2 p-6  lg:pl-12 mt-8 lg:mt-0 flex flex-col justify-center space-y-10">
    {features.map((feature) => {
      const isActive = activeFeatureId === feature.id;
      const Icon = feature.icon;

      return (
        <div
          key={feature.id}
          onClick={() => setActiveFeatureId(feature.id)}
          className={`flex items-start space-x-4 transition-all duration-500 ease-in-out cursor-pointer ${
            isActive
              ? "opacity-100 blur-0 translate-x-0"
              : "opacity-20 blur-[1.5px] translate-x-4 grayscale"
          }`}
        >
          <div className="flex-shrink-0 pt-1">
            <Image src={feature.image} width={20} height={20} className={`w-8 h-8 ${feature.color}`} />
          </div>
          <div>
          
            <p className="mt-2 text-base text-gray-600 leading-relaxed">{feature.details}</p>
          </div>
        </div>
      );
    })}
  </div>
</div>

            </div>
        </section>
    );
};

export default ClaritySection;