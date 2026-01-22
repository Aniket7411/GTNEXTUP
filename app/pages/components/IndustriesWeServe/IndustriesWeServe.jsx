"use client";
import React from "react";

import "./IndustriesWeServe.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const industryData = [
    {
        defaultImage: "/assets/itsd.svg",
        hoverImage: "/assets/itsd.svg",
        defaultTitle: "White Label IT & Software Development",
        hoverTitle: "Expert IT Solutions",
        hoverText: "Empower your tech projects with experienced developers, software engineers, and technical consultants.",
    },
    {
        defaultImage: "/assets/gs.svg",
        hoverImage: "/assets/gsWhite.svg",
        defaultTitle: "White Label Digital Marketing & Growth Strategy",
        hoverTitle: "Growth Experts",
        hoverText: "Drive your business forward with proven marketing strategies and growth-oriented solutions.",
    },
    {
        defaultImage: "/assets/bcs.svg",
        hoverImage: "/assets/bcsWhite.svg",
        defaultTitle: "White Label Business Consulting & Strategy",
        hoverTitle: "Strategic Insights",
        hoverText: "Achieve success with tailored business strategies and expert consulting.",
    },
    {
        defaultImage: "/assets/pmo.svg",
        hoverImage: "/assets/pmoWhite.svg",
        defaultTitle: "White Label Project Management & Operations",
        hoverTitle: "Operational Excellence",
        hoverText: "Streamline your operations and project management with our expert guidance.",
    },
];

const IndustriesWeServe = () => {

    const router = useRouter();
    return (
        <>
            <div className="relative  industriesBg w-full lg:h-[60vh] bg-no-repeat bg-cover bg-center text-left lg:mb-36">
                <div
                    className="hidden lg:block lg:absolute w-[100%]  lg:top-[3rem] mb-12"
                    style={{ padding: "0 3rem" }}
                >
                    <div className="flex items-center space-x-2 mb-8">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h2 className="text-xl md:text-4xl font-bold ml-2 mb-0 augmenHeading text-white">
                            White Label Services
                        </h2>
                    </div>
                    
                    {/* Hidden H3 headings for SEO - White Label Services */}
                    <div className="sr-only">
                        <h3>White Label IT & Software Development</h3>
                        <h3>White Label Digital Marketing & Growth Strategy</h3>
                        <h3>White Label Business Consulting & Strategy</h3>
                        <h3>White Label Project Management & Operations</h3>
                    </div>
                    <div
                        className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center growGrid"
                    >
                        {industryData.map((industry, index) => (
                            <div
                                key={index}
                                className="relative group h-[340px] w-[90%] p-8 overflow-hidden bg-[#2E2E2E] flex items-center justify-center cursor-pointer"
                            >
                                {/* Default content */}
                                <div className="flex flex-col items-center justify-center transition-all duration-500 group-hover:opacity-0">
                                    <img src={industry.defaultImage} className="mb-4" alt={industry.defaultTitle} />
                                    <h3 className="text-[24px] text-center text-white font-medium m-0">
                                        {industry.defaultTitle}
                                    </h3>
                                </div>

                                {/* Hover content */}
                                <div className="absolute top-0 left-full group-hover:left-0 transition-all duration-500 ease-in-out h-full w-full bg-[#FDEF9E] flex flex-col items-center justify-center text-white p-8">
                                    <img src={industry.hoverImage} className="mb-4 text-center" alt={industry.hoverTitle} />
                                    <p className="text-[24px] text-black  text-center font-semibold mb-2">{industry.hoverTitle}</p>
                                    <p className="text-center text-black text-sm">{industry.hoverText}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="block  w-[100%] lg:hidden">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center"
                >
                    {industryData.map((industry, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center rounded-4xl h-[90%] w-[90%] p-8"
                            style={{ backgroundColor: "#FDEF9E" }}
                        >
                            <img src={industry.hoverImage} className="mb-4" alt={industry.hoverTitle} />
                            <h3 className="text-[20px] font-medium text-center m-0">{industry.defaultTitle}</h3>
                            <p className="text-center text-[16px] text-center">{industry.hoverText}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/*
            <div className="px-6 lg:px-16 pt-16">
                <motion.div
                    className=""
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className="text-2xl md:text-4xl lg:text-5xl font-medium md:w-[75%] mb-10">
                        Custom Resource Models Tailored to{" "}
                        <span className="text-[#FDBF00]">Your Business Needs</span>
                    </p>
                </motion.div>
               <div className="flex flex-wrap justify-between">
                    <p className="text-[20px] font-light md:w-[70%]">
                        We offer customized engagement models that allow you to scale up or down based on your
                        requirements. Whether you’re seeking a dedicated team for long-term projects or
                        specialized talent for short-term assignments, we’ve got you covered.
                    </p>
                    <button onClick={() => { router.push('/contact-getraise-technologies') }} className="flex mx-auto items-center cursor-pointer align-center px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition mt-10 mb-5 h-[50px]">
                        Contact Us Today
                    </button>
                </div>
            </div>*/}
        </>
    );
};

export default IndustriesWeServe;
