import { useState } from "react"
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { IoChevronDown } from "react-icons/io5";

import Listing from "@/pages/api/Listing";

function Contactform() {



    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loading, setLoading] = useState(false);
    const router = useRouter();
        const [isCourseOpen, setCourseOpen] = useState(false);

    // Form data
    const [form, setForm] = useState({
        name: '',
        phone_number: '',
        email: '',
        content: '',
        otp: '',
        course_id: "",
        city: 'jaipur',
        state: 'rajasthan',
        page_name: router?.pathname

    })

    // Form state


    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) return;

        console.log("cxgvxfb", form)

        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.ContactAdd({
                name: form?.name || "",
                email: form?.email || "",
                phone_number: form?.phone_number || "",
                course_id: form?.course_id || "",
                content: form?.content || "",
                otp: form?.otp || "1234",
                city: form?.city || "jaipur",
                state: form?.state || "rajasthan",
                page_name: router?.pathname
            });

            if (response?.data?.status) {
                toast.success(response.data.message);
            }
            else {
                toast.error(response.data.message);
            }

        } catch (error) {
            console.error("API error:", error);
            toast.error(error?.response?.data?.message || "Something went wrong!");
            setLoading(false);
        }
        setLoading(false);
        setIsSubmitting(true)
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4.5">
            {/* Name Field */}
            <div>
                <input
                    name="name"
                    value={form?.name}
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
                    name="phone_number"
                    value={form?.phone_number}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 10) handleInputChange({ target: { name: "phone_number", value } });
                    }}
                    maxLength="10"
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
                    value={form?.email}
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
                    value={form?.otp}
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


            <div className="relative">
                <select
                    name="course_id"
                    value={form?.course_id}
                    onChange={handleInputChange}
                    onFocus={() => setCourseOpen(true)}
                    onBlur={() => setCourseOpen(false)}
                    className="w-full h-[61px] px-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] tracking-[0px] text-left text-black focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-200 ">
                    <option value="" disabled selected className="text-red-500" >Select a Course</option>
                    {/* Add more options here */}
                </select>
                   <span className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none   ${isCourseOpen ? "rotate-180" : "rotate-0"}`}>
                                                        <IoChevronDown />
                                                    </span>
            </div>

            {/* Query Message Field */}
            <div>
                <textarea
                    name="content"
                    value={form?.content}
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