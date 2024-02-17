import React from 'react'
import './Register.css'
import microphone from '../../assets/microphone.png'
import padlock from '../../assets/padlock.png'
import phone from '../../assets/phone.png'


const Register = () => {
    return (
        <div className='container'>
            <div id="header">Some random text of<p id='leader'>AceGrad</p> </div>
            <div id="nav" className='flex p-2 justify-between items-center'>
                <div className='flex justify-center items-center ml-5'>
                    <img src={microphone} alt="microphone"
                        width={70} height={50} />
                    <div>
                        <a class="text-3xl font-bold ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500" href="/">AceGrad</a>
                    </div>
                </div>


            </div>
            <div id="content1" className='flex flex-col justify-center items-center'>
                <div className='ml-24 w-2/3'>

                    {/* registeration section */}

                    {/* username section */}

                    <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                    <div className="flex mb-5">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span>
                        <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Username" />
                    </div>



                    {/* email id section */}


                    <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <div className="flex mb-5">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </span>
                        <input type="email" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email" />
                    </div>


                    {/* password section */}

                    <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <div className="flex mb-5">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <img src={padlock} alt="padlock"
                                width={15} height={15} />
                        </span>
                        <input type="password" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" />
                    </div>


                    {/* confirm password */}

                    <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                    <div className="flex mb-5">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <img src={padlock} alt="padlock"
                                width={15} height={15} />
                        </span>
                        <input type="password" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm Password" />
                    </div>


                    {/* mobile number */}

                    <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                    <div className="flex mb-5">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <img src={phone} alt="phone"
                                width={15} height={15} />
                        </span>
                        <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Mobile Number" />
                    </div>
                    <div className='flex items-center'>
                        <a href="/home" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mr-5">Register</a>
                        <p>Already have an Account?</p>
                        <a href="/" className="ml-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Login</a>

                    </div>




                </div>

            </div>
            <div id="content2" className='flex justify-center items-start flex-col'>
                <div>
                    <h1 class="text-blue-950 text-5xl font-bold dark:text-white">Welcome to</h1>
                </div>
                <div>
                    <h2 class="mt-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">AceGrad</h2>
                </div>
                <p class="mt-5 text-lg font-normal text-gray-400 lg:text-xl dark:text-gray-400">Improve your communication skills by pracitsing through virtual interview. See past Interview Experiences of your Company and Excel in your Interview!</p>

            </div>
            <footer>Footer</footer>
        </div>
    )
}

export default Register