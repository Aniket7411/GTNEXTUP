import React, { useState, useEffect } from 'react';

const cardData = [
    {
        title: 'Resource Allocation and configuration',
        description:
            'We expertly configure virtual machines, storage, networking, and cloud environments to fit your custom software solution, whether for a product, website, or mobile app.',
        image: '/assets/resources.png',
    },
    {
        title: 'Real-time performance monitoring',
        description:
            'We monitor crucial statistics such as CPU Memory, network latency, and app performance, and track bottlenecks, to swiftly identify and resolve them ensuring your cloud services are responsive and reliable.',
        image: '/assets/realtime.png',
    },
    {
        title: 'Cost Effective Without Compromise',
        description:
            'Our ongoing cloud spending audit and usage analysis allow us to detect cost leaks and rightsize your infrastructure. Our affordable cloud services in India make sure that you really pay what you require.',
        image: '/assets/costeffective.png',
    },
    {
        title: 'Built-In Security & Compliance  ',
        description:
            'We combine powerful cloud computing features and capability with a security-first philosophy - IAM controls, encryption, firewall, and compliance (such as GDPR, or HIPAA) built-in the infrastructure.',
        image: '/assets/buildh.png',
    },

];

const CloudCarausel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    // Responsive logic
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCardsToShow(1);
            } else if (window.innerWidth < 1024) {
                setCardsToShow(2);
            } else {
                setCardsToShow(3);
            }
        };

        handleResize(); // Run once on load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const next = () => {
        if (currentIndex < cardData.length - cardsToShow) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <>
            <div className="py-2 px-2 max-w-7xl mx-auto">
                <div className="flex items-center space-x-2 mb-4">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                    <h2 className="text-3xl font-bold mt-2">Smarter Cloud Infrastructure Management —</h2>
                </div>
                <p className="mt-2 text-xl md:text-3xl font-bold text-yellow-500 max-w-3xl">
                    Scalable, Secure, and Streamlined
                </p>

                <div className="relative mt-4">
                    {/* Cards Container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-all duration-500"
                            style={{
                                width: `${(cardData.length * 100) / cardsToShow}%`,
                                transform: `translateX(-${(currentIndex * 100) / cardData.length}%)`,
                            }}
                        >
                            {cardData.map((card, index) => (
                                <div
                                    key={index}
                                    style={{ width: `${100 / cardData.length}%` }}
                                    className="px-4 box-border"
                                >
                                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                                        {/* Background image */}
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />

                                        {/* White gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent"></div>

                                        {/* Text content (bottom aligned on gradient) */}
                                        <div className="absolute bottom-0 p-6">
                                            <h3 className="text-lg mt-5 font-semibold text-gray-900">
                                                {card.title}
                                            </h3>
                                            <p className="text-gray-700 text-sm leading-relaxed mt-1">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black w-10 h-10 rounded-full flex items-center justify-center z-10"
                        disabled={currentIndex === 0}
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black w-10 h-10 rounded-full flex items-center justify-center z-10"
                        disabled={currentIndex >= cardData.length - cardsToShow}
                    >
                        ›
                    </button>
                </div>
            </div>

        </>
    );
};

export default CloudCarausel;
