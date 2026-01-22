


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Navigation } from "swiper/modules";
// import "swiper/css/navigation";
// import webApp1 from '../../assets/webApp1.svg'
// import webApp2 from '../../assets/webApp2.svg'
// import webApp3 from '../../assets/webApp3.svg'
// import webApp4 from '../../assets/webApp4.svg'
// import webApp5 from '../../assets/webApp5.svg'
// import webApp6 from '../../assets/webApp6.svg'

// import seamlessInteg from '../../assets/seamlessInteg.svg'
// import talentMatching from '../../assets/talentMatching.svg'
// import continSupport from '../../assets/continuousSupport.svg'



// const cardData = [
//   {
//     title: "Web & App Development",
//     image: webApp1,
//     description:
//       "We create high-performing, responsive websites and mobile applications tailored to your business needs. From sleek corporate websites to complex mobile-first platforms, we blend code and creativity to deliver user-centric digital products that scale.",
//     linkText: "Build Your Website With Us",
//   },
//   {
//     title: "UI/UX Design",
//     image: webApp2,
//     description:
//       "We craft beautiful, intuitive interfaces that deliver real business results. Whether you're creating a new product or revamping an existing one, our design process focuses on usability, clarity, and conversion.",
//     linkText: "Let's Design Your Experience",
//   },
//   {
//     title: "Cloud Services",
//     image: webApp3,
//     description:
//       "We help businesses embrace the cloud to improve performance, reduce costs, and scale without limits. Our cloud services cover everything from migration and DevOps to building secure, scalable cloud-native apps.",
//     linkText: "Scale Smarter with Cloud—Let’s Connect",
//   }, {
//     title: "Salesforce Development",
//     image: webApp4,
//     description:
//       "Our certified Salesforce experts help businesses implement and customize Salesforce CRM to boost productivity, streamline workflows, and gain a 360° view of their customer journey. We build solutions that sell smarter.",
//     linkText: "Contact Us for Salesforce Services",
//   }, {
//     title: "Custom Software Development",
//     image: webApp5,
//     description:
//       "We design and develop tailor-made software for businesses with unique requirements. From internal portals to client-facing systems, our solutions improve workflows, integrate seamlessly, and scale with your growth.",
//     linkText: "Bring Your Software Idea to Life With Us",
//   }, {
//     title: "Performance Marketing",
//     image: webApp6,
//     description:
//       "We deliver measurable marketing strategies that drive traffic, leads, and sales. From Google Ads to advanced funnel optimization, we bring together creativity and data to help you grow smarter.",
//     linkText: "Let’s Boost Your Growth Together",
//   },
//  ];

// export default function CardCarousel() {
//   return (
//     <div className="md:py-10">
//       <Swiper
//         // slidesPerView={1.2}
//         centeredSlides={true}
//         loop={true}
//         navigation={true}
//         modules={[Navigation]}
//         breakpoints={{
//           640: { slidesPerView: 1.3, spaceBetween: -100 },
//           768: { slidesPerView: 1.8, spaceBetween: -140 },
//           1024: { slidesPerView: 2.5, spaceBetween: -180 },
//         }}
//       >
//         {cardData.map((card, index) => (
//           <SwiperSlide key={index} className="transition-transform duration-500 ease-in-out">
//             <div className="bg-[#F4F4F4] rounded-xl shadow-md h-full flex flex-col gap-4 transform scale-90 swiper-slide-active:scale-100 transition-all duration-500 ease-in-out">
//               <div className="flex flex-col items-center">
//                 <div className="w-full py-3" style={{ backgroundColor: '#E6E6E6' }}>
//                   <h3 className="text-xl font-semibold ps-4">{card.title}</h3>
//                 </div>
//                 <img
//                   src={card.image}
//                   alt={card.title}
//                   className="w-full object-cover h-[240px]"
//                 />
//               </div>
//               <p className="text-[#323232] text-md px-6 min-h-[100px] md:h-[120px]">{card.description}</p>
//               <a href="#" className="text-black font-normal mt-auto px-6 mb-4">
//                 {card.linkText}
//               </a>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//     </div>
//   );
// }



"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import './carousel.css'



const testimonials = [
  {
    name: "Web & App Development",
    position: "CEO of IBM",
    image: "/assets/webApp1.svg",
    quote:
      "We create high-performing, responsive websites and mobile applications tailored to your business needs. From sleek corporate websites to complex mobile-first platforms, we blend code and creativity to deliver user-centric digital products that scale.",
    linkText: "Build Your Website With Us",
  },
  {
    name: "UI/UX Design",
    position: "CTO of ABC Corp",
    image: "/assets/webApp2.svg",
    quote:
      "We craft beautiful, intuitive interfaces that deliver real business results. Whether you're creating a new product or revamping an existing one, our design process focuses on usability, clarity, and conversion.",
    linkText: "Let's Design Your Experience",
  },
  {
    name: "Cloud Services",
    position: "Founder of XYZ Ltd",
    image: "/assets/webApp3.svg",
    quote:
      "We help businesses embrace the cloud to improve performance, reduce costs, and scale without limits. Our cloud services cover everything from migration and DevOps to building secure, scalable cloud-native apps.",
    linkText: "Scale Smarter with Cloud—Let’s Connect",
  },
  {
    name: "Salesforce Development",
    position: "CTO of ABC Corp",
    image: "/assets/webApp4.svg",
    quote:
      "Our certified Salesforce experts help businesses implement and customize Salesforce CRM to boost productivity, streamline workflows, and gain a 360° view of their customer journey. We build solutions that sell smarter.",
    linkText: "Contact Us for Salesforce Services",


  },
  {
    name: "Custom Software Development",
    position: "Founder of XYZ Ltd",
    image: "/assets/webApp5.svg",
    quote:
      "We design and develop tailor-made software for businesses with unique requirements. From internal portals to client-facing systems, our solutions improve workflows, integrate seamlessly, and scale with your growth.",
    linkText: "Bring Your Software Idea to Life With Us",


  },
  {
    name: "Performance Marketing",
    position: "CTO of ABC Corp",
    image: "/assets/webApp6.svg",
    quote:
      "We deliver measurable marketing strategies that drive traffic, leads, and sales. From Google Ads to advanced funnel optimization, we bring together creativity and data to help you grow smarter.",
    linkText: "Let’s Boost Your Growth Together",
  },
];

const CardCarousel = () => {
  const pathname = usePathname();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    // Note: Next.js doesn't support location.state like React Router
    // If you need to pass data, use URL searchParams or remove this feature
    // For now, this effect is disabled but kept for future implementation
    // const focusSlideName = new URLSearchParams(window.location.search).get('focusSlide');
    // if (focusSlideName) {
    //   const index = testimonials.findIndex(t => t.name === focusSlideName);
    //   if (index !== -1 && swiperRef.current) {
    //     swiperRef.current.slideToLoop(index);
    //     setActiveIndex(index);
    //     setTimeout(() => {
    //       containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    //     }, 300);
    //   }
    // }
  }, [pathname]);

  return (
    <>

      <div ref={containerRef} className="mt-10 pt-10 md:pb-6 overflow-hidden bg-white px-4 md:px-6"
        style={{
          borderRadius: '1rem 1rem 0 0'
        }}
      >
        {/* <h2 className="text-center text-4xl font- my-10">What Our Clients Say About Us</h2> */}
        <section className="pt-8 pb-6 text-black">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></span>
            <h3 className="text-lg font-semibold text-gray-900 ml-2">Industries We Serve</h3>
          </div>
        </section>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: false,
            },
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 1.7,
              spaceBetween: 30,
              centeredSlides: true,
            },
          }}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          className="mySwiper"
          speed={1000}
          navigation={true}

        >


          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className={`transition-all duration-500 ease-in-out bg-white w-full max-w-[90%] mx-auto relative overflow-hidden shadow-lg hover:shadow-xl ${index === activeIndex ? 'scale-100 z-10 shadow-2xl' : 'scale-95 opacity-80'
                  }`}
                style={{
                  borderRadius: '20px',
                }}
              >
                {/* Profile Image */}
                <div className="w-full">
                  <div className="bg-gradient-to-r from-[#E6E6E6] to-[#F0F0F0] w-full px-6 h-[8vh] flex items-center rounded-t-[20px]"
                    style={{
                      borderBottom: '1px solid #E0E0E0'
                    }}
                  >
                    <h4 className="text-[20px] xl:text-[26px] font-bold text-gray-900">{testimonial.name}</h4>
                  </div>
                  <div className="bg-gradient-to-b from-gray-50 to-white">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-[48vh] object-contain"
                      style={{
                        display: 'block',
                        padding: '20px'
                      }}
                    />
                  </div>
                </div>
                <div className="w-full p-6 bg-gradient-to-b from-[#F4F4F4] to-[#FAFAFA] rounded-b-[20px]">

                  <p className="text-[16px] mb-6 text-gray-800 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <p className="text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    {testimonial.linkText}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>



    </>

  );
};

export default CardCarousel;

