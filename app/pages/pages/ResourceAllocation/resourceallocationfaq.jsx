




import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I know if staff augmentation is right for my business?",
    answer:
      "Are you experiencing project delays, talent gaps, or unaffordable recruitment costs? Staff augmentation hiring enables you to boost your workforce with reliable talent, with no long-term obligations.",
  },
  {
    question: "Can I hire white label developers in India for a short-term project?",
    answer:
      "Yes. We can provide both short-term and long-term white label development services. Our flexible models ensure you get the talent you need, when you need it.",
  },
  {
    question: "Will your remote white label team work in my time zone?",
    answer:
      "Absolutely. The remote teams are part of our white label IT services, which adapt to your preferred time zone and tools to guarantee smooth interaction and real-time cooperation.",
  },
  {
    question:
      "How do you ensure the quality of white label app development or digital marketing work?",
    answer:
      "All our white label projects go through rigorous vetting, expert supervision, and continuous quality checks to maintain performance, consistency, and brand integrity.",
  },
  {
    question:
      "What if I need to scale my team up or down during the project?",
    answer:
      "With our white label resource allocation services, you can scale your team flexibly—add or remove developers, designers, or marketers according to your changing project requirements.",
  },
];

const StaffAugmentationFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (


    <div style={{
      backgroundImage: `url("/assets/faqhome.png")`,
    }} className=" mx-auto py-8 px-4">
      <h2 className="text-center text-4xl md:text-5xl font-poppins text-[#000] font-semibold mb-10 ">
        Frequently Asked Questions
      </h2>
      {/* <div className="flex items-center space-x-2 mb-5">
        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
        <h3 className="text-[1.5rem] font-bold ml-2 mb-0 augmenHeading">
          Industries We Serve
        </h3>
      </div>

      <h2 className="text-1xl md:text-2xl font-bold mb-3 text-start">Industry Ready Software - for Every <br /> Sector We Serve</h2> */}

      <div className="space-y-2 text-[#000]">
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

export default StaffAugmentationFAQ;

