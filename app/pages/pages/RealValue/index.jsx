import React, { useState, useEffect } from 'react';
import IndustryAccordion from '../../components/industryaccordion';

const cardData = [
    {
        title: 'Business- Centric',
        description:
            'We do not design just for delight — we design for ROI. Whether it is a mobile app UI UX design for engagement or a website UI UX for conversion, our work is rooted in business outcomes: traffic, retention, and revenue.',
        image: '/assets/hand.png',
    },
    {
        title: 'Clear and Affordable Prices',
        description:
            'Getraise is committed to providing affordable website and UI UX design services that are tailored to your project needs. Whether it is a start-up or an SME, our pricing plans are as user-friendly as our designs.',
        image: '/assets/green.png',
    },
    {
        title: 'Mobile-First, Always',
        description:
            'With our mobile app UI UX design expertise, your users will enjoy smooth, responsive experiences across devices. We optimize for the web, iOS, Android, and everything in between.',
        image: '/assets/mob.png',
    },
    {
        title: 'Designed by Cross-Industry Experts',
        description:
            'We have a pool of wonderful UX strategists, UI designers, and product thinkers who have served 20+ industries. It is an innovative web design firm thinking with business expertise.',
        image: '/assets/discussion.png',
    },
    {
        title: 'Speedy and Consistent Delivery',
        description:
            'Tight deadlines? No problem. Our agile methods ensure timely delivery without sacrificing quality. Our process is designed to be transparent, flexible, and fast.',
        image: '/assets/timer.png',
    },
];

const WhatMakesUsDifferent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    // Responsive logic
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCardsToShow(2);
            } else if (window.innerWidth < 1024) {
                setCardsToShow(3);
            } else {
                setCardsToShow(4);
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
            <div className="py-2 px-2  max-w-7xl mx-auto">
                <div className="flex items-center space-x-2 mb-3">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                    <h2 className="text-[1rem] font-semibold ml-2 mb-0 augmenHeading">
                        What Makes Us Different
                    </h2>
                </div>
                <p className="text-3xl font-semibold mt-2">Real Value, Real Impact</p>
                <p className="mt-2 text-[#000]  max-w-6xl">
                    At Getraise Tech, we do not believe in one-size-fits-all. We are a UI UX design <br /> company based in India, our company is designed to be dynamic, cost- <br /> effective, and thinking into the future.                </p>

                <div className="relative mt-3">
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
                                    className="px-4  box-border"
                                >
                                    <div className="bg-white shadow-md rounded-lg  h-full">
                                        <div className="mb-2">
                                            <img src={card.image} alt="icon" className=" w-full  object-contain" />
                                        </div>
                                        <div className='p-2'>

                                            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                                            <p className="text-gray-600 text-sm">{card.description}</p>
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


            {/* <IndustryAccordion /> */}



        </>
    );
};

export default WhatMakesUsDifferent;
