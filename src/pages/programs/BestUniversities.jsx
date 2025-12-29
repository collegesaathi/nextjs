import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const BestUniversities = () => {
  const universityData = [
    {
      id: 1,
      campusImg: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
      logo: "/images/programs/NMIMS.png",
      name: "Manipal Online University",
      title: "Online MBA from Manipal Online University",
      rating: "4.5",
      reviews: "5k reviews"
    },
    {
      id: 2,
      campusImg: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1000&auto=format&fit=crop",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Amity_University_logo.png/220px-Amity_University_logo.png",
      name: "Amity University Online",
      title: "Online MBA from Amity Online University",
      rating: "4.5",
      reviews: "5k reviews"
    },
    {
      id: 3,
      campusImg: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1000&auto=format&fit=crop",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/NMIMS_logo.png/220px-NMIMS_logo.png",
      name: "NMIMS Online",
      title: "Online MBA from NMIMS Online University",
      rating: "4.5",
      reviews: "5k reviews"
    },
      {
      id: 2,
      campusImg: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1000&auto=format&fit=crop",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Amity_University_logo.png/220px-Amity_University_logo.png",
      name: "Amity University Online",
      title: "Online MBA from Amity Online University",
      rating: "4.5",
      reviews: "5k reviews"
    },
    {
      id: 3,
      campusImg: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1000&auto=format&fit=crop",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/NMIMS_logo.png/220px-NMIMS_logo.png",
      name: "NMIMS Online",
      title: "Online MBA from NMIMS Online University",
      rating: "4.5",
      reviews: "5k reviews"
    },
    // Add more items if needed for the slider
  ];

  return (
    <section className="bg-[linear-gradient(168.35deg,_#FFFFFF_-6.26%,_#FFF4E6_137.86%)] py-2 md:py-16 px-2 md:px-6 font-poppins">
      <div className="max-w-[1230px] mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-center text-[20px] md:text-[28px] font-[600] text-[#282529] mb-12 leading-[28px]">
          Best UGC-Approved Online Universities for Online MBA
        </h2>

        {/* Slider Container */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: '.university-pagination',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {universityData.map((uni) => (
            <SwiperSlide key={uni.id}>
              <div className="bg-white rounded-[16px] overflow-hidden shadow-sm border border-[#CECECE] h-full flex flex-col">
                
                {/* Campus Image */}
                <div className="h-[250px] overflow-hidden p-2">
                  <img 
                    src={uni.campusImg} 
                    alt={uni.name} 
                    className="w-full h-full object-cover rounded-[15px]" 
                  />
                </div>

                {/* Content Container */}
                <div className="p-5 flex flex-col flex-grow">
                  
                  {/* Logo & University Name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-[80px] h-[35px] border border-gray-200 rounded-md flex items-center justify-center p-1">
                      <img src={uni.logo} alt="logo" className="max-h-full max-w-full object-contain" />
                    </div>
                    <span className="text-[14px] text-[#282529CC]/80 font-medium">
                      {uni.name}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-[16px] font-[500] text-[#282529] mb-4 leading-[16px]">
                    {uni.title}
                  </h3>

                  {/* Rating Section */}
                  <div className="mt-auto flex items-center gap-2">
                    <Star size={20} fill="#F6AD55" className="text-[#F6AD55]" />
                    <span className="text-[16px] font-[600] text-[#282529]">
                      {uni.rating}
                    </span>
                    <span className="text-[14px] text-[#282529AD]">
                      • {uni.reviews}
                    </span>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Dots (Centered at bottom) */}
        <div className="university-pagination flex justify-center items-center mt-4 md:mt-8"></div>

      </div>
    </section>
  );
};

export default BestUniversities;