"use client";
import React from 'react'
import seamlessInteg from '../../assets/seamlessInteg.svg'
import talentMatching from '../../assets/talentMatching.svg'
import continSupport from '../../assets/continuousSupport.svg'
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'




const OurProcess = () => {

    const steps = [
        {
            id: 1,
            number: '1',
            title: 'Requirement Analysis',
            description: 'Business goal understanding is the start of everything. If you are looking to hire white label developers in India, expand your white label UI/UX design capabilities, or outsource any IT projects in India, this step ensures we are aligned from the start.',
            image: "/assets/ReqAnalysis.svg",
        },
        {
            id: 2,
            number: '2',
            title: 'Talent Matching',
            description: 'Once the requirement is defined, we dive into our vetted pool of professionals. We identify the ideal match—technically skilled and culturally compatible—for roles like digital marketing, white label software development. Only after finding the right fit, we move to onboarding.',
            image: "/assets/talentMatching.svg",
        },
        {
            id: 3,
            number: '3',
            title: 'Seamless Integration',
            description: 'Once the expert(s) have been chosen, we proceed smoothly and quickly with the onboarding process. The remote white label team you hire will be integrated and use your tools, timelines, and processes. Integration is handled with care to minimize downtime and maximize productivity',
            image: "/assets/seamlessInteg.svg",
        },
        {
            id: 4,
            number: '4',
            title: 'Continuous Support',
            description: 'Once your white label team is active. From performance reviews to proactive communication, we ensure quality remains high. Our white label IT services allow you to scale flexibly, which means you can increase or decrease the resources as your project develops.',
            image: "/assets/continuousSupport.svg",
        },
    ];

    const router = useRouter();

    return (
        <div className=' mt-10'>
            <div className='flex items-end justify-between mb-8'>
                <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                    <h2 className='text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-medium'>
                        Our Process
                    </h2>
                </div>
                <div>
                    <p className='md:text-2xl font-medium'>
                        – Seamless & Efficient
                    </p>
                </div>
            </div>


            {steps.map((step) => (
                <div
                    key={step.id}
                    style={{ backgroundColor: '#EBEBEB' }}
                    className="flex p-4 md:p-8 rounded-lg mb-2"
                >
                    <div>
                        <div className="flex justify-between text-[#000] w-full gap-x-2  mb-4">
                            <div className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-medium md:w-[54%] ">
                                {step.number}
                            </div>
                            <div className='md:w-[46%]'>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium">
                                    {step.title}
                                </h3>
                                <div className="mt-2">
                                    <p> {step.description}</p>
                                </div>
                            </div>
                        </div>
                        <img src={step.image} className="rounded-lg" alt={step.title} />
                    </div>
                </div>
            ))}

            <button className="flex mx-auto cursor-pointer align-center px-4 text-[#fff] py-2 border bg-[#000] border-black rounded-full hover:bg-[#FDEF9E] hover:text-[#000] transition mt-10 mb-8" onClick={() => {
                router.push("/contact-getraise-technologies")
            }}>
                Request Talent Now
            </button>

        </div>
    )
}

export default OurProcess
