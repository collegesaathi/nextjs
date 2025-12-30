import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const ConclusionFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqData = [
    {
      question: "What is an Online MBA and how does it work in India?",
      answer: "An Online MBA is a Master of Business Administration which is delivered through the online platform, especially for the students who cannot attend the regular classes because of their work and other reasons."
    },
    {
      question: "Is an Online MBA degree recognized in India?",
      answer: "Yes, Online MBA degrees are fully recognized in India provided they are from universities approved by the University Grants Commission (UGC) and the Distance Education Bureau (DEB)."
    },
    {
      question: "Which universities are best for Online MBA in India?",
      answer: "Top universities include NMIMS, Amity University, Manipal University, and Jain University, all of which offer robust UGC-approved online management programs."
    },
    {
      question: "Is it possible to get a job after finishing an Online MBA?",
      answer: "Absolutely. Most companies today treat online and regular MBAs equally, especially for working professionals looking to climb into management or leadership roles."
    },
    {
      question: "Is there an entrance examination for an Online MBA?",
      answer: "It varies by university. Some require national exams like CAT/MAT, while many others have their own internal entrance tests or offer admission based on work experience and academic marks."
    }
  ];

  return (
    <div className="max-w-[1230px] mx-auto py-12 font-poppins text-[#282529]">
      
      {/* Conclusion Section */}
      <section className="mb-16">
        <h2 className="text-[20px] md:text-[28px] font-[600] mb-4">Conclusion</h2>
        <div className="space-y-6 text-[15px] md:text-[16px] leading-[28px] text-[#282529]">
          <p>
            Choosing the appropriate Online MBA program that fulfills your career aspirations, work experience, 
            and affordability is a difficult choice. An Online MBA provides flexibility, enabling career 
            development without putting your career on hold. The right Online MBA degree would be accredited 
            by the major government bodies like UGC, DEB and NAAC.
          </p>
          <p>
            Before making a choice, it is very important for you to explore all the advantages and limitations 
            of your chosen university and program, so that you can grow seamlessly. The executive MBA can help 
            the working professionals to upgrade themselves and improve their working ability. The advanced 
            curriculum, AI-enabled learning system and the dedicated faculty together make an Online MBA 
            program a premium choice for you. So, it can be said that whether you are working professional, 
            a homemaker or busy learner, Online MBA from a top university can be the best choice for you.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-[20px] md:text-[28px] font-[600] leading-[28px] mb-8">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="border border-[#e5e5e5] rounded-[12px] bg-[#f9f9f9] overflow-hidden transition-all duration-300"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#f2f2f2] transition-colors"
                >
                  <span className="text-[14px] md:text-[16px] font-[600] pr-4">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <ChevronDown size={20} className="text-[#282529] flex-shrink-0" />
                  ) : (
                    <ChevronRight size={20} className="text-[#282529] flex-shrink-0" />
                  )}
                </button>

                {/* Accordion Content */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {/* Dotted Line Separator */}
                  <div className="mx-5 border-t border-dashed border-[#ccc]"></div>
                  
                  <div className="p-5 pt-4 text-[14px] md:text-[16px]  font-[400] leading-[26px] text-[#555]">
                    {item.answer}
                  </div>
                </div> 
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default ConclusionFAQ;