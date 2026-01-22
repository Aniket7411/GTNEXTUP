






import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CloudFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the cloud services?",
      answer:
        "Cloud services enable you to store, control, and get access to the data or the applications remotely without use of physical servers.",
    },
    {
      question: "Why should I move my business to the cloud?",
      answer:
        "Because it decreases IT expenses, increases scalability, and it enables secure access to your data and tools remotely.",
    },
    {
      question: "Is cloud data secure?",
      answer:
        "Yes, we implement encryption, firewalls, and regular backups to ensure complete data protection.",
    },
    {
      question: "Can I migrate my existing system to the cloud?",
      answer:
        "Absolutely. Our team provides smooth migration without disrupting your current operations.",
    },
    {
      question: "Do you offer custom cloud solutions?",
      answer:
        "Yes, Getraise offers flexible, scalable, customizable cloud-based infrastructure depending on the needs of your business.",
    },
  ];

  return (
    <div style={{
      backgroundImage: `url("./faqhome.png")`,
    }} className=" mx-auto px-4 py-6">
      <div className="flex items-center space-x-2 mb-8 justify-center">
        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
        <h2 className="text-3xl font-semibold">
          Frequently Asked Questions
        </h2>
      </div>

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
