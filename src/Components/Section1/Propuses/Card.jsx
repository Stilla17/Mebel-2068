import React from 'react'
import img from './../../../assets/Rectangle 11 (2).png';
import img2 from './../../../assets/4rxja2veeongo6g5n5gsux5x3q0iz7ac-transformed 1.png';
const Card = ({ text, color, price }) => {
    return (
        <div>
            <div className='w-[291px] h-[283px] flex justify-center items-center'>
                <img src={img2} alt="" />
            </div>
            <p className='font-bold mt-[10px]'>{text}</p>
            <p className='text-[14px] mt-[20px] text-[#00000080]' >{color}</p>
            <p className='mt-[20px] text-[20px]' >{price} руб</p>
        </div>
    )
}

export default Card