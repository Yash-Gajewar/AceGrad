import React, { useState } from 'react'
import insights_icon from '../../assets/insights_icon.png'
import { Accordion } from "flowbite-react";


const AnalyticsComponent = (props) => {

    const [analyticsSelected, setAnalyticsSelected] = useState(true)
    const [questionListIndex, setQuestionListIndex] = useState(0)
    const minLength = Math.min(props.questionList.length, props.suggestionList.length);


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
                    <div className='flex bg-indigo-50 rounded-2xl w-2/3 m-5 justify-around items-center'>

                        {/* tab 1 */}
                        <div
                            className={`flex w-1/2 justify-center items-center p-2 rounded-2xl ${analyticsSelected ? 'bg-white shadow-inner' : ''}`}
                            onClick={() => setAnalyticsSelected(true)}
                        >
                            Analytics
                        </div>


                        {/* tab 2 */}

                        <div
                            className={`flex w-1/2 justify-center items-center p-2 rounded-2xl ${!analyticsSelected ? 'bg-white shadow-inner' : ''}`}
                            onClick={() => setAnalyticsSelected(false)}
                        >
                            Suggesstions
                        </div>


                    </div>
                </div>


                {/* div containing insights and suggestions */}

                <div className='flex flex-col w-full justify-center items-center' >

                    {/* div to make scrollable suggestions and insights */}

                    <div className='block mt-5 w-11/12 max-h-96 overflow-y-auto'>

                        {
                            !analyticsSelected ? (

                                <>



                                    {


                                        <div className='flex justify-center items-center w-full'>
                                            <div className='block mt-12 w-full max-h-80 overflow-y-auto'>
                                                {/* Iterate over both lists simultaneously */}
                                                {Array.from({ length: minLength }, (_, index) => (
                                                    <div key={index} className='flex flex-col justify-center items-start'>
                                                        {/* Display question from QuestionList */}
                                                        <div className='bg-white w-62 rounded-lg p-5 border border-blue-200 m-4 text-blue-900 text-sm font-semibold'>
                                                            {props.questionList[index]}
                                                        </div>
                                                        {/* Display suggestion from SuggestionList */}
                                                        <div className='bg-white w-62 rounded-lg p-5 border border-blue-200 m-4 text-blue-900 text-sm font-semibold'>
                                                            {props.suggestionList[index]}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>


                                    }


                                </>
                            ) : (
                                <Accordion collapseAll>
                                    <Accordion.Panel style={{ marginTop: '20px' }}>
                                        <Accordion.Title className='p-2 text-lg font-medium'>Non Inclusiveness</Accordion.Title>
                                        <Accordion.Content className='m-5'>
                                            <div className='flex justify-center items-center w-full h-16 bg-indigo-50 text-blue-900'>
                                                Nice Job! We did not find any non inclusiveness in your speech.
                                            </div>
                                        </Accordion.Content>
                                    </Accordion.Panel>


                                    <Accordion.Panel style={{ marginTop: '20px' }}>
                                        <Accordion.Title className='p-2 text-lg font-medium'>Non Inclusiveness</Accordion.Title>
                                        <Accordion.Content className='m-5'>
                                            <div className='flex justify-center items-center w-full h-16 bg-indigo-50 text-blue-900'>
                                                Nice Job! We did not find any non inclusiveness in your speech.
                                            </div>
                                        </Accordion.Content>
                                    </Accordion.Panel>


                                    <Accordion.Panel className='mt-5'>
                                        <Accordion.Title className='p-2 text-lg font-medium'>Non Inclusiveness</Accordion.Title>
                                        <Accordion.Content className='m-5'>
                                            <div className='flex justify-center items-center w-full h-16 bg-indigo-50 text-blue-900'>
                                                Nice Job! We did not find any non inclusiveness in your speech.
                                            </div>
                                        </Accordion.Content>
                                    </Accordion.Panel>


                                    <Accordion.Panel className='mt-5'>
                                        <Accordion.Title className='p-2 text-lg font-medium'>Non Inclusiveness</Accordion.Title>
                                        <Accordion.Content className='m-5'>
                                            <div className='flex justify-center items-center w-full h-16 bg-indigo-50 text-blue-900'>
                                                Nice Job! We did not find any non inclusiveness in your speech.
                                            </div>
                                        </Accordion.Content>
                                    </Accordion.Panel>


                                </Accordion>
                            )
                        }




                    </div>

                </div>



            </div>
        )


    )
}

export default AnalyticsComponent