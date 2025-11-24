'use client'

import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Vector from "../asserts/home/Vector.png"
import Heading from '../common/Heading'

export default function ContactSection() {
   
    return (
        <>
            {/* Desktop Version */}
            <div className="py-8 md:py-12 ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
                    <div
                        data-aos="slide-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                        data-aos-once="true"
                    >
                        <div className="flex items-center justify-center flex-col space-y-6">
                            <div className="inline-flex relative">
                                <h2
                                    className={`
                        font-poppins
                        font-[600]
                        text-[20px]
                         md:text-[32px]
                        leading-[24px]
                        md:leading-[100%]
                        tracking-[0px]
                        text-[#282529]
                   mb-1
        `}
                                >
                                    Connect with Our Team
                                </h2>
                                <img
                                    src={Vector?.src}
                                    className="absolute -bottom-2 left-0"
                                    alt=""
                                />
                            </div>
                            <p
                                className="font-[400] text-[16px] tracking-[0px] text-center text-[#282529] w-[470px] mx-auto font-poppins"
                            >
                                Finding the right online university can be challenging. Reach out
                                to our experts and get the right direction.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-between pt-10 gap-5">
                            {/* Left Side - Contact Info */}
                            <div className="space-y-8 w-[463px]">
                                {/* Header */}
                                <div>
                                    <h2
                                        className="
    font-poppins
    font-semibold
    text-[44px]
    leading-[60px]
    tracking-[0px]
    text-[#282529]
    mb-1
  "
                                    >
                                        Collegesathi Learner Support
                                    </h2>

                                    <p className="font-poppins font-[400] text-[16px] tracking-[0px] text-[#282529]">
                                        We are here to help you at every step!
                                    </p>
                                </div>

                                {/* Contact Support Card */}
                                <div className="">
                                    {/* Contact Methods */}
                                    <div className="space-y-4">
                                        {/* WhatsApp */}
                                        <div className="w-full max-w-[432px] h-[80px] bg-[#F7F6F6] shadow-md rounded-xl p-4 flex items-center justify-between relative overflow-hidden">

                                            {/* Text Section */}
                                            <div>
                                                <h3 className="font-poppins font-[400] md:text-[16px] text-[#282529] mt-2 mb-3">
                                                    WhatsApp Number
                                                </h3>
                                                <p className="font-poppins font-[400]  md:text-[12px] text-[#282529] mt-2 mb-3">
                                                    Connect with us on WhatsApp
                                                </p>
                                            </div>
                                            <div className="w-[90px] h-[90px] bg-[#EC1E24] rounded-full
 absolute right-8 bottom-4 translate-x-1/2 translate-y-1/2
 flex items-center justify-center text-center">
                                                <FaWhatsapp size={32} className='text-white bottom-[30px] text-center flex  justify-center items-center ' />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="w-full max-w-[432px] h-[80px] bg-[#F7F6F6] shadow-md rounded-xl p-4 flex items-center justify-between relative overflow-hidden">
                                            <div>
                                                <h3 className="font-poppins font-[400] md:text-[16px] text-[#282529] mt-2 mb-3">
                                                    Send Email
                                                </h3>
                                                <p className="font-poppins font-[400]  md:text-[12px] text-[#282529] mt-2 mb-3">
                                                    Send us your email
                                                </p>
                                            </div>
                                            <div className="w-[90px] h-[90px] bg-[#EC1E24] rounded-full
 absolute right-8 bottom-4 translate-x-1/2 translate-y-1/2
 flex items-center justify-center text-center">
                                                <svg width="40" height="23" viewBox="0 0 40 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6719 0H8.68051C6.77523 0 5.1875 1.58773 5.1875 3.49301V4.81611C5.1875 5.29243 5.55797 5.6629 6.03429 5.6629C6.51061 5.6629 6.88108 5.29243 6.88108 4.81611V3.49301C6.88108 3.33423 6.93401 3.12253 6.98693 2.96376L16.7779 11.3258L7.03985 19.6878C6.98693 19.5291 6.98693 19.3174 6.93401 19.1586V17.8355C6.93401 17.3592 6.56354 16.9887 6.08722 16.9887C5.6109 16.9887 5.24043 17.3592 5.24043 17.8355V19.1586C5.24043 21.0639 6.82816 22.6516 8.73343 22.6516H35.7248C37.6301 22.6516 39.2178 21.0639 39.2178 19.1586V3.49301C39.1649 1.58773 37.6301 0 35.6719 0V0ZM8.36328 1.79951C8.46913 1.74658 8.57498 1.74658 8.73375 1.74658H35.7251C35.831 1.74658 35.9368 1.74658 36.0956 1.79951L22.7587 13.1783C22.4411 13.4429 21.9648 13.4429 21.6472 13.1783L8.36328 1.79951V1.79951ZM37.4181 19.1587C37.4181 19.3175 37.3652 19.5292 37.3122 19.6879L27.5742 11.3259L37.3122 2.96387C37.3652 3.12264 37.3652 3.33434 37.4181 3.49312V19.1587V19.1587ZM2.59375 9.15587C2.59375 8.67955 2.96422 8.30908 3.44054 8.30908H8.68005C9.15637 8.30908 9.52684 8.67955 9.52684 9.15587C9.52684 9.63219 9.15637 10.0027 8.68005 10.0027H3.49346C3.01715 10.0027 2.59375 9.63219 2.59375 9.15587V9.15587ZM35.6705 20.9049H8.67906C8.57321 20.9049 8.46736 20.9049 8.30859 20.852L18.0996 12.437L20.4283 14.5011C21.3809 15.3479 22.8628 15.3479 23.8154 14.5011L26.1441 12.437L36.041 20.852C35.9351 20.9049 35.7763 20.9049 35.6705 20.9049V20.9049ZM8.67959 14.3954H0.846789C0.37047 14.3954 0 13.972 0 13.4957C0 13.0194 0.37047 12.6489 0.846789 12.6489H8.67959C9.15591 12.6489 9.52638 13.0194 9.52638 13.4957C9.52638 13.972 9.20883 14.3954 8.67959 14.3954V14.3954Z" fill="#F3F3F3" />
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Contact Form */}
                            <div
                                className="w-[636px] h-[571px] rounded-[24px] bg-white border border-[#E8E8E8] shadow-[0px_4px_16px_0px_#00000021] p-[30px]"
                            >
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}