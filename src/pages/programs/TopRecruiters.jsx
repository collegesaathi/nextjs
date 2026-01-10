import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid, A11y,Autoplay } from "swiper/modules";
import BackNext from "@/pages/components/BackNext";

// Import Swiper styles (Required for functionality)
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const TopRecruiters = () => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(33);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const recruitersJSON = {
    title: "Top Recruiters",
    description: "Pursuing an Online MBA can open your doors to multiple top companies that can help you start or reboot your career. The following top companies accept Online MBA students:",
    logos: [
      { id: 1, img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
      { id: 2, img: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
      { id: 3, img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Axis_Bank_logo.svg" },
      { id: 4, img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" },
      { id: 5, img: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs_logo.svg" },
      { id: 6, img: "https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Chase_Logo_2008-1-1.svg" },
      { id: 7, img: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Barclays_Logo.svg" },
      { id: 8, img: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Bajaj_Finserv_Logo.svg" },
      { id: 9, img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/HDFC_Bank_Logo.svg" },
      { id: 10, img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
      { id: 11, img: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
      { id: 12, img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Deloitte.svg" },
      { id: 13, img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" },
      { id: 14, img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg" },
      { id: 15, img: "https://upload.wikimedia.org/wikipedia/commons/0/01/PwC_Logo.svg" },
      { id: 16, img: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
      { id: 17, img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
      { id: 18, img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
         { id: 9, img: "https://upload.wikimedia.org/wikipedia/commons/1/1a/HDFC_Bank_Logo.svg" },
      { id: 10, img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
      { id: 11, img: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
      { id: 12, img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Deloitte.svg" },
      { id: 13, img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" },
      { id: 14, img: "https://upload.wikimedia.org/wikipedia/commons/9/9d/KPMG_logo.svg" },
      { id: 15, img: "https://upload.wikimedia.org/wikipedia/commons/0/01/PwC_Logo.svg" },
      { id: 16, img: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
      { id: 17, img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
      { id: 18, img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    ]
  };

  const updateStatus = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    
    // Logic for Top-Right Red Progress Bar
    const current = swiper.activeIndex + 1;
    const total = swiper.snapGrid.length;
    setProgress((current / total) * 100);
  };

  return (
    <section className="w-full  md:px-6 md:py-12 bg-white font-poppins">
      <div className="max-w-[1230px] mx-auto">
        
        <BackNext
          title={recruitersJSON.title}
          progress={progress}
          isBeginning={isBeginning}
          isEnd={isEnd}
          onPrev={() => swiperRef.current?.slidePrev()}
          onNext={() => swiperRef.current?.slideNext()}
        />

        <p className="text-[#363535] text-[15px] md:text-[16px] mb-8 leading-relaxed max-w-[1100px]">
          {recruitersJSON.description}
        </p>

        {/* Outer Grey Container */}
        <div className="  relative">

            <div className="bg-[#F7F6F6] rounded-[17px] p-2 md:p-6 ">
          
       <Swiper
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  onSlideChange={updateStatus}
  modules={[Grid, Pagination, Navigation, A11y, Autoplay]}
  slidesPerView={3}
  slidesPerGroup={3}
  grid={{ rows: 2, }}
  spaceBetween={15}

  autoplay={{
    delay: 2000,              // 2 sec me auto scroll
    disableOnInteraction: false,
    pauseOnMouseEnter: true,  // hover par ruk jaye
  }}

  loop={true}                 // continuous scroll
  pagination={{
    el: ".recruiters-pagination",
    clickable: true,
  }}
  breakpoints={{
    640: { slidesPerView: 8, slidesPerGroup: 8 },
    1024: { slidesPerView: 8, slidesPerGroup: 8 },
  }}
  className="recruiters-swiper-container"
>
  {recruitersJSON.logos.map((logo) => (
    <SwiperSlide key={logo.id} className="!h-auto">
      <div className="bg-white rounded-[15px] h-[80px] md:h-[110px] flex items-center justify-center p-4 shadow-sm">
        <img
          src={logo.img}
          alt="logo"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
          </div>

          {/* Navigation Dots (Centered at bottom) */}
          <div className="recruiters-pagination flex justify-center items-center mt-8"></div>
          
        </div>
      </div>
    </section>
  );
};

export default TopRecruiters;