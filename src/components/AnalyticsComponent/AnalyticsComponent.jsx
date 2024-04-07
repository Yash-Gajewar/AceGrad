import React from 'react'

const AnalyticsComponent = (props) => {
    return (


       props.collapsed ? <></> : (
        <div className='flex flex-row justify-center w-full h-full bg-slate-500'>
            <div className='flex text-md font-sm justify-center p-2 w-full h-fit bg-indigo-100'>
                Your Speaking Insights
            </div>

        </div> 
       )


    )
}

export default AnalyticsComponent