import React from "react";

const sectors = [
    {
        title: "Healthcare",
        content:
            "Salesforce helps us to streamline patient management, automate appointment scheduling, and enable HIPAA-compliant data handling. Our solutions also give access to reports, prescriptions, and follow-ups.",
        img: "/assets/crms.jpeg",
    },
    {
        title: "Retail & e commerce",
        content:
            "Our solutions help manage inventory, automate customer engagement, and boost sales through personalized shopping experiences.",
        img: "/assets/crmcard2.png",
    },
    {
        title: "Financal services searvise",
        content:
            "We provide tools for secure transactions, customer data management, and regulatory compliance tailored to finance companies.",
        img: "/assets/crmcard3.png",
    },
    {
        title: "Logistic  and supply chain",
        content:
            "Optimize supply chain management, shipment tracking, and communication with stakeholders for smooth logistics operations.",
        img: "/assets/crmcard4.png",
    },
];

const SectorCards = () => {
    return (
        <>
            {/* Top Banner */}
            <div
                className="relative w-full h-[300px] mt-7 flex flex-col justify-start     items-start p-4  text-white"
                style={{
                    backgroundImage: `url('/assets/handshake.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10">

                    <div className="flex items-center space-x-2 mb-2">
                        <div className="w-5 h-5 bg-yellow-500 mr-2 rounded-full"></div>
                        <h2 className="text-3xl font-bold ">Smart crm for Smart Businesses</h2>

                    </div>

                    <p className="max-w-xl mx-auto text-lg">
                        How We Tailor Salesforce Solutions for Every Sector
                    </p>


                </div>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-6 p-6 -mt-45">
                {sectors.map((sector, index) => (
                    <div
                        key={index}
                        className="group  md:w-56 md:h-64 rounded-xl shadow-lg relative cursor-pointer overflow-hidden transition-all duration-300"
                        style={{ backgroundColor: "#2E2E2E" }}
                    >
                        {/* Default View (Image + Title) */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 group-hover:opacity-0">
                            <img
                                src={sector.img}
                                alt={sector.title}
                                className="w-12 h-12 object-contain"
                            />
                            <h3 className="text-white text-lg font-semibold text-center">
                                {sector.title}
                            </h3>
                        </div>

                        {/* Hover Content */}
                        <div
                            className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ backgroundColor: "#FDEF9E" }}
                        >
                            <p className="text-black text-sm text-center">{sector.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectorCards;
