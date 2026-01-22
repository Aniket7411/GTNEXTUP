import React from 'react'
import './whyrac.css'





const WhyRac = () => {
    return (
        <div className='text-center'>
            <div className="flex items-center space-x-2 mb-6 justify-center">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                <h2 className='text-xl md:text-4xl font-semibold'>Why Choose Our Resource Allocation Services</h2>
            </div>
            <div class="flex flex-wrap justify-center gap-6 p-6">
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl shadow-md p-3 md:p-6 relative overflow-hidden flex items-center"
                    style={{
                        boxShadow: "0px 0px 4px 1px #00000040",
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

                    <div className="relative z-10 text-center">
                        <img src="/assets/onDemand.svg" className="mx-auto mb-4" alt="On-Demand Talent" />
                        <h3 className="text-xl font-bold text-black mb-4">On-Demand Talent</h3>
                        <p className="text-black w-[75%] mx-auto">
                            Gain instant access to a pool of highly skilled professionals across
                            multiple domains, without the hassle of long-term recruitment processes.
                        </p>
                    </div>
                </div>
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl shadow-md p-2 md:p-6 relative overflow-hidden flex items-center"
                    style={{
                        boxShadow: "0px 0px 4px 1px #00000040",
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

                    <div className="relative z-10 text-center">
                        <img src="/assets/flexibleEng.svg" className="mx-auto mb-4" alt="Flexible Engagement Models" />
                        <h3 className="text-xl font-bold text-black mb-4">Flexible Engagement Models</h3>
                        <p className="text-black w-[75%] mx-auto">
                            We offer multiple engagement models that adapt to your business requirements—hire experts on a project basis, part-time, or full-time to meet your goals.
                        </p>
                    </div>
                </div>
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl shadow-md  p-2 md:p-6 relative overflow-hidden flex items-center"
                    style={{
                        boxShadow: "0px 0px 4px 1px #00000040",
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

                    <div className="relative z-10 text-center">
                        <img src="/assets/costEff.svg" className="mx-auto mb-4" alt="Cost-Effective Workforce Solutions" />
                        <h3 className="text-xl font-bold text-black mb-4">Cost-Effective Workforce Solutions</h3>
                        <p className="text-black w-[75%] mx-auto">
                            Our strategic resource planning helps optimize operational costs by ensuring you get the right talent for the right task.
                        </p>
                    </div>
                </div>
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl shadow-md p-3 md:p-6 relative overflow-hidden flex items-center"
                    style={{
                        boxShadow: "0px 0px 4px 1px #00000040",
                        minHeight: "370px",
                    }}
                >
                    {/* Full-size diamond gradient */}
                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
                        <div
                            className="w-full h-full transform rotate-45 scale-100"
                            style={{
                                background:
                                    "radial-gradient(52% 52% at 50% 50%, #FFE6CA 0%, #FFFFFF 100%)",
                            }}
                        ></div>
                    </div>

                    <div className="relative z-10 text-center">
                        <img src="/assets/quickDepl.svg" className="mx-auto mb-4" alt="Flexible Engagement Models" />
                        <h3 className="text-xl font-bold text-black mb-4">Quick Deployment & Seamless Integration</h3>
                        <p className="text-black w-[75%] mx-auto">
                            Reduce hiring time with our pre-vetted talent pool, ready to be deployed instantly and seamlessly integrated into your operations.
                        </p>
                    </div>
                </div>

            </div>
            {/* <button className="flex mx-auto cursor-pointer align-center px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition mt-4 mb-10">
            Explore Our Talent Pool
            </button> */}

        </div>
    )
}

export default WhyRac
