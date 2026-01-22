import React from "react";
import { motion } from "framer-motion";

const industries = [
    {
        id: 1,
        title: "E-commerce & Retail",
        text: "Our full-service digital marketing agency will drive your online transactions; increase personalized shopping and grow your brand — whether you need SEO services or online marketing services.",
        color: "bg-[#407BFF]",
        bg: "#E6EDFF80"
    },
    {
        id: 2,
        title: "Healthcare & Clinics",
        text: "Improve healthcare with smart digital marketing solutions that support telemedicine, patient management, and data-led healthcare analytics — crafted by a professional digital marketing team.",
        color: "bg-[#EC2028]",
        bg: "#FFDDDE80"
    },
    {
        id: 3,
        title: "SaaS & Tech Startups",
        text: "Whether it is product launch or performance marketing, we scale tech brands using tailor-made digital marketing services.",
        color: "bg-[#FFB91A]",
        bg: "#FFEDC580"
    },
    {
        id: 4,
        title: "Real Estate & Construction",
        text: "Attract more leads through targeted advertising, virtual property tours, and intelligent local SEO that will place your listings in front of the correct buyers.",
        color: "bg-[#BA68C8]",
        bg: "#FADAFF80"
    },
    {
        id: 5,
        title: "Education & E-learning",
        text: "Get accessible learning through SEO-friendly platforms, virtual classrooms, and content marketing services of an online marketing firm preferred by educators.",
        color: "bg-[#000080]",
        bg: "#B7B7F233"
    },
    {
        id: 6,
        title: "Local Businesses & Services",
        text: "Build local trust and online visibility with our affordable digital marketing agency. From local SEO to social media marketing agency support — we help you connect and convert.",
        color: "bg-[#7F3E3B]",
        bg: "#7F3E3B1A"
    },
];

// Animation Variants
const variants = {
    hiddenLeft: { opacity: 0, x: -120 },
    hiddenRight: { opacity: 0, x: 120 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: i * 0.2 },
    }),
};

const IndustriesSection = () => {
    return ( 
        <section className="py-10 sm:py-10 bg-[#fff] text-[#000] p-4 sm:p-6 lg:p-8">
            {/* Heading */}
            <div className="max-w-6xl mx-auto text-center mb-[40px]] sm:mb-10 px-4">
                <div className="flex items-center justify-center space-x-2 mb-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-yellow-500 rounded-full"></div>
                    <p className="text-base sm:text-lg lg:text-xl  ml-2 mb-0 augmenHeading">
                        Industries We Serve
                    </p>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold px-4">
                    Industries Transformed by Getraise Marketing
                </h2>
            </div>

            {/* Full Width Rows */}
            <div className="mt-[60px]">
                <div className="w-full  max-w-7xl mx-auto">
                    {industries.map((item, index) => (
                        <motion.div
                            key={item.id}
                            custom={index}
                            initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={variants}
                            className={`w-full flex flex-col mb-6 sm:mb-8 p-2 lg:flex-row items-center justify-between relative 
    ${index % 2 === 0 ? "lg:flex-row rounded-l-full" : "lg:flex-row-reverse rounded-r-full"}`}
                            style={{
                                backgroundColor: item.bg,
                            }}
                        >
                            {/* Number */}
                            <div
                                className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-[95px] lg:h-[95px] flex items-center justify-center rounded-full text-white font-bold text-lg sm:text-xl ${item.color} mb-4 lg:mb-0`}
                            >
                                {item.id}
                            </div>

                            {/* Text */}
                            <div
                                className="flex-1 lg:px-8 text-center lg:text-left"
                            >
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                                    {item.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
