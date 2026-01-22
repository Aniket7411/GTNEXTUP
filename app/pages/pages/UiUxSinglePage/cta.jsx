import React, { useState } from "react";

const data = [
  {
    title: "FInanceand Fintech",
    desc: "We craft UX design to simplify complicated banking, wallets, and investment apps with a focus on building trust.",
  },
  {
    title: "Healthcare&Healthtech",
    desc: "Patient portals, appointment systems, and dashboards are designed to be empathetic and easy to understand.",
  },
  {
    title: "Edcation&EdTech",
    desc: "Learning platforms, virtual classrooms, and LMS interfaces optimized for engagement and retention.",
  },
  {
    title: "Real Estate&prop Tech",
    desc: "Virtual tours, listing systems, and search experiences designed for easy to discover.",
  },
  {
    title: "sas-Enterprise",
    desc: "Data dashboards, onboarding, or admin systems that focus on ease of use at scale.",
  },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (

    <>

    <div className="flex items-center space-x-2 mb-3">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h2 className="text-[1rem] font-semibold ml-2 mb-0">
                            What Makes Us Different
                        </h2>
                    </div>
                    <h2 className="text-2xl font-semibold mt-2 mb-4">E-commerce and retail</h2>
           
    <div className="w-full mx-auto border border-gray-200 rounded-md">

          
      {data.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          {/* Header */}
          <h3
            onClick={() => toggle(index)}
            className={`flex justify-between items-center w-full px-4 py-3 text-left text-lg md:text-2xl lg:text-4xl font-thin cursor-pointer
              ${activeIndex === index ? "bg-yellow-200" : "bg-white"} 
              hover:bg-yellow-100 transition`}
          >
            {item.title}
            <span className="text-lg">{activeIndex === index ? "▲" : "▼"}</span>
          </h3>

          {/* Content */}
          {activeIndex === index && (
            <div className="px-4 py-3 text-sm text-gray-600">{item.desc}</div>
          )}
        </div>
      ))}
    </div>
    </>
  );
}
