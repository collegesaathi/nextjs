"use client";

import { useState } from "react";
import BackNext from "../components/BackNext";

export default function TestBackNext() {
  const [progress, setProgress] = useState(0);

  const handlePrev = () => {
    setProgress((p) => Math.max(0, p - 25));
  };

  const handleNext = () => {
    setProgress((p) => Math.min(100, p + 25));
  };

  return (
    <div className="py-4 md:py-8 ">
    <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
      <BackNext
        title="New"
        midtitle="Heading"
        progress={progress}
        isBeginning={progress === 0}
        isEnd={progress === 100}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <div className="mt-10 text-lg">
        Current progress: <b>{progress}%</b>
      </div>
    </div>
    </div>
  );
}









// "use client";

// import { useState, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// import BackNext from "../components/BackNext";

// export default function TestBackNextWithCarousel() {
//   const swiperRef = useRef(null);

//   const items = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];

//   // controls for BackNext
//   const [progress, setProgress] = useState(0);
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   const handleSwiper = (swiper) => {
//     swiperRef.current = swiper;
//   };

//   const updateProgress = (swiper) => {
//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);

//     const total = items.length;
//     const visible = swiper.params.slidesPerView;
//     const currentEnd = swiper.activeIndex + visible;

//     let value = (currentEnd / total) * 100;
//     setProgress(Math.min(100, Math.max(0, value)));
//   };

//   const navigatePrev = () => {
//     swiperRef.current?.slidePrev();
//   };

//   const navigateNext = () => {
//     swiperRef.current?.slideNext();
//   };

//   return (
//     <div className="p-6">

//       <BackNext
//         title="Carousel"
//         midtitle="Testing"
//         progress={progress}
//         isBeginning={isBeginning}
//         isEnd={isEnd}
//         onPrev={navigatePrev}
//         onNext={navigateNext}
//       />

//       <Swiper
//         slidesPerView={3}
//         spaceBetween={20}
//         autoplay={{ delay: 2000 }}
//         modules={[Autoplay]}
//         onSwiper={handleSwiper}
//         onSlideChange={updateProgress}
//       >
//         {items.map((text, i) => (
//           <SwiperSlide key={i}>
//             <div className="p-10 bg-gray-200 rounded-lg text-center">
//               {text}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

