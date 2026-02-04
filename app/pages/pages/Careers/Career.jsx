'use client';

import React, { useRef } from "react";

import career from '../../assets/career1.png'
import img1 from '../../assets/Rectangle 4882.png'
import img2 from '../../assets/Rectangle 4883.png'
import img3 from '../../assets/Rectangle 4884.png'
import img4 from '../../assets/Rectangle 4885.png'
import CurrentOpenings from "../../components/CurrentOpenings/CurrentOpenings";
import CareerCard from "./aboutcard";



const Career = () => {


  return (

    <>

      {/* Hero Section */}
      <div
        className="relative mt-[30px] h-[100vh] text-white flex flex-col justify-center items-center w-full"
        style={{
          backgroundImage: "url('/assets/teamcareer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-4">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#D9D9D9]">
            Bold Talent Clear Results
          </h2>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold">
            Become a Part of Our Team <br /> Join Us
          </h1>
        </div>
      </div>

      {/* Moon Section (pulled upward) */}
      <div
        className="relative h-[100vh] bg-no-repeat bg-cover flex flex-col items-center text-center px-6 -mt-[120px] z-20"
        style={{
          backgroundImage: "url('/assets/moon.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pt-[90px] md:pt-[120px] lg:pt-[140px]">

          <div className="text-left">
            <p className="font-semibold  text-xl md:text-2xl lg:text-4xl my-5">
              About Us
            </p>
            <p className="text-lg md:text-lg lg:text-xl text-[#585858] mb-4 font-semibold">
              At Getraise Technologies, we craft cutting-edge digital solutions that fuel business growth.
              From web and app development to performance marketing and custom software, our team blends creativity,
              strategy, and technology to deliver impactful results that matter.
            </p>
            <p className="text-[20px]  font-medium text-[#585858]">
              We're always on the lookout for curious minds and passionate problem-solvers. If you're ready to push
              boundaries, grow fast, and build the future of tech—let’s raise the bar together.
            </p>
          </div>
        </div>
      </div>





      <CareerCard />




      <section className="p-10">

        {/* Text Section */}


        <CurrentOpenings />
      </section>
    </>
  )
}

export default Career
