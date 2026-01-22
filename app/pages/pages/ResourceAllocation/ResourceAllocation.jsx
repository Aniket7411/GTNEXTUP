'use client';

import React from 'react'
import './resourceAllocation.css'
import StaffAugmentation from '../../components/StaffArgumentation/StaffAugmentation'
import WhyRac from '../../components/whyRAC/WhyRac'
import OurProcess from '../../components/OurProcess/OurProcess'
import IndustriesWeServe from '../../components/IndustriesWeServe/IndustriesWeServe'
import { motion } from "framer-motion";
import MarqueeComp from '../../components/Marq/Marq'
import StaffAugmentationFAQ from './resourceallocationfaq'
import ResourceAllocSecOne from '../../components/ResourceAllocSecOne/ResourceAllocSecOne'

const ResourceAllocation = () => {
    return (
        <div className="header-spacing">
            <div className='mb-2 overflow-hidden bg-[#fff]'>
                <div className="relative resourcesBg w-full h-[90vh] bg-no-repeat bg-cover bg-center text-center lg:mb-20 flex flex-col items-center justify-center px-4">
                    {/* Main Heading */}
                    <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold">
                        Resource Allocation and Staff Augmentation<br /> Talent That Moves Your Business Forward
                    </h1>

                    <p className='text-[#fff]'>At Getraise, we facilitate the faster growth of businesses by supplying qualified staff and <br /> devoted teams on demand. </p>

                    <div className="flex justify-center mt-2">
                        <button
                            className="bg-[#FFD05E] px-2 py-1 lg:px-4 lg:py-2 rounded-xl text-black cursor-pointer font-medium border border-[#000]"
                            onClick={() => window.location.href = '/contact-getraise-technologies'}
                        >
                            Get in touch
                        </button>


                    </div>
                </div>



                <div className='whoWeAreStaffArg'>
                    <ResourceAllocSecOne />
                    <WhyRac />
                    <StaffAugmentation />

                    <div className='mt-[70px] '>
                        <OurProcess />
                    </div>


                </div>

                <section className='my-20 '>
                    <IndustriesWeServe />
                </section>

                {/* Trusted By Many Companies Section */}
                {/* <div className="px-4 md:px-12 my-12">
                    <div className="flex items-center space-x-2 mb-5">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h2 className="text-[1.2rem] font-semibold ml-2 mb-0 augmenHeading">
                            Trusted By Many Companies
                        </h2>
                    </div>
                </div> */}

                <section className=' pt-5'>
                    <MarqueeComp />
                </section>
                <StaffAugmentationFAQ />

            </div>
        </div>

    )
}

export default ResourceAllocation
