'use client';

import React from "react";
import { FaHome, FaFileContract, FaCalculator, FaShieldAlt, FaHandshake, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import TestimonialCarousel from "../HomePage/Feedback/Feedback";
import { useRouter } from "next/navigation";
import MortgageFAQ from "./mortgagefaq";
import MortgageCards from "./mortgagecards";
import MarqueeComp from "../../components/Marq/Marq";
import { useFormContext } from "../../components/formcontext";
import MortgageStatsCarousel from "./MortgageStatsCarousel";
import MortgageBenefitsSlider from "./MortgageBenefitsSlider";
import MortgageLoanTypesCarousel from "./MortgageLoanTypesCarousel";
import MortgageAdvantages from "./MortgageAdvantages";

const features = [
  {
    title: 'Customer-First Approach',
    desc: 'We will work on getting to know what you need and provide you the financial profile solutions. Our licensed mortgage personnel assist you in identifying the most suitable mortgage product that suits your situation.',
    icon: "/assets/mortgage-icon-1.svg",
  },
  {
    title: 'Simple & Transparent Process',
    desc: 'Sparsely documented, with transparent conditions and absence of the fine print. You are aware of at least what to expect within the mortgage process because we will be totally transparent in keeping you informed about the process, especially when it comes to the application.',
    icon: "/assets/mortgage-icon-2.svg",
  },
  {
    title: 'Competitive Rates and Flexible Terms',
    desc: 'Long-term affordability loan designs. We deal with various lenders in order to acquire competitive interest rates and repayment strategies which can match with your financial objectives.',
    icon: "/assets/mortgage-icon-3.svg",
  },
  {
    title: 'Fast Processing & Support',
    desc: 'Rapid approvals and support on the entire process. Our automated online experience guarantees smooth-cut processing and our staff gives you one-on-one service during your mortgage process.',
    icon: "/assets/mortgage-icon-4.svg",
  },
  {
    title: 'Trusted Financial Practices',
    desc: 'In respect with controlled lending criteria and frameworks tested in the market. We make sure we are in line with federal laws (RESPA, TILA), and state-specific requirements and offer credible and conforming financing sources.',
    icon: "/assets/mortgage-icon-5.svg",
  },
];

const mortgageServices = [
  {
    svgSrc: "/assets/mortgage-service-1.svg",
    icon: "/assets/mortgage-consultation.svg",
    title: "Mortgage Consultation and Pre-Approval",
    description: "One on one counseling by licensed professionals in their business of mortgage so that you can know your buying power and how to work through the different modes of loans. Be pre-approved while being confident in your position to buy a home.",
    className: "lg:mt-5 lg:ml-5 lg:z-[5]",
  },
  {
    svgSrc: "/assets/mortgage-service-2.svg",
    icon: "/assets/mortgage-loan.svg",
    title: "Loan Underwriting/Loan Processing",
    description: "Lean processing and few documentation tasks. Paper work is easy and swift, as we take care of all legal documentation and make sure that the approval process does not require extensive time.",
    className: "lg:-mt-16 lg:-ml-10 lg:z-[6]",
  },
  {
    svgSrc: "/assets/mortgage-service-3.svg",
    icon: "/assets/mortgage-refinance.svg",
    title: "Balance Transfer & Refinancing",
    description: "Lessen your monthly payment in our refinancing programs. Get improved rates, pay less, or use home equity by tapping into cash out refinance options that best meet your requirements.",
    className: "lg:mt-[75px] lg:-ml-[70px] lg:z-[8]",
  },
  {
    svgSrc: "/assets/mortgage-service-4.svg",
    icon: "/assets/mortgage-first-time.svg",
    title: "First-Time Homebuyer Programs",
    description: "Special interventions such as FHA, VA and USDA loans to ensure that the home ownership is available to everyone. Low down load deals and informational support to help you make your first home purchase.",
    className: "lg:-mt-[90px] lg:-ml-[50px] lg:z-[5]",
  },
  {
    svgSrc: "/assets/mortgage-service-5.svg",
    icon: "/assets/mortgage-commercial.svg",
    title: "Business and Commercial Financing",
    description: "The commercial and expansion of business, investment property tailored mortgage products. Bending conditions and appealing rates to help in advancing your business and financial achievements.",
    className: "lg:-mt-[280px] lg:-ml-[140px] lg:z-[7]",
  },
  {
    svgSrc: "/assets/mortgage-service-6.svg",
    icon: "/assets/mortgage-support.svg",
    title: "Ongoing Support & Servicing",
    description: "Committed support all through your mortgage life. After application and even after the loan has been closed, we can assist in changing the loan terms, questions about payment, and also we take care of any questions you might have.",
    className: "lg:-mt-[30px] lg:-ml-[170px] lg:z-[8]",
  },
];

const ServicesSection = () => {
  const { openForm } = useFormContext();
  const router = useRouter();

  return (
    <div className='header-spacing text-[#000]'>
      <div className='overflow-hidden'>
        <div className="relative w-full h-[calc(100vh-65px)] bg-no-repeat bg-cover bg-center text-center flex flex-col items-center justify-center overflow-hidden px-4 md:px-10">
          {/* Background Image/Video */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 via-white to-white z-0" />

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-black text-[2.5rem] md:text-[3.5rem] mt-[110px] lg:mt-0 lg:text-[5rem] leading-tight font-bold m-0">
              Your Dream Home
            </h1>
            <h1 className="text-[2.3rem] text-[#E2B10F] md:text-[3rem] lg:text-[5rem] leading-tight font-bold m-0">
              Awaits You
            </h1>
            <p className="text-[16px] md:text-[20px] font-medium w-[80%] mx-auto mt-2">
              See the change a community-oriented approach will produce. We have local specialists who are willing to offer their hand to help in your financial future plans, whether you require a new mortgage, refinancing or merely discussing your financial needs. Enough with mediocre and mediocre mortgage services, it is time to begin enjoying a superior attitude towards mortgage services, one that is friendly, supportive and user-focused.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-8 mb-8 md:mt-6 px-4 md:px-8 z-30">
            <button
              className="bg-transparent px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black cursor-pointer hover:bg-[#E2B10F] hover:text-white font-medium border border-[#E2B10F]"
              onClick={() => window.location.href = '/contact-getraise-technologies'}
            >
              Check Rates
            </button>

            <button
              className="bg-[#E2B10F] px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black hover:bg-transparent hover:text-black border border-[#E2B10F] cursor-pointer font-medium"
              onClick={() => window.location.href = '/contact-getraise-technologies'}
            >
              Find a Mortgage Expert
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 bg-[#fff] lg:px-12 flex flex-col md:flex-row items-center md:gap-12 m-auto min-h-[50vh]">
        {/* Right - Text Content */}
        <div className="w-full md:w-1/2 z-20">
          <div className="flex items-center  space-x-2 mb-4">
            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
            <h2 className="text-[1.5rem] font-semibold ml-2 mb-0 augmenHeading">
              What We Offer
            </h2>
          </div>
          <div className="flex items-center gap-x-2 mb-2">
            <p className="text-4xl font-bold mb-0 augmenHeading">
              Comprehensive Mortgage Solutions
            </p>
          </div>
          <p className="text-[#000] mt-3 mb-4 leading-relaxed"
            style={{
              fontSize: '15px',
            }}
          >
            The mortgage services also allow our customers to realize the property value to different financial needs such as home ownership, business growth, and personal needs. We make it easy and carefree to finance as we offer flexible repayment terms and competitive rates.
          </p>
          <div className="mt-4">
            <h4 className="text-xl font-semibold mb-3 text-gray-800">Our Mortgage Offerings Include:</h4>
            <ul className="space-y-2 text-[#000]" style={{ fontSize: '15px' }}>
              <li className="flex items-start">
                <span className="text-[#E2B10F] mr-2 font-bold">•</span>
                <span><strong>Home Loans</strong> to buy or to build a residence.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E2B10F] mr-2 font-bold">•</span>
                <span><strong>Loan against property (LAP)</strong> to use in business or personal purpose.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E2B10F] mr-2 font-bold">•</span>
                <span><strong>Balance Transfer/Refinancing</strong> to lessen payment requirement per month.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E2B10F] mr-2 font-bold">•</span>
                <span><strong>Cash-Out Refinancing</strong> - To use home equity on other requirements.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E2B10F] mr-2 font-bold">•</span>
                <span><strong>First-Time Homebuyer Programs</strong> which are FHA, VA, and the USDA loans.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#E2B10F] mr-2 font-bold">•</span>
                <span><strong>Commercial Investment Mortgages</strong> (Business property-based) and Investments in real estate.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Left - Image */}
        <div className="relative w-full md:w-1/2 z-20">
          <img
            src="/assets/mortgagett.jpg"
            alt="Mortgage Services"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Stats Carousel */}
      <MortgageStatsCarousel />

      {/* Benefits Slider */}
      <MortgageBenefitsSlider />

      {/* Loan Types Carousel */}
      <MortgageLoanTypesCarousel />

      {/* End-to-End Mortgage Solutions Section */}
      <section className="w-full pt-20 md:pt-24 pb-16 md:pb-24 bg-white">
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
                Our Services
              </h2>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              End-to-End Mortgage Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              During first meeting up to closure and subsequent service of loan, our mortgage services span the entire process of owning a home must that include all fronts of owning a home. We apply the principle of our integrated approach in order to achieve the seamless coordination and high-quality service at all the steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaHandshake className="text-4xl text-[#E2B10F] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Mortgage Origination</h3>
              <p className="text-gray-600">
                Full service mortgage origination which includes pre-qualification, loan application processing and loan structuring based on your financial profile.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaFileContract className="text-4xl text-[#E2B10F] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Underwriting & Processing</h3>
              <p className="text-gray-600">
                Professional underwriting services where documentation and compliance checking is simplified and super processing performed to hasten the process of getting your loan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaCalculator className="text-4xl text-[#E2B10F] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Loan Servicing</h3>
              <p className="text-gray-600">
                Continued servicing of your mortgage comprising of processing of mortgage payments, escrow services as well as making of modifications and customer services during your loan period.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaChartLine className="text-4xl text-[#E2B10F] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Refinancing Solutions</h3>
              <p className="text-gray-600">
                Full-service refinancing solutions such as rate-and-term refinancing, cash-out solutions, and streamline refinancing program to help you make the most of your mortgage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaHome className="text-4xl text-[#E2B10F] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">First-Time Homebuyer Programs</h3>
              <p className="text-gray-600">
                Special services and programs to first-time buyers such as FHA, VA, and USDA with low down payment rates and education services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaShieldAlt className="text-4xl text-[#E2B10F] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">Compliance and Quality Assurance</h3>
              <p className="text-gray-600">
                A strict compliance management that implies the observance of federal laws (RESPA, TILA) and the state provisions with quality standards assurance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <MortgageAdvantages />

      <section className="bg-[#fff]">
        <div className="flex items-center justify-center space-x-2 mb-5 px-12">
          <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
          <h2 className="text-[2rem] text-center font-semibold ml-2 mb-0 augmenHeading">
            Our Mortgage Services
          </h2>
        </div>
        <div className="text-center mb-8 px-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Complete Mortgage Service Portfolio
          </h3>
          <p className="text-lg text-gray-600">
            This is through our complete mortgage services using which customers can access property value in relation to several financial uses such as business growth, home ownership, and personal use. All of the services are geared towards your success.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center px-3 pb-10 relative">
          {mortgageServices.map((service, index) => {
            const icons = [FaHome, FaFileContract, FaCalculator, FaHandshake, FaChartLine, FaShieldAlt];
            const IconComponent = icons[index % icons.length];
            const catchyPhrases = [
              "Specialist Representation and Pre-adoption",
              "Supposedly Smoother Processing and Doc",
              "Refinancing Solutions and Transfer of balances",
              "First-Time Buyer Programs",
              "Business and Commercial Financing",
              "Fancy support and servicing"
            ];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 w-full sm:w-[48%] lg:w-[30%] min-h-[320px] m-4 shadow-lg border-2 border-gray-200 hover:border-[#E2B10F] hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center shadow-md">
                  <IconComponent className="text-2xl text-yellow-700" />
                </div>
                <div className="text-sm font-bold text-[#E2B10F] mb-2">
                  {catchyPhrases[index]}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="relative w-full bg-white py-12 px-4 md:px-12">
          <div className="flex items-center justify-center space-x-2 mb-5">
            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
            <h2 className="text-[1.2rem] ml-2 mb-0 augmenHeading">
              Why Choose Us
            </h2>
          </div>
          <p className="text-2xl md:text-4xl font-semibold mb-6 text-start">
            Why Our Customers Choose Getraise
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We have local professionals to offer a hand to those in need of a new mortgage, or someone to assist in your financial future planning or a tailored refinancing solution. Find out the difference a community-oriented approach can make and begin a relationship with a mortgage partner that makes you the first. Neighborly, amiable and fair.
          </p>

          <div className="w-full rounded-xl overflow-hidden mb-6">
            <img
              src="/assets/career1.png"
              alt="Mortgage Team"
              className="w-full h-auto object-cover bg-no-repeat"
            />
          </div>

          <div className="-mt-16">
            <div className="flex flex-wrap justify-center gap-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 w-full sm:w-[48%] lg:w-[25%] min-h-[220px] flex flex-col items-start justify-start text-left transition-all"
                  style={{
                    border: '1.5px solid #CECECE'
                  }}
                >
                  <div className="bg-yellow-200 p-3 rounded-full mb-4">
                    {index === 0 && <FaHandshake className="text-2xl text-yellow-600" />}
                    {index === 1 && <FaChartLine className="text-2xl text-yellow-600" />}
                    {index === 2 && <FaFileContract className="text-2xl text-yellow-600" />}
                    {index === 3 && <FaCalculator className="text-2xl text-yellow-600" />}
                    {index === 4 && <FaShieldAlt className="text-2xl text-yellow-600" />}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business & Enterprise Financing Section */}
        <div className="px-6 bg-gray-50 lg:px-12 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
              <h2 className="text-[1rem] font-semibold ml-2 mb-0 augmenHeading">
                Business & Enterprise Financing
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Supporting Business Growth
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl">
              Our differentiated financial products serve small businesses, entrepreneurs, and enterprises to grow in sustainable ways. Our responsible lending practice is based on structured lending, but it is flexible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold mb-2 text-gray-800">Business Expansion Loans</h4>
                <p className="text-gray-600">Financing options to get your business growing and expanding.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold mb-2 text-gray-800">Working Capital Support</h4>
                <p className="text-gray-600">Access funds used to control the day-to-day running of the business as well as cash flow.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold mb-2 text-gray-800">Commercial Real Estate</h4>
                <p className="text-gray-600">Commercial property and business acquisition mortgage solutions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seamless Digital Experience Section */}
        <div className="px-6 bg-white lg:px-12 py-12 md:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
              <h2 className="text-[1rem] font-semibold ml-2 mb-0 augmenHeading">
                Digital Experience
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Digital Experience
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl">
              Our platform will provide a convenient online experience in which the customers can access managing their mortgage cases without leaving their homes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                <FaCalculator className="text-4xl text-[#E2B10F] mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">Check Loan Eligibility</h4>
                <p className="text-sm text-gray-600">Fast eligibility check by the financial profile.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                <FaChartLine className="text-4xl text-[#E2B10F] mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">Calculate Payments</h4>
                <p className="text-sm text-gray-600">Calculate your monthly payments on the mortgage calculator.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 text-center">
                <FaFileContract className="text-4xl text-[#E2B10F] mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">Apply Online</h4>
                <p className="text-sm text-gray-600">Fill out your mortgage form within minutes.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                <FaShieldAlt className="text-4xl text-[#E2B10F] mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">Track Application Status</h4>
                <p className="text-sm text-gray-600">Track your application real-time.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Empowering Financial Growth Section */}
        <div className="px-6 bg-gradient-to-br from-gray-50 to-white lg:px-12 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Empowering Financial Growth
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We will be there with you whether buying a home, growing the business using your property or when you are restructuring your current loan with the right mortgage and financial services which is actually constructed in America today.
            </p>
            <button
              onClick={() => window.location.href = '/contact-getraise-technologies'}
              className="bg-[#E2B10F] px-8 py-4 rounded-xl text-black hover:bg-yellow-500 font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </button>
          </div>
        </div>

        <MortgageCards />

        <MarqueeComp />

        <MortgageFAQ />
      </section>

      <TestimonialCarousel />
    </div>
  );
};

export default ServicesSection;

