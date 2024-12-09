import React, { useState } from 'react'
import Container from '../Layers/Container'
import BreadCrumbs from '../Layers/BreadCrumbs'
import { MdErrorOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Checkout = () => {

    // First Name state
    const [firstName, setFirstName] = useState()
    const [firstNameError, setFirstNameError] = useState(false)

    let manageFirstName = (element) => {
        let fName = element.target.value
        setFirstName(fName)
        setFirstNameError(false)
    }

    // Last Name state
    const [lastName, setLastName] = useState()
    const [lastNameError, setLastNameError] = useState(false)

    let manageLastName = (element) => {
        let lName = element.target.value
        setLastName(lName)
        setLastNameError(false)
    }

    // Email state
    const [email, setEmail] = useState()
    const [emailError, setEmailError] = useState(false)

    let manageEmail = (element) => {
        let emailValue = element.target.value
        setEmail(emailValue)
        setEmailError(false)
    }

    // Telephone state
    const [tel, setTel] = useState()
    const [telError, setTelError] = useState(false)

    let manageTel = (element) => {
        let telValue = element.target.value
        setTel(telValue)
        setTelError(false)
    }

    // Adress1 states
    const [street, setStreet] = useState()
    const [streetError, setStreetError] = useState(false)

    let manageStreet = (element) => {
        let streetValue = element.target.value
        setStreet(streetValue)
        setStreetError(false)
    }

    // City states
    const [city, setCity] = useState()
    const [cityError, setCityError] = useState(false)

    let manageCity = (element) => {
        let cityValue = element.target.value
        setCity(cityValue)
        setCityError(false)
    }

    // Post Code states
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
        if (!lastName) {
            setLastNameError(true)
        }
        if (!email) {
            setEmailError(true)
        }
        if (!tel) {
            setTelError(true)
        }
        if (!adress1) {
            setAdress1Error(true)
        }
        if (!city) {
            setCityError(true)
        }
        if (!post) {
            setPostError(true)
        }
        if (!password) {
            setPasswordError(true)
        }
        if (!rePassword) {
            setRePasswordError(true)
        }
        if (password !== rePassword) {
            setPassCondition2('Password and Retype Password must be the same')
        }
    }

    // Division array 
    const country = [
        'Afghanistan',
        'Bangladesh',
        'Bhutan',
        'India',
        'Maldives',
        'Nepal',
        'Pakistan',
        'Sri Lanka'
    ];


    return (
        <div className='md:px-0 px-2'>
            <section id="checkout" className='md:py-[124px] py-10'>
                <Container>
                    <BreadCrumbs />
                    <p className='md:text-base text-sm text-[#767676] leading-[187.5%] md:mt-32 mt-12'>
                        Have a coupon? <span className='span'>Click here to enter your code</span>
                    </p>
                </Container>
                <Container className='pb-[69px]'>
                    <h2 className='md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium my-6 md:mt-[58px] md:mb-[42px]'>
                        Billing Details
                    </h2>
                    <div className="userInfo flex flex-wrap md:gap-x-10 sm:justify-between md:justify-normal gap-y-6">
                        <div className="fname flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                            <label htmlFor="" className='md:font-bold font-semibold'>
                                First Name
                            </label>
                            <input onChange={manageFirstName} value={firstName} type="text" placeholder='First Name' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
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
                        <div className="lname flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                            <label htmlFor="" className='md:font-bold font-semibold'>
                                Last Name
                            </label>
                            <input onChange={manageLastName} value={lastName} type="text" placeholder='Last Name' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
                            {
                                lastNameError && (
                                    <>
                                        <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                            This field is Required
                                        </p>
                                        <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0' />
                                    </>
                                )
                            }
                        </div>
                        <div className="company flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[1055px] relative">
                            <label htmlFor="" className='md:font-bold font-semibold'>
                                Companye Name (optional)
                            </label>
                            <input type="text" placeholder='Company Name' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
                        </div>
                        <div className="country flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[1055px] relative">
                            <label htmlFor="" className='md:font-bold font-semibold'>
                                Country *
                            </label>
                            <select name="" id="" className='md:pb-[17px] pb-2 text-sm text-[#767676] w-full border-b outline-none bg-white'>
                                <option value="">Please select</option>
                                {
                                    country.map((item, index) => (
                                        <option key={index} value="">{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="street flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[1055px] relative">
                            <label htmlFor="" className='md:font-bold font-semibold'>
                                Street Address *
                            </label>
                            <input onChange={manageStreet} value={street} type="text" placeholder='House number and street name' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
                            {
                                streetError && (
                                    <>
                                        <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                            This field is Required
                                        </p>
                                        <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0' />
                                    </>
                                )
                            }
                            <input type="email" placeholder='Apartment, suite, unit etc. (optional)' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
                        </div>
                        <div className="town flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[1055px] relative">
                            <label htmlFor="" className='md:font-bold font-semibold'>
                                Town/City *
                            </label>
                            <input onChange={manageCity} value={city} type="email" placeholder='company@domain.com' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
                            {
                                cityError && (
                                    <>
                                        <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                            This field is Required
                                        </p>
                                        <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0' />
                                    </>
                                )
                            }
                        </div>
                        <div className="County flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[1055px] relative">
                            <label htmlFor="" className='md:font-bold font-semibold'>
                                County (optional)
                            </label>
                            <input onChange={manageEmail} value={email} type="email" placeholder='company@domain.com' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
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
                        <div className="postcode flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[1055px] relative">
                            <label htmlFor="" className='md:font-bold font-semibold'>
                                Post Code *
                            </label>
                            <input onChange={managePost} value={post} type="text" placeholder='Post Code' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
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
                        <div className="telephone flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[1055px] relative">
                            <label htmlFor="" className='md:font-bold font-semibold'>
                                Phone *
                            </label>
                            <input onChange={manageTel} value={tel} type="tel" placeholder='Phone' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
                            {
                                telError && (
                                    <>
                                        <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                            This field is Required
                                        </p>
                                        <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0' />
                                    </>
                                )
                            }
                        </div>
                        <div className="mail flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[1055px] relative">
                            <label htmlFor="" className='md:font-bold font-semibold'>
                                Email Address *
                            </label>
                            <input onChange={manageEmail} value={email} type="email" placeholder='Email' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
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
                    </div>
                    
                    <h2 className='md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium mt-20 mb-6 md:mt-[129px] md:mb-[42px]'>
                        Additional Information
                    </h2>
                    <div className="fname flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[1055px] relative">
                        <label htmlFor="" className='md:font-bold font-semibold'>
                            Other Notes (optional)
                        </label>
                        <textarea type="text" placeholder='Notes about your order, e.g. special notes for delivery.' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none'></textarea>
                    </div>
                    <div className="total">
                        <h2 className='md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium mt-16 mb-6 md:mt-[129px] md:mb-[48px]'>
                            Your Order
                        </h2>
                        <div className="cartTotals md:w-[645px] w-full grid grid-cols-2 grid-rows-2 md:gap-x-[2px] gap-x-[1px] gap-y-[1px] bg-[#F0F0F0] p-[1px]">
                            <div className="md:w-[322px] md:py-4 py-2 md:px-5 px-2 bg-[#FFF] text-[#262626] text-sm md:text-base md:font-bold font-medium leading-[143.75%]">Product</div>
                            <div className="md:w-[322px] md:py-4 py-2 md:px-5 px-2 bg-[#FFF] text-[#262626] text-sm md:text-base md:font-bold font-medium leading-[143.75%]">Total</div>
                            <div className="md:w-[322px] md:py-4 py-2 md:px-5 px-2 bg-[#FFF] text-[#262626] text-sm md:text-base md:font-bold font-medium leading-[143.75%]">Product name x 1</div>
                            <div className="md:w-[322px] md:py-4 py-2 md:px-5 px-2 bg-[#FFF] text-[#767676] text-sm md:text-base leading-[143.75%]">389.99 $</div>
                            <div className="md:w-[322px] md:py-4 py-2 md:px-5 px-2 bg-[#FFF] text-[#262626] text-sm md:text-base md:font-bold font-medium leading-[143.75%]">Subtotal</div>
                            <div className="md:w-[322px] md:py-4 py-2 md:px-5 px-2 bg-[#FFF] text-[#767676] text-sm md:text-base leading-[143.75%]">389.99 $</div>
                            <div className="md:w-[322px] md:py-4 py-2 md:px-5 px-2 bg-[#FFF] text-[#262626] text-sm md:text-base md:font-bold font-medium leading-[143.75%]">Total</div>
                            <div className="md:w-[322px] md:py-4 py-2 md:px-5 px-2 bg-[#FFF] text-[#262626] text-sm md:text-base leading-[143.75%]">389.99 $</div>
                        </div>
                    </div>
                    <button onClick={manageSubmit} className='md:py-4 md:w-[200px] text-center py-[10px] w-[140px] bg-[#262626] border border-[#262626] text-white md:text-sm text-xs md:font-bold font-medium hover:bg-transparent hover:text-[#262626] duration-300 md:mt-[45px] mt-8'>
                        <Link to=''>Proceed to Pay</Link>
                    </button>
                </Container>
            </section>
        </div>
    )
}

export default Checkout