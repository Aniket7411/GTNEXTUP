import React from 'react'

const ButtonPrimary = ({name}) => {
  return (
    <button className='p-3 rounded-2xl text-black font-medium px-4 text-[20px]' style={{
        backgroundColor:'#FDEF9E'
    }}>
    {name}
    </button>
  )
}

export default ButtonPrimary
