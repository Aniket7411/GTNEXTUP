import { useState } from "react";
import { Monitor, Code2, Bot } from "lucide-react"; // you can swap with your icons





// import img2 from "../../../src/assets/Rectangle 87.svg";
// import img3 from "../../../src/assets/Rectangle 89.svg";



export default function HoverCards() {
    // const [hoveredIndex, setHoveredIndex] = useState(null);

    const cards = [
        { id: 1, icon: <img src="/assets/banking.svg" width={30} height={30} alt="banking" />, label: "Banking", image: "/assets/Rectangle 85.svg" },
        { id: 2, icon: <img src="/assets/education.svg" width={30} height={30} alt="education" />, label: "Education", image: "/assets/Rectangle 86.png" },
        { id: 3, icon: <img src="/assets/healthcare.svg" width={30} height={30} alt="healthcare" />, label: "Healthcare", image: "/assets/Rectangle 87.png" },
        { id: 4, icon: <img src="/assets/consumerGoods.svg" width={30} height={30} alt="consumerGoods" />, label: "Consumer Goods", image: "/assets/Rectangle 88.png" },
        { id: 5, icon: <img src="/assets/capitalMarkets.svg" width={30} height={30} alt="capitalMarkets" />, label: "Capital Markets", image: "/assets/Rectangle 89.png" },
        { id: 6, icon: <img src="/assets/travelogistics.svg" width={30} height={30} alt="travelLogistics" />, label: "Travel & Logistics", image: "/assets/Rectangle ab.svg" },
        // { id: 6, icon: <Bot size={40} />, label: "AI", image: img6 },
        { id: 7, icon: <img src="/assets/hiTech.svg" width={30} height={30} alt="hiTech" />, label: "Hi Tech", image: "/assets/Rectangle 91.png" },
        { id: 8, icon: <img src="/assets/communications.svg" width={30} height={30} alt="communications" />, label: "Communications", image: "/assets/Rectangle 92.png" },
        // { id: 9, icon: <Bot size={40} />, label: "AI", image: img9 },
        { id: 9, icon: <img src="/assets/publicServices.svg" width={30} height={30} alt="Public Services" />, label: "Public Services", image: "/assets/Rectangle 93.png" },
        { id: 10, icon: <img src="/assets/retailN.svg" width={30} height={30} alt="retail" />, label: "Retail", image: "/assets/Rectangle 94.png" },

    ];

    const defaultIndex = cards.findIndex(card => card.id === 3);
    const [hoveredIndex, setHoveredIndex] = useState(defaultIndex);


    return (
        <>
            <div className="flex items-center space-x-2 mb-8 w-[80%] mx-auto lg:px-16">
                <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                <h2 className="text-[20px] font-medium text-gray-900 RFDewiExtended"
                >Industries We Offer</h2>

            </div>
            <div className="hidden md:block mb-20">

                <div className="flex h-[75vh] overflow-hidden gap-x-2">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`border border-[#B8B8B8] rounded-lg group relative flex flex-col items-center justify-center transition-all duration-700 overflow-hidden cursor-pointer
            ${hoveredIndex === index ? "flex-[3]" : "flex-1"}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Background Image */}
                            <img
                                src={card.image}
                                alt={card.label}
                                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                            <h3
                                className={`text-[20px] absolute bottom-0 left-0 right-0 mx-auto h-full transition-opacity duration-700 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                    }`}
                                style={{
                                    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                                    color: "#fff",
                                    padding: "1rem",
                                }}
                            >
                                {card.label}
                            </h3>

                            {/* Icon & Vertical Label */}
                            <div
                                className={`flex flex-col items-center justify-center gap-4 z-10 transition-opacity duration-500 ${hoveredIndex === index ? "opacity-0" : "opacity-100"
                                    }`}
                            >
                                {card.icon}
                                <p className="text-black text-[14px] absolute bottom-14 font-semibold rotate-270 writing-vertical">
                                    {card.label}
                                </p>
                            </div>

                            {/* Overlay (dark background for text/icon clarity) */}
                            <div className={`absolute inset-0 bg-white transition-opacity duration-700 ${hoveredIndex === index ? "opacity-0" : "opacity-80"}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="block md:hidden mb-16">
                <div className="flex flex-col overflow-hidden gap-5 h-[100vh]">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={` rounded-lg group relative flex items-center transition-all duration-700 overflow-hidden cursor-pointer pt-2
            ${hoveredIndex === index ? "flex-[12]" : "flex-1"}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Background Image */}
                            <img
                                src={card.image}
                                alt={card.label}
                                className={`absolute top-0 left-0 right-0 w-[90%] mx-auto h-full object-contain transition-opacity duration-700 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                            <h3
                                className={`text-[20px] absolute bottom-0 left-0 right-0 w-[90%] mx-auto h-full transition-opacity duration-700 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                    }`}
                                style={{
                                    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                                    color: "#fff",
                                    padding: "1rem",
                                }}
                            >
                                {card.label}
                            </h3>



                            {/* Icon & Vertical Label */}
                            <div
                                className={`flex w-[50%] mx-auto items-center gap-4 z-10 transition-opacity duration-500 ${hoveredIndex === index ? "opacity-0" : "opacity-100"
                                    }`}
                            >
                                {card.icon}
                                <p className="text-black text-[14px]  font-semibold ">
                                    {card.label}
                                </p>
                            </div>

                            {/* Overlay (dark background for text/icon clarity) */}
                            <div className={`absolute inset-0 bg-white transition-opacity duration-700 ${hoveredIndex === index ? "opacity-0" : "opacity-80"}`} />
                        </div>
                    ))}
                </div>
            </div>


            {/* <button className="flex mx-auto cursor-pointer align-center px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition mt-4 mb-10">
                Explore More
            </button> */}
        </>

    );
}
