'use client'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Group from "../asserts/home/Group.png"


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

  const swiperBreakpoints = {
    320: { slidesPerView: 1.5, spaceBetween: 20, centeredSlides: true },
    640: { slidesPerView: 2, spaceBetween: 20, centeredSlides: true },
    768: { slidesPerView: 3, spaceBetween: 20, centeredSlides: true },
    1024: { slidesPerView: 5, spaceBetween: 20, centeredSlides: false },
    1280: { slidesPerView: 4.8, spaceBetween: 40, centeredSlides: false },
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

  // Check if slide is the middle/active slide
  const isMiddleSlide = (index) => {
    if (windowWidth >= 1024) {
      // Desktop: 5 items visible, middle item is at index 2 relative to current position
      const visibleStartIndex = currentSlideIndex
      const middleOffset = 2 // Middle of 5 items (0,1,2,3,4)
      const middleIndex = visibleStartIndex + middleOffset
      const normalizedIndex = middleIndex % tipItems.length
      const isActive = index === normalizedIndex
      return isActive
    } else if (windowWidth >= 768) {
      // Tablet: 3 items visible, middle item is at index 1 relative to current position
      const visibleStartIndex = currentSlideIndex
      const middleOffset = 1 // Middle of 3 items (0,1,2)
      const middleIndex = visibleStartIndex + middleOffset
      const normalizedIndex = middleIndex % tipItems.length
      const isActive = index === normalizedIndex
      return isActive
    } else {
      // Mobile: 1-2 items visible, active item is the current slide or next slide
      const isActive = index === currentSlideIndex || index === (currentSlideIndex + 1) % tipItems.length
      return isActive
    }
  }

  return (
    <>
      {/* Desktop Version */}
      <section className="py-16 hidden lg:block">
        <div
          className="mx-auto px-4"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-delay="200"
          data-aos-once="true"
        >
          {/* Custom Header */}
          <div className="text-center mb-12">
            <h2 className="font-poppins text-[28px] md:text-[32px] font-semibold text-[#1D1F2C] leading-tight">
              Quick Tips & <span className="text-[#EC1E24]">Insights</span>
            </h2>
          </div>

          {/* Custom Carousel */}
          <div 
            className={`w-full mx-auto ${isAutoplayPaused ? 'carousel-paused' : ''}`}
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
          >
            {/* Swiper Container */}
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              centeredSlides={false}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              modules={[Autoplay]}
              onSwiper={onSwiper}
              onSlideChange={onSlideChange}
              breakpoints={swiperBreakpoints}
            >
              {tipItems.map((item, index) => (
                <SwiperSlide key={item.id} className="pt-10 my-10">
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
                        Your browser does not support the video tag.
                      </video>

                      <div 
                        className={`relative top-[-20px] transition-opacity duration-300 ${
                          isMiddleSlide(index) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                      >
                        <img src="/img/2.svg" alt="" className="w-full h-auto" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {tipItems.slice(0, 5).map((_, index) => (
                <div
                  key={`dot-${index}`}
                  onClick={() => goToSlide(index)}
                  className={`
                    w-[9px] h-[9px] rounded-full cursor-pointer transition-all duration-300
                    ${currentSlideIndex === index ? 'bg-[#EC1E24]' : 'bg-[#DFDFDF]'}
                  `}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}