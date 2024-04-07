import React from 'react'
import insights_icon from '../../assets/insights_icon.png'

const AnalyticsComponent = (props) => {
    return (


        props.collapsed ? <></> : (

            // parent div
            <div className='flex flex-col items-center w-full h-full bg-white'>

                {/* heading div */}

                <div className='flex text-md font-sm p-2 w-full h-fit bg-indigo-50'>
                    <div>
                        <img src={insights_icon} alt='insights icon' className='w-7 h-7 mr-2 cursor-pointer ml-2' 
                            onClick={() => props.setCollapsed(!props.collapsed)}
                        />

                    </div>

                    <div className='flex justify-center items-center w-full'>
                        Your Speaking Insights
                    </div>
                </div>
                
                {/* tab parent holder */}
                <div className='flex bg-white shadow-lg mt-5 w-full justify-center items-end cursor-pointer'>

                    {/* tab holder */}
                    <div className='flex bg-indigo-50 rounded-2xl w-2/3 m-5 justify-around items-center p-3'>

                        {/* tab 1 */}
                        <div className='flex bg-white w-1/2 h-full justify-center items-center' >
                            Analytics
                        </div>


                        {/* tab 2 */}
                        <div className='flex justify-center items-center w-1/2'>
                            Suggestions
                        </div>
                    </div>
                </div>



            </div>
        )


    )
}

export default AnalyticsComponent