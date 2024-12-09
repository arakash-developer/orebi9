import React, { useEffect, useState } from 'react'
import Container from '../Layers/Container'
import Logo from '../Layers/Logo'
import Logo_image from '/Common Images/Logo.png'
import Li from '../Layers/Li'
import { TbGridDots } from "react-icons/tb";
import { RxDotsHorizontal } from 'react-icons/rx'
const Navbar = () => {

  let [show, setShow] = useState(false)
  useEffect(()=>{
    function size() {
      if (window.innerWidth < 768) {
        setShow(false)
      }else{
        setShow(true)
      }
    }
    size()
    window.addEventListener('resize', size)
  },[])

  return (
    <nav>
        <Container className='flex md:py-8 md:px-0 items-center justify-between p-2 relative z-20'>
            <div className="logo">
              <Logo src={Logo_image}/>
            </div>
            <div className="menu">
              <ul className={`md:static flex md:flex-row flex-col gap-x-10 gap-y-2 items-center absolute top-full left-0 md:bg-transparent bg-[#262626] w-full md:w-auto p-2 md:p-0 z-[-1222] transition-all duration-300 ${ show ? "mt-0" : "mt-[-100%]"}`}>
                <Li value='Home' to='/'/>
                <Li value='Shop' to='/products'/>
                <Li value='Product Details' to='/product/details'/>
                <Li value='About' to='/about'/>
                <Li value='Contacts' to='/contacts'/>
                <Li value='Journal' to='/journals'/>
              </ul>
            </div>
            <div className="lang"> 
              <div className='flex gap-x-2 sm:gap-x-5 items-center'>
                <p className='md:text-sm text-xs font-semibold md:font-bold text-[#767676] transition-all duration-300 hover:text-[#262626] cursor-pointer'>
                  EN
                </p>
                <p className='md:text-sm text-xs font-semibold md:font-bold text-[#767676] transition-all duration-300 hover:text-[#262626] cursor-pointer'>
                  RU
                </p>
              </div>
            </div>
            <div onClick={()=> setShow(!show)} className='md:hidden cursor-pointer relative'>
              <TbGridDots className={`absolute top-1/2 -translate-y-1/2 right-0 transition-all duration-300 ${ show ? "opacity-0" : "opacity-100 rotate-90"}`}/>
              <RxDotsHorizontal className={`font-bold absolute top-1/2 -translate-y-1/2 right-0 transition-all duration-300 ${ show ? "opacity-100 -rotate-90" : "opacity-0"}`}/>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar