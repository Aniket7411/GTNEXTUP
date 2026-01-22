import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { img } from "framer-motion/client";
import comma from '../../assets/commaOne.svg'
import commaTwo from '../../assets/commaTwo.svg'
import commaThree from '../../assets/commaThree.svg'
import commaFour from '../../assets/commaFour.svg'
import realClientImg from '../../assets/realClientImg.svg'





const initialTestimonials = [
    {
        name: "Anika T.",
        role: "Startup Founder",
        text: "They helped me triple my leads in 30 days — highly recommend!",
        highlight: false,
        image: realClientImg,
    },
    {
        name: "Anika T.",
        role: "Startup Founder",
        text: "They helped me triple my leads in 30 days — highly recommend!",
        highlight: true,
        image: realClientImg,
    },
    {
        name: "Anika T.",
        role: "Startup Founder",
        text: "They helped me triple my leads in 30 days — highly recommend!",
        highlight: false,
        image: realClientImg,
    },
    {
        name: "Anika T.",
        role: "Startup Founder",
        text: "They helped me triple my leads in 30 days — highly recommend!",
        highlight: false,
        image: realClientImg,
    },
    {
        name: "Anika T.",
        role: "Startup Founder",
        text: "They helped me triple my leads in 30 days — highly recommend!",
        highlight: false,
        image: realClientImg,
    }, {
        name: "Anika T.",
        role: "Startup Founder",
        text: "They helped me triple my leads in 30 days — highly recommend!",
        highlight: false,
        image: realClientImg,
    }, {
        name: "Anika T.",
        role: "Startup Founder",
        text: "They helped me triple my leads in 30 days — highly recommend!",
        highlight: false,
        image: realClientImg,
    }, {
        name: "Anika T.",
        role: "Startup Founder",
        text: "They helped me triple my leads in 30 days — highly recommend!",
        highlight: false,
        image: realClientImg,
    }, {
        name: "Anika T.",
        role: "Startup Founder",
        text: "They helped me triple my leads in 30 days — highly recommend!",
        highlight: false,
        image: realClientImg,
    },
];

const RealClientsCarousel = () => {

    const [highlightedIndex, setHighlightedIndex] = useState(0);

    const calculateCenterIndex = (swiper) => {
        const visibleSlides = swiper.params.slidesPerView;
        const centerIndex = swiper.activeIndex + Math.floor(visibleSlides / 2);
        return centerIndex;
    };

    const handleSlideChange = (swiper) => {
        setHighlightedIndex(calculateCenterIndex(swiper));
    };

    const handleSwiperInit = (swiper) => {
        setHighlightedIndex(calculateCenterIndex(swiper));
    };
    return (
        <>
            <div className=" my-20">

                    <div  className='px-10'>

                        <span style={{
                            fontSize: '2.7rem',
                            fontWeight: '600',
                            borderBottom: '20px solid #FEEE99'
                        }}>Real Client . Real Results</span>

                    </div>
                <div className="relative w-full py-10 bg-gray-100">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        onSlideChange={handleSlideChange}
                        onSwiper={handleSwiperInit}
                        spaceBetween={20}
                        slidesPerView={1.3}
                        breakpoints={{
                            640: {
                                slidesPerView: 2.2,
                            },
                            1024: {
                                slidesPerView: 5,
                            },
                        }}
                        className="px-10"
                    >
                        {initialTestimonials.map((item, idx) => {
                            const highlight = idx === highlightedIndex;

                            return (
                                <SwiperSlide key={idx}>
                                    <div
                                        className={`rounded-xl p-5 shadow-md h-full min-h-[300px] ${highlight ? "bg-yellow-200" : "bg-white"
                                            }`}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 rounded-full object-cover mb-3"
                                        />
                                        <h4 className="font-semibold text-black">{item.name}</h4>
                                        <p className="text-sm italic text-gray-700 mb-2">{item.role}</p>

                                        <div className="text-2xl mt-2">
                                            {highlight ? (
                                                <img src={comma} alt="comma" />
                                            ) : (
                                                <img src={commaThree} alt="comma" />
                                            )}
                                        </div>

                                        <p className="text-sm text-gray-800">{item.text}</p>

                                        <div className="text-2xl mt-2">
                                            {highlight ? (
                                                <img src={commaTwo} alt="comma" />
                                            ) : (
                                                <img src={commaFour} alt="comma" />
                                            )}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}

                        {/* Nav Buttons */}
                        <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-[#DADADA] shadow rounded-full p-7 z-10">
                            <FaChevronLeft style={{ height: "20px", width: "20px" }} />
                        </button>
                        <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-[#DADADA] shadow rounded-full p-7 z-10">
                            <FaChevronRight />
                        </button>
                    </Swiper>
                </div>

            </div>
        </>
    );
};

export default RealClientsCarousel;
