    import React from "react";

    const services = [
        {
            title: "Zero Downtime, Maximum Efficiency",
            description:
                "We design and implement cloud migration services that will cause minimal interruption to your day-to-day business activities.",
            img: "/assets/downtime.jpg", // replace with actual image
        },
        {
            title: "Full Stack Migration Support",
            description:
                "Whether you are moving databases, applications, or workloads, we manage everything — from assessment to deployment.",
            img: "/assets/fullstack.jpg",
        },
        {
            title: "Multi-Cloud & Hybrid Capabilities",
            description:
                "With our scalable cloud solutions, we will help you migrate to AWS, Azure, Google Cloud, or a combination of them to match your infrastructure.",
            img: "/assets/multicloud.jpg",
        },
        {
            title: "Cost-Effective Migration Roadmaps",
            description:
                "Our affordable cloud services in India are designed to help you shift smartly—without stretching your pocket.",
            img: "/assets/cloudeffective.jpg",
        },
        {
            title: "Post-Migration Optimization",
            description:
                "After migration, our team fine-tunes your system for speed, performance, and compliance with enterprise cloud services’ best practices.",
            img: "/assets/postmigration.jpg",
        },
    ];

    const CloudMigrationServices = () => {
        return (
            <div className="max-w-7xl mx-auto py-3 px-4">
                {/* Heading */}
                <div className="flex items-center space-x-2 mb-4 justify-center">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                    <h2 className="text-3xl font-bold">
                        Our Cloud Migration Services
                    </h2>
                </div>

                {/* Flexbox Service Cards */}
                <div className="flex flex-wrap justify-center gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition w-full sm:w-[48%] lg:w-[30%]"
                        >
                            {/* Image */}
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-40 object-cover"
                            />

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-semibold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    export default CloudMigrationServices;
