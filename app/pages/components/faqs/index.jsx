





import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the difference between UI and UX design?',
      answer:
        'UI (User Interface) focuses on how the product looks—layouts, buttons, typography. UX (User Experience) makes the product easy to use, understandable and capable of satisfying the user needs.',
    },
    {
      question: 'Why is UI/UX design important for my business?',
      answer:
        'Because an effective UI/UX design has the ability to enhance customer satisfaction and lower bounce rates as well as raise conversions. It is necessary in order to create trust and make people continually visit.',
    },
    {
      question: 'How long does a typical UI/UX project take?',
      answer:
        'Depending on the size of the project, it usually happens in 2-6 weeks on the majority of the small to medium projects. We provide explicit timing once we understand what you are trying to achieve.',
    },
    {
      question: 'Will your UI/UX design work on mobile too?',
      answer:
        'Absolutely. We have a mobile-first and responsive concept in design to guarantee proper performance on all devices: phones, tablets, and desktops.',
    },
    {
      question: 'Can I get UI/UX support after project delivery?',
      answer:
        'Yes! Getraise offers post-launch design iterations and ongoing design support to improve user engagement as your product grows.',
    },
  ];

  return (
    <div style={{
      backgroundImage: `url("/assets/faqhome.png")`,
    }} className=" mx-auto px-4 py-6">
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

      {/*  <div className="mt-12 text-center bg-blue-50 p-6 rounded-2xl shadow-md">
        <p className="text-lg md:text-xl font-semibold mb-4">
          Whether you are building a brand-new app or upgrading your existing
          website, <span className="text-blue-600">Getraise</span> is your
          trusted partner for custom web and app development.
        </p>
        <p className="font-medium text-gray-700 mb-4">
          Contact Us Today for a Free Demo or Quote
        </p>
        <p className="text-gray-900 font-semibold">
          📞 +91 - 9374455555 | 🌐 www.getraise.com
        </p>
      </div>*/}
     
    </div>
  );
}
