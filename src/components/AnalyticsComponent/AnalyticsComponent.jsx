import React from 'react'
import insights_icon from '../../assets/insights_icon.png'

const AnalyticsComponent = (props) => {
    return (


        props.collapsed ? <></> : (

            // parent div
            <div className='flex flex-row justify-center w-full h-full bg-slate-500'>

                {/* heading div */}

                <div className='flex text-md font-sm p-2 w-full h-fit bg-indigo-100'>
                    <div>
                        <img src={insights_icon} alt='insights icon' className='w-7 h-7 mr-2 cursor-pointer' 
                            onClick={() => props.setCollapsed(!props.collapsed)}
                        />

                    </div>

                    <div className='flex justify-center items-center w-full'>
                        Your Speaking Insights
                    </div>
                </div>



            </div>
        )


    )
}

export default AnalyticsComponent