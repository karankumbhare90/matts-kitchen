import React, { useContext, useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo.png';
import { BiShoppingBag } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { SidebarContext } from '../contexts/SidebarContext';

const Navbar = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const [activeLink, setActiveLink] = useState('');

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className={`absolute z-20 h-[90vh] ${isOpen ? 'w-[250px] items-start' : 'sm:w-[110px] w-[60px] items-center border-r-[3px] border-[#D29A5A]'} bg-[#130F0C] bg-opacity-90 flex flex-col justify-between transition-width duration-300`}>
            <div className={isOpen ? `flex justify-between flex-col items-start py-4` : `flex justify-between flex-col items-center p-4`}>
                <button onClick={toggleNavbar} className=''>
                    {isOpen ? <FaTimes className="text-white h-[20px] w-[20px] ml-[50px] z-10" /> : <FaBars className="text-white h-[20px] w-[20px]" />}
                </button>
                <div className={isOpen ? "h-[80px] w-[240px] mb-[-10px]" : "h-[230px] sm:h-[150px] sm:w-[400px] w-[175px] mt-[250px] sm:mt-[160px]"}>
                    {<img src={logo} alt='Logo' className={isOpen ? "" : "rotate-[-90deg] h-full w-full object-contain"} />}
                </div>
            </div>
            {isOpen && (
                <div className="flex flex-col items-start justify-start space-y-4 text-white mt-[-80px] pl-[20px]">
                    <a href="#home" className={`font-semibold whitespace-nowrap ${activeLink === '#home' ? 'text-[#D29A5A]' : ''}`} onClick={() => handleLinkClick('#home')}>HOME</a>
                    <a href="#products" className={`font-semibold whitespace-nowrap ${activeLink === '#products' ? 'text-[#D29A5A]' : ''}`} onClick={() => handleLinkClick('#products')}>PRODUCTS</a>
                    <a href="#meet" className={`font-semibold whitespace-nowrap ${activeLink === '#meet' ? 'text-[#D29A5A]' : ''}`} onClick={() => handleLinkClick('#meet')}>MEET CHEF MATT</a>
                    <a href="#faq" className={`font-semibold whitespace-nowrap ${activeLink === '#faq' ? 'text-[#D29A5A]' : ''}`} onClick={() => handleLinkClick('#faq')}>FAQ</a>
                    <a href="#contact" className={`font-semibold whitespace-nowrap ${activeLink === '#contact' ? 'text-[#D29A5A]' : ''}`} onClick={() => handleLinkClick('#contact')}>CONNECT WITH US</a>
                </div>
            )}
            {isOpen && (
                <div className="flex w-full flex-col items-center justify-end text-white">
                    <p className='px-[20px] text-[14px] font-[450] whitespace-nowrap'>Top Support Line: <a href="tel:+123-456-7890" className="text-[#D29A5A]">+123-456-7890</a></p>
                    <div className="flex items-center justify-evenly mt-4 border-t-[1px] w-full p-2">
                        <button className="flex items-center gap-2"><BiShoppingBag /><span>CART</span></button>
                        <button className="flex items-center gap-2"><FaRegHeart /><span>WISHLIST</span></button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
