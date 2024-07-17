import React from 'react'
import leaves from '../assets/leaves.png'
import ProductSwiper from './ProductSwiper'

const Products = () => {
    return (
        <div className='sm:h-[90vh] h-[60vh] flex flex-col'>
            <div className='w-[100%] sm:w-[50%] relative'>
                <img src={leaves} alt="Leaves" className='absolute top-[-100px] sm:w-[350px] w-[300px] sm:top-[-110px]' />
                <div className='pl-[30px] sm:pl-[40px] sm:mt-[150px] mt-[120px] w-[80%] flex flex-col'>
                    <h1 className='sm:text-4xl text-2xl pb-2 w-[80%] font-semibold text-[#D29A5A] border-b-[3px] border-[#D29A5A] z-i'>CHEF MATT PRODUCTS</h1>
                    <p className='sm:mt-[70px] mt-[60px] text-[14px] sm:text-[15px] w-[115%] text-white'>
                        Shop Gourmet Chef Quality products from the Chef Matt brand. Chef it yourself and Thank us later.
                    </p>
                </div>
            </div>
            <div className='bg-gray-400 mt-3'>
                <ProductSwiper />
            </div>
        </div>

    )
}

export default Products