import React from 'react'
import './whychooseus.css'

import rect30 from '../../assets/g174.svg'
import li from '../../assets/li.svg'

const WhyChooseUs = () => {
    return (
        <div className="w-full pb-20 bg-white whoWeAre">
            {/* Background Text */}

            {/* Content Wrapper */}
            <div className="z-10 flex flex-col md:flex-row items-center gap-12 m-auto min-h-[50vh]">
                {/* Left - Image Carousel */}
                <div className="relative w-full md:w-[33%]">
                    {/* <div className="flex items-center space-x-2 mb-2">
                               <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                               <h3 className="text-lg font-semibold text-gray-900">Bio</h3>
                           </div> */}
                    <img
                        src={rect30}
                        alt="About Us"
                        className="w-full rounded-lg object-cover"
                    />
                    {/* <div className='absolute bottom-[-10px] left-0 right-0 bg-white w-[85%] m-auto rounded-t-3xl p-5 text-center' style={{
                        fontSize: '16px',
                        fontWeight: '400',
                        fontStyle: 'italic'
                    }}>
                        We don’t just create software—we <br /> engineer success.

                    </div> */}

                </div>

                {/* Right - Text Content */}
                <div className="w-full md:w-[67%]">
                    {/* Bio Title */}


                    {/* Description */}

                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: '600',
                        fontFamily: 'RF Dewi Extended'
                    }}>Why Choose Us</h1>
                    <p className="text-emerald-950 mt-3 mb-2 leading-relaxed"
                        style={{
                            fontSize: '16px',
                            fontWeight: '400',

                        }}
                    >
                        At Getraise Technologies, we empower businesses by transforming ideas into innovative digital products and growth-driven strategies.
                    </p>
                    <div>
                        <div className='flex items-center mb-2'><span className='me-3'><img src={li} alt="" /></span>2x faster project delivery</div>
                        <div className='flex items-center mb-2'><span className='me-3'><img src={li} alt="" /></span>Proven ROI-driven marketing strategies</div>
                        <div className='flex items-center mb-2'><span className='me-3'><img src={li} alt="" /></span>100% tailored web and app solutions</div>
                        <div className='flex items-center mb-2'><span className='me-3'><img src={li} alt="" /></span>Dedicated support & consultation</div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
