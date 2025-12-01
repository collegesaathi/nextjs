import ExpertCard from "../../common/ExpertCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import imageUrl from "../assets/home/person.png"
const expertsData = [
  // Expert Group 1 (Slide 1) - 4 Experts
  { name: "Anil Kamboj", role: "Senior Specialist", quote: "As a technical professional with more than 15 years of experience in the WASH sector, I was founded to enhance my skills...", imageUrl: imageUrl?.src, isSenior: true },
  { name: "Usha Gori", role: "Senior Specialist", quote: "As a technical professional with more than 15 years of experience in the WASH sector, I was founded to enhance my skills...", imageUrl: "/images/usha-gori.png", isSenior: true },
  { name: "Sunete Gupta", role: "US Tax Senior", quote: "As a technical professional with more than 15 years of experience in the WASH sector, I was founded to enhance my skills...", imageUrl: "/images/sunete-gupta.png", isSenior: false },
  { name: "Kuldeep Singh Kanyal", role: "Associate Manager", quote: "As a technical professional with more than 15 years of experience in the WASH sector, I was founded to enhance my skills...", imageUrl: "/images/kuldeep-kanyal.png", isSenior: false },
  // Expert Group 2 (Slide 2) - 4 Experts
  { name: "Rajesh Kumar", role: "Project Manager", quote: "My experience in large-scale infrastructure projects has taught me the importance of robust planning and agile execution...", imageUrl: "/images/rajesh-kumar.png", isSenior: true },
  { name: "Priya Sharma", role: "Marketing Head", quote: "Driving engagement and building strong brand narratives requires understanding market dynamics and consumer psychology...", imageUrl: "/images/priya-sharma.png", isSenior: false },
  { name: "Aisha Khan", role: "HR Business Partner", quote: "Fostering a positive work culture and ensuring employee growth are key to organizational success and retention...", imageUrl: "/images/aisha-khan.png", isSenior: false },
  { name: "Vikram Singh", role: "Operations Lead", quote: "Optimizing operational workflows and implementing lean methodologies have consistently delivered significant efficiency gains...", imageUrl: "/images/vikram-singh.png", isSenior: false },
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
    <div className="py-4 md:py-8 ">
      <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">

        <div className="p-4 md:p-8 bg-white border-[10px] border-[#DFDFDF] rounded-xl">
          {/* Header and Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Insights from the{' '}
            <span className="text-red-500">Industry experts</span>
          </h2>

          {/* Main Swiper Container */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={0} // Slides fill the space
            slidesPerView={1} // Only one slide (which is the entire grid) visible at a time
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-global', // Use the global pagination container
              bulletClass: 'swiper-pagination-bullet bg-gray-300 w-2 h-2 rounded-full mx-1 inline-block transition-all duration-300',
              bulletActiveClass: 'bg-red-600 !w-6',
            }}
            className="pb-10" 
          >
            {expertSlides.map((slideExperts, index) => {
              const leftColumnExperts = [slideExperts[0], slideExperts[1]];
              const rightColumnExperts = [slideExperts[2], slideExperts[3]];
              return (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 bg-white">
                    <div className="space-y-6">
                      {leftColumnExperts.map((expert) => expert ? (
                        <ExpertCard key={expert.name} {...expert} />
                      ) : null)}
                    </div>

                    <div className="flex flex-col space-y-6">
                      {rightColumnExperts.map((expert, idx) => expert ? (
                        <div
                          key={expert.name}
                          className={`${idx === 0 ? 'border-b border-gray-200 pb-6' : ''}`} // Re-adding the separator
                        >
                          <ExpertCard {...expert} />
                        </div>
                      ) : null)}

                      {/* Unlock Expert Tips Button (This moves with the slides) */}
                      <button className="w-full mt-6 bg-red-600 text-white font-bold text-lg py-4 px-6 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50">
                        Unlock expert tips and insights!
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

        </div>
      </div>

    </div>
  );
};

export default IndustryExperts;