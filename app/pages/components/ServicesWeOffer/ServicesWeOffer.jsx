"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";


const slides = [
  { id: 1, number: 1, link: "/resource-allocation-white-label-services", heading: "Resource Allocation", text: "We provide flexible and scalable resource allocation, ensuring you have the right talent and expertise when you need it. Whether for short-term projects or long-term collaboration, our dedicated professionals seamlessly integrate with your team to drive efficiency and innovation." },
  { id: 2, number: 2, link: "/website-app-development-services", heading: "Custom Software Development (Web, Mobile, SaaS)", text: "We specialize in developing custom web, mobile, and SaaS solutions designed to meet your unique business needs. Our expert-driven approach ensures scalability, seamless functionality, and a future-ready digital experience that drives efficiency and growth." },
  { id: 3, number: 3, link: "/digital-marketing-services-india", heading: "Digital Marketing & SEO", text: "We provide digital marketing and SEO services to boost your online visibility. Our data-driven strategies enhance your search rankings and drive organic traffic. We focus on analytics to refine campaigns, ensuring measurable results that align with your business goals." },
  // { id: 4, number: 4, link: "/erp-crm-development-services-india", heading: "ERP & CRM Development", text: "We create custom ERP and CRM solutions to streamline business operations and enhance customer relationships. Our tools help manage resources efficiently, automate processes, and improve business performance. Tailored to your needs, we ensure seamless integration and growth." },
  // { id: 5, number: 5, link: "/ai-automation-services-india", heading: "AI & Automation", text: "We develop AI-powered platforms tailored to businesses, integrating machine learning, chatbots, and data analytics to create intelligent, automated, and data-driven solutions." },
  // { id: 6, number: 6, link: "/ecommerce-development-services-india", heading: "E-commerce", text: "We create scalable e-commerce solutions with seamless payment integration, ensuring a secure, user-friendly shopping experience that drives sales and business growth." },
  { id: 4, number: 4, link: "/ui-ux-design-services-india", heading: "UI/UX & Branding", text: "We offer expert UI/UX design and branding services to create user-friendly interfaces and visually appealing brands. Our solutions are tailored to improve user experience, boost engagement, and ensure a strong, cohesive brand identity. We focus on delivering intuitive, impactful designs that resonate with your target audience." },
  { id: 5, number: 5, link: "/cloud-computing-services-india", heading: "Cloud Solutions", text: "We provide secure hosting, efficient cloud migration, and robust security services. Our solutions are designed to scale with your business, ensuring optimal performance and reliability in the cloud. Let us help you make a seamless transition to cloud-based infrastructure." },
  { id: 6, number: 6, link: "/mortgage-services", heading: "Mortgage Services", text: "We provide comprehensive mortgage services to help you navigate the home buying process with confidence. Our expert team offers personalized guidance, competitive rates, and streamlined solutions to make your mortgage journey smooth and stress-free." },
];


export default function VerticalScrollSlider() {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentSlideRef = useRef(0);
  const isScrollingRef = useRef(false);
  const touchStartYRef = useRef(0);

  // Keep ref in sync with state
  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  useEffect(() => {
    let scrollTimeout = null;

    const handleWheel = (e) => {
      const section = sectionRef.current;
      if (!section) return;

      const scrollY = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const sectionBottom = sectionTop + sectionHeight - viewportHeight;
      const rect = section.getBoundingClientRect();

      // Check if we're in the section
      const sectionEntered = scrollY >= sectionTop;
      const sectionNotExited = scrollY <= sectionBottom;
      const stickyActive = rect.top <= 0;
      const inSection = sectionEntered && sectionNotExited && stickyActive;

      const current = currentSlideRef.current;

      if (inSection) {
        // If scrolling down and not at last slide, prevent scroll and advance slide
        if (e.deltaY > 0 && current < slides.length - 1) {
          e.preventDefault();
          e.stopPropagation();

          if (isScrollingRef.current) return;
          isScrollingRef.current = true;

          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            isScrollingRef.current = false;
          }, 800);

          setCurrentSlide((prev) => prev + 1);
        }
        // If scrolling up and not at first slide, prevent scroll and go back
        else if (e.deltaY < 0 && current > 0) {
          e.preventDefault();
          e.stopPropagation();

          if (isScrollingRef.current) return;
          isScrollingRef.current = true;

          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            isScrollingRef.current = false;
          }, 800);

          setCurrentSlide((prev) => prev - 1);
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const section = sectionRef.current;
      if (!section) return;

      const scrollY = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const sectionBottom = sectionTop + sectionHeight - viewportHeight;
      const rect = section.getBoundingClientRect();

      const sectionEntered = scrollY >= sectionTop;
      const sectionNotExited = scrollY <= sectionBottom;
      const stickyActive = rect.top <= 0;
      const inSection = sectionEntered && sectionNotExited && stickyActive;

      if (inSection) {
        const current = currentSlideRef.current;
        const touchY = e.touches[0].clientY;
        const deltaY = touchStartYRef.current - touchY;

        // Prevent default scrolling if we're in the middle of slides
        if ((deltaY > 0 && current < slides.length - 1) || (deltaY < -30 && current > 0)) {
          e.preventDefault();
        }
      }
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartYRef.current - touchEndY;

      const section = sectionRef.current;
      if (!section) return;

      const scrollY = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const sectionBottom = sectionTop + sectionHeight - viewportHeight;
      const rect = section.getBoundingClientRect();

      const sectionEntered = scrollY >= sectionTop;
      const sectionNotExited = scrollY <= sectionBottom;
      const stickyActive = rect.top <= 0;
      const inSection = sectionEntered && sectionNotExited && stickyActive;

      const current = currentSlideRef.current;

      if (inSection) {
        const threshold = 50; // Minimum swipe distance for mobile
        if (deltaY > threshold && current < slides.length - 1) {
          if (isScrollingRef.current) return;
          isScrollingRef.current = true;

          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            isScrollingRef.current = false;
          }, 800);

          setCurrentSlide((prev) => prev + 1);
        } else if (deltaY < -threshold && current > 0) {
          if (isScrollingRef.current) return;
          isScrollingRef.current = true;

          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            isScrollingRef.current = false;
          }, 800);

          setCurrentSlide((prev) => prev - 1);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (

    <>
      <div className="w-full lg:px-16 pb-16 bg-white md:mt-[-0.5rem]">
        {/* Background Text */}

        {/* Content Wrapper */}
        <div className="z-10 flex flex-col md:flex-row items-center gap-12 w-[80%] m-auto">


          <div className="w-full">
            {/* Services Title */}
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
              <h2 className="text-[20px] font-semibold text-[#000000] font-rfdExpanded"
              >Services We Offer</h2>
            </div>

            {/* Description */}
            <p className="text-[#000] text-[20px] md:text-[40px] mt-3 leading-relaxed"
              style={{
                // fontSize: '40px',
                fontWeight: '300',
                fontFamily: 'poppins'
              }}
            >
              We deliver cutting-edge technology solutions that help businesses scale, innovate, and stay ahead in a rapidly evolving digital world.
            </p>
          </div>
        </div>
      </div>


      <div
        ref={sectionRef}
        className="relative"
        style={{ height: `${slides.length * 16}vh` }} // or adjust vh value as needed

      >
        <div className="sticky top-0 h-screen w-full bg-white overflow-hidden">
          {slides.map((slide, index) => {
            const leftOffset = `${index * 6}vw`;
            {/* const rightOffset = `${index * 5}vw`; */ }
            const isVisible = index <= currentSlide;
            const bgColor =
              index === 0 ? "#FDEF9E" : index === 1 ? "#fff" : index === 2 ? "#000" : index === 3 ? "#9fecfe" : index === 4 ? "#E4BAFF" : index === 5 ? "#FFF" : index === 6 ? "#FA9090" : index === 8 ? "#C4E4D4" : "#FDEF9E";
            const numberColor =
              index === 0 ? "#B5A36F" : index === 1 ? "#ABABAB" : index === 2 ? "#ababab" : index === 3 ? "#629aa7" : index === 4 ? "#BE88E3" : index === 5 ? "#ABABAB" : index === 6 ? "#D16B6B" : index === 8 ? "#6FA88A" : "#B5A36F"
            const textColor =
              index === 2 ? "#fff" : index === 6 ? "#fff" : "#000"
            const paraWidth =
              index === 0 ? "75%" : index === 1 ? "75%" : index === 2 ? "75%" : index === 7 ? "56%" : "62%"
            return (
              <div
                key={index}
                className="absolute top-0 h-full w-full flex items-center justify-start text-white transition-transform duration-700 px-4 md:px-2"
                onClick={() => setCurrentSlide(index)}
                style={{
                  // backgroundColor: `hsl(${index * 60}, 70%, 50%)`,
                  backgroundColor: bgColor,
                  left: leftOffset,
                  // right: rightOffset,
                  zIndex: index,
                  transform: isVisible ? "translateX(0)" : "translateX(100%)",
                  cursor: 'pointer'
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:gap-10 relative w-full" style={{
                  width: paraWidth
                }}>
                  <div className="text-[20vw] md:text-[30vw] font-medium" style={{ color: numberColor }}>
                    {slide.number}
                  </div>
                  <div className="text-[#000000] items-center flex-1 relative">

                    <h3 className="text-[20px] md:text-[30px] font-bold md:mb-6" style={{ color: textColor }}>{slide.heading}</h3>
                    {/* <p className="text-xl font-light" style={{ color: textColor }}>{slide.text}</p> */}
                    <p className="text-[16px] md:text-xl font-light mb-4 md:mb-6" style={{ color: textColor }}>
                      {slide.text.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                    {/* Navigation Button */}
                    <Link href={slide.link} onClick={(e) => e.stopPropagation()}>
                      <button
                        className="px-4 py-2 md:px-6 md:py-3 border-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105"
                        style={{
                          borderColor: textColor === "#fff" ? "#fff" : "#000",
                          color: textColor === "#fff" ? "#fff" : "#000",
                          backgroundColor: "transparent"
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = textColor === "#fff" ? "#fff" : "#000";
                          e.target.style.color = textColor === "#fff" ? "#000" : "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.color = textColor === "#fff" ? "#fff" : "#000";
                        }}
                      >
                        Learn More
                      </button>
                    </Link>

                    {/* Arrow indicator for more content - aligned with text content */}
                    {index < slides.length - 1 && (
                      <div
                        className="absolute -right-4 md:-right-8 lg:-right-12 xl:-right-16 top-1/2 transform -translate-y-1/2 z-50 animate-pulse flex items-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (currentSlide < slides.length - 1) {
                            setCurrentSlide(currentSlide + 1);
                          }
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <IoIosArrowForward
                          className="w-8 h-8 md:w-10 md:h-12 lg:w-12 lg:h-14 transition-transform duration-300 hover:scale-110"
                          style={{ color: textColor === "#fff" ? "#fff" : "#000" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Link href="/services">

        <button className="flex mx-auto cursor-pointer align-center px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white mb-16 md:mb-20 
       transition-colors duration-500 ease-in-out">
          Explore Services
        </button>
      </Link> */}
    </>
  );
}
