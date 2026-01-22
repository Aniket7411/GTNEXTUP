



import React, { useState } from 'react';
const faqs = [
  {
    question: "What does a Salesforce development company do?",
    answer:
      "We develop, configure, and optimize Salesforce CRM to advance work processes and customer experience.",
  },
  {
    question: "Do I need Salesforce for my business?",
    answer:
      "Yes, if you want better customer data management, automatic sales, and scalable CRM solutions.",
  },
  {
    question: "Can I hire Salesforce developers for small tasks?",
    answer:
      "You may hire our certified developers on short-term or full projects, according to your needs.",
  },
  {
    question: "Is Salesforce secure?",
    answer:
      "Absolutely. Salesforce development at Getraise offers top-tier security, and we add extra layers to keep your data safe.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We offer affordable Salesforce development services with flexible pricing models.",
  },
];

const CustomFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (


    <div style={{
      backgroundImage: `url("/assets/faqhome.png")`,
    }} className=" mx-auto py-8 px-4">
      <div className="flex items-center space-x-2 mb-10 justify-center">
        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
        <h2 className="text-center text-4xl md:text-5xl font-poppins text-[#000] font-semibold">
          Frequently Asked Questions
        </h2>
      </div>
      {/* <div className="flex items-center space-x-2 mb-5">
        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
        <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
          Industries We Serve
        </h3>
      </div>

      <h2 className="text-1xl md:text-2xl font-bold mb-3 text-start">Industry Ready Software - for Every <br /> Sector We Serve</h2> */}

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 my-2 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 focus:outline-none flex justify-between items-center"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700 transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>


    </div>
  );
};

export default CustomFAQSection;
