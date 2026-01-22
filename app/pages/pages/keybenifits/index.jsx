import React, { useState, useEffect } from 'react';

const features = [
    {
        title: 'Brilliance without Compromise at a Friendly Budget',
        desc: 'Getraise is an affordable yet high-quality site and app development firm. We will offer you cost-effective solutions with clear pricing, no hidden cost just value that you receive.',
        icon: "./brilliance.png"
    },
    {
        title: 'Skilled Team with Future Forethought',
        desc: 'We are a leading web and app development agency that design custom solutions that are fast, clean, and easy to use on all devices.',
        icon: "./skills.png"
    },
    {
        title: 'Built on Research, Not Assumptions',
        desc: 'We are no longer aesthetic. Being one of the leading web and application development firms, we create products that are fast to load, sharp to look, and exciting to use across all devices.',
        icon: "./build.png"
    },
    {
        title: 'Secure by Design',
        desc: 'Our cloud environments are fortified with advanced security protocols, safeguarding your data against evolving cyber threats. From encryption and access control to continuous monitoring, we ensure resilience, compliance, and peace of mind.',
        icon: "./secure.png"
    },
    {
        title: '24/7 Support & Monitoring',
        desc: 'Always-on coverage and optimization.',
        icon: "./support.png"
    },
];

const WhyChooseGrTwo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4);

    // Responsive behavior
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCardsToShow(1);
            } else if (window.innerWidth < 1024) {
                setCardsToShow(2);
            } else if (window.innerWidth < 1280) {
                setCardsToShow(3);
            } else {
                setCardsToShow(4);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const next = () => {
        if (currentIndex < features.length - cardsToShow) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="text-start max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 px-4">Why Choose Us</h2>
            <img src="./teamimage.png" alt="teamimage" className="mx-auto" />

            <div className="relative -mt-16">
                {/* Cards container */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-all duration-500"
                        style={{
                            width: `${(features.length * 100) / cardsToShow}%`,
                            transform: `translateX(-${(currentIndex * 100) / features.length}%)`,
                        }}
                    >
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                style={{ width: `${100 / features.length}%` }}
                                className="px-4 box-border"
                            >
                                <div
                                    className="bg-white rounded-2xl p-6 min-h-[220px] flex flex-col items-start justify-start text-left shadow-md transition-all"
                                    style={{ border: '1.5px solid #CECECE' }}
                                >
                                    <div className="bg-yellow-200 p-3 rounded-full mb-4">
                                        {feature.icon && <img src={feature.icon} alt="" />}
                                    </div>
                                    <h3 className="text-md font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prev}
                    className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                    disabled={currentIndex === 0}
                >
                    ‹
                </button>
                <button
                    onClick={next}
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                    disabled={currentIndex >= features.length - cardsToShow}
                >
                    ›
                </button>
            </div>
        </div>
    );
};

export default WhyChooseGrTwo;
