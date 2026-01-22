'use client';

import React from 'react'
import TestimonialCarousel from '../HomePage/Feedback/Feedback'
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { FaPlay } from "react-icons/fa";
import CustomSoftMarque from '../../components/CustomSoftMarque/CustomSoftMarque';
import CustomSoftwareFaqSection from './customsoftwarefaq';
import CustomFeature from './customfeature';
import FeatureCardSectionCustom from './cards';
import FAQSection10 from './customfaq';
import { useFormContext } from '../../components/formcontext';




const CustomSofts = () => {
    const router = useRouter();
    const { openForm } = useFormContext();

    const services = [
        {
            title: "Custom Web Applications",
            image: "/assets/customSoftIcons (1).svg",
            para: "Built for performance, accessibility, and full browser compatibility—no templates, just purpose-built platforms."
        },
        {
            title: "Enterprise Software Development",
            image: "/assets/customSoftIcons (2).svg",
            para: "Robust, secure, and scalable software for large organizations managing complex operations."
        },
        {
            title: "B2B SaaS Product Development",
            image: "/assets/customSoftIcons (3).svg",
            para: "From MVP to full-fledged SaaS platforms, we help you bring product ideas to market fast."
        },
        {
            title: "Workflow Automation Tools",
            image: "/assets/customSoftIcons (4).svg",
            para: "Digitize and automate internal tasks to improve accuracy, speed, and team efficiency."
        },
        {
            title: "Internal Dashboards & Portals",
            image: "/assets/customSoftIcons (5).svg",
            para: "Custom dashboards and admin panels for real-time control over business operations."
        },
        {
            title: "Legacy Software Modernization",
            image: "/assets/customSoftIcons (6).svg",
            para: "Upgrade or rebuild outdated systems for modern usability, security, and cloud integration."
        }
    ];

    const steps = [
        {
            title: "Discovery & Consultation",
            desc: "The first step is learning more about your business, your users, and your desired objectives. This enables us to learn about the challenges and determine the right solution that fits your operations.",
            img: "/assets/Ellipse (1).svg",
        },
        {
            title: "Planning & Wireframing",
            desc: "Once we understand your needs, we build wireframes and workflows that define how the software will function, ensuring clarity before design or coding begins.",
            img: "/assets/Ellipse (6).svg",
        },
        {
            title: "Design & Prototyping",
            desc: "We create clear, intuitive design interfaces that will be appealing to your users. You will encounter interactive prototypes so you can test the look and feel early in the process.",
            img: "/assets/Ellipse (5).svg",
        },
        {
            title: "Agile Development",
            desc: "Your software is developed in increments (called sprints) by our developers, enabling frequent feedback and rapid improvements. This approach is flexible and quicker.",
            img: "/assets/Ellipse (4).svg",
        },
        {
            title: "Testing & QA",
            desc: "All features are rigorously tested -- in terms of performance, security, compatibility and reliability to make sure that each and every feature will work as expected.",
            img: "/assets/Ellipse (3).svg",
        },
        {
            title: "Launch & Support",
            desc: "We launch your software with ease and provide ongoing support, updates, and enhancements to keep your software effective as your business develops.",
            img: "/assets/Ellipse (2).svg",
        },
    ];

    const stepsTwo = [
        {
            title: "Discovery & Consultation",
            desc: "Understand your operations, goals, and gaps.",
            img: "/assets/Ellipse (1).svg",
        },
        {
            title: "Planning & Wireframing",
            desc: "Create user flows, interface ideas, and architecture strategy.",
            img: "/assets/Ellipse (6).svg",
        },
        {
            title: "Design & Prototyping",
            desc: "Craft visually consistent, intuitive UI/UX design systems.",
            img: "/assets/Ellipse (5).svg",
        },
        {
            title: "Agile Development",
            desc: "Modular build-outs using sprints and client feedback loops.",
            img: "/assets/Ellipse (4).svg",
        },
        {
            title: "Testing & QA",
            desc: "Functional, load, and security testing on all devices.",
            img: "/assets/Ellipse (3).svg",
        },
        {
            title: "Launch & Support",
            desc: "Deploy, monitor, and continuously optimize your solution.",
            img: "/assets/Ellipse (2).svg",
        },

    ];


    return (
        <div className='mt-[65px]  text-[#000]'>
            <div className=' overflow-hidden'>
                <div className=" relative w-full min-h-[calc(100vh-65px)] bg-no-repeat bg-cover bg-center text-center flex flex-col items-center justify-center overflow-hidden px-4 md:px-10">

                    {/* Background Video */}
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                        style={{
                            opacity: '0.2'
                        }}
                    >
                        <source src="/assets/customSoftVid.mp4" type="video/mp4" />
                    </video>

                    {/* Gradient Overlay */}
                    <div className="absolute left-0 w-full h-full bg-gradient-to-t from-[#ffffff00] via-white/20 to-white z-0" />


                    <div className="relative z-10 space-y-2">
                        <h1 className="text-black text-2xl mt-8 mb-3 md:text-4xl lg:text-6xl font-bold w-[90%] md:w-[70%] mx-auto">
                            Custom Software Development<br className="hidden md:block" /> that moves with your business
                        </h1>

                        <p className="text-base max-w-xl mt-3 md:text-sm  lg:text-md text-black mx-auto">
                            At Getraise Technologies, we specialize in delivering custom software
                            solutions that perfectly match your business's operations. With over 300
                            successful deployments, 98% client retention, and a team of specialists
                            in web and mobile app development.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mt-2 mb-2 md:mt-6 px-4 md:px-8 z-30">
                        <button
                            className="w-full md:w-auto font-medium bg-transparent px-3 py-2 lg:px-4 lg:py-2 rounded-xl text-black cursor-pointer border hover:bg-[#FFD05E] hover:border-[#FFD05E]"
                            onClick={() => window.location.href = '/contact-getraise-technologies'}

                        >
                            Request a Free Consultation
                        </button>

                        <button
                            className="w-full md:w-auto bg-[#FFD05E] px-3 py-2 lg:px-4 lg:py-2 rounded-xl text-black hover:bg-transparent hover:text-black border border-[#FEEE99] cursor-pointer font-medium"
                            onClick={() => {
                                Navigate("/contact-getraise-technologies");
                            }}
                        >
                            Discuss Your Project
                        </button>
                    </div>

                    <img className='absolute md:static bottom-0 left-0 right-0 md:-mt-12 mx-auto' src="/assets/customSoftFour.svg" alt="customSoftFour" />
                </div>

            </div>


            <section className='bg-[#fff] text-[#000]'>
                <div className="px-6 lg:px-12 flex flex-col md:flex-row items-center gap-2 md:gap-12 m-auto">
                    {/* Right - Text Content */}
                    <div className="w-full mt-5 md:w-1/2 z-20">
                        <div className="flex  items-center space-x-2 mb-2">
                            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                            <h2 className="text-[1.2rem]  ml-2 mb-0 augmenHeading">
                                Introduction
                            </h2>
                        </div>

                        <p className='text-xl lg:text-3xl font-semibold mb-2'>Transform Your Vision into Real-World Software</p>
                        <p className='text-[14px] md:w-[90%]'>
                            Getraise Technologies is a custom software development company trusted by startups and enterprises for it’s digital solutions that drive efficiency, innovation, and measurable business value. Our affordable software development services are customized to streamline operations, boost performance, and drive measurable ROI. From a startup testing an MVP or an enterprise optimizing workflows, our software development services are designed to fulfill your exact needs — no bloat, no off-the-shelf limits. We don’t offer one-size-fits-all — we build what fits you.
                        </p>

                    </div>

                    {/* Left - Image Carousel */}
                    <div className="relative w-full md:w-1/2 z-20">
                        <img
                            src="/assets/customSoftVision.svg"
                            alt="About Us"
                            className="w-full rounded-lg object-cover"
                        />
                    </div>
                </div>
                <div className="overflow-hidden mt-8">
                    <div className="relative w-full bg-no-repeat bg-cover bg-center flex flex-col px-4 sm:px-6 lg:px-12 py-8">
                        {/* Background Image */}
                        <img
                            src="/assets/bgcsd.png"
                            className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-10"
                            alt="background"
                        />

                        {/* Section Title */}
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-center lg:text-left">
                                Why Custom Software
                            </h2>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
                            {/* Left Card */}
                            <div className="relative bg-yellow-100 w-full lg:w-1/2 p-4 sm:p-6 rounded-lg overflow-hidden">
                                <p className="text-black leading-relaxed relative w-full md:w-[80%] z-20 text-sm sm:text-base">
                                    Off-the-shelf tools often force enterprises to adjust their processes
                                    to fit the software. At Getraise Technologies, we believe in exactly
                                    the opposite – software should adjust around your business. Our custom
                                    software development services are designed from scratch to match your
                                    exact needs, delivering the scalability, performance, and seamless
                                    integration that your operations demand.
                                </p>

                                <img
                                    src="/assets/csmiddle.png"
                                    alt="illustration"
                                    className="absolute z-10 -bottom-10 sm:-bottom-20 h-36 sm:h-52 md:h-64 lg:h-72 w-auto max-w-xs sm:max-w-sm md:max-w-md -right-16 sm:-right-24 md:-right-40 lg:-right-60 opacity-80 lg:opacity-100"
                                />
                            </div>

                            {/* Right Content */}
                            <div className="w-full lg:w-2/5 bg-[#fff] text-black mt-6 lg:mt-0">
                                <h3 className="text-lg sm:text-xl font-semibold mb-3  lg:mb-2 lg:mt-18">
                                    Are you a startup interested in getting a fast-track advantage or an
                                    enterprise that is interested in efficiency?
                                </h3>
                                <p className="leading-relaxed text-sm sm:text-base">
                                    Our affordable custom software development would give you that edge
                                    that an out-of-the-box implementation solution cannot. Designed for
                                    long-term ROI, better UX, and complete control, our solutions grow
                                    with you, not against you. We are the best custom software development
                                    agency to give full support to businesses that want software to be a
                                    strategic asset, not just a tool.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='overflow-hidden mt-8'>
                    <div className="mb-4 relative w-full bg-no-repeat bg-cover bg-center flex flex-col px-4 md:px-10 py-8">
                        { /*  <img
                        src={bgCoverImg}
                        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                        alt="background"
                    /> */}

                        <div className="flex items-center space-x-2 mb-4 mt-4 ">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-yellow-500 rounded-full"></div>
                            <h2 className="text-xl sm:text-2xl font-semibold ml-2 mb-0 augmenHeading">
                                Our Services
                            </h2>
                        </div>
                        <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-6'>
                            Our Custom Software Development Services – Built to <br /> Solve and Scale.
                        </h2>

                        <div className=''>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-[20px]">
                                {services.map((service, index) => (
                                    <div key={index} className="text-black rounded-[20px] w-full min-h-[170px] sm:min-h-[200px] md:min-h-[250px] mb-4 relative"
                                        style={{
                                            background: (index % 2 === 0)
                                                ? "radial-gradient(157.79% 157.79% at 50% 50%, #FFFFFF 0%, #FFFCEB 100%)"
                                                : "#FFFCEB",
                                            border: (index % 2 === 0) ? "2px solid #FFF9D8" : "none",
                                        }}
                                    >
                                        <div className='flex justify-between mx-auto p-3 sm:p-4'>
                                            <p className='text-2xl sm:text-3xl md:text-4xl font-semibold text-[#CDCDCD]'>{index + 1}</p>
                                            <img src={service.image} className='h-[120px] sm:h-[150px] md:h-[180px] lg:h-[220px] w-auto max-w-[70%]' alt={service.title} />
                                        </div>

                                        <div className="px-3 sm:px-4 pb-4">
                                            <h3 className="text-lg sm:text-xl font-semibold mt-2 px-2">{service.title}</h3>
                                            <p className='p-2 text-sm sm:text-base'>{service.para}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
                <CustomSoftwareFaqSection />
                <FeatureCardSectionCustom />
                <div className="px-4 py-10 lg:px-10 bg-white">
                    <div className="flex items-center space-x-2 ">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h2 className="text-[1.2rem] font-semibold ml-2 mb-0 augmenHeading">
                            Our Process
                        </h2>
                    </div>
                    <h2 className='text-[2.5rem] font-semibold mb-6'>From Idea to Impact</h2>
                    <div className='hidden md:block'>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 relative">
                            {steps.map((step, index) => (
                                <React.Fragment key={index} className="">
                                    <div className={`${index === 2 ? 'flex flex-col' : 'flex'}`}>

                                        <div className="flex flex-col items-center text-center p-4">
                                            <img src={step.img} alt={step.title} className="mb-4 w-24 h-24" />
                                            <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                                            <p className="text-gray-600 text-sm">{step.desc}</p>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className="hidden md:flex justify-center items-center">
                                                <FaPlay className=
                                                    {`${index === 2 ? 'text-yellow-500 text-sm mt-[10%] rotate-90' : index === 3 ? 'text-yellow-500 text-sm rotate-180' : index === 4 ? 'text-yellow-500 text-sm rotate-180' : 'text-yellow-500 text-sm mt-[40%]'}`}

                                                />
                                            </div>
                                        )}
                                    </div>

                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    {/* Mobile version arrows */}
                    <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
                        {stepsTwo.map((step, index) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center text-center p-4">
                                    <img src={step.img} alt={step.title} className="mb-4 w-24 h-24" />
                                    <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                                    <p className="text-gray-600 text-sm">{step.desc}</p>
                                </div>
                                {index < steps.length - 1 && (
                                    <FaPlay className="text-yellow-500 text-sm rotate-90" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                {/* Our Tech Stack Section */}
                <div className="px-4 md:px-12 my-12">
                    <div className="flex items-center space-x-2 mb-5">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h2 className="text-[1.2rem] font-semibold ml-2 mb-0 augmenHeading">
                            Our Tech Stack
                        </h2>
                    </div>
                </div>
                
                <CustomSoftMarque />
                
                <FAQSection10 />
                
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

export default CustomSofts
