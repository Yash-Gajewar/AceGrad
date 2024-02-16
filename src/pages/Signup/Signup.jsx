import React from 'react'
import './Signup.css'
import microphone from '../../assets/microphone.png'

const Signup = () => {
    return (
        <div className='container'>
            <div id="header">It's your time to speak like a <p id='leader'>LEADER</p> </div>
            <div id="nav" className='flex p-2 justify-between items-center'>
                <div className='flex justify-center items-center ml-5'>
                    <img src={microphone} alt="microphone"
                        width={70} height={50} />
                    <div>
                    <a class="text-3xl font-bold ml-4 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">AceGrad</a>
                    </div>
                </div>

                <div className='flex'>
                    <div>
                        <a href='/login'>Log In</a>
                    </div>
                    <div>
                        <a href='/features'>Features</a>
                    </div>
                </div>

            </div>
            <div id="content1">Content1</div>
            <div id="content2">Content2</div>
            <footer>Footer</footer>
        </div>
    )
}

export default Signup