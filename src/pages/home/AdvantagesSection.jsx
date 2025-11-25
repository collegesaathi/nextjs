'use client';

import { useState, useEffect, useRef } from 'react';
import shape11 from "../asserts/home/shape11.avif"
import { FaArrowRight, FaCaretLeft, FaCaretRight, FaSearch } from 'react-icons/fa';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import Effect from "../asserts/home/effect.avif"
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
                  <h2 className="font-poppins font-[600] xl:text-28 text-custom7 text-18">
                    Discover the <span className="text-[#EC1E24]">Collegesathi Advantages</span>
                  </h2>
                </div>
                <div
                  className="flex items-center space-x-4"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <div className="w-[82.42px] md:w-[191px] h-2 bg-gray-200 rounded-full overflow-hidden">
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
                    <FaCaretLeft size={24} className="!text-red-500 " />
                  </button>
                  <button
                    type="button"
                    className={`w-[18px] h-[18px] md:w-[35px] md:h-[35px] rounded-full flex items-center justify-center border cursor-pointer transition-all duration-300 ${progress > 10
                      ? 'border-custom2 text-custom2 hover:bg-[#EC1E24] hover:text-white hover:border-[#EC1E24]'
                      : 'border-custom9 text-custom9'
                      }`}
                    onClick={slideNext}
                  >
                    <FaCaretRight size={24} className="!text-red-500 " />

                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              {/* Services Card */}
              <div
                ref={servicesContainer}
                className="w-[478.26px] overflow-hidden h-[418px] rounded-[29px] border border-[#FFB8B8] bg-gradient-to-b from-[#FFF6F6] to-white p-6"
              >
                <h2
                  ref={servicesTitle}
                  className="font-semibold text-[24px] text-[#282529] mb-2 services-animate animate-from-top"
                >
                  Our Services
                </h2>
                <p
                  ref={servicesSubtitle}
                  className="w-[244px] font-normal text-[16px] tracking-[0px] text-[#282529] mb-4 services-animate animate-from-top"
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
                className="w-[676px] h-[418px] rounded-[29px] border border-[#FFB8B8] bg-gradient-to-b from-[#FFEBEB] to-transparent relative p-[25px]"
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
            <div className="relative h-[207px]">
              <img src={shape11?.src} alt="university" className="w-full h-full object-cover" />
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
                   
                        <IoMdArrowDropdownCircle  className="transition-transform duration-200 w-[12px] h-[12px]" />
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
                        <FaSearch  className="w-[14px] h-auto" />
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