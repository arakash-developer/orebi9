import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({className, value, to}) => {
  return (
    <li>
        <Link to={to} className={`md:text-sm text-xs font-semibold md:font-bold md:text-[#767676] text-[#ffffffb3] transition-all duration-300 md:hover:text-[#262626] ${className}`}>
            {value}
        </Link>
    </li>
  )
}

export default Li