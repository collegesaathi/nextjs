'use client'

import Aos from 'aos'
import { useEffect } from 'react'

export default function Footer() {
  useEffect(() => {
    // AOS initialization (if you're using AOS)
      Aos.init({
        once: true,
        easing: 'ease-out-quad',
        offset: 120,
      })
  }, [])

  return (
    <>
      {/* Desktop Version */}
      <footer className="bg-[#001136] relative overflow-hidden shadow-[0px_4px_4px_0px_#00000040] pt-16 hidden lg:block">
        <div
          className="w-[1314px] mx-auto relative"
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <img src="/img/university-main/footer/bg.png" alt="Footer Background" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-[40px]">
            <h2 className="font-semibold text-[48px] leading-[100%] tracking-[0px] text-white">
              Get Clarity with Us!
            </h2>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                className="w-[273px] h-[79px] rounded-[17px] border-[1.5px] border-white font-poppins font-normal text-[16px] tracking-[0px] text-white flex items-center justify-center space-x-2 hover:bg-white/10 transition-colors duration-200"
              >
                <img src="/img/university-main/footer/1.svg" alt="Schedule Call" />
                <span>Schedule Your Call</span>
              </button>
              <button
                type="button"
                className="w-[273px] h-[79px] rounded-[17px] bg-[#EC1E24] font-poppins font-normal text-[16px] tracking-[0px] text-white flex items-center justify-center space-x-2 hover:bg-[#d11a1f] transition-colors duration-200"
              >
                <img src="/img/university-main/footer/2.svg" alt="Let's Talk" />
                <span>Let's Talk Now</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="w-[1174px] mx-auto py-[50px]">
          <div className="flex items-start justify-between">
            {/* Left Section - Logo and Contact */}
            <div className="w-[244px] space-y-8">
              <div><img src="/img/university-main/footer/logo.png" alt="CollegeSathi Logo" /></div>
              <div><img src="/img/university-main/footer/1.png" alt="Certification" /></div>
              
              {/* Social Media Icons */}
              <ul className="flex items-center space-x-3 mt-4">
                {['facebook', 'instagram', 'twitter', 'youtube', 'linkedin'].map((platform) => (
                  <li
                    key={platform}
                    className="w-[30px] h-[30px] rounded-full bg-[#EC1E24] flex items-center justify-center text-white text-sm hover:bg-[#d11a1f] transition-colors duration-200"
                  >
                    <a href="#" className="flex items-center justify-center w-full h-full">
                      <SocialIcon platform={platform} />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Helpline Button */}
              <button
                type="button"
                className="w-[149px] h-[43px] rounded-[6px] border border-white shadow-[0px_4px_4px_0px_#00000040] bg-transparent font-poppins font-bold text-[14px] text-white relative hover:bg-white/10 transition-colors duration-200"
              >
                9785-800-008
                <div className="absolute top-0 left-1.5 bg-[#EC1E24] w-[65px] h-[14px] rounded-full flex items-center font-normal text-[12px] leading-[24px] text-white justify-center -translate-y-1.5">
                  HELPLINE
                </div>
              </button>
            </div>

            {/* Company Links */}
            <div className="w-[278px]">
              <h2 className="font-poppins font-normal text-[14px] tracking-[0px] text-white">Company</h2>
              <div className="w-full bg-[#EC1E24] h-[1px] my-3"></div>
              <ul className="grid grid-cols-2 gap-4 mt-4 font-poppins font-normal text-[14px] tracking-[0px] text-white">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-gray-300 transition-colors duration-200">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="w-[278px]">
              <h2 className="font-poppins font-normal text-[14px] tracking-[0px] text-white">Quick Links</h2>
              <div className="w-full bg-[#EC1E24] h-[1px] my-3"></div>
              <ul className="grid grid-cols-2 gap-4 mt-4 font-poppins font-normal text-[14px] tracking-[0px] text-white">
                {quickLinks.map((link, index) => (
                  <li key={index} className={link.span ? 'col-span-2' : ''}>
                    <a href={link.href} className="hover:text-gray-300 transition-colors duration-200">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* University Programs Grid */}
        <div className="w-[1174px] mx-auto">
          <div className="bg-[#EEEEEE] w-full h-[2px]"></div>
          
          {/* First Programs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-[50px]">
            {programs.map((program, index) => (
              <ProgramSection key={index} {...program} />
            ))}
          </div>

          {/* Specializations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <SpecializationSection key={index} {...spec} />
            ))}
          </div>

          <div className="bg-[#EEEEEE] w-full h-[2px] my-[50px]"></div>

          {/* Detailed Specializations Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-[50px]">
            {detailedSpecializations.map((spec, index) => (
              <DetailedSpecializationSection key={index} {...spec} />
            ))}
          </div>

          <div className="bg-[#EEEEEE] w-full h-[2px] my-[50px]"></div>

          {/* Footer Text */}
          <div className="text-center">
            <h1 className="font-poppins font-normal text-[14px] leading-[38px] text-white">
              Disclaimer / Terms & Conditions / Our Policy
            </h1>
            <p className="font-normal text-[14px] leading-[38px] tracking-[0px] text-white my-3.5">
              College Sathi aims to provide unbiased and precise information, along with comparative
              guidance on universities and their programs, to admission aspirants. The content on the
              College Sathi website—encompassing texts, graphics, images, blogs, videos, and university
              logos—is intended solely for informational purposes and should not be viewed as a substitute
              for offerings from academic partners. While we strive for accuracy and present information
              in good faith, College Sathi makes no warranties regarding the completeness or reliability
              of the content and will not be liable for any errors, omissions, or resulting damages from
              its use.
            </p>
            <h3 className="font-normal text-[14px] leading-[38px] tracking-[0px] text-white">
              © Collegesathi 2025. All Right Reserved.
            </h3>
          </div>
        </div>
        
        <img src="/img/fotter.png" alt="Footer Bottom" className="w-full" />
      </footer>

      {/* Mobile Version */}
      <footer className="bg-[#001136] relative overflow-hidden shadow-[0px_4px_4px_0px_#00000040] pt-16 lg:hidden block px-4 pb-20">
        <div className="w-full mx-auto relative h-[108px]">
          <img src="/img/university-main/footer/bg.png" alt="Footer Background" className="h-[108px] w-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4">
            <h2 className="font-semibold text-[20px] leading-[100%] tracking-[0px] text-white">
              Get Clarity with Us!
            </h2>
            <div className="flex items-center flex-col space-y-2 justify-end">
              <button
                type="button"
                className="w-[146px] h-[33px] rounded-[5px] border-[1.5px] border-white font-poppins font-normal text-[12px] tracking-[0px] text-white flex items-center justify-center space-x-2 hover:bg-white/10 transition-colors duration-200"
              >
                <img src="/img/university-main/footer/1.svg" alt="Schedule Call" className="w-[10px]" />
                <span>Schedule Your Call</span>
              </button>
              <button
                type="button"
                className="w-[146px] h-[33px] rounded-[5px] bg-[#EC1E24] font-poppins font-normal text-[12px] tracking-[0px] text-white flex items-center justify-center space-x-2 hover:bg-[#d11a1f] transition-colors duration-200"
              >
                <img src="/img/university-main/footer/2.svg" alt="Let's Talk" className="w-[10px]" />
                <span>Let's Talk Now</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto py-[50px]">
          <div className="flex flex-col">
            {/* Logo and Social Section */}
            <div className="w-full space-y-8 mb-9">
              <div><img src="/img/university-main/footer/logo.png" alt="CollegeSathi Logo" /></div>
              <div><img src="/img/university-main/footer/1.png" alt="Certification" /></div>
              
              <ul className="flex items-center space-x-3 mt-4">
                {['facebook', 'instagram', 'twitter', 'youtube', 'linkedin'].map((platform) => (
                  <li
                    key={platform}
                    className="w-[30px] h-[30px] rounded-full bg-[#EC1E24] flex items-center justify-center text-white text-sm hover:bg-[#d11a1f] transition-colors duration-200"
                  >
                    <a href="#" className="flex items-center justify-center w-full h-full">
                      <SocialIcon platform={platform} />
                    </a>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="w-[149px] h-[43px] rounded-[6px] border border-white shadow-[0px_4px_4px_0px_#00000040] bg-transparent font-poppins font-bold text-[14px] text-white relative hover:bg-white/10 transition-colors duration-200"
              >
                9785-800-008
                <div className="absolute top-0 left-1.5 bg-[#EC1E24] w-[65px] h-[14px] rounded-full flex items-center font-normal text-[12px] leading-[24px] text-white justify-center -translate-y-1.5">
                  HELPLINE
                </div>
              </button>
            </div>

            {/* Company Links */}
            <div className="w-full mb-9">
              <h2 className="font-poppins font-normal text-[14px] tracking-[0px] text-white">Company</h2>
              <div className="w-full bg-[#EC1E24] h-[2px] my-3"></div>
              <ul className="grid grid-cols-2 gap-4 mt-4 font-poppins font-normal text-[14px] tracking-[0px] text-white">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-gray-300 transition-colors duration-200">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="w-full">
              <h2 className="font-poppins font-normal text-[14px] tracking-[0px] text-white">Quick Links</h2>
              <div className="w-full bg-[#EC1E24] h-[2px] my-3"></div>
              <ul className="grid grid-cols-2 gap-4 mt-4 font-poppins font-normal text-[14px] tracking-[0px] text-white">
                {quickLinks.map((link, index) => (
                  <li key={index} className={link.span ? 'col-span-2' : ''}>
                    <a href={link.href} className="hover:text-gray-300 transition-colors duration-200">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Programs Grid */}
        <div className="w-full mx-auto">
          <div className="bg-[#EEEEEE] w-full h-[2px]"></div>
          
          <div className="grid grid-cols-2 gap-8 py-[50px]">
            {programs.map((program, index) => (
              <ProgramSection key={index} {...program} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <SpecializationSection key={index} {...spec} />
            ))}
          </div>

          <div className="bg-[#EEEEEE] w-full h-[2px] my-[50px]"></div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-[50px]">
            {detailedSpecializations.map((spec, index) => (
              <DetailedSpecializationSection key={index} {...spec} />
            ))}
          </div>

          <div className="bg-[#EEEEEE] w-full h-[2px] my-[30px]"></div>

          {/* Mobile Footer Text */}
          <div className="text-center">
            <h1 className="font-poppins font-normal text-[14px] leading-[38px] text-white">
              Disclaimer / Terms & Conditions / Our Policy
            </h1>
            <p className="font-normal text-[14px] leading-[38px] tracking-[0px] text-white my-3.5">
              College Sathi aims to provide unbiased and precise information, along with comparative
              guidance on universities and their programs, to admission aspirants. The content on the
              College Sathi website—encompassing texts, graphics, images, blogs, videos, and university
              logos—is intended solely for informational purposes and should not be viewed as a substitute
              for offerings from academic partners. While we strive for accuracy and present information
              in good faith, College Sathi makes no warranties regarding the completeness or reliability
              of the content and will not be liable for any errors, omissions, or resulting damages from
              its use.
            </p>
            <h3 className="font-normal text-[14px] leading-[38px] tracking-[0px] text-white pb-4">
              © Collegesathi 2025. All Right Reserved.
            </h3>
          </div>
        </div>
      </footer>
    </>
  )
}

// Social Icon Component
const SocialIcon = ({ platform }) => {
  const icons = {
    facebook: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.815 3.75 13.664 3.75 12.367s.49-2.448 1.376-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.808-2.026 1.298-3.323 1.298z"/>
      </svg>
    ),
    twitter: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    youtube: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    linkedin: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  }

  return icons[platform] || null
}

// Program Section Component
const ProgramSection = ({ title, links }) => (
  <div>
    <h3 className="font-poppins font-normal text-[14px] tracking-[0px] text-white mb-3.5">
      {title}
    </h3>
    <ul className="space-y-2 font-poppins font-normal text-[14px] tracking-[0px] text-white">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="hover:text-gray-300 transition-colors duration-200">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

// Specialization Section Component
const SpecializationSection = ({ title, links }) => (
  <div>
    <h4 className="font-poppins font-normal text-[14px] tracking-[0px] text-white mb-3.5">
      {title}
    </h4>
    <ul className="space-y-1 font-poppins font-normal text-[14px] tracking-[0px] text-white">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="hover:text-gray-300 transition-colors duration-200">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

// Detailed Specialization Section Component
const DetailedSpecializationSection = ({ title, items }) => (
  <div>
    <h3 className="font-poppins font-normal text-[14px] tracking-[0px] text-white mb-3.5">
      {title}
    </h3>
    <ul className="space-y-2 font-poppins font-normal text-[14px] tracking-[0px] text-white">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      <li className="">
        View <span className="underline">All</span>
      </li>
    </ul>
  </div>
)

// Data Arrays
const companyLinks = [
  { text: 'About Us', href: '/about' },
  { text: 'Privacy Policy', href: '/privacy' },
  { text: 'Contact Us', href: '/contact' },
  { text: 'Terms & Conditions', href: '/terms' },
  { text: 'FAQs', href: '/faqs' },
  { text: 'Disclaimer', href: '/disclaimer' },
  { text: 'Blogs', href: '/blogs' },
  { text: 'Cs Careers', href: '/careers', badge: 'We are Hiring' }
]

const quickLinks = [
  { text: 'Top Universities', href: '/universities' },
  { text: 'Sitemap', href: '/sitemap' },
  { text: 'Experts', href: '/experts', span: true },
  { text: 'Scholarships', href: '/scholarships', span: true }
]

const programs = [
  {
    title: 'Online MBA',
    links: [
      { text: 'Manipal Online University', href: '/universities/manipal-online' },
      { text: 'OP Jindal University', href: '/universities/op-jindal' },
      { text: 'NMIMS Online', href: '/universities/nmims-online' },
      { text: 'Amity University Online', href: '/universities/amity-online' },
      { text: 'Chandigarh University', href: '/universities/chandigarh' },
      { text: 'View All', href: '/universities/all', viewAll: true }
    ]
  },
  {
    title: 'Executive MBA',
    links: [
      { text: 'NMIMS Online', href: '/executive-mba/nmims' },
      { text: 'DY Patil Navi Mumbai', href: '/executive-mba/dy-patil' },
      { text: 'IIM Lucknow', href: '/executive-mba/iim-lucknow' },
      { text: 'SP Jain', href: '/executive-mba/sp-jain' },
      { text: 'IIM Kozhikode', href: '/executive-mba/iim-kozhikode' },
      { text: 'View All', href: '/executive-mba/all', viewAll: true }
    ]
  },
  {
    title: 'MCA',
    links: [
      { text: 'Amity University Online', href: '/mca/amity-online' },
      { text: 'Lovely Professional University', href: '/mca/lpu' },
      { text: 'Chandigarh University', href: '/mca/chandigarh' },
      { text: 'Manipal Online University', href: '/mca/manipal-online' },
      { text: 'Sharda University', href: '/mca/sharda' },
      { text: 'View All', href: '/mca/all', viewAll: true }
    ]
  },
  {
    title: 'BBA',
    links: [
      { text: 'Amity University Online', href: '/bba/amity-online' },
      { text: 'NMIMS Online', href: '/bba/nmims-online' },
      { text: 'Chandigarh University', href: '/bba/chandigarh' },
      { text: 'Manipal Online University', href: '/bba/manipal-online' },
      { text: 'Dr. D.Y. Patil Vidyapeeth University Pune', href: '/bba/dy-patil-pune' },
      { text: 'View All', href: '/bba/all', viewAll: true }
    ]
  }
]

const specializations = [
  {
    title: 'BBA Specializations',
    links: [
      { text: 'Banking and Finance', href: '/bba-specializations/banking-finance' },
      { text: 'Digital Marketing & Analytics', href: '/bba-specializations/digital-marketing' },
      { text: 'Human Resources Management (HRM)', href: '/bba-specializations/hrm' },
      { text: 'International Business', href: '/bba-specializations/international-business' },
      { text: 'View All', href: '/bba-specializations/all', viewAll: true }
    ]
  },
  {
    title: 'MBA Specializations',
    links: [
      { text: 'Digital Marketing & E-commerce', href: '/mba-specializations/digital-marketing' },
      { text: 'Finance and Accounting', href: '/mba-specializations/finance' },
      { text: 'International Business Management', href: '/mba-specializations/international-business' },
      { text: 'Entrepreneurship & Startups', href: '/mba-specializations/entrepreneurship' },
      { text: 'View All', href: '/mba-specializations/all', viewAll: true }
    ]
  },
  {
    title: 'BCA Specializations',
    links: [
      { text: 'Cyber Security', href: '/bca-specializations/cyber-security' },
      { text: 'Artificial Intelligence & Machine Learning', href: '/bca-specializations/ai-ml' },
      { text: 'Data Science & Analytics', href: '/bca-specializations/data-science' },
      { text: 'Cloud Computing', href: '/bca-specializations/cloud-computing' },
      { text: 'View All', href: '/bca-specializations/all', viewAll: true }
    ]
  },
  {
    title: 'MCA Specializations',
    links: [
      { text: 'Cyber Security', href: '/mca-specializations/cyber-security' },
      { text: 'Data Science & Analytics', href: '/mca-specializations/data-science' },
      { text: 'Artificial Intelligence', href: '/mca-specializations/ai' },
      { text: 'Cloud Computing & Networking', href: '/mca-specializations/cloud-computing' },
      { text: 'View All', href: '/mca-specializations/all', viewAll: true }
    ]
  }
]

const detailedSpecializations = [
  {
    title: 'BBA Specializations',
    items: [
      'Banking and Financial Markets',
      'Business Intelligence and Analytics',
      'Digital Marketing',
      'Human Resource Management (HRM)',
      'Marketing'
    ]
  },
  {
    title: 'MBA Specializations',
    items: [
      'Digital Marketing & E-commerce',
      'Business Intelligence & Analytics',
      'Healthcare Management',
      'Finance',
      'International Business'
    ]
  },
  {
    title: 'BCA Specializations',
    items: [
      'Cyber Security',
      'Artificial Intelligence & Machine Learning',
      'Data Science & Big Data Analytics',
      'Cloud Computing'
    ]
  },
  {
    title: 'MCA Specializations',
    items: [
      'Cyber Security & Blockchain',
      'Cloud Computing and IoT',
      'Artificial Intelligence & Machine Learning',
      'Data Science & Big Data Analytics'
    ]
  },
  {
    title: 'LLB Specializations',
    items: [
      'Corporate and Financial Law',
      'Environmental and Energy Law',
      'Intellectual Property and Technology Law',
      'Dispute Resolution'
    ]
  },
  {
    title: 'B.Com Specializations',
    items: [
      'Accounting',
      'Economics',
      'International Finance & Accounting'
    ]
  },
  {
    title: 'M.Com Specializations',
    items: [
      'Financial Management',
      'Taxation'
    ]
  },
  {
    title: 'MA Specializations',
    items: [
      'English',
      'Sociology',
      'Political Science',
      'Education',
      'Psychology'
    ]
  }
]