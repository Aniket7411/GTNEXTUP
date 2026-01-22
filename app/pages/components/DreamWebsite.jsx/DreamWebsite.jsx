import React from 'react'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import './dreamWeb.css'

const DreamWebsite = () => {
  return (
    <div className='text-center flex flex-col justify-center dreamWeb text-white' style={{
        marginTop:'4rem'
    }}>
      <h4 className='text-4xl mb-2'>Get Your Dream Website Today!</h4>
      <p className='text-xl mb-7'>Join 5000+ Happy Customer from worldwide</p>
      <div>
       <ButtonPrimary name={"Get Exact Quotation!"}/>
 
      </div>
    </div>
  )
}

export default DreamWebsite
