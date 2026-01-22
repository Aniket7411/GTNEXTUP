import React from "react";
import { CheckCircle } from "lucide-react";

const mortgageData = [
    {
        title: "First-Time Homebuyers in USA: Your Path to Homeownership",
        img: "/assets/card1.jpg",
        description:
            "We specialize in helping first-time homebuyers across America navigate the mortgage process with confidence. Our team provides education, guidance, and access to federal and state-specific programs designed to make homeownership achievable.",
        points: [
            "FHA loans with 3.5% down payment for credit scores 580+",
            "State-specific first-time homebuyer programs and down payment assistance",
            "VA loans with 0% down for eligible veterans and service members",
            "USDA loans for rural properties with 0% down payment",
        ],
        wedo: "We Offer"
    },
    {
        title: "Mortgage Refinancing Across America",
        img: "/assets/card2.jpg",
        description:
            "Whether you want to lower your monthly payment, reduce your interest rate, shorten your loan term, or access home equity, our refinancing solutions help you achieve your financial goals across all U.S. states.",
        points: [
            "Rate-and-term refinancing to lower monthly payments and interest rates",
            "Cash-out refinancing to access home equity (up to 80% LTV)",
            "FHA streamline refinancing for existing FHA borrowers",
            "VA IRRRL (Interest Rate Reduction Refinance Loan) for veterans",
        ],
        wedo: "We Provide"
    },
    {
        title: "Investment Property Mortgages in USA",
        img: "/assets/card3.jpg",
        description:
            "We offer specialized mortgage solutions for real estate investors looking to purchase rental properties, fix-and-flip projects, multi-family properties, or commercial real estate across the United States.",
        points: [
            "Investment property loans with competitive rates (typically 20-25% down)",
            "Portfolio loans for investors with multiple properties",
            "Commercial mortgage solutions for business properties",
            "DSCR (Debt Service Coverage Ratio) loans for rental properties",
        ],
        wedo: "Our Solutions Include"
    },
    {
        title: "Jumbo Loans: Luxury Home Financing in USA",
        img: "/assets/card4.jpg",
        description:
            "For high-value properties that exceed conventional loan limits ($766,550 in most areas, up to $1,149,825 in high-cost areas), we provide jumbo loan solutions with flexible terms and competitive rates for luxury home purchases nationwide.",
        points: [
            "Jumbo loans for properties above conventional conforming loan limits",
            "Flexible underwriting for high-net-worth individuals",
            "Competitive rates and terms for luxury properties in all states",
            "Portfolio jumbo loans for unique property types",
        ],
        wedo: "We Specialize In"
    },
];

const MortgageCards = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                <h2 className="text-[1.2rem] ml-2 mb-0 augmenHeading">
                    Mortgage Solutions
                </h2>
            </div>
            <p className="text-1xl md:text-3xl font-semibold mb-6 text-start">
                Tailored Mortgage Services for Every <br />Homebuyer and Investor
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mortgageData.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-lg p-3 shadow-sm bg-white overflow-hidden"
                    >
                        <h3 className="text-2xl w-[68%] font-semibold mb-2">{item.title}</h3>

                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-lg"
                        />

                        <div className="p-5">
                            <p className="text-gray-600 mb-4">{item.description}</p>

                            <p className="font-semibold my-1">{item.wedo}:</p>

                            {item.points.length > 0 && (
                                <ul className="space-y-2">
                                    {item.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                                            <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MortgageCards;

