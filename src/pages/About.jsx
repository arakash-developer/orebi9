import React from 'react'
import Container from '../Layers/Container'
import BreadCrumbs from '../Layers/BreadCrumbs'
import p01 from '/Products/product-6.png'
import p02 from '/Products/product-3.png'

const About = () => {
    return (
        <div className='md:px-0 px-2'>
            <section id="about" className='md:pt-[124px] pt-10'>
                <Container>
                    <BreadCrumbs />
                    <div className="images md:mt-[136px] md:mb-32 my-10 grid grid-cols-2 md:gap-10 gap-2 md:h-[776px] h-[300px]">
                        <div className="child w-full h-full relative bg-[#F3F3F3]">
                            <img src={p01} alt="" className='w-full h-full object-contain' />
                            <button className='md:py-4 md:w-[280px] text-center py-[10px] w-[140px] bg-[#262626] border border-[#262626] text-white md:text-sm text-xs md:font-bold font-medium hover:bg-transparent hover:text-[#262626] duration-300 absolute md:bottom-[62px] bottom-[27px] left-1/2 -translate-x-1/2'>
                                Our Brands
                            </button>
                        </div>
                        <div className="child w-full h-full relative bg-[#ECECEC]">
                            <img src={p02} alt="" className='w-full h-full object-contain' />
                            <button className='md:py-4 md:w-[280px] text-center py-[10px] w-[140px] bg-[#262626] border border-[#262626] text-white md:text-sm text-xs md:font-bold font-medium hover:bg-transparent hover:text-[#262626] duration-300 absolute md:bottom-[62px] bottom-[27px] left-1/2 -translate-x-1/2'>
                                Our Stores
                            </button>
                        </div>
                    </div>
                    <h2 className='md:text-[39px] text-2xl text-[#262626] leading-[133.333%]'>
                        Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
                    </h2>
                    <div className="flex md:flex-row flex-col md:gap-10 gap-5 my-10 md:my-32">
                        <div className="child md:w-1/3">
                            <h3 className='md:text-[25px] text-lg text-[#262626] font-medium md:font-bold leading-[143%] md:mb-3 mb-[6px]'>
                                Our Story
                            </h3>
                            <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div className="child md:w-1/3">
                            <h3 className='md:text-[25px] text-lg text-[#262626] font-medium md:font-bold leading-[143%] md:mb-3 mb-[6px]'>
                                Our Brands
                            </h3>
                            <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
                            </p>
                        </div>
                        <div className="child md:w-1/3">
                            <h3 className='md:text-[25px] text-lg text-[#262626] font-medium md:font-bold leading-[143%] md:mb-3 mb-[6px]'>
                                Our Vision
                            </h3>
                            <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default About