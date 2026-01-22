'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUsers, FaDollarSign, FaMapMarkerAlt, FaClock, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const stats = [
  {
    // icon: <FaDollarSign className="text-4xl md:text-5xl" />,
    number: "$25M+",
    suffix: "Financed",
    description: "Total mortgage volume processed",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
    image: "/finances.jpg"
  },
  {
    icon: < FaMapMarkerAlt className="text-4xl md:text-5xl" />,
    number: "250+",
    suffix: "States",
    description: "Nationwide coverage across all U.S. states",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    image: "/statemap.jpg"
  },
  {
    icon: <FaHome className="text-4xl md:text-5xl" />,
    number: "500+",
    suffix: "Lenders",
    description: "Network of trusted lending partners",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    image: "/lendersimage500.jpg"
  },
  {
    icon: <FaClock className="text-4xl md:text-5xl" />,
    number: "5 to 7 days",
    suffix: "Days",
    description: "Average time to complete your filings",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    image: "/5days.jpg"
  },
  {
    icon: <FaUsers className="text-4xl md:text-5xl" />,
    number: "1000+",
    suffix: "Clients",
    description: "Happy homeowners we've helped",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    image: "/client.jpg"
  },
  {
    icon: <FaCheckCircle className="text-4xl md:text-5xl" />,
    number: "95%",
    suffix: "Approval Rate",
    description: "Success rate for qualified applicants",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    image: "/approval.jpg"
  },
];

const MortgageStatsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + stats.length) % stats.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stats.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full pt-20 md:pt-24 pb-16 md:pb-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
            <h2 className="text-[2rem] font-semibold ml-2 augmenHeading">
              Our Impact
            </h2>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Growing Strong, Serving You Better
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            Dedicated to assisting Americans attain their homeownership targets.
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <div className="relative h-[350px] md:h-[400px]">
            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 flex items-center justify-center"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-[#E2B10F] text-xl" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 flex items-center justify-center"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-[#E2B10F] text-xl" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className={`w-full max-w-4xl mx-auto ${stats[currentIndex].bgColor} rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl`}>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                    <div className="text-center md:text-left w-full md:w-auto">
                      <div className="flex justify-center md:justify-start mb-4 text-[#E2B10F]">
                        {stats[currentIndex].icon}
                      </div>
                      <div className="flex items-baseline gap-2 flex-wrap justify-center md:justify-start mb-2">
                        <span className={`text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r ${stats[currentIndex].color} bg-clip-text text-transparent`}>
                          {stats[currentIndex].number}
                        </span>
                        <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700">
                          {stats[currentIndex].suffix}
                        </span>
                      </div>
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-medium">
                        {stats[currentIndex].description}
                      </p>
                    </div>
                    <div className="hidden lg:block">
                      <div className="relative w-48 h-48 md:w-64 md:h-64">
                        <img
                          src={stats[currentIndex].image}
                          alt={stats[currentIndex].suffix}
                          className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white"
                        />
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${stats[currentIndex].color} opacity-10`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {stats.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-[#E2B10F] w-8' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {stats.slice(0, 4).map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${stat.bgColor} rounded-xl p-4 shadow-lg`}
            >
              <div className="text-center">
                <div className="flex justify-center mb-2 text-[#E2B10F]">
                  {stat.icon}
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-1 flex-wrap">
                  <span className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </span>
                  <span className="text-sm font-bold text-gray-700">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-tight">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MortgageStatsCarousel;

