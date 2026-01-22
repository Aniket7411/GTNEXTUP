import React from 'react'

import li from '../../assets/li.svg'

const StaffAugmentation = () => {
    return (

        <>



            <div className="flex flex-col lg:flex-row items-center justify-between mt-10 gap-8">
                {/* Left Section */}
                <div className="flex-1">
                    {/* Title with Yellow Dot */}
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        <h2 className="text-xl md:text-3xl font-semibold text-gray-900">
                            What's the Difference?
                        </h2>
                    </div>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-800 font-medium mb-6">
                        Bridge Skill Gaps, Expand Your Workforce Efficiently
                    </p>

                    {/* Image */}
                    <img
                        src="/assets/staffAug.svg"
                        alt="Resource vs Staff Augmentation"
                        className="w-full max-w-md lg:max-w-lg h-[250px] rounded-lg shadow-md object-cover"
                    />
                </div>

                {/* Right Section */}
                <div className="flex-1 space-y-4 text-gray-700 gap-2  text-base md:text-lg">
                    <p className='mb-2'>
                        <strong>Resource Allocation:</strong> We allocate our in-house professional experts—such as designers, developers, marketers, or project managers—to work directly on your projects. These experts are fully managed by GetRaise and operate under our name and processes.
                    </p>
                    <p className='mb-2'>✔ Best for businesses that desire fast onboarding, hands-off execution, and project-based control.</p>
                    <p className='mb-2'>
                        <strong>Staff Augmentation:</strong> We hire white-label developers in India on your behalf, but they work under your brand, report directly to you, and become a virtual extension of your team. You control the workflow, tools, and communication, while we handle HR processes, payroll, and infrastructure.
                    </p>
                </div>
            </div>


        </>
    )
}

export default StaffAugmentation
