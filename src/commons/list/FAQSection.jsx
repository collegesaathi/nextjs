'use client';

import Aos from 'aos';
import { useState, useEffect } from 'react';
import Heading from '../../common/Heading';
import SVGIcon from '@/common/SVGIcon';

export default function FAQSection({ faq }) {

    // Correct: faq.faqs contains the array, not faq
    const [faqs, setFaqs] = useState(faq.faqs)

    console.log(faq)
    // Toggle open/close
    const toggle = (index) => {
        setFaqs(prev =>
            prev.map((f, i) =>
                i === index ? { ...f, open: !f.open } : f
            )
        );
    };

    useEffect(() => {
        Aos.init({
            once: true,
            easing: 'ease-out-quad',
            offset: 120,
        });
    }, []);

    return (
        <div className="px-2 md:px-6 py-6 max-w-[1230px]" id="faq-section">
            <div className="mx-auto container ">
                <Heading title={"Frequently Asked "} midtitle={"Questions"} />

                {faqs.length === 0 && (
                    <p className="text-center text-gray-500 mt-4">
                        No FAQs available.
                    </p>
                )}

                {faq?.faqs.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[10px] mb-8 shadow-md border-l-[13px] border-red-500 transition-all duration-300"
                    >
                        <button
                            className="w-full flex justify-between items-center px-4 py-4 text-left"
                            onClick={() => toggle(index)}
                        >
                            <span className="font-poppins font-[400] text-[14px] md:text-[20px] text-[#282529] max-w-[200px] sm:max-w-[390px] md:max-w-[800px]">
                                {item.question}
                            </span>
                            <div
                                className={`w-[30px] h-[30px] flex items-center justify-center border border-[#ED2024] rounded-full transition-all duration-200 text-[#ED2024] ${item.open ? 'rotate-45' : ''}`}
                            >
                                <SVGIcon name="plus" size={18} />
                            </div>

                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden ${item.open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            {item.open && (
                                <div className="px-4 pb-4 text-[14px] md:text-[18px] text-[#282529]">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
