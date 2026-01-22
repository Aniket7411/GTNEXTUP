'use client';

import React from 'react'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fullimg1 from '../../assets/i.png'
import fullimg2 from '../../assets/clientsBgg.png'


const GsapCarousel = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const sections = gsap.utils.toArray(".panel");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".horizontal-scroll-wrapper",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + window.innerWidth * (sections.length - 1),
            },
        });
    }, []);
    return (
        <div className="horizontal-scroll-wrapper w-full h-screen flex overflow-x-hidden">
            <div className="panel w-full flex-shrink-0 h-screen bg-red-200">
                <img src={fullimg1} alt="" />
            </div>
            <div className="panel w-full flex-shrink-0 h-screen bg-blue-200">    <img src={fullimg2} alt="" />
            </div>
            {/* <div className="panel w-full flex-shrink-0 h-screen bg-green-200">    <img src={fullimg3} alt="" />
            </div> */}
        </div>
    )
}

export default GsapCarousel
