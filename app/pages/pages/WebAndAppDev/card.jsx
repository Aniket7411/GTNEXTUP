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
        title: 'Brilliance without Compromise at a Friendly Budget',
        desc: 'Getraise is an affordable yet high-quality site and app development firm. We will offer you cost-effective solutions with clear pricing, no hidden cost just value that you receive.',
        icon: "/assets/wcuIcon1.svg",
    },
    {
        title: 'Skilled Team with Future Forethought',
        desc: 'We are a leading web and app development agency that design custom solutions that are fast, clean, and easy to use on all devices.',
        icon: "/assets/wcuIcon2.svg",
    },
    {
        title: 'Built on Research, Not Assumptions',
        desc: 'We are no longer aesthetic. Being one of the leading web and application development firms, we create products that are fast to load, sharp to look, and exciting to use across all devices. ',
        icon: "/assets/wcuIcon3.svg",
    },
    {
        title: 'Small Requirement of Future Change',
        desc: "Bid farewell to temporary solutions. Our web and app development team is a trusted company that always thinks about tomorrow, which means fewer updates, lower cost of maintenance and limitation-free platforms that will transform along with the growth of your business.",
        icon: "/assets/wcuIcon4.svg",
    },
    {
        title: 'Ideal to fit the dynamic Digital environment',
        desc: 'Whether it is changing algorithms, changing user demands, or changing digital markets, we build agile digital solutions: changing, growing and thriving in changing digital markets.',
        icon: "/assets/wcuIcon5.svg",
    },
];

export default function WebFeatureCardSection() {
    return (
        <div className="relative w-full bg-white py-12 px-4 md:px-12">
            <div className="flex items-center space-x-2 mb-5">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                <h2 className="text-[1rem] font-semibold ml-2 mb-0 augmenHeading">
                    why choose us
                </h2>
            </div>
            <h2 className="text-1xl md:text-4xl font-semibold mb-3 text-start">Key Benefits of Choosing Us for the<br /> Best Web & App Development</h2>



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
                            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
