import { motion } from "framer-motion";
import './marq.css'

const MarqueeComp = () => {
    const images = [
        "/assets/woninteen.svg",
        "/assets/falcone.svg",
        "/assets/eazypro.svg",
        "/assets/wlaret.svg",
        "/assets/styles.jpeg",
        "/assets/rolling.svg",
        "/assets/shivala.jpeg",
        "/assets/energy.svg",
        "/assets/aarambh.svg",
        "/assets/nsc.svg",
        "/assets/raj.svg",
        "/assets/rajk.svg",
        "/assets/sailing.svg",
        "/assets/ferrart.svg",
        "/assets/parshv.jpeg",
        "/assets/pawan.jpeg",
        "/assets/neu.jpeg",
        "/assets/heaven.jpeg",
        "/assets/bharat.jpeg",
        "/assets/seva.jpeg",
        "/assets/tree.svg",
        "/assets/chobthai.svg",
        "/assets/lionhead.svg",
    ];

    return (
        <>
            <div className="flex   items-center justify-center space-x-2 mb-8 w-[80%] mx-auto lg:px-16 mt-8">
                <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                <h2 className="text-[20px] font-normal text-center text-gray-900 RFDewiExtended"
                >Trusted By Many Companies</h2>
            </div>
            <div className="overflow-hidden w-full py-3 mb-24 ">
                {/* <h2 className="text-center text-4xl font-semibold mb-8">Trusted By Many Companies</h2> */}
                <div className="bgimar relative h-[350px] overflow-hidden">
                    {/* Background text */}
                    <div className="absolute left-0 right-0 h-full text-center m-auto z-10 pointer-events-none">
                        <div className="flex items-center justify-center h-full text-[#434343] text-7xl md:text-9xl font-bold">
                            OUR CLIENTS
                        </div>
                    </div>

                    {/* Vertical marquee animation */}
                    {/* <motion.div
                    className="flex flex-col items-center gap-20 absolute top-0 left-0 right-0 z-20"
                    animate={{ y: ["100%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                >
                    {[...images, ...images].map((src, i) => (
                        <motion.img
                            key={i}
                            src={src}
                            alt={`Marquee Item ${i + 1}`}
                            className="w-44 h-44 rounded-4xl object-cover flex-shrink-0"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        />
                    ))}
                </motion.div> */}

                    <motion.div
                        className="grid absolute top-0 left-0 right-0 z-20 gap-8
             grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                        animate={{ y: ["20%", "-100%"] }}
                        transition={{ repeat: Infinity, duration: 85, ease: "linear" }}
                    >
                        {[...images, ...images].map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5 }}
                                className="flex justify-center"
                            >
                                <img
                                    src={src}
                                    alt={`Marquee Item ${i + 1}`}
                                    className="w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-3xl"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>

        </>
    );
};

export default MarqueeComp;
