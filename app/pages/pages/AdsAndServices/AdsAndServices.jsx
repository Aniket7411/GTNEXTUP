"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './addServices.css'
import { emailjsConfig } from "../../utils/emailjsConfig";
import StaffAugmentation from '../../components/StaffArgumentation/StaffAugmentation'
import WhyRac from '../../components/whyRAC/WhyRac'
import OurProcess from '../../components/OurProcess/OurProcess'
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import webDev from '../../../src/assets/webDev.svg';
import appDev from '../../../src/assets/appDev.svg';
import digMar from '../../../src/assets/digMar.svg';
import yvom from '../../../src/assets/yvom.svg';
import OurServices from "../../components/Ourservices/OurServices";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import DreamWebsite from "../../components/DreamWebsite.jsx/DreamWebsite";
import BusinessNextFuture from "../../components/BusinessNextFuture/BusinessNextFuture";
import StrategySession from "../../components/StrategySession/StrategySession";
import DontMissOut from "../../components/DontMissOut/DontMissOut";
import RealClientsCarousel from "../../components/RealClientsCarousel/RealClientsCarousel";



const AdsAndServices = () => {

    const form = useRef();

    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        business: "",
        idea: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                emailjsConfig.serviceId,
                emailjsConfig.templateId,
                form.current,
                emailjsConfig.publicKey
            )
            .then(
                (result) => {
                    console.log("Message sent:", result.text);
                    alert("Form submitted successfully!");
                    setFormData({ name: "", contact: "", business: "", idea: "" }); // Reset form
                },
                (error) => {
                    console.error("EmailJS error:", error.text);
                    alert("There was an error sending your message.");
                }
            );
    };

    return (
        <div className="header-spacing">
            <div className='mb-16 overflow-hidden'>
                <div className='relative addSerBg w-full md:h-[100vh] bg-no-repeat bg-cover bg-center'>
                    <div class=" flex flex-col md:flex-row items-center justify-center text-white px-10 gap-10 m-auto mt-10"
                    // style={{
                    //     marginTop: '120px',
                    //     // marginBottom: '100px'
                    // }}
                    >
                        <div class="w-full md:w-[64%] flex items-start justify-center flex-col" >
                            <h1 className='text-white text-3xl md:text-4xl lg:text-6xl mb-3 md:mb-4' style={{
                                fontWeight: '600',
                            }}>Your One-Stop Partner for Digital Marketing, Website & App Development</h1>
                            <p className='mb-4 md:mb-12' style={{
                                fontSize: '20px',
                                fontWeight: '400',
                            }}>Get custom strategies, stunning websites, and powerful <br /> apps — all tailored to boost your growth.</p>
                            <ButtonPrimary name={"Contact Us"} />
                        </div>

                        <div class="w-full md:w-[36%] flex items-center justify-center">
                            <div style={{
                                backgroundColor: '#F9F3CF33',
                                opacity: ''
                            }} className='p-6 z-0 rounded-2xl'>
                                <p className='text-center z-10 mb-4'> Let’s Build Your Success</p>
                                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mb-2 w-full px-4 py-1 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none h-[6vh]"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="contact"
                                        placeholder="Email/Phone Number"
                                        value={formData.contact}
                                        onChange={handleChange}
                                        className="mb-2 w-full px-4 py-1 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none h-[6vh]"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="business"
                                        placeholder="Business"
                                        value={formData.business}
                                        onChange={handleChange}
                                        className="mb-2 w-full px-4 py-1 h-[6vh] rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none"
                                    />
                                    <textarea
                                        name="idea"
                                        placeholder="Share Your Project Idea"
                                        rows="4"
                                        value={formData.idea}
                                        onChange={handleChange}
                                        className="mb-2 w-full px-4 py-1 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none resize-none"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="cursor-pointer w-full bg-[#FDEF9E] text-black font-medium py-3 rounded-lg hover:bg-[#E4D372] transition"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="md:absolute rounded-xl text-black m-auto mb-4 md:w-[75%] left-0 right-0 -bottom-28 bg-[#FDEF9E] p-5">
                            <h3 className="text-center text-2xl mb-3 font-medium">Vast IT Solutions We Offer</h3>
                            <div className="flex flex-wrap justify-around">
                                <div className="flex flex-col items-center font-medium">
                                    <img src={webDev} alt="" className="mb-2" />
                                    <p className="text-center">Web Development</p>
                                </div>
                                <div className="flex flex-col items-center font-medium">
                                    <img src={appDev} alt="" className="mb-2" />
                                    <p className="text-center">App Development</p>
                                </div>
                                <div className="flex flex-col items-center font-medium">
                                    <img src={digMar} alt="" className="mb-2" />
                                    <p className="text-center">360° Digital Marketing</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='addSectionTwo'>
                    <WhyChooseUs />
                    <img src={yvom} className="my-16" alt="" />
                    <OurServices />
                    <DreamWebsite />
                    <BusinessNextFuture />
                    <RealClientsCarousel />
                    <StrategySession />
                    <DontMissOut />
                    {/* <StaffAugmentation /> */}
                    {/* <WhyRac /> */}
                    {/* <OurProcess /> */}
                </div>

            </div>
        </div>

    )
}

export default AdsAndServices
