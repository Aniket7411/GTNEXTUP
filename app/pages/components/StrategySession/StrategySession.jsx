"use client";
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './strategySession.css'
import { emailjsConfig } from '../../utils/emailjsConfig';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import discCall from '../../assets/discCall.svg'
import roadMap from '../../assets/roadMap.svg'
import buy from '../../assets/buy.svg'
import privacy from '../../assets/wpf_privacy.svg'





const StrategySession = () => {

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
        <div className='relative strategySessionBg w-full md:h-[100vh] bg-no-repeat bg-cover bg-center'>
            <div class=" flex flex-col md:flex-row items-center justify-center text-white px-10 py-20  gap-10 m-auto"
                style={{
                    // marginTop: '120px',
                    // marginBottom: '100px'
                }}
            >
                <div class="w-full md:w-[50%] flex items-start justify-center flex-col" >
                    <h1 className='text-white text-3xl md:text-4xl lg:text-6xl mb-3 md:mb-4' style={{
                        fontWeight: '600',
                    }}>Get Your FREE <br /> Strategy Session</h1>
                    <p className='mb-4 md:mb-12' style={{
                        fontSize: '20px',
                        fontWeight: '400',
                    }}>Spots are limited — claim yours today!</p>

                    <div className='flex gap-5 mb-4'>
                        <img src={discCall} alt="" />
                        <p className="text-white mt-3 mb-2 leading-relaxed"
                            style={{
                                fontSize: '24px',
                                fontWeight: '500',

                            }}
                        >15 - min discovery call</p>
                    </div>
                    <div className='flex gap-5 mb-4'>
                        <img src={roadMap} alt="" />
                        <p className="text-white mt-3 mb-2 leading-relaxed"
                            style={{
                                fontSize: '24px',
                                fontWeight: '500',

                            }}
                        >Personalized service roadmap</p>
                    </div>

                    <div className='flex gap-5 mb-10'>
                        <img src={buy} alt="" />
                        <p className="text-white mt-3 mb-2 leading-relaxed"
                            style={{
                                fontSize: '24px',
                                fontWeight: '500',

                            }}
                        >No Obligation to Buy</p>
                    </div>

                    <div>
                        <div className='flex'>
                            <img src={privacy} alt="" className='me-4' />
                            <h4 className='text-xl text-[#27D088]'>We Respect Your Privacy</h4>
                        </div>
                        <p className='text-[#D8D8D8]'>Your details are 100% safe with us. No spam ever.</p>
                    </div>
                    {/* <ButtonPrimary name={"Contact Us"} /> */}
                </div>

                <div class="w-full md:w-[50%] flex flex-col items-center justify-center m-auto">
                    <p className='text-center text-[24px] font-bold text-[#FEEE99] z-10 mb-4'>  Let’s Talk!</p>
                    <p className=' w-[65%] text-[16px] text-center mb-4'>Fill out the quick form below and we’ll <br /> contact you within 24 hours.</p>
                    <div style={{
                        backgroundColor: '#F9F3CF33',
                        opacity: ''
                    }} className='p-6 z-0 rounded-2xl w-[75%]'>
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

            </div>
        </div>
    )
}

export default StrategySession


