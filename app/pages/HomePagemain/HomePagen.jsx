"use client"
import React, { useEffect, useState } from 'react'
import FireRingAnimation from '../pages/HomePage/NewHero/NewHero'
const linkedIn = '/assets/Frame 5.svg'
const insta = '/assets/Frame 6.svg'
const x = '/assets/Frame 7.svg'
const whatsapp = '/assets/Frame 8.svg'
const fb = '/assets/Frame 9.svg'
import SlidingText from '../components/HeroHeading/HeroHeading'
import AboutSection from '../pages/HomePage/AboutUs/AboutUs'
import SuccessStories from '../components/SuccessStories/SuccessStories'
import TestimonialCarousel from '../pages/HomePage/Feedback/Feedback'
import Marquee from '../pages/HomePage/Marquee'
import Ourpresence from '../pages/HomePage/OurPresence/Ourpresence'
import ScrollCarousel from '../components/ScrollCarousel/Scrollcarousel'
import VerticalScrollSlider from '../components/ServicesWeOffer/ServicesWeOffer'
import HoverCards from '../components/IndustriesWeOffer/IndustriesWeOffer'
const marq1 = '/assets/marq1.jpeg'
const marq2 = '/assets/marq2.png'
const marq3 = '/assets/marq3.webp'
const marq4 = '/assets/marq4.jpeg'
const marq5 = '/assets/marq5.jpeg'
const marq6 = '/assets/marq6.jpeg'
const marq7 = '/assets/marq7.jpeg'
const marq8 = '/assets/marq8.jpeg'
const marq9 = '/assets/marq9.jpeg'
const marq10 = '/assets/mrq10.png'

import MobileSlider from '../components/MobileSlider/MobileSlider'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import MarqueeComp from '../components/Marq/Marq'
import { useFormContext } from '../components/formcontext'

const HomePagen = () => {
    const { openForm } = useFormContext();

    const randomWordsList = ["Innovation with Code",
        "Automation for Growth",
        "Data and Design",
        "Cloud for Speed",
        "Tech and Trust",
    ];
    const [isMobile, setIsMobile] = useState(false);
    // const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    const [displayText, setDisplayText] = useState('');
    const [finalShown, setFinalShown] = useState(false);

    useEffect(() => {
        if (inView && !finalShown) {
            let counter = 0;
            const interval = setInterval(() => {
                if (counter < randomWordsList.length) {
                    setDisplayText(randomWordsList[counter]);
                    counter++;
                } else {
                    clearInterval(interval);
                    setDisplayText("Shaping The Future");
                    setFinalShown(true);
                }
            }, 130);

            return () => clearInterval(interval);
        }
    }, [inView, finalShown, randomWordsList.length]);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const images1 = [
        marq1,
        marq2,
        marq3,
        marq4,
        marq10,
    ]

    const images2 = [
        marq5,
        marq6,
        marq7,
        marq8,
        marq9,
    ]

    return (
        <div className='header-spacing'>
            <FireRingAnimation />

            <section className='bg-white text-[#000]'>
                <div className="hidden lg:block">
                    <div className="absolute right-5 bottom-5 flex gap-3">
                        <img src={linkedIn} alt="LinkedIn" className="cursor-pointer" loading="lazy" />
                        <img src={insta} alt="Instagram" className="cursor-pointer" loading="lazy" />
                        <img src={x} alt="X" className="cursor-pointer" loading="lazy" />
                        <img src={whatsapp} alt="WhatsApp" className="cursor-pointer" loading="lazy" />
                        <img src={fb} alt="Facebook" className="cursor-pointer" loading="lazy" />
                    </div>

                </div>
                <AboutSection />

                <Marquee images={images1} />
                {
                    isMobile ? <MobileSlider /> : <VerticalScrollSlider />
                }
                {/* <VerticalScrollSlider />
            <MobileSlider /> */}
                <Ourpresence />
                <Marquee images={images2} />
                <HoverCards />

                <div className='px-6 lg:px-16'>
                    <div className='flex justify-between'>
                        <div className='flex w-[30%] justify-between text-3xl'>
                            <div>+</div>
                            <div>+</div>
                        </div>
                        <div className='flex w-[30%] justify-between text-3xl'>
                            <div>+</div>
                            <div>+</div>
                        </div>
                    </div>
                    <motion.div
                        className=""
                        initial={{ opacity: 0.4, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <p className='text-end text-3xl md:text-5xl lg:text-8xl font-light mt-4'>At The Core of <br /> Innovation</p>
                    </motion.div>
                </div>
                <div className='px-6 lg:px-16'>

                    {/* <p className='text-end text-3xl md:text-5xl lg:text-9xl font-bold mt-24 mb-16'>Shaping The Future</p> */}
                    <motion.p
                        ref={ref}
                        className='text-end text-3xl md:text-5xl lg:text-9xl font-bold mt-24'
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        {displayText}
                    </motion.p>
                    <div className='flex justify-between mb-20 mt-4'>
                        <div className='flex w-[30%] justify-between text-3xl'>
                            <div>+</div>
                            <div>+</div>
                        </div>
                        <div className='flex w-[30%] justify-between text-3xl'>
                            <div>+</div>
                            <div>+</div>
                        </div>
                    </div>
                </div>
                <MarqueeComp />
                <ScrollCarousel />
                <TestimonialCarousel />
            </section>
        </div>
    )
}

export default HomePagen
