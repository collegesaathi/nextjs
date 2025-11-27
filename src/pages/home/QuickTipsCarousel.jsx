'use client'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Group from "../asserts/home/calling.png"
import Heading from '../common/Heading'
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

export default function QuickTipsCarousel() {
  // Tip items data
  const tipItems = [
    {
      id: 1,
      title: 'Universities Online MBA',
      video: '/img/university-main/tip/1.mp4',
      poster: Group?.src,
      category: 'Education',
    },
    {
      id: 2,
      title: 'Top 5 Online MBA Universities',
      video: '/img/university-main/tip/2.mp4',
      poster: Group?.src,
      category: 'Rankings',
    },
    {
      id: 3,
      title: 'One Call To Your Future',
      video: '/img/university-main/tip/3.mp4',
      poster: Group?.src,
      category: 'Guidance',
    },
    {
      id: 4,
      title: "Career + Degree? It's Possible!",
      video: '/img/university-main/tip/4.mp4',
      poster: Group?.src,
      category: 'Career',
    },
    {
      id: 5,
      title: 'Women Are Taking Over',
      video: '/img/university-main/tip/5.mp4',
      poster: Group?.src,
      category: 'Empowerment',
    },
    {
      id: 6,
      title: 'Universities Online MBA',
      video: '/img/university-main/tip/1.mp4',
      poster: Group?.src,
      category: 'Education',
    },
    {
      id: 7,
      title: 'Top 5 Online MBA Universities',
      video: '/img/university-main/tip/2.mp4',
      poster: Group?.src,
      category: 'Rankings',
    },
    {
      id: 8,
      title: 'One Call To Your Future',
      video: '/img/university-main/tip/3.mp4',
      poster: Group?.src,
      category: 'Guidance',
    },
  ]

  // Swiper configuration
  const swiperRef = useRef(null)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(1024)
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false)

  const carouselBreakpoints = {
    320: { slidesPerView: 1, spaceBetween: 16 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 24 },
    1024: { slidesPerView: 5, spaceBetween: 24 },
  }

  // Window resize handler
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  // Lifecycle hooks
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      setWindowWidth(window.innerWidth)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  // Methods
  const onSwiper = (swiper) => {
    swiperRef.current = swiper
  }

  const onSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex)

    // Force update of middle slide detection
    setTimeout(() => {
      setWindowWidth(window.innerWidth)
    }, 50)
  }

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index)
    }
  }

  // Autoplay control methods
  const pauseAutoplay = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.pause()
      setIsAutoplayPaused(true)
    }
  }

  const resumeAutoplay = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.resume()
      setIsAutoplayPaused(false)
    }
  }

  // Video control methods
  const playVideo = (event) => {
    const video = event.target
    if (video && video.tagName === 'VIDEO') {
      video.play().catch(console.error)
    }
  }

  const pauseVideo = (event) => {
    const video = event.target
    if (video && video.tagName === 'VIDEO') {
      video.pause()
      video.currentTime = 0 // Reset to beginning
    }
  }
  const isMiddleSlide = (index) => {
    if (windowWidth >= 1024) {
      const visibleStartIndex = currentSlideIndex
      const middleOffset = 2
      const middleIndex = visibleStartIndex + middleOffset
      const normalizedIndex = middleIndex % tipItems.length
      const isActive = index === normalizedIndex
      return isActive
    } else if (windowWidth >= 768) {
      const visibleStartIndex = currentSlideIndex
      const middleOffset = 1
      const middleIndex = visibleStartIndex + middleOffset
      const normalizedIndex = middleIndex % tipItems.length
      const isActive = index === normalizedIndex
      return isActive
    } else {
      const isActive = index === currentSlideIndex || index === (currentSlideIndex + 1) % tipItems.length
      return isActive
    }
  }

  return (
    <>
      <div className="py-4 md:py-8 ">
        <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
          <div className="flex justify-between items-center mb-6">
            <Heading title={"Quick Tips & Insights"} />
          </div>


          <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-once="true"
          >

            {/* Custom Carousel */}
            <div
              className={`w-full mx-auto ${isAutoplayPaused ? 'carousel-paused' : ''}`}
              onMouseEnter={pauseAutoplay}
              onMouseLeave={resumeAutoplay}
            >
              {/* Swiper Container */}
              <Swiper
                spaceBetween={20}
                centeredSlides={false}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                modules={[Autoplay ,Pagination]}
                onSwiper={onSwiper}
                onSlideChange={onSlideChange}
                breakpoints={carouselBreakpoints}
                pagination={true} 
              >
                {tipItems.map((item, index) => (
                  <SwiperSlide key={item.id} className="pt-5 my-5">
                    <div
                      className={`
                      tip-card transition-all duration-300 cursor-pointer relative group
                      ${isMiddleSlide(index) ? 'active-slide transform -translate-y-[30px]' : ''}
                    `}
                    >
                      {/* Tip Video */}
                      <div className="relative">
                        <video
                          src={item.video}
                          poster={item.poster}
                          className="w-full h-auto transition-transform duration-300 relative z-10 rounded-lg"
                          muted
                          loop
                          preload="metadata"
                          onMouseEnter={playVideo}
                          onMouseLeave={pauseVideo}
                        >
                        </video>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination Dots */}
               {/* <div className="flex justify-center mt-8 space-x-2">
              {tipItems.map((item, index) => (
                <div
                  key={`dot-${index}`}
                  onClick={() => goToSlide(index)}
                  className={`
                    w-[9px] h-[9px] rounded-full cursor-pointer transition-all duration-300
                    ${currentSlideIndex === index ? 'bg-[#EC1E24]' : 'bg-[#DFDFDF]'}
                  `}
                ></div>
              ))}
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}