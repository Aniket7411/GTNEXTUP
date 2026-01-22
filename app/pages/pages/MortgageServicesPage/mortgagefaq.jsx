import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MortgageFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you provide mortgage services across all U.S. states?",
      answer:
        "Yes, we provide mortgage services nationwide across all 50 states. Our licensed mortgage professionals understand state-specific regulations and requirements, ensuring compliance whether you're buying in California, Texas, New York, Florida, or any other state. We're equipped to handle the unique aspects of each state's real estate market.",
    },
    {
      question: "What types of U.S. mortgage loans do you offer?",
      answer:
        "We offer a comprehensive range of U.S. mortgage products including FHA loans (Federal Housing Administration), VA loans (Veterans Affairs), USDA loans (rural areas), conventional loans, jumbo loans, fixed-rate mortgages, and adjustable-rate mortgages (ARMs). We also specialize in refinancing options including cash-out refinancing and rate-and-term refinancing.",
    },
    {
      question: "What credit score is needed for different U.S. mortgage programs?",
      answer:
        "Credit score requirements vary by loan type: Conventional loans typically require 620+, FHA loans may accept 580+ (sometimes lower with higher down payment), VA loans often have more flexible requirements, and USDA loans typically require 640+. Our team can help you understand which program best fits your credit profile and financial situation.",
    },
    {
      question: "How long does the mortgage process take in the U.S.?",
      answer:
        "The typical U.S. mortgage process takes 30-45 days from application to closing, though this can vary. FHA and VA loans may take slightly longer due to additional requirements. Factors affecting timeline include loan type, documentation completeness, appraisal scheduling, and market conditions. We work efficiently to expedite your process while ensuring all federal and state requirements are met.",
    },
    {
      question: "What are the down payment requirements for U.S. mortgages?",
      answer:
        "Down payment requirements vary: Conventional loans typically require 5-20%, FHA loans require as little as 3.5% with a 580+ credit score, VA loans offer 0% down for eligible veterans, USDA loans offer 0% down for rural properties, and jumbo loans typically require 10-20%. Many states also offer down payment assistance programs for first-time homebuyers.",
    },
    {
      question: "Can you help with mortgage refinancing in the U.S.?",
      answer:
        "Absolutely! We offer comprehensive refinancing services across America including rate-and-term refinancing to lower your interest rate, cash-out refinancing to access home equity, FHA streamline refinancing, and VA IRRRL (Interest Rate Reduction Refinance Loan). Our team evaluates your current mortgage, property value, and financial goals to find the best refinancing option for your situation.",
    },
  ];

  return (
    <div style={{
      backgroundImage: `url("/assets/faqhome.png")`,
    }} className="mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
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

