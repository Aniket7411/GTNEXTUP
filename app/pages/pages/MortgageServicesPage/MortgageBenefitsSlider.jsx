'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLock, FaRocket, FaShieldAlt, FaHandshake, FaChartLine, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const benefits = [
  {
    title: "Lowest Rates Guaranteed",
    subtitle: "Save Thousands",
    description: "We will shop around to get you the lowest best rates. The clients save greatly on their mortgage repayment.",
    icon: <FaChartLine className="text-4xl" />,
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    title: "Lightning-Fast Approval",
    subtitle: "Close in 30 Days",
    description: "Prior to-approving you in 24 hours and closing within 30 days, our streamlined digital platform will get you there. No delays, no headaches.",
    icon: <FaRocket className="text-4xl" />,
    color: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    title: "Zero Hidden Fees",
    subtitle: "100% Transparent",
    description: "That is what you see and that is what you get. No, additional charges, no. Full transparency throughout.",
    icon: <FaLock className="text-4xl" />,
    color: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50"
  },
  {
    title: "Expert Guidance",
    subtitle: "Licensed Professionals.",
    description: "Co-operate with licensed mortgage professionals, who know the U.S. market better than ever. Find specific recommendations to your case.",
    icon: <FaHandshake className="text-4xl" />,
    color: "from-yellow-500 to-amber-600",
    bgGradient: "from-yellow-50 to-amber-50"
  },
  {
    title: "All Loan Types",
    subtitle: "Complete Solutions",
    description: "FHA, VA, USDA, Conventional, Jumbo - we have you covered. We will lend you the right loan regardless of the circumstances.",
    icon: <FaShieldAlt className="text-4xl" />,
    color: "from-red-500 to-rose-600",
    bgGradient: "from-red-50 to-rose-50"
  },
  {
    title: "24/7 Support",
    subtitle: "Always Available",
    description: "Midnight questions? We're here. We have a team that works 24 hours a day in case you have any questions and help you through the process.",
    icon: <FaClock className="text-4xl" />,
    color: "from-indigo-500 to-blue-600",
    bgGradient: "from-indigo-50 to-blue-50"
  },
];

const MortgageBenefitsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % benefits.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full pt-20 md:pt-24 pb-16 md:pb-24 bg-white relative overflow-hidden">
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
              Why Choose Us
            </h2>
          </div>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 px-4">
            Your Mortgage, Our Commitment
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Benefit from the alternative of having highly committed mortgage specialists.
          </p>
        </motion.div>

        {/* Desktop Slider */}
        <div className="hidden md:block">
          <div className="relative h-[450px] md:h-[500px]">
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
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`absolute inset-0 bg-gradient-to-br ${benefits[currentIndex].bgGradient} rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl`}
              >
                <div className="flex flex-col md:flex-row items-center justify-between h-full gap-6 md:gap-8">
                  <div className="flex-1 w-full md:w-auto">
                    <div className={`inline-block p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${benefits[currentIndex].color} text-white mb-4 md:mb-6`}>
                      {benefits[currentIndex].icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-gray-800">
                      {benefits[currentIndex].title}
                    </h3>
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold text-[#E2B10F] mb-4">
                      {benefits[currentIndex].subtitle}
                    </p>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                      {benefits[currentIndex].description}
                    </p>
                    <button
                      onClick={() => navigate('/contact-getraise-technologies')}
                      className={`px-6 md:px-8 py-3 md:py-4 rounded-xl text-sm md:text-base font-bold text-white bg-gradient-to-r ${benefits[currentIndex].color} hover:shadow-xl transition-all transform hover:scale-105`}
                    >
                      Get Started Today
                    </button>
                  </div>
                  <div className="hidden lg:block">
                    <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br ${benefits[currentIndex].color} opacity-30 blur-3xl`}></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${index === currentIndex
                    ? `bg-gradient-to-r ${benefits[index].color} w-12`
                    : 'bg-gray-300 w-2'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {benefits.slice(0, 3).map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${benefit.bgGradient} rounded-2xl p-6 shadow-lg`}
            >
              <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${benefit.color} text-white mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-lg font-semibold text-[#E2B10F] mb-2">
                {benefit.subtitle}
              </p>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MortgageBenefitsSlider;

