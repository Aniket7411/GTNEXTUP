import React from "react";

const services = [
    {
        title: "CRM",
        description:
            "Our CRM is a ready-made software that simplifies lead management, client engagement, and follow-ups. Designed for organizations, it will improve your sales performance.",
        img: "/assets/crm.svg",
    },
    {
        title: "Custom ERP",
        description:
            "This is a built-up ERP system that helps streamline your operations. Our developers and project managers design and deliver them in the most efficient and cost-effective way, digitizing their workflows.",
        img: "/assets/crmerp.jpg",
    },
    {
        title: "Institute Management System",
        description:
            "We provide scalable education software solutions that fit seamlessly into institutes of all sizes. From student admissions to HR and finance, institute operations become digitally organized.",
        img: "/assets/ims.jpg",
    },
    {
        title: "Astro",
        description:
            "Our Astro SaaS solution targets astrologers offering specialization, consultation, horoscope charting, and predictions. It’s an all-in-one platform to manage clients, consultations, and sessions.",
        img: "/assets/astro.jpg",
    },
    {
        title: "Multistore",
        description:
            "Operate multiple e-commerce businesses from a single hub. Our multistore software lets admins manage multiple brands, vendors, categories, and categories in a single place.",
        img: "/assets/multistore.jpg",
    },
    {
        title: "Supermarket",
        description:
            "This is a robust, pre-built software for supermarkets in India. It has POS, billing, stock control, and customer loyalty modules, which makes it a comprehensive SaaS application to retail entrepreneurs.",
        img: "/assets/supermarket.jpg",
    },
    {
        title: "Restaurant",
        description:
            "Digitalizes food ordering, takeaway, and delivery operations. From menu management to real-time order tracking, this SaaS software solution enhances the experience of the clients.",
        img: "/assets/restaurant.jpg",
    },
    {
        title: "Hospital Management",
        description:
            "Built for hospitals and clinics, these Customizable software products include billing, appointment scheduling, EMR,  and staff coordination. It is a plug-and-play SaaS solution for businesses that improves patient care and hospital efficiency.",
        img: "/assets/hm.jpg",
    },
    {
        title: "E-Commerce",
        description:
            "Launch your online store quickly with this fully featured e-commerce SaaS platform. The software includes product listings, secure checkout, and order tracking—ideal for startups looking for ready-made software solutions to go live fast.",
        img: "/assets/eccormerce.jpg",
    },
];

const ProductMigrationServices = () => {
    return (
        <div className="max-w-7xl mx-auto py-6 px-4">
            {/* Heading */}


            <div className="flex items-center space-x-2 mb-2 mt-5    ">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                <h2 className="text-[1rem] font-semibold ml-2 mb-0 augmenHeading">
                    Our Services
                </h2>
            </div>

            <h2 className="text-[#000] mb-4 text-xl font-semibold md:text-2xl">
                Next-Gen Software Services for Every Industry
            </h2>

            {/* Hidden H3 headings for SEO - Services */}
            <div className="sr-only">
                <h3>CRM</h3>
                <h3>Custom ERP</h3>
                <h3>Institute Management System</h3>
                <h3>Astro</h3>
                <h3>Multistore</h3>
                <h3>Supermarket</h3>
                <h3>Restaurant</h3>
                <h3>Hospital Management</h3>
                <h3>E-Commerce</h3>
            </div>

            {/* Grid Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-[#FFF9D8] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
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

export default ProductMigrationServices;
