import React, { useState } from 'react'
import Container from '../Layers/Container'
import BreadCrumbs from '../Layers/BreadCrumbs'
import { MdErrorOutline } from 'react-icons/md'

const Contacts = () => {

    // First Name state
    const [firstName, setFirstName] = useState()
    const [firstNameError, setFirstNameError] = useState(false)

    let manageFirstName = (element) => {
        let fName = element.target.value
        setFirstName(fName)
        setFirstNameError(false)
    }

    // Email state
    const [email, setEmail] = useState()
    const [emailError, setEmailError] = useState(false)

    let manageEmail = (element) => {
        let emailValue = element.target.value
        setEmail(emailValue)
        setEmailError(false)
    }

    // Comment states
    const [post, setPost] = useState()
    const [postError, setPostError] = useState(false)

    let managePost = (element) => {
        let postValue = element.target.value
        setPost(postValue)
        setPostError(false)
    }

    // Submit button function
    let manageSubmit = () => {
        if (!firstName) {
            setFirstNameError(true)
        }
        if (!email) {
            setEmailError(true)
        }
        if (!post) {
            setPostError(true)
        }
    }

    return (
        <div className='md:px-0 px-2'>
            <section id="about" className='md:pt-[124px] pt-10 '>
                <Container>
                    <BreadCrumbs />
                    <div className="form md:mt-[124px] mt-10 md:mb-8 mb-3">
                        <h2 className='md:text-[39px] text-2xl text-[#262626] font-medium md:font-bold md:mb-12 mb-5'>
                            Fill up a Form
                        </h2>
                        <div className="flex flex-col md:gap-6 gap-3">
                            <div className="fname flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[780px] relative">
                                <label htmlFor="name">
                                    Name
                                </label>
                                <input id='name' onChange={manageFirstName} value={firstName} type="text" placeholder='Your name here' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
                                {
                                    firstNameError && (
                                        <>
                                            <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                                This field is Required
                                            </p>
                                            <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0' />
                                        </>
                                    )
                                }
                            </div>
                            <div className="mail flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[780px] relative">
                                <label htmlFor="">
                                    Email
                                </label>
                                <input onChange={manageEmail} value={email} type="email" placeholder='Your email here' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
                                {
                                    emailError && (
                                        <>
                                            <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                                This field is Required
                                            </p>
                                            <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0' />
                                        </>
                                    )
                                }
                            </div>
                            <div className="comment flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[780px] relative">
                                <label htmlFor="">
                                    Message
                                </label>
                                <textarea onChange={managePost} value={post} type="email" placeholder='Your message here' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none'></textarea>
                                {
                                    postError && (
                                        <>
                                            <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                                This field is Required
                                            </p>
                                            <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0' />
                                        </>
                                    )
                                }
                            </div>
                        </div>

                    </div>
                    <button onClick={manageSubmit} className='md:py-4 md:w-[200px] text-center py-[10px] w-[140px] bg-[#262626] border border-[#262626] text-white md:text-sm text-xs md:font-bold font-medium hover:bg-transparent hover:text-[#262626] duration-300'>
                        Post
                    </button>
                </Container>
                <Container className='md:my-[140px] my-10'>
                    <div className="w-full md:h-[572px] h-[220px]">
                        <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.170254395698!2d90.38000527502389!3d23.741307389125907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1728482683177!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Contacts