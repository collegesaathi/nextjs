'use client'

import { useState, useMemo, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ExploreUniversities() {
  const [selectedCard, setSelectedCard] = useState(null)
  const [mSelectedCard, setMSelectedCard] = useState(null)
  const [shuffledLogos, setShuffledLogos] = useState({})
  const [shuffledMLogos, setShuffledMLogos] = useState({})

  const allLogos = {
    // Row 1 (0-9)
    0: {}, 2: {}, 4: {}, 6: {}, 8: {}, 9: {},

    // Row 2 (10-19)
    10: { logo: '/img/university-main/exp/1.svg', name: 'Amity University', url: 'https://www.amity.edu/' },
    11: { logo: '/img/university-main/ExploreUniversities/1.png', name: 'Manipal University', url: 'https://manipal.edu/' },
    12: { logo: '/img/university-main/ExploreUniversities/2.png', name: 'NMIMS University', url: 'https://www.nmims.edu/' },
    13: { logo: '/img/university-main/ExploreUniversities/3.png', name: 'Lovely Professional University', url: 'https://www.lpu.in/' },
    14: { logo: '/img/university-main/ExploreUniversities/4.png', name: 'Chandigarh University', url: 'https://www.cuchd.in/' },
    15: { logo: '/img/university-main/ExploreUniversities/5.png', name: 'Sharda University', url: 'https://www.sharda.ac.in/' },
    16: { logo: '/img/university-main/ExploreUniversities/6.png', name: 'GLA University', url: 'https://www.gla.ac.in/' },
    17: { logo: '/img/university-main/ExploreUniversities/7.png', name: 'UPES University', url: 'https://www.upes.ac.in/' },
    18: { logo: '/img/university-main/ExploreUniversities/8.png', name: 'Bennett University', url: 'https://www.bennett.edu.in/' },
    19: { logo: '/img/university-main/ExploreUniversities/9.png', name: 'Symbiosis University', url: 'https://www.siu.edu.in/' },

    // Row 3 (20-29)
    20: { logo: '/img/university-main/ExploreUniversities/10.png', name: 'VIT University', url: 'https://vit.ac.in/' },
    21: { logo: '/img/university-main/ExploreUniversities/11.png', name: 'SRM University', url: 'https://www.srmist.edu.in/' },
    22: { logo: '/img/university-main/ExploreUniversities/12.png', name: 'Kalinga University', url: 'https://www.kalingauniversity.ac.in/' },
    23: { logo: '/img/university-main/ExploreUniversities/13.png', name: 'Jain University', url: 'https://www.jainuniversity.ac.in/' },
    24: { logo: '/img/university-main/ExploreUniversities/14.png', name: 'Christ University', url: 'https://christuniversity.in/' },
    25: { logo: '/img/university-main/ExploreUniversities/15.png', name: 'Hindustan University', url: 'https://www.hindustanuniv.ac.in/' },
    26: { logo: 'img/university-main/ExploreUniversities/16.png', name: 'Graphic Era University', url: 'https://www.geu.ac.in/' },
    27: { logo: 'img/university-main/ExploreUniversities/17.png', name: 'Uttaranchal University', url: 'https://www.uttaranchaluniversity.ac.in/' },
    28: { logo: 'img/university-main/ExploreUniversities/18.png', name: 'ITM University', url: 'https://www.itmuniversity.ac.in/' },
    29: { logo: 'img/university-main/ExploreUniversities/19.png', name: 'MIT World Peace University', url: 'https://mitwpu.edu.in/' },
    30: { logo: 'img/university-main/ExploreUniversities/20.png', name: 'KIIT University', url: 'https://kiit.ac.in/' },
    31: { logo: 'img/university-main/ExploreUniversities/21.png', name: 'DY Patil University', url: 'https://www.dypatil.edu/' },
    32: { logo: 'img/university-main/ExploreUniversities/22.png', name: 'Galgotias University', url: 'https://www.galgotiasuniversity.edu.in/' },
    
    // Row 4 (30-39)
    33: { logo: 'img/university-main/ExploreUniversities/23.png', name: 'Sikkim Manipal University', url: 'https://www.smu.edu.in/' },
    34: { logo: 'img/university-main/ExploreUniversities/24.png', name: 'XLRI Jamshedpur', url: 'https://www.xlri.ac.in/' },
    35: { logo: 'img/university-main/ExploreUniversities/25.png', name: 'IIM Calcutta', url: 'https://www.iimcal.ac.in/' },
    36: { logo: 'img/university-main/ExploreUniversities/26.png', name: 'BITS Pilani', url: 'https://www.bits-pilani.ac.in/' },
    37: { logo: 'img/university-main/ExploreUniversities/27.png', name: 'IIT Delhi', url: 'https://home.iitd.ac.in/' },
    38: { logo: 'img/university-main/ExploreUniversities/28.png', name: 'IIT Bombay', url: 'https://www.iitb.ac.in/' },
    39: { logo: 'img/university-main/ExploreUniversities/29.png', name: 'NIT Trichy', url: 'https://www.nitt.edu/' },
    40: { logo: 'img/university-main/ExploreUniversities/30.png', name: 'IISc Bangalore', url: 'https://www.iisc.ac.in/' },

    // Row 5 (40-49)
    41: { logo: 'img/university-main/ExploreUniversities/31.png', name: 'Delhi University', url: 'https://www.du.ac.in/' },
    42: { logo: 'img/university-main/ExploreUniversities/32.png', name: 'JNU Delhi', url: 'https://www.jnu.ac.in/' },
    43: { logo: 'img/university-main/ExploreUniversities/33.png', name: 'Jamia Millia Islamia', url: 'https://www.jmi.ac.in/' },
    44: { logo: 'img/university-main/ExploreUniversities/34.png', name: 'Aligarh Muslim University', url: 'https://www.amu.ac.in/' },
    45: { logo: 'img/university-main/ExploreUniversities/35.png', name: 'Banaras Hindu University', url: 'https://www.bhu.ac.in/' },
    46: { logo: 'img/university-main/ExploreUniversities/36.png', name: 'Jadavpur University', url: 'https://www.jaduniv.edu.in/' },
    47: { logo: 'img/university-main/ExploreUniversities/37.png', name: 'Pune University', url: 'https://www.unipune.ac.in/' },
    48: { logo: 'img/university-main/ExploreUniversities/38.png', name: 'Mumbai University', url: 'https://mu.ac.in/' },
    49: { logo: 'img/university-main/ExploreUniversities/39.png', name: 'Calcutta University', url: 'https://www.caluniv.ac.in/' },
    50: { logo: 'img/university-main/ExploreUniversities/40.png', name: 'Madras University', url: 'https://www.unom.ac.in/' },
    51: { logo: 'img/university-main/ExploreUniversities/41.png', name: 'Osmania University', url: 'https://www.osmania.ac.in/' },
    52: { logo: 'img/university-main/ExploreUniversities/42.png', name: 'Anna University', url: 'https://www.annauniv.edu/' },
    53: { logo: 'img/university-main/ExploreUniversities/43.png', name: 'Bharathiar University', url: 'https://www.b-u.ac.in/' },
    54: { logo: 'img/university-main/ExploreUniversities/44.png', name: 'Periyar University', url: 'https://www.periyaruniversity.ac.in/' },
    55: { logo: 'img/university-main/ExploreUniversities/45.png', name: 'Andhra University', url: 'https://www.andhrauniversity.edu.in/' },
    56: { logo: 'img/university-main/ExploreUniversities/46.png', name: 'Kerala University', url: 'https://www.keralauniversity.ac.in/' },
    57: { logo: 'img/university-main/ExploreUniversities/47.png', name: 'Cochin University', url: 'https://www.cusat.ac.in/' },
  }

  // Mobile logos configuration
  const allMLogos = {
    0: {}, 2: {},
    4: { logo: '/img/university-main/ExploreUniversities/m/1.png', name: 'Amity University', url: 'https://www.amity.edu/' },
    5: { logo: '/img/university-main/ExploreUniversities/m/2.png', name: 'Manipal University', url: 'https://manipal.edu/' },
    6: { logo: '/img/university-main/ExploreUniversities/m/3.png', name: 'NMIMS University', url: 'https://www.nmims.edu/' },
    7: { logo: '/img/university-main/ExploreUniversities/m/4.png', name: 'LPU University', url: 'https://www.lpu.in/' },
    8: { logo: '/img/university-main/ExploreUniversities/m/5.png', name: 'Chandigarh University', url: 'https://www.cuchd.in/' },
    9: { logo: '/img/university-main/ExploreUniversities/m/6.png', name: 'Sharda University', url: 'https://www.sharda.ac.in/' },
    10: { logo: '/img/university-main/ExploreUniversities/m/7.png', name: 'GLA University', url: 'https://www.gla.ac.in/' },
    11: { logo: '/img/university-main/ExploreUniversities/m/8.png', name: 'UPES University', url: 'https://www.upes.ac.in/' },
    12: { logo: '/img/university-main/ExploreUniversities/m/9.png', name: 'Bennett University', url: 'https://www.bennett.edu.in/' },
    13: { logo: '/img/university-main/ExploreUniversities/m/10.png', name: 'VIT University', url: 'https://vit.ac.in/' },
    14: { logo: '/img/university-main/ExploreUniversities/m/11.png', name: 'SRM University', url: 'https://www.srmist.edu.in/' },
    15: { logo: '/img/university-main/ExploreUniversities/m/12.png', name: 'Jain University', url: 'https://www.jainuniversity.ac.in/' },
    16: { logo: '/img/university-main/exp/9.svg', name: 'Christ University', url: 'https://christuniversity.in/' },
    18: { logo: '/img/university-main/exp/10.svg', name: 'IIT Delhi', url: 'https://home.iitd.ac.in/' },
    19: { logo: '/img/university-main/exp/11.svg', name: 'IIT Bombay', url: 'https://www.iitb.ac.in/' },
  }

  // Function to shuffle and select random 10 images
  const shuffleAndSelectRandom = (logosObj, count = 10) => {
    const logoEntries = Object.entries(logosObj).filter(([key, value]) => value.logo);
    
    // Shuffle the array
    const shuffled = [...logoEntries].sort(() => Math.random() - 0.5);
    
    // Take first 'count' items
    const selected = shuffled.slice(0, count);
    
    // Convert back to object format
    const result = {};
    selected.forEach(([key, value]) => {
      result[key] = value;
    });
    
    return result;
  }

  // Initialize shuffled logos on component mount
  useEffect(() => {
    setShuffledLogos(shuffleAndSelectRandom(allLogos, 10));
    setShuffledMLogos(shuffleAndSelectRandom(allMLogos, 6));
  }, []);

  const totalCells = 68
  const mTotalCells = 20

  const cells = useMemo(() => {
    const arr = Array.from({ length: totalCells }, () => ({}))
    for (const k of Object.keys(shuffledLogos)) {
      const idx = Number(k)
      if (idx >= 0 && idx < totalCells) arr[idx] = shuffledLogos[idx]
    }
    return arr
  }, [shuffledLogos])

  const mCells = useMemo(() => {
    const arr = Array.from({ length: mTotalCells }, () => ({}))
    for (const k of Object.keys(shuffledMLogos)) {
      const idx = Number(k)
      if (idx >= 0 && idx < mTotalCells) arr[idx] = shuffledMLogos[idx]
    }
    return arr
  }, [shuffledMLogos])

  const gridCells = useMemo(() => {
    const arr = []
    for (let i = 0; i < totalCells; i++) {
      const cell = cells[i] || {}
      if (i === 24 || i === 23 || i === 37 || i === 38) {
        arr.push({ ...cell, isSpanning: true, isHidden: false })
      } else {
        arr.push({ ...cell, isSpanning: false, isHidden: false })
      }
    }
    return arr
  }, [cells])

  const mGridCells = useMemo(() => {
    const arr = []
    for (let i = 0; i < mTotalCells; i++) {
      const cell = mCells[i] || {}
      if (i === 8 || i === 9 || i === 10 || i === 11) {
        arr.push({ ...cell, isSpanning: true, isHidden: false })
      } else {
        arr.push({ ...cell, isSpanning: false, isHidden: false })
      }
    }
    return arr
  }, [mCells])

  const handleCardClick = (index, cell) => {
    setSelectedCard(selectedCard === index ? null : index)
    if (cell.url) {
      window.open(cell.url, '_blank', 'noopener,noreferrer')
    }
  }

  const handleMobileCardClick = (index, cell) => {
    setMSelectedCard(mSelectedCard === index ? null : index)
    if (cell.url) {
      window.open(cell.url, '_blank', 'noopener,noreferrer')
    }
  }

  // Function to reshuffle logos
  const reshuffleLogos = () => {
    setShuffledLogos(shuffleAndSelectRandom(allLogos, 10));
    setShuffledMLogos(shuffleAndSelectRandom(allMLogos, 6));
  }

  return (
    <>
      {/* Desktop Version */}
      <section className="bg-[#FFF5F5] lg:py-16 lg:block hidden">
        <div>
          {/* Title */}
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <h2 className="font-poppins text-[28px] md:text-[32px] font-semibold text-[#1D1F2C] leading-tight">
              Explore <span className="text-[#EC1E24]">100+ Online Universities</span> with<br />
              <span className="text-[#1D1F2C]">One-Click Comparison</span>
            </h2>
            
            {/* Shuffle Button */}
            <button 
              onClick={reshuffleLogos}
              className="mt-4 px-6 py-2 bg-[#EC1E24] text-white rounded-lg hover:bg-[#d81b20] transition-colors duration-300"
            >
              Shuffle Universities
            </button>
          </div>

          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="200"
            data-aos-once="true"
          >
            {/* Grid wrapper with better spacing */}
            <div className="grid grid-cols-10 gap-3 px-8">
              {gridCells.map((cell, index) => (
                <div
                  key={index}
                  className={`
                    w-full
                    ${cell.isSpanning ? 'col-span-2 row-span-2' : ''}
                    ${cell.isHidden ? 'hidden' : ''}
                  `}
                  onClick={() => handleCardClick(index, cell)}
                >
                  <div
                    className={`
                      ${cell.isSpanning ? 'h-[260px]' : 'h-[125px]'}
                      rounded-[16px] bg-white overflow-hidden cursor-pointer transition-all duration-300 group
                      hover:shadow-[0px_8px_25px_0px_rgba(236,30,36,0.15)] hover:scale-[1.02] hover:-translate-y-1
                      ${
                        selectedCard === index
                          ? 'border-2 border-[#EC1E24] shadow-[0px_8px_25px_0px_rgba(236,30,36,0.2)]'
                          : 'border border-[#E5E7EB] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]'
                      }
                    `}
                  >
                    {cell.logo ? (
                      <div className="h-full flex items-center justify-center p-4 relative">
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img
                          src={cell.logo}
                          alt={cell.name}
                          className="max-h-[70%] max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Blur effects */}
            <div className="absolute top-0 left-0 w-[145px] h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.0001)_-57.93%,#FFF6F6_75.86%)] blur-lg"></div>
            <div className="absolute top-0 left-0 w-[35px] h-full bg-[#FFF5F5]"></div>
            <div className="absolute top-0 right-0 w-[145px] h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.0001)_-57.93%,#FFF6F6_75.86%)] blur-lg"></div>
            <div className="absolute top-0 right-0 w-[35px] h-full bg-[#FFF5F5]"></div>
            <div className="absolute bottom-0 left-0 h-[145px] w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.0001)_-57.93%,#FFF6F6_75.86%)] blur-lg"></div>
            <div className="absolute -bottom-5 left-0 h-[35px] w-full bg-[#FFF5F5]"></div>
            <div className="absolute -top-5 left-0 h-[35px] w-full bg-[#FFF5F5]"></div>
            <div className="absolute top-0 left-0 h-[145px] w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.0001)_-57.93%,#FFF6F6_75.86%)] blur-lg"></div>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="bg-[#FFF5F5] py-8 lg:hidden block">
        <div className="px-4">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="font-poppins text-[24px] font-semibold text-[#1D1F2C] leading-tight">
              Explore <span className="text-[#EC1E24]">100+ Online Universities</span> with<br />
              <span className="text-[#1D1F2C]">One-Click Comparison</span>
            </h2>
            
            {/* Mobile Shuffle Button */}
            <button 
              onClick={reshuffleLogos}
              className="mt-4 px-4 py-2 bg-[#EC1E24] text-white rounded-lg hover:bg-[#d81b20] transition-colors duration-300 text-sm"
            >
              Shuffle Universities
            </button>
          </div>

          <div className="relative">
            {/* Mobile Grid wrapper */}
            <div className="grid grid-cols-4 gap-2 px-4">
              {mGridCells.map((cell, index) => (
                <div
                  key={index}
                  className={`
                    w-full
                    ${cell.isSpanning ? 'col-span-2 row-span-2' : ''}
                    ${cell.isHidden ? 'hidden' : ''}
                  `}
                  onClick={() => handleMobileCardClick(index, cell)}
                >
                  <div
                    className={`
                      ${cell.isSpanning ? 'h-[130px]' : 'h-[60px]'}
                      rounded-[12px] bg-white overflow-hidden cursor-pointer transition-all duration-300 group
                      hover:shadow-[0px_4px_15px_0px_rgba(236,30,36,0.15)] hover:scale-[1.02] hover:-translate-y-0.5
                      ${
                        mSelectedCard === index
                          ? 'border-2 border-[#EC1E24] shadow-[0px_4px_15px_0px_rgba(236,30,36,0.2)]'
                          : 'border border-[#E5E7EB] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.08)]'
                      }
                    `}
                  >
                    {cell.logo ? (
                      <div className="h-full flex items-center justify-center p-2 relative">
                        {/* Mobile hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img
                          src={cell.logo}
                          alt={cell.name}
                          className="max-h-[65%] max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile blur effects */}
            <div className="absolute top-0 left-0 w-[20px] h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.0001)_-57.93%,#FFF6F6_75.86%)] blur-lg"></div>
            <div className="absolute top-0 left-0 w-[5px] h-full bg-[#FFF5F5]"></div>
            <div className="absolute top-0 right-0 w-[20px] h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.0001)_-57.93%,#FFF6F6_75.86%)] blur-lg"></div>
            <div className="absolute top-0 right-0 w-[5px] h-full bg-[#FFF5F5]"></div>
            <div className="absolute bottom-0 left-0 h-[20px] w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.0001)_-57.93%,#FFF6F6_75.86%)] blur-lg"></div>
            <div className="absolute -bottom-3 left-0 h-[5px] w-full bg-[#FFF5F5]"></div>
            <div className="absolute -top-3 left-0 h-[5px] w-full bg-[#FFF5F5]"></div>
            <div className="absolute top-0 left-0 h-[20px] w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.0001)_-57.93%,#FFF6F6_75.86%)] blur-lg"></div>
          </div>

          {/* Mobile Swiper Carousel */}
          <div className="mt-8">
            <h3 className="text-center text-xl font-semibold text-[#1D1F2C] mb-6">
              Featured Universities
            </h3>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              className="mobile-featured-swiper"
            >
              {Object.values(shuffledMLogos).filter(logo => logo.logo).map((university, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 h-40 flex flex-col items-center justify-center">
                    <img 
                      src={university.logo} 
                      alt={university.name}
                      className="max-h-16 max-w-full object-contain mb-3"
                    />
                    <h4 className="text-sm font-semibold text-center text-gray-800">
                      {university.name}
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}