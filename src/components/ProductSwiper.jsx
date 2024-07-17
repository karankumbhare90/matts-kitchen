import React, { useState } from 'react';
import productData from '../data/productData';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import './Swiper.css';

const Swiper = () => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % productData.length);
    };

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + productData.length) % productData.length);
    };

    return (
        <div className="relative overflow-hidden max-h-[700px] w-full m-auto bg-[#130F0C] px-[2rem]">
            <button className="swiper-button-prev" onClick={handlePrev}>
                <MdKeyboardDoubleArrowLeft />
            </button>
            <div className="flex transition duration-500 ease-in-out" style={{ transform: `translateX(${-index * 25}%)` }}>
                {productData.concat(productData).map((item, idx) => (
                    <div className="flex items-center justify-center flex-col gap-4 swiper-slide" key={idx}>
                        <div className='sm:h-[200px] sm:w-[200px] w-[100px] h-[100px] '>
                            <img src={item.src} alt={item.alt} className="w-[100%] h-[100%] object-cover slide-image" />
                        </div>
                        <h3 className='text-[11px] sm:text-[16px] text-[#D29A5A]'>{item.title}</h3>
                        <p className='mt-[-10px] text-[9px] sm:text-[12px] text-white'><strike>{item.price.substring(0, 6)}</strike> &nbsp;&nbsp; {item.price.substring(7)}</p>
                    </div>
                ))}
            </div>
            <button className="swiper-button-next" onClick={handleNext}>
                <MdKeyboardDoubleArrowRight />
            </button>
        </div>
    );
};

export default Swiper;
