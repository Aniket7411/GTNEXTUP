import React from 'react';
import { Lightbulb, Settings, Users, Monitor, Target } from 'lucide-react'; // Icons
import career from '../../assets/career1.png'




const features = [
    {
        title: 'User-First Thinking',
        desc: 'Before beginning work on any project, we learn about real users, their needs, behaviors, and pain points. Our designs are not only pretty but are made to solve real problems with understanding and compassion.',
        image: "/assets/oi1.jpg",
    },
    {
        title: 'Detail-Focused Execution',
        desc: 'From alignment to micro-interactions, we observe each and every small detail, whether they are alignment or micro-interactions. We have designed our UI UX services with utmost attention to detail since a single misaligned button can ruin an experience.',
        image: "/assets/oi2.jpg",
    },
    {
        title: 'Cross-Functional Collaboration',
        desc: 'Design isn\'t a solo act.  Our UI/UX professionals collaborate closely with the developers, business analysts, and product managers, to make your personal UI UX design services flexible, operative, and user-friendly.',
        image: "/assets/oi3.jpg",
    },
    {
        title: 'Platform-Aware Design',
        desc: "Whether it's a mobile app UI UX design, responsive websites, or tablet interfaces - our designers will ensure your platform will work and look great across all devices, screen sizes, and user circumstances",
        image: "/assets/oi4.jpg",
    },
    {
        title: 'Results-Oriented Design',
        desc: 'We measure success by how users interact, engage, and convert.',
        image: "/assets/oi5.jpg",
    },

    {
        title: 'Birthday',
        desc: 'We measure success by how users interact, engage, and convert.',
        image: "/assets/oi6.jpg",
    },


];

export default function CareerCard() {
    return (
        <>
            <div className="relative w-full md:-mt-[100px]  lg:-mt-[180px] px-4 md:px-12 z-20">
                <div className="relative z-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-2xl overflow-hidden bg-white shadow-md w-full relative z-20"
                            >
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-54 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>






        </>
    );
}
