"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { useState } from "react";
import Link from "next/link";
import WhatMakesUsDifferent from "../../pages/RealValue";
import FAQSection from "../faqs";
import Beancomponent from "../beenComponent";






const slides = [
    {
        date: "Saturday, March 8, 2025",
        title: "Digital Marketing v/s Traditional marketings",
        description:
            "Digital marketing vs traditional marketing- it's a never-ending battle and continues to be discussed in the present time.",
        image: '/assets/frame.png',
        link: "/blog/generative_ai"
    },
    {
        date: "Saturday, March 8, 2025",
        title: "Generative AI: A Revolution in Technology",
        description:
            "Generative AI is transforming how we interact with technology, unleashing creativity and efficiency in unprecedented ways. This technology leverages advanced algorithms and neural networks to produce content, simulate human-like interactions, and solve complex problems with minimal human intervention.",
        image: '/assets/genai.jpg',
        link: "/blog/generative_ai"
    },
    {
        date: "Sunday, March 9, 2025",
        title: "How Artificial Intelligence is Revolutionizing Assignment Writing Services",
        description:
            "Imagine a machine or an automatic device that performs tasks ranging from essay writing to art creation and musical composition as well as homework assistance for students. Sounds like science fiction? Welcome to the era of Generative AI - a technology that makes machines do more than just calculations.",
        image:
            "/assets/assignment.jpg",
        link: "/blog/performance_marketing"

    },
    {
        date: "Monday, March 10, 2025",
        title: "Impacts and Effectiveness of Web and App Development in the Modern Digital World",
        description:
            "Have you ever visited a well-designed website that gives a positive first impression or used an application that makes your life less complicated? That's the result of a quality Web and App development.",
        image:
            "/assets/webdev.jpg",
        link: "/blog/web_developement"
    },
    {
        date: "Tuesday, March 11, 2025",
        title: "Riding the Digital Sky: How Cloud Services Are Reshaping Our World",
        description:
            "Have you ever uploaded a file on Google Drive or registered for a Zoom or any other online meeting without caring about where the data is stored? Behind the scenes is a cloud service. Just like an engine that drives a car in the background, cloud services are constantly working in the background. ",
        image:
            "/assets/cloud.jpg",
        link: "/blog/cloudservices"
    },

];

const ScrollCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            {
                /*<WhatMakesUsDifferent />*/
            }



            <div className="px-6 lg:px-8 mb-8 md:mb-6 ">




                <h2 className="text-xl md:text-[38px] font-semibold">Trending Blogs & News</h2>
                {/* Dynamic Text Content */}
                <div className="flex gap-4">
                    <div className="w-1/2  transition-all duration-500 ease-in-out flex flex-col justify-center ">
                        <p className="text-[#6A6A6A]">{slides[activeIndex].date}</p>
                        <h3 className=" text-xl md:text-4xl font-normal mb-4">{slides[activeIndex].title}</h3>
                        <p className="mb-4 text-[16px]">{slides[activeIndex].description}</p>

                        <Link href={slides[activeIndex].link}>
                            <button className="border border-black p-2 rounded-xl cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">Read More</button>

                        </Link>

                    </div>

                    {/* Swiper for Vertical Scroll Carousel */}
                    <div className="w-1/2 h-[400px] overflow-hidden">
                        <Swiper
                            direction="vertical"
                            slidesPerView={1.5} // Show 3 slides at a time
                            spaceBetween={20}
                            centeredSlides={true}
                            scrollbar={{ draggable: true }}
                            mousewheel={true}
                            modules={[Scrollbar, Mousewheel]}
                            className="h-full"
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            speed={1000}
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index} className="flex items-center justify-center h-[400px] transition-all duration-500">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className={`border border-[#949494] w-[90%] h-full object-cover rounded-xl transition-all duration-700 ease-in-out
                                ${index === activeIndex
                                                ? "scale-100 blur-0 opacity-100" // Active slide
                                                : "scale-90 blur-xs opacity-60" // Previous & next slides
                                            }`}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>


            </div >
        </>
    );
};

export default ScrollCarousel;
