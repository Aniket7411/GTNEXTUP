import React from 'react';
import { Lightbulb, Settings, Users, Monitor, Target } from 'lucide-react'; // Icons
import career from '../../assets/career1.png'
import wcuIcon1 from '../../assets/wcuIcon1.svg'
import wcuIcon2 from '../../assets/wcuIcon2.svg'
import wcuIcon3 from '../../assets/wcuIcon3.svg'
import wcuIcon4 from '../../assets/wcuIcon4.svg'
import wcuIcon5 from '../../assets/wcuIcon5.svg'



const features = [
    {
        title: 'Data-Backed Strategies',
        desc: 'We use real-time analytics and market insights to craft marketing strategies that are precise, measurable, and optimized for performance.',
        icon: "/assets/wcuIcon1.svg",
    },
    {
        title: 'Result Driven Campaign',
        desc: 'Every click, every ad, and every strategy is designed to increase ROI, lead generation, and scalable revenue',
        icon: "/assets/wcuIcon2.svg",
    },
    {
        title: 'In-House Creative, Technical & Analytics Teams',
        desc: 'Our professional digital marketing experts work flawlessly—from content to code—to build tailored campaigns',
        icon: "/assets/wcuIcon3.svg",
    },
    {
        title: 'Custom Digital Marketing Solutions',
        desc: 'No cookie-cutter plans. We developed niche-focused marketing strategies that match your industry, audience, and business vision.',
        icon: "/assets/wcuIcon3.svg",
    },
    {
        title: 'Transparent Reporting & Performance Dashboards',
        desc: "Track every click, lead, and conversion with real-time dashboards and clear, actionable performance reports.",
        icon: "/assets/wcuIcon4.svg",
    },

];

export default function DMfeatures() {
    return (
        <div className="relative w-full bg-white py-8 sm:py-10 mt-8 sm:mt-10 px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="flex items-center text-[#000] justify-center space-x-2 mb-3 sm:mb-4">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-yellow-500 rounded-full"></div>
                <h2 className="text-base sm:text-lg lg:text-xl  ml-2 mb-0 augmenHeading">
                    why choose us
                </h2>
            </div>

            <p className="text-xl text-[#000] sm:text-2xl md:text-3xl lg:text-4xl text-center font-inter my-1 mb-6 sm:mb-9 px-4">Why Choose Getraise for Marketing?</p>



            <div className="w-full rounded-xl overflow-hidden mb-6 sm:mb-8">
                <img
                    src="/assets/career1.png" // replace with your own image
                    alt="Team working"
                    className="w-full h-auto object-cover bg-no-repeat"
                />
            </div>

            <div className="lg:-mt-20 sm:mt-6">
                <div className="flex flex-wrap justify-center text-[#000] gap-3 sm:gap-4 lg:gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-4 sm:p-6 w-full sm:w-[48%] lg:w-[30%] xl:w-[31%] min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] flex flex-col items-start justify-start text-left transition-all"
                            style={{
                                border: '2px solid #DADADA'
                            }}
                        >
                            <div className="bg-yellow-200 p-2 sm:p-3 rounded-full mb-3 sm:mb-4">
                                <img src={feature.icon} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                            <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
