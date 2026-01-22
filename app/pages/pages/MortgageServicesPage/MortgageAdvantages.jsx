'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDollarSign, 
  FaChartLine, 
  FaRocket, 
  FaUsers, 
  FaBrain, 
  FaTachometerAlt, 
  FaShieldAlt, 
  FaLaptopCode, 
  FaLightbulb, 
  FaGlobe, 
  FaCheckCircle, 
  FaHandshake, 
  FaCogs 
} from 'react-icons/fa';

const advantages = [
  {
    icon: <FaDollarSign className="text-3xl" />,
    title: "Cost Optimization",
    description: "Reduce mortgage processing costs while maintaining high-quality service standards.",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50"
  },
  {
    icon: <FaChartLine className="text-3xl" />,
    title: "Tailored Impact Framework",
    description: "Customized mortgage solutions designed to meet your specific financial goals and requirements.",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50"
  },
  // {
  //   icon: <FaRocket className="text-3xl" />,
  //   title: "Zero Investment to Start",
  //   description: "Begin your mortgage journey with no upfront costs or hidden fees. Transparent pricing from day one.",
  //   color: "from-purple-500 to-violet-600",
  //   bgColor: "bg-purple-50"
  // },
  {
    icon: <FaUsers className="text-3xl" />,
    title: "Access to Specialized Expertise",
    description: "Work with licensed mortgage professionals and industry experts across all 50 states.",
    color: "from-yellow-500 to-amber-600",
    bgColor: "bg-yellow-50"
  },
  {
    icon: <FaBrain className="text-3xl" />,
    title: "Deep Domain Immersion",
    description: "Extensive knowledge of U.S. mortgage regulations, market trends, and state-specific requirements.",
    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50"
  },
  {
    icon: <FaTachometerAlt className="text-3xl" />,
    title: "Increased Efficiency and Productivity",
    description: "Streamlined processes and digital tools that accelerate your mortgage approval and closing timeline.",
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50"
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: "Reduced Operational Risks",
    description: "Compliance with federal regulations (RESPA, TILA) and state requirements ensures secure transactions.",
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50"
  },
  {
    icon: <FaLaptopCode className="text-3xl" />,
    title: "Latest Technology and Infrastructure",
    description: "State-of-the-art digital platform for seamless mortgage application, tracking, and management.",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50"
  },
  {
    icon: <FaLightbulb className="text-3xl" />,
    title: "Enhanced Innovation and Agility",
    description: "Adaptive mortgage solutions that evolve with market changes and your changing needs.",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: <FaGlobe className="text-3xl" />,
    title: "Nationwide Coverage",
    description: "Mortgage services available across all 50 U.S. states with localized expertise and support.",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50"
  },
  {
    icon: <FaCheckCircle className="text-3xl" />,
    title: "Assured Quality and Compliance",
    description: "Rigorous quality control and adherence to industry best practices and regulatory standards.",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50"
  },
  {
    icon: <FaHandshake className="text-3xl" />,
    title: "Outcome-Driven Collaboration",
    description: "Partnership approach focused on achieving your homeownership and financial goals successfully.",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50"
  },
  {
    icon: <FaCogs className="text-3xl" />,
    title: "Strategic Capability Augmentation",
    description: "Comprehensive mortgage support that enhances your ability to make informed financial decisions.",
    color: "from-slate-500 to-gray-600",
    bgColor: "bg-slate-50"
  },
];

const MortgageAdvantages = () => {
  return (
    <section className="w-full pt-20 md:pt-24 pb-16 md:pb-24 bg-gradient-to-b from-white via-gray-50 to-white">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Beyond Mortgage Services, Into Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver comprehensive, end-to-end mortgage solutions designed to transform your homeownership journey. 
            Our approach goes beyond traditional lending to provide strategic value and long-term financial growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`${advantage.bgColor} rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:scale-105 border border-gray-100`}
            >
              <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${advantage.color} text-white mb-4`}>
                {advantage.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                {advantage.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MortgageAdvantages;

