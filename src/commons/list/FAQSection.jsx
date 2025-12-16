'use client';

import Aos from 'aos';
import { useState, useEffect } from 'react';
import Heading from '../../common/Heading';

export default function FAQSection({ faq }) {
    console.log("faq" ,faq)

    // Correct: faq.faqs contains the array, not faq
    const [faqs, setFaqs] = useState(() =>
        faq?.faqs
            ?.sort((a, b) => Number(a.position) - Number(b.position))
            .map(item => ({ ...item, open: false })) || []
    );

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
        <div className="px-6 py-6 max-w-[1230px]" id="faq-section">
            <div className="mx-auto container ">
                <Heading title={"Frequently Asked "} midtitle={"Questions"} />

                {faqs.length === 0 && (
                    <p className="text-center text-gray-500 mt-4">
                        No FAQs available.
                    </p>
                )}

                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[10px] mb-8 shadow-md border-l-[13px] border-red-500 transition-all duration-300"
                    >
                        <button
                            className="w-full flex justify-between items-center px-4 py-4 text-left"
                            onClick={() => toggle(index)}
                        >
                            <span className="font-poppins font-medium text-[14px] text-[#282529]">
                                {item.question}
                            </span>

                            <span
                                className={`w-[30px] h-[30px] flex items-center justify-center border border-[#ED2024] rounded-full transition-all duration-200 text-[#ED2024] ${item.open ? 'rotate-45' : ''}`}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke="red"
                                    className="w-4 h-4"
                                >
                                    <path
                                        d="M12 5V19M5 12H19"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden ${item.open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            {item.open && (
                                <div className="px-4 pb-4 text-[14px] text-[#282529]">
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
