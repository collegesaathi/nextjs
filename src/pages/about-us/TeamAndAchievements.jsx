// components/TeamAndAchievements.js

import React from 'react';
import Image from 'next/image';

const achievements = [
    { text: 'Guided 30,000+ students toward better futures', highlight: '30,000+' },
    { text: 'Partnered with 100+ online universities & institutions', highlight: '100+' },
    { text: 'Recognized by leading online education platform', highlight: 'Recognized' },
];

const TeamAndAchievements = () => {
    return (
        <section className="py-6 lg:py-15 bg-white">
            <div className="max-w-7xl mx-auto px-2  lg:px-8">
                
                {/* --- 1. Our Team Section --- */}
                
                <div className="text-center mb-7 md:mb-16 font-poppins leading-[32px]">
                    <h2 className="text-[26px] md:text-[32px] font-[600] tracking-tight text-gray-900">
                        Our Team
                    </h2>
                </div>

                <div className="space-y-6">
                    <div className="md:rounded-4xl shadow-xl overflow-hidden">
                        <img 
                            src="/images/about/teamhero.png" 
                            alt="Collegesathi Main Team" 
                            className=" w-full 
      h-auto 
      object-cover
      transition-transform 
      duration-500 
      ease-out
      hover:scale-105"
                        />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-xl shadow-md overflow-hidden aspect-w-16 aspect-h-9 sm:aspect-h-7">
                            <img 
                                src="/images/about/team1.png" 
                                alt="Team event 1" 
                                className="w-full h-full object-cover  transition-transform 
      duration-500 
      ease-out
      hover:scale-105"
                            />
                        </div>
                        <div className="rounded-xl shadow-md overflow-hidden aspect-w-16 aspect-h-9 sm:aspect-h-7">
                            <img 
                                src="/images/about/team2.png" 
                                alt="Team event 2" 
                                className="w-full h-full object-cover  transition-transform 
      duration-500 
      ease-out
      hover:scale-105"
                            />
                        </div>
                        <div className="rounded-xl shadow-md overflow-hidden aspect-w-16 aspect-h-9 sm:aspect-h-7">
                            <img 
                                src="/images/about/team3.png" 
                                alt="Team event 3" 
                                className="w-full h-full object-cover  transition-transform 
      duration-500 
      ease-out
      hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                {/* --- 2. Our Achievements Section --- */}

                <div className="text-center mt-15 mb-6 md:mb-16">
                    <h2 className="text-[26px] md:text-[32px] font-[600] leading-[32px] text-[#282529]">
                        Our Achievements
                    </h2>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center  lg:space-x-22">
                    
                    <div className="lg:w-1/2 rounded-2xl shadow-2xl overflow-hidden mb-10 lg:mb-0">
                        <img 
                            src="/images/about/achievements.png" 
                            alt="Modern Office Working" 
                            className="w-full h-full object-cover rounded-2xl  transition-transform 
      duration-500 
      ease-out
      hover:scale-105"
                        />
                    </div>

                    <div className="lg:w-1/2 pt-4">
                        <h3 className="text-[20px] md:text-[24px] font-[600] text-gray-900 leading-[30px] md:leading-[40px]">
                            We've grown with our students and every milestone belongs to you
                        </h3>
                        
                        <ul className="mt-8 space-y-6 font-poppins ">

                                 <li className="flex items-center">
                                    <Image src="/images/about/tick.svg"  width={20} height={20} alt="tickmark"/>
                                    <div className="ml-3 text-[14px] md:text-[16px] text-[#282529] z-10 flex flex-wrap gap-1 ">
                                     Guided <p className='relative z-10  text-[#282529]'> <span className='absolute bg-[#FFB8B8] left-0 bottom-1 w-33 animate-highlight -z-10 '></span> 30,000+ students</p> toward better futures
                                    </div>
                                </li>
                  
                                <li className="flex items-center">
                           

                                    <Image src="/images/about/tick.svg"  width={20} height={20} alt="tickmark"/>
                                    <div className="ml-3 text-[14px] md:text-[16px] text-[#282529] z-10 flex flex-wrap gap-1 ">
                                  Partnered with
                                  <p className='relative z-10 text-[#282529]'> <span className='absolute bg-[#FFB8B8] left-0 bottom-1 w-45  -z-10 animate-highlight '> </span>100+ online universities & institutions</p>
                                    </div>
                                </li>

                                    <li className="flex items-center">
                           

                                    <Image src="/images/about/tick.svg"  width={20} height={20} alt="tickmark"/>
                                    <div className="ml-3 text-[14px] md:text-[16px] text-[#282529] z-10 flex flex-wrap gap-1">
                         
                            <div className="relative inline-block">

    <p className='relative z-10  text-[#282529]'> 
        {/* top-3 hata diya hai, sirf bottom-0 rakha hai taaki upar ki taraf expand ho */}
        <span className='absolute bg-[#FFB8B8] left-0 bottom-0 w-24 -z-10 animate-highlight'></span>
        Recognized by leading online education platform
    </p>
</div>
                                    </div>
                                </li>
                          
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TeamAndAchievements;