import React from 'react'
import Container from '../Layers/Container'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='md:py-24 py-8 md:px-0 px-2'>
            <Container>
                <h1 className='md:text-[200px] text-[120px] font-bold'>
                    404
                </h1>
                <p className='md:text-base text-sm text-[#767676] leading-[187.5%] max-w-[644px]'>
                    The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?
                </p>
                <div className="search md:w-[643px] w-[90%] relative my-7 md:my-[60px]">
                    <input
                        type="text"
                        placeholder="Type to search"
                        className="w-full md:py-4 md:px-[21px] p-2 text-sm text-[#262626] placeholder:text-[#C4C4C4] placeholder:font-normal font-medium outline-none border border-[#F0F0F0]"
                    />
                    <FaSearch className="absolute top-1/2 -translate-y-1/2 md:right-[21px] right-2 md:text-[15px] text-xs text-[#262626] hover:cursor-pointer" />

                </div>
                <button className='md:py-4 md:w-[200px] text-center py-[10px] w-[140px] bg-[#262626] border border-[#262626] text-white md:text-sm text-xs md:font-bold font-medium hover:bg-transparent hover:text-[#262626] duration-300 md:mb-10 mb-6'>
                    <Link to='/'>Back to Home</Link>
                </button>
            </Container>
        </div>
    )
}

export default Error