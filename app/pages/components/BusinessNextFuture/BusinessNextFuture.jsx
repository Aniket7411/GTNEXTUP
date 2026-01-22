
import React from 'react'
import './businessNextFuture.css'

import nextFutureGirl from '../../assets/nextFutureGirl.svg'
import nextBusinessOne from '../../assets/nextBusinessOne.svg'
import nextBusinessTwo from '../../assets/nextBusinessTwo.svg'
import nextBusinessThree from '../../assets/nextBusinessThree.svg'





import li from '../../assets/li.svg'

const BusinessNextFuture = () => {
    return (
        <div className="w-full pb-20 bg-white businessNext">
            <div>

                <span className='-pb-10' style={{
                    fontSize: '2.7rem',
                    fontWeight: '600',
                    borderBottom: '20px solid #FEEE99'
                }}>Your Business can be Next Future</span>

            </div>

            <div className="z-10 flex flex-col md:flex-row items-center gap-12 m-auto md:min-h-[50vh] md:h-[70vh] my-10">
                {/* Left - Image Carousel */}



                <div className="w-full md:w-[50%]">


                    <div className='flex gap-5 mb-4'>
                        <img src={nextBusinessOne} alt="" />
                        <p className="text-emerald-950 mt-3 mb-2 leading-relaxed"
                            style={{
                                fontSize: '16px',
                                fontWeight: '400',

                            }}
                        >
                            85% of users judge a business’s credibility based on its website. We build fast, responsive websites that convert.                    </p>
                    </div>
                    <div className='flex gap-5 mb-4'>
                        <img src={nextBusinessTwo} alt="" />
                        <p className="text-emerald-950 mt-3 mb-2 leading-relaxed"
                            style={{
                                fontSize: '16px',
                                fontWeight: '400',

                            }}
                        >
                            Businesses with mobile apps experience up to 2x higher customer retention. Our apps are designed to engage and scale.
                        </p>
                    </div>
                    <div className='flex gap-5 mb-4'>
                        <img src={nextBusinessThree} alt="" />
                        <p className="text-emerald-950 mt-3 mb-2 leading-relaxed"
                            style={{
                                fontSize: '16px',
                                fontWeight: '400',

                            }}
                        >
                            80% of businesses see measurable growth within 6 months of focused digital campaigns. We ensure you're visible where it matters most.
                        </p>
                    </div>
                    {/* <div>
                        <div className='flex items-center mb-2'><span className='me-3'><img src={li} alt="" /></span>2x faster project delivery</div>
                        <div className='flex items-center mb-2'><span className='me-3'><img src={li} alt="" /></span>Proven ROI-driven marketing strategies</div>
                        <div className='flex items-center mb-2'><span className='me-3'><img src={li} alt="" /></span>100% tailored web and app solutions</div>
                        <div className='flex items-center mb-2'><span className='me-3'><img src={li} alt="" /></span>Dedicated support & consultation</div>
                        

                    </div> */}
                </div>

                <div className="relative w-full md:w-[50%]">

                    <img
                        src={nextFutureGirl}
                        alt="next Future"
                        className="w-full object-cover"
                    />

                </div>
            </div>
        </div>
    )
}

export default BusinessNextFuture





