import React from 'react'





import './ResourceAllocSecOne.css'

const ResourceAllocSecOne = () => {
    return (
        <div className="w-full bg-white my-2">
            {/* Background Text */}

            {/* Content Wrapper */}
            <div className="z-10 flex flex-col md:flex-row items-center md:gap-12 m-auto min-h-[50vh]">
                {/* Right - Text Content */}
                <div className="w-full ">
                    <div className="flex items-center gap-x-2 mb-2">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h2 className="text-xl md:text-2xl font-semibold ml-2 mb-0 text-[#000] ">Scale Smarter with Resource Allocation & White Labelling</h2>
                    </div>
                    <p className="text-emerald-950 mt-3 mb-2 leading-relaxed"
                        style={{
                            fontSize: '14px',
                            fontWeight: '400',

                        }}
                    >
                        In the modern business environment where everything happens rapidly and fast, having the right talent at the right time is everything.  That is where resource allocation and staff augmentation interplay - two powerful solutions that will allow you to remain lean and agile all at the same time. Want a short-term solution or a long-term talent? We connect you with the right people to fill your skill gaps, lower hiring expenses, and keep your projects on the go.                    </p>
                </div>

                {/* Left - Image Carousel */}
                <div className="relative w-full md:w-1/2">
                    <img
                        src="/assets/RA3.svg"
                        alt="About Us"
                        className="w-full rounded-lg object-cover"
                    />
                </div>
            </div>

            <div className='md:relative'>
                <img src="/assets/yellowTopTriangle.svg" className=' hidden md:block' alt="" />
                <img src="/assets/RA3People.svg" alt="" className='hidden md:block' />
                <img src="/assets/yellowBottomTriangle.svg" alt="" className='hidden md:block' />
                <div className='md:absolute top-8 left-0 right-0'>

                    <div className="md:absolute top-8 left-0 right-0 px-6 md:px-16">
                        <div className="relative  ">
                            {/* Opening Comma */}
                            <img
                                src="/assets/invertedCommaLeft.svg"
                                alt="start quote"
                                className="inline-block align-top w-8 md:w-9 lg:w-10  -mt-2"
                            />

                            {/* Quote Text */}
                            <p className="inline text-lg md:text-2xl lg:text-3xl text-[#3A3A3A] ">
                                Our approach focuses on reducing hiring time, optimizing costs, and
                                enhancing operational efficiency through seamless collaboration,
                                enabling your business to scale effortlessly.
                            </p>

                            {/* Closing Comma */}
                            <img
                                src="/assets/commaEnd.svg"
                                alt="end quote"
                                className="inline-block align-top w-8 md:w-9 lg:w-10  -mt-1"
                            />
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}

export default ResourceAllocSecOne
