// import rect30 from '../../assets/Rectangle 30.svg'
// import OdometerCounter from '../../components/OdometerCounter/OdometerCounter';
'use client';

import './ourpresence.css'
import React, { useEffect, useRef } from "react";
import OdometerCounter from '../../../components/OdometerCounter/OdometerCounter';
// import "odometer/themes/odometer-theme-default.css";

const Ourpresence = () => {

    return (
        <>
            <div className="flex items-center space-x-2 mb-4 md:mb-8 w-[80%] mx-auto lg:px-16">
                <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
                <h2 className="text-[20px] font-medium text-gray-900 RFDewiExtended"
                >Our Presence</h2>
            </div>
            <div className="w-full px-6 lg:px-16 mb-16 md:mb-20 bg-white">

                {/* Background Text */}

                {/* Content Wrapper */}
                <div className="z-10 flex flex-col lg:flex-row items-center gap-12 md:w-[80%] m-auto">
                    {/* Left - Image Carousel */}
                    <div className="relative w-full lg:w-1/2">
                        <div className='hidden md:block'>
                            <div className='flex flex-wrap justify-between'>
                                <div>
                                    <div className='presenceNumbers'>
                                        <OdometerCounter value={10} /><span className='plusColor'>+</span>
                                    </div>
                                    <p className='presenceNumbersText'>Yrs. of Exp.</p>
                                </div>
                                <div className='me-10'>
                                    <div className='presenceNumbers'>
                                        <OdometerCounter value={500} /><span className='plusColor'>+</span>
                                    </div>
                                    <p className='presenceNumbersText'>Successful Projects <br /> Delivered</p>
                                </div>
                            </div>

                        </div>
                        <div className='hidden md:block'>


                            <div className='flex flex-wrap justify-between'>
                                <div>
                                    <div className='presenceNumbers'>
                                        <OdometerCounter value={20} /><span className='plusColor'>+</span>
                                    </div>
                                    <p className='presenceNumbersText'>Global Countries <br /> Presence With Clients</p>
                                </div>
                                <div>
                                    <div className='presenceNumbers'>
                                        <OdometerCounter value={27} /><span className='plusColor'>+</span>
                                    </div>
                                    <p className='presenceNumbersText'>Awards and <br /> Recognitions Received</p>
                                </div>
                            </div>
                        </div>

                        <div className='block md:hidden'>
                            <div>
                                <div className='presenceNumbers'>
                                    <OdometerCounter value={10} /><span className='plusColor'>+</span>
                                </div>
                                <p className='presenceNumbersText'>Yrs. of Exp.</p>
                            </div>
                            <div className='me-10'>
                                <div className='presenceNumbers'>
                                    <OdometerCounter value={500} /><span className='plusColor'>+</span>
                                </div>
                                <p className='presenceNumbersText'>Successful Projects <br /> Delivered</p>
                            </div>
                            <div>
                                <div className='presenceNumbers'>
                                    <OdometerCounter value={20} /><span className='plusColor'>+</span>
                                </div>
                                <p className='presenceNumbersText'>Global Countries <br /> Presence With Clients</p>
                            </div>
                            <div>
                                <div className='presenceNumbers'>
                                    <OdometerCounter value={27} /><span className='plusColor'>+</span>
                                </div>
                                <p className='presenceNumbersText'>Awards and <br /> Recognitions Received</p>
                            </div>
                        </div>

                    </div>

                    {/* Right - Text Content */}
                    <div className="w-full lg:w-1/2">
                        {/* Bio Title */}


                        {/* Description */}
                        <p className="text-emerald-950 mt-3 leading-relaxed text-[20px] md:text-[24px]"
                            style={{
                                fontWeight: '500',
                            }}
                        >
                            Our presence is marked by impactful solutions that have earned recognition in various industries. We’ve been awarded for our innovative approach and commitment to delivering results that drive business success. At the heart of our company, we focus on empowering organizations through advanced technology, design, and marketing, ensuring continuous growth and achievement.
                        </p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Ourpresence;
