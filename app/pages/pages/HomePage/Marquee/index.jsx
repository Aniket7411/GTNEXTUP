import { motion } from "framer-motion";

const Marquee = ({images}) => {
  

  return (
    <div className="overflow-hidden w-full mb-16 md:mb-20">
        {/* // border-t border-gray-400  */}
      <motion.div
        className="flex min-w-max gap-x-4 
        " // 4px gap (gap-1)
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {/* Duplicate content to ensure seamless looping */}
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Marquee Item ${i + 1}`}
            className="w-96 h-72 rounded-4xl object-cover flex-shrink-0"
            loading="lazy"
            decoding="async"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
