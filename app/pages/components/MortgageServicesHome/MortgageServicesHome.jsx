'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaHome, FaMapMarkerAlt, FaDollarSign, FaShieldAlt } from 'react-icons/fa';

const MortgageServicesHome = () => {
  const router = useRouter();

  const features = [
    {
      icon: <FaHome className="text-3xl text-[#E2B10F]" />,
      title: "Nationwide Coverage",
      desc: "Mortgage services across all 50 U.S. states"
    },
    {
      icon: <FaDollarSign className="text-3xl text-[#E2B10F]" />,
      title: "Competitive Rates",
      desc: "Best mortgage rates from top U.S. lenders"
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#E2B10F]" />,
      title: "Licensed Professionals",
      desc: "Licensed mortgage experts with U.S. market expertise"
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl text-[#E2B10F]" />,
      title: "State-Specific Expertise",
      desc: "Understanding of local regulations and requirements"
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 md:py-24 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
            <h2 className="text-[1rem] font-semibold ml-2 augmenHeading">
              Our Services
            </h2>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mortgage Services in USA
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Getraise Technologies now offers comprehensive mortgage services across the United States.
            Our licensed mortgage professionals help you navigate the U.S. real estate market with
            expert guidance, competitive rates, and personalized solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#E2B10F] to-yellow-400 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Homeownership Journey?
          </h3>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Whether you're buying your first home, refinancing, or investing in real estate,
            we're here to help you navigate the U.S. mortgage market with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/mortgage-services')}
              className="bg-white text-[#E2B10F] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Mortgage Services
            </button>
            <button
              onClick={() => router.push('/contact-getraise-technologies')}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#E2B10F] transition-colors"
            >
              Get Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MortgageServicesHome;

