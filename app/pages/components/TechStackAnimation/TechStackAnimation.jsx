'use client';

import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

const slides = [
    { id: 1, number: "01", heading: "Web Development", image: "/assets/Rectangle 4893.jpg", iconOne: "/assets/respWebIcon.svg", iconTwo: "/assets/custDevIcon.svg", iconThree: "/assets/cms_icon.svg", iconFour: "/assets/apiIcon.svg", bgCol: "bg-[#101010]", text1: "Responsive Website Design", text2: "Custom Web App Development", text3: "CMS & E-commerce Solutions", text4: "API Integrations & Backend Systems" },

    { id: 2, number: "02", heading: "Mobile App Development", image: "/assets/webdev.jpg", iconOne: "/assets/androidnIos.svg", iconTwo: "/assets/crossPlatform.svg", iconThree: "/assets/customBusiness.svg", iconFour: "/assets/appMaintenance.svg", bgCol: "bg-[#212536]", text1: "Android & iOS Native App Development ", text2: "Cross-Platform Apps using Flutter & React", text3: "Custom Business Apps", text4: "App Maintenance & Upgrades" },

    { id: 3, number: "03", heading: "Technology Stack", image: "/assets/webdev.jpg", iconOne: "/assets/frontend.svg", iconTwo: "/assets/backend.svg", iconThree: "/assets/flutter.svg", iconFour: "/assets/wordpress.svg", bgCol: "bg-[#677D8D]", text1: "Frontend: React.js, Angular, Vue.js", text2: "Backend: Node.js, Python, PHP, Laravel", text3: "Mobile: Flutter, React Native, Swift, Kotlin", text4: "CMS: Wordpress, Shopify, Magento" },

    // { id: 4, number: "04", heading: "Deliver", image: "/assets/webdev.jpg", text1: "Responsive Website Design", text2: "Custom Web App Development", text3: "CMS & E-commerce Solutions", text4: "CMS: Wordpress, Shopify, Magento" },
];

export default function TechStackAnimation() {
    const sectionRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const isScrollingRef = useRef(false);

    // Preload all images on mount
    useEffect(() => {
        slides.forEach((slide) => {
            const img = new Image();
            img.src = slide.image;
        });
    }, []);

    useEffect(() => {
        let touchStartY = 0;

        const handleWheel = (e) => {
            const section = sectionRef.current;
            const sectionTop = section.offsetTop;
            const scrollY = window.scrollY;
            const sectionBottom = sectionTop + section.offsetHeight - window.innerHeight;

            const inSection = scrollY >= sectionTop && scrollY <= sectionBottom;

            if (inSection) {
                if (
                    (e.deltaY > 0 && currentSlide < slides.length - 1) ||
                    (e.deltaY < 0 && currentSlide > 0)
                ) {
                    e.preventDefault();

                    if (isScrollingRef.current) return;
                    isScrollingRef.current = true;

                    setTimeout(() => {
                        isScrollingRef.current = false;
                    }, 800);

                    if (e.deltaY > 0) setCurrentSlide((prev) => prev + 1);
                    else setCurrentSlide((prev) => prev - 1);
                }
            }
        };

        const handleTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY - touchEndY;

            const section = sectionRef.current;
            const sectionTop = section.offsetTop;
            const scrollY = window.scrollY;
            const sectionBottom = sectionTop + section.offsetHeight - window.innerHeight;

            const inSection = scrollY >= sectionTop && scrollY <= sectionBottom;

            if (inSection) {
                if (
                    (deltaY > 30 && currentSlide < slides.length - 1) ||
                    (deltaY < -30 && currentSlide > 0)
                ) {
                    if (isScrollingRef.current) return;
                    isScrollingRef.current = true;

                    setTimeout(() => {
                        isScrollingRef.current = false;
                    }, 800);

                    if (deltaY > 30) setCurrentSlide((prev) => prev + 1);
                    else setCurrentSlide((prev) => prev - 1);
                }
            }
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
        <div ref={sectionRef} className="relative" style={{ height: `${slides.length * 32}vh` }}>
            <div className="sticky top-[45px] h-screen w-full overflow-hidden py-10">
                {/* Slides only (removed Intro slide) */}
                {slides.map((slide, index) => {
                    const isVisible = currentSlide === index;

                    return (
                        <div
                            key={index}
                            className="text-white absolute top-0 h-full w-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 transition-transform duration-700"
                            style={{
                                zIndex: isVisible ? 10 : index + 1,
                                transform: isVisible ? "translateY(0)" : "translateY(100%)",
                                opacity: isVisible ? 1 : 0,
                                pointerEvents: isVisible ? "auto" : "none",
                            }}
                        >
                            <motion.div
                                className="h-screen w-full px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10 bg-white flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6"
                                initial={false}
                                animate={isVisible ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                {/* Full Width Image Card */}
                                <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] text-white rounded-xl sm:rounded-2xl shadow-inner flex items-center justify-center overflow-hidden">
                                    {/* Actual image element for better loading */}
                                    <img
                                        src={slide.image}
                                        alt={slide.heading}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        loading="eager"
                                        decoding="async"
                                        style={{
                                            display: 'block',
                                            filter: slide.id === 2 ? 'brightness(1.1) contrast(1.05)' : 'none',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        }}
                                    />
                                    {/* Overlay with reduced opacity - lighter for slide 2 */}
                                    <div
                                        className={`absolute inset-0 rounded-xl sm:rounded-2xl z-[1]`}
                                        style={{
                                            backgroundColor: slide.id === 2 ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.3)'
                                        }}
                                    ></div>
                                    <h2 className="absolute z-[2] left-4 bottom-4 md:left-10 md:bottom-10 w-[85%] sm:w-[75%] md:w-[70%] lg:w-[60%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium drop-shadow-lg leading-tight">
                                        {slide.heading}
                                    </h2>
                                </div>

                                {/* 4 Cards in Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full mt-4">
                                    <div className={`${slide.bgCol} relative p-4 sm:p-5 md:p-6 min-h-[120px] sm:min-h-[140px] md:h-[170px] rounded-xl shadow-md text-start flex items-end text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed`}>
                                        {slide.iconOne && (
                                            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 md:top-6 md:left-6">
                                                <img src={slide.iconOne} className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" alt={slide.text1 || ''} onError={(e) => { e.target.style.display = 'none'; }} />
                                            </div>
                                        )}
                                        <span className="relative z-10">{slide.text1}</span>
                                    </div>
                                    <div className={`${slide.bgCol} relative p-4 sm:p-5 md:p-6 min-h-[120px] sm:min-h-[140px] md:h-[170px] rounded-xl shadow-md text-start flex items-end text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed`}>
                                        {slide.iconTwo && (
                                            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 md:top-6 md:left-6">
                                                <img src={slide.iconTwo} className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" alt={slide.text2 || ''} onError={(e) => { e.target.style.display = 'none'; }} />
                                            </div>
                                        )}
                                        <span className="relative z-10">{slide.text2}</span>
                                    </div>
                                    <div className={`${slide.bgCol} relative p-4 sm:p-5 md:p-6 min-h-[120px] sm:min-h-[140px] md:h-[170px] rounded-xl shadow-md text-start flex items-end text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed`}>
                                        {slide.iconThree && (
                                            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 md:top-6 md:left-6">
                                                <img src={slide.iconThree} className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" alt={slide.text3 || ''} onError={(e) => { e.target.style.display = 'none'; }} />
                                            </div>
                                        )}
                                        <span className="relative z-10">{slide.text3}</span>
                                    </div>
                                    <div className={`${slide.bgCol} relative p-4 sm:p-5 md:p-6 min-h-[120px] sm:min-h-[140px] md:h-[170px] rounded-xl shadow-md text-start flex items-end text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed`}>
                                        {slide.iconFour && (
                                            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 md:top-6 md:left-6">
                                                <img src={slide.iconFour} className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12" alt={slide.text4 || ''} onError={(e) => { e.target.style.display = 'none'; }} />
                                            </div>
                                        )}
                                        <span className="relative z-10">{slide.text4}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
