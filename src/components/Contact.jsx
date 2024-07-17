import React, { useContext } from 'react';
import imageBanner1 from '../assets/c-1.jpg';
import imageBanner2 from '../assets/c-2.jpg';
import imageBanner3 from '../assets/c-3.jpg';
import imageBanner4 from '../assets/c-4.jpg';
import './Contact.css';
import { SidebarContext } from '../contexts/SidebarContext';

const Contact = () => {
    const { isOpen } = useContext(SidebarContext);

    return (
        <div className={`mt-4 w-full`}>
            {/* First Container */}
            {isOpen && (
                <div className='sm:h-[50vh] h-[25vh] w-full flex flex-col'>
                    <div className='flex h-[50%] sm:h-[50%] w-full'>
                        <div className='h-[100%] w-[50%] bg-white flex justify-between items-center'>
                            <div className='px-[10px] sm:px-[15px] sm:w-[60%] w-[90%]'>
                                <h1 className='text-[9px] pb-3 font-semibold sm:text-[14px]'>SUBSCRIBE & SAVE</h1>
                                <p className='text-[6px] sm:text-[13px]'>Join Chef Matt’s Monthly Subscription <br />
                                    and bring world class chef quality <br />
                                    meals to your home.</p>
                            </div>
                            <img src={imageBanner1} alt="Banner1" className='h-[100%] w-[100%] object-contain sm:mr-[-120px] mr-[-20px]' />
                        </div>
                        <img src={imageBanner2} alt="Banner2" className='h-[100%] w-[50%] object-cover bg-top' />
                    </div>
                    <div className='flex h-[55%] sm:h-[50%] w-full'>
                        <img src={imageBanner3} alt="Banner3" className='h-[100%] w-[50%] object-cover' />
                        <img src={imageBanner4} alt="Banner4" className='h-[100%] w-[50%] object-cover' />
                    </div>
                </div>
            )}

            {/* Second Container */}
            <div className='sm:h-[50vh] h-[25vh] sm:w-full contactbg'>
                <div className='h-[100%] w-[100%] text-white bg-opacity-50 bg-[#000] flex item-center'>
                    <form className='flex gap-3 flex-col justify-center sm:mx-[50px] mx-[30px]'>
                        <h1 className='sm:text-[25px] text-[14px] font-[400] sm:w-[35%] pb-1 w-[75%] border-b-2'>SIGN UP SPECIAL PROMOTIONS</h1>
                        <p className='sm:text-[14px] text-[8px]'>Get exclusive deals you won’t find anywhere else straight to your inbox!</p>
                        <div className='flex gap-3 items-center'>
                            <input type="text" className='bg-transparent border-[2px] w-[45%] sm:placeholder:text-[14px] placeholder:text-[11px] placeholder:text-white px-1 sm:py-1' placeholder='Enter email address' />
                            <button type="button" className='bg-[#D29A5A] px-1 sm:py-1 py-[4px] sm:text-[16px] text-[12px]'>Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
