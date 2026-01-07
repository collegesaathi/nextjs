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

    // Timer logic for Resend OTP
    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    // --- OTP Logic Functions ---
    const handleSendOtp = async () => {
        if (form.phone_number.length !== 10) {
            return toast.error("Please enter a valid 10-digit mobile number");
        }
        setOtpLoading(true);
        try {
            // Replace with your actual Send OTP API call
            // await main.SendOTP(form.phone_number); 

               const main = new Listing();
            const response = await main.SendOtp();
            toast.success("OTP sent successfully!");
            setOtpSent(true);
            setTimer(30); // 30 seconds timer
        } catch (error) {
            toast.error("Failed to send OTP");
        } finally {
            setOtpLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (form.otp.length < 4) return toast.error("Enter valid OTP");
        setOtpLoading(true);
        try {
            const res = await main.VerifyOTP(form.phone_number, form.otp);
            if(res){
            toast.success("Mobile number verified!");
            }
            setIsVerified(true);
        } catch (error) {
            toast.error("Invalid OTP");
        } finally {
            setOtpLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isVerified) return toast.error("Please verify your mobile number first!");
        if (loading) return;

        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.ContactAdd({
                ...form,
                otp: form.otp, // Already verified
                page_name: router?.pathname
            });

            if (response?.data?.status) {
                toast.success(response.data.message);
                setIsSubmitting(true);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong!");
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
                    value={form?.name}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    className="w-full h-[61px] px-4 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] text-black focus:ring-0 "
                    required
                />
            </div>

            {/* Mobile Number Field with Send OTP */}
            <div className="relative">
                <input
                    name="phone_number"
                    value={form?.phone_number}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 10) handleInputChange({ target: { name: "phone_number", value } });
                    }}
                    disabled={isVerified}
                    maxLength="10"
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full h-[61px] px-4 pr-28 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] text-black focus:outline-none focus:ring-2 focus:ring-[#EC1E24] disabled:opacity-70"
                    required
                />
                {!isVerified && (
                    <button
                        type="button"
                        onClick={handleSendOtp}
                        disabled={otpLoading || form.phone_number.length !== 10}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#EC1E24] text-white text-[12px] px-3 py-2 rounded-lg hover:bg-red-700 disabled:bg-gray-400 transition-all"
                    >
                        {otpSent ? "Resend" : "Send OTP"}
                    </button>
                )}
                {isVerified && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600 text-sm font-bold">Verified ✓</span>
                )}
            </div>

            {/* OTP Input - Only shows after Send OTP is clicked */}
            {otpSent && !isVerified && (
                <div className="space-y-2">
                    <div className="relative">
                        <input
                            name="otp"
                            value={form?.otp}
                            onChange={(e) => {
                                const digitsOnly = e.target.value.replace(/\D/g, "");
                                handleInputChange({ target: { name: "otp", value: digitsOnly } });
                            }}
                            maxLength="6"
                            type="text"
                            placeholder="Enter OTP"
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
                    <div className="flex justify-between px-2">
                        {timer > 0 ? (
                            <p className="text-[12px] text-gray-500">Resend OTP in <span className="font-bold text-red-500">{timer}s</span></p>
                        ) : (
                            <button
                                type="button"
                                onClick={handleSendOtp}
                                className="text-[12px] text-[#EC1E24] font-semibold underline"
                            >
                                Resend OTP
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Email Field */}
            <div>
                <input
                    name="email"
                    value={form?.email}
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
                    value={form?.course_id}
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
                    value={form?.content}
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