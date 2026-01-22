"use client";
import { motion } from "framer-motion";
import dogood from "../../assets/dogood.png";
import grou from "../../assets/grou.png";
import impact from "../../assets/impact.png";
import invest from "../../assets/invest.png";
import like from "../../assets/like.png";
import social from "../../assets/social.png";
import OdometerCounter from "../../components/OdometerCounter/OdometerCounter";

// Animation variants for the pop-out effect (no changes needed)
const popOutContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5, // Stagger the pop-out animation for each child
        },
    },
};

const popOutItem = {
    hidden: { scale: 0.1, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
        },
    },
};

const Growsmarter = () => {

    return (
        <div className="relative pt-[65px] text-[#000] overflow-hidden bg-white flex flex-col justify-center items-center pb-4">


            {/* Main content container */}
            <div className="relative py-1  lg:z-10  mx-auto w-full">
                <motion.div
                    className="grid grid-cols-1 "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Heading with relative positioning for popups */}
                    <div className="relative text-center mt-10 mx-auto ">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 relative z-20 px-4">
                            Grow Smarter with <br />     Data-Driven Digital Marketing
                        </h1>

                        {/* Pop-out images positioned around the heading */}
                        <motion.div
                            className="absolute inset-0 z-0 flex justify-center items-center"
                            variants={popOutContainer}
                            initial="hidden"
                            animate="show"
                        >
                            {/* Mobile: Show 3-4 key images, Desktop: Show all */}
                            <motion.img
                                src="/assets/dogood.png"
                                alt="Do Good"
                                className="absolute -top-[8%] sm:-top-[12%] md:-top-[18%] lg:-top-[20%] xl:-top-[22%] left-[2%] sm:-left-[10%] md:-left-[6%] lg:-left-[7%] xl:-left-[8%] w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24"
                                variants={popOutItem}
                                loading="lazy"
                                decoding="async"
                            />
                            <motion.img
                                src="/assets/invest.png"
                                alt="Invest"
                                className="absolute -top-[12%] sm:-top-[10%] md:-top-[12%] lg:-top-[14%] left-[48%] sm:left-[47%] md:left-[48%] w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24"
                                variants={popOutItem}
                                loading="lazy"
                                decoding="async"
                            />
                            <motion.img
                                src="/assets/impact.png"
                                alt="Impact"
                                className="absolute -top-[14%] sm:-top-[15%] md:-top-[18%] lg:-top-[20%] right-[12%] sm:right-[16%] md:right-[18%] lg:right-[20%] w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24"
                                variants={popOutItem}
                                loading="lazy"
                                decoding="async"
                            />
                            <motion.img
                                src="/assets/social.png"
                                alt="Social"
                                className="absolute -top-[8%] sm:-top-[15%] md:-top-[18%] lg:-top-[20%] xl:-top-[22%] -right-[2%] sm:-right-[3%] md:-right-[4%] lg:-right-[5%] xl:-right-[6%] w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24"
                                variants={popOutItem}
                                loading="lazy"
                                decoding="async"
                            />

                            <motion.img
                                src="/assets/newb.png"
                                alt="Business"
                                className="absolute -bottom-[12%] sm:-bottom-[15%] md:-bottom-[18%] lg:-bottom-[20%] right-[18%] sm:right-[21%] md:right-[23%] lg:right-[25%] w-10 sm:w-12 md:w-14 lg:w-18 xl:w-24 hidden sm:block"
                                variants={popOutItem}
                                loading="lazy"
                                decoding="async"
                            />
                            <motion.img
                                src="/assets/like.png"
                                alt="Like"
                                className="absolute top-[78%] sm:top-[75%] md:top-[72%] lg:top-[70%] left-[18%] sm:left-[21%] md:left-[23%] lg:left-[25%] w-10 sm:w-10 md:w-12 lg:w-16 xl:w-20 hidden md:block"
                                variants={popOutItem}
                                loading="lazy"
                                decoding="async"
                            />
                            <motion.img
                                src="/assets/grou.png"
                                alt="Group"
                                className="absolute -top-[16%] sm:-top-[20%] md:-top-[22%] lg:-top-[25%] left-[22%] sm:left-[26%] md:left-[28%] lg:left-[30%] w-10 sm:w-10 md:w-12 lg:w-16 xl:w-20"
                                variants={popOutItem}
                                loading="lazy"
                                decoding="async"
                            />
                        </motion.div>
                    </div>

                    <p className="lg:w-[70%] p-5 md:p-2 mx-auto text-center mb-2 text-base sm:text-lg md:text-xl text-gray-700 relative z-20">
                        At Getraise Technologies, we help you connect with the right audience
                        through strategic digital and performance marketing that drives
                        growth and ROI.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center my-2 font-poppins relative z-20">
                        <div>
                            <button onClick={() => window.location.href = '/contact-getraise-technologies'} className="px-6 py-3 rounded-md border border-black hover:bg-gray-100 transition-colors">
                                Let's Grow Your Brand
                            </button>
                        </div>
                        <div>
                            <button onClick={() => window.location.href = '/contact-getraise-technologies'} className="bg-black px-6 py-3 rounded-md text-white hover:bg-gray-800 transition-colors">
                                Request a Free Audit
                            </button>
                        </div>
                    </div>
                    {/* shadow-[0_10px_15px_-3px_rgba(0,0,0,0.25)] */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto mt-8 relative z-20 
                bg-white  rounded-b-2xl">


                        <div className="text-center p-4">
                            <p className="text-4xl md:text-5xl font-semibold mb-2">
                                <OdometerCounter value={24} />
                                <span className="text-[#FDEF9E]">+</span>
                            </p>
                            <p className="text-gray-600 text-sm md:text-base">
                                AWARDS AND RECOGNITIONS
                            </p>
                        </div>

                        <div className="text-center p-4">
                            <p className="text-4xl md:text-5xl font-semibold mb-2">
                                <OdometerCounter value={500} />
                                <span className="text-[#FDEF9E]">+</span>
                            </p>
                            <p className="text-gray-600 text-sm md:text-base">
                                SUCCESS PROJECT
                            </p>
                        </div>

                        <div className="text-center p-4">
                            <p className="text-4xl md:text-5xl font-semibold mb-2">
                                <OdometerCounter value={20} />
                                <span className="text-[#FDEF9E]">+</span>
                            </p>
                            <p className="text-gray-600 text-sm md:text-base">
                                GLOBAL COUNTRIES PRESENCE WITH CLIENTS
                            </p>
                        </div>

                        <div className="text-center p-4">
                            <p className="text-4xl md:text-5xl font-semibold mb-2">
                                <OdometerCounter value={10} />
                                <span className="text-[#FDEF9E]">+</span>
                            </p>
                            <p className="text-gray-600 text-sm md:text-base">
                                YEARS OF EXPERIENCE
                            </p>
                        </div>
                    </div>

                    <hr className="my-1 border-t border-gray-300 shadow-sm" />


                </motion.div>
            </div>
        </div>
    );
};

export default Growsmarter;