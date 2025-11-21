'use client'
import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function MediaCarousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false)
  const swiperRef = useRef(null)

  // Media items data
  const mediaItems = [
    {
      id: 1,
      title: 'Collegesathi Opens 5 New ',
      description: 'Lorem ipsum dolor sit amet consectetur. Et mauris vestibulum aliquam neque nibh molestie donec quis.',
      image: '/img/university-main/media/1.png',
      source: 'Education Times',
      date: '2024-03-15',
      url: '#',
      logo: '/img/university-main/media/2.png',
    },
    {
      id: 2,
      title: 'Collegesathi Opens 5 New ',
      description: 'Lorem ipsum dolor sit amet consectetur. Et mauris vestibulum aliquam neque nibh molestie donec quis.',
      image: '/img/university-main/media/1.png',
      source: 'Business Standard',
      date: '2024-03-12',
      url: '#',
    },
    {
      id: 3,
      title: 'Collegesathi Opens 5 New ',
      description: 'Lorem ipsum dolor sit amet consectetur. Et mauris vestibulum aliquam neque nibh molestie donec quis.',
      image: '/img/university-main/media/1.png',
      source: 'Tech News',
      date: '2024-03-10',
      url: '#',
    },
    {
      id: 4,
      title: 'Collegesathi Opens 5 New ',
      description: 'Lorem ipsum dolor sit amet consectetur. Et mauris vestibulum aliquam neque nibh molestie donec quis.',
      image: '/img/university-main/media/1.png',
      source: 'Education World',
      date: '2024-03-08',
      url: '#',
    },
    {
      id: 5,
      title: 'Collegesathi Opens 5 New ',
      description: 'Lorem ipsum dolor sit amet consectetur. Et mauris vestibulum aliquam neque nibh molestie donec quis.',
      image: '/img/university-main/media/1.png',
      source: 'Times of India',
      date: '2024-03-05',
      url: '#',
    },
    {
      id: 6,
      title: 'Collegesathi Opens 5 New ',
      description: 'Lorem ipsum dolor sit amet consectetur. Et mauris vestibulum aliquam neque nibh molestie donec quis.',
      image: '/img/university-main/media/1.png',
      source: 'Hindu Business Line',
      date: '2024-03-03',
      url: '#',
    },
  ]

  // Swiper breakpoints
  const swiperBreakpoints = {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 30,
      centeredSlides: true
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
      centeredSlides: true
    },
  }

  // Methods
  const onSwiper = (swiper) => {
    swiperRef.current = swiper
  }

  const onSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex)
  }

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index)
    }
  }

  const pauseAutoplay = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop()
      setIsAutoplayPaused(true)
    }
  }

  const resumeAutoplay = () => {
    if (swiperRef.current && swiperRef.current.autoplay && isAutoplayPaused) {
      swiperRef.current.autoplay.start()
      setIsAutoplayPaused(false)
    }
  }

  // Check if slide is the middle/active slide
  const isMiddleSlide = (index) => {
    return currentSlideIndex === index
  }

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <>
      {/* Desktop Version */}
      <section className="py-16 bg-white  ">
        <div
          className="container mx-auto px-4"
          data-aos="fade-in"
          data-aos-duration="600"
          data-aos-delay="150"
          data-aos-once="true"
        >
          {/* Custom Header */}
          <div className="text-center mb-12">
            <h2 className="font-poppins text-[28px] md:text-[32px] font-semibold text-[#1D1F2C] leading-tight">
              <span className="text-[#EC1E24]">Collegesathi</span> in Media
            </h2>
          </div>

          {/* Custom Carousel */}
          <div
            className="w-full xl:w-[1200px] mx-auto"
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
          >
            {/* Swiper Container */}
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              modules={[Autoplay]}
              onSwiper={onSwiper}
              onSlideChange={onSlideChange}
              breakpoints={swiperBreakpoints}
            >
              {mediaItems.map((item, index) => (
                <SwiperSlide key={item.id} className="pt-10">
                  <div
                    className={`
                      media-card w-[359px] rounded-[11px] border border-[#CECECE] bg-white shadow-[0px_4px_10px_0px_#00000014]
                      transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform
                      hover:transform hover:-translate-y-[15px] hover:border-b-[3px] hover:border-[#EC1E24]
                      hover:shadow-[0_15px_25px_-5px_rgba(0,0,0,0.15),0_10px_10px_-5px_rgba(0,0,0,0.1)]
                      ${isMiddleSlide(index) ? 'active-slide border-b-2 border-b-[#EC1E24] transform -translate-y-[30px]' : ''}
                    `}
                  >
                    {/* Media Image */}
                    <div className="relative overflow-hidden p-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[184px] object-cover transition-transform duration-300 rounded-[8px]"
                      />
                    </div>

                    {/* Media Content */}
                    <div className="pt-2 px-5">
                      <div className="w-full h-[20px] my-3">
                        <img src={item.logo} alt="" />
                      </div>

                      {/* Title */}
                      <h3
                        className={`
                          card-title font-semibold text-[18px] tracking-[0px] text-[#282529] mb-3 
                          line-clamp-2 transition-colors duration-300 leading-relaxed
                          ${isMiddleSlide(index) ? 'hover:leading-[1.3]' : ''}
                        `}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`
                          card-description font-normal text-[14px] tracking-[0px] text-[#282529] mb-4 
                          line-clamp-3 leading-relaxed
                          ${isMiddleSlide(index) ? 'hover:leading-[1.4]' : ''}
                        `}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {mediaItems.map((item, index) => (
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