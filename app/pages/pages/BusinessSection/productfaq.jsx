import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ChevronDown } from "lucide-react";


const faqsp = [
  {
    question: "What is SaaS?",
    answer:
      "SaaS (Software as a Service) is software delivered over the internet. No downloads or setup—just log in and start using it, like renting an app.",
  },
  {
    question: "Why choose SaaS?",
    answer:
      "SaaS is cost-effective. Instead of paying a large upfront fee, you pay a flexible subscription fee.",
  },
  {
    question: "Do I need to install anything to use SaaS software?",
    answer:
      "No installation needed. SaaS is cloud-based—you only need an internet connection and a web browser.",
  },
  {
    question: "Is SaaS software secure for my business data?",
    answer:
      "Yes. Trusted providers like Getraise Technologies use robust security measures such as encryption, access controls, and regular security updates to protect your data.",
  },
  {
    question: "What if I want to upgrade or add features later?",
    answer:
      "SaaS is scalable. You can easily upgrade plans, add features, or expand users as your business grows.",
  },
  {
    question: "What happens if I stop paying for my subscription?",
    answer:
      "Access may be suspended or restricted. However, most providers offer a grace period and allow you to export or back up your data before deactivation.",
  },
];












export default function ProductsFAQ() {
  const [openIndex, setOpenIndex] = useState(null);



  return (
    <div style={{
      backgroundImage: `url("./assets/faqhome.png")`,
    }} className=" mx-auto px-4 py-6">
      <div className="flex items-center space-x-2 mb-8 justify-center">
        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
        <h2 className="text-3xl font-semibold">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-2">
        {faqsp.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between items-center text-xl w-full p-4 text-left text-[#000] font-medium"
            >
              <span>
                {index + 1}. {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""
                  }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-600 border-t">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>


     
    </div>
  );
}


