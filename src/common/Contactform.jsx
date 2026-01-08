import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { IoChevronDown } from "react-icons/io5";
import Listing from "@/pages/api/Listing";

function Contactform() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [isCourseOpen, setCourseOpen] = useState(false);

    // OTP States
    const [otpSent, setOtpSent] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [timer, setTimer] = useState(0);
    const [otpLoading, setOtpLoading] = useState(false);

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
    });

    // Timer logic
    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    // Email Validator
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // --- OTP Logic Functions ---
    const handleSendOtp = async () => {
        if (form.phone_number.length !== 10) {
            return toast.error("Please enter a valid 10-digit mobile number");
        }
        setOtpLoading(true);
        try {
            const main = new Listing();
            await main.SendOtp(form.phone_number); 
            toast.success("OTP sent successfully!");
            setOtpSent(true);
            setTimer(90); 
        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to send OTP");
        } finally {
            setOtpLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (form.otp.length < 4) return toast.error("Enter valid 4-digit OTP");
        setOtpLoading(true);
        try {
            const main = new Listing();
            const res = await main.VerifyOtp(form.phone_number, form.otp);
            if(res){
                toast.success("Mobile number verified!");
                setIsVerified(true);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Invalid OTP");
        } finally {
            setOtpLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(form.email)) return toast.error("Please enter a valid email!");
        if (!isVerified) return toast.error("Please verify your mobile number first!");
        
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.ContactAdd({
                ...form,
                page_name: router?.pathname
            });

            if (response?.data?.status) {
                toast.success(response.data.message);
                setIsSubmitting(true);
                // Reset form
                setForm({ name: '', phone_number: '', email: '', content: '', otp: '', course_id: "", city: 'jaipur', state: 'rajasthan', page_name: router?.pathname });
                setOtpSent(false);
                setIsVerified(false);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4.5">
            {/* Name Field */}
            <div>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    className="w-full h-[61px] px-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] text-black focus:outline-none focus:ring-2 focus:ring-[#EC1E24]"
                    required
                />
            </div>

            {/* Mobile Number Field with +91 Prefix */}
            <div className="relative flex items-center">
                {/* Visual Prefix */}
                <span className="absolute left-4 text-[14px] text-black font-semibold border-r border-gray-300 pr-2 pointer-events-none">
                    +91
                </span>
                <input
                    name="phone_number"
                    value={form.phone_number}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 10) handleInputChange({ target: { name: "phone_number", value } });
                    }}
                    disabled={isVerified}
                    maxLength="10"
                    type="tel"
                    placeholder="Mobile Number"
                    // pl-14 adds space for the +91 prefix
                    className="w-full h-[61px] pl-14 pr-28 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] text-black focus:outline-none focus:ring-2 focus:ring-[#EC1E24] disabled:opacity-70"
                    required
                />
                {!isVerified && (
                    <button
                        type="button"
                        onClick={handleSendOtp}
                      disabled={otpLoading || form.phone_number.length !== 10 || timer > 0} 
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#EC1E24] text-white text-[12px] px-3 py-2 rounded-lg hover:bg-red-700 disabled:bg-gray-400 transition-all"
                    >
                     {otpSent ? (timer > 0 ? `Resend in ${timer}s` : "Resend OTP") : "Send OTP"}
                    </button>
                )}
                {isVerified && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600 text-sm font-bold">Verified ✓</span>
                )}
            </div>

            {/* OTP Input */}
            {otpSent && !isVerified && (
                <div className="space-y-2">
                    <div className="relative">
                        <input
                            name="otp"
                            value={form.otp}
                            onChange={(e) => {
                                const digitsOnly = e.target.value.replace(/\D/g, "");
                                if (digitsOnly.length <= 4) handleInputChange({ target: { name: "otp", value: digitsOnly } });
                            }}
                            maxLength="4"
                            type="text"
                            placeholder="Enter 4-digit OTP"
                            className="w-full h-[61px] px-4 pr-28 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] text-black focus:outline-none focus:ring-2 focus:ring-[#EC1E24]"
                            required
                        />
                        <button
                            type="button"
                            onClick={handleVerifyOtp}
                            disabled={otpLoading || form.otp.length < 4}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white text-[12px] px-4 py-2 rounded-lg hover:bg-gray-800 disabled:bg-gray-400 transition-all"
                        >
                            Verify
                        </button>
                    </div>
                
                </div>
            )}

            {/* Email Field */}
            <div>
                <input
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    className="w-full h-[61px] px-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] text-black focus:outline-none focus:ring-2 focus:ring-[#EC1E24]"
                    required
                />
            </div>

            {/* Course Dropdown */}
            <div className="relative">
                <select
                    name="course_id"
                    value={form.course_id}
                    onChange={handleInputChange}
                    onFocus={() => setCourseOpen(true)}
                    onBlur={() => setCourseOpen(false)}
                    className="w-full h-[61px] px-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] text-black focus:outline-none focus:ring-2 focus:ring-[#EC1E24] appearance-none"
                    required
                >
                    <option value="" disabled>Select a Course</option>
                    <option value="1">MBA</option>
                    <option value="2">BCA</option>
                </select>
                <span className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-transform ${isCourseOpen ? "rotate-180" : "rotate-0"}`}>
                    <IoChevronDown />
                </span>
            </div>

            {/* Query Message Field */}
            <div>
                <textarea
                    name="content"
                    value={form.content}
                    onChange={handleInputChange}
                    placeholder="Write down your query..."
                    rows="4"
                    className="w-full h-[100px] p-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] text-black focus:outline-none focus:ring-2 focus:ring-[#EC1E24] resize-none"
                    required
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading || !isVerified}
                className="w-full md:w-[160px] h-[50px] rounded-[30px] bg-[#EC1E24] font-semibold text-white flex items-center justify-between px-6 hover:bg-[#d11a1f] transition-all disabled:opacity-50"
            >
                <span>{loading ? 'Processing...' : 'Submit'}</span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#EC1E24]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </button>
        </form>
    );
}

export default Contactform;