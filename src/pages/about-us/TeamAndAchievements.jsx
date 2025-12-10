// components/TeamAndAchievements.js

import React from 'react';

const achievements = [
    { text: 'Guided 30,000+ students toward better futures', highlight: '30,000+' },
    { text: 'Partnered with 100+ online universities & institutions', highlight: '100+' },
    { text: 'Recognized by leading online education platform', highlight: 'Recognized' },
];

const TeamAndAchievements = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- 1. Our Team Section --- */}
                
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                        Our Team
                    </h2>
                </div>

                <div className="space-y-6">
                    <div className="rounded-2xl shadow-xl overflow-hidden">
                        <img 
                            src="/path/to/main-team-photo.jpg" 
                            alt="Collegesathi Main Team" 
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-xl shadow-md overflow-hidden aspect-w-16 aspect-h-9 sm:aspect-h-7">
                            <img 
                                src="/path/to/small-team-photo-1.jpg" 
                                alt="Team event 1" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-xl shadow-md overflow-hidden aspect-w-16 aspect-h-9 sm:aspect-h-7">
                            <img 
                                src="/path/to/small-team-photo-2.jpg" 
                                alt="Team event 2" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-xl shadow-md overflow-hidden aspect-w-16 aspect-h-9 sm:aspect-h-7">
                            <img 
                                src="/path/to/small-team-photo-3.jpg" 
                                alt="Team event 3" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* --- 2. Our Achievements Section --- */}

                <div className="text-center mt-20 mb-12 sm:mb-16">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                        Our Achievements
                    </h2>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
                    
                    <div className="lg:w-1/2 rounded-2xl shadow-2xl overflow-hidden mb-10 lg:mb-0">
                        <img 
                            src="/path/to/office-photo.jpg" 
                            alt="Modern Office Working" 
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>

                    <div className="lg:w-1/2 pt-4">
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                            We've grown with our students and every milestone belongs to you
                        </h3>
                        
                        <ul className="mt-8 space-y-4">
                            {achievements.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    {/* <CheckIcon className="flex-shrink-0 w-6 h-6 text-red-600 mt-1" aria-hidden="true" /> */}
                                    <p className="ml-3 text-lg text-gray-700">
                                        <span className="font-semibold text-gray-900">
                                            {item.highlight}
                                        </span> 
                                        {item.text.replace(item.highlight, '')}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TeamAndAchievements;