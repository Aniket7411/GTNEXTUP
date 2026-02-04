'use client';

import React, { useState } from 'react'
import './webnAppDev.css'
import { motion } from "framer-motion";

import downArr from '../../assets/downArr.svg'
import TechStackAnimation from '../../components/TechStackAnimation/TechStackAnimation';
import Webdevcarausel from '../webdevcarausel';
import WhyChooseGrTwo from '../keybenifits';
import TrendingSlider from '../../components/trendingblogslider';
import FAQSectionweb from '../../components/faqwebdev';
import Beancomponent from '../../components/beenComponent';
import MarqueeComp from '../../components/Marq/Marq';
import AndroidCarausal from './androidcarausal';
// import { useFormContext } from '../../components/formcontext';
import CardsWebdev from './card';
import WebFeatureCardSection from './card';
import TestimonialCarousel from '../HomePage/Feedback/Feedback';



const WebnAppDev = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    // const { openForm } = useFormContext();


    const faqs = [
        {
            question: "Struggling to Manage Bookings, Inventory, or Payments?",
            answer:
                "Manual activities cause delays and errors. We develop our custom software solutions to automate your business processes, with accuracy and precision, such as real-time online booking system, inventory management, automatic payment processing, etc.",
        },
        {
            question: "Still, Using Social Media as Your Only Online Presence?",
            answer:
                "Are you still stuck with social media? It will be effective in engagement but constrains your control and credibility. A dedicated professional website will provide your brand with a place to call home, build trust, and have complete control of its content and customer experience.",
        },
        {
            question: "DO you wish to provide a personalized Experience",
            answer:
                "Users are not impressed by generic content. Tracking user behavior picking the decisions mailing the personal offers and routing them through the personalized journeys with a custom-made app or a web page - these are all possible with the help of a leading app developer.",
        },
        {
            question: "Does the customer Engagement Rate fall",
            answer:
                "Silent users don't return. Our mobile app development services will make sure your app contains features such as push notifications, loyalty programs, and gamified experiences to maximize user engagement and retention, turning one-time visitors into loyal brand advocates.",
        },
        {
            question: "planning to attract investors or scale",
            answer:
                "A quality app or website is not merely technology, it is a business asset. Investors seek scale, automation, and digital status. By collaborating with the top Best Website development agency in India, you can make your brand investment-ready.",
        },
        {
            question: "Looking to attract Investors or Scale",
            answer:
                "A quality app or website is not merely technology, it is a business asset. Investors seek scale, automation, and digital status. By collaborating with the top Best Website development agency in India, you can make your brand investment-ready.",
        },
        {
            question: "looking to target more people without Having to Expand Branches",
            answer:
                "Growing does not necessarily mean increasing the number of outlets. You can even reach new customers in other cities or other countries with a strong mobile App or e-commerce site. It is the smarter, scalable growth, free of the real estate bills.",
        },
        {
            question: "Losing customer to competitors",
            answer:
                "In this era of the digital world, the one who is offline is left behind. That's why, you can no longer afford to be left behind, it is time to take advantage of a web and app development company that provides intelligent, scalable technology.",
        },
        {
            question: "is your company lacking internet presence",
            answer:
                "If customers can't find you online, they will find someone else. Well, digital marketing will indeed increase brand reach, but it is useless unless you have a strong basis- a professional web site that facilitates credibility, authority and discoverability.",
        },


    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const filteredFaqs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className='header-spacing  text-[#000]'>
            <div className=' overflow-hidden '>
                {/* <div className='relative webnAndAppBg w-screen h-[100vh] bg-no-repeat bg-cover bg-center text-center lg:mb-20'> */}
                <div className=' relative w-full md:h-[90vh] bg-no-repeat bg-cover bg-center text-center flex flex-col items-center justify-center overflow-hidden'>

                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                    >
                        <source src="/assets/webnappbgVideo.mp4" type="video/mp4" />

                    </video>
                    {/* <p className='text-[#FDEF9E] mb-2 md:mb-3 mt-15px' style={{
                        fontSize: '20px',
                        fontWeight: '400',
                    }}>Resource Allocation and Staff Augmentation</p> */}

                    <motion.div
                        className="w-[85%]"
                        initial={{ opacity: 0.3, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <p className='font-poppins text-2xl text-[#414141] font-semibold'>Best Website Development Company</p>
                        <h1 className=' text-[#414141] text-[2rem] md:text-[3rem] lg:text-[4rem] lg:leading-[80px] ' style={{
                            fontWeight: '800',
                        }}>Delivering scalable web& app solutions for fast -GREWING Brands</h1>
                        <p className='text-[20px] w-[80%] my-4 mx-auto'>At Getraise, we build scalable, high-performing web and mobile applications <br />    using modern technologies—designed to enhance user experience and <br /> accelerate your business growth.</p>
                    </motion.div>

                    <div className='mt-2'>
                        <button onClick={() => window.location.href = '/contact-getraise-technologies'}
                            className='bg-[#FFC649] px-3 py-2 font-semibold rounded-lg'>Talk to Web Expert</button>
                    </div>
                </div>



            </div>
            <section className='bg-[#fff]'>
                <div className='px-8'>
                    <div className='flex gap-2 mb-'>
                        <div className='h-[4px] w-[18px] bg-[#FFB91A]'></div>
                        <div className='h-[4px] w-[18px] bg-[#FFB91A]'></div>
                        <div className='h-[4px] w-[18px] bg-[#FFB91A]'></div>
                        <div className='h-[4px] w-[18px] bg-[#FFB91A]'></div>

                    </div>
                    <h2 className=' text-lg md:text-[28px] font-semibold mb-2' style={{
                        fontFamily: 'poppins'
                    }}>Why Your Business Needs a Website or App</h2>
                    <p className='font-semibold text'>It does not matter whether you are a service provider, e-commerce brand, start-up, or local business; creating a digital home is not optional anymore—it has become a necessity. An exclusive site or application designed by a professional website and app development company, supported by strong <a href="https://getraisetechnologies.com/ui-ux-design-services-india" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">UI/UX design</a> and integrated <a href="https://getraisetechnologies.com/digital-marketing-services-india" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">digital marketing services</a>, enhances awareness, streamlines processes, and enables long-term growth.</p>






                    <div className='flex justify-center mt-4 items-center' >
                        <img src="/assets/objects.svg" alt="discussing" className='w-full h-[350px] md:w-1/2' />
                    </div>



                    <div className="w-full z-20 my-20 flex items-center justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl px-2" >
                            {filteredFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    style={{
                                        outline: "1px solid #000"
                                    }}
                                    className={`px-4  py-4 shadow-md rounded-md transition-all duration-300 ${activeIndex === index ? "bg-gray-100" : "bg-white"
                                        }`}
                                >
                                    <h3
                                        className={`w-full text-left text-md font-medium ${activeIndex === index ? "text-sky-400" : "text-gray-800"
                                            } flex justify-between items-center cursor-pointer`}
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        {faq.question}
                                        <span
                                            className={`ml-2 me-2 transform ${activeIndex === index ? "rotate-180" : "rotate-0"
                                                } transition-transform duration-300`}
                                        >
                                            <img src="/assets/downArr.svg" alt="Toggle" />
                                        </span>
                                    </h3>

                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index
                                            ? "max-h-96 opacity-100 mt-2"
                                            : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="text-gray-700">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="flex flex-col mt-[100px]  md:flex-row items-center md:items-start justify-between gap-8 ">
                        <div>
                            <p className="text-[#ACACAC] md:text-[40px] font-medium text-lg ">
                                Empower Sales, Service, <br /> and Marketing
                            </p>


                            <p className="text-3xl md:text-6xl font-bold text-[#363636] mb-10">
                                All in One <br className="hidden md:block" /> Platform
                            </p>

                        </div>
                        <div className="flex-1 flex justify-center md:justify-start">
                            <img
                                src="/assets/flyguy.png"
                                alt="All in One Platform"
                                className="max-w-full h-[450px] scale-x-[-1]"
                            />

                        </div>

                        {/* Right Side - Text */}
                        <div className="flex-1 text-center md:text-left">

                            <p className="text-[#202020] text-end leading-relaxed text-sm  mt-8 md:text-md">
                            From responsive websites to scalable mobile apps, we design superior digital products that integrate seamlessly with <a href="https://getraisetechnologies.com/cloud-computing-services-india" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">cloud services</a> to drive growth and engagement for your brand.
                                Let’s explore about Usto find out why we rank high among the best web & app development companies in India.
                            </p>
                        </div>
                    </div>

                    <Webdevcarausel />

                    <div className="flex mt-4 justify-between items-center flex-wrap">
                        {/* Left Content */}
                        <div className="w-full md:w-1/2">
                            {/* Heading with yellow background + angled effect */}
                            <div className="inline-block relative">



                                <h2
                                    className="relative font-bold text-ld text-3xl w-auto px-15 py-2 inline-block text-black z-10"
                                    style={{
                                        backgroundColor: "#FEEE99",
                                        clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
                                    }}
                                >
                                    Mobile app development
                                </h2>



                                {/* <h1
                                className="relative font-bold text-3xl w-auto px-10 py-2 inline-block text-black z-10"
                                style={{
                                    backgroundColor: "#FEEE99",
                                    clipPath: "polygon(15% 0, 85% 0, 100% 100%, 0% 100%)",
                                }}
                            >
                                Mobile App <br /> Development
                            </h1> */}


                                {/* angled triangle shape */}
                                <span className="absolute right-0 top-0 h-full w-6 bg-[#FEEE99] clip-path-triangle"></span>
                            </div>


                            <p className="mt-4 text-gray-700 leading-relaxed">
                                In today's world, where people spend 90 percent of their screen time on
                                mobile, your business needs to be in the hands of people — not just in
                                their minds. Being one of the best app development agencies, our team
                                delivers intelligent, scalable, and high-performance apps to businesses
                                of all sizes. Whether your business is a startup, an expanding e-commerce
                                brand, or a service provider, our solutions will assist you to connect,
                                convert, and compete.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                            <img src="/assets/mobile.png" alt="mobile screen" />
                        </div>
                    </div>



                    <AndroidCarausal />



                </div>
                <TechStackAnimation />

                <WebFeatureCardSection />




                <TrendingSlider />

                <FAQSectionweb />

                <MarqueeComp />
                <TestimonialCarousel />
            </section>

        </div>
    )
}

export default WebnAppDev
