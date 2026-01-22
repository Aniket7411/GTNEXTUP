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
        title: 'Continuous Testing = Continuous Confidence',
        desc: 'Quality is in our DNA. Our systematic STLC ensures every feature is rigorously tested, reducing bugs, enhancing UX, and boosting client satisfaction.',
        icon: "/assets/wcuIcon1.svg",
    },
    {
        title: '24/7 Support',
        desc: 'After we build a web & app, cloud-based platform, or mobile application, our support works non-stop. Post-launch, our 24/7 support ensures seamless upgrades, quick issue resolution, and continuous optimization for effortless scaling.',
        icon: "/assets/wcuIcon2.svg",
    },
    {
        title: 'Advanced Problem-Solving Skills',
        desc: 'Our team thrives on solving unique challenges. As a custom software development company, we’ve tackled unforeseen problems across diverse projects, consistently delivering smart, efficient, and reliable solutions.',
        icon: "/assets/wcuIcon3.svg",
    },
    {
        title: 'Deep Experience in Software Development',
        desc: "Our experienced team works faster, spots errors quickly, and delivers stable, scalable custom software—making businesses across industries choose GetRaise as their trusted development partner.",
        icon: "/assets/wcuIcon4.svg",
    },
    {
        title: 'Transparent Pricing Structure',
        desc: 'We ensure full cost transparency with no hidden charges. Choose fixed or time-based pricing, and any mid-project changes come with a clear budget update before approval.',
        icon: "/assets/wcuIcon5.svg",
    },
    {
        title: 'Knowledge of Information Security',
        desc: 'With rising cyber threats, data security is a necessity. Our experts use advanced encryption, authentication, and secure architectures—making us a trusted partner for enterprise-grade secure solutions worldwide.',
        icon: "/assets/wcuIcon5.svg",
    },
];

export default function FeatureCardSectionCustom() {
    return (
        <div className="relative w-full bg-white py-12 px-4 md:px-12">
            <div className="flex items-center space-x-2 mb-5">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                <h2 className="text-[1rem] font-semibold ml-2 mb-0 augmenHeading">
                    Why Choose Us
                </h2>
            </div>
            <h2 className="text-1xl md:text-3xl font-semibold mb-5 text-start">What Sets Getraise Apart as a Custom <br /> Software Development Agency?</h2>



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
