import React from "react";
import { CheckCircle } from "lucide-react"; // using lucide-react for icons

const industryData = [
    {
        heading: "",
        title: "E-commerce Brands: Fast, Scalable & User-Centric",
        img: "/assets/card1.jpg", // replace with actual image
        description:
            "We assist e-commerce companies in creating cloud-enabled stores that are fast, secure, and scale high. Our cloud infrastructure management handles everything, including peak-season traffic, integration of real-time inventory, and order tracking.",
        points: [
            "Salesforce for CRM and customer lifecycle management",
            "Trello, and Asana for team workflows and task automation",
            "Integrated SaaS POS systems for order, inventory & returns",
        ],
        wedo: "We use"
    },
    {
        title: "Healthcare Providers: Compliant, Accessible and Secure",
        img: "/assets/card2.jpg",
        description:
            "Strict compliance and confidentiality are necessary in healthcare systems and we address them using deployments of both private and hybrid clouds.",
        points: [
            "Cloud storage + encryption for diagnostics, prescriptions & reports",
            "HIPAA-compliant cloud environments for patient data",
            "Telehealth platforms built on secure hybrid infrastructure",
        ],
        wedo: "We Offer"
    },
    {
        title: "Manufacturing: Real-Time Data & IoT Automation",
        img: "/assets/card3.jpg",
        description:
            "In the case of financial firms, we maintain a balance between innovation and safety.",
        points: [
            "PaaS for developing custom automation dashboards",
            "Predictive analytics via IoT sensors connected to the cloud",
            "Cloud-based ERP to manage operations and raw materials",
        ],
        wedo: "Our tools Support"
    },
    {
        title: "Banking & Finance: Hybrid Cloud with Bulletproof Security",
        img: "/assets/card4.jpg",
        description:
            "In the case of financial firms, we maintain a balance between innovation and safety.",
        points: [
            "Data analytics, AI, and product testing on a public cloud",
            "Hybrid cloud setups to store sensitive data in private clouds",
            "End-to-end cloud migration services from legacy systems",
        ],
        wedo: "Here's how"

    },
];

const IndustryCards = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            <div className="flex items-center space-x-2 mb-2">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                <h2 className="text-[1.2rem]  ml-2 mb-0 augmenHeading">
                    Industries We Offer
                </h2>
            </div>
            <p className="text-1xl md:text-3xl font-semibold mb-6 text-start">Cloud Services - Designed for Every  <br />Business Type</p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {industryData.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-lg p-3 shadow-sm bg-white overflow-hidden"
                    >
                        {/* Image */}
                        <h3 className="text-2xl w-[68%] font-semibold mb-2">{item.title}</h3>

                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />

                        {/* Content */}
                        <div className="p-5">
                            <p className="text-gray-600 mb-4">{item.description}</p>

                            <p className="font-semibold my-1">{item.wedo}:</p>

                            {item.points.length > 0 && (
                                <ul className="space-y-2">
                                    {item.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                                            <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IndustryCards;
