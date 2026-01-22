import React, { useState, useEffect } from 'react';

const cardData = [
    {
        title: 'Business',
        description:
            'You have created an outstanding service. Now open it to the world. Our website development service is perfect for consultants, agencies, and local providers who need to build trustful and conversational business websites that are modern and high-performing.',
        image: '/assets/business.jpg',
    },
    {
        title: 'Ecommerce website -sell without limits',
        description:
            'Ideal for retailers, D2C brands, and wholesalers who desire to sell products online. We are an e-commerce website development company creating secure, smooth, and efficient online stores that turn visitors into customers, and manage every action, purchase cart, and checkout.',
        image: '/assets/eccommerce.png',
    },
    {
        title: 'Landing Page / Sales Page – Built to Convert, Fast',
        description:
            'Perfect for marketers, product launches, or advertisement campaigns where a high-conversion page is required. Get a custom page created by the best website development agency in India to achieve more leads and sales instantly.',
        image: '/assets/portfolio.png',
    },
    {
        title: 'Portfolio Website – Make Your First Impression Legendary',
        description:
            'Are you a designer, a photographer, a freelancer, or a creative agency? We design visually rich portfolios that display louder than any resume. Become a partner with the top website developer and convert your talent into traffic.',
        image: '/assets/discussion.png',
    },
    {
        title: 'Booking / Appointment Website',
        description:
            'Designed to help professionals such as doctors, salon owners, trainers, or coaches. We integrate custom booking engines that work in real-time, calendar syncs, and auto confirmations to reduce manual tasks and missed appointments',
        image: '/assets/timer.png',
    },

    {
        title: 'Web Portal',
        description:
            'Ideal for a business, sellers, or internal departments that have complicated processes. Whether it be CRMs or vendor dashboards we are one of the top web and mobile app development Agencies in India who know how to provide secure custom portals.',
        image: '/assets/webportal.jpg',
    }, {
        title: 'SaaS Product Website',
        description:
            'This is ideal for software-based tech startups. As a web and app development agency for startups, we design SaaS websites, pricing pages, dashboards, and login pages at scale.',
        image: '/assets/saas.webp',
    },
];

const Webdevcarausel = () => {
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
            <div className="py-2 px-2 max-w-7xl ">

                <h2 className='text-3xl text-[#000] mt-18  mb-5 font-semibold'>Your Perfect Web Development which Fit Your <br /> Business Goals</h2>

                <div className="relative mt-4">
                    {/* Cards Container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-2 transition-all duration-500"
                            style={{
                                width: `${(cardData.length * 100) / cardsToShow}%`,
                                transform: `translateX(-${(currentIndex * 100) / cardData.length}%)`,
                            }}
                        >
                            {cardData.map((card, index) => (
                                <div
                                    key={index}
                                    style={{ width: `${100 / cardData.length}%` }}
                                    className=" box-border"
                                >
                                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                                        {/* Background image */}
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />

                                        {/* White gradient overlay (only bottom half) */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white via-white/90 to-transparent"></div>

                                        {/* Text content (bottom aligned on gradient) */}
                                        <div className="absolute bottom-0 p-6">
                                            <h3 className="text-lg mt-5 font-semibold text-gray-900">
                                                {card.title}
                                            </h3>
                                            <p className="text-[#000] text-sm leading-relaxed mt-1">
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

export default Webdevcarausel;
