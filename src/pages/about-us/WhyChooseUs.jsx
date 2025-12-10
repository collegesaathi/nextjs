// components/WhyChooseUs.js

import React from 'react';
// import { ShieldCheckIcon, TrophyIcon, UserCheckIcon } from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:gap-20">

                    <div className="space-y-12 relative">

                        <div className="max-w-md">
                            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                                Why Choose Us
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Other platforms give you information. We give you clarity, confidence, and support to boost your confidence and make informed decisions.
                            </p>
                        </div>

                        <div className="relative w-full h-80 rounded-2xl bg-orange-50/50 shadow-lg overflow-hidden p-8">
                            <h3 className="text-3xl font-bold text-gray-900">Personalized guidance</h3>
                            {/* <TrophyIcon className="absolute top-8 right-8 w-12 h-12 text-gray-200/50 rotate-6" />
              <UserCheckIcon className="absolute bottom-8 right-4 w-16 h-16 text-gray-200/50 -rotate-12" /> */}
                        </div>



                        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 lg:left-full lg:-translate-x-3/4 w-72 sm:w-80 p-6 rounded-xl bg-purple-50 shadow-2xl border-2 border-purple-100 backdrop-blur-sm z-10">
                            <div className="bg-purple-200/50 rounded-lg p-3 inline-block">
                                {/* <ShieldCheckIcon className="w-6 h-6 text-purple-600" /> */}
                            </div>
                            <h4 className="mt-3 text-2xl font-bold text-purple-800">
                                Verified & trusted data
                            </h4>
                            <p className="mt-1 text-sm text-purple-600 font-medium">
                                No hidden agendas
                            </p>
                            <div className="absolute top-0 right-0 p-4">
                            </div>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <div className="lg:pt-20 space-y-8">
                        <h3 className="text-4xl font-bold tracking-tight text-gray-900">
                            With You, For You!
                        </h3>

                        <p className="text-lg text-gray-600">
                            At Collegesathi, you’re not just a student on a platform. You’re a dreamer,
                            a doer, and our partner in this journey.
                        </p>

                        <p className="text-lg text-gray-600">
                            Discover how you can make a meaningful impact while growing personally
                            and professionally with our dynamic team.
                        </p>

                        <p className="text-lg text-gray-600">
                            Join us in shaping the future of education and technology.
                        </p>

                        <div className="pt-4">
                            <a
                                href="/careers"
                                className="inline-flex items-center justify-center px-8 py-3 
        text-base font-medium rounded-lg shadow-md text-white 
        bg-red-600 hover:bg-red-700 transition duration-300"
                            >
                                Explore Careers
                            </a>
                        </div>
                    </div>

                    {/* RIGHT IMAGE CARD */}
                    <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl group">

                        {/* Background gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-100 via-white to-red-50"></div>

                        {/* Image */}
                        <img
                            src="/images/team-work.jpg"
                            alt="Team Work"
                            className="relative z-10 w-full h-full object-cover 
      rounded-2xl transition-transform duration-700 
      group-hover:scale-105"
                        />

                        {/* Glass effect overlay */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;