import React, { useState, useMemo, useEffect } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { IoChevronDown } from "react-icons/io5";
import toast from "react-hot-toast";
import Listing from "../api/Listing";

// --- DATA FOR STEPS 4-9 ---
const studyHourOptions = [
  { id: "2-4", title: "2-4 Hours" },
  { id: "4-8", title: "4-8 Hours" },
  { id: "8-16", title: "8-16 Hours" },
  { id: "16+", title: "16+ Hours" },
];

const scoreOptions = [
  { id: "below_50", title: "Below 50%" },
  { id: "50_75", title: "50% to 75%" },
  { id: "above_75", title: "Above 75%" },
];

const feeOptions = [
  { id: "less_1", title: "Less than 1 Lakh" },
  { id: "1_2", title: "1 Lakh to 2 Lakhs" },
  { id: "2_5", title: "2 Lakhs to 5 Lakhs" },
  { id: "5_plus", title: "5 Lakhs+" },
];

const yesNoOptions = [
  { id: "yes", title: "Yes" },
  { id: "no", title: "No" },
];

const scholarshipOptions = [
  { id: "divyang", title: "Divyang (For persons with disabilities)" },
  { id: "defence", title: "Defence personnel" },
  { id: "alumni", title: "Merit (80% and above in bachelor's degree)" },
  { id: "govt", title: "Government employees" },
  { id: "merit", title: "Merit | 80% and above in bachelor's degree" },
];

// --- COMPONENTS ---

const OptionCard = ({ title, image, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`
      cursor-pointer flex flex-col items-center justify-center
      p-2 rounded-[18px] border transition-all duration-200
      bg-white shadow-sm hover:shadow-md 
      min-h-[110px] sm:min-h-[125px] w-full
      ${isActive
        ? "border-[#FB9F9F] bg-red-50"
        : "border-[#FBE5E5] hover:border-red-300"
      }
    `}
  >
    {image && (
      <div
        className={`
          mb-2 sm:mb-3 w-10 h-10 sm:w-14 sm:h-14
          flex items-center justify-center
          rounded-full
          border-2 border-dotted
          ${isActive ? "bg-red-50 border-red-200" : "bg-gray-50 border-[#D1D0D0]"}
        `}
      >
        <Image
          src={image}
          alt={title}
          width={24}
          height={24}
          className="object-contain w-5 h-5 sm:w-6 sm:h-6"
        />
      </div>
    )}

    <span
      className={`text-[12px] sm:text-[14px] md:text-base font-[500] text-center leading-tight ${isActive ? "text-[#EC1E24]" : "text-gray-700"
        }`}
    >
      {title}
    </span>
  </div>
);

const SidebarCardEMI = () => (
  <div className="border border-[#DCFCE7] rounded-xl p-6 text-center mb-6 bg-[url('/images/clickpick/noemi.png')] bg-cover bg-center h-48 flex flex-col justify-center items-center">
    <p className="font-semibold text-gray-700 mb-2 shadow-white drop-shadow-md">
      No-cost EMIs & <br /> scholarships Available
    </p>

    <div className="flex justify-center mt-2">
      <Image
        src="/images/clickpick/money.png"
        width={80}
        height={80}
        alt="Money"
        className="drop-shadow-sm"
      />
    </div>
  </div>
);

const SidebarDynamicCard = ({ step }) => {
  if (step === 1) {
    return (
      <div className="bg-white border border-gray-100 shadow-sm rounded-xl text-center h-48 bg-[url('/images/clickpick/Admissionalert.png')] bg-cover bg-center"></div>
    );
  }
  if (step === 2) {
    return (
      <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 text-center h-48 bg-[url('/images/clickpick/Admissionalert.png')] bg-cover bg-center"></div>
    );
  }
  return (
    <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 text-center h-48 flex flex-col justify-center">
      <div className="text-red-500 text-3xl mb-2 flex justify-center">📞</div>
      <h3 className="font-bold text-gray-800">CS Support</h3>
      <p className="text-xs text-gray-500 mt-1">
        Free Personalized Expert Counseling Just For You!
      </p>
    </div>
  );
};

// Form Component for Step 10
const ContactForm = ({
  form,
  handleInputChange,
  handleSubmit,
  handleSendOtp,
  handleVerifyOtp,
  otpSent,
  isVerified,
  timer,
  otpLoading,
  loading
}) => (
  <div className="max-w-md mx-auto">
    <form onSubmit={handleSubmit} className="space-y-4.5">
      {/* Name Field */}
      <div>
        <input
          name="name"
          value={form.name}
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          className="w-full h-[61px] px-4 rounded-[11px] border border-gray-300 text-gray-600 font-[400] bg-white font-normal text-[14px] focus:outline-none focus:ring-2 focus:ring-[#EC1E24]"
          required
        />
      </div>

      <div className="relative flex items-center">
        {/* Visual Prefix */}
        <span className="absolute left-4 text-[14px] text-black font-semibold border-r border-gray-300 pr-2 pointer-events-none z-10">
          +91
        </span>
        <input
          name="phone_number"
          value={form.phone_number}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            if (value.length <= 10) {
              handleInputChange({ target: { name: "phone_number", value } });
            }
          }}
          onKeyDown={(e) => {
            if (
              !/[0-9]/.test(e.key) &&
              !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)
            ) {
              e.preventDefault();
            }
          }}
          disabled={isVerified}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Mobile Number"
          className="w-full h-[61px] pl-14 pr-28 rounded-[11px] bg-[#F7F6F6] font-normal text-[14px] text-black focus:outline-none focus:ring-2 focus:ring-[#EC1E24] disabled:opacity-70"
          required
        />
        {!isVerified && (
          <button
            type="button"
            onClick={handleSendOtp}
            disabled={otpLoading || form.phone_number.length !== 10 || timer > 0}
            className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-[#EC1E24] text-white text-[12px] px-3 py-2 rounded-lg hover:bg-red-700 disabled:bg-gray-400 transition-all"
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
          className="w-full h-[61px] px-4 rounded-[11px] border border-gray-300 text-gray-600 font-[400] bg-white font-normal text-[14px] focus:outline-none focus:ring-2 focus:ring-[#EC1E24]"
          required
        />
      </div>
    </form>
  </div>
);

// --- MAIN WIZARD ---

export default function CourseSelectionWizard() {
  const [step, setStep] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Selections Steps 1-3
  const [selectedDegree, setSelectedDegree] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSpec, setSelectedSpec] = useState(null);
  const [degreesData, setDegreesData] = useState([]); // Store Degree API response
  const [coursesData, setCoursesData] = useState([]); // Store Course API response
  const [specializationsData, setSpecializationsData] = useState([]); // Store Specialization API response
  console.log("coursesData", coursesData)
  // Selections Steps 4-5
  const [studyHours, setStudyHours] = useState(null);
  const [scorePercentage, setScorePercentage] = useState(null);

  // Selections Steps 6-9
  const [avgFee, setAvgFee] = useState(null);
  const [emiPref, setEmiPref] = useState(null);
  const [placementPref, setPlacementPref] = useState(null);
  const [scholarshipCat, setScholarshipCat] = useState(null);

  const currentDegreeData = useMemo(() => {
    if (!selectedDegree || !degreesData.length) return null;
    return degreesData.find((d) => d.id === selectedDegree);
  }, [selectedDegree, degreesData]);

  const currentCourseData = useMemo(() => {
    if (!selectedCourse || !coursesData.length) return null;
    return coursesData.find((c) => c.id === selectedCourse);
  }, [selectedCourse, coursesData]);

  // Logic to get items based on step
  const getItemsToDisplay = () => {
    if (step === 1) return degreesData; // Return all degrees

    if (step === 2) {
      return coursesData.filter((c) =>
        c.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (step === 3) {
      return specializationsData.filter((s) =>
        s.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (step === 4) return studyHourOptions;
    if (step === 5) return scoreOptions;
    if (step === 6) return feeOptions;
    if (step === 7) return yesNoOptions;
    if (step === 8) return yesNoOptions;
    if (step === 9) return scholarshipOptions;
    if (step === 10) return [];

    return [];
  };

  const currentItems = getItemsToDisplay();
  const [proinsight, setProinsight] = useState("");
  console.log("proinsight", proinsight)
  // Progress Bar Logic
  const progressWidth = `${(step / 10) * 100}%`;

  // Form States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
    page_name: router?.pathname,
    proinsight: proinsight
  });

  // Update proinsight whenever selections change
  useEffect(() => {
    if (step === 9 && scholarshipCat) {
      const degreeObj = degreesData.find(d => d.id === selectedDegree);
      const degreeTitle = degreeObj ? degreeObj.name : selectedDegree;

      const courseObj = coursesData.find(c => c.id === selectedCourse);
      const courseTitle = courseObj ? courseObj.title : selectedCourse;

      const specObj = specializationsData.find(s => s.id === selectedSpec);
      const specTitle = specObj ? specObj.name : selectedSpec;

      const insights = `
Degree: ${degreeTitle}
Course: ${courseTitle}
Specialization: ${specTitle}
Study Hours: ${studyHours}
Score Percentage: ${scorePercentage}
Average Fee: ${avgFee}
EMI Preference: ${emiPref}
Placement Preference: ${placementPref}
Scholarship Category: ${scholarshipCat}
      `.trim();

      setProinsight(insights);
      setForm(prev => ({ ...prev, proinsight: insights }));
    }
  }, [step, selectedDegree, selectedCourse, selectedSpec, studyHours,
    scorePercentage, avgFee, emiPref, placementPref, scholarshipCat,
    degreesData, coursesData, specializationsData]);

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

  // Fetch Degrees
  const fetchData = async () => {
    try {
      const main = new Listing();
      const response = await main.ProInsight();
      if (response) {
        setDegreesData(response?.data?.data || []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch Courses when degree is selected
  useEffect(() => {
    const fetchCourses = async () => {
      if (selectedDegree) {
        try {
          const main = new Listing();
          const response = await main.ProCourseInsight(selectedDegree);
          console.log("response", response)
          if (response) {
            setCoursesData(response?.data?.data);
          }
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      }
    };

    fetchCourses();
  }, [selectedDegree]);

  // Fetch Specializations when course is selected
  useEffect(() => {
    const fetchSpecializations = async () => {
      if (selectedCourse) {
        try {
          const main = new Listing();
          const response = await main.ProSpeInsight(selectedCourse);
          if (response) {
            setSpecializationsData(response?.data?.data || []);
          }
        } catch (error) {
          console.error("Error fetching specializations:", error);
        }
      }
    };

    fetchSpecializations();
  }, [selectedCourse]);

  // --- OTP Logic Functions ---
  const handleSendOtp = async () => {
    if (form.phone_number.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    setOtpLoading(true);
    try {
      console.log("OTP sent to:", form.phone_number);
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
    if (form.otp.length < 4) {
      toast.error("Enter valid 4-digit OTP");
      return;
    }
    setOtpLoading(true);
    try {
      // Demo verification
      if (form.otp.length === 4) {
        toast.success("Mobile number verified!");
        setIsVerified(true);
      } else {
        throw new Error("Invalid OTP");
      }
    } catch (error) {
      toast.error("Invalid OTP");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isVerified) {
      toast.error("Please verify your mobile number first!");
      return;
    }

    if (!validateEmail(form.email)) {
      toast.error("Please enter a valid email!");
      return;
    }
    if (!isVerified) {
      toast.error("Please verify your mobile number first!");
      return;
    }

    setLoading(true);
    try {
      console.log("Form submitted:", form);
      toast.success("Form submitted successfully!");
      setIsSubmitting(true);
      // Reset form
      setForm({
        name: '',
        phone_number: '',
        email: '',
        content: '',
        otp: '',
        course_id: "",
        city: 'jaipur',
        state: 'rajasthan',
        page_name: router?.pathname,
        proinsight: proinsight
      });
      setOtpSent(false);
      setIsVerified(false);

    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Auto-navigation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      switch (step) {
        case 1:
          if (selectedDegree) setStep(2);
          break;
        case 2:
          if (selectedCourse) setStep(3);
          break;
        case 3:
          if (selectedSpec) setStep(4);
          break;
        case 4:
          if (studyHours) setStep(5);
          break;
        case 5:
          if (scorePercentage) setStep(6);
          break;
        case 6:
          if (avgFee) setStep(7);
          break;
        case 7:
          if (emiPref) setStep(8);
          break;
        case 8:
          if (placementPref) setStep(9);
          break;
        case 9:
          if (scholarshipCat) setStep(10);
          break;
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [
    step, selectedDegree, selectedCourse, selectedSpec,
    studyHours, scorePercentage, avgFee, emiPref,
    placementPref, scholarshipCat
  ]);

  const handleBack = () => {
    if (step > 1) {
      const prevStep = step - 1;
      setStep(prevStep);
      setSearchTerm("");

      // Reset only if going back from that step
      if (step === 2) {
        setSelectedDegree(null);
        setCoursesData([]);
        setSpecializationsData([]);
      } else if (step === 3) {
        setSelectedCourse(null);
        setSpecializationsData([]);
      } else if (step === 4) {
        setSelectedSpec(null);
      } else if (step === 5) {
        setStudyHours(null);
      } else if (step === 6) {
        setScorePercentage(null);
      } else if (step === 7) {
        setAvgFee(null);
      } else if (step === 8) {
        setEmiPref(null);
      } else if (step === 9) {
        setPlacementPref(null);
      } else if (step === 10) {
        setScholarshipCat(null);
      }
    }
  };

  return (
    <Layout>
      <div className="mx-auto container xl:max-w-[1230px] px-4 py-8 md:mt-20 lg:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">

          {/* --- LEFT CONTENT (WIZARD) --- */}
          <div className="lg:col-span-3">
            <div className="bg-[#FCF1F1] border-8 border-[#CECECE4C] rounded-[25px] shadow-sm p-4 sm:p-6 md:p-10 flex flex-col justify-between min-h-[550px] md:h-[610px]">

              {/* TOP SECTION: Progress & Title */}
              <div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] h-2 rounded-full mb-6 sm:mb-8 p-2 relative flex items-center">
                  <div
                    className="bg-gradient-to-r from-[#C3F449] to-[#5BBA3F] h-2 rounded-full transition-all duration-500 ease-out absolute top-1 left-0"
                    style={{ width: progressWidth }}
                  ></div>
                  {/* Dot */}
                  <div
                    className="w-3.5 h-3.5 bg-white rounded-[5px] absolute top-[0px] transition-all duration-500 flex items-center justify-center shadow-sm z-10"
                    style={{ left: `calc(${progressWidth} - 10px)` }}
                  >
                    <div className="w-1.5 h-1.5 bg-[#A9A7B1] rounded-full" />
                  </div>
                </div>

                {/* Step Title */}
                <h2 className="text-[18px] md:text-[24px] font-[600] text-center text-gray-800 mb-6 font-poppins px-2 leading-snug">
                  {step === 1 && "Which degree are you interested in?"}
                  {step === 2 && "Which course would you like to pursue?"}
                  {step === 3 && "Do you have a specific specialization in mind?"}
                  {step === 4 && "How many hours per week can you dedicate to studying?"}
                  {step === 5 && "What percentage did you score in your last qualification?"}
                  {step === 6 && "Choose the average fee you are willing to pay."}
                  {step === 7 && "Would you prefer EMI or Installment payment options?"}
                  {step === 8 && "Do you want universities that provide placement and career services?"}
                  {step === 9 && "Do you belong to any of the following categories (for scholarship eligibility)?"}
                  {step === 10 && "Get Free Personalized Counseling"}
                </h2>

                {/* Search Bar (Only for Step 2 and 3) */}
                {(step === 2 || step === 3) && (
                  <div className="max-w-md mx-auto mb-6">
                    <div className="relative bg-white flex rounded-lg border items-center border-[#CECECE] focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-200">
                      <input
                        type="text"
                        placeholder={
                          step === 2
                            ? "Search for course..."
                            : "Search for specialization..."
                        }
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-8 pr-4 py-2 text-[14px] rounded-lg outline-none"
                      />
                      <div className="absolute left-2 top-2.5">
                        <Image
                          src="/images/search.svg"
                          width={15}
                          height={15}
                          alt="search"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* MIDDLE SECTION: Grid Content or Form */}
              <div className="flex-1 overflow-y-auto custom-scrollbar px-1 pb-4">
                {step === 10 ? (
                  // Show form in Step 10
                  <ContactForm
                    form={form}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    handleSendOtp={handleSendOtp}
                    handleVerifyOtp={handleVerifyOtp}
                    otpSent={otpSent}
                    isVerified={isVerified}
                    timer={timer}
                    otpLoading={otpLoading}
                    loading={loading}
                  />
                ) : (
                  // Show options grid for steps 1-9
                  <div
                    className={`grid gap-3 justify-items-center w-full
                      ${step === 7 || step === 8
                        ? "grid-cols-2 max-w-sm mx-auto"
                        : "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
                      }
                    `}
                  >
                    {/* Special "Not Decided" Option for Step 3 */}
                    {step === 3 && (
                      <OptionCard
                        key="not_decided"
                        title="Not decided yet"
                        isActive={selectedSpec === "not_decided"}
                        onClick={() => setSelectedSpec("not_decided")}
                      />
                    )}
                    {/* Render Dynamic Items */}
                    {currentItems && currentItems.map((item) => {
                      let isActive = false;
                      if (step === 1) isActive = selectedDegree === item.id;
                      if (step === 2) isActive = selectedCourse === item.id;
                      if (step === 3) isActive = selectedSpec === item.id;
                      if (step === 4) isActive = studyHours === item.id;
                      if (step === 5) isActive = scorePercentage === item.id;
                      if (step === 6) isActive = avgFee === item.id;
                      if (step === 7) isActive = emiPref === item.id;
                      if (step === 8) isActive = placementPref === item.id;
                      if (step === 9) isActive = scholarshipCat === item.id;

                      return (
                        <OptionCard
                          key={item.id}
                          title={item.name || item.title}
                          image={item.icon || item.bannerImage || null}
                          isActive={isActive}
                          onClick={() => {
                            if (step === 1) {
                              setSelectedDegree(item.id);
                              // Reset courses and specializations when degree changes
                              setSelectedCourse(null);
                              setSelectedSpec(null);
                              setCoursesData([]);
                              setSpecializationsData([]);
                            }
                            if (step === 2) {
                              setSelectedCourse(item.id);
                              // Reset specializations when course changes
                              setSelectedSpec(null);
                              setSpecializationsData([]);
                            }
                            if (step === 3) setSelectedSpec(item.id);
                            if (step === 4) setStudyHours(item.id);
                            if (step === 5) setScorePercentage(item.id);
                            if (step === 6) setAvgFee(item.id);
                            if (step === 7) setEmiPref(item.id);
                            if (step === 8) setPlacementPref(item.id);
                            if (step === 9) setScholarshipCat(item.id);

                            setSearchTerm("");
                          }}
                        />
                      );
                    })}
                  </div>
                )}
              </div>

              {/* BOTTOM SECTION: Footer Buttons */}
              <div className="w-full mt-4 flex flex-col-reverse md:flex-row justify-center gap-3 items-center font-poppins pt-4 border-t border-gray-200 md:border-none">
                {/* Back Button */}
                {step > 1 ? (
                  <button
                    onClick={handleBack}
                    className="cursor-pointer w-full md:w-auto px-12 py-2.5 rounded-md border border-gray-300 text-gray-600 font-[400] hover:bg-gray-50 bg-white transition-all text-sm md:text-base"
                  >
                    Back
                  </button>
                ) : (
                  <div className="hidden md:block w-0"></div>
                )}

                {/* Next/Submit Button */}
                {step < 10 && (
                  <button
                    onClick={() => {
                      // Manual next button
                      switch (step) {
                        case 1: if (selectedDegree) setStep(2); break;
                        case 2: if (selectedCourse) setStep(3); break;
                        case 3: if (selectedSpec) setStep(4); break;
                        case 4: if (studyHours) setStep(5); break;
                        case 5: if (scorePercentage) setStep(6); break;
                        case 6: if (avgFee) setStep(7); break;
                        case 7: if (emiPref) setStep(8); break;
                        case 8: if (placementPref) setStep(9); break;
                        case 9: if (scholarshipCat) setStep(10); break;
                      }
                    }}
                    disabled={
                      (step === 1 && !selectedDegree) ||
                      (step === 2 && !selectedCourse) ||
                      (step === 3 && !selectedSpec) ||
                      (step === 4 && !studyHours) ||
                      (step === 5 && !scorePercentage) ||
                      (step === 6 && !avgFee) ||
                      (step === 7 && !emiPref) ||
                      (step === 8 && !placementPref) ||
                      (step === 9 && !scholarshipCat)
                    }
                    className={`
                      cursor-pointer w-full md:w-auto px-16 py-2.5 rounded-md font-bold text-white transition-all text-sm md:text-base
                      ${(step === 1 && selectedDegree) ||
                        (step === 2 && selectedCourse) ||
                        (step === 3 && selectedSpec) ||
                        (step === 4 && studyHours) ||
                        (step === 5 && scorePercentage) ||
                        (step === 6 && avgFee) ||
                        (step === 7 && emiPref) ||
                        (step === 8 && placementPref) ||
                        (step === 9 && scholarshipCat)
                        ? "bg-gradient-to-t from-[#B91217] to-[#EC1E24] hover:bg-red-700 shadow-lg shadow-red-700/30"
                        : "bg-gray-300 cursor-not-allowed"
                      }
                    `}
                  >
                    {step === 9 ? "Next" : "Next"}
                  </button>
                )}
                {step === 10 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (!isVerified) {
                        toast.error("Please verify your mobile number first!");
                      } else {
                        handleSubmit();
                      }
                    }}
                    disabled={loading}
                    className="cursor-pointer flex justify-center items-center gap-3 w-full md:w-auto px-16 py-2.5 rounded-md font-bold text-white transition-all text-sm md:text-base bg-gradient-to-t from-[#B91217] to-[#EC1E24] hover:bg-red-700 shadow-lg shadow-red-700/30 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    <span>{loading ? 'Processing...' : 'Submit'}</span>
                    <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[#EC1E24]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDEBAR --- */}
          <div className="hidden lg:block lg:col-span-1 space-y-6">
            <SidebarCardEMI />
            <SidebarDynamicCard step={step} />
          </div>
        </div>
      </div>
    </Layout>
  );
}