import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider4.jpg';
import "./Hero.css";

const Hero = () => {
    const images = [
        { src: slider1, alt: "Slider 1" },
        { src: slider2, alt: "Slider 2" },
        { src: slider3, alt: "Slider 3" },
        { src: slider4, alt: "Slider 4" }
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
        <div {...swipeHandlers} className="carousel">
            {images.map((item, idx) => (
                <img
                    src={item.src}
                    alt={item.alt}
                    key={idx}
                    className={slide === idx ? "slide" : "slide slide-hidden"}
                />
            ))}
            <span className="indicators">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                        onClick={() => setSlide(idx)}
                    ></button>
                ))}
            </span>

            <button type="button" className="absolute bottom-[100px] border-2 text-white px-[30px] py-[7px]">
                Meet Chef Matt
            </button>

        </div>
    );
};

export default Hero;