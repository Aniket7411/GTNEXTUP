import { useState } from "react";
import { ChevronDown } from "lucide-react"; // icon

const industries = [
    {
        title: "Healthcare & Health Tech",
        content:
            "We create custom HIPAA-compliant software like  Electronic Health Records (EHR), appointment scheduling  systems, and telemedicine platforms. The tools enable clinics, hospitals, and wellness apps to provide  efficient and safe patient care.",
    },

    {
        title: "E-Commerce & Retail",
        content:
            "We develop custom inventory management, smart recommendation engines, and a custom CRM tool, which can be connected to online storefronts. Whether it's a new venture or an existing business, we provide flawless order management, customer experience, and backend automation.",
    },
    {
        title: "FUNDS & Fin Tech",
        content:
            "We provide secure, customized software like digital wallets, fraud detection systems, KYC onboarding, and analysis dashboards. They help you remain compliant and deliver seamless, modernised user experiences.",
    },
    {
        title: "Manufacturing and supply Chain",
        content:
            "We create IoT-enabled production monitoring systems, smart inventory trackers, and logistics coordination tools that bring real-time control of your factory floor or your supply chain.",
    },
    {
        title: "Education and Edtech",
        content:
            "We develop e-learning systems, school administration software, student portals, and online assessment systems. Our solutions are designed for educators, training organizations, and EdTech startups.",
    },
    {
        title: "Travel & Hospitality",
        content:
            "We provide custom booking engines, property management systems (PMS), guest experience apps, and loyalty program software, allowing hotels, tour operators, and agencies to deliver exceptional service.",
    },
];

export default function CustomSoftwareFaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-7xl mx-auto  py-4">

            <div className="flex items-center space-x-2 mb-4 mt-4 md:mt-12">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-yellow-500 rounded-full"></div>
                <h2 className="text-xl sm:text-2xl  ml-2 mb-0 augmenHeading">
                    Industries We Serve
                </h2>
            </div>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-5'>
                Industry Ready Software - for Every Sector <br /> We Serve
            </h2>

            {industries.map((item, index) => (
                <div key={index}>
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex justify-between items-center text-lg  py-4 text-left md:text-4xl font-thin text-[#000]"
                    >
                        <h3 className="m-0">{item.title}</h3>
                        <ChevronDown
                            className={`h-5 w-5 transform transition-transform ${openIndex === index ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {/* Expandable Content */}
                    {openIndex === index && (
                        <p className="text-gray-600 pb-4">{item.content}</p>
                    )}

                    <hr className="border-gray-300" />
                </div>
            ))}

            {/* CTA Section */}
            {/* <div className="mt-8 text-center">
                <h3 className="text-xl font-bold mb-2">
                    Still Exploring the Right Solution?
                </h3>
                <p className="text-gray-600 mb-4">
                    Our custom software development services are built around your goals—
                    be it automation, scalability, or innovation.
                </p>
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">
                    Schedule a Free Strategy Session
                </button>
                <div className="mt-4 text-gray-700">
                    <p>
                        Contact Us Today →{" "}
                        <a href="https://www.getraise.com" className="text-blue-600 underline">
                            www.getraise.com
                        </a>
                    </p>
                    <p>Call Now: +91 - 9374455555</p>
                </div>
            </div> */}
        </div>
    );
}
