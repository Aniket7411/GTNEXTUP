import React, { useState } from 'react'


const IndustriesWeServeDmPm = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    //   const naviagte = useRouter()

    const assignments = [
        {
            text: "E-commerce & Retail",
            subline: "Enhancing online shopping experiences",
            info: "We help businesses build scalable platforms for seamless online transactions, personalized customer experiences, and optimized operations.",
            image: "/assets/retail.svg"
        },
        {
            text: "Healthcare & Clinics",
            subline: "Empowering modern healthcare solutions",
            info: "We design applications for patient management, telemedicine, and healthcare analytics to improve care delivery and accessibility.",
            image: "/assets/clinics.svg"
        },
        {
            text: "SaaS & Tech Startups",
            subline: "Driving innovation and growth",
            info: "We provide cutting-edge software solutions for startups, focusing on scalability, cloud integration, and market readiness.",
            image: "/assets/startup.svg"
        },
        {
            text: "Real Estate & Construction",
            subline: "Transforming property management",
            info: "Our tools help streamline real estate operations, manage construction projects, and improve customer engagement with 3D visualization.",
            image: "/assets/construction.svg"
        },
        {
            text: "Education & E-learning",
            subline: "Revolutionizing learning experiences",
            info: "We develop platforms for online courses, virtual classrooms, and collaborative tools to make education accessible to everyone.",
            image: "/assets/learning.svg"
        },
        {
            text: "Local Businesses & Services",
            subline: "Supporting community enterprises",
            info: "Our solutions help local businesses establish their online presence, optimize services, and connect with their community effectively.",
            image: "/assets/services.svg"
        }
    ];

    return (
        <div className="bg-white">
            <section className="pt-8 text-black">
                <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <h3 className="text-lg font-semibold text-gray-900 ml-2">Industries We Serve</h3>
                </div>
            </section>
            <div className="w-full mx-auto py-6">
                {/* <h2 className="text-xl font-semibold mb-4 px-16">What we offer</h2> */}
                {assignments.map((item, index) => (
                    <div
                        key={index}
                        className="justify-between flex flex-col lg:flex-row items-start lg:items-center border-b text-3xl transition-all duration-500 hover:bg-[#FEEE99] cursor-pointer pl-2 py-4"
                        style={{ borderColor: "#B7B7B7" }}
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        <div className="flex-1 w-full lg:w-auto">

                            <h3 className="lg:text-3xl text-xl font-serif lg:mt-0 mt-2 text-gray-900 font-bold">{item.text}</h3>
                            <p className="text-sm text-gray-700 mt-2">{item.info}</p>
                        </div>

                        {/* Desktop Image - Only visible on large screens */}
                        <div className="hidden lg:block flex-shrink-0">
                            <img
                                src={item.image}
                                alt={item.text}
                                className={`transform w-64 h-44 mr-5 transition-all duration-700 rounded-lg ${hoveredItem === index ? "opacity-100 scale-105" : "opacity-60"
                                    }`}
                                style={{
                                    objectFit: 'contain',
                                    display: 'block'
                                }}
                            />
                        </div>

                        {/* Mobile Image - Only visible on small/medium screens */}
                        <div className="lg:hidden w-full mt-4">
                            <img
                                src={item.image}
                                alt={item.text}
                                className="transform w-full h-44 transition-opacity duration-700 rounded-lg"
                                style={{
                                    objectFit: 'contain',
                                    display: 'block'
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default IndustriesWeServeDmPm
