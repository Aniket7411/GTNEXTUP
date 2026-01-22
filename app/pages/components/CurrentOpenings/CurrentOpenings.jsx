"use client";
import React, { useState } from 'react'


import learning from "../../assets/learning.svg"
import construction from "../../assets/construction.svg"
import clinics from "../../assets/clinics.svg"
import services from "../../assets/services.svg"
import retail from "../../assets/retail.svg"
import arup from "../../assets/arup.png"
import { useRouter } from 'next/navigation'


const CurrentOpenings = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const router = useRouter();



    const assignments = [
        // { text: "Senior Developer", info: "In office - Full time", link: "senior-developer" },
        // { text: "Video Editor", info: "In office - Full time", link: "video-editor" },
        // { text: "Business Development Manager", info: "Remote / Office-Based", link: "business-development-manager" },
        { text: "Project Manager (AI)", info: "In office - Full time", link: "project-manager-ai" },
        { text: "Project Manager (UI)", info: "In office - Full time", link: "project-manager-ui" },
        { text: "Senior AI Developer", info: "Remote / Office-Based", link: "senior-ai-developer" },
        { text: "Senior Backend Developer", info: "Remote / Office-Based", link: "senior-backend-developer" },
        { text: "Senior Frontend Developer", info: "Remote / Office-Based", link: "senior-frontend-developer" },
        { text: "AI Developer", info: "In office - Full time", link: "ai-developer" },
        { text: "Frontend Developer", info: "In office - Full time", link: "frontend-developer" },
        { text: "Backend Developer", info: "In office - Full time", link: "backend-developer" },
        { text: "DevOps Lead", info: "Remote / Office-Based", link: "devops-lead" },
        { text: "Junior DevOps Developer", info: "In office - Full time", link: "junior-devops-developer" },
        { text: "UI/UX Head", info: "Remote / Office-Based", link: "ui-ux-head" },
        { text: "UI Designer", info: "In office - Full time", link: "ui-designer" },
        { text: "Quality Analyst Lead", info: "Remote / Office-Based", link: "quality-analyst-lead" },
        { text: "Quality Analyst", info: "In office - Full time", link: "quality-analyst" },
        { text: "Senior Data Analyst", info: "Remote / Office-Based", link: "senior-data-analyst" },
        { text: "Data Analyst", info: "In office - Full time", link: "data-analyst" },
        { text: "Customer Support Executive", info: "In office - Full time", link: "customer-support-executive" },
        { text: "Senior Blockchain Developer", info: "Remote / Office-Based", link: "senior-blockchain-developer" },
        { text: "Junior Blockchain Developer", info: "In office - Full time", link: "junior-blockchain-developer" }
    ];


    return (
        <>

            <div className=" pt-5 ">

                <p style={{
                    fontFamily: "Poppins"
                }} className="text-xl  font-bold mb-2">
                    Careers
                </p>
                <div className="flex flex-col mb-4 md:flex-row justify-between md:items-start gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold">Current Openings</h2>
                    <p className="text-[#585858] md:max-w-xl text-md lg:text-xl font-medium leading-relaxed  ">
                        Explore exciting career opportunities at Getraise Technologies.
                        We’re hiring driven, creative, and forward-thinking individuals
                        ready to shape the future with us. Find the role that fits you best
                        and take the next step in your career journey.
                    </p>
                </div>
            </div>
            <div className="w-full border-t mx-auto py-6 px-4">


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {assignments.map((item, index) => (
                        <div
                            key={index}

                            className="bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer hover:bg-[#FDEF9E] transition-all duration-300"
                            onMouseEnter={() => setHoveredItem(item.image)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <div className='p-3 bg-[#F5F5F5] rounded-2xl'>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-[#000000]">{item.text}</h3>
                                <p className="text-sm md:text-base text-[#585858] mb-4">{item.info}</p>
                                <button
                                    onClick={() => { router.push(`/jobs/${item.link}`) }}
                                    className="bg-[#FEEE99] px-4 py-1 rounded-md font-medium text-sm text-[#000000] hover:bg-[#FEEE99] transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>

    )
}

export default CurrentOpenings