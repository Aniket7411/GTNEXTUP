
'use client';

import React, { useState } from 'react';
import './uiuxsinglepage.css';
import FeatureCardSection from '../../components/UiUxWhyChooseUs/UiUxWhyChooseUs';
import OurDesignProcess from '../../components/OurDesignProcess/OurDesignProcess';
import TestimonialCarousel from '../HomePage/Feedback/Feedback';
import ScrollCarousel from '../../components/ScrollCarousel/Scrollcarousel';
import IndustryAccordion from '../../components/industryaccordion';
import TrendingSlider from '../../components/trendingblogslider';
import FAQSection from '../../components/faqs';
import Ironform from './form';
import Accordion from './cta';
import WhatMakesUsDifferent from '../RealValue';

const services = [
  { id: 1, title: 'User Research & Analysis', img: "/assets/i.png" },
  { id: 2, title: 'wireframing & prototyping', img: "/assets/dServices2.svg" },
  { id: 3, title: 'UI Design & style Guides', img: "/assets/dServices3.svg" },
  // { id: 4, title: 'UX Design & Interaction' },
  // { id: 5, title: 'Responsive & Adaptive Design' },
  // { id: 6, title: 'Design System Creation' },
];
const servicesTwo = [
  { id: 4, title: 'User Research & Analysis', img: "/assets/dServices4.svg" },
  { id: 5, title: 'wireframing-& Prototyping', img: "/assets/dServices5.svg" },
  { id: 6, title: 'UI Design & style Guides', img: "/assets/dServices6.svg" },
];

const UiUxSinglePage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredIndexTwo, setHoveredIndexTwo] = useState(null);


  return (
    <>

      <div className="relative w-full bg-white overflow-hidden mb-5 md:h-[100vh] header-spacing">
        {/* Right Side Video (Full height, fixed to right) */}

        <div className="absolute right-0 top-0 h-[90vh] md:h-[105vh] w-full md:w-1/2 z-0 video-shadow">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-[100vh] md:h-[105vh] w-full object-cover "
          >
            <source src="/assets/topVideoTwo.mp4" type="video/mp4" />
          </video>
        </div>






        {/* Rough Paint Overlay */}


        {/* Content */}
        <div className="top-0 relative z-20 h-[115vh] md:min-h-[100vh] flex items-center px-5 md:px-8  md:bg-transparent bg-white/15 md:backdrop-blur-none backdrop-blur">
          <div className="w-full md:w-[70%] text-center md:text-left">
            <h1 className="bg-text bg pb-6">
              User - First Design that Drives engagement
            </h1>
            <h2 className='font-bold text-2xl text-[#000]'>UI/UX Design Trusted by Global Leaders, Built for Every Business</h2>
            <p className="text-[#737373] text-lg  w-full md:w-[75%] mx-auto md:mx-0">
              At Getraise, our expert UI/UX design services strike a perfect balance between user satisfaction and business outcomes—turning clicks into conversions and ideas into immersive digital experiences.
            </p>



            <div className='my-2 md:hidden'>

              <button
                className="bg-[#FFD05E] px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black cursor-pointer font-medium border border-[#000]"
                onClick={() => window.location.href = '/contact-getraise-technologies'}
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>


      </div>

      <div
        style={{
          backgroundImage: `url(/assets/roughPaint.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // or "contain" depending on design
          backgroundPosition: "center",
        }}
        className="relative  hidden md:flex justify-center items-center z-20"
      >


        <Ironform />
      </div>


      <div className="px-6 md:px-10 mt-[70px] bg-[#fff] text-[#000]">

        <div className="flex items-center space-x-2  pt-5 mb-2">
          <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
          <h2 className="text-xl font-semibold ml-2 mb-0 augmenHeading">
            What We Do
          </h2>
        </div>
        <div className='relative z-10'>
          <p className='text-[#00000033] text-[3rem] md:text-[6rem] font-bold leading-tight'>
            Intelligent Interfaces.
          </p>
          <p className='text-[#000033] text-[3rem] md:text-[6rem] font-bold leading-tight z-10 mb-3'>
            Meaningful  <span className='text-yellow-500  ml-8'> Interactions</span> .
          </p>
          {/* <img
            className='hidden md:block absolute md:right-[24%] -bottom-8 md:mx-auto animate-floatPulse'
            src="/assets/bigApple.png"
            alt=""
          /> */}
        </div>
        <div className='relative mb-10 pb-10 mt-3'>
          <div className="flex flex-col md:flex-row md:justify-between gap-6 z-10">
            <div>            <p className="text-[20px] font-semibold md:w-[400px]">
              We help businesses of all sizes design engaging digital products that are easy to use and hard to forget.
            </p>
              <p className="text-[16px] text-[#474747] md:w-[500px]">Getraise Tech is recognized for delivering next-generation, custom UI/UX design solutions. With 200+ designs launched and 95% user satisfaction, we develop user-friendly, super-fast, and visually engaging web and mobile experiences.</p>


            </div>


            <p className=" text-[16px] mt-4 text[#474747]  md:w-[35%] text-start">
              Our award-winning team combines creative flair with data-driven insights to deliver the best website and mobile app UI/UX design. Visit our About Us section to see how we're different.
            </p>
          </div>
          <img className=' md:absolute md:left-0 md:right-0 h-[320px] -bottom-10 md:mx-auto z-20 animate-floatPulse' src="/assets/litApple.png" alt="" />


        </div>


        <div className="flex items-center space-x-2 mb-8">
          <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
          <h2 className="text-[1.2rem] font-semibold ml-2 mb-0 augmenHeading">
            Our UI/UX Design Services
          </h2>
        </div>

        <div className="flex flex-col md:flex-row w-full h-auto gap-4 mb-3">

          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            // Calculate dynamic flex
            let flexClass = 'flex-1';
            if (hoveredIndex !== null) {
              flexClass = isHovered ? 'flex-[1.5]' : 'flex-[0.75]';
            }

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`bg-[#FDEF9E] shadow-sm hover:bg-[#000] hover:text-[#fff] overflow-hidden transition-all duration-700 ease-in-out cursor-pointer ${flexClass} flex flex-col`}
              >
                {isHovered ?
                  <img
                    src={service.img}
                    alt="Preview"
                    className="ease-in-out w-full h-40 object-cover transition-opacity duration-700"
                  />
                  :
                  <div className='md:h-40'>
                    <p className="text-[1.5rem] font-semibold mb-2 ms-6 mt-4">0{service.id}</p>
                  </div>
                }
                <div className="w-full p-4 md:h-32">
                  {(hoveredIndex === null || isHovered) && (
                    <h3 className="text-[2rem] font-semibold leading-snug ease-in-out">{service.title}</h3>
                  )}
                  {
                    isHovered ?
                      <p
                        className={`transition-all duration-700 ease-in-out  `}
                      >
                        We begin with understanding your users, their behaviors, and pain points to shape a strategy that aligns with their needs.
                      </p>

                      :
                      ""

                  }
                </div>
              </div>
            );
          })}
        </div>


        <div className="flex flex-col md:flex-row w-full h-auto gap-4 mb-16">
          {servicesTwo.map((service, index) => {
            const isHovered = hoveredIndexTwo === index;

            // Calculate dynamic flex
            let flexClass = 'flex-1';
            if (hoveredIndexTwo !== null) {
              flexClass = isHovered ? 'flex-[1.5]' : 'flex-[0.75]';
            }

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndexTwo(index)}
                onMouseLeave={() => setHoveredIndexTwo(null)}
                className={`bg-[#FDEF9E]  hover:bg-[#000] hover:text-[#fff] shadow-sm overflow-hidden transition-all duration-700 ease-in-out cursor-pointer ${flexClass} flex flex-col`}
              >
                {isHovered ?
                  <img
                    src={service.img}
                    alt="Preview"
                    className="ease-in-out w-full h-40 object-cover transition-opacity duration-700"
                  />
                  :
                  <div className='md:h-40'>
                    <p className="text-[1.5rem] font-semibold mb-2 ms-6 mt-4">0{service.id}</p>
                  </div>
                }
                <div className="w-full p-4 md:h-32">
                  {(hoveredIndexTwo === null || isHovered) && (
                    <h3 className="text-[2rem] font-semibold leading-snug ease-in-out">{service.title}</h3>
                  )}
                  {
                    isHovered ?
                      <p
                        className={`transition-all duration-700 ease-in-out `}
                      >
                        We begin with understanding your users, their behaviors, and pain points to shape a strategy that aligns with their needs.
                      </p>

                      :
                      ""

                  }
                </div>
              </div>
            );
          })}
        </div>



      </div>

      <section className='bg-[#fff] text-[#000]'>

        <div className='bg-black'>

          <OurDesignProcess />
        </div>


        <div className='mb-10  bg-[#fff]'>
          <FeatureCardSection />
        </div>

        <WhatMakesUsDifferent />

        <div className="flex justify-center items-center">

          <img src="/assets/group.png" alt="group" />

        </div>

        {/* <div className='my-10  px-6 lg:px-10'>

          <Accordion />
        </div> */}
        <div className='mb-10'>
          <ScrollCarousel />

          <FAQSection />

        </div>

        <TestimonialCarousel />
      </section>

    </>

  );
};

export default UiUxSinglePage;
