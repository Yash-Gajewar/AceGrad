import React from 'react'
import './Signup.css'
import microphone from '../../assets/microphone.png'
import Lottie from 'lottie-react'
import Interview from '../../assets/Interview.json'
import padlock from '../../assets/padlock.png'


const Signup = () => {
    return (
        <div className='container'>
            <div id="header">It's your time to speak like a <p id='leader'>LEADER</p> </div>
            <div id="nav" className='flex p-2 justify-between items-center'>
                <div className='flex justify-center items-center ml-5'>
                    <img src={microphone} alt="microphone"
                        width={70} height={50} />
                    <div>
                        <a class="text-3xl font-bold ml-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">AceGrad</a>
                    </div>
                </div>

                <div className='flex'>
                    <a href="/register" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mb-2 mr-5">Register</a>
                </div>

            </div>
            <div id="content1" className='flex flex-col justify-center items-center'>
                <div className='ml-48'>
                    <h2 class="text-blue-950 text-5xl font-bold dark:text-white">Ace your next</h2>
                    <h3 class="mt-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Job Interview</h3>
                    <p class="mt-5 text-lg font-normal text-gray-400 lg:text-xl dark:text-gray-400">Improve your communication skills by pracitsing through virtual interview. See past Interview Experiences of your Company and Excel in your Interview!</p>


                    {/* registeration section */}

                    {/* username section */}
                    <div className="flex mb-5 mt-5">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span>
                        <input type="text" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Username" />
                    </div>

                    {/* password section */}
                    <div className="flex mb-5">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                            <img src={padlock} alt="padlock"
                                width={15} height={15} />
                        </span>
                        <input type="password" id="website-admin" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Password" />
                    </div>


                    {/* submit button */}
                    <a href="/interview" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mt-5 mr-5">Enter</a>
                </div>

            </div>
            <div id="content2" className='flex justify-center items-center'>
                <Lottie animationData={Interview} style={{ width: 500, height: 500 }} />
            </div>
            <footer>Footer</footer>
        </div>
    )
}

export default Signup