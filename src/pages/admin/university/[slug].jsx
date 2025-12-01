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
import Approvals from "../../../components/Approvals";
import Advantages from "@/components/Advantages";
import Financial from "@/components/Financial";
import Ranking from "@/components/Rankings";
import CourseFess from "@/components/CourseFees";
import Aboutdetails from "@/components/Aboutdetails";
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

                    {/* Desktop Version */}
                    {/* Title */}
                    <Aboutdetails />

                    {/* Updated Fees */}
                    <CourseFess />


                    <Ranking />


                    <Approvals />
                    <Advantages />
                    <Facts />
                    <Financial />
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