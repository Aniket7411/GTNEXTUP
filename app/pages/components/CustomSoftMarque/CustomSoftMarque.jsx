import { motion } from "framer-motion";
import parshv from '../../assets/parshv.jpeg'
import styles from '../../assets/styles.jpeg'
import pawan from '../../assets/pawan.jpeg'
import neu from '../../assets/neu.jpeg'
import heaven from '../../assets/heaven.jpeg'


import marq1 from '../../assets/marq (1).svg'
import marq2 from '../../assets/marq (7).svg'
import marq3 from '../../assets/marq (6).svg'
import marq4 from '../../assets/marq (5).svg'
import marq5 from '../../assets/marq (4).svg'
import marq6 from '../../assets/marq (3).svg'
import marq7 from '../../assets/marq (2).svg'

import marq8 from '../../assets/marq (8).svg'
import marq9 from '../../assets/marq (13).svg'
import marq10 from '../../assets/marq (12).svg'
import marq11 from '../../assets/marq (11).svg'
import marq12 from '../../assets/marq (10).svg'
import marq13 from '../../assets/marq (9).svg'

import leftCloud from '../../assets/leftCloud.svg'
import rightCloud from '../../assets/rightCloud.svg'



const CustomSoftMarque = () => {
    const images = [
        "/assets/marq (1).svg",
        "/assets/marq (7).svg",
        "/assets/marq (6).svg",
        "/assets/marq (5).svg",
        "/assets/marq (4).svg",
        "/assets/marq (3).svg",
        "/assets/marq (2).svg",
       

    ];

    const imagesTwo = [
        "/assets/marq (8).svg",
        "/assets/marq (13).svg",
        "/assets/marq (12).svg",
        "/assets/marq (11).svg",
        "/assets/marq (10).svg",
        "/assets/marq (9).svg",
        "/assets/marq (8).svg",
        "/assets/marq (7).svg",
        "/assets/marq (6).svg",
        "/assets/marq (5).svg",
        "/assets/marq (12).svg",
        "/assets/marq (11).svg",
        "/assets/marq (10).svg",
        "/assets/marq (9).svg",
        "/assets/marq (8).svg",
        "/assets/marq (7).svg",
        "/assets/marq (6).svg",
        "/assets/marq (5).svg",
        "/assets/marq (12).svg",
        "/assets/marq (11).svg",
        "/assets/marq (10).svg",
        "/assets/marq (9).svg",
    ];
    return (
        <div className="relative overflow-hidden w-full py-5 mb-24 min-h-[50vh]">
            {/* Heading is now in parent component */}


            <motion.div
                className="flex min-w-max gap-8 pt-4 mb-10" // 4px gap (gap-1)
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >

                {/* Duplicate content to ensure seamless looping */}
                {[...images, ...images].map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Marquee Item ${i + 1}`}
                        className=" rounded-4xl object-cover flex-shrink-0"
                    />
                ))}

            </motion.div>




            <motion.div
                className="flex min-w-max gap-8" // 4px gap (gap-1)
                animate={{ x: ["-50%", "0%"] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
                {/* Duplicate content to ensure seamless looping */}

                {[...imagesTwo, ...imagesTwo].map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Marquee Item ${i + 1}`}
                        className=" rounded-4xl object-cover flex-shrink-0"
                    />
                ))}


            </motion.div>

            <img className="hidden md:block absolute -left-3 top-0" src={leftCloud} alt="" />
            <img className="hidden md:block absolute -right-3 top-0" src={rightCloud} alt="" />
        </div>
    );
};

export default CustomSoftMarque;
