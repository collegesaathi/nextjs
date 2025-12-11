import ExpertCard from "../../common/ExpertCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import imageUrl from "../assets/home/person.png"

const expertsData = [
    // Expert Group 1 (Slide 1)
    { name: "Anil Kamboj", role: "Senior Specialist", quote: "As a technical professional with more than 15 years of experience in the WASH sector...", imageUrl: imageUrl?.src, isSenior: true },
    { name: "Usha Gori", role: "Senior Specialist", quote: "As a technical professional with more than 15 years of experience in the WASH sector, I was founded to enhance my skills....", imageUrl: "/images/about/industryexpert.png", isSenior: true },
    { name: "Sunete Gupta", role: "US Tax Senior", quote: "As a technical professional with more than 15 years of experience in the WASH sector, I was founded to enhance my skills....", imageUrl: "/images/about/industryexpert1.png", isSenior: false },
    { name: "Kuldeep Singh Kanyal", role: "Associate Manager", quote: "As a technical professional with more than 15 years of experience in the WASH sector, I was founded to enhance my skills....", imageUrl: imageUrl?.src, isSenior: false },
    // Expert Group 2 (Slide 2)
    { name: "Rajesh Kumar", role: "Project Manager", quote: "As a technical professional with more than 15 years of experience in the WASH sector, I was founded to enhance my skills....", imageUrl: "/images/about/industryexpert.png", isSenior: true },
    { name: "Priya Sharma", role: "Marketing Head", quote: "As a technical professional with more than 15 years of experience in the WASH sector, I was founded to enhance my skills....", imageUrl: "/images/about/industryexpert1.png", isSenior: false },
    { name: "Aisha Khan", role: "HR Business Partner", quote: "As a technical professional with more than 15 years of experience in the WASH sector, I was founded to enhance my skills....", imageUrl: "/images/about/industryexpert.png", isSenior: false },
    { name: "Vikram Singh", role: "Operations Lead", quote: "As a technical professional with more than 15 years of experience in the WASH sector, I was founded to enhance my skills....", imageUrl: "/images/about/industryexpert1.png", isSenior: false },
];

const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
    }
    return result;
};

const expertSlides = chunkArray(expertsData, 4);

const IndustryExperts = () => {
    return (
        <div className="py-4 md:py-8">
            <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px] px-4">

                {/* 
                   RESPONSIVE BOX CONTAINER:
                   - Reduced border on mobile (4px) vs desktop (10px)
                   - Adjusted padding (p-4) for mobile vs (px-14) for desktop
                   - Adjusted Border Radius 
                */}
                <div className="p-4 sm:p-6 md:py-8 md:px-8 bg-[#F9FAFB] border-[4px] md:border-[10px] border-[#DFDFDF] rounded-[20px] md:rounded-[31px] relative">

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination-global',
                            bulletClass: 'swiper-pagination-bullet !bg-gray-300 !w-2 !h-2 md:!w-3 md:!h-3 !opacity-100 rounded-full mx-1 inline-block transition-all duration-300 cursor-pointer',
                            bulletActiveClass: '!bg-red-600 !w-2 !h-2 md:!w-3 md:!h-3 !rounded-full',
                        }}
                        className="pb-2 md:pb-4"
                    >
                        {expertSlides.map((slideExperts, index) => {
                            const leftColumnExperts = [slideExperts[0], slideExperts[1]];
                            const rightColumnExperts = [slideExperts[2], slideExperts[3]];
                            return (
                                <SwiperSlide key={index}>
                                    {/* 
                                       RESPONSIVE GRID:
                                       - grid-cols-1 for Mobile (Stacking)
                                       - lg:grid-cols-2 for Desktop (Side by Side)
                                       - Removed 'px-8' on mobile to use full width
                                    */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-12 lg:gap-y-6 font-poppins px-0 md:px-8 pb-4">
                                        
                                        {/* LEFT COLUMN */}
                                        <div className="space-y-6">
                                            {/* Responsive Title: Smaller text & centered on mobile */}
                                            <h2 className="text-2xl md:text-[32px] font-[600] text-gray-800 w-full lg:max-w-[300px] mb-4 md:mb-8 text-center lg:text-left leading-tight">
                                                Insights from the{' '}
                                                <span className="text-red-500">Industry experts</span>
                                            </h2>
                                            
                                            {leftColumnExperts.map((expert) => expert ? (
                                                <ExpertCard key={expert.name} {...expert} />
                                            ) : null)}
                                        </div>

                                        {/* RIGHT COLUMN */}
                                        <div className="flex flex-col space-y-6">
                                            {rightColumnExperts.map((expert, idx) => expert ? (
                                                <div key={expert.name}>
                                                    <ExpertCard {...expert} />
                                                </div>
                                            ) : null)}

                                            {/* Responsive Button: Smaller text & padding on mobile */}
                                            <button className="w-full mt-2 md:mt-6 font-poppins bg-red-600 text-white font-[400] text-lg md:text-[24px] py-3 md:py-4 px-6 rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 shadow-md">
                                                Unlock expert tips and insights!
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Pagination Dots */}
                    <div className="swiper-pagination-global flex justify-center items-center mt-4 md:mt-6 w-full gap-2"></div>

                </div>
            </div>
        </div>
    );
};

export default IndustryExperts;