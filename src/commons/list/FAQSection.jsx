'use client';

import Aos from 'aos';
import { useState, useEffect } from 'react';
import Heading from '../../common/Heading';
import SVGIcon from '@/common/SVGIcon';
import 'aos/dist/aos.css'; // import AOS CSS

export default function FAQSection({ faq }) {
  const [faqs, setFaqs] = useState(faq?.faqs || []);

  // Toggle FAQ open/close
  const toggle = (index) => {
    setFaqs((prev) =>
      prev.map((f, i) => (i === index ? { ...f, open: !f.open } : f))
    );
  };

  // Initialize AOS
  useEffect(() => {
    Aos.init({
      once: true,
      easing: 'ease-out-quad',
      offset: 120,
    });
  }, []);

  return (
    <section className="px-2 md:px-6 py-6 max-w-[1230px] mx-auto" id="faq-section">
      <div className="container mx-auto">
        <Heading title="Frequently Asked " midtitle="Questions" />

        {/* No FAQs fallback */}
        {faqs.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No FAQs available.</p>
        )}

        {/* FAQ Items */}
        <div className="mt-6 flex flex-col gap-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white rounded-[10px] shadow-md border-l-[13px] border-red-500 transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 py-4 text-left focus:outline-none"
                aria-expanded={item.open ? 'true' : 'false'}
              >
                <span className="font-poppins font-[400] text-[14px] md:text-[20px] text-[#282529] max-w-[200px] sm:max-w-[390px] md:max-w-[800px]">
                  {item.question}
                </span>

                {/* Plus Icon */}
                <div
                  className={`w-[30px] h-[30px] flex items-center justify-center border border-[#ED2024] rounded-full text-[#ED2024] transition-transform duration-300 ${
                    item.open ? 'rotate-45' : ''
                  }`}
                >
                  <SVGIcon name="plus" size={18} />
                </div>
              </button>
              {/* Answer */}
              <div
                className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden`}
                style={{ maxHeight: item.open ? '9999px' : '0' }}
                aria-hidden={item.open ? 'false' : 'true'}
              >
                {item.open && (
                  <div className="px-4 pb-4 text-[14px] md:text-[18px] text-[#282529] font-poppins leading-relaxed md:leading-[28px]">
                    {item.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
