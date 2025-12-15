'use client';

import { useState, useEffect, useMemo } from 'react';
import UniversityCard from '../components/UniversityCard';
import ClikcPickCard from "../components/ClickPickCard";
import BudgetCard from '../components/BudgetFilter';
import ApprovalCard from '../components/ApprovalCard';
import { Brush, Search } from 'lucide-react';
import CourseFilters from '../components/CourseFilter';
// import GlobalButton from '../../common/GlobalButton';
import Layout from "../components/Layout";
import { useFilterStore } from '@/store/filterStore';
import Listing from "@/pages/api/Listing";
import { Loader } from '@/common/Loader';

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


    const { isMobile, isTablet } = useResponsive();
    // const filterStore = useFilterStore();
    const filterStore = useFilterStore();


    // Row count state
    const [rowCount, setRowCount] = useState(3);
    const [universities, setUniversities] = useState([]);
    const [loadingUniversities, setLoadingUniversities] = useState(true);
    const [loading, setLoading] = useState(true);

    // Handle "View More"
    const handleViewMore = () => {
        filterStore.cardsToShow += 9;
    };



    useEffect(() => {
        const fetchUniversities = async () => {
            try {
                const main = new Listing();
                const response = await main.Univeristy();

                const universities = response?.data?.data?.universities || [];

                setUniversities(universities);

            } catch (error) {
                console.error("Error fetching universities:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUniversities();
    }, []);




    // Watch responsiveness
    useEffect(() => {
        if (isMobile) setRowCount(1);
        else if (isTablet) setRowCount(2);
        else setRowCount(3);
    }, [isMobile, isTablet]);

    const allUniversityCardsData = universities;

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




            // COURSE MAIN FILTER (UG, PG, etc.)
            if (filterStore.activeCourseFilter) {
                if (card.category !== filterStore.activeCourseFilter) return false;
            }

            // COURSE SUB FILTER (BBA, MBA, BCA...)
            if (filterStore.activeCourseSubFilter) {
                if (!card.courses?.includes(filterStore.activeCourseSubFilter)) return false;
            }

            // SPECIALIZATION FILTER
            if (filterStore.activeSpecialization) {
                const specMatch =
                    card.features?.some(f =>
                        f.toLowerCase().includes(filterStore.activeSpecialization.toLowerCase())
                    ) ||
                    card.courses?.some(c =>
                        c.toLowerCase().includes(filterStore.activeSpecialization.toLowerCase())
                    );

                if (!specMatch) return false;
            }

            // SELECTED COURSE ITEM (same as sub filter but required for your view navigation)
            if (filterStore.selectedCourseItem) {
                if (!card.courses?.includes(filterStore.selectedCourseItem)) return false;
            }

            // COURSE SEARCH BAR FILTER
            if (filterStore.courseSearchQuery && filterStore.courseSearchQuery.trim()) {
                const query = filterStore.courseSearchQuery.toLowerCase();

                const match =
                    card.universityName?.toLowerCase().includes(query) ||
                    card.category?.toLowerCase().includes(query) ||
                    card.courses?.some(c => c.toLowerCase().includes(query)) ||
                    card.features?.some(f => f.toLowerCase().includes(query));

                if (!match) return false;
            }



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
            <div className="py-4 md:py-8 md:mt-20 lg:mt-30 ">
                <div className="mx-auto container sm:container md:container xl:max-w-[1230px]  px-4  " >
                    <div className="flex flex-wrap lg:flex-nowrap  justify-start items-start gap-6 ">

                        <div className="w-full lg:w-1/4">

                            <div className="flex gap-2 justify-between  items-center mb-4 p-2">
                                <div
                                    className={clsx(
                                        'flex  justify-between items-center px-6',
                                        (isTablet || isMobile) && 'hidden'
                                    )}
                                >
                                    <h3 className="text-xl font-semibold text-neutral-800">Filters</h3>
                                </div>

                                {/* Toggle Filters */}
                                <button
                                    className={clsx(
                                        'flex lg:hidden text-neutral-600 text-sm items-center gap-2 border px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#EC1E24] hover:border-[#EC1E24] hover:scale-105',
                                        filterStore.isOpen ? 'bg-[#EC1E24] text-white' : 'bg-white'
                                    )}
                                    onClick={() => filterStore.toggleIsOpen()}
                                >
                                    <Brush size={15} />
                                    <span>Filters</span>
                                </button>

                                {filterStore?.isOpen &&
                                    <button
                                        className={clsx(
                                            'text-[black] text-xs flex items-center gap-2 px-2 py-1 rounded-lg border hover:text-[#EC1E24] hover:border-[#EC1E24] transition-all',
                                            !filterStore.isOpen && (isTablet || isMobile) && 'hidden'
                                        )}
                                        onClick={() => {
                                            filterStore.handleClearAll();
                                            filterStore.setSearchQuery('');
                                            filterStore.setCurrentCourseView("main");
                                        }}
                                    >
                                        <img src="/icons/normal/clean.svg" className="group-hover:hidden block" />
                                        <img src="https://collegesathi.co.in/icons/selected/clean.svg" className="group-hover:block hidden" />
                                        <span>Clear all</span>
                                    </button>}

                                {/* Clear All */}
                                <button
                                    className={clsx(
                                        '  group hidden lg:block text-[black] text-xs flex items-center justify-center gap-8 hover:text-[#EC1E24] transition-all duration-300 transform hover:scale-105 active:scale-95 px-2 py-1 rounded-lg border',
                                        !filterStore.isOpen && (isTablet || isMobile) && 'hidden'
                                    )}
                                    onClick={() => {
                                        filterStore.handleClearAll()
                                        filterStore.setSearchQuery('');
                                        filterStore.setCurrentCourseView("main");

                                    }}
                                >
                                    <div className='flex items-center justify-between gap-2'>
                                        <img src="/icons/normal/clean.svg" className="group-hover:hidden block" />
                                        <img
                                            src="https://collegesathi.co.in/icons/selected/clean.svg"
                                            className="group-hover:block hidden"
                                        />
                                        <span>Clear all</span>
                                    </div>

                                </button>


                                {/* Search */}
                                <div
                                    className={clsx(
                                        'relative  lg:px-3 flex justify-between ',
                                        (isTablet || isMobile) && !filterStore.isOpen ? 'block' : 'hidden'
                                    )}
                                >

                                    <div className='flex  border-2 border-neutral-400 items-center  rounded-full px-2'>
                                        <input
                                            type="text"
                                            placeholder="Search here...."
                                            value={filterStore.searchQuery}
                                            onChange={(e) => filterStore.setSearchQuery(e.target.value)}
                                            className="w-full px-4 py-1.5 text-xs lg:text-sm focus:outline-none focus:ring-2 focus:ring-[#EC1E24] focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                                        />
                                        <Search
                                            size={18}
                                            className="right-8 top-2 text-neutral-300 transition-all duration-300 hover:text-[#EC1E24] hover:scale-110"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* MOBILE SLIDE-IN FILTER DRAWER */}


                            {isMobile && filterStore.isOpen && (
                                <div
                                    onClick={() => filterStore.toggleIsOpen()}
                                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                                />
                            )}
                            <div
                                className={clsx(
                                    "lg:block", // always visible in desktop
                                    isMobile &&
                                    "fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-xl p-5 transition-transform duration-300",
                                    isMobile && (filterStore.isOpen ? "translate-y-0" : "translate-y-full") // slide up & down
                                )}
                            >
                                {/* DRAWER HANDLE BAR (optional) */}
                                {isMobile && (
                                    <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>
                                )}

                                {/* FILTER CONTENT */}
                                <CourseFilters />
                                <BudgetCard />
                                <ApprovalCard />
                                <ClikcPickCard />
                            </div>


                        </div>
                        <div className="w-full lg:w-2/1">
                            {loading ? (
                                <div className='flex justify-center items-center content-center'>
                                    <Loader />
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-10  ">
                                    {

                                        universities?.map((card, index) => (
                                            <UniversityCard card={card} index={index} key={index} />
                                        ))
                                    }
                                </div>
                            )}


                            {/* View More */}
                            {filterStore.cardsToShow < filteredCards.length && (
                                <div className="flex justify-center mt-12 mb-0">
                                    <button
                                        size="lg"
                                        onClick={handleViewMore}
                                        className="bg-[#EC1E24] text-white h-[29px] w-[130px] text-sm rounded-full hover:bg-[#EC1E24] transition font-semibold"
                                    >
                                        View More &gt;
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
}

