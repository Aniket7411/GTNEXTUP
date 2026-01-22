import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSectionweb() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What kind of websites and apps do you develop?",
      answer:
        "We build everything— from landing pages, eCommerce projects, as well as in-house to mobile applications.",
    },
    {
      question: "Do you provide both iOS and Android app development?",
      answer:
        "Yes. We create both native iPhone/iPad and Android applications and cross-platform ones based on such technologies as Flutter and React Native.",
    },
    {
      question: "How long does it take to develop a website or app?",
      answer:
        "Timelines vary, but a standard app or site takes 4–10 weeks depending on features, design, and integration needs.",
    },
    {
      question: "Will my app/website be scalable?",
      answer:
        "Absolutely. We apply contemporary tech stacks to make your digital product expand along with your business.",
    },
    {
      question: "Can I make changes after the project is live?",
      answer:
        "Yes. We provide after deployment services and further redesign and upgrades as per the changing requirements.",
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
