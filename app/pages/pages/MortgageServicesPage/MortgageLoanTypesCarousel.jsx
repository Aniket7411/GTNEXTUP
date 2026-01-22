'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaShieldAlt, FaFlag, FaBuilding, FaChartLine, FaKey } from 'react-icons/fa';

const loanTypes = [
  {
    name: "FHA Loans",
    icon: <FaShieldAlt />,
    downPayment: "3.5%",
    creditScore: "580+",
    description: "Exceptional with former homebuyers whose credit rating is lower. Relaxed requirements and low down payment.",
    benefits: ["Low down payment", "Least restrictive credit conditions.", "Government-backed", "First-time buyer friendly"],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    name: "VA Loans",
    icon: <FaFlag />,
    downPayment: "0%",
    creditScore: "Flexible",
    description: "It gives exclusive benefits to veterans, active-duty service-members, and spouses who are entitled. Zero down payment required.",
    benefits: ["Zero down payment", "No PMI required", "Lower interest rates", "Veteran benefits"],
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50"
  },
  {
    name: "Conventional Loans",
    icon: <FaHome />,
    downPayment: "5-20%",
    creditScore: "620+",
    description: "Trite mortgages that are competitive. Suits well customers who are well creditworthy and have an income that is very stable.",
    benefits: ["Competitive rates", "Flexible terms", "No mortgage insurance (20% down)", "Wide availability"],
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50"
  },
  {
    name: "USDA Loans",
    icon: <FaBuilding />,
    downPayment: "0%",
    creditScore: "640+",
    description: "Rural homebuyer program with zero down payment. Perfect for properties in eligible rural areas.",
    benefits: ["Zero down payment", "Rural property focus", "Low interest rates", "No PMI"],
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    name: "Jumbo Loans",
    icon: <FaChartLine />,
    downPayment: "10-20%",
    creditScore: "700+",
    description: "On luxury properties, above standard loan maturity. Flexible-termed high-value financing.",
    benefits: ["High loan amounts", "Luxury properties", "Flexible terms", "Competitive rates"],
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    name: "Refinancing",
    icon: <FaKey />,
    downPayment: "N/A",
    creditScore: "Varies",
    description: "Reduce or pay less, or tap into your pool of equity. Several re-finance opportunities.",
    benefits: ["Lower interest rates", "Cash-out options", "Rate reduction", "Term adjustment"],
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50"
  },
];

const MortgageLoanTypesCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="w-full pt-20 md:pt-24 pb-16 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
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
              Loan Types
            </h2>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4">
            Find Your Perfect Mortgage Match
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We provide all kinds of mortgage loans offered in the U.S. Select the one that suits your circumstances.
          </p>
        </motion.div>

        {/* Loan Type Selector */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8 px-4">
          {loanTypes.map((loan, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`px-3 md:px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all ${
                selectedIndex === index
                  ? `bg-gradient-to-r ${loan.color} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
              }`}
            >
              {loan.name}
            </button>
          ))}
        </div>

        {/* Selected Loan Details */}
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`${loanTypes[selectedIndex].bgColor} rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              {/* <div className={`inline-block p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${loanTypes[selectedIndex].color} text-white mb-4 md:mb-6 text-3xl md:text-4xl`}>
                {loanTypes[selectedIndex].icon}
              </div> */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-gray-800">
                {loanTypes[selectedIndex].name}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-6 leading-relaxed">
                {loanTypes[selectedIndex].description}
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4">
                  <p className="text-xs md:text-sm text-gray-500 mb-1">Down Payment</p>
                  <p className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${loanTypes[selectedIndex].color} bg-clip-text text-transparent`}>
                    {loanTypes[selectedIndex].downPayment}
                  </p>
                </div>
                <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4">
                  <p className="text-xs md:text-sm text-gray-500 mb-1">Credit Score</p>
                  <p className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${loanTypes[selectedIndex].color} bg-clip-text text-transparent`}>
                    {loanTypes[selectedIndex].creditScore}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-800">Key Benefits</h4>
              <div className="space-y-3">
                {loanTypes[selectedIndex].benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center gap-3 bg-white rounded-lg p-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${loanTypes[selectedIndex].color}`}></div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              <button
                onClick={() => window.location.href = '/contact-getraise-technologies'}
                className={`mt-4 md:mt-6 w-full px-4 md:px-6 py-3 md:py-4 rounded-xl text-sm md:text-base font-bold text-white bg-gradient-to-r ${loanTypes[selectedIndex].color} hover:shadow-xl transition-all transform hover:scale-105`}
              >
                Apply for {loanTypes[selectedIndex].name}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MortgageLoanTypesCarousel;

