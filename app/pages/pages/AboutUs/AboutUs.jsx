'use client';

import React, { useEffect, useRef, useState } from 'react'
import './aboutus.css'
import rect30 from '../../assets/KV.svg'
import li from '../../assets/li.svg'
import intelli from '../../assets/intelli.svg'
import automation from '../../assets/automation.svg'
import resources from '../../assets/resources.svg'
import solutions from '../../assets/solutions.svg'
// import expBoard from '../../assets/expBoard.svg'
import Line7 from '../../assets/Line 7.svg'
import toprightjoin from '../../assets/topRight.svg'
import bottomleftjoin from '../../assets/bottomLeft.svg'
// CSS imported globally in app/layout.tsx
import { useRouter } from 'next/navigation';
const videoToP = '/assets/website.mp4'
import { IoVolumeMuteOutline } from "react-icons/io5";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

import walkingGirl from '../../assets/walkinglady.png'
import workingBoys from '../../assets/workingboys.png'
import discussingladies from '../../assets/discussingladies.png'
import workinglady from '../../assets/workinglady.png'
import gtThumbnail from '../../assets/gtThumbnail.png'
import AboutusCounter from './aboutuscounter'









const AboutUs = () => {
    const [customerVisits, setCustomerVisits] = useState(0);
    const [satisfactionRate, setSatisfactionRate] = useState(0);
    const [averageRating, setAverageRating] = useState(0);

    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } // Trigger when 50% of the section is visible
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => {
                setCustomerVisits(12000); // Target: 1200K+
                setSatisfactionRate(92); // Target: 92%
                setAverageRating(4.5);   // Target: 4.5
            }, 500); // Delay for smoother animation
        }
    }, [isVisible]);

    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (videoRef.current) {
                    if (entry.isIntersecting) {
                        videoRef.current.play();
                    } else {
                        videoRef.current.pause();
                    }
                }
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };


    return (
        <div className='mb-16 bg-[#fff]'>
            <div className="bg-[#000] min-h-[90vh] text-[#fff]">
                <div className='aboutUsBg bg-no-repeat bg-cover bg-center     '>
                    <div className="flex flex-col-reverse lg:flex-row justify-between mt-[80px] md:mt-10  items-center font-poppins gap-2 lg:gap-8 ">
                        {/* Left Content */}
                        <div className="text-center lg:text-left max-w-2xl">
                            <h1 className="font-extrabold text-[#000] text-3xl sm:text-4xl lg:text-5xl ">
                                Fueled by code, driven by <br className="hidden lg:block" /> passion — we're the tech <br className="hidden lg:block" /> partners who grow with you.
                            </h1>
                            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                                Whether you're a startup or a large business, we can help expand your views.
                                We tailor our services to meet customer expectations with excellent coastal and
                                offshore solutions. Understanding customer needs has driven our growth year after year.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
                                <button
                                    style={{ outline: "1px solid black" }}
                                    className="px-4 py-2 rounded-xl text-[#000] font-medium hover:bg-gray-100 transition"
                                >
                                    Explore Our Solutions
                                </button>
                                <button className="px-4 py-2 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition">
                                    Get In Touch
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            {/* Background Circle */}
                            <div className="bg-black rounded-full  h-56 w-56  sm:h-72 sm:w-72 lg:h-80 lg:w-80 shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                            {/* Foreground Image */}
                            <img
                                src="/assets/longhairgirl.png"
                                alt="longhairgirl"
                                className="relative z-10 w-64 h-64 mb-[130px] sm:w-80 sm:h-80 lg:w-96 lg:h-96   object-cover rounded-full"
                            />
                        </div>

                    </div>





                </div>
            </div>
            <AboutusCounter />

            <div className='bg-[#000]'>
                <div className='bg-[#FFF6C4] rounded-4xl p-4 md:p-12'>
                    <div className='px-10 text-[#000]'>

                        <h2 className=' mx-auto mb-5 font-bold text-xl md:text-3xl'>We make sure your idea & creation <br /> delivered properly</h2>
                        <p className='mb-10 text-lg md:text-xl  mx-auto '>At Getraise Technologies, we blend innovation with expertise to build cutting-edge <br /> digital solutions. From AI-driven platforms to scalable business solutions, we   <br /> empower companies to thrive in an ever-evolving digital landscape.</p>
                    </div>
                    <div className="w-full pb-20 ">
                        {/* Background Text */}

                        {/* Content Wrapper */}
                        <div className="z-10 flex flex-col md:flex-row  gap-12 m-auto min-h-[40vh]">
                            <div className="relative w-full md:w-1/2 flex justify-center">
                                <img
                                    src="/assets/KV.svg"
                                    alt="About Us"
                                    className="rounded-lg w-full max-w-[515px] h-auto object-cover"
                                />

                                {/* Caption Card */}
                                <p
                                    className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 
               bg-white rounded-t-3xl px-6 py-4 text-center text-[#000] shadow-lg max-w-[90%] sm:max-w-[400px]"
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        fontStyle: "italic",
                                    }}
                                >
                                    We don’t just create software—we <br className="hidden  sm:block" /> engineer success.
                                </p>
                            </div>


                            {/* Right - Text Content */}
                            <div className="w-full text-[#000] md:w-1/2">



                                <h2 className='text-[2rem] font-[500]'>Who We Are</h2>
                                <p className="text-emerald-950 mt-3 mb-2 leading-relaxed"

                                >
                                    We are a technology-driven company specializing in custom software <br /> development, AI-powered platforms, resource allocation, and white-label <br /> solutions. Our mission is to help businesses scale, automate, and innovate <br /> through cutting-edge technology, ensuring they stay ahead in a rapidly <br /> evolving market.
                                </p>
                                <div >
                                    <div className='flex items-center mb-2'><span className='me-3'><img src="/assets/li.svg" alt="" /></span>Offer flexible resource allocation for businesses</div>
                                    <div className='flex items-center mb-2'><span className='me-3'><img src="/assets/li.svg" alt="" /></span>Build custom web, mobile, and SaaS solutions</div>
                                    <div className='flex items-center mb-2'><span className='me-3'><img src="/assets/li.svg" alt="" /></span>Develop AI & automation platforms</div>
                                    <div className='flex items-center mb-2'><span className='me-3'><img src="/assets/li.svg" alt="" /></span>Provide scalable e-commerce solutions</div>
                                    <div className='flex items-center mb-2'><span className='me-3'><img src="/assets/li.svg" alt="" /></span>Deliver ready-to-launch white-label solutions</div>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div className='bg-[#000] py-10'>
                <h2 className='text-[#fff] text-2xl md:text-3xl lg:text-5xl text-center mb-8'>We help business to grow <br /> faster and bigger</h2>
                <div className='' style={{
                    padding: '0 3rem'
                }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center growGrid" style={{
                    }}>
                        <div className='flex flex-col items-center justify-center'>
                            <div
                                className="w-32 h-32 rounded-full flex  items-center justify-center helpBusiDiv mb-4"
                                style={{ backgroundColor: "#FDEF9E", border: "1px solid #E7C356" }}
                            >
                                <img src="/assets/intelli.svg" alt="Image 1" />
                            </div>
                            <h3 className='text-center text-[#fff]'>Deliver <span className='font-bold'>
                                scalable and <br /> intelligent solutions
                            </span>
                                for business</h3>

                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <div
                                className="w-32 text-[#fff] h-32 rounded-full flex items-center justify-center helpBusiDiv mb-4"
                                style={{ backgroundColor: "#FDEF9E", border: "1px solid #E7C356" }}
                            >
                                <img src="/assets/automation.svg" alt="Image 2" />
                            </div>
                            <h3 className='text-center text-[#fff]'>Help companies leverage <span className='font-bold'>
                                AI automation and digital transformation
                            </span>
                            </h3>
                        </div>

                        <div className='flex flex-col items-center justify-center'>


                            <div
                                className="w-32 h-32 rounded-full flex items-center justify-center helpBusiDiv mb-4"
                                style={{ backgroundColor: "#FDEF9E", border: "1px solid #E7C356" }}
                            >
                                <img src="/assets/resources.svg" alt="Image 3" />
                            </div>
                            <h3 className='text-center text-[#fff]'>Provide <span className='font-bold'>
                                expert resources <br />
                            </span>through allocation models</h3>
                        </div>

                        <div className='flex flex-col items-center justify-center'>

                            <div
                                className="w-32 h-32 rounded-full flex items-center justify-center helpBusiDiv mb-4"
                                style={{ backgroundColor: "#FDEF9E", border: "1px solid #E7C356" }}
                            >
                                <img src="/assets/solutions.svg" alt="Image 4" />
                            </div>
                            <h3 className='text-center text-[#fff]'>offer <span className='font-bold'>
                                white-label <br /> solutions
                            </span> to accelerate Business growth</h3>
                        </div>

                    </div>

                </div>
            </div>
            <div className='backg  p-4 md:p-12'
                ref={statsRef}
            >
                <h2
                    className=' text-3xl md:text-5xl text-[#000] mt-[20px]  md:font-bold'
                >Experienced experts are giving advice.</h2>


                <div className="flex flex-col md:flex-row justify-between gap-6 mt-[70px]">
                    {/* Left Section */}
                    <div className="md:w-1/2">
                        <p className="mb-5 mt-4 text-[#000] text-lg md:text-xl">
                            Seasoned professionals are sharing their <br /> valuable knowledge and insights. With years of hands-on experience, these experts offer practical guidance to help you make informed decisions. Their advice is tailored, trustworthy, and based on real-world understanding.
                        </p>
                        {/* Uncomment if you want button */}
                        <button className="bg-black px-6 py-3 rounded-2xl text-white mt-4">
                            Learn More
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="relative md:w-1/2">
                        <video
                            ref={videoRef}
                            src={videoToP}
                            poster={gtThumbnail}
                            loop
                            muted
                            autoPlay
                            playsInline

                            className="w-[583px] h-[363px] rounded-3xl shadow-lg"
                        />
                        <button
                            onClick={toggleMute}
                            className="cursor-pointer absolute bottom-3 right-3 bg-black text-white px-4 py-1 rounded-full text-sm"
                        >
                            {isMuted ? <IoVolumeMuteOutline /> : <HiOutlineSpeakerWave />}
                        </button>
                    </div>
                </div>

            </div>

            <div className='px-8 lg:px-12 mt-16 bg-[#fff]' style={{
                // padding: '4rem 3rem 0 3rem',
                height: '70vh'
            }}>
                <div className='relative bg-[#222222] rounded-b-3xl rounded-l-3xl flex flex-col items-center justify-center text-center min-h-[60vh] text-white px-2'>
                    <h2 className='text-5xl font-bold mb-5 z-10'>Join Our Team</h2>
                    <p className='mb-5'>We’re always looking for talented individuals to join our expert network and build cutting-edge solutions.</p>
                    <button onClick={() => { router.push("/career") }} className='border border-white hover:border-[#FDEF9E] hover:bg-[#FDEF9E] hover:text-black py-5 px-8 rounded-3xl z-10' style={{
                        cursor: 'pointer'
                    }}>
                        Explore Careers
                    </button>

                    <div className='absolute top-0 right-0'>
                        <img src="/assets/topright.svg" alt="" />
                    </div>
                    <div className='absolute bottom-0 left-0'>
                        <img src="/assets/bottomLeft.svg" alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutUs
