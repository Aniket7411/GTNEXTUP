'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sun = "/assets/sun.mp4";
import SlidingText from "../../../components/HeroHeading/HeroHeading";
const linkedIn = '/assets/Frame 5.svg';
const insta = '/assets/Frame 6.svg';
const whatsapp = '/assets/Frame 8.svg';
const fb = '/assets/Frame 7.svg';
const plusVec = '/assets/plusVec.svg';
import './newHero.css'



const FireRingAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 500); // Delay opening animation
    }, []);

    return (
        <div className="relative w-full heroHeight overflow-hidden bg-black flex flex-col items-center justify-center z-20">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full md:h-[90vh] object-cover md:object-contain"
                onLoadedData={(e) => {
                    // Video loaded, ensure it plays
                    e.currentTarget.play().catch(() => {});
                }}
            >
                <source src={sun} type="video/mp4" />
            </video>

            {/* Black Circular Cover - Moves Up and Fades Out */}
            <motion.div
                initial={{ y: 800, scale: 5, opacity: 1 }}
                animate={{ y: 0, scale: 5, opacity: 0 }}
                transition={{ duration: 10, ease: "easeInOut" }}
                className="absolute bg-black rounded-full"
                style={{ width: "1200px", height: "1200px" }}
            />

            {/* Sliding Text */}
            <SlidingText />

            {/* Centered Text Below Sliding Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-white text-center mt-4 flex mx-auto w-[80%] md:w-[40%] lg:w-[35%] z-50"
            >
                <p className="text-[16px]" style={{
                    fontFamily: "poppins"
                }}>
                    From cutting-edge software to scalable solutions and tailored expertise, we empower businesses to grow, adapt, and succeed.
                </p>
            </motion.div>

            <div className="absolute bottom-20 left-0 right-0 mx-auto px-4 md:px-12">
                <div className="flex gap-8 mb-5 justify-center md:justify-end">
                    <img src={linkedIn} onClick={() => window.open("https://www.linkedin.com/company/getraisetechnologies/", "_blank")} alt="LinkedIn" className="cursor-pointer" loading="lazy" />
                    <img src={insta} alt="Instagram" onClick={() => window.open("https://www.instagram.com/getraise_private_limited?igsh=MTIyeXNhYWh6bmwweg==", "_blank")} className="cursor-pointer" loading="lazy" />
                    {/* <img src={x} alt="" className="cursor-pointer" /> */}
                    <img src={whatsapp} alt="WhatsApp" onClick={() => window.open("https://api.whatsapp.com/send?phone=9374455555", "_blank")} className="cursor-pointer" loading="lazy" />
                    <img src={fb} alt="Facebook" onClick={() => window.open("https://m.facebook.com/Getraise-Technologies-109273644798382/", "_blank")} className="cursor-pointer" loading="lazy" />
                </div>


            </div>
            {/* <div className="flex absolute bottom-14 left-0 right-0 w-[100%] px-4 md:px-10 ">
                    <div className="flex justify-between w-[33%]">
                        <img src={plusVec} alt="" />
                        <img src={plusVec} alt="" />

                    </div>
                    <div className="w-[33%]"></div>
                    <div className="flex justify-between w-[33%]">
                        <img src={plusVec} alt="" />
                        <img src={plusVec} alt="" />

                    </div> 
                </div> */}
        </div>
    );
};

export default FireRingAnimation;
