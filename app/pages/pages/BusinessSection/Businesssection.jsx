'use client';

import React, { useEffect, useRef, useState } from "react";
import { ServicesSection } from "../../components/ServicesSection/ServicesSection";
import './businessSection.css'
import handShake from '../../assets/handShake.svg'
import topRightArr from '../../assets/topRightArr.svg'
import TestimonialCarousel from "../HomePage/Feedback/Feedback";
import expertAvatar1 from '../../assets/expertOne.svg'
import expertAvatar2 from '../../assets/expertTwo.svg'
import expertAvatar3 from '../../assets/expertThree.svg'
import expertAvatar4 from '../../assets/expertFour.svg'
import expertAvatar5 from '../../assets/expertFive.svg'
import meetOne from '../../assets/meetOne.svg'
import meetTwo from '../../assets/RectangleMeetRoom.png'
import { motion } from "framer-motion";
// import OdometerCounter from "../../components/OdometerCounter/OdometerCounter";
import { useInView } from "react-intersection-observer";
import ProductMigrationServices from "./imagecarausal";
import MarqueeComp from "../../components/Marq/Marq";
import ProductFAQ from "./productfaq";
import ProductsFAQ from "./productfaq";





const BusinessSection = () => {

    const expertImages = [
        expertAvatar1,
        expertAvatar2,
        expertAvatar3,
        expertAvatar4,
        expertAvatar5
    ];

    const images = {
        expertAvatars: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    };
    const value = "1200"
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [odometerValue, setOdometerValue] = useState(0);

    useEffect(() => {
        if (inView) {
            // Animate to the target value
            const duration = 2000;
            const startValue = 0;
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Easing function
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentValue = Math.floor(startValue + (parseInt(value) - startValue) * easeOutQuart);

                setOdometerValue(currentValue);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [inView, value]);


    return (
        <>

            <div className="bg-[#FFF4D5] text-[#000] h-auto  flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-semibold leading-tight mb-4 mt-[140px] font-poppins">
                    SaaS Products Built for<br /> Real-World Business Needs
                </h1>

                <p className="text-center">At Getraise Technologies, we design and deliver ready-made software solutions that help you launch faster, scale smarter, <br /> and grow digitally, without starting from zero.With 40+ successful software launches, 20+ industries served, and a 95% <br />  client retention rate, our numbers speak for themselves.     </p>

                <div className="flex justify-center gap-4 mt-8 mb-8 md:mt-6 px-4 md:px-8 z-30">
                    <button
                        className="bg-transparent px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black cursor-pointer hover:bg-[#E2B10F] hover:text-white font-medium border border-[#000]"
                        onClick={() => window.location.href = '/contact-getraise-technologies'}
                    >
                        Let’s Grow Your Brand
                    </button>

                    <button
                        className="bg-[#000] text-white px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black hover:bg-transparent hover:text-black border border-[#E2B10F] cursor-pointer font-medium"
                        onClick={() => window.location.href = '/contact-getraise-technologies'}
                    >
                        Request a Free Audit
                    </button>
                </div>
            </div>
            <img src="/assets/curve.png" alt="curve" className="-mt-20 w-[100vw]" />
            <div className="p-4 mt- md:p-10  bg-[#fff] text-[#000] ">

                {/* Introduction Section */}
                <div className="flex items-center space-x-2 mb-4 mt-4">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                    <h2 className="text-[1rem] font-semibold ml-2 mb-0 augmenHeading">
                        Introduction
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
                    {/* Left Text Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex items-center space-x-2 mb-2">
                            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold my-2 ml-2">What Are SaaS Products & How Do They Help</h2>
                        </div>



                        <p className="text-gray-400 text-sm sm:text-base w-auto">
                            SaaS (Software as a Service) products are ready-made software solutions hosted on the <a href="https://getraisetechnologies.com/cloud-computing-services-india" className="text-blue-600 hover:text-blue-800 transition-colors duration-200"> cloud infrastructure </a>  and accessed through the internet.
                            and accessed through the internet. These SaaS solutions for business are not only affordable but also scalable and easy to customize through  <a href="https://getraisetechnologies.com/custom-software-development-company"

                                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"> custom software development services </a>. No matter what is your business size, SaaS eliminates the need for large upfront investments in hardware and development. With SaaS solutions for business, you can launch faster, pay as you grow, and concentrate completely on your business, while we handle the tech.
                        </p>
                        <p className="text-gray-400 text-sm sm:text-base w-auto">
                            At Getraise Technologies, we offer a variety of customizable software products in the SaaS model from CRM and inventory management systems to education platforms and health booking systems.                      </p>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src="/assets/gretlow.png"
                            alt="gretlow"
                            className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-[auto] object-contain"
                        />
                    </div>
                </div>

                <ProductMigrationServices />

                <div
                    className="px-10 py-3 mt-5  "
                    style={{
                        backgroundImage: "url('/assets/saasbg.png')", // change with actual image path
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",   // full width
                    }}
                >
                    <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h2 className="text-[1rem] font-semibold ml-2 mb-0 augmenHeading">
                            Why Choose Us?
                        </h2>
                    </div>

                    <h2 className="text-[#000] mb-4 text-xl font-semibold md:text-2xl">
                        What Makes Us the Best in SaaS Solutions for Business?
                    </h2>
                </div>


                <div className="flex flex-col lg:flex-row justify-between  gap-4 lg:gap-6">


                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src="/assets/welcome.png"
                            alt="gretlow"
                            className="p-5 md:p-7 lg:p-10 h-[480px] "
                        />
                    </div>

                    <div className="w-full lg:w-1/2 mt-2 md:mt-4 lg:mt-8">


                        <p className="text-base sm:text-lg font-semibold">At Getraise Technologies, we empower businesses by transforming ideas into innovative digital products and growth-driven strategies.</p>






                        <div className="space-y-4 mt-2 md:mt-4 lg:mt-8">
                            {[
                                {
                                    title: "Easy to use, powered by intuitive <a href='https://getraisetechnologies.com/ui-ux-design-services' class='text-blue-600 hover:text-blue-800 transition-colors duration-200'>  UI/UX design best practices. </a>",
                                    description:
                                        "Our ready-made software solutions are designed to be user-friendly, so your team can start using them quickly — no special training needed.",
                                },
                                {
                                    title: "Scalable and Cost-Effective",
                                    description:
                                        "With our flexible software products, you can grow your software as you scale and only pay for what you use.",
                                },
                                {
                                    title: "Always Reliable",
                                    description:
                                        "We build strong and secure business software products in India that run smoothly and keep your work going without interruptions.",
                                },
                                {
                                    title: "Safe and Secure",
                                    description:
                                        "Your data is protected with strong security in all our pre-built software for businesses, giving you full peace of mind.",
                                },
                                {
                                    title: "Support You Can Count On",
                                    description:
                                        "We provide regular updates and fast customer support, helping your SaaS solutions for business stay up to date and running perfectly.",
                                },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-start space-x-3 mb-2">
                                    {/* Yellow Dot */}
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0 mt-2 mr-4"></div>

                                    {/* Text */}
                                    <div className="text-gray-700 text-base">
                                        <h3 className="text-xl font-semibold mb-1" dangerouslySetInnerHTML={{ __html: feature.title }} />
                                        <p className="text-base">{feature.description}</p>
                                    </div>
                                </div>

                            ))}
                        </div>



                    </div>

                </div>

                {/* Trusted By Many Companies Section */}
                <div className="px-4 md:px-12 my-12">
                    <div className="flex items-center space-x-2 mb-5">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h2 className="text-[1.2rem] font-semibold ml-2 mb-0 augmenHeading">
                            Trusted By Many Companies
                        </h2>
                    </div>
                </div>

                <MarqueeComp />

                <ProductsFAQ />
            </div>

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


        </>

    );
};

export default BusinessSection;
