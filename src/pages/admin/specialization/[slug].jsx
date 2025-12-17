import React from "react";
import AdminLayout from "../common/AdminLayout";
import Budget from "../../assets/home/Budget.png";
import Confusion from "../../assets/home/Confusion.png";
import EMIOptions from "../../assets/home/EMIOptions.png";
import Suggestions from "../../assets/home/Suggestions.png";
import Placements from "../../assets/home/Placements.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from "react";
import Heading from "@/common/Heading";
import Image from "next/image";
import Facts from "../../../commons/list/Facts";
import UniversityCampusCarousel from "@/pages/common/UniversityCampusCarousel";
import PlacementPartners from "@/pages/common/PlacementPartners";
import CareerServices from "@/pages/common/CareerServices";
import StepsSection from "@/commons/list/StepsSection";
import Approvals from "../../common/Approvals";
import Advantages from "@/commons/list/Advantages";
import Financial from "@/commons/list/Financial";
import Ranking from "@/commons/list/Rankings";
import CourseFess from "@/commons/list/CourseFees";
import Aboutdetails from "@/commons/list/Aboutdetails";
import Reviews from "@/pages/common/Reviews";
import Universities from "@/pages/common/Universities";
import SimilarUniversities from "@/pages/common/SimilarUniversities";
import FaqManager from "../FaqManager";
import FAQSection from "@/commons/list/FAQSection";
import ExaminationPattern from "@/commons/list/ExaminationPattern";
import SampleCertificate from "@/commons/list/SampleCertificate";
import CoursesSwiper from "@/pages/common/CoursesSwiper";
import Hero from "@/commons/list/Hero";
import UniversitySidebar from "@/pages/common/FrontendSidebar";
function Details() {

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
                    {/* <Approvals />  */}
                    <Hero />

                    <div className="w-full flex items-start pt-10 justify-center h-full relative flex-wrap">
                        {/* <div
                            className="w-full lg:w-4/12 bg-[#f9fafb] lg:shadow-[4px_4px_4px_rgba(0,0,0,0.06)] h-full overflow-y-auto justify-end flex lg:pr-4 relative animate-slide-fade-right animate-delay-200"
                        >
                            <UniversitySidebar />
                        </div>
                        <div className="w-full lg:w-8/12 h-full lg:h-[100vh] overflow-y-auto scs"> */}
                            <Aboutdetails />
                            <CourseFess />
                            <PlacementPartners />

                            <Ranking />
                            <CoursesSwiper />
                            <Advantages />
                            <Facts />
                            <SampleCertificate />
                            <ExaminationPattern />
                            <Financial />
                            <UniversityCampusCarousel />
                            <CareerServices />
                            <StepsSection />
                            <FAQSection />
                            <SimilarUniversities />
                            <Universities />
                            <Reviews />
                        {/* </div> */}

                    </div>
                </div>
            </div>
        </AdminLayout>
    </>);
}

export default Details;