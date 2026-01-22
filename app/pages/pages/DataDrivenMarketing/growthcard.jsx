import React, { useEffect, useRef, useState } from "react";

const Services = () => {
  const services = [
    {
      title: "Performance Marketing & Analytics",
      subtitle: "Organic Traffic",
      image: "./assets/growth1.png",
      tags: ["On-Page SEO", "Keyword Optimization"],
      des: "With our digital marketing packages including drip campaigns, email automation, and lead nurturing, we deliver real ROI which makes us the best Digital Marketing Company in India "
    },
    {
      title: "Paid Advertising",
      subtitle: "Google Ads, Meta Ads",
      image: "./assets/growth2.png",
      tags: ["PPC Campaigns", "Retargeting Ads", "Conversion Tracking"],
      des: "We run data-driven Google Ads services and Meta Ads services including retargeting ads, PPC campaigns, and conversion tracking which make us a result-driven digital marketing agency you can trust."
    },
    {
      title: "Social Media Marketing &",
      subtitle: "Engagement & Branding",
      image: "./assets/growth3.png",
      tags: ["Brand Awareness", "Audience Targeting"],
      des: "As one of the Best Digital Marketing Companies in India, we offer custom digital marketing solutions built to increase brand awareness, drive audience targeting, and spark social engagement."
    },
    {
      title: "Content & Copy Strategy",
      subtitle: "Engage with words",
      image: "./assets/growth4.png",
      tags: ["Content Marketing", "Copywriting"],
      des: "Our content marketing, focused value proposition, and sharp copywriting boost conversions and digital brand identity."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  // Initialize with a default desktop width to prevent initial render issues
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const autoPlayRef = useRef();

  // Track window width for responsive translations
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Auto-play carousel every 4s
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = () => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    };
  }, [isAutoPlaying, services.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const play = () => autoPlayRef.current();
    const interval = setInterval(play, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  // Enhanced card style with all cards visible and blur effect
  const getCardStyles = (index) => {
    const offset = index - currentIndex;
    const totalCards = services.length;

    // Calculate position for circular carousel
    let adjustedOffset = offset;
    if (adjustedOffset > totalCards / 2) adjustedOffset -= totalCards;
    if (adjustedOffset < -totalCards / 2) adjustedOffset += totalCards;

    // All cards are visible, but with different scales, opacities, and blur
    const isCenter = adjustedOffset === 0;
    const isAdjacent = Math.abs(adjustedOffset) === 1;
    const isFar = Math.abs(adjustedOffset) === 2;

    // Get window width for responsive translations
    const isMobile = windowWidth < 640;
    const isTablet = windowWidth >= 640 && windowWidth < 1024;

    let scale, opacity, zIndex, translateX, blur;

    if (isCenter) {
      scale = 1;
      opacity = 1;
      zIndex = 20;
      translateX = 0;
      blur = "blur(0px)";
    } else if (isAdjacent) {
      scale = isMobile ? 0.85 : 0.9;
      opacity = 0.8;
      zIndex = 10;
      // Reduced translateX for mobile to prevent overflow
      translateX = adjustedOffset * (isMobile ? 50 : isTablet ? 75 : 100);
      blur = "blur(1px)";
    } else if (isFar) {
      scale = isMobile ? 0.75 : 0.8;
      opacity = 0.6;
      zIndex = 5;
      // Reduced translateX for mobile to prevent overflow
      translateX = adjustedOffset * (isMobile ? 40 : isTablet ? 60 : 80);
      blur = "blur(2px)";
    } else {
      scale = isMobile ? 0.65 : 0.7;
      opacity = 0.4;
      zIndex = 1;
      // Reduced translateX for mobile to prevent overflow
      translateX = adjustedOffset * (isMobile ? 30 : isTablet ? 45 : 60);
      blur = "blur(3px)";
    }

    return {
      left: '50%',
      top: '50%',
      transform: `translate(calc(-50% + ${translateX}px), -50%) scale(${scale})`,
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      opacity,
      zIndex,
      filter: isCenter
        ? "drop-shadow(0 20px 40px rgba(128, 90, 213, 0.3))"
        : `${blur} drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))`,
      pointerEvents: "auto", // All cards clickable
    };
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 select-none overflow-x-hidden">
      {/* Heading */}
      <div className="text-center mb-2 sm:mb-12">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <span className="w-3 h-3 mr-2 bg-yellow-500 rounded-full"></span>
          <h2 className="text-base sm:text-lg  text-gray-900">
            what we do
          </h2>
        </div>
        <p className="text-xl sm:text-2xl mb-3 md:text-3xl lg:text-4xl font-semibold text-gray-800 px-4">
          Your Growth. Our Expertise.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative flex items-center justify-center min-h-[300px] sm:min-h-[350px] lg:min-h-[380px] overflow-x-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Cards Container */}
        <div className="relative w-full max-w-6xl overflow-visible" style={{ height: '100%', minHeight: '300px' }}>
          {services.map((service, index) => {
            const offset = index - currentIndex;
            const totalCards = services.length;
            let adjustedOffset = offset;
            if (adjustedOffset > totalCards / 2) adjustedOffset -= totalCards;
            if (adjustedOffset < -totalCards / 2) adjustedOffset += totalCards;

            // Hide cards that are too far off-screen on mobile
            const isMobileCheck = windowWidth < 640;
            const shouldHide = isMobileCheck && Math.abs(adjustedOffset) > 1;

            return (
              <div
                key={index}
                className="absolute bg-white rounded-xl shadow-lg w-[260px] sm:w-[300px] lg:w-[320px] h-[320px] sm:h-[340px] lg:h-[360px] flex flex-col cursor-pointer hover:scale-105 transition-transform duration-300"
                style={{
                  ...getCardStyles(index),
                  display: shouldHide ? 'none' : 'flex'
                }}
                onClick={() => goToSlide(index)}
              >
                {/* Image */}
                <div className="h-32 sm:h-36 lg:h-40 rounded-t-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                      {service.title}
                    </h3>
                    <p className="text-purple-600 font-medium mb-2 sm:mb-3 text-xs sm:text-sm">
                      {service.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                      {service.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-[#000]">{service.des}</p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goPrev}
          aria-label="Previous"
          className="absolute left-2 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all z-30 border border-gray-200"
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goNext}
          aria-label="Next"
          className="absolute right-2 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all z-30 border border-gray-200"
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      {/*  <div className="flex justify-center mt-8 space-x-2 sm:space-x-3">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-purple-600 scale-125" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Services;
