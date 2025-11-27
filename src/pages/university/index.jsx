'use client';

import { useState, useEffect, useMemo } from 'react';
import UniversityCard from '../components/UniversityCard';
import ClikcPickCard from "../components/ClickPickCard";
import BudgetCard from '../components/BudgetFilter';
import ApprovalCard from '../components/ApprovalCard';
// import { useFilterStore } from '@/store/filterStore';
import { Brush, Search } from 'lucide-react';
import CourseFilters from '../components/CourseFilter';
import GlobalButton from '../common/GlobalButton';
import Layout from "../components/Layout";

// Responsive hook replacement
const useResponsive = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 768);
            setIsTablet(width >= 768 && width < 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return { isMobile, isTablet };
};

export default function UniversityGrid() {

    const allUniversityCardsData = [
        {
            universityName: "Manipal Online University",
            courses: ["Operations", "MS.c"],
            rating: "4.6/5",
            reviews: 178,
            approvals: "AICTE | NAAC | NBA | QS | UGC",
            features: ["No-Cost EMI Available", "Flexible Payment Options"],
            imageUrl: "/images/cambridge.png",
            logoUrl: "/logo/Manipal.svg",
            tag: { text: "Trending" },
            budget: 10000,
            admissionClosing: "29 JULY",
            category: "UG Courses",
        },
        {
            universityName: "Jain Online University",
            courses: ["Operations", "MS.c"],
            rating: "4.5/5",
            reviews: 200,
            approvals: "UGC | DEB",
            features: ["Flexible Payment Options"],
            imageUrl: "/images/uni.png",
            logoUrl: "/logo/Manipal.svg",
            tag: { text: "Top Rated by Students" },
            budget: 10000,
            admissionClosing: "29 JULY",
            category: "UG Courses",
        },
        {
            universityName: "Amity Online University",
            courses: ["Operations", "MS.c"],
            rating: "4.7/5",
            reviews: 150,
            approvals: "AICTE | NIRF",
            features: ["No-Cost EMI Available"],
            imageUrl: "/images/cambridge.png",
            logoUrl: "/logo/Manipal.svg",
            budget: 10000,
            admissionClosing: "29 JULY",
            category: "UG Courses",
        },
        {
            universityName: "Lovely Professional University",
            courses: ["Operations", "MS.c"],
            rating: "4.4/5",
            reviews: 180,
            approvals: "UGC | WES",
            features: ["Scholarship Available"],
            imageUrl: "/images/uni.png",
            logoUrl: "/logo/Manipal.svg",
            tag: { text: "Popular Choice", varient: "orange" },
            budget: 10000,
            admissionClosing: "29 JULY",
            category: "PG Courses",
        },
        {
            universityName: "Symbiosis Online",
            courses: ["Operations", "MS.c"],
            rating: "4.8/5",
            reviews: 220,
            approvals: "NAAC | DEB",
            features: ["Guaranteed Placement Assistance"],
            imageUrl: "/images/cambridge.png",
            logoUrl: "/logo/Manipal.svg",
            budget: 10000,
            admissionClosing: "29 JULY",
            category: "PG Courses",
        },
        {
            universityName: "IGNOU Online",
            courses: ["Operations", "MS.c"],
            rating: "4.3/5",
            reviews: 300,
            budget: 10000,
            approvals: "UGC | AICTE",
            features: ["Government Approved"],
            imageUrl: "/images/uni.png",
            logoUrl: "/logo/Manipal.svg",
            category: "PG Courses",
            admissionClosing: "29 JULY",
        },
        {
            universityName: "Bharati Vidyapeeth",
            courses: ["Operations", "Leadership"],
            rating: "4.2/5",
            reviews: 160,
            budget: 700000,
            approvals: "NIRF | NAAC",
            features: ["Modern Curriculum"],
            imageUrl: "/images/cambridge.png",
            logoUrl: "/logo/Manipal.svg",
            tag: { text: "New Admission" },
            admissionClosing: "29 JULY",
            category: "PG Courses",
        },
        {
            universityName: "Sikkim Manipal University",
            rating: "4.0/5",
            courses: ["Operations", "MS.c"],
            reviews: 190,
            budget: 10000,
            approvals: "DEB | UGC",
            features: ["Weekend Classes"],
            imageUrl: "/images/uni.png",
            logoUrl: "/logo/Manipal.svg",
            admissionClosing: "29 JULY",
            category: "Finance",
        },
        {
            universityName: "Chandigarh University",
            courses: ["Operations", "MS.c"],
            rating: "4.9/5",
            reviews: 250,
            approvals: "AICTE | QS",
            budget: 10000,
            features: ["Industry Ready Courses"],
            imageUrl: "/images/cambridge.png",
            logoUrl: "/logo/Manipal.svg",
            tag: { text: "Highly Rated", varient: "orange" },
            admissionClosing: "29 JULY",
            category: "Finance",
        },
    ]
    const { isMobile, isTablet } = useResponsive();
    // const filterStore = useFilterStore();
    const filterStore = "";


    // Row count state
    const [rowCount, setRowCount] = useState(3);

    // Handle "View More"
    const handleViewMore = () => {
        filterStore.cardsToShow += 9;
    };

    // Watch responsiveness
    useEffect(() => {
        if (isMobile) setRowCount(1);
        else if (isTablet) setRowCount(2);
        else setRowCount(3);
    }, [isMobile, isTablet]);

    // Filtering Logic
    const filteredCards = useMemo(() => {
        const {
            activeFilter,
            activeSubFilter,
            selectedBudget,
            selectedApproval,
            searchQuery,
        } = filterStore;

        return allUniversityCardsData.filter((card) => {
            if (activeFilter && card.category !== activeFilter) return false;
            if (activeSubFilter && !card.courses?.includes(activeSubFilter))
                return false;

            if (selectedBudget) {
                const budget = card.budget || 0;
                switch (selectedBudget) {
                    case "Upto 1 Lakh":
                        if (budget > 100000) return false;
                        break;
                    case "1 Lakh - 2 Lakhs":
                        if (budget <= 100000 || budget > 200000) return false;
                        break;
                    case "2 Lakhs - 3 Lakhs":
                        if (budget <= 200000 || budget > 300000) return false;
                        break;
                    case "3 Lakhs+":
                        if (budget <= 300000) return false;
                        break;
                }
            }

            if (selectedApproval && !card.approvals?.includes(selectedApproval))
                return false;

            if (searchQuery && searchQuery.trim()) {
                const query = searchQuery.toLowerCase().trim();
                const titleMatch = card.universityName?.toLowerCase().includes(query);
                const categoryMatch = card.category?.toLowerCase().includes(query);
                const coursesMatch = card.features?.some((c) =>
                    c.toLowerCase().includes(query)
                );
                const tagMatch = card.tag?.text.toLowerCase().includes(query);
                const approvalMatch = card.approvals?.toLowerCase().includes(query);

                if (
                    !titleMatch &&
                    !categoryMatch &&
                    !coursesMatch &&
                    !tagMatch &&
                    !approvalMatch
                )
                    return false;
            }

            return true;
        });
    }, [filterStore]);

    // Helper function for conditional classes
    const clsx = (...classes) => {
        return classes.filter(Boolean).join(' ');
    };

    return (
        <Layout>
            <div className="py-4 md:py-8 ">
                <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4 flex flex-col lg:flex-row" >

                    {/* Sidebar */}
                    <div className="w-full lg:w-64 lg:block">
                        <div className="flex justify-between items-center mb-4 p-2">
                            <div
                                className={clsx(
                                    'flex justify-between items-center px-6',
                                    (isTablet || isMobile) && 'hidden'
                                )}
                            >
                                <h3 className="text-xl font-semibold text-neutral-800">Filters</h3>
                            </div>

                            {/* Toggle Filters */}
                            <GlobalButton
                                className={clsx(
                                    'lg:hidden text-neutral-600 text-sm flex items-center gap-2 transition-all duration-300 transform hover:scale-105 active:scale-95 px-4 py-2 rounded-lg border',
                                    filterStore.isOpen ? 'bg-[#EC1E24] text-white' : 'bg-white'
                                )}
                                onClick={() => filterStore.setIsOpen(!filterStore.isOpen)}
                            >
                                <Brush size={15} />
                                <span>Filters</span>
                            </GlobalButton>

                            {/* Clear All */}
                            <GlobalButton
                                className={clsx(
                                    'text-neutral-600 group text-xs flex items-center gap-2 hover:text-[#EC1E24] transition-all duration-300 transform hover:scale-105 active:scale-95 px-2 py-1 rounded-lg bg-white border',
                                    !filterStore.isOpen && (isTablet || isMobile) && 'hidden'
                                )}
                                onClick={() => {
                                    filterStore.handleClearAll();
                                    filterStore.setSearchQuery('');
                                }}
                            >
                                <img src="/icons/normal/clean.svg" className="group-hover:hidden" />
                                <img
                                    src="/icons/selected/clean.svg"
                                    className="group-hover:block hidden"
                                />
                                <span>Clear all</span>
                            </GlobalButton>

                            {/* Search */}
                            <div
                                className={clsx(
                                    'relative px-4 lg:px-3 flex-1',
                                    (isTablet || isMobile) && !filterStore.isOpen ? 'block' : 'hidden'
                                )}
                            >
                                <input
                                    type="text"
                                    placeholder="Search here...."
                                    value={filterStore.searchQuery}
                                    onChange={(e) => filterStore.setSearchQuery(e.target.value)}
                                    className="w-full px-4 py-1.5 text-sm border-2 border-neutral-400 rounded-full focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                                />
                                <Search
                                    size={18}
                                    className="absolute right-8 top-2 text-neutral-300 transition-all duration-300 hover:text-[#EC1E24] hover:scale-110"
                                />
                            </div>
                        </div>

                        {/* Filters Panel */}
                        <div
                            className={clsx((isMobile || isTablet) && !filterStore.isOpen && 'hidden')}
                        >
                            <CourseFilters />
                            <BudgetCard />
                            <ApprovalCard />
                            <ClikcPickCard />
                        </div>
                    </div>

                    {/* University Cards */}
                    <div className="mx-auto lg:mt-0 mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-6 lg:gap-6">
                            {filteredCards
                                .slice(0, filterStore.cardsToShow)
                                .map((card, index) => (
                                    <div key={index}>
                                        <UniversityCard {...card} index={index} />
                                        {(index + 1) % rowCount === 0 &&
                                            index !== filteredCards.slice(0, filterStore.cardsToShow).length - 1 && (
                                                <div className="col-span-full border-b border-gray-300 my-4" />
                                            )}
                                    </div>
                                ))}
                        </div>

                        {/* View More */}
                        {filterStore.cardsToShow < filteredCards.length && (
                            <div className="flex justify-center mt-12 mb-0">
                                <Button
                                    size="lg"
                                    onClick={handleViewMore}
                                    className="bg-[#EC1E24] text-white h-[29px] w-[130px] text-sm rounded-full hover:bg-[#EC1E24] transition font-semibold"
                                >
                                    View More &gt;
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </Layout>
    );
}