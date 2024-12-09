import React, { useState } from 'react'
import Container from '../Layers/Container'
import BreadCrumbs from '../Layers/BreadCrumbs'
import { MdErrorOutline } from 'react-icons/md'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

const SignUp = () => {

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
    const [adress1, setAdress1] = useState()
    const [adress1Error, setAdress1Error] = useState(false)

    let manageAdress1 = (element) => {
        let adress1Value = element.target.value
        setAdress1(adress1Value)
        setAdress1Error(false)
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

    // Show / Hide Password
    const [eye1, setEye1] = useState(true)
    const [eye2, setEye2] = useState(true)

    // Password state
    const [password, setPassword] = useState()
    const [passwordError, setPasswordError] = useState(false)
    const [passCondition, setPassCondition] = useState()

    let managePassword = (element) => {
        let passwordValue = element.target.value
        setPassword(passwordValue)
        setPasswordError(false)
        setPassCondition('')
        if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)) {
            setPassCondition('Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.')
        } else {
            setPassCondition('')
        }

    }

    // Retype Password state
    const [rePassword, setRePassword] = useState()
    const [rePasswordError, setRePasswordError] = useState(false)
    const [passCondition2, setPassCondition2] = useState()

    let manageRePassword = (element) => {
        let rePasswordValue = element.target.value
        setRePassword(rePasswordValue)
        setRePasswordError(false)
        setPassCondition2('')
        if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)) {
            setPassCondition2('Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.')
        } else {
            setPassCondition2('')
        }

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
    let division = ['Barishal', 'Chattogram', 'Dhaka', 'Khulna', 'Rajshahi', 'Rangpur', 'Mymensingh', 'Sylhet']

    // District array
    let district = [
        "Barguna", "Barishal", "Bhola", "Jhalokathi", "Patuakhali", "Pirojpur", "Bandarban", "Brahmanbaria", "Chandpur", "Chattogram", "Cumilla", "Cox's Bazar", "Feni", "Khagrachari", "Lakshmipur", "Noakhali", "Rangamati", "Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail", "Bagerhat", "Chuadanga", "Jashore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira",
        "Jamalpur", "Mymensingh", "Netrokona", "Sherpur", "Bogra", "Joypurhat", "Naogaon", "Natore", "Chapai Nawabganj", "Pabna", "Rajshahi", "Sirajganj", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon",
        "Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"
    ]

    return (
        <div className='md:px-0 px-2'>
            <section id="signup" className='md:py-[124px] py-10'>
                <Container className='border-b border-[#cdcdcd]'>
                    <BreadCrumbs />
                    <p className='md:text-base text-xs text-[#767676] max-w-[644px] mb-6 mt-12 md:mt-[127px] md:mb-[62px] md:leading-[187.5%] leading-[150.5%]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                    </p>
                </Container>
                <Container className='border-b border-[#cdcdcd] pb-[69px]'>
                    <h2 className='md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium my-4 md:mt-[58px] md:mb-[42px]'>
                        Your Personal Details
                    </h2>
                    <div className="userInfo flex flex-wrap md:gap-x-10 sm:justify-between md:justify-normal gap-y-6">
                        <div className="fname flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                            <label htmlFor="">
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
                            <label htmlFor="">
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
                        <div className="mail flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                            <label htmlFor="">
                                Email address
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
                        <div className="telephone flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                            <label htmlFor="">
                                Telephone
                            </label>
                            <input onChange={manageTel} value={tel} type="tel" placeholder='Your phone number' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
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
                    </div>
                </Container>
                <Container className='border-b border-[#cdcdcd] pb-[69px]'>
                    <h2 className='md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium my-4 md:mt-[58px] md:mb-[42px]'>
                        New Customer
                    </h2>
                    <div className="userInfo flex flex-wrap md:gap-x-10 sm:justify-between md:justify-normal gap-y-6">
                        <div className="adress1 flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                            <label htmlFor="">
                                Address 1
                            </label>
                            <input onChange={manageAdress1} value={adress1} type="text" placeholder='example: 4279 Zboncak Port Suite 6212' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
                            {
                                adress1Error && (
                                    <>
                                        <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                            This field is Required
                                        </p>
                                        <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0' />
                                    </>
                                )
                            }
                        </div>
                        <div className="adress2 flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px]">
                            <label htmlFor="">
                                Address 2
                            </label>
                            <input type="text" placeholder='- ( Optional )' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
                        </div>
                        <div className="city flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                            <label htmlFor="">
                                City
                            </label>
                            <input onChange={manageCity} value={city} type="text" placeholder='Your City' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
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
                        <div className="postcode flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                            <label htmlFor="">
                                Post Code
                            </label>
                            <input onChange={managePost} value={post} type="text" placeholder='example: 05228' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
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
                        <div className="division flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                            <label htmlFor="">
                                Division
                            </label>
                            <select name="" id="" className='md:pb-[17px] pb-2 text-sm text-[#767676] w-full border-b outline-none bg-white'>
                                <option value="">Please select</option>
                                {
                                    division.map((item, index) => (
                                        <option key={index} value="">{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="district flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                            <label htmlFor="">
                                District
                            </label>
                            <select name="" id="" className='md:pb-[17px] pb-2 text-sm text-[#767676] w-full border-b outline-none bg-white'>
                                <option value="">Please select</option>
                                {
                                    district.map((item, index) => (
                                        <option key={index} value="">{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </Container>
                <Container className='border-b border-[#cdcdcd] pb-[69px]'>
                    <h2 className='md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium my-4 md:mt-[58px] md:mb-[42px]'>
                        Your Password
                    </h2>
                    <div className="userInfo flex flex-wrap md:gap-x-10 sm:justify-between md:justify-normal gap-y-6">
                        <div className="Pass flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                            <label htmlFor="">
                                Password
                            </label>
                            <input onChange={managePassword} value={password} type={eye1 ? 'password' : 'text'} placeholder='Password' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
                            <BsFillEyeFill onClick={() => setEye1(!eye1)} className={`absolute bottom-[17px] right-0 ${eye1 ? 'opacity-0' : 'opacity-100'}`} />
                            <BsFillEyeSlashFill onClick={() => setEye1(!eye1)} className={`absolute bottom-[17px] right-0 ${eye1 ? 'opacity-100' : 'opacity-0'}`} />
                            <p className='md:text-xs text-[9px] md:tracking-wide font-medium text-red-700 absolute top-full left-0'>
                                {passCondition}
                            </p>
                            {
                                passwordError && (
                                    <>
                                        <p className='md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0'>
                                            This field is Required
                                        </p>
                                        <MdErrorOutline className='text-xs text-red-700 absolute bottom-[6px] right-0' />
                                    </>
                                )
                            }
                        </div>
                        <div className="rePass flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                            <label htmlFor="">
                                Repeat Password
                            </label>
                            <input onChange={manageRePassword} value={rePassword} type={eye2 ? 'password' : 'text'} placeholder='Repeat Password' className='md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none' />
                            <BsFillEyeFill onClick={() => setEye2(!eye2)} className={`absolute bottom-[17px] right-0 ${eye2 ? 'opacity-0' : 'opacity-100'}`} />
                            <BsFillEyeSlashFill onClick={() => setEye2(!eye2)} className={`absolute bottom-[17px] right-0 ${eye2 ? 'opacity-100' : 'opacity-0'}`} />
                            <p className='md:text-xs text-[9px] md:tracking-wide font-medium text-red-700 absolute top-full left-0'>
                                {passCondition2}
                            </p>
                            {
                                rePasswordError && (
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
                </Container>
                <Container className='md:pt-16 pt-8'>
                    <div className='flex md:gap-4 gap-2 items-center'>
                        <input id='subscribe' type="checkbox" className='w-[11px] h-[11px] md:w-3 md:h-3 relative appearance-none border border-[#767676] after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[#767676] after:h-[7px] after:w-[7px] md:after:h-2 md:after:w-2 after:opacity-0 checked:after:opacity-100' />
                        <label htmlFor='subscribe' className='md:text-base text-xs text-[#767676] md:leading-[187.5%] leading-[150.5%]'>
                            I have read and agree to the Privacy Policy
                        </label>
                    </div>
                    <div className='flex md:gap-9 gap-6 md:mt-[23px] mt-3 md:mb-[27px] mb-5'>
                        <p className='md:text-base text-xs text-[#767676] md:leading-[187.5%] leading-[150.5%]'>
                            Subscribe Newsletter
                        </p>
                        <div className='flex md:gap-4 gap-2 items-center'>
                            <input id='yes' name='newsletter' type="radio" className='w-[11px] h-[11px] md:w-3 md:h-3 relative appearance-none border border-[#767676] after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[#767676] after:h-[7px] after:w-[7px] md:after:h-2 md:after:w-2 after:opacity-0 checked:after:opacity-100' />
                            <label htmlFor='yes' className='md:text-base text-xs text-[#767676] md:leading-[187.5%] leading-[150.5%]'>
                                Yes
                            </label>
                        </div>
                        <div className='flex md:gap-4 gap-2 items-center'>
                            <input id='no' name='newsletter' type="radio" className='w-[11px] h-[11px] md:w-3 md:h-3 relative appearance-none border border-[#767676] after:content-[""] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[#767676] after:h-[7px] after:w-[7px] md:after:h-2 md:after:w-2 after:opacity-0 checked:after:opacity-100' />
                            <label htmlFor='no' className='md:text-base text-xs text-[#767676] md:leading-[187.5%] leading-[150.5%]'>
                                No
                            </label>
                        </div>
                    </div>
                    <button onClick={manageSubmit} className='md:py-4 md:px-20 py-[10px] px-10 bg-[#262626] border border-[#262626] text-white md:text-sm text-xs md:font-bold font-medium hover:bg-transparent hover:text-[#262626] duration-300'>
                        Log in
                    </button>
                </Container>
            </section>
        </div>
    )
}

export default SignUp