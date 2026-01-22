import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        question: "Why is Getraise one of the leading digital marketing agencies in India?",
        answer:
            "We use a data-driven approach, performance marketing, and expert services to drive actual and measurable outcomes across SEO, advertising, and social media.",
    },
    {
        question: "What is your free digital marketing audit?",
        answer:
            "Your free audit reviews your website's existing performance including ads, and SEO, and shows you precisely where our digital marketing services can have the greatest impact. No cost. No commitment.",
    },
    {
        question: "Do you have custom digital marketing services?",
        answer:
            "Yes. Each company is unique. We provide custom digital marketing solutions that fit your specific objectives, sector, and budget.",
    },
    {
        question: "Which platforms do you handle on ads?",
        answer:
            "Getraise is a Google and Meta ads agency; that specializes in Google Ads, Meta Ads, and Social Media Ads services to generate quick and targeted traffic.",
    },
    {
        question: "Do you warrant leads or conversions?",
        answer:
            "Being a performance marketing agency, we do not give false promises. But what we can promise is transparency, real-time reporting, and campaigns that are designed to convert.",
    },
     {
        question: "What should I do to commence your digital marketing support?",
        answer:
            "Simple! Complete the form to get a free audit and our team of digital marketing specialists will respond with further details.",
    },
];

export default function DMFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            style={{
                backgroundImage: `url("./assets/faqhome.png")`,
            }}
            className="mx-auto px-4 bg-[#fff] sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10">
            <h2 className="text-xl text-[#000] sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-10 mt-4 sm:mt-5 px-4">
                Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-3 sm:gap-4 max-w-5xl mx-auto">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-300 rounded-lg shadow-sm"
                    >
                        {/* Question row */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center px-3 sm:px-4 py-3 sm:py-4 text-left text-base sm:text-lg font-medium text-gray-800 hover:bg-gray-100 transition-colors"
                        >
                            <span className="pr-4">{index + 1}. {faq.question}</span>
                            <FaChevronDown
                                className={`transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Answer */}
                        {openIndex === index && (
                            <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-gray-600 text-sm sm:text-base leading-relaxed">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
