import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable';
import slider1 from '../assets/featuredProduct.jpg';
import slider2 from '../assets/featuredProduct.jpg';
import slider3 from '../assets/featuredProduct.jpg';
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
    const images = [
        { src: slider1, alt: "Slider 1" },
        { src: slider2, alt: "Slider 2" },
        { src: slider3, alt: "Slider 3" }
    ];

    const [slide, setSlide] = useState(0);

    const handleNext = () => {
        setSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const handlePrev = () => {
        setSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev
    });

    return (
        <div {...swipeHandlers} className="h-[20vh] sm:h-[45vh] relative flex items-center justify-center w-full sm:mt-[50px] bg-[#fff]">
            {images.map((item, idx) => (
                <img x
                    src={item.src}
                    alt={item.alt}
                    key={idx}
                    className={slide === idx ? "w-[100%] h-[100%] object-cover pt-[2rem]" : "w-[100%] h-[100%] object-cover hidden pt-[2rem]"}
                />
            ))}

            <div className='absolute flex flex-col items-center gap-2 px-[10px] w-[80%]'>
                <h1 className="text-[12px] sm:text-[22px] font-[450px]">ONLINE ONLY</h1>
                <hr className='bg-[#000] font-semibold w-[20%] h-[3px]' />
                <p className='text-[10px] sm:text-[16px] text-center px-[50px]'>GET 20% OFF YOUR ORDER OF $50 OR MORE
                    <br />Use code <b>“Chef20”</b>
                </p>
                <button className='mt-[15px] text-[10px] sm:text-[16px] text-center border-[1px] border-[#000] px-[25px] sm:px-[70px] py-[10px] sm:py-[10px]'>Shop Now</button>
            </div>
            <span className="flex absolute bottom-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                        onClick={() => setSlide(idx)}
                    ></button>
                ))}
            </span>
        </div>
    );
}

export default FeaturedProducts