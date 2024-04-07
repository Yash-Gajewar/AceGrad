import React, { useState } from 'react';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import AnalyticsComponent from '../../components/AnalyticsComponent/AnalyticsComponent';
import insights_icon from '../../assets/insights_icon.png';


function Analytics() {

    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className='flex bg-gray-100 w-full h-full'>

            <SidebarComponent />

            <div className='flex flex-col w-full h-full items-center'>

                <div className="flex justify-center items-start p-5 text-lg bg-white shadow-md w-full text-blue-900 font-medium">
                    Interview At Oracle
                </div>

                {/* main div with 2 rows first will contain video and transcript another will containt insights button and insights div */}
                <div className='flex flex-row'>

                    {/* parent div making first row containing video and transcript */}
                    <div>

                        <div className='flex justify-center items-center mt-5'>
                            <video src={require('C:/Users/yash/Downloads/1712429767388.webm')} width="375" height="300" autoPlay loop controls>
                            </video>
                        </div>


                        <div className='flex justify-center items-center w-full'>

                            <div className='block mt-12 w-3/4 max-h-64 overflow-y-auto'>

                                <div className='bg-white w-62 rounded-lg p-5 justify-center items-start border border-blue-200 m-3 text-blue-900 text-sm font-semibold'>
                                    Hello, sir, my name is and I'm from Kan. I have pursued my civil engineering degree from Dake College from Mumbai University itself, post which I got an, uh,  job opportunity to work as a structural engineer and Australia based company. Uh,  its name is Ley.
                                </div>

                                <div className='bg-white w-62 rounded-lg p-5 justify-center items-start border border-blue-200 m-3 text-blue-900 text-sm font-semibold'>
                                    Hello, sir, my name is and I'm from Kan. I have pursued my civil engineering degree from Dake College from Mumbai University itself, post which I got an, uh,  job opportunity to work as a structural engineer and Australia based company. Uh,  its name is Ley.
                                </div>

                                <div className='bg-white w-62 rounded-lg p-5 justify-center items-start border border-blue-200 m-3 text-blue-900 text-sm font-semibold'>
                                    Hello, sir, my name is and I'm from Kan. I have pursued my civil engineering degree from Dake College from Mumbai University itself, post which I got an, uh,  job opportunity to work as a structural engineer and Australia based company. Uh,  its name is Ley.
                                </div>

                                <div className='bg-white w-62 rounded-lg p-5 justify-center items-start border border-blue-200 m-3 text-blue-900 text-sm font-semibold'>
                                    Hello, sir, my name is and I'm from Kan. I have pursued my civil engineering degree from Dake College from Mumbai University itself, post which I got an, uh,  job opportunity to work as a structural engineer and Australia based company. Uh,  its name is Ley.
                                </div>

                                <div className='bg-white w-62 rounded-lg p-5 justify-center items-start border border-blue-200 m-3 text-blue-900 text-sm font-semibold'>
                                    Hello, sir, my name is and I'm from Kan. I have pursued my civil engineering degree from Dake College from Mumbai University itself, post which I got an, uh,  job opportunity to work as a structural engineer and Australia based company. Uh,  its name is Ley.
                                </div>

                                <div className='bg-white w-62 rounded-lg p-5 justify-center items-start border border-blue-200 m-3 text-blue-900 text-sm font-semibold'>
                                    Hello, sir, my name is and I'm from Kan. I have pursued my civil engineering degree from Dake College from Mumbai University itself, post which I got an, uh,  job opportunity to work as a structural engineer and Australia based company. Uh,  its name is Ley.
                                </div>

                                <div className='bg-white w-62 rounded-lg p-5 justify-center items-start border border-blue-200 m-3 text-blue-900 text-sm font-semibold'>
                                    Hello, sir, my name is and I'm from Kan. I have pursued my civil engineering degree from Dake College from Mumbai University itself, post which I got an, uh,  job opportunity to work as a structural engineer and Australia based company. Uh,  its name is Ley.
                                </div>

                            </div>

                        </div>


                    </div>


                    {/* parent div making second row containing insights button and insights div */}

                    <div className={`${!collapsed ? 'hidden' : ''} flex flex-row justify-center items-center h-fit mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-l px-5 py-2.5 text-center me-2 mr-5
                    rounded-2xl
                    `}
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <img src={insights_icon} alt='insights_icon' className='w-5 h-5 mr-2 cursor-pointer' />

                        <button>Insights</button>
                    </div>

                    <div className={`${collapsed ? 'hidden' : ''} w-full transition-all duration-500 ease-in-out transform translate-x-0`} style={{ maxWidth: collapsed ? '0' : '100vw', overflow: 'hidden' }}>

                        <AnalyticsComponent
                            collapsed={collapsed}
                            setCollapsed={setCollapsed}
                        />
                    </div>



                </div>


            </div>


        </div>
    )
}

export default Analytics;