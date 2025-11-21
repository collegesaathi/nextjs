'use client'

import { useState } from 'react'

export default function ContactSection() {
    // Form data
    const [form, setForm] = useState({
        name: '',
        mobile: '',
        email: '',
        location: '',
        query: '',
    })

    // Form state
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Form submission
    const submitForm = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Simulate form submission
            await new Promise((resolve) => setTimeout(resolve, 2000))

            // Handle form submission logic here
            console.log('Form submitted:', form)

            // Reset form after successful submission
            setForm({
                name: '',
                mobile: '',
                email: '',
                location: '',
                query: '',
            })

            // Show success message
            alert('Thank you! Your query has been submitted successfully.')
        } catch (error) {
            console.error('Form submission error:', error)
            alert('Sorry, there was an error submitting your query. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            {/* Desktop Version */}
            <section className="py-16 px-4 bg-white">
                <div
                    className="w-full max-w-[1200px] mx-auto"
                    data-aos="slide-up"
                    data-aos-duration="600"
                    data-aos-delay="100"
                    data-aos-once="true"
                >
                    <div className="flex items-center justify-center flex-col space-y-6">
                        <div className="inline-flex relative">
                            <h1 className="font-semibold text-[32px] tracking-[0px] text-[#282529]">
                                Connect with Our Team
                            </h1>
                            <img
                                src="/img/university-main/contact/shape2.svg"
                                className="absolute -bottom-2 left-0"
                                alt=""
                            />
                        </div>
                        <p
                            className="font-normal text-[16px] tracking-[0px] text-center text-[#282529] w-[511px] mx-auto"
                        >
                            Finding the right online university can be challenging. Reach out to our experts and get
                            the right direction.
                        </p>
                    </div>
                    <div className="flex items-center justify-between pt-10">
                        {/* Left Side - Contact Info */}
                        <div className="space-y-8 w-[463px]">
                            {/* Header */}
                            <div>
                                <h2 className="font-semibold text-[44px] leading-[60px] text-[#282529] mb-4">
                                    Collegesathi Learner Support
                                </h2>
                                <p className="font-poppins font-normal text-[16px] tracking-[0px] text-[#282529]">
                                    We are here to help you at every step!
                                </p>
                            </div>

                            {/* Contact Support Card */}
                            <div className="">
                                {/* Contact Methods */}
                                <div className="space-y-4">
                                    {/* WhatsApp */}
                                    <div className="flex items-center justify-between p-4 bg-[#F7F6F6] relative">
                                        <div>
                                            <p
                                                className="font-poppins font-normal text-[16px] leading-[24px] tracking-[0px] text-[#282529] mb-1"
                                            >
                                                WhatsApp Number
                                            </p>
                                            <p
                                                className="font-poppins font-normal text-[12px] leading-[24px] tracking-[0px] text-[#282529]"
                                            >
                                                Connect with us on WhatsApp
                                            </p>
                                        </div>
                                        <div className="absolute bottom-0 right-4">
                                            <button className="flex items-center justify-center w-[68px] h-[68px] relative z-10">
                                                <img src="/img/university-main/contact/whatsapp.svg" alt="WhatsApp" />
                                            </button>
                                        </div>
                                        <div className="absolute bottom-0 right-0">
                                            <img src="/img/university-main/contact/shape.svg" alt="shape Icon" className="" />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-center justify-between p-4 bg-[#F7F6F6] relative">
                                        <div>
                                            <p
                                                className="font-poppins font-normal text-[16px] leading-[24px] tracking-[0px] text-[#282529] mb-1"
                                            >
                                                Send Email
                                            </p>
                                            <p
                                                className="font-poppins font-normal text-[12px] leading-[24px] tracking-[0px] text-[#282529]"
                                            >
                                                Send us your email
                                            </p>
                                        </div>
                                        <div className="absolute bottom-0 right-4">
                                            <button className="flex items-center justify-center w-[68px] h-[68px] relative z-10">
                                                <img src="/img/university-main/contact/email.svg" alt="Email" />
                                            </button>
                                        </div>
                                        <div className="absolute bottom-0 right-0">
                                            <img src="/img/university-main/contact/shape.svg" alt="shape Icon" className="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div
                            className="w-[636px] h-[571px] rounded-[24px] bg-white border border-[#E8E8E8] shadow-[0px_4px_16px_0px_#00000021] p-[30px]"
                        >
                            <form onSubmit={submitForm} className="space-y-4.5">
                                {/* Name Field */}
                                <div>
                                    <input
                                        name="name"
                                        value={form.name}
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="Name"
                                        className="w-full h-[61px] px-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] tracking-[0px] text-left text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>

                                {/* Mobile Number Field */}
                                <div>
                                    <input
                                        name="mobile"
                                        value={form.mobile}
                                        onChange={handleInputChange}
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="w-full h-[61px] px-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] tracking-[0px] text-left text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <input
                                        name="email"
                                        value={form.email}
                                        onChange={handleInputChange}
                                        type="email"
                                        placeholder="Email"
                                        className="w-full h-[61px] px-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] tracking-[0px] text-left text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>

                                {/* Location Dropdown */}
                                <div className="relative">
                                    <select
                                        name="location"
                                        value={form.location}
                                        onChange={handleInputChange}
                                        className="w-full h-[61px] px-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] tracking-[0px] text-left text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="" disabled>Location</option>
                                        <option value="mumbai">Mumbai</option>
                                        <option value="delhi">Delhi</option>
                                        <option value="bangalore">Bangalore</option>
                                        <option value="hyderabad">Hyderabad</option>
                                        <option value="chennai">Chennai</option>
                                        <option value="kolkata">Kolkata</option>
                                        <option value="pune">Pune</option>
                                        <option value="ahmedabad">Ahmedabad</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                        <svg
                                            className="w-5 h-5 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Query Message Field */}
                                <div>
                                    <textarea
                                        name="query"
                                        value={form.query}
                                        onChange={handleInputChange}
                                        placeholder="Write down your query..."
                                        rows="4"
                                        className="w-full h-[131px] p-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] tracking-[0px] text-left text-[#8E8E8E] focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-200 resize-none"
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-[139px] h-[40px] text-left rounded-[20px] bg-[#EC1E24] font-poppins font-semibold text-[20px] tracking-[0px] text-white flex items-center justify-start px-4 hover:bg-[#d11a1f] focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative"
                                >
                                    <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>

                                    {isSubmitting && (
                                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent ml-2"></div>
                                    )}
                                    <div className="absolute top-0 right-2 h-full flex items-center z-10">
                                        <div
                                            className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-white text-[#EC1E24]"
                                        >
                                            {!isSubmitting && (
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}