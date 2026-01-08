import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const features = [
    { id: 0, title: 'Clikpick', details: 'A verified AI-powered tool, designed to help you discover and compare verified online universities.' , image: "/images/about/clarity1.png"},
    { id: 1, title: 'Personalized Counseling', details: 'Our experts & mentors are there for you, providing one-on-one sessions to solve your every doubt and smooth your journey.', image: "/images/about/clarity2.png"},
    { id: 2, title: 'Student Resources', details: 'Get the details about your favourite online university, backed with expert guidance clearing your every doubt to help you make an informed decision.', image: "/images/about/clarity3.png"},
    { id: 3, title: 'Post-admission Support', details: 'We don’t stop after admissions; our team is connected with you to support you after getting admissions.', image: "/images/about/clarity4.png"},
    { id: 4, title: 'Trusted Partnerships', details: 'Have connections with 100+ online universities and institutions to back your dreams.', image: "/images/about/clarity5.png"},
];

// Infinite loop ke liye array ko bada kiya
const extendedFeatures = [...features, ...features, ...features];

const ClaritySection = () => {
    // Start from the middle set of features for seamless looping
    const [activeIndex, setActiveIndex] = useState(features.length); 
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const itemHeight = 90; // Ek row ki height
    const containerHeight = 550; // 5 lines dikhane ke liye (90 * 5)

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => prev + 1);
            setIsTransitioning(true);
        }, 2000);
        return () => clearInterval(interval);
    }, [isPaused]);

    // Loop Reset Logic: Jab hum end par pahunche, bina animation ke wapas middle mein jump karein
    useEffect(() => {
        if (activeIndex >= features.length * 2) {
            setTimeout(() => {
                setIsTransitioning(false); // Animation band karein
                setActiveIndex(features.length); // Middle set par jump karein
            }, 400); // Animation duration ke baad
        }
        if (activeIndex < features.length) {
            setTimeout(() => {
                setIsTransitioning(false);
                setActiveIndex(features.length * 2 - 1);
            }, 400);
        }
    }, [activeIndex]);

    const translateY = -(activeIndex * itemHeight) + (containerHeight / 2) - (itemHeight / 2);

    const animationStyles = `
        @keyframes sectionFadeUp {
            0% { opacity: 0; transform: translateY(15px); filter: blur(8px); }
            100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-section {
            animation: sectionFadeUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .scrolling-container {
            transition: ${isTransitioning ? 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'};
        }
    `;

    return (
        <section className="py-10 lg:py-15 bg-white" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <style>{animationStyles}</style>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-[32px] font-[600] text-[#282529] mb-4">What We Do</h2>
                    <p className="text-[#282529] max-w-2xl mx-auto text-[16px]">
                        We take your future very seriously, and we continuously develop ourselves to help you achieving your dreams
                    </p>
                </div>

                {/* MAIN CONTENT AREA */}
                <div className={`relative border-t border-b border-gray-100 py-4 overflow-hidden h-[${containerHeight}px]`} style={{ height: `${containerHeight}px` }}>
                    
                    {/* Vertical Center Divider */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 hidden lg:block"></div>

                    <div 
                        className="scrolling-container flex flex-col lg:flex-row"
                        style={{ transform: `translateY(${translateY}px)` }}
                    >
                        {/* LEFT SIDE (Titles) */}
                        <div className="lg:w-1/2 flex flex-col items-center pt-10 lg:pr-16">
                            {extendedFeatures.map((item, index) => {
                                const isActive = activeIndex === index;
                                const distance = Math.abs(index - activeIndex);
                                return (
                                    <div 
                                        key={index}
                                        className="flex items-center justify-center  transition-all duration-700"
                                        style={{ 
                                            height: `${itemHeight}px`,
                                            opacity: isActive ? 1 : 0.3,
                                            transform: `scale(${isActive ? 1.1 : 0.85})`,
                                            filter: `blur(${distance > 2 ? 4 : distance * 1.5}px)`
                                        }}
                                    >
                                        <h3 className={`text-[20px] md:text-[28px] font-bold text-center  transition-colors duration-500 ${isActive ? "text-[#282529] text-center" : "text-gray-400"}`}>
                                            {item.title}
                                        </h3>
                                    </div>
                                );
                            })}
                        </div>

                        {/* RIGHT SIDE (Details) */}
                        <div className="lg:w-1/2 flex flex-col items-center lg:items-start  pt-10 lg:pl-16">
                            {extendedFeatures.map((item, index) => {
                                const isActive = activeIndex === index;
                                const distance = Math.abs(index - activeIndex);
                                return (
                                    <div 
                                        key={index}
                                        className="flex items-center transition-all duration-700"
                                        style={{ 
                                            height: `${itemHeight}px`,
                                            opacity: isActive ? 1 : 0.3,
                                            filter: `blur(${distance > 1 ? 3 : distance * 2}px)`
                                        }}
                                    >
                                        <div className={`flex items-start space-x-4 max-w-md ${isActive ? 'animate-section' : ''}`}>
                                            <div className="mt-1 flex-shrink-0">
                                                <Image src={item.image} width={28} height={28} alt="icon" className="object-contain" />
                                            </div>
                                            <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed font-medium">
                                                {item.details}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Gradient Fade Overlays */}
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default ClaritySection;