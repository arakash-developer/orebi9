import React from 'react'
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import { TfiReload } from 'react-icons/tfi'

const Text = ({productName, color, price})=> {
  return(
    <>
    <div className='md:pt-6 pt-3 w-full '>
      <div className="flex justify-between items-center mb-1 md:mb-[15px]">
        <h3 className='text-xs md:text-xl text-[#262626] md:font-bold font-medium leading-[187.5%]'>
        {productName}
        </h3>
        <p className='text-xs md:text-xl text-[#767676] font-normal leading-[187.5%]'>
        ${price}
        </p>
      </div>
      <p className='text-xs md:text-xl text-[#767676] font-normal leading-[187.5%]'>
      {color}
      </p>
    </div>
    </>
  )
}

const Overlay = ()=> {
  return(
    <>
    <div className="absolute bottom-0 left-0 w-full flex flex-col md:gap-5 gap-2 md:px-[30px] md:py-[25px] p-2 bg-white transition-all duration-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
      <div className="flex items-center md:gap-4 gap-2 ml-auto">
        <p className='md:text-base text-xs text-[#767676] transition-all duration-300 hover:text-[#262626] md:hover:font-bold hover:font-medium'>
        Add to Wish List
        </p>
        <FaHeart className='md:text-sm text-[10px] text-[#262626]'/>
      </div>
      <div className="flex items-center md:gap-4 gap-2 ml-auto">
        <p className='md:text-base text-xs text-[#767676] transition-all duration-300 hover:text-[#262626] md:hover:font-bold hover:font-medium'>
        Compare
        </p>
        <TfiReload className='md:text-sm text-[10px] text-[#262626]'/>
      </div>
      <div className="flex items-center md:gap-4 gap-2 ml-auto">
        <p className='md:text-base text-xs text-[#767676] transition-all duration-300 hover:text-[#262626] md:hover:font-bold hover:font-medium'>
        Add to Cart
        </p>
        <FaCartPlus className='md:text-sm text-[10px] text-[#262626]'/>
      </div>
    </div>
    </>
  )
}

const ProductCard = ({src, productName, price, color, tag, className}) => {
  return (
    <div className={`md:w-[370px] w-[175px] group ${className}`}>
      <div className="img w-full md:h-[370px] h-[175px] relative overflow-hidden bg-[#F5F5F3]">
        <img src={src} alt="" className='w-full h-full object-contain'/>
        <Overlay />
        <button className={`md:px-8 md:py-2 py-1 px-4 bg-[#262626] text-[9px] md:text-sm text-white md:font-bold font-medium absolute top-2 left-2 md:top-5 md:left-6 z-40 ${ tag ? "block" : "hidden" }`}>
          - {tag} %
        </button>
      </div>
      <Text productName={productName} price={price} color={color}/>
    </div>
  )
}

export default ProductCard