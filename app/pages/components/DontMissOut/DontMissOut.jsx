import React from 'react'
import strCall from '../../assets/strCall.svg'

const DontMissOut = () => {
    return (
        <div className='px-10 py-16 my-16' style={{
            backgroundColor: '#FDEF9E'
        }}>

            <h1 className='md:w-[70%] font-light text-4xl md:text-7xl lg:text-9xl mb-5'>Don’t Miss Out on Growth!</h1>
            <p className='md:w-[50%] mb-10 px-2'>Join dozens of businesses already growing with us.
                Let’s build something powerful together.</p>
            <div className='flex items-center gap-5'>
                <h1 className='text-[32px] font-medium'>Book Free Strategy Call</h1>
                <img src={strCall} className='h-[50px] w-[50px]' alt="" />
            </div>
        </div>
    )
}

export default DontMissOut
