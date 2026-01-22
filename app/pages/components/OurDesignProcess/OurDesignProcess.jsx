// import React, { useRef } from 'react';
// import vidOne from '../../assets/vidOne.mp4';
// import { motion, useInView } from 'framer-motion';

// const steps = [
//   { title: "Discover", video: vidOne, text: "Understand your business, your users, and your goals." },
//   { title: "Define", video: vidOne, text: "Translate insights into ideas and structured flows." },
//   { title: "Design", video: vidOne, text: "Create intuitive and engaging user experiences." },
//   { title: "Develop", video: vidOne, text: "Turn designs into fully functional products." },
//   { title: "Deploy", video: vidOne, text: "Launch, monitor, and iterate for impact." },
// ];

// const OurDesignProcess = () => {
//   const sectionRefs = useRef([]);
//   const inViewStates = steps.map((_, i) => {
//     const ref = sectionRefs.current[i] ?? React.createRef();
//     sectionRefs.current[i] = ref;
//     return useInView(ref, { amount: 0.6 });
//   });

//   // Get the index of the first visible section
//   const inViewIndex = inViewStates.findIndex((visible) => visible);

//   return (
//     <div className="relative h-screen flex bg-black text-white overflow-hidden">
//       {/* Left fixed titles */}
//       <div className="w-[28%] pl-12 py-16 space-y-10 sticky top-0 h-screen flex flex-col justify-center">
//         {steps.map((step, i) => (
//           <div
//             key={i}
//             className={`text-[2rem] font-semibold transition-colors duration-300 ${
//               inViewIndex === i ? 'text-yellow-300' : 'text-white'
//             }`}
//           >
//             {`0${i + 1}`} <span className="text-[1.6rem]">{step.title}</span>
//           </div>
//         ))}
//       </div>

//       {/* Right scrollable content */}
//       <div className="w-[72%] overflow-y-scroll h-screen snap-y snap-mandatory">
//         {steps.map((step, i) => (
//           <section
//             key={i}
//             ref={sectionRefs.current[i]}
//             className="h-screen w-full snap-start flex items-center justify-center gap-8 px-12"
//           >
//             <motion.video
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: 'easeInOut' }}
//               src={step.video}
//               className="max-w-md"
//               autoPlay
//               muted
//               loop
//             />
//             <motion.p
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: 'easeInOut' }}
//               className="text-white w-[30%] text-[1.2rem]"
//             >
//               {step.text}
//             </motion.p>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurDesignProcess;




import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
const vidOne = '/assets/vidOne.mp4';
const vid2 = '/assets/vid2.mp4';
const vid3 = '/assets/vid3.mp4';
const vid4 = '/assets/vid4.mp4';
const vid5 = '/assets/vid5.mp4';

import { motion } from 'framer-motion';

const slides = [
    { id: 1, number: "01", video: vidOne, heading: "Discover", text: "We start by learning everything about your brand, goals, and users. With interviews, competitor audits, and behavior research: we find out what your users want and how to fulfill their needs with your digital product." },
    { id: 2, number: "02", video: vid2, heading: "Define", text: "We translate the crude feedback into usable plans, creating user journeys, and user personas, and making a flow diagram of your app or site. This will assist us to get a clear direction prior to designing." },
    { id: 3, number: "03", video: vid3, heading: "Design", text: "Wireframes, interactive prototypes, and beautiful UI screens are designed by our designers. All components are tailor-made to your brand and are optimized to be used on all devices, whether it is the mobile app UX UX design or a site interface." },
    { id: 4, number: "04", video: vid4, heading: "Deliver", text: "We design fully responsive design files (with style guides and design systems). These dev-ready resources will make the implementation easy, the development quicker and the branding across your app or site is solid." },
    { id: 5, number: "05", video: vid5, heading: "Test & Improve", text: "After delivery, user behavior is tested, feedback is collected and update actions are done based on data. This constantly evolving process allows your product to evolve with your users and guarantees long-term UI/UX success." },
];

export default function VerticalScrollSlider() {
    const sectionRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const isScrollingRef = useRef(false);
    const isInSectionRef = useRef(false);
    const Navigate = useRouter();
    const [isVideoLoaded, setIsVideoLoaded] = useState({});

    // Lock scroll when section is in view
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && currentSlide < slides.length - 1) {
                        // Lock scroll to section top when it enters view
                        window.scrollTo({
                            top: section.offsetTop,
                            behavior: 'auto'
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, [currentSlide]);

    useEffect(() => {
        let touchStartY = 0;
        let scrollTimeout = null;

        const checkIfInSection = () => {
            if (!sectionRef.current) return false;
            const section = sectionRef.current;
            const sectionTop = section.offsetTop;
            const scrollY = window.scrollY;
            const sectionBottom = sectionTop + section.offsetHeight;
            // Check if we're within the section bounds (tighter bounds)
            return scrollY >= sectionTop - 10 && scrollY <= sectionBottom + 10;
        };

        const handleWheel = (e) => {
            const inSection = checkIfInSection();
            isInSectionRef.current = inSection;

            if (inSection) {
                // Always prevent default when in section
                e.preventDefault();
                e.stopPropagation();

                // If we're on the last slide and scrolling down, allow normal scroll after delay
                if (currentSlide === slides.length - 1 && e.deltaY > 0) {
                    // Small delay to ensure last slide is visible, then allow scroll
                    setTimeout(() => {
                        window.scrollBy({
                            top: 100,
                            behavior: 'smooth'
                        });
                    }, 100);
                    return;
                }

                // If we're at the first slide and scrolling up, allow normal scroll
                if (currentSlide === 0 && e.deltaY < 0) {
                    // Allow scrolling before the section
                    return;
                }

                if (isScrollingRef.current) return;
                isScrollingRef.current = true;

                if (e.deltaY > 0 && currentSlide < slides.length - 1) {
                    setCurrentSlide((prev) => prev + 1);
                } else if (e.deltaY < 0 && currentSlide > 0) {
                    setCurrentSlide((prev) => prev - 1);
                }

                // Lock scroll position after slide change
                setTimeout(() => {
                    if (sectionRef.current) {
                        window.scrollTo({
                            top: sectionRef.current.offsetTop,
                            behavior: 'auto'
                        });
                    }
                    isScrollingRef.current = false;
                }, 800);
            }
        };

        const handleTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY - touchEndY;
            const inSection = checkIfInSection();

            if (inSection) {
                // If we're on the last slide and swiping down, allow normal scroll
                if (currentSlide === slides.length - 1 && deltaY < -30) {
                    return;
                }

                // If we're at the first slide and swiping up, allow normal scroll
                if (currentSlide === 0 && deltaY > 30) {
                    return;
                }

                if (isScrollingRef.current) return;
                isScrollingRef.current = true;

                if (deltaY > 30 && currentSlide < slides.length - 1) {
                    setCurrentSlide((prev) => prev + 1);
                } else if (deltaY < -30 && currentSlide > 0) {
                    setCurrentSlide((prev) => prev - 1);
                }

                setTimeout(() => {
                    isScrollingRef.current = false;
                }, 800);
            }
        };

        // Lock scroll position when entering section
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const currentScroll = window.scrollY;
            const inSection = currentScroll >= sectionTop - 10 && currentScroll <= sectionBottom + 10;

            // If we're in the section and not on the last slide, lock scroll
            if (inSection && currentSlide < slides.length - 1) {
                // Lock scroll position to the section top
                if (currentScroll !== sectionTop) {
                    window.scrollTo({
                        top: sectionTop,
                        behavior: 'auto'
                    });
                }
            }

            // If we're past the section but haven't seen all slides, scroll back
            if (currentScroll > sectionBottom && currentSlide < slides.length - 1) {
                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchend", handleTouchEnd, { passive: true });
        window.addEventListener("scroll", handleScroll, { passive: false });

        // Keyboard navigation
        const handleKeyDown = (e) => {
            const inSection = checkIfInSection();
            if (!inSection) return;

            if (e.key === 'ArrowDown' && currentSlide < slides.length - 1) {
                e.preventDefault();
                setCurrentSlide((prev) => prev + 1);
            } else if (e.key === 'ArrowUp' && currentSlide > 0) {
                e.preventDefault();
                setCurrentSlide((prev) => prev - 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("keydown", handleKeyDown);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [currentSlide]);

    return (
        <>

            <div
                ref={sectionRef}
                className="relative"
                style={{
                    height: '100vh',
                    minHeight: '100vh'
                }}
            >
                <h2 className="text-[#434343] text-4xl sm:text-5xl md:text-6xl lg:text-7xl pt-6 sm:pt-10 md:pt-12 font-poppins font-bold text-center px-4 mb-4">
                    Our Design Process
                </h2>

                {/* Slide Progress Indicator */}
                <div className="flex justify-center items-center gap-2 mb-4 px-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (index <= currentSlide) {
                                    setCurrentSlide(index);
                                }
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${index <= currentSlide
                                ? 'bg-yellow-500 w-8'
                                : 'bg-gray-300 w-2'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                    <span className="ml-4 text-sm text-gray-600 font-medium">
                        {currentSlide + 1} / {slides.length}
                    </span>
                </div>

                <div className="sticky top-0 h-screen w-full bg-white overflow-hidden z-10 relative">
                    {/* Scroll Hint */}
                    {currentSlide < slides.length - 1 && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none"
                        >
                            <span className="text-sm text-white font-medium bg-black/50 px-3 py-1 rounded-full">Scroll to continue</span>
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
                            >
                                <motion.div
                                    animate={{ y: [0, 12, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-1.5 h-1.5 bg-white rounded-full"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                    {slides.map((slide, index) => {
                        const isVisible = index <= currentSlide;
                        const numberColor = "##FEEE99"
                        const bgColor = "#000";
                        const textColor = "#fff"

                        return (

                            <>

                                <div
                                    key={index}
                                    className="absolute top-0 h-full w-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-9 transition-all duration-700 ease-in-out"
                                    style={{
                                        zIndex: index + 10,
                                        backgroundColor: bgColor,
                                        transform: isVisible ? "translateY(0) scale(1)" : "translateY(100%) scale(0.95)",
                                        opacity: isVisible ? 1 : 0,
                                        pointerEvents: isVisible ? 'auto' : 'none',
                                    }}
                                    onClick={() => {
                                        if (index <= currentSlide) {
                                            setCurrentSlide(index);
                                        }
                                    }}
                                >
                                    <div className="lg:w-[35%] text-[1.5rem] sm:text-[2rem] md:text-[3.2rem] text-[#FEEE99] text-center lg:text-left mb-6 md:mb-0 px-4 sm:px-6 lg:pr-8" style={{ color: numberColor }}>
                                        <motion.div
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                                            className="mb-4"
                                        >
                                            <span className="text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] font-bold">{slide.number}</span>{" "}
                                            <h3 className="text-[1.5rem] sm:text-[1.9rem] md:text-[2.5rem] text-[#FEEE99] inline-block md:inline ml-2">
                                                {slide.heading}
                                            </h3>
                                        </motion.div>
                                        <motion.p
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                                            transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
                                            className="text-sm sm:text-base md:text-[1rem] leading-relaxed mt-4"
                                            style={{ color: textColor }}
                                        >
                                            {slide.text}
                                        </motion.p>
                                    </div>

                                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 w-full lg:w-[60%] px-4 sm:px-6 relative">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9, x: isVisible ? 0 : 50 }}
                                            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
                                            className="relative w-full max-w-2xl"
                                        >
                                            {!isVideoLoaded[index] && (
                                                <div className="absolute inset-0 bg-gray-800 rounded-lg flex items-center justify-center">
                                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
                                                </div>
                                            )}
                                            <motion.video
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isVisible && isVideoLoaded[index] ? 1 : 0 }}
                                                transition={{ duration: 0.5 }}
                                                src={slide.video}
                                                className="w-full rounded-lg shadow-2xl"
                                                autoPlay
                                                muted
                                                loop
                                                playsInline
                                                onLoadedData={() => {
                                                    setIsVideoLoaded(prev => ({ ...prev, [index]: true }));
                                                }}
                                            />
                                        </motion.div>
                                        {/* <motion.p
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                                    className="lg:absolute lg:right-3 lg:items-center lg:w-[20%] text-[1rem] lg:text-[1.2rem] text-center lg:text-left"
                                    style={{ color: textColor }}
                                >
                                    {slide.text}
                                </motion.p> */}
                                    </div>
                                </div>

                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
