import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({src}) => {
  return (
    <Link to='/' className='inline-block'>
        <img className='block' src={src} alt={src} />
    </Link>
  )
}

export default Logo