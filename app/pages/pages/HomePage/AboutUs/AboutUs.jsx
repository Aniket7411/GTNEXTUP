"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";


// const images =
//  [
//     rect30,
//     rect30,
//     rect30,
//     rect30,
//     rect30
// ];

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.5, // Trigger when 50% is in view
            }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);
    // const [currentIndex, setCurrentIndex] = useState(0);

    // const prevSlide = () => {
    //     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    // };

    // const nextSlide = () => {
    //     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    // };

    // const heading = "About Us";

    const text = "About Us";

    // Animation for the parent container
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1, // Delay between each letter
            },
        },
    };

    // Animation for each letter
    const letter = {
        hidden: { opacity: 0, y: -50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                ease: "easeOut",
            },
        },
    };

    return (
        <>
            <div className="bg-white lg:mt-[-8.5rem] overflow-hidden z-10">
                <motion.h2
                    className="text-center text-[4rem] lg:text-[16rem] font-bold text-[#00000033] z-0"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.7 }}
                >
                    {text.split("").map((char, index) => (
                        <motion.span key={index} variants={letter} className="inline-block">
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h2>
            </div>

            <div className="w-full lg:px-16 mb-16 md:mb-20 bg-white">
                {/* Background Text */}

                {/* Content Wrapper */}
                <div className="z-10 flex flex-col md:flex-row items-center gap-y-6 md:gap-x-12 w-[80%] m-auto">
                    {/* Left - Image Carousel */}
                    <div className="relative w-full md:w-1/2">
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                            <h2 className="text-[28px] font-medium text-gray-900 RFDewiExtended"
                            >Bio</h2>
                        </div>
                        <img
                            ref={imageRef}
                            src="/assets/Rectangle 30.svg"
                            alt="About Us"
                            className={`
      z-10 shadow-lg object-cover h-[400px] transition-all duration-1000 ease-in-out
      ${isVisible ? 'w-full' : 'w-1/2'}
    `}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>


                    {/* Right - Text Content */}

                    <div className="w-full md:w-1/2">
                        <motion.div
                            className=""
                            initial={{ opacity: 0.4, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {/* Bio Title */}


                            {/* Description */}
                            <p className="text-[#000] md:mt-3 leading-relaxed"
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    fontFamily: 'poppins'
                                }}
                            >
                                We are a technology-driven company committed to empowering
                                businesses with scalable solutions, expert-driven innovation, and
                                seamless digital transformation. From custom software development to
                                tailored business solutions, we provide the expertise and technology
                                that help brands grow, adapt, and lead in an ever-evolving market.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AboutSection;
