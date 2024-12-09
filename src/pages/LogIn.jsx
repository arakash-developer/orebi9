import React, { useState } from "react";
import Container from "../Layers/Container";
import BreadCrumbs from "../Layers/BreadCrumbs";
import { MdErrorOutline } from "react-icons/md";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const LogIn = () => {
    // Email state
    const [email, setEmail] = useState();
    const [emailError, setEmailError] = useState(false);

    let manageEmail = (element) => {
        let emailValue = element.target.value;
        setEmail(emailValue);
        setEmailError(false);
    };

    // Show / Hide Password
    const [eye1, setEye1] = useState(true)

    // Password state
    const [password, setPassword] = useState();
    const [passwordError, setPasswordError] = useState(false);

    let managePassword = (element) => {
        let passwordValue = element.target.value;
        setPassword(passwordValue);
        setPasswordError(false);
    };

    // Submit button function
    let manageSubmit = () => {
        if (!email) {
            setEmailError(true)
        }
        if (!password) {
            setPasswordError(true)
        }
    }

    return (
        <div className="md:px-0 px-2">
            <section id="signup" className="md:py-[124px] py-10">
                <Container className="border-b border-[#cdcdcd]">
                    <BreadCrumbs />
                    <p className="md:text-base text-xs text-[#767676] max-w-[644px] mb-6 mt-12 md:mt-[127px] md:mb-[62px] md:leading-[187.5%] leading-[150.5%]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the.
                    </p>
                </Container>
                <Container className="border-b border-[#cdcdcd] md:pb-[70px] pb-16">
                    <h2 className="md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium my-4 md:mt-[58px] md:mb-[42px]">
                        Returning Customer
                    </h2>
                    <div className="userInfo flex flex-wrap md:gap-x-10 sm:justify-between md:justify-normal gap-y-6">
                        <div className="mail flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                            <label htmlFor="">Email address</label>
                            <input
                                onChange={manageEmail}
                                value={email}
                                type="email"
                                placeholder="company@domain.com"
                                className="md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none"
                            />
                            {emailError && (
                                <>
                                    <p className="md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0">
                                        This field is Required
                                    </p>
                                    <MdErrorOutline className="text-xs text-red-700 absolute bottom-[6px] right-0" />
                                </>
                            )}
                        </div>
                        <div className="Pass flex flex-col md:gap-[10px] gap-[6px] w-full sm:w-[47%] md:w-[508px] relative">
                            <label htmlFor="">Password</label>
                            <input
                                onChange={managePassword}
                                value={password}
                                type={eye1 ? "password" : "text"}
                                placeholder="Password"
                                className="md:pb-[17px] pb-2 text-sm text-[#262626] w-full border-b outline-none"
                            />
                            <BsFillEyeFill
                                onClick={() => setEye1(!eye1)}
                                className={`absolute bottom-[17px] right-0 ${eye1 ? "opacity-0" : "opacity-100"
                                    }`}
                            />
                            <BsFillEyeSlashFill
                                onClick={() => setEye1(!eye1)}
                                className={`absolute bottom-[17px] right-0 ${eye1 ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                            {passwordError && (
                                <>
                                    <p className="md:text-xs text-[10px] tracking-wide font-medium text-red-700 absolute md:bottom-[6px] bottom-0 left-0">
                                        This field is Required
                                    </p>
                                    <MdErrorOutline className="text-xs text-red-700 absolute bottom-[6px] right-0" />
                                </>
                            )}
                        </div>
                    </div>
                    <button onClick={manageSubmit} className='md:py-4 md:w-[200px] text-center py-[10px] w-[140px] bg-[#262626] border border-[#262626] text-white md:text-sm text-xs md:font-bold font-medium hover:bg-transparent hover:text-[#262626] duration-300 md:mt-[45px] mt-4'>
                        Log in
                    </button>
                </Container>
                <Container className='md:mt-[57px] mt-8 md:mb-[140px] mb-20'>
                    <h2 className='md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium'>
                    New Customer
                    </h2>
                    <p className='md:text-base text-sm text-[#767676] leading-[187.5%] max-w-[644px] md:mt-[38px] md:mb-[51px] my-9'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                    </p>
                    <button className='md:py-4 md:w-[200px] text-center py-[10px] w-[140px] bg-[#262626] border border-[#262626] text-white md:text-sm text-xs md:font-bold font-medium hover:bg-transparent hover:text-[#262626] duration-300 md:mt-[45px]'>
                        <Link to='/sign/up'>Continue</Link>
                    </button>
                </Container>
            </section>
        </div>
    );
};

export default LogIn;
