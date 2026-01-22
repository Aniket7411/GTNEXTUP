import React, { useState } from "react";

const data = [
    {
        id: 1,
        title: "Android App",
        desc: "Target the biggest number of users worldwide by developing Android applications that are fast and easy to use. Our mobile app development services maintain compatibility across devices making it an ideal solution for small businesses moving digital.",
        img: "/assets/android.jpg",
    },
    {
        id: 2,
        title: "iOS App",
        desc: "Designed to satisfy Apple customers. As one of the Best App Development Agencies, we develop secure and high-performing iOS applications with excellent UI to deliver premium customer experiences.",
        img: "/assets/apple.jpg",
    },
    {
        id: 3,
        title: "Hybrid / Cross-Platform App",
        desc: "A single app per platform. We provide cost-efficient Android and iOS app development on a shared codebase that is cost-effective, faster to market, and perfect for startups and scale-ups.",
        img: "/assets/cards.jpg",
    },
    {
        id: 4,
        title: "E-commerce App",
        desc: "Deliver the store to the pocket of every customer. Getraise is one of the top web and app development agencies for startups builds shopping apps that are fast, secure, and optimized for mobile sales.",
        img: "/assets/mobiles.jpg",
    },
    {
        id: 5,
        title: "Service Booking App",
        desc: "Whether you have a salon or a medical clinic, enable customers to book and pay within seconds. We create convenient and automatic intuitive apps based on the requirements of your business.",
        img: "/assets/headphone.jpg",
    },
];

const VCarousel = () => {
    const [active, setActive] = useState(0);

    const nextSlide = () => {
        setActive((prev) => (prev + 1) % data.length);
    };

    const prevSlide = () => {
        setActive((prev) => (prev - 1 + data.length) % data.length);
    };

    return (
        <div className="flex flex-col items-center justify-center py-6 relative w-max-7xl px-4 md:px-0">
            {/* Carousel */}
            <div className="flex items-center justify-center relative  max-w-7xl">
                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white absolute -left-4 md:-left-10 lg:-left-14 top-1/2 -translate-y-1/2 z-30"
                >
                    ←
                </button>

                <div className="flex items-end justify-center gap-2 md:gap-6 w-full">
                    {data.map((item, index) => {
                        const isActive = index === active;
                        const distance = Math.abs(index - active);
                        const isNeighbor = distance === 1 || distance === data.length - 1;

                        const getClasses = () => {
                            if (isActive) {
                                return "w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 z-20 opacity-100 scale-110 translate-y-0";
                            }
                            if (isNeighbor) {
                                return "w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 z-10 opacity-80 -translate-y-4 md:-translate-y-6";
                            }
                            return "hidden md:block w-16 h-16 md:w-28 md:h-28 lg:w-36 lg:h-36 z-0 opacity-50 -translate-y-8 md:-translate-y-12";
                        };

                        return (
                            <img
                                key={item.id}
                                src={item.img}
                                alt={item.title}
                                onClick={() => setActive(index)}
                                className={`rounded-full object-cover cursor-pointer transition-all duration-500 ${getClasses()}`}
                            />
                        );
                    })}
                </div>

                {/* Right Button */}
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white absolute -right-4 md:-right-10 lg:-right-14 top-1/2 -translate-y-1/2 z-30"
                >
                    →
                </button>
            </div>

            {/* Active Content (directly under center) */}
            <div className="mt-4 max-w-2xl text-center px-4 md:px-0">
                <h3 className="text-xl md:text-2xl font-bold">{data[active].title}</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">{data[active].desc}</p>
            </div>
        </div>
    );
};

export default VCarousel;