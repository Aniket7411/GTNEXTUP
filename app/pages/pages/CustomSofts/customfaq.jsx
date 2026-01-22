

import React, { useState } from 'react';

const faqs = [
  {
    question: "How long does custom software take to build?",
    answer:
      "Timelines vary, but most of the custom projects take between 4 to 16 weeks, depending on features and complexity.",
  },
  {
    question: "What if I only have an idea but no technical knowledge?",
    answer:
      "No worries! We support you through planning to presentation — through consultancy and wireframes.",
  },
  {
    question: "What is the price of custom software development?",
    answer:
      "Costs depend on scope, but we offer affordable packages and transparent pricing with no hidden fees.",
  },
  {
    question: "Are you giving post-launch software support?",
    answer:
      "Yes. We also provide support after launch, bug resolutions, upgrades, and adding features.",
  },
  {
    question: "Is it possible to scale or upgrade my current software?",
    answer:
      "Absolutely. We also deal with modernization, migration, and upscaling of legacy systems.",
  },
];

const FAQSection10 = () => {
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

export default FAQSection10;
