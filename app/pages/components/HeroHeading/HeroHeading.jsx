"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './HeroHeading.css'

const SlidingText = () => {
    const firstPart = "Raise";
    const finalText = "the Future with us";

    const [showFinal, setShowFinal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFinal(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <h1 className="flex font-bold text-white left-0 right-0 w-[80%] md:w-[88%] mx-auto text-center HeroHeadingStyle montserrat-text">
            {/* First Part */}
            <span className="relative overflow-hidden me-2 md:me-4">{firstPart}</span>

            {/* Final Text Part */}
            <span className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.span
                        key="finalText"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-[#FFF2A5]"
                    >
                        {finalText}
                    </motion.span>
                </AnimatePresence>
            </span>
        </h1>
    );
};

export default SlidingText;
