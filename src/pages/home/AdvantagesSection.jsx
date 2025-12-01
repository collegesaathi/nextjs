'use client';

import { useState, useEffect, useRef } from 'react';
import shape11 from "../assets/home/Lines.png"
import { FaArrowRight, FaCaretLeft, FaCaretRight, FaSearch } from 'react-icons/fa';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import Effect from "../assets/home/effect.avif"
import Heading from '../../common/Heading';
export default function AdvantagesSection() {
  // University Search Functionality
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentTypingText, setCurrentTypingText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Step carousel functionality
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const searchContainer = useRef(null);
  const searchInput = useRef(null);
  const autoplayInterval = useRef(null);

  // Services Animation Refs
  const servicesContainer = useRef(null);
  const servicesTitle = useRef(null);
  const servicesSubtitle = useRef(null);
  const serviceItem1 = useRef(null);
  const serviceItem2 = useRef(null);
  const serviceItem3 = useRef(null);
  const serviceItem4 = useRef(null);
  const serviceItem5 = useRef(null);

  // Steps data
  const [steps, setSteps] = useState([
    {
      id: 0,
      title: '1-1 Counselling',
      completed: true
    },
    {
      id: 1,
      title: 'Compare Universities',
      completed: true
    },
    {
      id: 2,
      title: 'Select Perfect University',
      completed: false
    },
    {
      id: 3,
      title: 'Enrollment Assistance',
      completed: false
    },
    {
      id: 4,
      title: 'Admission Confirmation',
      completed: false
    },
    {
      id: 5,
      title: 'Post-Admission Guidance',
      completed: false
    }
  ]);

  // Universities data for the dropdown
  const universities = [
    { id: 1, name: 'Jain Online University', location: 'Bangalore', type: 'Online' },
    { id: 2, name: 'Amity Online University', location: 'Noida', type: 'Online' },
    { id: 3, name: 'Manipal University Online', location: 'Manipal', type: 'Online' },
    { id: 4, name: 'BITS Pilani', location: 'Pilani', type: 'Campus' },
    { id: 5, name: 'Lovely Professional University', location: 'Punjab', type: 'Hybrid' },
    { id: 6, name: 'VIT University', location: 'Vellore', type: 'Campus' },
    { id: 7, name: 'SRM University', location: 'Chennai', type: 'Campus' },
    { id: 8, name: 'Chandigarh University', location: 'Chandigarh', type: 'Hybrid' },
    { id: 9, name: 'Bennett University', location: 'Greater Noida', type: 'Campus' },
    { id: 10, name: 'UPES Online', location: 'Dehradun', type: 'Online' }
  ];

  // Typing animation words
  const typingWords = [
    'Search for universities...',
    'Find your dream university...',
    'Explore top universities...',
    'Discover online courses...',
    'Compare university programs...'
  ];

  // Computed progress
  const progress = ((currentStep + 1) / steps.length) * 100;

  // Computed property for filtered universities
  const filteredUniversities = !searchQuery.trim()
    ? universities
    : universities.filter(university => {
      const query = searchQuery.toLowerCase();
      return (
        university.name.toLowerCase().includes(query) ||
        university.location.toLowerCase().includes(query) ||
        university.type.toLowerCase().includes(query)
      );
    });

  // Typing animation logic
  const startTypingAnimation = () => {
    const currentWord = typingWords[typingIndex];

    if (isTyping) {
      // Typing phase
      if (charIndex < currentWord.length) {
        setCurrentTypingText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        setTimeout(startTypingAnimation, 100);
      } else {
        // Pause before deleting
        setIsTyping(false);
        setTimeout(startTypingAnimation, 2000);
      }
    } else {
      // Deleting phase
      if (charIndex > 0) {
        setCurrentTypingText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        setTimeout(startTypingAnimation, 50);
      } else {
        // Move to next word
        setIsTyping(true);
        setTypingIndex((typingIndex + 1) % typingWords.length);
        setTimeout(startTypingAnimation, 100);
      }
    }
  };

  // Methods
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      searchInput.current?.focus();
    }
  };

  const selectUniversity = (university) => {
    setSearchQuery(university.name);
    setIsDropdownOpen(false);
  };

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
    if (!isDropdownOpen) {
      setIsDropdownOpen(true);
    }
  };

  const handleInputFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleInputBlur = () => {
    // Delay closing to allow for option selection
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);

      // Find matching university
      const matchedUniversity = universities.find(uni =>
        uni.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (matchedUniversity) {
        selectUniversity(matchedUniversity);
      }
    }
  };

  // Step carousel navigation methods
  const slidePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      updateStepsCompletion(currentStep - 1);
      restartAutoplay();
    }
  };

  const slideNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      updateStepsCompletion(currentStep + 1);
      restartAutoplay();
    }
  };

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
    updateStepsCompletion(stepIndex);
    restartAutoplay();
  };

  const updateStepsCompletion = (stepIndex) => {
    setSteps(prevSteps =>
      prevSteps.map((step, index) => ({
        ...step,
        completed: index <= stepIndex
      }))
    );
  };

  const startAutoplay = () => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
    }

    autoplayInterval.current = setInterval(() => {
      if (!isAutoplayPaused) {
        if (currentStep < steps.length - 1) {
          setCurrentStep(prev => {
            const newStep = prev + 1;
            updateStepsCompletion(newStep);
            return newStep;
          });
        } else {
          // Reset to first step when reaching the end
          setCurrentStep(0);
          updateStepsCompletion(0);
        }
      }
    }, 2000); // 2 seconds interval
  };

  const pauseAutoplay = () => {
    setIsAutoplayPaused(true);
  };

  const resumeAutoplay = () => {
    setIsAutoplayPaused(false);
  };

  const restartAutoplay = () => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
    }
    startAutoplay();
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (searchContainer.current && !searchContainer.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  // Services Animation Setup
  const setupServicesAnimation = () => {
    const animationElements = [
      servicesTitle.current,
      servicesSubtitle.current,
      serviceItem1.current,
      serviceItem2.current,
      serviceItem3.current,
      serviceItem4.current,
      serviceItem5.current
    ].filter(Boolean);

    // Create intersection observer for animations
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add staggered delay for sequential animation
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, index * 150); // 150ms delay between each element

            // Unobserve after animation triggers
            animationObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element comes into full view
      }
    );

    // Observe all animation elements
    animationElements.forEach(element => {
      if (element) {
        animationObserver.observe(element);
      }
    });
  };

  // Lifecycle hooks
  useEffect(() => {
    // Start typing animation when component mounts
    setTimeout(() => {
      startTypingAnimation();
    }, 1000); // Start after 1 second delay

    // Add click outside listener
    document.addEventListener('click', handleClickOutside);

    // Setup services animations
    setTimeout(() => {
      setupServicesAnimation();
    }, 500); // Small delay to ensure DOM is ready

    // Start step autoplay
    setTimeout(() => {
      startAutoplay();
    }, 1500); // Start autoplay after other animations

    return () => {
      // Clean up event listener
      document.removeEventListener('click', handleClickOutside);

      // Clean up autoplay interval
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current);
      }
    };
  }, []);

  useEffect(() => {
    if (searchQuery && searchQuery !== currentTypingText) {
      // User started typing, stop animation
      setCurrentTypingText('Type to search universities...');
    }
  }, [searchQuery, currentTypingText]);

  return (
    <>
      {/* Desktop version */}
      <div className="py-8 md:py-12 ">
        <div className="mx-auto container sm:container md:container lg:container xl:max-w-[1230px]  px-4">
          <div className="lg:block hidden py-16">
            <div className="flex justify-between items-center">
              <div className="flex items-start justify-between w-full pb-7">
                <div>
                  <p className="font-normal text-[16px] leading-[0] tracking-[0px] text-[#282529] mb-4">
                    What Sets Us Apart
                  </p>
                  <Heading title={"Discover the"} midtitle={"Collegesathi Advantages"} />
                </div>
                <div
                  className="flex items-center space-x-4"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <div className="w-[82px] md:w-[191px] h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-600 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <button
                    type="button"
                    className={`w-[18px] h-[18px] md:w-[35px] md:h-[35px] rounded-full flex items-center justify-center border cursor-pointer transition-all duration-300 ${progress > 90
                      ? 'border-custom9 text-custom9'
                      : 'border-custom2 text-custom2 hover:bg-[#EC1E24] hover:text-white hover:border-[#EC1E24]'
                      }`}
                    onClick={slidePrev}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={`w-[18px] h-[18px] md:w-[35px] md:h-[35px] rounded-full flex items-center justify-center border cursor-pointer transition-all duration-300 ${progress > 10
                      ? 'border-custom2 text-custom2 hover:bg-[#EC1E24] hover:text-white hover:border-[#EC1E24]'
                      : 'border-custom9 text-custom9'
                      }`}
                    onClick={slideNext}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>

                  </button>
                </div>
              </div>

            </div>

            <div className="flex justify-between items-center">
              {/* Services Card */}
              <div
                ref={servicesContainer}
                className="w-[478.26px] overflow-hidden h-[450px] rounded-[29px] border border-[#FFB8B8] bg-gradient-to-b from-[#FFF6F6] to-white p-6"
              >
                <h2
                  ref={servicesTitle}
                  className="font-semibold text-[24px] text-[#282529] mb-2 "
                >
                  Our Services
                </h2>
                <p
                  ref={servicesSubtitle}
                  className="w-[244px] font-normal text-[16px] tracking-[0px] text-[#282529] mb-4"
                >
                  Empowering students to make informed decisions.
                </p>
                <div
                  ref={serviceItem1}
                  className="-translate-x-14 rounded-br-full rounded-tr-full border border-[#FFF5F5] h-[52px] flex items-center justify-center bg-white w-[302px] mb-3 services-animate animate-from-left"
                >
                  <h2 className="font-medium text-[18px] leading-[100%] tracking-[0px] text-center text-[#282529]">
                    Explore 50+ Universities
                  </h2>
                </div>
                <div
                  ref={serviceItem2}
                  className="ml-auto translate-x-14 rounded-bl-full rounded-tl-full w-[363px] h-[55px] rounded-[28px] border border-[#EC1E24] bg-gradient-to-br from-[#EC1E24] to-[#FF6363] flex items-center justify-center services-animate animate-from-right"
                >
                  <h2 className="font-medium text-[18px] leading-[100%] tracking-[0px] text-center text-white">
                    100% post admission support
                  </h2>
                </div>

                <div
                  ref={serviceItem3}
                  className="rounded-full border border-[#FFF5F5] h-[52px] flex items-center justify-center bg-white w-[302px] mt-4 mb-8 services-animate animate-from-left"
                >
                  <h2 className="font-medium text-[18px] leading-[100%] tracking-[0px] text-center text-[#282529]">
                    Personalized expert guidance
                  </h2>
                </div>
                <div className="flex w-full h-[55px] relative">
                  <div
                    ref={serviceItem4}
                    className="w-[223px] h-[55px] rounded-[28px] border border-[#EC1E24] bg-gradient-to-br from-[#EC1E24] to-[#FF6363] absolute top-0 -left-18 flex items-center justify-end pr-4 services-animate animate-from-bottom"
                  >
                    <h2 className="font-medium text-[18px] tracking-[0px] text-center text-white">
                      24*7 assistance
                    </h2>
                  </div>
                  <div
                    ref={serviceItem5}
                    className="w-[291px] h-[55px] rounded-[28px] border border-[#FFF5F5] bg-white absolute top-0 -right-10 flex items-center justify-center services-animate animate-from-bottom"
                  >
                    <h2 className="font-medium text-[18px] tracking-[0px] text-center text-[#282529]">
                      Check reviews and ratings
                    </h2>
                  </div>
                </div>
              </div>

              {/* University Search Card */}
              <div
                className="w-[676px] h-[450px] rounded-[29px] border border-[#FFB8B8] bg-gradient-to-b from-[#FFEBEB] to-transparent relative p-[25px]"
              >
                <div className="relative z-10">
                  <h2 className="font-poppins font-semibold text-[24px] leading-[100%] tracking-[0px] text-center text-[#282529] mb-4">
                    Know About Your Favourite University
                  </h2>
                  <p className="font-poppins font-normal text-[16px] tracking-[0px] text-center text-[#282529] mb-6">
                    Check the details of your favourite university <br />
                    and make an informed decision.
                  </p>
                  <div className="flex justify-center">
                    <div
                      ref={searchContainer}
                      className="w-[563px] h-[54px] rounded-[7px] bg-[#F7F6F6] p-[4px] flex items-center justify-between relative"
                    >
                      {/* Dropdown Toggle Button */}
                      <button
                        type="button"
                        className={`bg-white w-[44px] h-[48px] rounded-[5px] flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                          }`}
                        onClick={toggleDropdown}
                      >
                        <IoMdArrowDropdownCircle size={24} />

                      </button>

                      {/* Search Input Container */}
                      <div className="bg-white shadow-[0px_1px_2px_0px_#00000026] w-[452px] h-full rounded-tl-[5px] rounded-tr-[5px] relative">
                        <input
                          ref={searchInput}
                          type="text"
                          value={searchQuery}
                          onChange={handleSearchInput}
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          className="w-full h-full relative px-4 z-10 font-poppins font-normal text-[13px] tracking-[0px] text-[#282529] placeholder:text-[#282529] bg-transparent border-none outline-none"
                          placeholder={currentTypingText}
                        />

                        {/* Dropdown Options */}
                        {isDropdownOpen && (
                          <div className="absolute top-[48px] left-0 w-full bg-white shadow-[0px_4px_12px_0px_#00000026] max-h-[200px] overflow-y-auto z-30 rounded-bl-[7px] rounded-br-[7px] border border-gray-100">
                            <ul>
                              {filteredUniversities.map((university) => (
                                <li
                                  key={university.id}
                                  className="h-[40px] flex items-center px-4 cursor-pointer font-poppins font-normal text-[13px] leading-[100%] tracking-[0px] text-[#282529] hover:bg-[#F7F6F6] hover:text-[#EC1E24] transition-all duration-200"
                                  onClick={() => selectUniversity(university)}
                                >
                                  <span className="flex-1">{university.name}</span>
                                  <span className="text-[10px] text-gray-400 ml-2">{university.location}</span>
                                </li>
                              ))}
                              {filteredUniversities.length === 0 && searchQuery && (
                                <li className="h-[40px] flex items-center px-4 font-poppins font-normal text-[13px] text-gray-400">
                                  No universities found matching "{searchQuery}"
                                </li>
                              )}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Search Button */}
                      <button
                        type="button"
                        className={`flex items-center justify-center h-full bg-transparent w-[25px] hover:bg-gray-100 rounded transition-colors duration-200 ${!searchQuery.trim() ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        onClick={handleSearch}
                        disabled={!searchQuery.trim()}
                      >
                        <FaSearch className="w-[25px] h-auto pe-1.5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full pt-14">
                  <img src={Effect?.src} alt="" className="w-full" />
                </div>
              </div>
            </div>

            <div className="mt-8 mb-10">
              <div
                className={`flex items-center ${isAutoplayPaused ? 'autoplay-paused' : ''}`}
                onMouseEnter={pauseAutoplay}
                onMouseLeave={resumeAutoplay}
              >
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    {/* Step Item */}
                    <div
                      className={`step-item step-hover-effect w-[177px] h-[30px] rounded-[13px] flex items-center space-x-2 px-2 transition-all duration-300 cursor-pointer ${step.completed
                        ? 'bg-[#FFEEEE] border border-[#FFEFEF] text-[#EC1E24]'
                        : 'bg-[#FFFFFF] border border-[#CECECE] text-[#CECECE]'
                        } ${currentStep === index ? 'step-active' : ''}`}
                      onClick={() => goToStep(index)}
                    >
                      <div
                        className={`step-circle rounded-full flex items-center justify-center text-[9px] p-0 w-[20px] h-[20px] transition-all duration-300 ${step.completed
                          ? 'bg-[#EC1E24] text-white'
                          : 'bg-[#FFFFFF] border-[#CECECE] border'
                          }`}
                      >
                        {step.completed && <IoMdCheckmark size={24} />}
                      </div>
                      <p
                        className={`step-text font-poppins font-semibold text-[9px] w-[80%] transition-all duration-300 ${step.completed ? 'text-[#EC1E24]' : 'text-[#CECECE]'
                          }`}
                      >
                        {step.title}
                      </p>
                    </div>

                    {/* Connector Line (except for last item) */}
                    {index < steps.length - 1 && (
                      <div
                        className={`step-connector w-[23px] h-[2px] transition-all duration-600 ${step.completed ? 'bg-[#EC1E24]' : 'bg-[#CECECE]'
                          }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Support Banner */}
            <div className="relative h-[207px] border-1 border-[#FFB8B8] rounded-[20px]">
              <img src={shape11?.src} alt="university" className="w-full h-full object-cover" />
              <div className="absolute left-20 top-1/4 transform -translate-y-1/2 ml-8 hidden lg:block">

                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1757 4.00778C22.5912 1.42334 19.155 0 15.5 0C11.845 0 8.40875 1.42334 5.82431 4.00778C3.45511 6.37698 2.06259 9.46214 1.84686 12.7753H0V21.8577H6.7428V12.7753H3.66745C3.8644 10.1849 4.89709 7.82453 6.49523 5.9632L9.0385 8.50647L9.68066 7.86425C11.2378 6.30717 13.3045 5.44952 15.5 5.44952C17.6955 5.44952 19.7621 6.30711 21.3193 7.86425L21.9615 8.50647L24.5048 5.9632C26.1029 7.82453 27.1356 10.1848 27.3326 12.7753H24.2571V21.8577H26.6558C26.2132 24.9669 23.5338 27.3656 20.3043 27.3656H19.282C18.907 26.3076 17.8968 25.5476 16.712 25.5476H14.288C12.7848 25.5476 11.5618 26.7706 11.5618 28.2738C11.5618 29.777 12.7848 31 14.288 31H16.712C17.8968 31 18.907 30.24 19.282 29.1821H20.3043C24.5367 29.1821 28.033 25.9714 28.4865 21.8577H31V12.7753H29.1532C28.9375 9.46214 27.545 6.37698 25.1757 4.00778V4.00778Z" fill="#EC1E24" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9227 18.2274V16.408H14.5586V10.9556H9.10547V12.7721H12.7421V14.5915H9.1062V20.0439H14.5593V18.2274H10.9227Z" fill="#EC1E24" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0149 10.9548V14.5915H18.1954V10.9548H16.3789V16.408H20.0149V20.0446H21.8313V10.9548H20.0149Z" fill="#EC1E24" />
                </svg>

              </div>

              <div className="absolute left-27 top-3/4 transform -translate-y-1/2 ml-8 hidden lg:block">
                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_4_216)">
                    <circle cx="27.5" cy="25.5" r="21.5" fill="#F9F9F9" />
                    <circle cx="27.5" cy="25.5" r="22.5" stroke="white" stroke-width="2" />
                  </g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9235 17.4402C29.9235 19.0555 28.6141 20.3649 26.9988 20.3649C25.3836 20.3649 24.0742 19.0555 24.0742 17.4402C24.0742 15.825 25.3836 14.5156 26.9988 14.5156C28.6141 14.5156 29.9235 15.825 29.9235 17.4402ZM21.7636 26.1824L21.0952 26.8097C20.8106 27.0768 20.6199 27.4097 20.5303 27.766H16.016C15.9447 27.766 15.8834 27.7376 15.8373 27.6833C15.7912 27.6291 15.7731 27.564 15.7846 27.4937C16.1682 25.1513 18.2015 23.3638 20.6524 23.3638C21.4554 23.3638 22.2135 23.5557 22.8835 23.8961C22.5023 24.1657 22.2216 24.5707 22.1081 25.0553L21.899 25.9478C21.8757 26.0476 21.8384 26.1122 21.7636 26.1824ZM38.2122 27.4944C37.8286 25.152 35.7953 23.3645 33.3444 23.3645C32.5415 23.3645 31.7833 23.5564 31.1133 23.8968C31.4945 24.1664 31.7752 24.5714 31.8887 25.0559L32.0977 25.9484C32.1211 26.0483 32.1585 26.1129 32.2332 26.1831L32.9016 26.8104C33.1862 27.0775 33.3769 27.4104 33.4665 27.7666H37.9808C38.1262 27.7667 38.2357 27.6379 38.2122 27.4944ZM30.8866 33.5544C30.8206 33.5903 30.7744 33.6351 30.729 33.7046L30.2272 34.4717C29.8052 35.1169 29.067 35.4463 28.3242 35.3464L29.2903 37.4215C29.3273 37.5011 29.4383 37.5061 29.4824 37.4302L30.3209 35.9873L31.9649 36.2746C32.0514 36.2897 32.119 36.2016 32.0819 36.1219L30.8866 33.5544ZM27.7402 28.2941L28.6628 28.2923C28.8958 28.2919 28.9929 28.5908 28.8042 28.7274L28.0568 29.2683C27.9707 29.3306 27.9362 29.4368 27.9692 29.5377L28.256 30.4147C28.3283 30.6358 28.0739 30.8206 27.8859 30.6835L27.1405 30.1398C27.0547 30.0772 26.9431 30.0772 26.8572 30.1398L26.1118 30.6835C25.9239 30.8206 25.6694 30.6358 25.7417 30.4147L26.0285 29.5377C26.0615 29.4368 26.027 29.3306 25.9409 29.2683L25.1934 28.7274C25.0047 28.5908 25.1019 28.2919 25.3348 28.2923L26.2575 28.2941C26.3637 28.2943 26.4541 28.2287 26.4867 28.1276L26.7701 27.2495C26.8412 27.0292 27.1564 27.0291 27.2275 27.2495L27.5109 28.1275C27.5436 28.2286 27.6339 28.2943 27.7402 28.2941ZM32.3894 27.357C32.7896 27.7326 32.8905 28.3048 32.6429 28.7946C32.5833 28.9126 32.5295 29.0173 32.4813 29.1114L32.4813 29.1114C32.2688 29.5257 32.1626 29.7329 32.124 29.952C32.0853 30.171 32.1143 30.402 32.1723 30.8639C32.1854 30.9689 32.2001 31.0857 32.2158 31.217C32.2809 31.762 31.9904 32.2652 31.4858 32.4813C31.3643 32.5333 31.2559 32.579 31.1585 32.62C30.7294 32.8009 30.5148 32.8913 30.3444 33.0343C30.174 33.1772 30.0478 33.3728 29.7953 33.7638L29.7952 33.7639C29.7378 33.8527 29.6739 33.9516 29.6015 34.0623C29.3011 34.5217 28.7552 34.7204 28.2297 34.5616C28.1031 34.5233 27.9905 34.4886 27.8895 34.4574L27.8894 34.4574L27.8894 34.4574C27.4447 34.3202 27.2223 34.2516 26.9999 34.2516C26.7774 34.2516 26.555 34.3202 26.11 34.4575L26.1096 34.4576L26.1078 34.4582C26.0073 34.4892 25.8956 34.5237 25.77 34.5616C25.2447 34.7204 24.6987 34.5217 24.3982 34.0623C24.3261 33.952 24.2624 33.8534 24.2052 33.7648L24.205 33.7644L24.2048 33.7642L24.2046 33.7639L24.2046 33.7638L24.2046 33.7638C23.952 33.3728 23.8258 33.1772 23.6554 33.0343C23.485 32.8913 23.2704 32.8009 22.8413 32.62C22.7439 32.579 22.6355 32.5333 22.5139 32.4813C22.0094 32.2652 21.7189 31.762 21.784 31.217C21.7997 31.0857 21.8144 30.9689 21.8275 30.864L21.8275 30.8638C21.8855 30.402 21.9144 30.171 21.8758 29.952C21.8372 29.7329 21.7309 29.5257 21.5184 29.1113C21.4702 29.0173 21.4165 28.9126 21.3569 28.7946C21.1093 28.3048 21.2102 27.7326 21.6104 27.357C21.7068 27.2665 21.793 27.1865 21.8705 27.1146L21.8706 27.1145L21.8706 27.1145C22.212 26.7979 22.3826 26.6395 22.4938 26.4469C22.6051 26.2543 22.6568 26.0273 22.7604 25.5734L22.7604 25.5733C22.7839 25.4703 22.8101 25.3555 22.8402 25.2268C22.9654 24.6924 23.4105 24.3189 23.9585 24.2884C24.0905 24.2811 24.2081 24.2752 24.3137 24.2699H24.3137C24.7787 24.2468 25.0112 24.2352 25.2203 24.1591C25.4293 24.083 25.6149 23.9425 25.986 23.6613L25.986 23.6613C26.0703 23.5975 26.1641 23.5264 26.2699 23.4471C26.7094 23.1182 27.2904 23.1182 27.7298 23.4471C27.8356 23.5263 27.9293 23.5974 28.0136 23.6612L28.0138 23.6614L28.0138 23.6614L28.0138 23.6614L28.0139 23.6614C28.3849 23.9425 28.5704 24.083 28.7794 24.1591C28.9885 24.2352 29.221 24.2468 29.686 24.2699H29.686H29.686H29.686C29.7916 24.2752 29.9092 24.2811 30.0412 24.2884C30.5892 24.3189 31.0343 24.6924 31.1595 25.2268C31.1894 25.3546 31.2155 25.4687 31.2389 25.5712L31.2391 25.5721L31.2393 25.5732L31.2393 25.5733C31.3429 26.0273 31.3947 26.2543 31.5059 26.4469C31.6172 26.6396 31.7878 26.7979 32.1291 27.1145C32.2067 27.1864 32.293 27.2665 32.3894 27.357ZM26.9958 25.7043C28.7647 25.7043 30.1987 27.1383 30.1987 28.9072C30.1987 30.676 28.7647 32.1101 26.9958 32.1101C25.2269 32.1101 23.793 30.676 23.793 28.9072C23.793 27.1383 25.2269 25.7043 26.9958 25.7043ZM23.2657 33.7046C23.2202 33.6351 23.174 33.5904 23.1081 33.5544L21.9128 36.1219C21.8756 36.2015 21.9432 36.2896 22.0298 36.2745L23.6738 35.9873L24.5123 37.4302C24.5564 37.506 24.6674 37.501 24.7044 37.4214L25.6704 35.3464C24.4366 35.5123 23.9271 34.7255 23.3731 33.87C23.3376 33.8151 23.3018 33.7599 23.2657 33.7046ZM35.8398 20.4006C35.8398 21.7781 34.7232 22.8948 33.3457 22.8948C31.9682 22.8948 30.8515 21.7781 30.8516 20.4006C30.8516 19.0232 31.9682 17.9065 33.3457 17.9065C34.7232 17.9065 35.8398 19.0232 35.8398 20.4006ZM22.5391 22.9355C22.9789 23.0904 23.3952 23.2981 23.7797 23.5516C23.8799 23.5392 24.0213 23.5351 24.1754 23.5306C24.5232 23.5204 24.9357 23.5083 25.0861 23.3957L25.82 22.8464C26.5257 22.3182 27.4728 22.3182 28.1785 22.8464L28.9124 23.3957C29.0628 23.5083 29.4748 23.5203 29.8223 23.5305H29.8223C29.9767 23.535 30.1183 23.5392 30.2187 23.5516C30.6032 23.2982 31.0195 23.0904 31.4594 22.9355C30.3984 21.652 28.7945 20.834 26.9993 20.834C25.2039 20.834 23.5999 21.652 22.5391 22.9355ZM23.1445 20.4006C23.1445 21.7781 22.0279 22.8948 20.6504 22.8948C19.273 22.8948 18.1562 21.7781 18.1562 20.4006C18.1562 19.0232 19.273 17.9065 20.6504 17.9065C22.0278 17.9065 23.1445 19.0232 23.1445 20.4006Z" fill="#EC1E24" />
                  <defs>
                    <filter id="filter0_d_4_216" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.109804 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_216" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_216" result="shape" />
                    </filter>
                  </defs>
                </svg>

              </div>
              {/* Right Icons */}
              <div className="absolute right-22 top-1/4 transform -translate-y-1/2 mr-8 hidden lg:block">
                <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_4_215)">
                    <circle cx="36.5" cy="34.5" r="24.5" fill="#F9F9F9" />
                    <circle cx="36.5" cy="34.5" r="26.5" stroke="white" stroke-width="4" />
                  </g>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M45.9762 31.7406V21.2936C45.9751 20.584 45.4001 20.009 44.6905 20.0081H29.7192C29.0096 20.0091 28.4346 20.5841 28.4336 21.2936V31.7406C28.4345 32.4502 29.0095 33.0252 29.7191 33.0262H30.9332V35.327C30.9328 35.6186 31.0882 35.8881 31.3407 36.0338C31.5933 36.1796 31.9044 36.1793 32.1566 36.0332L37.3667 33.026H44.6905C45.4 33.025 45.975 32.45 45.976 31.7404L45.9762 31.7406ZM51.8538 38.7579C51.8575 38.873 51.8217 38.9859 51.7522 39.0778L48.1916 44.1005H42.1761V40.2818C42.1707 40.1342 42.2297 39.9916 42.3378 39.8909L47.142 35.0868C47.3518 34.8753 47.6587 34.7922 47.9466 34.869C48.2344 34.9457 48.4592 35.1705 48.536 35.4584C48.6127 35.7462 48.5296 36.0531 48.3181 36.2629L45.6883 38.8923C45.3699 39.211 45.3702 39.7274 45.6888 40.0458C46.0075 40.3642 46.524 40.364 46.8424 40.0453L49.4722 37.4159C49.9448 36.9438 50.2043 36.2994 50.191 35.6316V28.4774C50.1884 28.1787 50.3463 27.9016 50.6046 27.7515C50.8629 27.6014 51.1818 27.6014 51.4401 27.7515C51.6984 27.9016 51.8563 28.1787 51.8538 28.4774L51.8538 38.7579ZM50.1848 50.0475H40.5664V45.7327H50.1848V50.0477V50.0475ZM22.5147 35.6093C22.5151 35.615 22.5153 35.6207 22.5153 35.6264V35.6312C22.5018 36.2994 22.7614 36.9441 23.234 37.4166L25.8639 40.0459C26.0693 40.2546 26.3709 40.3371 26.6539 40.2621C26.9369 40.1871 27.158 39.9661 27.2332 39.683C27.3083 39.4 27.226 39.0985 27.0174 38.8929L24.3879 36.2636C24.1777 36.0536 24.0955 35.7473 24.1723 35.4603C24.2491 35.1733 24.4732 34.949 24.7602 34.8721C25.0472 34.7951 25.3535 34.8772 25.5636 35.0873L30.3677 39.8914C30.476 39.992 30.5352 40.1346 30.5299 40.2823V44.101H24.5144L20.9534 39.0785C20.8839 38.9866 20.8481 38.8736 20.8518 38.7584V28.4779C20.8559 28.0204 21.2258 27.6506 21.6833 27.6465C22.1407 27.6506 22.5106 28.0205 22.5146 28.4779L22.5147 35.6093ZM32.1374 50.0475H22.5195V45.7327H32.1374V50.0477V50.0475ZM39.9025 26.5169C39.9025 26.0666 40.2674 25.7014 40.7178 25.7009H40.7547C41.2052 25.7011 41.5703 26.0664 41.5703 26.5169C41.5703 26.9673 41.2052 27.3326 40.7547 27.3328H40.7178C40.2673 27.3327 39.9022 26.9674 39.9023 26.5169H39.9025ZM32.8439 26.5169C32.8438 26.0666 33.2087 25.7012 33.6592 25.7009H33.6961C34.1466 25.7011 34.5117 26.0664 34.5117 26.5169C34.5117 26.9673 34.1466 27.3326 33.6961 27.3328H33.6592C33.4428 27.3328 33.2354 27.2468 33.0824 27.0938C32.9295 26.9407 32.8436 26.7332 32.8438 26.5169H32.8439ZM36.3711 26.5169C36.3712 26.0664 36.7362 25.7012 37.1866 25.7009H37.2236C37.674 25.7011 38.0391 26.0664 38.0391 26.5169C38.0391 26.9673 37.674 27.3326 37.2236 27.3328H37.1866C36.7362 27.3326 36.3711 26.9673 36.3712 26.5169H36.3711Z" fill="#EC1E24" />
                  <defs>
                    <filter id="filter0_d_4_215" x="0" y="0" width="73" height="73" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="4" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.109804 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_215" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_215" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="absolute right-55 top-3/4 transform -translate-y-1/2 mr-8 hidden lg:block">

                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_4_214)">
                    <circle cx="27.5" cy="25.5" r="21.5" fill="#F9F9F9" />
                    <circle cx="27.5" cy="25.5" r="22.5" stroke="white" stroke-width="2" />
                  </g>
                  <path d="M37.7109 20.9263V27.7245C37.7109 28.0851 38.0028 28.3768 38.3633 28.3768C38.7238 28.3768 39.0157 28.0851 39.0157 27.7245V20.437L37.7109 20.9263Z" fill="#EC1E24" />
                  <path d="M18.8862 29.7506C18.8573 29.7426 18.8289 29.7484 18.8001 29.7444C18.7685 29.7397 18.7401 29.7256 18.7071 29.7256C18.689 29.7256 18.6723 29.7334 18.6541 29.7341C18.6341 29.7358 18.6154 29.7397 18.5955 29.7433C17.5374 29.8355 16.75 31.1921 16.75 32.9875C16.75 34.7788 17.5337 36.1325 18.5882 36.2307C18.6122 36.2353 18.6349 36.2399 18.6596 36.2419C18.6759 36.2426 18.6907 36.2494 18.7071 36.2494C18.7389 36.2494 18.7659 36.2358 18.7963 36.2314C18.8264 36.2273 18.8563 36.2331 18.8862 36.2246C21.353 35.5197 23.9221 35.1176 26.4569 35.0087C26.1256 34.463 25.9268 33.7748 25.9268 32.9875C25.9268 32.2002 26.1256 31.5122 26.457 30.9663C23.9223 30.8574 21.353 30.4554 18.8862 29.7506V29.7506Z" fill="#EC1E24" />
                  <path d="M28.7853 30.9808C28.7083 31.0128 28.6239 31.0311 28.5352 31.0311C27.779 31.0311 27.2305 31.8542 27.2305 32.9882C27.2305 34.1223 27.779 34.9454 28.5352 34.9454C28.6237 34.9454 28.7078 34.9637 28.7848 34.9957C30.633 35.0487 32.5217 35.2522 34.3448 35.6188C33.9965 34.8891 33.7977 33.9918 33.7977 32.9882C33.7977 31.9845 33.9967 31.0873 34.3448 30.3577C32.522 30.7243 30.6334 30.9278 28.7853 30.9808V30.9808Z" fill="#EC1E24" />
                  <path d="M37.0587 29.7256C35.9432 29.7256 35.1016 31.1279 35.1016 32.9875C35.1016 34.8473 35.9432 36.2494 37.0587 36.2494C38.1742 36.2494 39.0158 34.8473 39.0158 32.9875C39.0158 31.1279 38.1742 29.7256 37.0587 29.7256V29.7256Z" fill="#EC1E24" />
                  <path d="M17.173 19.2029L27.6546 23.1172C27.7285 23.1447 27.8063 23.1587 27.8839 23.1587C27.9616 23.1587 28.0394 23.1447 28.1133 23.1172L38.4844 19.2444H27.8839C27.5234 19.2444 27.2315 18.9527 27.2315 18.592C27.2315 18.2315 27.5234 17.9396 27.8839 17.9396H38.4844L28.1133 14.0233C27.9655 13.9685 27.8024 13.9685 27.6546 14.0233L17.173 17.9811C16.9189 18.0767 16.75 18.32 16.75 18.592C16.75 18.864 16.9189 19.1075 17.173 19.2029H17.173Z" fill="#EC1E24" />
                  <path d="M35.0633 21.906L28.1165 24.5109C28.0425 24.5383 27.9647 24.5522 27.8871 24.5522C27.8095 24.5522 27.7317 24.5383 27.6577 24.5109L20.7109 21.906V23.8113C20.7109 25.9304 24.4079 27.0732 27.8871 27.0732C31.3663 27.0732 35.0633 25.9304 35.0633 23.8113V21.906Z" fill="#EC1E24" />
                  <defs>
                    <filter id="filter0_d_4_214" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="2" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.109804 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_214" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_214" result="shape" />
                    </filter>
                  </defs>
                </svg>


              </div>

              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">


                <h2 className="font-poppins font-semibold text-[28px] tracking-[0px] text-[#EC1E24] mb-2">
                  Unlimited Support
                </h2>
                <p className="font-normal text-[16px] tracking-[0px] text-center text-[#282529] mb-3">
                  Get unbiased support and 24*7 assistance <br />
                  from our experts.
                </p>
                <button
                  type="button"
                  className="bg-[#EF1E24] h-[40px] rounded-[4px] px-4 font-inter font-semibold text-[14px] leading-[20px] tracking-[-0.08px] text-center text-white"
                >
                  Schedule Your Call
                </button>
              </div>
            </div>


          </div>

          {/* Mobile version */}
          <div className="lg:hidden block pt-8 pb-5 px-4">
            <div className="mb-5">
              <p className="font-normal text-[14px] leading-[1.2] tracking-[0px] text-[#282529] mb-3">
                What Sets Us Apart
              </p>
              <h2 className="font-poppins font-[600] text-[20px]">
                Discover the <br />
                <span className="text-[#EC1E24]">Collegesathi Advantages</span>
              </h2>
            </div>

            <div className="w-full flex flex-col items-center gap-6">
              {/* Services Card - Mobile */}
              <div className="w-full overflow-hidden rounded-[29px] border border-[#FFB8B8] bg-gradient-to-b from-[#FFF6F6] to-white p-6">
                <h2 className="font-semibold text-[14px] leading-[1.2] text-[#282529] mb-2">Our Services</h2>
                <p className="w-[244px] font-normal text-[8px] leading-[1.3] tracking-[0px] text-[#282529] mb-4">
                  Empowering students to make informed decisions.
                </p>
                <div className="left-[-35px] relative rounded-br-full rounded-tr-full border border-[#FFF5F5] h-[30px] flex items-center justify-center bg-white w-[220px] mb-3">
                  <h2 className="font-medium text-[10px] leading-[1.2] tracking-[0px] text-center text-[#282529]">
                    Explore 50+ Universities
                  </h2>
                </div>
                <div className="ml-auto relative right-[-28px] rounded-bl-full rounded-tl-full w-[250px] h-[30px] rounded-[28px] border border-[#EC1E24] bg-gradient-to-br from-[#EC1E24] to-[#FF6363] flex items-center justify-center bg-white mt-4">
                  <h2 className="font-medium text-[10px] leading-[1.2] tracking-[0px] text-center text-white">
                    100% post admission support
                  </h2>
                </div>

                <div className="rounded-full border border-[#FFF5F5] h-[30px] flex items-center justify-center bg-white w-[258px] mb-8 mt-4">
                  <h2 className="font-medium text-[10px] leading-[1.2] tracking-[0px] text-center text-[#282529]">
                    Personalized expert guidance
                  </h2>
                </div>
                <div className="flex w-full h-[55px] relative">
                  <div className="w-[145px] h-[30px] rounded-[28px] border border-[#EC1E24] bg-gradient-to-br from-[#EC1E24] to-[#FF6363] absolute top-0 -left-9 flex items-center justify-end pr-4">
                    <h2 className="font-medium text-[10px] leading-[1.2] tracking-[0px] text-center text-white">
                      24*7 assistance
                    </h2>
                  </div>
                  <div className="pr-6 h-[30px] rounded-[28px] border border-[#FFF5F5] bg-white absolute top-0 -right-10 flex items-center justify-start ps-3">
                    <h2 className="font-medium text-[10px] leading-[1.2] tracking-[0px] text-center text-[#282529]">
                      Check reviews and ratings
                    </h2>
                  </div>
                </div>
              </div>

              {/* University Search Card - Mobile */}
              <div className="w-full h-[300px] rounded-[29px] border border-[#FFB8B8] bg-gradient-to-b from-[#FFEBEB] to-transparent relative flex items-center justify-center">
                <div className="relative z-10">
                  <h2 className="font-poppins font-semibold text-[14px] leading-[1.3] tracking-[0px] text-center text-[#282529] mb-4">
                    Know About Your Favourite University
                  </h2>
                  <p className="font-poppins font-normal text-[8px] leading-[1.4] tracking-[0px] text-center text-[#282529]">
                    Check the details of your favourite university <br />
                    and make an informed decision.
                  </p>
                  <div className="flex h-[157px]">
                    <div
                      ref={searchContainer}
                      className="w-[320px] h-[35px] rounded-[7px] bg-[#F7F6F6] p-[4px] flex items-center justify-between mx-auto mt-4 relative"
                    >
                      {/* Dropdown Toggle Button */}
                      <button
                        type="button"
                        className={`bg-white w-[27px] h-[27px] rounded-[5px] flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 ${isDropdownOpen ? 'rotate-180' : ''
                          }`}
                        onClick={toggleDropdown}
                      >

                        <IoMdArrowDropdownCircle className="transition-transform duration-200 w-[12px] h-[12px]" />
                      </button>

                      {/* Search Input Container */}
                      <div className="bg-white shadow-[0px_1px_2px_0px_#00000026] w-[260px] h-full rounded-tl-[5px] rounded-tr-[5px] relative">
                        <input
                          ref={searchInput}
                          type="text"
                          value={searchQuery}
                          onChange={handleSearchInput}
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          className="w-full h-full relative px-3 z-10 font-poppins font-normal text-[8px] tracking-[0px] text-[#282529] placeholder:text-[#282529] bg-transparent border-none outline-none"
                          placeholder={currentTypingText}
                        />

                        {/* Dropdown Options */}
                        {isDropdownOpen && (
                          <div className="absolute top-[27px] left-0 w-full bg-white shadow-[0px_4px_12px_0px_#00000026] max-h-[120px] overflow-y-auto z-30 rounded-bl-[7px] rounded-br-[7px] border border-gray-100">
                            <ul>
                              {filteredUniversities.map((university) => (
                                <li
                                  key={university.id}
                                  className="h-[28px] flex items-center px-3 cursor-pointer font-poppins font-normal text-[8px] leading-[100%] tracking-[0px] text-[#282529] hover:bg-[#F7F6F6] hover:text-[#EC1E24] transition-all duration-200"
                                  onClick={() => selectUniversity(university)}
                                >
                                  <span className="flex-1 truncate">{university.name}</span>
                                  <span className="text-[6px] text-gray-400 ml-1">{university.location}</span>
                                </li>
                              ))}
                              {filteredUniversities.length === 0 && searchQuery && (
                                <li className="h-[28px] flex items-center px-3 font-poppins font-normal text-[8px] text-gray-400">
                                  No universities found
                                </li>
                              )}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Search Button */}
                      <button
                        type="button"
                        className={`flex items-center justify-center h-full bg-transparent w-[18px] hover:bg-gray-100 rounded transition-colors duration-200 ${!searchQuery.trim() ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        onClick={handleSearch}
                        disabled={!searchQuery.trim()}
                      >
                        <FaSearch className="w-[14px] h-auto" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full pt-14">
                  <img src={Effect?.src} alt="" className="w-full" />
                </div>
              </div>
            </div>

            {/* Support Banner - Mobile */}
            <div className="w-full relative mt-4">
              <img src={shape11?.src} alt="university" className="w-full h-[100px] object-cover" />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center pt-1">
                <h2 className="font-poppins font-semibold text-[14px] leading-[1.3] tracking-[0px] text-[#EC1E24] mb-1">
                  Unlimited Support
                </h2>
                <p className="font-normal text-[8px] leading-[1.4] tracking-[0px] text-center text-[#282529] mb-1">
                  Get unbiased support and 24*7 assistance <br />
                  from our experts.
                </p>
                <button
                  type="button"
                  className="bg-[#EF1E24] h-[20px] rounded-[4px] px-4 font-inter font-semibold text-[8px] leading-[20px] tracking-[-0.08px] text-center text-white"
                >
                  Schedule Your Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}