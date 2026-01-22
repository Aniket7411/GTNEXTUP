import React from 'react'
// import './whyrac.css'




const WhyChooseGrTwo = () => {
    return (
        <div className='text-start bg-white'>
            <h1 className='text-4xl font-bold'>Why Choose Getraise Technologies?</h1>
            <div class="flex flex-wrap justify-center gap-6 py-4">
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white shadow-sm rounded-xl p-6 relative overflow-hidden" style={{
                        border: '1px solid #E5E5E5'
                    }}

                >


                    <div className="z-10 text-center h-[200px]">
                        <img src="/assets/wcgt1.svg" className="mx-auto mb-4 h-[200px] object-contain" alt="On-Demand Talent" style={{ display: 'block' }} />

                    </div>
                    <h2 className="mt-3 text-xl m-auto text-center font-bold text-black mb-4">100+ Solutions Deployed</h2>
                </div>
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl shadow-sm p-6 relative overflow-hidden"
                    style={{
                        border: '1px solid #E5E5E5'
                    }}
                >


                    <div className="z-10 text-center h-[200px]">
                        <img src="/assets/wcgt2.svg" className="mx-auto mb-4 h-[200px] object-contain" alt="Flexible Engagement Models" style={{ display: 'block' }} />

                    </div>
                    <h2 className="mt-3 text-center text-xl font-bold text-black mb-4  m-auto">Global Clients in 12+ Countries</h2>
                </div>
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl shadow-sm p-6 relative overflow-hidden"
                    style={{
                        border: '1px solid #E5E5E5'
                    }}
                >


                    <div className="z-10 text-center h-[200px]">
                        <img src="/assets/wcgt3.svg" className="mx-auto mb-4 h-[200px] object-contain" alt="Cost-Effective Workforce Solutions" style={{ display: 'block' }} />

                    </div>
                    <h2 className="mt-3 text-center text-xl font-bold text-black mb-4 m-auto">95% Client Retention Rate</h2>
                </div>
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl shadow-sm p-6 relative overflow-hidden"
                    style={{
                        border: '1px solid #E5E5E5'
                    }}
                >


                    <div className="z-10 text-center h-[200px]">
                        <img src="/assets/wcgt4.svg" className="mx-auto mb-4 h-[200px] object-contain" alt="Flexible Engagement Models" style={{ display: 'block' }} />

                    </div>
                    <h2 className="mt-3 text-center text-xl font-bold text-black mb-4 m-auto">Security-First Development</h2>
                </div>
                <div
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm bg-white rounded-xl shadow-sm p-6 relative overflow-hidden"
                    style={{
                        border: '1px solid #E5E5E5'
                    }}
                >


                    <div className="z-10 text-center h-[200px]">
                        <img src="/assets/wcgt5.svg" className="mx-auto mb-4 h-[200px] object-contain" alt="Flexible Engagement Models" style={{ display: 'block' }} />

                    </div>
                    <h2 className="mt-3 text-center text-xl font-bold text-black mb-4 m-auto">Innovation with User at the Core</h2>
                </div>

            </div>
            {/* <button  className="flex mx-auto cursor-pointer align-center px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition mt-4 mb-10">
                Explore Our Talent Pool
            </button> */}

        </div>
    )
}

export default WhyChooseGrTwo
