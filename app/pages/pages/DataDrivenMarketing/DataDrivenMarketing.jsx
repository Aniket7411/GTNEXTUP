'use client';

import React from "react";
import './dataDrivenMarketing.css'
import TestimonialCarousel from "../HomePage/Feedback/Feedback";
import Services from "./growthcard";
import IndustriesSection from "./leftright";
import DMfeatures from "./digitalmfeatures";
import Growsmarter from "./growsmartersection";
import NeedMarketing from "./needdigitalm";
import DMFAQ from "./dmfaq";
import MarqueeComp from "../../components/Marq/Marq";
import DigitalMarketingContactForm from "../../components/DigitalMarketingContactForm/DigitalMarketingContactForm";




const DataDrivenMarketing = () => {

    return (
        <>

            <div className="mx-auto bg-[#fff] overflow-x-hidden">
                {/* Header Section */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"> */}
                <Growsmarter />



                {/* <div>
                    <motion.div
                        className="grid grid-cols-1 mb-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="mb-4">
                            <h2 className="text-center text-[3rem] md:text-[5rem] lg:text-[6rem] md:leading-[100px] font-semibold leading-tight">
                                Grow Smarter with Data-Driven Marketing
                            </h2>
                        </div>


                        <div className="text-center">
                            <p
                                className="lg:w-[70%] mx-auto text-center"
                                style={{
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    color: "#3A3A3A",
                                }}
                            >
                                At Getraise Technologies, we help you connect with the right audience through strategic digital and performance marketing that drives growth and ROI.
                            </p>

                            <div className="flex gap-2 justify-center my-1 font-poppins   ">

                                <button className="px-2 py-1  rounded-md" style={{
                                    outline: "1px solid #000"
                                }}>
                                    Let's Grow Your Brand
                                </button>

                                <button className="bg-[#000] px-2 py-1 rounded-md text-[#fff]">
                                    Request a Free Audit
                                </button>

                            </div>

                            <div className='grid grid-cols-2 lg:grid-cols-4 mx-auto'>
                                <div>
                                    <p className='presenceNumbers'>
                                        <OdometerCounter value={24} /><span className='plusColor'>+</span>
                                    </p>
                                    <p className='presenceNumbersText'>AWARDS AND RECOGINITIONS</p>
                                </div>
                                <div>
                                    <p className='presenceNumbers'>
                                        <OdometerCounter value={500} /><span className='plusColor'>+</span>
                                    </p>
                                    <p className='presenceNumbersText'>SUCCESS PROJECT</p>
                                </div>
                                <div className='me-10'>
                                    <p className='presenceNumbers'>
                                        <OdometerCounter value={20} /><span className='plusColor'>+</span>
                                    </p>
                                    <p className='presenceNumbersText'>GLOBAL COUNTRIES   <br /> PRESENCE WITH CLIENT’S</p>
                                </div>

                                <div>
                                    <p className='presenceNumbers'>
                                        <OdometerCounter value={10} /><span className='plusColor'>+</span>
                                    </p>
                                    <p className='presenceNumbersText'>YEARS OF EXPERIENCE</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div> */}
                <Services />
                <DMfeatures />

                <IndustriesSection />

                <NeedMarketing />


                <div className="py-12 bg-[#fff]">

                    <h2 className="text-center text-[#000000] mb-4 font-semibold text-2xl md:text-[40px]">Our Tech Stack</h2>
                    <img
                        src="./assets/techstacks.png"
                        alt="techstacks"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto"
                    />


                </div>



                {/*    <div
                    className="relative bg-cover bg-center bg-no-repeat p-4 sm:p-6 md:p-8 lg:p-10 min-h-[200px] flex flex-col justify-center items-center"
                    style={{
                        backgroundImage: `url(${bgimage})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/90"></div>

                    <h1
                        className="relative z-10 text-white text-center font-semibold mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl px-4"
                    >
                        Powerful Tools Behind Our Digital Insights
                    </h1>

                    <div
                        className="relative z-10 flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-6xl w-full text-center px-4"
                    >
        <div className="flex flex-col items-center gap-6">
  <div className="grid grid-cols-3 gap-6">
    {[
      { src: moz, alt: "Moz" },
      { src: "./ahrefs.png", alt: "Ahrefs" },
      { src: scream, alt: "Screaming Frog" },
    ].map((logo, index) => (
      <img
        key={index}
        src={logo.src}
        alt={logo.alt}
        className="h-16 w-32 sm:h-20 sm:w-44 md:h-24 md:w-56 lg:h-28 lg:w-64 xl:h-32 xl:w-72 object-contain"
      />
    ))}
  </div>

  <div className="flex justify-center gap-6">
    {[
      { src: semrush, alt: "Semrush" },
      { src: uber, alt: "Uber" },
    ].map((logo, index) => (
      <img
        key={index}
        src={logo.src}
        alt={logo.alt}
        className="h-16 w-32 sm:h-20 sm:w-44 md:h-24 md:w-56 lg:h-28 lg:w-64 xl:h-32 xl:w-72 object-contain"
      />
    ))}
  </div>
</div>


                    </div>

                </div>
*/}



                <DMFAQ />

                <MarqueeComp />
                {/* Image Grid Section */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6">
                    <div className="relative lg:row-span-2">
                        <img
                            src={ddm1}
                            className="w-full lg:h-[75vh] object-contain lg:object-cover rounded-lg"
                            alt="team meeting"
                        />
                    </div>




                    <div className="grid grid-rows-2 md:h-[75vh] gap-6">
                        <img
                            src={ddm2}
                            className="w-full h-full object-cover rounded-lg"
                            alt="office workspace"
                        />
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="p-4 rounded-2xl flex flex-col justify-around h-full dataDriven w-full md:w-3/4">

                                <button className="cursor-pointer w-full rounded-2xl text-[20px] py-5 bg-white hover:bg-[#000] hover:text-[#fff]" onClick={() => { router.push("/contact-getraise-technologies") }} >Let's Grow Your Brand</button>
                                <button className="cursor-pointer w-full rounded-2xl text-[20px] py-5 bg-[#FDEF9E99] hover:bg-[#000] hover:text-[#fff]" onClick={() => { router.push("/contact-getraise-technologies") }}>Request a Free Audit</button>
                            </div>


                        </div>


                    </div>


                </div> */}


                {/* <WhatWeDo /> */}
                {/* <div className=" flex justify-center mb-2 mx-auto">

                    <motion.div
                        className=""
                        initial={{ opacity: 0.4, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <div className="flex items-center mx-auto w-[85%] gap-4">
                            <img src={we} alt="" className="w-[10%]" />
                            <img src={scale} alt="" className="w-[90%]" />
                        </div>

                    </motion.div>
                </div> */}
                {/* <WhyChooseGr /> */}

                {/* <IndustriesWeServeDmPm /> */}

            </div>
            <TestimonialCarousel />
            <DigitalMarketingContactForm />


        </>

    );
};

export default DataDrivenMarketing;
