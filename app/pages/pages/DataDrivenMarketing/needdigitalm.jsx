import { motion } from "framer-motion";

const reasons = [
    { id: 1, text: "When you are losing potential customers before they even find you." },
    { id: 2, text: "Lacks of strong SEO services or targeted ads resist your target audience to reach your website." },
    { id: 3, text: "When your reach and engagement are stuck at a standstill." },
    { id: 4, text: "Without proper digital marketing support, there are fewer connections and missed opportunities." },
    { id: 5, text: "When your competitors are outranking you everywhere." },
    { id: 6, text: "They are probably getting support from marketing experts while you are still using outdated methods." },
    { id: 7, text: "When you are getting enough traffic—but no conversions." },
    { id: 8, text: "In the absence of a performance-driven marketing strategy, traffic becomes just numbers, not drive results." },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

const NeedMarketing = () => {
    return (
        <section
            className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "linear-gradient(#FFFFFF, #FCCC6C)",
            }}
        >
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-12 text-gray-800 px-4"
            >
                How Do You Know You Need Digital Marketing?
            </motion.h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={reason.id}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        variants={cardVariants}
                        viewport={{ once: true, amount: 0.3 }}
                        className={`relative min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] bg-white rounded-xl shadow-md hover:shadow-xl 
              transition-transform duration-300 p-4 sm:p-6 text-center
              ${index % 2 === 0 ? "rotate-1" : "-rotate-1"} // ✅ slight angle
            `}
                    >
                        {/* Number */}
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-[#FFC649] text-[#000] font-semibold text-xl sm:text-2xl lg:text-3xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md shadow">
                            {reason.id}.
                        </div>

                        {/* Text */}
                        <p className="mt-6 sm:mt-7 text-[#000] font-Poppins text-left text-sm sm:text-base lg:text-lg leading-relaxed">
                            {reason.text}
                        </p>

                        <div className="absolute h-[8px] sm:h-[12px] -bottom-1 left-1/2 -translate-x-1/2 bg-[#FFC649] text-[#000] font-bold text-lg w-24 sm:w-32 flex items-center justify-center rounded-md shadow">

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default NeedMarketing;
