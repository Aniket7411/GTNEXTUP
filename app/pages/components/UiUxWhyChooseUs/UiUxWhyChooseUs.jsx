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
        title: 'User- FIRST THINKING',
        desc: 'Before beginning work on any project, we learn about real users, their needs, behaviors, and pain points. Our designs are not only pretty but are made to solve real problems with understanding and compassion.',
        icon: wcuIcon1,
    },
    {
        title: 'precision in Every Pixel',
        desc: 'From alignment to micro-interactions, we observe each and every small detail, whether they are alignment or micro-interactions. We have designed our UI UX services with utmost attention to detail since a single misaligned button can ruin an experience.',
        icon: wcuIcon2,
    },
    {
        title: 'cross – Team collaboration',
        desc: 'Design isn\'t a solo act.  Our UI/UX professionals collaborate closely with the developers, business analysts, and product managers, to make your personal UI UX design services flexible, operative, and user-friendly.',
        icon: wcuIcon3,
    },
    {
        title: 'Multi-platform-perfection',
        desc: "Whether it's a mobile app UI UX design, responsive websites, or tablet interfaces - our designers will ensure your platform will work and look great across all devices, screen sizes, and user circumstances.",
        icon: wcuIcon4,
    },
    {
        title: 'Results that go Beyond Aesthetics',
        desc: 'We measure our design success using data - clicks, conversions, and retention. Our every decision is guided by the intention to enhance user engagement and your business activity.',
        icon: wcuIcon5,
    },
];

export default function FeatureCardSection() {
    return (
        <div className="relative w-full  text-[#000] bg-white py-12 px-4 md:px-12">
            <div className="flex items-center space-x-2 mb-5">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                <h2 className="text-[1rem] text-[#000] font-semibold ml-2 mb-0 augmenHeading">
                    Why Choose Us
                </h2>
            </div>
            <p className="text-1xl md:text-4xl font-semibold mb-3 text-start">Why Getraise Tech is Right for <br /> Your UI/UX Needs</p>



            <div className="w-full rounded-xl overflow-hidden mb-6">
                <img
                    src="/assets/career1.png" // replace with your own image
                    alt="Team working"
                    className="w-full h-auto object-cover bg-no-repeat"
                />
            </div>

            <div className="-mt-14">
                <div className="flex flex-wrap justify-center gap-2">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6 w-full sm:w-[48%] lg:w-[30%] min-h-[220px] flex flex-col items-start justify-start text-left transition-all"
                            style={{
                                border: '2px solid #DADADA'
                            }}
                        >
                            <div className="bg-yellow-200 p-3 rounded-full mb-4">
                                <img src={feature.icon} alt="" />
                            </div>
                            <h3 className="text-lg capitalize font-bold mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
