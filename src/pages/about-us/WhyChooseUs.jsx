// components/WhyChooseUs.js

import React from 'react';
import Image from 'next/image';


const WhyChooseUs = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:gap-20">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div className="max-w-md font-poppins">
        <h2 className="text-[26px] md:text-[32px] font-[600] tracking-tight leading-[32px] text-[#282529]">
            Why Choose Us
        </h2>
        <p className="mt-4 text-[16px] font-[400] text-[#282529] leading-[28px]">
            Other platforms give you information. We give you clarity, confidence, and 
            support to boost your confidence and make informed decisions.
        </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex justify-center md:justify-end">
        <Image 
            src="/images/about/chooseus.png" 
            height={300} 
            width={300} 
            alt="Why Choose Us" 
            className="w-full max-w-sm h-auto"
        />
    </div>

</div>

                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-[20px]">

                    {/* LEFT CONTENT */}

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


                    <div className="lg:pt-20 space-y-8">
                        <h3 className="text-[26px] md:text-[32px] font-[600] tracking-tight text-gray-900">
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
          

                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;