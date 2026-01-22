import React, { useState, useEffect } from 'react';

const features = [
    {
        title: 'Continuous Testing = Continuous Confidence',
        desc: 'Quality is in our DNA. Our systematic STLC ensures every feature is rigorously tested, reducing bugs, enhancing UX, and boosting client satisfaction.',
        icon: "./brilliance.png"
    },
    {
        title: '24/7 Support',
        desc: 'After we build a web & app, cloud-based platform, or mobile application, our support works non-stop. Post-launch, our 24/7 support ensures seamless upgrades, quick issue resolution, and continuous optimization for effortless scaling.',
        icon: "./skills.png"
    },
    {
        title: 'Advanced Problem-Solving Skills',
        desc: 'Our team thrives on solving unique challenges. As a custom software development company, we’ve tackled unforeseen problems across diverse projects, consistently delivering smart, efficient, and reliable solutions.',
        icon: "./build.png"
    },
    {
        title: 'Deep Experience in Software Development',
        desc: 'Our experienced team works faster, spots errors quickly, and delivers stable, scalable custom software—making businesses across industries choose Getraise as their trusted development partner.',
        icon: "./build.png"
    },
    {
        title: 'Transparent Pricing Structure',
        desc: 'We ensure full cost transparency with no hidden charges. Choose fixed or time-based pricing, and any mid-project changes come with a clear budget update before approval.',
        icon: "./build.png"
    },
    {
        title: 'Knowledge of Information Security',
        desc: 'With rising cyber threats, data security is a necessity. Our experts use advanced encryption, authentication, and secure architectures—making us a trusted partner for enterprise-grade secure solutions worldwide.',
        icon: "./build.png"
    },
];

const CustomFeature = () => {
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
                                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
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

export default CustomFeature;
