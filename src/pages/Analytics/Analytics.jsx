import React, { useState, useEffect } from 'react';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import AnalyticsComponent from '../../components/AnalyticsComponent/AnalyticsComponent';
import insights_icon from '../../assets/insights_icon.png';
import { store } from '../../app/store';
import axios from 'axios';


function Analytics() {

    const [collapsed, setCollapsed] = useState(true);
    const [transcript, setTranscript] = useState(localStorage.getItem('transcript'));
    const [suggestionList, setSuggestionList] = useState([]);
    const [questionList, setQuestionList] = useState([]);
    const [videoFileName, setVideoFileName] = useState(localStorage.getItem('videoFileName'));

    const lines = transcript.split('.');

    const groupedLines = [];

    for (let i = 0; i < lines.length; i += 2) {
        const line = lines[i] + lines[i + 1];

        // Create a div element with two lines of text if available
        groupedLines.push(
            <div key={i} className='mb-2'>
                {line}
            </div>
        );

    }


    useEffect(() => {

        const storedFinalQuestionList = localStorage.getItem('FinalQuestionList');

        if (storedFinalQuestionList) {
            // Parse the stored JSON string back into an array
            const parsedFinalQuestionList = JSON.parse(storedFinalQuestionList);
            setQuestionList(parsedFinalQuestionList);
        }

        const storedFinalSuggestionList = localStorage.getItem('FinalSuggestionList');

        if (storedFinalSuggestionList) {
            // Parse the stored JSON string back into an array
            const parsedFinalSuggestionList = JSON.parse(storedFinalSuggestionList);
            setSuggestionList(parsedFinalSuggestionList);
        }

        // fetchTranscriptDetails();

    }, []);


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
                            <video src={require(`C:/Users/yash/Downloads/${videoFileName}.webm`)} width="375" height="300" autoPlay loop controls />
                        </div>


                        <div className='flex justify-center items-center w-full'>
                            <div className='block mt-12 w-3/4 max-h-64 overflow-y-auto'>
                                {/* Render the grouped div elements */}
                                <div className='bg-white w-62 rounded-lg p-5 justify-center items-start border border-blue-200 m-3 text-blue-900 text-sm font-semibold'>

                                    {
                                        groupedLines.map((line, index) => (
                                            <div key={index}>
                                                {line}
                                            </div>
                                        ))
                                    }

                                </div>

                            </div>
                        </div>


                    </div>


                    {/* parent div making second row containing insights button and insights div */}

                    <div className={`${!collapsed ? 'hidden' : ''} flex flex-row justify-center items-center h-fit mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-l px-5 py-2.5 text-center mr-5
                    rounded-2xl
                    `}
                        onClick={() => setCollapsed(!collapsed)}
                    >



                        <img src={insights_icon} alt='insights_icon' className='w-5 h-5 ml-2 mr-2 cursor-pointer' />
                        <p className='text-sm font-normal cursor-pointer'>INSIGHTS</p>

                    </div>

                    <div className={`${collapsed ? 'hidden' : ''} w-full ml-2 mr-2 transition-all duration-500 ease-in-out transform translate-x-0`} style={{ maxWidth: collapsed ? '0' : '100vw', overflow: 'hidden' }}>

                        <AnalyticsComponent
                            collapsed={collapsed}
                            setCollapsed={setCollapsed}
                            suggestionList={suggestionList}
                            questionList={questionList}
                        />
                    </div>

                </div>



            </div>


        </div>
    )
}

export default Analytics;