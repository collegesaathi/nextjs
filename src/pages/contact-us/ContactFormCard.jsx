import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Listing from "../api/Listing";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { InputBox } from "@/common/InputBox";
import { getUTMParams } from "@/common/utm";


function ContactForm() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState("jaipur");
    const [universities, setUniversities] = useState([])
    const [isuniversityOpen, setUniversityOpen] = useState(false);
    const [isCourseOpen, setCourseOpen] = useState(false);

    const [otpSent, setOtpSent] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [timer, setTimer] = useState(0);
    const [otpLoading, setOtpLoading] = useState(false);
    const [isOfficesVisible, setIsOfficesVisible] = useState(false);

    const utms = getUTMParams();


    const [data, setData] = useState({
        name: "",
        email: "",
        phone_number: "",
        course_id: "",
        content: "",
        city: "",
        state: "",
        university_id: "",
        otp: "",
        page_name: router?.pathname

    })

    // --- Timer Logic (90 Seconds) ---
    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const fetchData = async () => {
        try {

            const main = new Listing();
            const response = await main.ContactUniversityGet();
            const universities = response?.data?.data?.universities || [];
            setUniversities(universities);

        } catch (error) {
            console.log("error", error);
            setLoading(false);


        }
    };



    useEffect(() => {
        fetchData();

    }, []);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSendOtp = async () => {
        if (data.phone_number.length !== 10) {
            return toast.error("Please enter a valid 10-digit number");
        }
        setOtpLoading(true);
        try {
            const main = new Listing();
            await main.SendOtp(data.phone_number);
            toast.success("OTP sent successfully!");
            setOtpSent(true);
            setTimer(90); // 90 Seconds timer
        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to send OTP");
        } finally {
            setOtpLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        if (data.otp.length < 4) return toast.error("Enter valid OTP");
        setOtpLoading(true);
        try {
            const main = new Listing();
            const res = await main.VerifyOtp(data.phone_number, data.otp);
            if (res) {
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

        if (!validateEmail(data.email)) return toast.error("Please enter a valid email!");
        if (!isVerified) return toast.error("Please verify your mobile number first!");
        if (loading) return;



        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.ContactAdd({
                name: data?.name || "",
                email: data?.email || "",
                phone_number: data?.phone_number || "",
                course_id: data?.course_id || "",
                content: data?.content || "",
                city: data?.city || "",
                state: data?.state || "",
                university_id: data?.university_id || "",
                page_name: router?.pathname,
                ...utms
            });

            if (response?.data?.status) {
                toast.success(response.data.message);
            }
            else {
                toast.error(response.data.message);
            }
            setForm({ name: '', phone_number: '', email: '', content: '', otp: '', course_id: "", city: 'jaipur', state: 'rajasthan', page_name: router?.pathname });
            setOtpSent(false);
            setIsVerified(false);

        } catch (error) {
            console.error("API error:", error);
            toast.error(error?.response?.data?.message || "Something went wrong!");
            setLoading(false);
        }
        setLoading(false);
    };
    const jaipurMap =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.744257531137!2d75.762689!3d26.848902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e423d6e933%3A0x31d447d831bdb9e1!2s152%2F1%20%26%202%2C%20Shipra%20Path%2C%20Mansarovar%2C%20Jaipur%2C%20Rajasthan%20302020!5e0!3m2!1sen!2sin!4v1704811111111";

    const gurugramMap =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.6078345120447!2d77.101979!3d28.441948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19494c9d97a7%3A0xa9f6d4fc6352f5f8!2sCentrum%20Plaza%2C%20Golf%20Course%20Rd%2C%20Suncity%2C%20Sector%2054%2C%20Gurugram%2C%20Haryana%20122011!5e0!3m2!1sen!2sin!4v1704812222222";

    const [mapSrc, setMapSrc] = useState(jaipurMap);



    return (<>
        < div className="py-4 md:py-8" >
            <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  md:px-4   " >
                <div className="  flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6 px-2 md:px-4 py-5 md:border-2  border-[#DFDFDF] rounded-[30px] shadow-[0px_14px_20px_0px_#0000001F]">
                    <div className="bg-white md:px-4 md:py-4 flex flex-col justify-between">
                        {/* Map */}
                        <div className="h-[200px] md:h-[800px] rounded-[8px] overflow-hidden">
                            <iframe
                                src={mapSrc}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full rounded-[8px] border-0"
                            ></iframe>
                        </div>
                        <div className="lg:hidden flex justify-center py-6">
                            <button
                                onClick={() => setIsOfficesVisible(!isOfficesVisible)}
                                className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-full shadow-sm text-gray-700 bg-white font-medium active:scale-95 transition-all"
                            >
                                Find Our Offices
                                <IoChevronDown className={`transition-transform duration-300 ${isOfficesVisible ? "rotate-180" : ""}`} />
                            </button>
                        </div>

                        {/* 3. Office Buttons: Collapsible logic applied ONLY here */}
                        <div className={`space-y-4 mt-2 lg:mt-6 transition-all duration-300 ${isOfficesVisible ? "block" : "hidden lg:block"}`}>
                            <button
                                onClick={() => { setMapSrc(jaipurMap); setActive("jaipur"); }}
                                className={`w-full flex items-center justify-between px-6 py-3 md:py-4 cursor-pointer group rounded-[8px] transition ${active === "jaipur" ? "bg-[#FFEEEE]" : "bg-gray-100"}`}
                            >
                                <span className="text-[16px] font-[400]">Find Jaipur Office</span>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-black group-hover:bg-white">
                                    <FaArrowRightLong className={`w-4 h-4 text-white ${active === "jaipur" && "rotate-[320deg]"} group-hover:text-black`} />
                                </div>
                            </button>

                            <button
                                onClick={() => { setMapSrc(gurugramMap); setActive("Gurugram"); }}
                                className={`w-full flex items-center justify-between px-6 py-3 md:py-4 cursor-pointer group rounded-[8px] transition ${active === "Gurugram" ? "bg-[#FFEEEE]" : "bg-gray-100"}`}
                            >
                                <span className="text-[16px] font-[400]">Find Gurugram Office</span>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all bg-black group-hover:bg-white">
                                    <FaArrowRightLong className={`w-4 h-4 text-white ${active === "Gurugram" && "rotate-[320deg]"} group-hover:text-black`} />
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* 2. Right Section (Contact Form) */}
                    <div className="lg:px-4 py-4 mt-4 lg:mt-0 rounded-[20px] lg:border-2  border-[#DFDFDF] ">
                        <h2 className="font-poppins font-semibold text-[18px] leading-[14px] text-left text-[#282529] lg:mt-10 mb-6">
                            Contact Form
                        </h2>

                        <form className="space-y-4 ">
                            {/* Name Input */}
                            <div className="mb-4  md:mb-6 ">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={data?.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-[#808080] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-[16px] font-poppins"
                                    required
                                />
                            </div>
                            {/* Mobile Number Input */}
                            <div className="relative flex mb-4 md:mb-6 w-full">
                                <div className="flex items-center bg-gray-50 border border-[#808080] rounded-l-lg px-3 min-w-[90px] sm:min-w-[110px]">
                                    <img src="https://flagcdn.com/in.svg" alt="India" className="w-5 h-4 mr-2 border border-gray-400" />
                                    <span className="text-gray-600 font-medium text-sm sm:text-base">+91</span>
                                </div>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    value={data?.phone_number}
                                    disabled={isVerified}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");
                                        if (value.length <= 10) handleChange({ target: { name: "phone_number", value } });
                                    }}
                                    maxLength="10"
                                    placeholder="Mobile Number"
                                    className="w-full px-3 py-3 border border-l-0 border-[#808080] rounded-r-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
                                    required
                                />
                                {!isVerified && (
                                    <button
                                        type="button"
                                        onClick={handleSendOtp}
                                        disabled={otpLoading || data.phone_number.length !== 10 || timer > 0}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#EC1E24] text-white text-[11px] px-3 py-2 rounded-lg hover:bg-red-700 disabled:bg-gray-400 transition-all z-10"
                                    >
                                        {otpSent ? (timer > 0 ? `Wait ${timer}s` : "Resend") : "Send OTP"}
                                    </button>
                                )}
                                {isVerified && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 font-bold text-sm">Verified ✓</span>}
                            </div>

                            {/* Conditional OTP Input */}
                            {otpSent && !isVerified && (
                                <div className="relative mb-4 md:mb-6">
                                    <input
                                        type="text"
                                        name="otp"
                                        value={data.otp}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/\D/g, "");
                                            if (val.length <= 4) handleChange({ target: { name: "otp", value: val } });
                                        }}
                                        placeholder="Enter 4-digit OTP"
                                        className="w-full px-4 py-3 border border-[#808080] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleVerifyOtp}
                                        disabled={otpLoading || data.otp.length < 4}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white text-[11px] px-4 py-2 rounded-lg disabled:bg-gray-400"
                                    >
                                        Verify
                                    </button>
                                </div>
                            )}

                            {/* Email Input */}
                            <div className="relative mb-4  md:mb-6">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={data?.email}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 border border-[#808080] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-red-500"
                                    required
                                />
                                {/* Email Icon */}
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                            {/* Select University & Course */}
                            <div className="space-y-4 mb-4  md:mb-6">

                                <div className="relative">
                                    <select
                                        name="university_id"
                                        value={data?.university_id}
                                        onChange={handleChange}
                                        onFocus={() => setUniversityOpen(true)}
                                        onBlur={() => setUniversityOpen(false)}
                                        className="w-full px-4 py-3 border border-[#808080] rounded-[8px] bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500">
                                        <option value="" disabled>Select a University</option>
                                        {universities && universities.length > 0 ? (
                                            universities.map((u, index) => (
                                                <option key={index} value={u.id}>
                                                    {u.name}
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>No data</option>
                                        )}

                                    </select>
                                    <span className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none   ${isuniversityOpen ? "rotate-180" : "rotate-0"}`}>
                                        <IoChevronDown />
                                    </span>
                                </div>

                                <div className="relative">
                                    <select
                                        name="course_id"
                                        value={data?.course_id}
                                        onChange={handleChange}
                                        onFocus={() => setCourseOpen(true)}
                                        onBlur={() => setCourseOpen(false)}
                                        className="w-full px-4 py-3 border border-[#808080] rounded-[8px] bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500">
                                        <option value="" disabled selected>Select a Course</option>
                                        {/* Add more options here */}
                                    </select>
                                    <span className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none   ${isCourseOpen ? "rotate-180" : "rotate-0"}`}>
                                        <IoChevronDown />
                                    </span>
                                </div>
                            </div>



                            <InputBox data={data} handleChange={handleChange} />


                            {/* Message Textarea */}
                            <div className=" mb-4  md:mb-6">
                                <textarea
                                    name="content"
                                    value={data?.content}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows="8"
                                    className="w-full px-4 py-3 border border-[#808080] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    onClick={handleSubmit}
                                    type="submit"
                                    disabled={loading || !isVerified}
                                    className="w-full py-3 bg-red-600 text-white font-[600] cursor-pointer rounded-[8px] text-[16px] font-poppins hover:bg-red-700 transition duration-150 shadow-md"
                                >
                                    {loading ? "Loading.." : "Submit"}
                                </button>
                            </div>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="font-poppins font-[400] text-[16px] leading-[14px] text-center text-[#343434] mb-6 flex items-center justify-center">
                                <span className="flex items-center gap-1 bg-[#E4F3CD] px-3 py-2 rounded-full">
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 12.707a1 1 0 001.414 0L13 10.414l-1.293-1.293a1 1 0 00-1.414 1.414l-1.586-1.586a1 1 0 00-1.414 1.414l1.586 1.586z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Your personal data is secured with us
                                </span>
                            </p>

                            <p className="mt-6 font-poppins font-[400] text-[16px] leading-[20px] text-center text-[#282529] mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default ContactForm;