import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Listing from "../api/Listing";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { InputBox } from "../admin/common/InputBox";


function ContactForm() {


    const router = useRouter();
    console.log(
        "router", router?.pathname
    )
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState("jaipur");
    const [universities, setUniversities] = useState([])
    const [isuniversityOpen, setUniversityOpen] = useState(false);
    const [isCourseOpen, setCourseOpen] = useState(false);


    const [data, setData] = useState({
        name: "",
        email: "",
        phone_number: "",
        course_id: "",
        content: "",
        city: "",
        state: "",
        university_id: "",
        page_name: router?.pathname

    })

    console.log("fgfd", router)

    console.log(universities, universities)


    const fetchData = async () => {
        try {

            const main = new Listing();
            const response = await main.ContactUniversityGet();
            console.log("response", response)
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
    console.log("gfjhfgj", data)

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                city: data?.city || "jaipur",
                state: data?.state || "rajasthan",
                university_id: data?.university_id || "",
                page_name: router?.pathname
            });

            if (response?.data?.status) {
                toast.success(response.data.message);
            }
            else {
                toast.error(response.data.message);
            }
            setData({
               name: "",
        email: "",
        phone_number: "",
        course_id: "",
        content: "",
        city: "",
        state: "",
        university_id: "",
          page_name: router?.pathname
            });

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

    const [mapSrc, setMapSrc] = useState(
        jaipurMap
    );



    return (<>
        < div className="py-4 md:py-8 bg-white" >
            <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  md:px-4   " >
                <div className="lg:grid lg:grid-cols-2 px-2 md:px-4 py-5 border-2  border-[#DFDFDF] rounded-[30px] shadow-[0px_14px_20px_0px_#0000001F]">
                    <div className="bg-white md:px-4 md:py-4 flex flex-col justify-between">
                        {/* Map */}
                        <div className="h-[500px] sm:h-[800px] rounded-[8px] overflow-hidden">
                            <iframe
                                src={mapSrc}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full rounded-[8px] border-0"
                            ></iframe>
                        </div>

                        {/* Office Buttons */}
                        <div className="space-y-4 mt-6">
                            {/* Jaipur button */}
                            <button
                                onClick={() => { setMapSrc(jaipurMap); setActive("jaipur"); }}
                                className={`w-full flex items-center justify-between px-6 py-4 cursor-pointer 
  group text-gray-800 rounded-[8px] transition hover:bg-[#EC1E24] hover:text-white
  ${active === "jaipur" ? "bg-[#ED1F24] text-white" : "bg-gray-100"}`}
                            >
                                <span className="text-lg font-medium">Find Jaipur Office</span>

                                <div
                                    className={`
      w-8 h-8 rounded-full flex items-center justify-center transition-all 
      ${active === "Gurugram" ? "bg-black -translate-y-1" : "bg-black/80"}
      group-hover:bg-white
    `}
                                >
                                    <FaArrowRightLong
                                        className={`
        w-4 h-4 transform transition-all 
        ${active === "jaipur" ? "text-white rotate-[290deg]" : "text-white"}
        group-hover:text-black
      `}
                                    />
                                </div>
                            </button>



                            {/* Gurugram button */}
                            <button
                                onClick={() => { setMapSrc(gurugramMap); setActive("Gurugram"); }}
                                className={`w-full flex items-center justify-between px-6 py-4 cursor-pointer 
  group text-gray-800 rounded-[8px] transition hover:bg-[#EC1E24] hover:text-white
  ${active === "Gurugram" ? "bg-[#ED1F24] text-white" : "bg-gray-100"}`}
                            >
                                <span className="text-lg font-medium">Find Gurugram Office</span>

                                {/* Arrow Circle */}
                                <div
                                    className={`
      w-8 h-8 rounded-full flex items-center justify-center transition-all 
      ${active === "Gurugram" ? "bg-black -translate-y-1" : "bg-black/80"}
      group-hover:bg-white
    `}
                                >
                                    <FaArrowRightLong
                                        className={`
        w-4 h-4 transform transition-all 
        ${active === "Gurugram" ? "text-white rotate-[290deg]" : "text-white"}
        group-hover:text-black
      `}
                                    />
                                </div>
                            </button>


                        </div>
                    </div>
                    {/* 2. Right Section (Contact Form) */}
                    <div className="px-4 py-4 rounded-[20px] border-2  border-[#DFDFDF] ">
                        <h2 className="font-poppins font-semibold text-[18px] leading-[14px] text-left text-[#282529] mt-10 mb-6">
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
                            <div className="flex mb-4 md:mb-6 w-full">

                                {/* Country Code Box */}
                                <div className="flex items-center bg-gray-50 border border-[#808080] 
      rounded-l-lg px-3 min-w-[90px] sm:min-w-[110px]">

                                    <img
                                        src="https://flagcdn.com/in.svg"
                                        alt="Indian Flag"
                                        className="w-5 h-4 mr-2 border border-gray-400"
                                    />

                                    <span className="text-gray-600 font-medium text-sm sm:text-base">+91</span>
                                </div>

                                {/* Phone Input */}
                                <input
                                    type="tel"
                                    name="phone_number"
                                    value={data?.phone_number}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");
                                        if (value.length <= 10) handleChange({ target: { name: "phone_number", value } });
                                    }}
                                    maxLength="10"
                                    placeholder="Mobile Number"
                                    className="w-full px-3 py-3 border border-l-0 border-[#808080] 
      rounded-r-lg focus:outline-none focus:ring-2 focus:ring-red-500
      text-sm sm:text-base"
                                    required
                                />
                            </div>


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

                            {/* Select State & City (2 Columns) */}
                            {/* <div className="md:flex  space-y-4 md:space-y-0 md:space-x-4 mb-4 md:mb-6">
                                <div className="md:w-1/2 relative">
                                    <select
                                        name="state"
                                        value={data?.state}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 pr-10 border border-[#808080] rounded-[8px] bg-white 
                 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500"
                                    >
                                        <option value="" disabled>Select State</option>
                                    </select>

                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <IoChevronDown />
                                    </span>
                                </div>

                                <div className="md:w-1/2 relative">
                                    <select
                                        name="city"
                                        value={data?.city}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 pr-10 border border-[#808080] rounded-[8px] bg-white 
                 focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500"
                                    >
                                        <option value="" disabled>Select City</option>
                                    </select>

                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <IoChevronDown />
                                    </span>
                                </div>
                            </div> */}

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
                                    disabled={loading}
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