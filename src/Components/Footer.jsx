import React from 'react'
import Container from '../Layers/Container'
import { Link } from 'react-router-dom'
import logo from '/Common Images/Footer_logo.png'
import Logo from '../Layers/Logo'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'


const Footer = () => {
  return (
    <div>
      <footer className='md:py-[52px] py-6 md:px-0 px-3 bg-[#F5F5F3]'>
        <Container className='flex flex-col md:gap-y-[65px] gap-y-10'>
          <div className="top flex md:flex-row flex-col gap-x-[145px] gap-y-9 w-auto">
            <div className="left flex md:gap-x-36 md:justify-start justify-between w-full">
              <ul>
                <h3 className='md:text-base text-sm text-[#262626] md:font-bold font-semibold leading-[143.75%] md:mb-[17px] mb-3'>
                MENU
                </h3>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>Shop</Link>
                </li>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>About</Link>
                </li>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>Contact</Link>
                </li>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>Journal</Link>
                </li>
              </ul>
              <ul>
                <h3 className='md:text-base text-sm text-[#262626] md:font-bold font-semibold leading-[143.75%] md:mb-[17px] mb-3'>
                SHOP
                </h3>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>Category 1</Link>
                </li>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>Category 2</Link>
                </li>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>Category 3</Link>
                </li>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>Category 4</Link>
                </li>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>Category 5</Link>
                </li>
              </ul>
              <ul>
                <h3 className='md:text-base text-sm text-[#262626] md:font-bold font-semibold leading-[143.75%] md:mb-[17px] mb-3'>
                HELP
                </h3>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>Privacy Policy</Link>
                </li>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>Terms & Conditions</Link>
                </li>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>Special E-shop</Link>
                </li>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>Shipping</Link>
                </li>
                <li className='md:text-sm text-xs text-[#6D6D6D] hover:text-[#262626] hover:font-medium transition-all duration-300 leading-[164.286%] md:mb-[6px] mb-1'>
                  <Link to='/'>Secure Payments</Link>
                </li>
              </ul>
            </div>
            <div className="right flex md:gap-x-64 md:justify-start justify-between gap-x-10 md:items-start items-center">
              <div className="text">
                <h3 className='md:text-base text-sm text-[#262626] md:font-bold font-semibold leading-[168.75%%] md:mb-[15px] mb-2'>
                (052) 611-5711 <br />
                company@domain.com
                </h3>
                <p className='text-xs md:text-sm text-[#6D6D6D] whitespace-nowrap'>
                575 Crescent Ave. Quakertown, PA 18951
                </p>
              </div>
              <div className="img md:w-[122px] md:h-[29px] w-[80px] h-[20px]">
              <Logo src={logo}/>
              </div>
            </div>
          </div>
          <div className="bottom flex justify-between items-center">
            <div className="icons flex items-center md:gap-6 gap-3 text-[#262626] md:text-base text-sm">
            <Link><FaFacebookF /></Link>
            <Link><FaLinkedinIn /></Link>
            <Link><FaInstagram /></Link>
            </div>
            <p className='text-[8px] md:text-sm text-[#6D6D6D] whitespace-nowrap'>
            2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </div>
        </Container>
      </footer>
    </div>
  )
}

export default Footer