import React, { useState } from 'react'
import Container from "../Layers/Container";
import BreadCrumbs from '../Layers/BreadCrumbs';
import { motion } from 'framer-motion';


const MyAccount = () => {

    let [activeTab, setActiveTab] = useState('dashboard')

    return (
        <div className="md:px-0 px-2">
            <section id="account" className="md:py-[124px] py-10">
                <Container>
                    <BreadCrumbs />
                    <div className="main flex md:gap-10 gap-4 md:mt-32 mt-14">
                        <div className="sidebar md:w-[234px] w-[30%] flex flex-col md:gap-5 gap-3">
                            <div onClick={() => setActiveTab('dashboard')} className={`child w-full border-b md:pb-5 pb-3 md:text-base text-sm duration-300 cursor-pointer ${activeTab === 'dashboard' ? 'border-[#262626] font-bold text-[#262626]' : 'text-[#767676] border-[#F0F0F0]'}`}>
                                Dashboard
                            </div>
                            <div onClick={() => setActiveTab('others')} className={`child w-full border-b md:pb-5 pb-3 md:text-base text-sm duration-300 cursor-pointer ${activeTab === 'others' ? 'border-[#262626] font-bold text-[#262626]' : 'text-[#767676] border-[#F0F0F0]'}`}>
                                Others
                            </div>
                            <div onClick={() => setActiveTab('donwloads')} className={`child w-full border-b md:pb-5 pb-3 md:text-base text-sm duration-300 cursor-pointer ${activeTab === 'donwloads' ? 'border-[#262626] font-bold text-[#262626]' : 'text-[#767676] border-[#F0F0F0]'}`}>
                                Donwloads
                            </div>
                            <div onClick={() => setActiveTab('addresses')} className={`child w-full border-b md:pb-5 pb-3 md:text-base text-sm duration-300 cursor-pointer ${activeTab === 'addresses' ? 'border-[#262626] font-bold text-[#262626]' : 'text-[#767676] border-[#F0F0F0]'}`}>
                                Addresses
                            </div>
                            <div onClick={() => setActiveTab('details')} className={`child w-full border-b  md:pb-5 pb-3 md:text-base text-sm duration-300 cursor-pointer ${activeTab === 'details' ? 'border-[#262626] font-bold text-[#262626]' : 'text-[#767676] border-[#F0F0F0]'}`}>
                                Account details
                            </div>
                            <div onClick={() => setActiveTab('logout')} className={`child w-full border-b  md:pb-5 pb-3 md:text-base text-sm duration-300 cursor-pointer ${activeTab === 'logout' ? 'border-[#262626] font-bold text-[#262626]' : 'text-[#767676] border-[#F0F0F0]'}`}>
                                Logout
                            </div>
                        </div>
                        {
                            activeTab === 'dashboard' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="md:w-[918px] w-[70%]"
                                >
                                    <div id='dashboard' className="md:w-[918px] w-[70%]">
                                        <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                                            Hello <span className='span'>admin</span> (not <span className='span'>admin</span>? <span className='span'>Log out</span>)
                                        </p>
                                        <br /><br />
                                        <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                                            From your account dashboard you can view your <span className='span'>recent orders</span>, manage your <span className='span'>shipping and billing addresses</span>, and <span className='span'>edit your password and account details</span>.
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        }
                        {
                            activeTab === 'others' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="md:w-[918px] w-[70%]"
                                >
                                    <div id='dashboard' className="md:w-[918px] w-full bg-red-200">
                                        <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                                            Hello <span className='span'>admin</span> (not <span className='span'>admin</span>? <span className='span'>Log out</span>)
                                        </p>
                                        <br /><br />
                                        <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                                            From your account dashboard you can view your <span className='span'>recent orders</span>, manage your <span className='span'>shipping and billing addresses</span>, and <span className='span'>edit your password and account details</span>.
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        }
                        {
                            activeTab === 'donwloads' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="md:w-[918px] w-[70%]"
                                >
                                    <div id='dashboard' className="md:w-[918px] w-full bg-red-300">
                                        <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                                            Hello <span className='span'>admin</span> (not <span className='span'>admin</span>? <span className='span'>Log out</span>)
                                        </p>
                                        <br /><br />
                                        <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                                            From your account dashboard you can view your <span className='span'>recent orders</span>, manage your <span className='span'>shipping and billing addresses</span>, and <span className='span'>edit your password and account details</span>.
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        }
                        {
                            activeTab === 'addresses' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="md:w-[918px] w-[70%]"
                                >
                                    <div id='dashboard' className="md:w-[918px] w-full bg-red-400">
                                        <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                                            Hello <span className='span'>admin</span> (not <span className='span'>admin</span>? <span className='span'>Log out</span>)
                                        </p>
                                        <br /><br />
                                        <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                                            From your account dashboard you can view your <span className='span'>recent orders</span>, manage your <span className='span'>shipping and billing addresses</span>, and <span className='span'>edit your password and account details</span>.
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        }
                        {
                            activeTab === 'details' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="md:w-[918px] w-[70%]"
                                >
                                    <div id='dashboard' className="md:w-[918px] w-full bg-red-500">
                                        <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                                            Hello <span className='span'>admin</span> (not <span className='span'>admin</span>? <span className='span'>Log out</span>)
                                        </p>
                                        <br /><br />
                                        <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                                            From your account dashboard you can view your <span className='span'>recent orders</span>, manage your <span className='span'>shipping and billing addresses</span>, and <span className='span'>edit your password and account details</span>.
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        }
                        {
                            activeTab === 'logout' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="md:w-[918px] w-[70%]"
                                >
                                    <div id='dashboard' className="md:w-[918px] w-full bg-red-600">
                                        <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                                            Hello <span className='span'>admin</span> (not <span className='span'>admin</span>? <span className='span'>Log out</span>)
                                        </p>
                                        <br /><br />
                                        <p className='md:text-base text-sm text-[#767676] leading-[187.5%]'>
                                            From your account dashboard you can view your <span className='span'>recent orders</span>, manage your <span className='span'>shipping and billing addresses</span>, and <span className='span'>edit your password and account details</span>.
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        }
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default MyAccount