'use client'

import Aos from 'aos'
import { useState, useEffect } from 'react'

export default function FAQSection() {
    const [faqs, setFaqs] = useState([
        {
            question: 'What is the duration of an Online MBA in Marketing Management program at NMIMS?',
            answer: 'The duration is typically 2 years, divided into 4 semesters.',
            open: false,
        },
        {
            question: 'Is the degree valid and recognised by the NMIMS CDOE?',
            answer: 'Yes, it is a UGC-entitled and recognized degree by NMIMS CDOE.',
            open: false,
        },
        {
            question: 'Can I study while working a full-time job?',
            answer: 'Yes, the program is designed for working professionals with flexible schedules.',
            open: false,
        },
        {
            question: 'What are the career options once I complete this MBA?',
            answer: 'You can pursue roles in marketing, sales, digital strategy, and more.',
            open: false,
        },
        {
            question: 'Will I get assistance with job placements?',
            answer: 'Yes, NMIMS provides placement assistance and career support.',
            open: false,
        },
    ])

    const toggle = (index) => {
        setFaqs(prevFaqs =>
            prevFaqs.map((faq, i) =>
                i === index ? { ...faq, open: !faq.open } : faq
            )
        )
    }

    useEffect(() => {

        Aos.init({
            once: true,
            easing: 'ease-out-quad',
            offset: 120,
        })
    }, [])

    return (
        <section className="py-16 px-4">
            <div className="w-full lg:w-[1006px] px-0 md:px-4 mx-auto">
                <h2
                    className="text-[26px] font-bold font-poppins mb-10 text-[#363535] lg:text-left text-center"
                    data-aos="fade-up"
                    data-aos-duration="600"
                >
                    Frequently Asked Questions
                </h2>

                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-[10px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] mb-5 md:mb-8 border-l-[13px] overflow-hidden transition-all duration-300 ${faq.open ? 'border-red-500' : 'border-red-500'
                            }`}
                        data-aos="fade-up"
                        data-aos-delay={100 + index * 50}
                    >
                        <button
                            className="w-full flex justify-between items-center px-4 py-4 text-left"
                            onClick={() => toggle(index)}
                        >
                            <span
                                className="font-poppins font-medium text-[14px] lg:text-[20px] md:leading-[100%] tracking-normal text-left text-[#282529] w-[70%] lg:w-[90%] leading-[24px]"
                            >
                                {faq.question}
                            </span>
                            <span
                                className={`w-[30px] h-[30px] lg:w-[62px] lg:h-[62px] flex items-center justify-center border border-[#ED2024] rounded-full transform transition-transform duration-200 text-[20px] md:text-[32px] text-[#ED2024] ${faq.open ? 'rotate-45' : ''
                                    }`}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 lg:w-6 lg:h-6"
                                >
                                    <path
                                        d="M12 5V19M5 12H19"
                                        stroke="#ED2024"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                        </button>

                        {/* Collapsible Content */}
                        <div
                            className={`transition-all duration-300 ease-out overflow-hidden ${faq.open
                                    ? 'opacity-100 max-h-[500px]'
                                    : 'opacity-0 max-h-0'
                                }`}
                        >
                            {faq.open && (
                                <div className="px-4 pb-4 font-poppins font-medium text-md leading-[100%] tracking-normal text-justify text-[#282529]">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}