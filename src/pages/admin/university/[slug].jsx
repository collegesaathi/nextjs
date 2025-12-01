import React from "react";
import AdminLayout from "../common/AdminLayout";
import Budget from "../../asserts/home/Budget.png";
import Confusion from "../../asserts/home/Confusion.png";
import EMIOptions from "../../asserts/home/EMIOptions.png";
import Suggestions from "../../asserts/home/Suggestions.png";
import Placements from "../../asserts/home/Placements.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from "react";
import Heading from "@/pages/common/Heading";
import Image from "next/image";
import Facts from "./Facts";
import UniversityCampusCarousel from "@/components/UniversityCampusCarousel";
import PlacementPartners from "@/components/PlacementPartners";
import CareerServices from "@/components/CareerServices";
import StepsSection from "@/components/StepsSection";
function Details() {

    const advantages = [
        {
            title: "Recognized and Accredited Institution",
            subtitle: "",
            description: `One of the best features of <strong>NMIMS CDOE</strong> is that it is accredited and approved by University Grants Commission- Distance Education Bureau (UGC-DEB) and is ranked with an 'A' Grade by National Assessment and Accreditation Council (NAAC). This accreditation proves the credibility of the online programs.`,
        },
        {
            title: "Flexible Learning Approach",
            subtitle: "",
            description: `The <strong>NMIMS CDOE courses</strong> are offered with a flexible approach, providing proper freedom of learning and managing studies with other commitments. This allows the students to design their study schedule accordingly.`,
        },
        {
            title: "Industry-Relevant Curriculum",
            subtitle: "",
            description: `The <strong>NMIMS CDOE courses</strong> curriculum is designed by industry professionals, which covers the latest developments in the world. This provides updated skills and expertise that are important for getting placed in a better role.`,
        },
        {
            title: "Strong Placement and Career Support",
            subtitle: "",
            description: `This university has always maintained relationships with leading recruiters in many different sectors, thus giving students good placement and career assistance. Career support includes resume building, interviews tips and tricks, and other employment gateways. Students also have access to a large alumni base who can assist with jobs and provide guidance.`,
        },
        {
            title: "Affordable and Value for Money",
            subtitle: "",
            description: `Compared to full-time programs, <strong>NMIMS CDOE fees</strong> are flexible and affordable, which is a good investment. Also, many EMI facilities and discounts are provided for the students to get the degree at the minimum possible cost.`,
        },
        {
            title: "Cutting-Edge Digital Learning Platform",
            subtitle: "",
            description: `The digital learning platform at <strong>NMIMS CDOE</strong> is supported with an AI powered Learning Management System (LMS), which promises cutting-edge advancement. Students interact through discussion forums, case studies, and projects. Students can access e-books, video lectures, and assessments any time and from anywhere through digital means.`,
        },
    ];
    const [activeTab, setActiveTab] = useState("indian");

    const RankingIcon = "/assets/icons/ranking.png";
    const EduIcon = "/assets/icons/education.png";
    const GradeIcon = "/assets/icons/grade.png";
    const WorkIcon = "/assets/icons/work.png";
    const helpCards = [
        {
            title: "Find EMI Facilities for different universities.",
            description: "We are here to take care of your finances.", // Card 1 is just the title/action
            id: 1,
            image: EMIOptions?.src
        },
        {
            title: "Budget constraints?",
            description: "We are here to take care of your finances.",
            id: 2,
            image: Budget?.src

        },
        {
            title: "Too much confusion?",
            description: "Don't worry explore the best universities.",
            id: 3,
            image: Confusion?.src

        },
        {
            title: "Looking for placements?",
            description: "Discover different placement opportunities with us.",
            id: 4,
            image: Placements?.src

        },
        // Add more cards to ensure the carousel is scrollable
        {
            title: "Need expert advice?",
            description: "Talk to our counselors today.",
            id: 5,
            image: Suggestions?.src
        },
        {
            title: "Admission queries?",
            description: "Get quick answers to all your questions.",
            id: 6,
            image: Placements?.src

        },
    ];

    const swiperRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const updateProgress = (swiper) => {
        if (!swiper) return;

        const totalCards = helpCards.length;
        const visibleSlides = swiper.params.slidesPerView;

        if (visibleSlides === 4) {
            setIsBeginning(false);
        } else {
            setIsBeginning(swiper.isBeginning);
        }

        setIsEnd(swiper.isEnd);

        const currentVisibleEnd = swiper.activeIndex + visibleSlides;

        let progressValue = (currentVisibleEnd / totalCards) * 100;

        // Limit between 0–100
        progressValue = Math.min(100, Math.max(0, progressValue));

        setProgress(progressValue);
    };


    const navigatePrev = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    const navigateNext = () => {
        swiperRef.current?.swiper.slideNext();
    };
    const progressBarTotalWidth =
        typeof window !== "undefined" && window.innerWidth >= 1024 ? "180px" : "120px";

    const progressWidthStyle = {
        width: `${progress}%`,
    };

    const handleAction = (item) => {
        // Handle action button clicks
        console.log('Action clicked:', item.action);

        // You can handle routing or other actions here
        switch (item.action) {
            case 'emi-options':
                // Navigate to EMI page or show modal
                console.log('Navigating to EMI options...');
                break;
            case 'budget-help':
                // Show budget help form
                console.log('Opening budget help...');
                break;
            case 'university-guide':
                // Navigate to universities page
                console.log('Opening university guide...');
                break;
            case 'placement-info':
                // Show placement information
                console.log('Showing placement info...');
                break;
            case 'career-guidance':
                // Open career guidance section
                console.log('Opening career guidance...');
                break;
            case 'scholarship-info':
                // Show scholarship information
                console.log('Showing scholarship info...');
                break;
            default:
                break;
        }
    };

    const handleKeyDown = (event, item) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleAction(item);
        }
    };



    return (<>
        <AdminLayout page={"university"}>
            <div className="py-4 md:py-8 ">

                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">

                    {/* Desktop Version */}
                    {/* Title */}
                    <h1 className="font-poppins font-semibold text-[28px] leading-[42px] text-[#282529] mb-4">
                        NMIMS CDOE
                    </h1>

                    {/* Description */}
                    <p className="font-poppins font-normal text-[17px] leading-[25px] text-[#282529]">
                        <span className="font-semibold">
                            Narsee Monjee Institute of Management Studies (CDOE)
                        </span>{" "}
                        is one of the well-ranked institutions in India, for its online and
                        distance education programs. It was established to provide education
                        for working professionals, self-employed individuals, and students
                        that are flexible and easy to access.{" "}
                        <span className="font-semibold">NMIMS CDOE</span> provides an online
                        education platform that is aligned with industry needs. It is
                        accredited by the University Grants Commission (UGC), National
                        Assessment and Accreditation Council (NAAC), and other high-ranking
                        institutions as a renowned educational hub around the world.{" "}
                        <span className="font-semibold">NMIMS is famous</span> for its variety
                        of online management programs, equipping students with essential
                        management and business skills. Students have access to a friendly
                        and adaptable digital learning environment that has live and
                        recorded lectures, engaging assignments, case studies, and projects
                        from real businesses.{" "}
                        <span className="font-semibold">NMIMS CDOE</span> has emerged as a
                        leading institution of choice for distance and online education in
                        India. With an advanced learning platform,{" "}
                        <span className="font-semibold">NMIMS CDOE</span> is the best choice
                        for students.
                    </p>

                    {/* Updated Fees */}
                    <h2 className="font-semibold text-[28px] leading-[42px] text-[#282529] mt-8 mb-4">
                        Updated Course Fees for 2025
                    </h2>

                    {/* Table */}
                    <div className="overflow-x-auto rounded-[13px] border-2 border-[#f47c80]">
                        <table className="w-full text-sm font-poppins tracking-wide">
                            <thead>
                                <tr className="bg-red-600 text-white h-[65px]">
                                    {["Course", "Per Semester", "Total Fees"].map((heading, index) => (
                                        <th
                                            key={index}
                                            className={`py-3 px-4 text-left font-semibold text-[17px] leading-[25px] ${index !== 2 ? "border-r-2 border-[#f47c80]" : ""
                                                }`}
                                        >
                                            {heading}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {[
                                    ["Online Executive MBA", "N/A", "₹ 4,00,000/-"],
                                    ["Online MBA", "₹ 55,000/-", "₹ 1,96,000/-"],
                                    ["Online BCom", "₹ 18,000/-", "₹ 94,000/-"],
                                    ["Online BBA", "₹ 30,000/-", "₹ 1,45,000/-"],
                                ].map((row, index) => (
                                    <tr key={index} className="border-t hover:bg-[#f9fafb]">
                                        <td className="py-3 px-4 border-r-2 border-[#f47c80] underline">
                                            {row[0]}
                                        </td>
                                        <td className="py-3 px-4 border-r-2 border-[#f47c80]">
                                            {row[1]}
                                        </td>
                                        <td className="py-3 px-4">{row[2]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                        <Heading title={"Approvals and Accreditations"} />
                        <div className="flex flex-wrap items-center justify-end md:space-x-4">
                            <div className={`w-[${progressBarTotalWidth}] h-1.5 bg-gray-300 rounded-full overflow-hidden`}>
                                <div
                                    className="h-full bg-[#EC1E24] transition-all duration-300 ease-in-out"
                                    style={progressWidthStyle}
                                ></div>
                            </div>
                            <div className="flex space-x-2 mt-4 md:mt-0">
                                <button
                                    type="button"
                                    onClick={navigatePrev}
                                    disabled={isBeginning}
                                    className={`
                                         w-6 h-6
                             md:w-8 md:h-8 rounded-full flex items-center justify-center 
                             transition-all duration-200 flex-shrink-0
                             ${isBeginning
                                            ? 'bg-gray-100 border border-gray-300 cursor-not-allowed text-gray-400 opacity-60'
                                            : 'bg-white border border-[#EC1E24] hover:bg-red-50 cursor-pointer text-[#EC1E24]'
                                        }
                         `}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    onClick={navigateNext}
                                    disabled={isEnd}
                                    className={`
                                  w-6 h-6
                             md:w-8 md:h-8  rounded-full flex items-center justify-center 
                             transition-all duration-200 flex-shrink-0
                             ${isEnd
                                            ? 'bg-gray-100 border border-gray-300 cursor-not-allowed text-gray-400 opacity-60'
                                            : 'bg-white border border-gray-300 hover:border-[#EC1E24] hover:text-[#EC1E24] cursor-pointer text-gray-500'
                                        }
                         `}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Swiper Carousel */}
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, A11y]}
                        spaceBetween={30}
                        slidesPerView={1}
                        // Initialize Swiper and update state
                        onSwiper={(swiper) => {
                            swiperRef.current = { swiper };
                            updateProgress(swiper);
                        }}
                        // Update state on slide change
                        onSlideChange={updateProgress}

                        // Responsive breakpoints for card display
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}
                        className="mySwiper"
                    >
                        {helpCards && helpCards?.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="px-2 py-4">
                                    <div
                                        className="help-card w-full h-[190px] lg:h-[263px] border border-[#CECECE] p-4 
        flex flex-row lg:flex-col items-center lg:items-start justify-between 
        cursor-pointer group relative overflow-visible"
                                        onClick={() => handleAction(item)}
                                        onKeyDown={(e) => handleKeyDown(e, item)}
                                        tabIndex={0}
                                        role="button"
                                        aria-label={`${item.title} - ${item.description}`}
                                    >

                                        {/* Image */}
                                        <div className="flex justify-center items-center lg:justify-start mb-0 lg:mb-2 w-[40%] lg:w-full">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-contain  lg:h-[121px] lg:w-[121px] transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Text */}
                                        <div className="text-left w-[60%] lg:w-full pl-3 lg:pl-0">
                                            <h2 className="font-semibold text-[14px] leading-5 mb-2 lg:text-[18px] 
          lg:leading-6 text-[#282529] lg:mb-3 transition-colors duration-300 group-hover:text-[#EC1E24]">
                                                {item.title}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}


                    </Swiper>


                    <div>
                        <h2 className="text-[26px] font-bold mb-4 text-[#282529] font-poppins">
                            Rankings of NMIMS CDOE
                        </h2>

                        <p className="text-[16.5px] font-medium text-[#363535] font-poppins">
                            <strong>NMIMS CDOE</strong> has earned several prestigious rankings and awards that
                            highlight its commitment to delivering quality online education across the globe.
                            Below is an overview of the key achievements:
                        </p>

                        <ul className="list-none space-y-5 lg:space-y-2 pt-4">
                            {[
                                "NIRF Ranking:#21 under Management Category.",
                                "NAAC Accreditation:A+ Grade.",
                                "Excellence in Distance Learning:#6 in India by DNA Indus Learning Survey.",
                                "Recognition from UGC:Category 1 Autonomy from UGC.",
                                "Education Innovation Awards 2022:Best University with an Online Degree by Entrepreneur India.",
                                "World Education Congress 2021:Multiple Awards for Excellence in Online Education.",
                            ].map((item, index) => {
                                const [title, desc] = item.split(":");
                                return (
                                    <li
                                        key={index}
                                        className="flex items-start text-[#363535] text-[16px] font-poppins gap-2"
                                    >
                                        <Image src={RankingIcon} alt="ranking" width={18} height={18} />

                                        <div className="w-[90%]">
                                            <strong>{title}</strong>{" "}
                                            {desc.includes("#21") && (
                                                <span className="font-bold bg-[#aeefa5] px-2 rounded-xl mx-2">#21</span>
                                            )}
                                            {desc.includes("A+") && (
                                                <span className="font-bold bg-[#aeefa5] px-2 rounded-xl mx-2">A+</span>
                                            )}
                                            {desc.includes("#6") && (
                                                <span className="font-bold bg-[#aeefa5] px-2 rounded-xl mx-2">#6</span>
                                            )}
                                            {desc.replace("#21", "").replace("A+", "").replace("#6", "")}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Eligibility Section */}
                    <div className="mt-12">
                        <h2 className="text-[26px] font-bold mb-4 text-[#282529] font-poppins">
                            Eligibility Criteria : NMIMS Online MBA in Marketing Management
                        </h2>

                        <p className="text-[16px] font-poppins font-medium mb-4 text-[#363535]">
                            To apply for the Online MBA in Marketing Management course with NMIMS CDOE, you need
                            to meet the following requirements:
                        </p>

                        <div className="border border-[#D8D8D8] bg-[#FCF0EE] rounded-[10px]">
                            {/* Tabs */}
                            <div className="flex w-full">
                                <button
                                    onClick={() => setActiveTab("indian")}
                                    className={`w-1/2 h-[40px] text-[12px] sm:text-[16.5px] font-poppins flex items-center justify-center
                ${activeTab === "indian"
                                            ? "font-bold bg-[#FCF0EE]"
                                            : "font-medium bg-white"
                                        }`}
                                >
                                    Indian Students
                                </button>

                                <button
                                    onClick={() => setActiveTab("nri")}
                                    className={`w-1/2 h-[40px] text-[12px] sm:text-[16.5px] font-poppins flex items-center justify-center
                ${activeTab === "nri"
                                            ? "font-bold bg-[#FCF0EE]"
                                            : "font-medium bg-white"
                                        }`}
                                    style={activeTab === "nri" ? { borderBottomLeftRadius: "30px" } : {}}
                                >
                                    NRI & Foreign Students
                                </button>
                            </div>

                            {/* Indian Students */}
                            {activeTab === "indian" && (
                                <div className="grid md:grid-cols-3 bg-white shadow rounded-lg m-4">
                                    {[
                                        {
                                            title: "Educational Qualification",
                                            desc: "You must have at least a Bachelor's degree (10+2+3 pattern) in any discipline from a recognised university.",
                                            icon: EduIcon,
                                        },
                                        {
                                            title: "Grades",
                                            desc: "You must have achieved at least 50% marks in your graduation.",
                                            note:
                                                "*If you belong to the SC/ST/OBC/PwD categories, a minimum of 45% aggregate is required in your undergraduate.",
                                            icon: GradeIcon,
                                        },
                                        {
                                            title: "Work Experience",
                                            desc: "Work experience is not mandatory but gives you an advantage in learning.",
                                            icon: WorkIcon,
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-4 border-b md:border-r border-[#FCF0EE] p-4"
                                        >
                                            <div className="w-[34px] h-[34px] rounded-full bg-[#FCF0EE] flex items-center justify-center">
                                                <Image src={item.icon} alt="icon" width={18} height={18} />
                                            </div>

                                            <div className="w-[80%]">
                                                <h3 className="text-[#282529] font-semibold text-[16px]">
                                                    {item.title}
                                                </h3>
                                                <p className="text-[#363535] text-[14px] font-medium">
                                                    {item.desc}
                                                </p>
                                                {item.note && (
                                                    <p className="text-[10px] text-[#363535] font-light mt-1">
                                                        {item.note}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* NRI Students */}
                            {activeTab === "nri" && (
                                <div className="grid md:grid-cols-3 bg-white shadow rounded-lg m-4">
                                    {[
                                        {
                                            title: "Educational Qualification",
                                            desc: "Qualifications must be recognized by the Association of Indian Universities (AIU).",
                                            icon: EduIcon,
                                        },
                                        {
                                            title: "Grades",
                                            desc: "Minimum equivalent to 50% marks in Indian grading system.",
                                            note:
                                                "*For reserved categories, minimum equivalent to 45% aggregate.",
                                            icon: GradeIcon,
                                        },
                                        {
                                            title: "Additional Requirements",
                                            desc: "Students must submit equivalence certificate and visa/passport.",
                                            icon: WorkIcon,
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start space-x-4 border-b md:border-r border-[#FCF0EE] p-4"
                                        >
                                            <div className="w-[34px] h-[34px] rounded-full bg-[#FCF0EE] flex items-center justify-center">
                                                <Image src={item.icon} alt="icon" width={18} height={18} />
                                            </div>

                                            <div className="w-[80%]">
                                                <h3 className="text-[#282529] font-semibold text-[16px]">
                                                    {item.title}
                                                </h3>
                                                <p className="text-[#363535] text-[14px] font-medium">
                                                    {item.desc}
                                                </p>
                                                {item.note && (
                                                    <p className="text-[10px] text-[#363535] font-light mt-1">
                                                        {item.note}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>


                    <section className="w-full xl:w-[860px] px-8 py-8 hidden lg:block">
                        <div className="mb-8">
                            <h2 className="text-[28px] font-semibold text-[#282529] font-poppins mb-4">
                                NMIMS CDOE Advantages
                            </h2>
                            <p className="text-[16px] text-[#363535] font-poppins">
                                The NMIMS CDOE offers a variety of advantages and benefits, helping
                                students transform their lives and careers. These advantages are:
                            </p>
                        </div>

                        <div className="overflow-hidden">
                            <div className="flex flex-wrap">
                                {/* Header */}
                                <div className="bg-[#ec1e24] text-white p-4 font-poppins font-semibold text-[17px] border-r-2 border-[#f47c80] h-[65px] flex items-center w-5/12 sm:w-4/12">
                                    Advantages
                                </div>
                                <div className="bg-[#ec1e24] text-white p-4 font-poppins font-semibold text-[16px] h-[65px] flex items-center w-7/12 sm:w-8/12">
                                    Description
                                </div>

                                {/* Rows */}
                                {advantages.map((advantage, index) => (
                                    <div key={index} className="flex w-full">
                                        <div className="bg-white border-b-2 border-l-2 border-r-2 border-[#f47c80] p-4 font-poppins flex flex-col justify-center w-5/12 sm:w-4/12">
                                            <h3 className="text-[17px] text-[#282529] mb-2">
                                                {advantage.title}
                                            </h3>
                                            {advantage.subtitle && (
                                                <p className="text-[17px] text-[#666]">
                                                    {advantage.subtitle}
                                                </p>
                                            )}
                                        </div>

                                        <div className="bg-white border-b-2 border-r-2 border-[#f47c80] p-4 font-poppins w-7/12 sm:w-8/12">
                                            <div
                                                className="text-[17px] text-[#363535] leading-relaxed"
                                                dangerouslySetInnerHTML={{
                                                    __html: advantage.description,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <Facts />
                    <section className="w-[860px] px-4 lg:px-8 py-8 ">
                        <div className="mb-8">
                            <h2 className="font-poppins font-semibold text-[28px] leading-[42px] text-[#282529] mb-4">
                                NMIMS Online MBA Financial Aid
                            </h2>
                            <p className="font-poppins text-[17px] leading-[25px] text-[#282529]">
                                The University proudly extends special incentives specifically
                                designed for the armed forces and Defense Personnel, as well as their
                                immediate family members. These incentives include a generous 20%
                                concession on the overall program fee, making higher education more
                                accessible and affordable for those who serve and protect our
                                nation.
                            </p>
                        </div>

                        <div className="bg-white border-[2px] border-[#ec1e24] overflow-hidden">

                            {/* Header */}
                            <div className="bg-[#ec1e24] text-white text-center py-3 h-[65px] flex items-center justify-center">
                                <h3 className="font-poppins font-semibold text-[17px]">
                                    NMIMS Online University Loan Facilities
                                </h3>
                            </div>


                            <table className="min-w-full border-[2px] border-[#ec1e24] text-center">
                                {/* Table Head */}
                                <thead className="bg-[#ec1e24] text-white">
                                    <tr>
                                        {["Total Fees", "Loan Amount", "Tenure", "Interest", "Monthly EMI"].map((label, i) => (
                                            <th
                                                key={i}
                                                className="px-4 py-4 border-r border-[#f47c80] last:border-r-0 text-[17px] font-poppins font-semibold"
                                            >
                                                {label}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody>
                                    {[
                                        { name: "Online MBA", fees: "₹1,00,000", loan: "₹1,14,000", tenure: "20 Months", interest: "0%", emi: "₹5,700" },
                                        { name: "Online MCA", fees: "₹1,00,000", loan: "₹1,14,000", tenure: "20 Months", interest: "0%", emi: "₹5,700" },
                                        { name: "Online BBA", fees: "₹1,05,000", loan: "₹1,26,000", tenure: "20 Months", interest: "0%", emi: "₹6,300" },
                                        { name: "Online BCA", fees: "₹1,05,000", loan: "₹1,26,000", tenure: "20 Months", interest: "0%", emi: "₹6,300" },
                                    ].map((course, index) => (
                                        <React.Fragment key={index}>
                                            {/* Course Title Row */}
                                            <tr className="bg-[#f9f1f1]">
                                                <td colSpan={5} className="py-3 font-poppins font-semibold text-[17px] border-b border-[#ec1e24]">
                                                    {course.name}
                                                </td>
                                            </tr>

                                            {/* Course Data Row */}
                                            <tr className="text-[16px] text-[#282529]">
                                                {[course.fees, course.loan, course.tenure, course.interest, course.emi].map((value, i) => (
                                                    <td key={i} className="px-4 py-3 border-r border-b border-[#ec1e24] last:border-r-0">
                                                        {value}
                                                    </td>
                                                ))}
                                            </tr>
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </section>
                    <UniversityCampusCarousel />
                    <PlacementPartners />
                    <CareerServices />
                    <StepsSection />
                </div>
            </div>
        </AdminLayout>
    </>);
}

export default Details;