import React from 'react'
import './ourServices.css'
import onDemand from '../../assets/onDemand.svg';
import flexibleEng from '../../assets/flexibleEng.svg';
import costEff from '../../assets/costEff.svg';
import web from '../../assets/web.svg';
import app from '../../assets/app.svg';
import digi from '../../assets/digi.svg';

import quickDepl from '../../assets/quickDepl.svg';

const OurServices = () => {
    return (
        <div className='px-10'>
            <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-2xl md:text-4xl font-bold ml-2 mb-0 augmenHeading">Our Serives</h3>
            </div>

            <div className="z-10 flex flex-col md:flex-row items-center justify-between gap-5 m-auto py-8">
                <div className="relative w-full md:w-[45%]">

                    <h3 className="text-4xl text-gray-900 ml-2 mb-0 augmenHeading">Let’s Make Your Business Smarter, Faster & Digitally Stronger</h3>


                </div>

                <div className="w-full md:w-[45%]">
                    <p className='text-end'>At Getraise Technologies, we offer future-ready digital solutions that help you launch, grow, and manage your business efficiently. From custom websites and cutting-edge mobile applications to result-driven digital marketing – we’ve got you covered.</p>
                </div>
            </div>
            <h1 className='RACHeading ml-2'>Our Services Includes:</h1>
            <div class="flex flex-wrap justify-center md:justify-between gap-5 py-4 ">
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl p-6 relative overflow-hidden border-dashed border-2 border-[#D4D4D4]"
                    style={{
                        // boxShadow: "0px 0px 4px 1px #00000040",
                        minHeight: "370px",
                    }}
                >
                    {/* Full-size diamond gradient */}
                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                        <div
                            className="w-full h-full transform rotate-45 scale-100"
                            style={{
                                background:
                                    "radial-gradient(52% 52% at 50% 50%, #F2FD9E 0%, #FFFFFF 100%)",
                            }}
                        ></div>
                    </div>

                    <div className="relative z-10 text-start">
                        <h2 className="text-2xl font-bold text-black mb-2">Website Development</h2>
                        <p className='text-black font-medium'>We build websites that don’t just look good — they sell:</p>
                        <p className='text-[#44464B] mb-2'>From wireframe to launch — we handle it all.</p>
                        <img src={web} className="mx-auto mb-4" alt="On-Demand Talent" />
                        <ul className="list-disc pl-5 text-black">
                            <li className='mb-3'>Business & eCommerce Websites</li>
                            <li className='mb-3'>WordPress, Shopify, or Custom Builds</li>
                            <li className='mb-3'>Mobile Responsive & SEO-Friendly</li>
                            <li className='mb-3'>Fast, secure, and scalable</li>
                        </ul>

                    </div>
                </div>

                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl p-6 relative overflow-hidden  border-dashed border-2 border-[#D4D4D4]"
                    style={{
                        // boxShadow: "0px 0px 4px 1px #00000040",
                        minHeight: "370px",
                    }}
                >
                    {/* Full-size diamond gradient */}
                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                        <div
                            className="w-full h-full transform rotate-45 scale-100"
                            style={{
                                background:
                                    "radial-gradient(52% 52% at 50% 50%, #D2CAFF 0%, #FFFFFF 100%)",
                            }}
                        ></div>
                    </div>

                    <div className="relative z-10 text-start">
                        <h2 className="text-2xl font-bold text-black mb-2">App Development</h2>
                        <p className='text-black font-medium mb-5'>(Android & iOS)</p>
                        <p className='text-[#44464B] mb-3'>Turn your app idea into reality</p>
                        <img src={app} className="mx-auto mb-4" alt="On-Demand Talent" />
                        <ul className="list-disc pl-5 text-black">
                            <li className='mb-3'>Custom mobile app development</li>
                            <li className='mb-3'>UI/UX Design that users love</li>
                            <li className='mb-3'>Backend & API integration</li>
                            <li className='mb-3'>App Store & Play Store support</li>
                        </ul>
                    </div>
                </div>



                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl p-6 relative overflow-hidden  border-dashed border-2 border-[#D4D4D4]"
                    style={{
                        // boxShadow: "0px 0px 4px 1px #00000040",
                        minHeight: "370px",
                    }}
                >
                    {/* Full-size diamond gradient */}
                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                        <div
                            className="w-full h-full transform rotate-45 scale-100"
                            style={{
                                background:
                                    "radial-gradient(52% 52% at 50% 50%, #CAFFE8 0%, #FFFFFF 100%)",
                            }}
                        ></div>
                    </div>

                    <div className="relative z-10 text-start">
                        <h2 className="text-2xl font-bold text-black mb-2">Digital Marketing</h2>
                        <p className='text-black font-medium'>That Drives Results</p>
                        <p className='text-[#44464B] mb-2'>We don’t just bring traffic — we bring paying customers.</p>
                        <img src={digi} className="mx-auto mb-4" alt="On-Demand Talent" />

                        <ul className="list-disc pl-5 text-black">
                            <li className='mb-3'>Facebook & Instagram Ads</li>
                            <li className='mb-3'>Google Ads (Search & Display)</li>
                            <li className='mb-3'>SEO & Local SEO</li>
                            <li className='mb-3'>Social Media Management</li>
                            <li className='mb-3'>Email Marketing Campaigns</li>
                            <li className='mb-3'>Conversion Optimization</li>
                        </ul>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default OurServices
