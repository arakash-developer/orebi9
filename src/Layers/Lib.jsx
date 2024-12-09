import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Lib = ({value, children, className}) => {
  return (
    <li className={`md:py-4 py-2 md:px-5 px-4 md:hover:pl-[32px] hover:pl-[22px] border-b border-[#2D2D2D] md:text-sm text-xs text-[#ffffffb3] flex items-center justify-between group transition-all duration-300 ${className}`}>
        {children}
        <Link className='group-hover:font-medium md:group-hover:font-semibold transition-all duration-300 group-hover:text-[#FFF]'> {value} </Link>
        <MdKeyboardArrowRight className='opacity-0 group-hover:opacity-100 transition-all duration-300'/>
    </li>
  )
}

export default Lib