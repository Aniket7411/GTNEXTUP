import React from 'react'
import './webAppDevelop.css'
import IndustriesWeServeDmPm from '../../components/IndustriesWeServeDmPm/IndustriesWeServeDmPm'
import TestimonialCarousel from '../HomePage/Feedback/Feedback'
import WhyChooseGrTwo from '../../components/WhyChooseGrTwo/WhyChooseGrTwo'
// import HorizontalScrollSlider from '../../components/WhatWeDoForYou/WhatWeDoForYou'
// import HorizontalScrollSection from '../../components/WhatWeDoForYou/WhatWeDoForYou'
import CardCarousel from '../../components/WhatWeDoForYou/WhatWeDoForYou'
// import WhatWeDoForYou from '../../components/WhatWeDoForYou/WhatWeDoForYou'


const Services = () => {
    return (
        <div className='mb-16 overflow-hidden text-[#000] header-spacing bg-white'>
            <div className='relative webAppBg w-screen h-[100vh] bg-no-repeat bg-cover z-0 flex items-center justify-center'>
                <div className='px-6 lg:px-16'>

                    <div className="flex justify-center text-center items-center space-x-2 mt-[100px]" style={{
                        zIndex: '4'
                    }}>
                        <span className="w-3 h-3 bg-[#000000] rounded-full"></span>
                        <h3 className="text-lg font-semibold text-gray-900 ml-2">Our Services</h3>
                    </div>
                    <div className="flex relative">
                        <div className='mx-auto z-20'>
                            <h1 className='text-[3rem] md:text-[4rem] lg:text-[6rem] leading-tight md:leading-[80px] lg:leading-[100px] font-bold text-[#000000] mb-4 text-center' style={{
                                fontFamily: 'poppins',
                                zIndex: '4'

                            }}>Innovative. Scalable. Future-Ready.</h1>

                            <p className='md:w-[65%] mb-24  text-center mx-auto' style={{
                                zIndex: '4'

                            }}>At Getraise Technologies, we design and build intelligent digital solutions that help businesses adapt, grow, and lead. From pixel-perfect interfaces to cloud-native software and ROI-focused marketing — everything we do is engineered for impact.</p>

                        </div>
                        {/* <div className='hidden md:block md:w-[20%] z-10'>
                            <img className='absolute right-0 top-0 h-[60vh] md:h-[50vh]  lg:h-[55vh] xl:h-[60vh] z-10' style={{
                                zIndex: '2',
                            }} src="/assets/Frame 187.png" alt="" />
                        </div> */}
                    </div>
                </div>
                <img src="/assets/Frame 183.svg" className='absolute bottom-0 w-[100vw] z-10' style={{
                    // marginTop:'-2rem'
                    display: 'block',
                    maxHeight: '200px',
                    objectFit: 'cover'
                }} alt="Decorative bottom border" />

            </div>
            <div className="px-6 lg:px-16 flex flex-col md:flex-row items-center md:gap-12 m-auto min-h-[50vh]" style={{
                // marginTop:'-25rem',

            }}>
                {/* Right - Text Content */}
                <div className="w-full md:w-1/2 z-20">
                    <div className="flex items-center gap-x-2 mb-2">
                        {/* <div className="w-5 h-5 bg-yellow-500 rounded-full"></div> */}
                        <h3 className="text-4xl font-bold mb-0 augmenHeading">All the Right Tools.
                            One Technology Partner.</h3>
                    </div>
                    <p className="text-emerald-950 mt-3 mb-2 leading-relaxed"
                        style={{
                            fontSize: '16px',
                            fontWeight: '400',

                        }}
                    >
                        Whether you're launching a digital product, scaling your infrastructure, or growing your online presence — our end-to-end services are built to drive transformation and results.
                    </p>
                    <div className='flex flex-col gap-4'>

                        <button className='cursor-pointer bg-[#FDEF9E] hover:bg-black hover:text-white h-[60px] rounded-xl w-full md:w-[50%]'>
                            Contact Us
                        </button>
                        <button className='cursor-pointer border border-black hover:border-0 hover:bg-[#fdef9e] h-[60px] rounded-xl w-full md:w-[50%]'>
                            Learn More About Us
                        </button>
                    </div>
                </div>

                {/* Left - Image Carousel */}
                <div className="relative w-full md:w-1/2 z-20">
                    <img
                        src="/assets/oneTechPartIcon.svg"
                        alt="About Us"
                        className="w-full h-auto rounded-lg object-contain"
                        style={{
                            maxHeight: '500px',
                            display: 'block'
                        }}
                    />
                </div>
            </div>

            <CardCarousel />
            <div className='px-6 lg:px-16 mb-8 bg-white'>
                <div className='mb-2'>
                    <IndustriesWeServeDmPm />

                </div>
                <WhyChooseGrTwo />
                {/* <WhatWeDoForYou /> */}
            </div>
            {/* <section className="h-screen bg-gray-100 flex items-center justify-center text-3xl">Intro Section</section> */}
            {/* <section className="h-screen bg-gray-200 flex items-center justify-center text-3xl">Next Section</section> */}


        </div>

    )
}

export default Services
