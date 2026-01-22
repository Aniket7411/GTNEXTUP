"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const slides = [
    [
        {
            number: 1,
            heading: "Resource Allocation",
            text: "We provide flexible and scalable resource allocation, ensuring you have the right talent and expertise when you need it.",
        },
        {
            number: 2,
            heading: "Custom Software Development (Web, Mobile, SaaS)",
            text: "We specialize in custom web, mobile, and SaaS solutions that are scalable, future-ready, and aligned with your goals.",
        },
    ],
    [
        {
            number: 3,
            heading: "Digital Marketing & SEO",
            text: "Boost your online presence with our SEO and digital marketing strategies focused on measurable, data-driven results.",
        },
        {
            number: 4,
            heading: "ERP & CRM Development",
            text: "Custom ERP/CRM systems designed to streamline your operations and elevate customer management experiences.",
        },
    ],
    [
        {
            number: 5,
            heading: "AI & Automation",
            text: "Implement intelligent, automated platforms with machine learning, chatbots, and analytics for smarter operations.",
        },
        {
            number: 6,
            heading: "E-commerce",
            text: "Create seamless, secure e-commerce experiences with built-in scalability and smooth payment integration.",
        },
    ],
    [
        {
            number: 7,
            heading: "UI/UX & Branding",
            text: "Crafting intuitive designs and cohesive brand identities that enhance engagement and user satisfaction.",
        },
        {
            number: 8,
            heading: "Cloud Solutions",
            text: "Scalable cloud infrastructure, hosting, and migration support that guarantees performance and security.",
        },
    ],
];

export default function MobileSlider() {
    const sectionRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const isScrollingRef = useRef(false);


    useEffect(() => {
        let touchStartY = 0;

        const section = sectionRef.current;

        const isInSection = () => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 0 && rect.bottom > window.innerHeight;
        };

        const handleWheel = (e) => {
            if (!isInSection()) return;

            e.preventDefault();
            if (isScrollingRef.current) return;

            if (e.deltaY > 0 && currentSlide < slides.length - 1) {
                setCurrentSlide((prev) => prev + 1);
            } else if (e.deltaY < 0 && currentSlide > 0) {
                setCurrentSlide((prev) => prev - 1);
            }

            isScrollingRef.current = true;
            setTimeout(() => {
                isScrollingRef.current = false;
            }, 800);
        };

        const handleTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY - touchEndY;

            if (!isInSection()) return;
            if (Math.abs(deltaY) < 30 || isScrollingRef.current) return;

            if (deltaY > 0 && currentSlide < slides.length - 1) {
                setCurrentSlide((prev) => prev + 1);
            } else if (deltaY < 0 && currentSlide > 0) {
                setCurrentSlide((prev) => prev - 1);
            }

            isScrollingRef.current = true;
            setTimeout(() => {
                isScrollingRef.current = false;
            }, 800);
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchend", handleTouchEnd, { passive: true });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [currentSlide]);

    return (
        <>
            <div className="w-full lg:px-16 mb-12 bg-white">
                <div className="z-10 flex flex-col md:flex-row items-center gap-12 w-[80%] m-auto">
                    <div className="w-full">
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                            <h2 className="text-[20px] font-medium text-gray-900 RFDewiExtended">
                                Services We Offer
                            </h2>
                        </div>
                        <p
                            className="text-[#000] text-[20px] md:text-[40px] mt-3 leading-relaxed"
                            style={{ fontWeight: "300", fontFamily: "poppins" }}
                        >
                            We deliver cutting-edge technology solutions that help businesses
                            scale, innovate, and stay ahead in a rapidly evolving digital
                            world.
                        </p>
                    </div>
                </div>
            </div>

            <div
                ref={sectionRef}
                className="relative"
                style={{ height: `${slides.length * 95}vh` }}
            >
                <div className="sticky top-0 h-screen w-full bg-white overflow-hidden">
                    {slides.map((slideGroup, index) => {
                        const isVisible = index === currentSlide;
                        {/* const bgColor = index % 2 === 0 ? "#fff" : "#fef3c7"; */ }
                        const bgColor =
                            index === 0 ? "#FDEF9E" : index === 1 ? "#fff" : index === 2 ? "#000" : "#9fecfe";
                        const numberColor =
                            index === 0 ? "#B5A36F" : index === 1 ? "#ABABAB" : index === 2 ? "#ababab" : "#629aa7"
                        const textColor =
                            index === 2 ? "#fff" : index === 6 ? "#fff" : "#000"

                        return (
                            <div
                                key={index}
                                className="absolute top-0 h-full w-full flex items-center justify-around transition-transform duration-700 px-4"
                                style={{
                                    backgroundColor: bgColor,
                                    transform: isVisible ? "translateX(0)" : "translateX(100%)",
                                }}
                            >
                                <div className="w-full space-y-12">
                                    {slideGroup.map((slide) => (
                                        <div key={slide.number}>
                                            <h2 className="text-[20vw] md:text-[30vw] font-medium" style={{ color: numberColor }}>
                                                {slide.number}
                                            </h2>
                                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-black" style={{ color: textColor }}>
                                                {slide.heading}
                                            </h3>
                                            <p className="text-md md:text-lg font-light text-gray-700" style={{ color: textColor }} >
                                                {slide.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* <button className="flex mx-auto cursor-pointer align-center px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition mt-5 mb-10 md:mb-20">
                Explore More
            </button> */}

            <Link href="/services">
            <button  className="flex mx-auto cursor-pointer align-center px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white mb-16 md:mb-20 transition-colors duration-300 ease-in-out mt-16 md:mt-20">
                Explore Services
            </button>
            </Link>
        </>
    );
}
