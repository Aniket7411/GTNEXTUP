import rightArr from '../../assets/rightArr.svg'
import crm from '../../assets/wwd1.svg'
import erp from '../../assets/wwd2.svg'
import ims from '../../assets/wwd3.svg'
import astro from '../../assets/wwd4.svg'
import multistore from '../../assets/wwd5.svg'
import superMarket from '../../assets/wwd6.svg'
import restaurant from '../../assets/restaurant.svg'
import hospitalMgmt from '../../assets/hospitalMgmt.svg'
import eCommerce from '../../assets/e-commerce.svg'
import rightArBg from '../../assets/rightArBg.svg'




export const WhatWeDo = () => {
    const services = [
        {
            title: "Search Engine Optimization (SEO)",
            image: crm,
            number: "01",
            btnOne: "Organic Traffic",
            btntwo: "Keyword Optimization",
            btnThree: "On-Page SEO",
        },
        {
            title: "Paid Advertising (Google Ads, Meta Ads)",
            image: erp,
            number: "02",
            btnOne: "PPC Campaigns",
            btntwo: "Retargeting Ads",
            btnThree: "Conversion Tracking",

        },
        {
            title: "Social Media Marketing",
            image: ims,
            number: "03",
            btnOne: "Social Engagement",
            btntwo: "Audience Targeting",
            btnThree: "Brand Awareness",

        },
        {
            title: "Content & Copy Strategy",
            image: astro,
            number: "04",
            btnOne: "Content Marketing",
            btntwo: "Copywriting",
            btnThree: "Value Proposition",

        },
        {
            title: "Performance Marketing & Analytics",
            image: multistore,
            number: "05",
            btnOne: "Email Automation",
            btntwo: "Drip Campaigns",
            btnThree: "Lead Nurturing",

        },
        {
            title: "Email Marketing Campaigns",
            image: superMarket,
            number: "06",
            btnOne: "ROI Optimization",
            btntwo: "Data-Driven Campaigns",
            btnThree: "Real-Time Reporting",

        },

    ];
    return (
        <section className="py-8 text-black">
            <div className="flex items-center space-x-2 mb-2">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <h3 className="text-lg font-semibold text-gray-900 ml-2">What We Do</h3>
            </div>
            {/* <h2 className="text-4xl font-medium mb-4 text-start">Your Growth. Our Expertise.</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                    <div key={index}>
                        <div className='flex gap-4 text-[24px] font-normal'>
                            <h1>{service.number}</h1>
                            <h3 className=" mb-2 text-black px-2">{service.title}</h3>
                        </div>
                        <div className="text-black p-4 rounded-3xl w-full h-[200px] mb-4 relative bg-contain" style={{
                            backgroundImage: `url(${service.image})`,
                            boxShadow: "inset 0 0 80px rgba(0, 0, 0, 0.95)",

                            backgroundSize: 'auto'

                        }}>
                            {/* <img
              src={rightArBg}
              alt="arrow-img"
              className="absolute top-0 right-0 cursor-pointer"
            /> */}
                            <div className="absolute bottom-2 left-0 px-4">

                                <div className='flex flex-wrap gap-2'>
                                    <button className='bg-white lg:bg-[#dad7d7b2] h-[40px] rounded-4xl px-4'>
                                        {service.btnOne}
                                    </button>
                                    <button className='bg-white lg:bg-[#FFFFFFB2] h-[40px] rounded-4xl px-4'>
                                        {service.btntwo}
                                    </button>
                                    <button className='bg-white lg:bg-[#FFFFFFB2] h-[40px] rounded-4xl px-4'>
                                        {service.btnThree}
                                    </button>

                                </div>
                                {/* <button className="cursor-pointer bg-white text-black flex justify-between px-4 rounded-4xl py-2 w-full">
                                start a project
                                <img src={rightArr} alt="" />

                            </button> */}
                            </div>
                        </div>
                    </div>

                ))}

            </div>
            {/* <button className="flex mx-auto cursor-pointer align-center px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
                Explore More
            </button> */}
        </section>
    );
};
