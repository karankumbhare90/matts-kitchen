import React from 'react'
import { BsShopWindow } from "react-icons/bs";
import { MdOutlineHeadphones } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className='sm:h-[30vh] h-[20vh] flex flex-col text-white bg-[#130F0C]'>
            <div className='flex justify-between p-[20px] sm:p-[30px] gap-2 sm:border-b-4 border-b-2 border-[#D29A5A]'>
                <div className='flex gap-3 items-start'>
                    <BsShopWindow className='sm:text-[20px] text-[14px] text-[#D29A5A]' />
                    <div className='flex flex-col gap-1 '>
                        <span className='sm:text-[16px] text-[8px] text-[#D29A5A]'>FREE SHIPPING WORLDWIDE</span>
                        <p className='sm:text-[12px] text-[6px]'>Guaranteed Delivery</p>
                    </div>
                </div>
                <div className='flex gap-3 items-start'>
                    <MdOutlineHeadphones className='sm:text-[20px] text-[14px] text-[#D29A5A]' />

                    <div className='flex flex-col gap-1'>
                        <span className='sm:text-[16px] text-[8px] text-[#D29A5A]'>24/7 CUSTOMER SERVICE</span>
                        <p className='sm:text-[12px] text-[6px]'>Text Us 24/7 at 070-7782-9137</p>
                    </div>
                </div>
                <div className='flex gap-3 items-startx'>
                    <FaRegCheckCircle className='sm:text-[20px] text-[14px] text-[#D29A5A]' />
                    <div className='flex flex-col gap-1'>
                        <span className='sm:text-[16px] text-[8px] text-[#D29A5A]'>QUALITY GUARANTEE!</span>
                        <p className='sm:text-[12px] text-[6px]'>Send Within 30 Days</p>
                    </div>
                </div>
            </div>
            <div className='m-auto bg-[#130F0C] w-[90px]'>
                <img src={logo} alt="" className='w-[100%] object-cover aspect-auto' />
            </div>
        </div>
    )
}

export default Footer