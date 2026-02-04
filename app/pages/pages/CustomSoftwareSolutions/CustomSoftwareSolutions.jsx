'use client';

import React from 'react'
import TestimonialCarousel from '../HomePage/Feedback/Feedback'
const customSalesforce = '/assets/customSalesforce.mp4'
import { motion } from "framer-motion";
import customSalesMan from '../../assets/customSalesMan.svg'
import career from '../../assets/whyCloudImg.svg'
import wcuIcon1 from '../../assets/cloudIcon (1).svg'
import wcuIcon2 from '../../assets/cloudIcon (5).svg'
import wcuIcon3 from '../../assets/cloudIcon (4).svg'
import wcuIcon4 from '../../assets/cloudIcon (3).svg'
import wcuIcon5 from '../../assets/cloudIcon (2).svg'


import rightArr from '../../assets/rightArr.svg'
import sds1 from '../../assets/sds (1).svg'
import sds2 from '../../assets/sds (6).svg'
import sds3 from '../../assets/sds (5).svg'
import sds4 from '../../assets/sds (4).svg'
import sds5 from '../../assets/sds (3).svg'
import sds6 from '../../assets/sds (2).svg'

import pardot1 from '../../assets/pardot.svg'
import three from '../../assets/three.svg'

import pardot2 from '../../assets/pardot (6).svg'
import pardot3 from '../../assets/pardot (5).svg'
import pardot4 from '../../assets/pardot (4).svg'
import pardot5 from '../../assets/pardot (3).svg'
import pardot6 from '../../assets/pardot (2).svg'
import pardot7 from '../../assets/pardot (1).svg'

import restaurant from '../../assets/restaurant.svg'
import hospitalMgmt from '../../assets/hospitalMgmt.svg'
import eCommerce from '../../assets/e-commerce.svg'
import rightArBg from '../../assets/rightArBg.svg'
import { useRouter } from 'next/navigation';
import SectorCards from './sectors';
import Beancomponent from '../../components/beenComponent';
import MarqueeComp from '../../components/Marq/Marq';
import CustomFAQSection from './customfaq';
import { useFormContext } from '../../components/formcontext';

const features = [
    {
        title: 'End-to-End Delivery',
        desc: 'From planning to launch to support, we manage it all.',
        icon: "/assets/cloudIcon (1).svg",
    },
    {
        title: 'Industry-Tailored Solutions',
        desc: 'We customize workflows to match your business model.',
        icon: "/assets/cloudIcon (5).svg",
    },
    {
        title: 'Seamless Integration',
        desc: 'Connect Salesforce to your apps, services, and databases.',
        icon: "/assets/cloudIcon (4).svg",
    },
    {
        title: 'Results-Focused Approach',
        desc: 'We help you reduce manual effort, improve lead tracking, and boost revenue.',
        icon: "/assets/cloudIcon (3).svg",
    },
    {
        title: 'Flexible Engagement Models',
        desc: 'Fixed price, monthly retainers, or resource-based support.',
        icon: "/assets/cloudIcon (2).svg",
    },
];



const features2 = [
    {
        title: 'End-to-End Delivery',
        desc: 'From planning to launch to support, we manage it all.',
        icon: "/assets/cloudIcon (1).svg",
    },
    {
        title: 'Industry-Tailored Solutions',
        desc: 'We customize workflows to match your business model.',
        icon: "/assets/cloudIcon (5).svg",
    },
    {
        title: 'Seamless Integration',
        desc: 'Connect Salesforce to your apps, services, and databases.',
        icon: "/assets/cloudIcon (4).svg",
    },
    {
        title: 'Results-Focused Approach',
        desc: 'We help you reduce manual effort, improve lead tracking, and boost revenue.',
        icon: "/assets/cloudIcon (3).svg",
    },
    {
        title: 'Flexible Engagement Models',
        desc: 'Fixed price, monthly retainers, or resource-based support.',
        icon: "/assets/cloudIcon (2).svg",
    },
];

const services = [
    {
        title: "Salesforce Implementation",
        image: "/assets/sds (1).svg",
        para: "Seamless setup and configuration of Salesforce Cloud environments (Sales Cloud, Service Cloud, Marketing Cloud, etc.)"
    },
    {
        title: "Custom App Development",
        image: "/assets/sds (6).svg",
        para: "We build Lightning-ready custom apps and components tailored to your business processes."
    },
    {
        title: "Salesforce Integration",
        image: "/assets/sds (5).svg",
        para: "Seamlessly integrate Salesforce with your existing tools and platforms—including ERP systems, payment gateways, APIs, and third-party software—using scalable <a href=\"https://getraisetechnologies.com/cloud-computing-services-india\">cloud services</a>.",
    },
    {
        title: "Workflow Automation",
        image: "/assets/sds (4).svg",
        para: "Create smart automation flows using Process Builder, Flow Builder, and Apex triggers for increased productivity."
    },
    {
        title: "MultiData Migration & Clean-Up",
        image: "/assets/sds (3).svg",
        para: "Secure and structured migration from legacy CRMs to Salesforce with complete data mapping and accuracy."
    },
    {
        title: "Salesforce Support & Optimization",
        image: "/assets/sds (2).svg",
        para: "Ongoing enhancements, bug fixes, user training, and performance tuning for long-term success."
    }
];

const CustomSalesforceSolutions = () => {
    const { openForm } = useFormContext();

    const router = useRouter()
    return (

        <div className='header-spacing  text-[#000]'>
            <div className="overflow-hidden">
                <div className="relative w-full min-h-[calc(100vh-65px)] bg-no-repeat bg-cover bg-center text-center flex flex-col items-center justify-center overflow-hidden px-4 md:px-10">

                    {/* Background Video */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                    >
                        <source src={customSalesforce} type="video/mp4" />
                    </video>

                    {/* Gradient Overlay - ensures bottom is fully white */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/0 via-white/40 to-white z-0" />

                    {/* Content */}
                    <div className="relative z-10 text-center space-y-2">
                        <h1 className="text-[#000000E6] text-xl md:text-4xl xl:text-5xl font-bold w-[90%] md:w-[80%] mx-auto">
                            Transform Customer Experiences With Custom Salesforce Solutions
                        </h1>

                        <p className="text-sm md:text-md xl:text-md text-[#202020]  md:w-[45%] mx-auto mt-4">
                            At Getraise Technologies, we help businesses unlock the full potential of
                            Salesforce—streamlining processes, improving team efficiency, and delivering seamless customer journeys through tailored CRM development integrated with <a href="https://getraisetechnologies.com/digital-marketing-services-india" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">digital marketing services</a> & <a href="https://getraisetechnologies.com/performance-marketing-services" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">performance marketing strategies</a>.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 mt-6 mb-8 px-4 md:px-8 z-30">
                        <button
                            className="font-medium bg-transparent px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black cursor-pointer hover:bg-black hover:text-white border border-[#FEEE99]"
                            onClick={() => router.push("/contact-getraise-technologies")}
                        >
                            Talk to a Salesforce Expert
                        </button>

                        <button
                            className="bg-[#FEEE99] px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black hover:bg-transparent hover:text-black border border-[#FEEE99] cursor-pointer font-medium"
                            onClick={() => window.location.href = '/contact-getraise-technologies'}
                        >
                            Request a Free Demo
                        </button>
                    </div>
                </div>
            </div>


            <section className='bg-[#fff] text-[#000]'>

                <div className="px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8 max-w-7xl m-auto ">
                    {/* Left - Text Content */}
                    <div className="md:w-1/2 lg:w-1/3 text-center lg:text-left">
                        <div className="flex items-center mt-10 justify-center lg:justify-start space-x-2    ">
                            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                            <h2 className="text-[1rem] ml-2   font-semibold ">
                                Introduction
                            </h2>
                        </div>

                        <p className="text-[22px] md:text-[25px] lg:text-[32px] font-medium text-[#ACACAC] mb-2">
                            Supercharge Your Customer Relationships with Salesforce
                        </p>

                        <p className="text-[2rem] text-[#363636] md:text-[3rem] lg:text-[4rem] font-bold ">
                            All in One Platform
                        </p>
                    </div>

                    {/* Middle - Image */}
                    <div className="relative md:w-1/2 mt-10 lg:w-1/3">
                        <img
                            src="/assets/customSalesMan.svg"
                            alt="About Us"
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>

                    {/* Right - Description */}
                    <div className="md:w-2/3 lg:w-1/3 text-sm md:text-md lg:text-md lg:text-left">
                        <p className="mb-4 text-end ">
                            Salesforce is a customer relationship management (CRM) system that assists businesses in dealing with sales, support, marketing, and customer services all under one roof. At Getraise Technologies, we don’t just set up Salesforce—we personalize it for your business. As the top Salesforce development company, we offer complete Salesforce development services including custom apps, automation, dashboards, and CRM workflows that are specifically customized according to what you want.
                        </p>

                        <p className='mt-5 text-end '>
                            With over 10+ years of experience, 500+ successful projects, and a team of certified Salesforce developers, we promise to give you unmatched expertise and affordability, making us one of the best Salesforce development agencies in India.
                        </p>
                    </div>
                </div>




                <section className='mt-[70px]  '>
                    <div className="flex items-center justify-center gap-2 space-x-2 ">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h2 className="text-[1.2rem] ">
                            Our Services
                        </h2>
                    </div>
                    <h2 className='mb-2  px-4 md:px-10 text-center text-[30px] md:text-[36px] font-[600] text-[#363636]'>Our Salesforce Development Services</h2>

                    <div className='px-4 md:px-10   '>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-[20px] p-3">
                            {services.map((service, index) => (
                                <div key={index} className="text-black rounded-[20px] w-full md:min-h-[250px] min-h-[170px] mb-1 relative bg-white">
                                    <img src={service.image} className='w-full' alt="" />

                                    <div className=" px-4">
                                        <h3 className="text-xl font-semibold mt-2 px-2">{service.title}</h3>
                                        <p className='p-2 '>{service.para}</p>

                                        {/* <button
                                    onClick={() => router.push("/contact-getraise-technologies")}
                                    className="cursor-pointer bg-white text-black font-medium hover:bg-yellow-100 flex justify-between px-4 rounded-4xl py-2 w-full group transition-all duration-300"
                                >
                                    Book a Demo
                                    <img
                                        src={rightArr}
                                        alt=""
                                        className="transition-transform duration-500 group-hover:rotate-180"
                                    />
                                </button> */}

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className=''>
                    <div className="hidden  mt-10 lg:block">

                        <div className="relative w-full flex flex-col items-center justify-center">


                            <div className="relative w-full h-lvh mt-10">
                                <h2 className='text-[#C7C7C7] text-[4rem] md:text-[5rem] font-bold text-center px-4 md:px-12'>Platform Expertise</h2>

                                {/* Pardot */}
                                <div className="absolute left-[3%] top-[10%] z-40">
                                    <img src="/assets/pardot.svg" className='h-[200px]' alt="Pardot" />
                                </div>

                                {/* Salesforce CPQ */}
                                <div className="absolute left-[22%] top-[12%] z-30">
                                    <img src="/assets/pardot (6).svg" className='h-[200px]' alt="Salesforce CPQ" />
                                </div>

                                {/* Sales Cloud */}
                                <div className="absolute left-[44%] top-[13%] z-20">
                                    <img src="/assets/three.svg" className='h-[200px]' alt="Sales Cloud" />
                                </div>

                                {/* Marketing Cloud */}
                                <div className="absolute right-0 top-[15%] z-30">

                                    <img src="/assets/pardot (5).svg" className='h-[200px]' alt="Service Cloud" />
                                </div>

                                {/* Salesforce Lightning */}
                                <div className="absolute left-0 top-[38%] z-20">
                                    <img src="/assets/pardot (4).svg" className='h-[200px]' alt="Salesforce Lightning" />
                                </div>

                                {/* AppExchange */}
                                <div className="absolute left-[20%] top-[40%] z-30">
                                    <img src="/assets/pardot (2).svg" className='h-[200px]' alt="AppExchange & Custom Dev" />
                                </div>

                                {/* Service Cloud */}
                                <div className="absolute left-[52%] top-[38%] z-20">
                                    <img src="/assets/pardot (1).svg" className='h-[200px]' alt="Experience Cloud" />
                                </div>

                                {/* Experience Cloud */}
                                <div className="absolute left-[32%] top-[58%] z-30">
                                    <img src="/assets/pardot (3).svg" className='h-[200px]' alt="Marketing Cloud" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="block lg:hidden w-full">

                        <div className=" w-full  min-h-[600px] flex items-center justify-center">


                            <div className=" w-full mt-10">

                                {/* Pardot */}
                                <div className='flex justify-center'>
                                    <img src="/assets/pardot.svg" className='h-[200px]' alt="Pardot" />
                                </div>

                                {/* Salesforce CPQ */}
                                <div className='flex justify-center'>
                                    <img src="/assets/pardot (6).svg" className='h-[200px]' alt="Salesforce CPQ" />
                                </div>

                                {/* Sales Cloud */}
                                <div className='flex justify-center'>
                                    <img src="/assets/three.svg" className='h-[200px]' alt="Sales Cloud" />
                                </div>

                                {/* Marketing Cloud */}
                                <div className='flex justify-center'>

                                    <img src="/assets/pardot (5).svg" className='h-[200px]' alt="Service Cloud" />
                                </div>

                                {/* Salesforce Lightning */}
                                <div className='flex justify-center'>
                                    <img src="/assets/pardot (4).svg" className='h-[200px]' alt="Salesforce Lightning" />
                                </div>

                                {/* AppExchange */}
                                <div className='flex justify-center'>
                                    <img src="/assets/pardot (2).svg" className='h-[200px]' alt="AppExchange & Custom Dev" />
                                </div>

                                {/* Service Cloud */}
                                <div className='flex justify-center'>
                                    <img src="/assets/pardot (1).svg" className='h-[200px]' alt="Experience Cloud" />
                                </div>

                                {/* Experience Cloud */}
                                <div className='flex justify-center'>
                                    <img src="/assets/pardot (3).svg" className='h-[200px]' alt="Marketing Cloud" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                <div className="relative w-full bg-white py-12 px-4 md:px-12">
                    <div className="flex items-center space-x-2 mb-5">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h2 className="text-[1rem] font-semibold ml-2 mb-0 augmenHeading">
                            Why Choose Us
                        </h2>
                    </div>
                    <h2 className="text-2xl md:text-4xl text-[#363636] font-bold mb-4 text-start">Why Choose Getraise Technologies?</h2>



                    <div className="w-full rounded-xl overflow-hidden mb-6">
                        <img
                            src="/assets/whyCloudImg.svg" // replace with your own image
                            alt="Team working"
                            className="w-full h-auto object-cover bg-no-repeat"
                        />
                    </div>

                    <div className="-mt-12">
                        <div className="flex flex-wrap justify-center gap-2">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 w-full sm:w-[48%] lg:w-[17.8%] min-h-[220px] flex flex-col items-start justify-start text-left transition-all"
                                    style={{
                                        border: '1.5px solid #CECECE'
                                    }}
                                >
                                    <div className="bg-yellow-200 p-3 rounded-full mb-4">
                                        <img src={feature.icon} alt="" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>





                <SectorCards />
                
                {/* Trusted By Many Companies Section */}
                <div className="px-4 md:px-12 my-12">
                    <div className="flex items-center space-x-2 mb-5">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h2 className="text-[1.2rem] font-semibold ml-2 mb-0 augmenHeading">
                            Trusted By Many Companies
                        </h2>
                    </div>
                </div>
                
                <div className='mt-18 '>
                    <MarqueeComp />
                </div>

                <CustomFAQSection />

                {/* What Our Clients Say About Us Section */}
                <div className="px-4 md:px-12 my-12">
                    <div className="flex items-center space-x-2 mb-5">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h2 className="text-[1.2rem] font-semibold ml-2 mb-0 augmenHeading">
                            What Our Clients Say About Us
                        </h2>
                    </div>
                </div>

                <TestimonialCarousel />
            </section>
        </div>
    )
}

export default CustomSalesforceSolutions
