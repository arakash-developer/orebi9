import React, { useState } from 'react'
import { IoMdStar } from 'react-icons/io'
import { motion } from 'framer-motion';

const Description = () => {

    let [activeTab, setActiveTab] = useState('description')

    return (
        <div className="review&description md:mt-32 mt-12">
            <div className="head flex md:gap-16 gap-8">
                <h3 onClick={() => setActiveTab('description')} className={`md:text-[20px] text-base cursor-pointer ${activeTab === 'description' ? 'text-[#262626] md:font-bold font-semibold' : 'text-[#767676] font-normal'}`}>
                    Description
                </h3>
                <h3 onClick={() => setActiveTab('reviews')} className={`md:text-[20px] text-base cursor-pointer ${activeTab === 'reviews' ? 'text-[#262626] md:font-bold font-semibold' : 'text-[#767676] font-normal'}`}>
                    Reviews (1)
                </h3>
            </div>
            {
                activeTab === 'description' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="description md:pt-11 pt-6 bg-red-300">
                            <p className='md:text-sm text-xs text-[#767676] font-normal'>
                                1 review for Product
                            </p>
                            <div className="line h-[1px] max-w-full bg-[#F0F0F0] md:mt-4 md:mb-6 my-2"></div>
                            <div className="userName flex items-center justify-between">
                                <div className="flex md:gap-9 gap-3 items-center">
                                    <p className='text-base text-[#262626] font-normal leading-[187.5%]'>
                                        John Ford
                                    </p>
                                    <div className="stars flex items-center gap-0 text-[#FFD881] md:text-sm text-xs">
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                </div>
                                <div className="time md:text-sm text-xs text-[#767676] font-normal leading-[187.5%]">
                                    6 months ago
                                </div>
                            </div>
                            <p id='comment' className='md:text-base text-xs text-[#767676] font-normal leading-[187.5%] md:mt-[14px] mt-2'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <div className="line h-[1px] max-w-full bg-[#F0F0F0] md:mt-4 md:mb-[53px] mt-2 mb-4"></div>
                            <div className="addReview md:w-[780px] w-full">
                                <h3 className='md:text-[20px] text-lg text-[#262626] md:font-bold font-semibold mb-5 md:mb-12'>
                                    Add a Review
                                </h3>
                                <div className="form flex flex-col md:gap-6 gap-3">
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className='md:text-base text-sm text-[#262626] font-bold leading-[143.75%]'>
                                            Name
                                        </label>
                                        <input type="text" name="" id="" placeholder='Your name here' className='border-b border-[#F0F0F0] md:text-sm text-xs text-[#262626] font-medium leading-[187.5%] py-2 md:py-4 outline-none' />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className='md:text-base text-sm text-[#262626] font-bold leading-[143.75%]'>
                                            Email
                                        </label>
                                        <input type="text" name="" id="" placeholder='Your email here' className='border-b border-[#F0F0F0] md:text-sm text-xs text-[#262626] font-medium leading-[187.5%] py-2 md:py-4 outline-none' />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className='md:text-base text-sm text-[#262626] font-bold leading-[143.75%]'>
                                            Review
                                        </label>
                                        <textarea type="text" name="" id="" placeholder='Your review here' className='border-b border-[#F0F0F0] md:text-sm text-xs text-[#262626] font-medium leading-[187.5%] py-2 md:py-4 outline-none whitespace-pre-wrap'></textarea>
                                    </div>
                                    <button className='md:py-4 md:w-[200px] text-center py-[10px] w-[140px] bg-[#262626] border border-[#262626] text-white md:text-sm text-xs md:font-bold font-medium hover:bg-transparent hover:text-[#262626] duration-300 md:mt-8 mt-3'>
                                        Post
                                    </button>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                )
            }
            {
                activeTab === 'reviews' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="reviews md:pt-11 pt-6">
                            <p className='md:text-sm text-xs text-[#767676] font-normal'>
                                1 review for Product
                            </p>
                            <div className="line h-[1px] max-w-full bg-[#F0F0F0] md:mt-4 md:mb-6 my-2"></div>
                            <div className="userName flex items-center justify-between">
                                <div className="flex md:gap-9 gap-3 items-center">
                                    <p className='text-base text-[#262626] font-normal leading-[187.5%]'>
                                        John Ford
                                    </p>
                                    <div className="stars flex items-center gap-0 text-[#FFD881] md:text-sm text-xs">
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                </div>
                                <div className="time md:text-sm text-xs text-[#767676] font-normal leading-[187.5%]">
                                    6 months ago
                                </div>
                            </div>
                            <p id='comment' className='md:text-base text-xs text-[#767676] font-normal leading-[187.5%] md:mt-[14px] mt-2'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <div className="line h-[1px] max-w-full bg-[#F0F0F0] md:mt-4 md:mb-[53px] mt-2 mb-4"></div>
                            <div className="addReview md:w-[780px] w-full">
                                <h3 className='md:text-[20px] text-lg text-[#262626] md:font-bold font-semibold mb-5 md:mb-12'>
                                    Add a Review
                                </h3>
                                <div className="form flex flex-col md:gap-6 gap-3">
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className='md:text-base text-sm text-[#262626] font-bold leading-[143.75%]'>
                                            Name
                                        </label>
                                        <input type="text" name="" id="" placeholder='Your name here' className='border-b border-[#F0F0F0] md:text-sm text-xs text-[#262626] font-medium leading-[187.5%] py-2 md:py-4 outline-none' />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className='md:text-base text-sm text-[#262626] font-bold leading-[143.75%]'>
                                            Email
                                        </label>
                                        <input type="text" name="" id="" placeholder='Your email here' className='border-b border-[#F0F0F0] md:text-sm text-xs text-[#262626] font-medium leading-[187.5%] py-2 md:py-4 outline-none' />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className='md:text-base text-sm text-[#262626] font-bold leading-[143.75%]'>
                                            Review
                                        </label>
                                        <textarea type="text" name="" id="" placeholder='Your review here' className='border-b border-[#F0F0F0] md:text-sm text-xs text-[#262626] font-medium leading-[187.5%] py-2 md:py-4 outline-none whitespace-pre-wrap'></textarea>
                                    </div>
                                    <button className='md:py-4 md:w-[200px] text-center py-[10px] w-[140px] bg-[#262626] border border-[#262626] text-white md:text-sm text-xs md:font-bold font-medium hover:bg-transparent hover:text-[#262626] duration-300 md:mt-8 mt-3'>
                                        Post
                                    </button>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                )
            }

        </div>
    )
}

export default Description