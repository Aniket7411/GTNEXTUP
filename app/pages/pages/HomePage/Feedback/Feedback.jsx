import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


import priya from '../../../assets/priya.jpg'
import carlos from '../../../assets/carlos.jpg'
import julia from '../../../assets/julia.jpg'
import ahmed from '../../../assets/ahmed.jpg'
import samantha from '../../../assets/samantha.jpg'


import './carousel.css'



const testimonials = [

  {
    name: "Mythri N.",
    position: "Quality Analyst",
    image: "/assets/ayesha.jpg",
    quote: "The team did a phenomenal job developing our matrimonial mobile app. Their attention to detail, smooth UX, and prompt support made the experience truly satisfying. Highly recommend their services!"
  },
  {
    name: "Kartik Sharma",
    position: "Influencer, Radio Jockey",
    image: "/assets/rj_Kartik.jpg",
    quote: "They built my personal website perfectly aligned with my influencer and radio career. It’s engaging, fast, and has helped grow my digital presence. Professional, creative, and reliable team!",
  },
  {
    name: "Vidisha Shrivastava",
    position: "Software Testing Engineer",
    image: "/assets/priya.jpg",
    quote: "Their testing services were top-notch. They provided accurate QA reports and thorough bug tracking, helping us achieve a stable application. Great experience working with such a detail-oriented team!",
  },
  {
    name: "Rahul Singh",
    position: "Business Consultant",
    image: "/assets/carlos.jpg",
    quote: "From concept to launch, they built my business website with absolute professionalism. The design is clean and impactful. Their timely delivery and tech skills impressed me throughout the process.",
  },
  {
    name: "Shree Nandini",
    position: "Digital Marketing Manager, *GrowNest Startups*",
    image: "/assets/julia.jpg",
    quote: "Their digital marketing strategies significantly boosted our online visibility. Social media engagement and conversions improved remarkably. Truly dedicated and result-driven experts—happy to have partnered with them!",
  },

  {
    name: "Juliet Soku",
    position: "Business Development Manager",
    image: "/assets/samantha.jpg",
    quote: "They helped scale my company’s outreach and client base through business strategies and tech support. Their proactive approach and dedication made a real difference in our growth journey.",
  }
];

const TestimonialCarousel = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="clientsuccessBg pt-16 md:pt-24 bg-[#fff] pb-32 overflow-hidden"
      style={{
        borderRadius: '1rem 1rem 0 0 '
      }}
    >
      <h2 className="text-center text-4xl font-normal text-[#000] my-8">What Our Clients Say About Us</h2>

      <Swiper
        // slidesPerView={1.5}
        // spaceBetween={30}
        // centeredSlides={true}
        // loop={true}
        // onSwiper={(swiper) => (swiperRef.current = swiper)}
        // modules={[Navigation]}
        // className="mySwiper"
        slidesPerView={1.5}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Navigation]}
        className="mySwiper"
        speed={1000}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex text-[#000] justify-center">
            <div className={`flex flex-col justify-center transition-all duration-500 ease-in-out bg-white rounded-3xl w-[100%] m-auto p-3 md:p-6 relative min-h-[45vh] lg:min-h-[50vh] xl:min-h-[40vh] border border-[#C2B66C] ${index === activeIndex ? 'scale-100 z-10' : 'scale-95 opacity-80'
              }`}>
              {/* Profile Image */}
              <div className="flex items-center space-x-4 ">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full me-5 opacity-[0.2]"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="hidden lg:block mt-4 text-2xl italic text-gray-700 ">
                <span className="text-3xl font-semibold">“ </span>{testimonial.quote}
                <span className="text-3xl font-semibold"> ”</span>
              </p>

              <p className="block lg:hidden mt-2 text-md md:text-2xl italic text-gray-700">
                "{testimonial.quote}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute bottom-[3rem] left-1/2 transform -translate-x-1/2 flex gap-x-6">
        <button
          className="cursor-pointer bg-white w-14 h-14 rounded-full shadow-md flex items-center justify-center text-lg font-bold transition-colors duration-300 ease-in-out hover:bg-amber-50"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img src="/assets/left.svg" className="" alt="" />
        </button>
        <button
          className="cursor-pointer bg-white w-14 h-14 rounded-full shadow-md flex items-center justify-center text-lg font-bold transition-colors duration-300 ease-in-out hover:bg-amber-50"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img src="/assets/right.svg" className="" alt="" />

        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
