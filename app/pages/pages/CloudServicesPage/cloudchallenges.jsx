import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
    {
        question: "Struggling with data silors & manual Processesm ?",
        answer:
            "If your teams are struggling with disconnected systems, manual workflows, or spreadsheets, then it's time to take advantage of cloud migration that unifies operations.",
        link: "https://www.datacenters.com/news/remote-work-impact-of-cloud-technologies-on-collaboration"
    },
    {
        question: "Limited Scalability During Business Growth?",
        answer:
            "When your infrastructure can't keep up with peak traffic or growing user demands, scalable cloud solutions provide the flexibility to expand instantly — without renovating your systems."
    },
    {
        question: "Security & Data Backup Giving you Sleepless Nights?",
        answer:
            "Our cloud computing services are associated with built-in security, disaster recovery, and compliance — which means your data remains protected 24/7."
    },
    {
        question: "Remote work ,But No Real Cloud Infrastructure?",
        answer:
            "If your team works from different locations, then a cloud-based setup offers you real-time collaboration, file sharing, and access — anytime, anywhere."
    },
    {
        question: "Want to Reduce IT Costs Without Losing Effciency?",
        answer:
            "With our affordable cloud services in India, you will pay only for what you use — freeing up resources for innovation, not maintenance."
    }
];


const CloudChallenges = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="max-w-5xl mx-auto py-4 px-4">
            <h2 className="text-2xl md:text-4xl font-semibold text-center mb-8">
                Is Your Business Missing the Cloud Advantage?
            </h2>

            {/* Flexbox container */}
            <div className="flex flex-wrap gap-4 justify-center">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded-lg shadow-sm bg-white w-full md:w-[48%]"
                    >
                        <h3
                            onClick={() => toggleFAQ(index)}
                            className={`w-full text-left p-4 font-medium flex justify-between items-center cursor-pointer ${activeIndex === index ? "bg-blue-50 border-blue-400" : ""
                                }`}
                        >
                            <span>{item.question}</span>
                            <span>{activeIndex === index ? "−" : "+"}</span>
                        </h3>
                        {activeIndex === index && (
                            <div className="p-4 border-t text-gray-600">{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CloudChallenges;



