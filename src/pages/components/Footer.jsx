'use client'

import Aos from 'aos'
import { useEffect } from 'react'
import Bgfooter from "../assets/home/shape1.png"
import logo from "../assets/home/Logo.png"
import hand from "../assets/home/hand.png"
import grostart from "../assets/home/Groupstart.png"
import Image from 'next/image'
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
      <div className="py-4 md:py-8 bg-[#001136] relative  ">
                     
  <div
    className="absolute bottom-0 left-0 w-full h-1/2 bg-no-repeat bg-bottom bg-cover opacity-50"
    style={{ backgroundImage: "url('/images/footerbg.png')",
            WebkitMaskImage:
        "linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
      maskImage:
        "linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
     }}
  ></div>

        


        <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 z-20">
          


           <div class="w-full mx-auto relative h-[108px] block lg:hidden ">
      <img    src={Bgfooter?.src} alt="" class="h-[108px]" />
      <div class="absolute top-0 left-0 w-full h-full flex items-center justify-between px-[40px]">
        <h2 class="font-semibold text-[20px] leading-[100%] tracking-[0px] text-white">
          Get Clarity with Us!
        </h2>
        <div class="flex items-center flex-col space-y-2 justify-end">
          <button
            type="button"
            class="w-[146px] h-[33px] rounded-[5px] border-[1.5px] border-white font-poppins font-normal text-[12px] tracking-[0px] text-white flex items-center justify-center space-x-2"
          >
            <img src="/img/university-main/footer/1.svg" alt="" class="w-[10px]" />
            <span>Schedule Your Call</span>
          </button>
          <button
            type="button"
            class="w-[146px] h-[33px] rounded-[5px] bg-[#EC1E24] font-poppins font-normal text-[12px] tracking-[0px] text-white flex items-center justify-center space-x-2"
          >
            <img src="/img/university-main/footer/2.svg" alt="" class="w-[10px]" />
            <span>Let's Talk Now</span>
          </button>
        </div>
      </div>
    </div>
          <div
            className="relative  hidden lg:block"
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-once="true"
          >
            {/* Background Image */}
            <img
              src={Bgfooter?.src}
              alt="Footer Background"
              className="w-full h-[220px] sm:h-[280px] md:h-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full
      flex flex-col md:flex-row
      items-center md:items-center justify-between
      px-4 sm:px-6 md:px-10 lg:px-[40px]
      py-6 sm:py-8 md:py-0
      gap-6 md:gap-0
      rounded-lg">
              <h2 className="font-poppins font-semibold text-[24px] md:text-[48px] leading-[100%] tracking-[0px] text-white text-justify">
                Get Clarity with Us!
              </h2>

              <div className="flex flex-wrap items-center space-x-3">
                <button
                  type="button"
                  className="w-[273px] h-[79px] rounded-[17px] border-[1.5px] border-white font-poppins font-[400] text-[16px] tracking-[0px] text-white flex items-center justify-center space-x-2 hover:bg-white/10 transition-colors duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7808 4.375V3.75C16.7808 2.71625 15.9442 1.875 14.9162 1.875H14.2947V1.25C14.2947 0.904375 14.0163 0.625 13.6732 0.625C13.3301 0.625 13.0517 0.904375 13.0517 1.25V1.875H9.32248V1.25C9.32248 0.904375 9.04404 0.625 8.70096 0.625C8.35787 0.625 8.07943 0.904375 8.07943 1.25V1.875H4.35026V1.25C4.35026 0.904375 4.07182 0.625 3.72873 0.625C3.38565 0.625 3.10721 0.904375 3.10721 1.25V1.875H2.48568C1.45767 1.875 0.621094 2.71625 0.621094 3.75V4.375H16.7808ZM14.9171 19.375C17.3199 19.375 19.2678 17.4156 19.2678 15C19.2678 12.5844 17.3199 10.625 14.9171 10.625C12.5143 10.625 10.5664 12.5844 10.5664 15C10.5664 17.4156 12.5143 19.375 14.9171 19.375ZM17.4006 15C17.4006 14.6544 17.1222 14.375 16.7791 14.375H15.536V13.125C15.536 12.7794 15.2576 12.5 14.9145 12.5C14.5714 12.5 14.293 12.7794 14.293 13.125V15C14.293 15.3456 14.5714 15.625 14.9145 15.625H16.7791C17.1222 15.625 17.4006 15.3456 17.4006 15ZM16.7808 9.7V5.625H0.621094V15C0.621094 16.0312 1.46016 16.875 2.48568 16.875H9.64568C9.43436 16.2875 9.32248 15.6562 9.32248 15C9.32248 11.9 11.8335 9.375 14.9162 9.375C15.5688 9.375 16.1966 9.4875 16.7808 9.7ZM6.21658 13.75C6.21658 13.4044 5.93814 13.125 5.59505 13.125H4.352C4.00891 13.125 3.73047 13.4044 3.73047 13.75C3.73047 14.0956 4.00891 14.375 4.352 14.375H5.59505C5.93814 14.375 6.21658 14.0956 6.21658 13.75ZM5.59505 10.625C5.93814 10.625 6.21658 10.9044 6.21658 11.25C6.21658 11.5956 5.93814 11.875 5.59505 11.875H4.352C4.00891 11.875 3.73047 11.5956 3.73047 11.25C3.73047 10.9044 4.00891 10.625 4.352 10.625H5.59505ZM6.21658 8.75C6.21658 8.40438 5.93814 8.125 5.59505 8.125H4.352C4.00891 8.125 3.73047 8.40437 3.73047 8.75C3.73047 9.09562 4.00891 9.375 4.352 9.375H5.59505C5.93814 9.375 6.21658 9.09562 6.21658 8.75ZM9.32161 8.125C9.6647 8.125 9.94314 8.40438 9.94314 8.75C9.94314 9.09562 9.6647 9.375 9.32161 9.375H8.07856C7.73548 9.375 7.45703 9.09562 7.45703 8.75C7.45703 8.40437 7.73548 8.125 8.07856 8.125H9.32161Z" fill="white" />
                  </svg>

                  <span>Schedule Your Call</span>
                </button>
                <button
                  type="button"
                  className="w-[273px] h-[79px] rounded-[17px] bg-[#EC1E24] font-poppins font-[400] text-[16px] tracking-[0px] text-white flex items-center justify-center space-x-2 hover:bg-[#d11a1f] transition-colors duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.69554 3.12924e-06H4.60232C4.44129 0.00513434 4.28236 0.0381745 4.13257 0.0976594L4.09033 0.114456C3.44517 0.370355 1.53953 1.07727 1.07053 1.54746C0.369949 2.25 0.0477962 3.12223 0.00488676 4.10914C-0.0430113 5.2118 0.267098 6.35985 0.676083 7.37403C1.71277 9.94473 3.65924 12.438 5.60229 14.3853C7.54534 16.3327 10.0327 18.2838 12.5976 19.3228C13.5455 19.707 14.6005 20 15.6299 20C15.7049 20 15.7798 19.9984 15.8548 19.9952C16.8394 19.9523 17.7102 19.6297 18.4109 18.9273C18.8863 18.4507 19.5845 16.5554 19.84 15.9025L19.8564 15.8607C20.1133 15.2184 19.8573 14.4846 19.257 14.1426L15.8444 12.168C15.1785 11.784 14.3281 12.0124 13.9429 12.6786C13.6054 13.2645 13.0939 13.7399 12.4151 13.879C11.769 14.0204 11.0936 13.8683 10.5699 13.4636C9.81202 12.8933 9.08922 12.2323 8.41955 11.5613C7.74987 10.8902 7.09056 10.1657 6.5219 9.40629C6.11808 8.88138 5.96638 8.20441 6.10746 7.55684C6.24621 6.8766 6.72071 6.36387 7.30511 6.02559C7.96968 5.6394 8.19755 4.78728 7.81476 4.11973L5.84428 0.699609C5.60842 0.282421 5.17363 0.0176211 4.69554 0V3.12924e-06ZM11.3804 8.59152C11.0503 8.26053 11.0503 7.72408 11.3804 7.39309L15.0524 3.71258H13.592C13.1314 3.70371 12.7626 3.32688 12.7626 2.86508C12.7626 2.40328 13.1314 2.02645 13.592 2.01758L17.0938 2.01781C17.5608 2.01781 17.9394 2.39715 17.9395 2.8652V6.37453C17.945 6.68095 17.785 6.96647 17.5212 7.12129C17.2573 7.27611 16.9306 7.27611 16.6667 7.12129C16.4028 6.96647 16.2428 6.68095 16.2483 6.37453V4.91101L12.5763 8.59152C12.246 8.92246 11.7107 8.92246 11.3804 8.59152L11.3804 8.59152Z" fill="white" />
                  </svg>

                  <span>Let's Talk Now</span>
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-[1230px] mx-auto py-[50px] px-4">
            <div className="
    flex flex-col 
    md:flex-row 
    md:flex-wrap 
    items-start 
    justify-between 
    gap-10
  ">

              {/* Left Section */}
              <div className="w-full md:w-[244px] space-y-8">
                <div className="flex items-center gap-3">
                  <img src={hand?.src} alt="CollegeSathi Logo" className="w-[35px] h-[35px] md:w-[40px] md:h-[40px]" />
                  <img src={logo?.src} alt="Certification" className="h-[35px] md:h-[40px] object-contain" />
                </div>

                <img
                  src={grostart?.src}
                  alt="Growstart"
                  className="w-[180px] h-[35px] md:w-[230px] md:h-[40px]"
                />

                {/* Social Media */}
                <ul className="flex items-center space-x-3 mt-4">
                  {['facebook', 'instagram', 'twitter', 'youtube', 'linkedin'].map((platform) => (
                    <li
                      key={platform}
                      className="
              w-[28px] h-[28px] md:w-[30px] md:h-[30px] 
              rounded-full bg-[#EC1E24] 
              flex items-center justify-center 
              text-white text-sm 
              hover:bg-[#d11a1f] 
              transition-colors duration-200
            "
                    >
                      <a href="#" className="flex items-center justify-center w-full h-full">
                        <SocialIcon platform={platform} />
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Helpline */}
                <button
                  type="button"
                  className="
          w-[160px] h-[45px] 
          rounded-[6px] border border-white 
          shadow-[0px_4px_4px_0px_#00000040] 
          bg-transparent 
          font-poppins font-bold text-[14px] 
          text-white 
          relative 
          hover:bg-white/10 
          transition-colors duration-200
        "
                >
                  9785-800-008
                  <div className="
          absolute top-0 left-1.5 
          bg-[#EC1E24] w-[65px] h-[14px] 
          rounded-full flex items-center 
          font-[400] text-[10px] md:text-[12px] 
          text-white justify-center 
          -translate-y-1.5
        ">
                    HELPLINE
                  </div>
                </button>
              </div>

              {/* Company Links */}
              <div className="w-full sm:w-[60%] md:w-[278px]">
                <h2 className="font-poppins           font-semibold text-[16px] md:text-[14px] text-white">Company</h2>
                <div className="w-full bg-[#EC1E24] h-[1px] my-3"></div>

                <ul className="
        grid grid-cols-2 
        gap-3 md:gap-4 
        mt-4 
        font-poppins font-[400] 
        text-[14px] text-white
      ">
                  {companyLinks.map((link, index) => (
                    <li key={index} className="relative flex">
                      <a
                        href={link.href}
                        className="hover:text-gray-300 transition gap-2"
                      >
                        {link.text}
                        {link.badge && (
                          <span
                            className="bg-[#5CD670D1] w-[60px] md:w-[77px] h-[14px] rounded-[3px] 
        text-[8px] md:text-[9px] flex items-center justify-center text-white"
                          >
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>

                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="w-full sm:w-[60%] md:w-[278px]">
                <h2 className="font-poppins           font-semibold text-[16px] md:text-[14px] text-white">Quick Links</h2>
                <div className="w-full bg-[#EC1E24] h-[1px] my-3"></div>

                <ul className="
        grid grid-cols-2 
        gap-3 md:gap-4 
        mt-4 
        font-poppins font-[400] 
        text-[14px] text-white
      ">
                  {quickLinks.map((link, index) => (
                    <li key={index} className={link.span ? 'col-span-2' : ''}>
                      <a href={link.href} className="hover:text-gray-300 transition">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]   px-4">

            <div className="bg-[#EEEEEE] w-full h-[2px]"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-[50px]">
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

            {/* <div className="bg-[#EEEEEE] w-full h-[2px] my-[50px]"></div> */}
            <div className="bg-[#EEEEEE] w-full h-[2px] my-[30px] sm:my-[40px] md:my-[50px]"></div>


            <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]   px-4">
              <h1 className="
    font-poppins font-[400] 
    text-[13px] sm:text-[14px] 
    leading-[24px] sm:leading-[32px] 
    text-white text-center
  ">
                Disclaimer / Terms & Conditions / Our Policy
              </h1>

              <p className="
font-normal text-[14px] leading-[38px] tracking-[0px] text-center text-white my-3.5
  ">
                College Sathi aims to provide unbiased and precise information, along with
                comparative guidance on universities and their programs, to admission
                aspirants. The content on the College Sathi website—encompassing texts,
                graphics, images, blogs, videos, and university logos—is intended solely for
                informational purposes and should not be viewed as a substitute for offerings
                from academic partners. While we strive for accuracy and present information
                in good faith, College Sathi makes no warranties regarding the completeness or
                reliability of the content and will not be liable for any errors, omissions,
                or resulting damages from its use.
              </p>

              <h3 className="
    font-poppins font-[400] 
    text-[12px] sm:text-[14px] 
    leading-[22px] sm:leading-[28px] 
    text-white text-center
  ">
                © Collegesathi 2025. All Right Reserved.
              </h3>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

// Social Icon Component
const SocialIcon = ({ platform }) => {
  const icons = {
    facebook: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    instagram: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.815 3.75 13.664 3.75 12.367s.49-2.448 1.376-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.808-2.026 1.298-3.323 1.298z" />
      </svg>
    ),
    twitter: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    youtube: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  }

  return icons[platform] || null
}

// Program Section Component
const ProgramSection = ({ title, links }) => (
  <div>
    <h3 className="font-poppins           font-semibold text-[14px] tracking-[0px]   leading-[38px] text-white mb-3.5">
      {title}
    </h3>
    <ul className="font-poppins font-[400] text-[14px] leading-[38px] tracking-[0px] text-white space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="hover:text-gray-300 transition-colors duration-200"
          >
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
    <h4 className="font-poppins           font-semibold text-[14px] tracking-[0px]   leading-[38px] text-white mb-3.5">
      {title}
    </h4>
    <ul className="font-poppins font-[400] text-[14px] leading-[38px] tracking-[0px] text-white space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="hover:text-gray-300 transition-colors duration-200"
          >
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
    <h3 className="font-poppins           font-semibold text-[14px]   leading-[38px] tracking-[0px] text-white mb-3.5">
      {title}
    </h3>
    <ul className="font-poppins font-[400] text-[14px] leading-[38px] tracking-[0px] text-white space-y-2">
      {items.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="hover:text-gray-300 transition-colors duration-200"
          >
            {link}
          </a>
        </li>
      ))}
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