'use client';

import Aos from 'aos';
import { useState, useEffect } from 'react';
import Heading from '../../common/Heading';
import SVGIcon from '@/common/SVGIcon';
import 'aos/dist/aos.css';

export default function FAQSection({ Faq }) {
    console.log("Faq" ,Faq)

    const [openIndex, setOpenIndex] = useState(null);

    const ToggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        Aos.init({ once: true, easing: 'ease-out-quad', offset: 120 });
    }, []);

    return ( 
        <>
        {Faq?.length > 1 &&  (
    <section className="px-2 md:px-6 py-6 max-w-[1230px] mx-auto" id="faq-section">
            <div className="container mx-auto">
                <Heading title="Frequently Asked " midtitle="Questions" />

                {Faq?.length === 0 && (
                    <p className="text-center text-gray-500 mt-4">No FAQs available.</p>
                )}

                {Faq?.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[10px] mb-8 shadow-md border-l-[13px] border-red-500 transition-all duration-300"
                    >
                        <button
                            className="w-full flex justify-between items-center px-4 py-4 text-left"
                            onClick={() => ToggleFaq(index)}
                        >
                            <span className="font-poppins font-[400] text-[14px] md:text-[20px] text-[#282529] max-w-[200px] sm:max-w-[390px] md:max-w-[800px]">
                                {item.question}
                            </span>
                            <div
                                className={`w-[30px] h-[30px] flex items-center justify-center border border-[#ED2024] rounded-full transition-all duration-200 text-[#ED2024] ${openIndex === index ? 'rotate-45' : ''}`}
                            >
                                <SVGIcon name="plus" size={18} />
                            </div>
                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            {openIndex === index && (
                                <div className="px-4 pb-4 text-[14px] md:text-[18px] text-[#282529]">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </section>
        )}
        </>
    
    );
}
