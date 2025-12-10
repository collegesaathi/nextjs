import { useState } from "react"

function Contactform() {

    // Form data
    const [form, setForm] = useState({
        name: '',
        mobile: '',
        email: '',
        location: '',
        query: '',
        otp: ''
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
                otp: '',
            })

            // Show success message
            toast('Thank you! Your query has been submitted successfully.')
        } catch (error) {
            console.error('Form submission error:', error)
            alert('Sorry, there was an error submitting your query. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={submitForm} className="space-y-4.5">
            {/* Name Field */}
            <div>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    className="w-full h-[61px] px-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] tracking-[0px] text-left text-black focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-200"
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
                    className="w-full h-[61px] px-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] tracking-[0px] text-left text-black focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-200"
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
                    className="w-full h-[61px] px-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] tracking-[0px] text-left text-black focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-200"
                    required
                />
            </div>

            {/* Location Dropdown */}
            {/* <div className="relative">
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
            </div> */}

            <div>
                <input
                    name="otp"
                    value={form.otp}
                    onChange={(e) => {
                        const digitsOnly = e.target.value.replace(/\D/g, "");
                        handleInputChange({ target: { name: "otp", value: digitsOnly } });
                    }}
                    maxLength="6"
                    type="text"
                    inputMode="numeric"
                    placeholder="OTP"
                    className="w-full h-[61px] px-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] tracking-[0px] text-left text-black focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-200"
                    required
                />
            </div>

            {/* Query Message Field */}
            <div>
                <textarea
                    name="query"
                    value={form.query}
                    onChange={handleInputChange}
                    placeholder="Write down your query..."
                    rows="4"
                    className="w-full h-[131px] p-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] tracking-[0px] text-left text-black focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-200 resize-none"
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

    );
}

export default Contactform;