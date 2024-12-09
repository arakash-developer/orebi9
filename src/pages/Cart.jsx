import React, { useState } from 'react'
import Container from '../Layers/Container'
import BreadCrumbs from '../Layers/BreadCrumbs'
import { FaCaretDown, FaPlus } from 'react-icons/fa'
import p01 from '/Products/product-4.png'
import { Link } from 'react-router-dom'


const Cart = () => {

    let [quantity, setQuantity] = useState(1)
    let [size, setSize] = useState('S')
    let [sizeDDM, setSizeDDM] = useState(false)

    return (
        <div className='md:px-0 px-2'>
            <section id="signup" className='md:py-[124px] py-10'>
                <Container>
                    <BreadCrumbs />
                    <div className="main md:mt-[136px] mt-10">
                        <div className="titles flex bg-[#F5F5F3] text-[#262626] text-sm md:text-base md:font-bold font-medium leading-[143.75%]">
                            <div className="child w-1/4 md:py-[33px] md:px-5 py-3 px-2">Product</div>
                            <div className="child w-1/4 md:py-[33px] md:px-5 py-3 px-2">Price</div>
                            <div className="child w-1/4 md:py-[33px] md:px-5 py-3 px-2">Quantity</div>
                            <div className="child w-1/4 md:py-[33px] md:px-5 py-3 px-2">Total</div>
                        </div>
                        <div className="info flex items-center text-[#262626] text-sm md:text-base md:font-bold font-medium leading-[143.75%] border border-[#F0F0F0]">
                            <div className="child w-1/4 md:py-[30px] md:px-5 py-3 px-2 flex flex-wrap md:gap-5 gap-1 items-center justify-start">
                                <FaPlus className='rotate-45 mr-5 md:text-base text-xs' />
                                <div className="img w-[60px] md:w-[100px] h-[60px] md:h-[100px]">
                                    <img src={p01} alt="" className='w-full h-full object-contain' />
                                </div>
                                <p className='text-[#262626] text-sm md:text-base md:font-bold font-medium leading-[143.75%]'>
                                    Product name
                                </p>
                            </div>
                            <div className="child w-1/4 md:py-[30px] md:px-5 py-3 px-2">$44.00</div>
                            <div className="child w-1/4 md:py-[30px] md:px-5 py-3 px-2">
                                <div className="count grid grid-cols-3 items-center justify-center md:gap-3 gap-1 text-[#767676] border  md:py-1 py-[1px] md:text-base text-sm  leading-[187.5%]">
                                    <div onClick={() => setQuantity(() => quantity > 1 ? quantity-- : quantity)} className="plus cursor-pointer text-center md:px-[14px] px-2">-</div>
                                    <div className="plus text-center">{quantity}</div>
                                    <div onClick={() => setQuantity(() => quantity++)} className="plus cursor-pointer text-center md:px-[14px] px-2">+</div>
                                </div>
                            </div>
                            <div className="child w-1/4 md:py-[30px] md:px-5 py-3 px-2">$44.00</div>
                        </div>
                        <div className="cupon flex items-center text-[#262626] text-xs md:text-sm md:font-bold font-medium leading-[143.75%] border border-[#F0F0F0]">
                            <div className="size md:w-[255px] w-[100px] md:ml-5 ml-2">
                                <div onClick={() => setSizeDDM(!sizeDDM)} className="select flex items-center justify-between text-[#767676] border md:px-5 px-2 md:py-1 py-[1px] relative z-20 bg-white">
                                    <span className='md:text-base text-sm leading-[187.5%]'>
                                        {size}
                                    </span>
                                    <FaCaretDown />
                                    <ul onClick={(e) => setSize(e.target.innerText)} className={`absolute z-10  left-0 w-full bg-[#F5F5F3] transition-all duration-300 ${sizeDDM ? 'top-full opacity-100 visible' : 'top-[150%] opacity-0 invisible'}`}>
                                        <li className='md:text-base text-sm leading-[187.5%] text-[#767676] border-b md:px-5 px-2 md:py-1 py-[1px]'>
                                            XS
                                        </li>
                                        <li className='md:text-base text-sm leading-[187.5%] text-[#767676] border-b md:px-5 px-2 md:py-1 py-[1px]'>
                                            S
                                        </li>
                                        <li className='md:text-base text-sm leading-[187.5%] text-[#767676] border-b md:px-5 px-2 md:py-1 py-[1px]'>
                                            M
                                        </li>
                                        <li className='md:text-base text-sm leading-[187.5%] text-[#767676] border-b md:px-5 px-2 md:py-1 py-[1px]'>
                                            L
                                        </li>
                                        <li className='md:text-base text-sm leading-[187.5%] text-[#767676] border-b md:px-5 px-2 md:py-1 py-[1px]'>
                                            XL
                                        </li>
                                        <li className='md:text-base text-sm leading-[187.5%] text-[#767676] border-b md:px-5 px-2 md:py-1 py-[1px]'>
                                            XXL
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="child md:py-[33px] md:px-5 py-3 px-2">Apply coupon</div>
                            <div className="child md:py-[33px] md:px-5 py-3 px-2 ml-auto">Update cart</div>
                        </div>
                        <h2 className='text-[#262626] text-ld md:text-[20px] md:font-bold font-semibold leading-[143.75%] md:text-right md:mt-14 md:mb-6 mt-9 mb-3'>
                            Cart totals
                        </h2>
                        <div className="flex flex-col items-end justify-center">
                            <div className="cartTotals md:w-[645px] w-full grid grid-cols-2 grid-rows-2 md:gap-x-[2px] gap-x-[1px] gap-y-[1px] bg-[#F0F0F0] p-[1px]">
                                <div className="md:w-[322px] md:py-4 py-2 md:px-5 px-2 bg-[#FFF] text-[#262626] text-sm md:text-base md:font-bold font-medium leading-[143.75%]">Subtotal</div>
                                <div className="md:w-[322px] md:py-4 py-2 md:px-5 px-2 bg-[#FFF] text-[#767676] text-sm md:text-base leading-[143.75%]">389.99 $</div>
                                <div className="md:w-[322px] md:py-4 py-2 md:px-5 px-2 bg-[#FFF] text-[#262626] text-sm md:text-base md:font-bold font-medium leading-[143.75%]">Total</div>
                                <div className="md:w-[322px] md:py-4 py-2 md:px-5 px-2 bg-[#FFF] text-[#262626] text-sm md:text-base leading-[143.75%]">389.99 $</div>
                            </div>
                            <button className='md:py-4 md:w-[200px] text-center py-[10px] w-[140px] bg-[#262626] border border-[#262626] text-white md:text-sm text-xs md:font-bold font-medium hover:bg-transparent hover:text-[#262626] duration-300 md:mt-[30px] mt-4'>
                                <Link to='/checkout'>Proceed to Checkout</Link>
                            </button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Cart