import React from 'react'

const Btn = ({text}) => {
  return (
    <button className='cursor-pointer p-[15px] transform hover:duration-[0.5s] hover:text-white rounded-[10px] hover:bg-[#363636]'>
        <p className='text-[16px] '>{text}</p>
    </button>
  )
}

export default Btn