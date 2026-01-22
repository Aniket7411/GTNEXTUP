import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function IndustryAccordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const sectors = [
        {
            title: "E-commerce & Retail",
            desc: "From product discovery to checkout, we design buying flows that decrease friction and boost sales.",
        },
        {
            title: "Finance and Fintech",
            desc: "We craft UX design to simplify complicated banking, wallets, and investment apps with a focus on building trust.",
        },
        {
            title: "Healthcare & Healthtech",
            desc: "Patient portals, appointment systems, and dashboards are designed to be empathetic and easy to understand.",
        },
        {
            title: "Education & EdTech",
            desc: "Learning platforms, virtual classrooms, and LMS interfaces optimized for engagement and retention.",
        },
        {
            title: "Real Estate & PropTech",
            desc: "Virtual tours, listing systems, and search experiences designed for easy discovery.",
        },
        {
            title: "SaaS & Enterprise",
            desc: "Data dashboards, onboarding, or admin systems that focus on ease of use at scale.",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="flex items-center space-x-2 mb-2">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                <h3 className="text-[1rem] font-semibold ml-2 mb-0 augmenHeading">
                    Industries We Serve
                </h3>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#000] mb-6 ">
                Industry Ready Software – for Every <br /> Sector We Serve
            </h2>

            <div className="space-y-3">
                {sectors.map((sector, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className={`w-full flex justify-between  items-center p-3 text-left text-4xl transition-all ${openIndex === index ? "bg-yellow-100 text-gray-900" : "bg-white text-gray-800"
                                }`}
                        >
                            {sector.title}
                            <ChevronDown
                                className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        {openIndex === index && (
                            <div className="p-4 text-gray-600 text-base border-t bg-gray-50">
                                {sector.desc}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
