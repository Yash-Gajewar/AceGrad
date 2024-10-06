import React, { useEffect, useState } from 'react'
import insights_icon from '../../assets/insights_icon.png'
import { Accordion } from "flowbite-react";
import axios from 'axios';


const AnalyticsComponent = (props) => {

    const [analyticsSelected, setAnalyticsSelected] = useState(true)
    const [questionListIndex, setQuestionListIndex] = useState(0)
    const minLength = Math.min(props.questionList.length, props.suggestionList.length);
    // const [transcript, setTranscript] = useState(localStorage.getItem('transcript'));

    const [fillerWordsCount, setFillerWordsCount] = useState(0);
    const [weakWordsCount, setWeakWordsCount] = useState(0);
    const [sentenceStartersCount, setSentenceStartersCount] = useState(0);
    const [negativeWordsCount, setNegativeWordsCount] = useState(0);

    const [fillerWordsPercentage, setFillerWordsPercentage] = useState(0);
    const [weakWordsPercentage, setWeakWordsPercentage] = useState(0);
    const [sentenceStartersPercentage, setSentenceStartersPercentage] = useState(0);
    const [negativeWordsPercentage, setNegativeWordsPercentage] = useState(0);



    useEffect(() => {
        fetchTranscriptDetails();
    }, [])


    const fetchTranscriptDetails = async () => {

        const formData = new FormData();
        formData.append('transcript', props.transcript);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/transcript/process_transcript/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);

            setFillerWordsCount(response.data.filler_words);
            setWeakWordsCount(response.data.weak_words);
            setNegativeWordsCount(response.data.negative_words);

            setFillerWordsPercentage(response.data.filler_words_percentage);
            setWeakWordsPercentage(response.data.weak_words_percentage);
            setSentenceStartersPercentage(response.data.sentence_starters_percentage);
            setNegativeWordsPercentage(response.data.negative_words_percentage);



        } catch (error) {
            console.error(error);
        }
    }



    return (


        props.collapsed ? <></> : (

            // parent div
            <div className='flex flex-col items-center max-w-[600px] bg-white h-[650px]'>

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

                <div className='flex flex-col max-w-full justify-center items-center ' >

                    {/* div to make scrollable suggestions and insights */}

                    <div className='block mt-5 max-w-full max-h-96 overflow-y-auto '>

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



                                <Accordion className='w-[470px] h-full p-4'>
                                    <Accordion.Panel style={{ marginTop: '20px' }}>
                                        <Accordion.Title className='p-2 text-lg font-medium'>{
                                            `Filler Words (${fillerWordsCount} / ${fillerWordsPercentage}%)`
                                        }</Accordion.Title>
                                        <div className='m-4 '>
                                            <Accordion.Content className='m-5 p-2'>
                                                <div className='flex justify-center items-center w-full h-16 bg-indigo-50 text-blue-900 p-11'>
                                                    {/* Nice Job! We did not find any non inclusiveness in your speech. */}
                                                    {
                                                        fillerWordsCount > 0 ? (
                                                            `You have used ${fillerWordsCount} filler words in your speech. You can improve by reducing the usage of filler words.`
                                                        ) : 'Nice Job! We did not find any filler words in your speech.'
                                                    }
                                                </div>
                                            </Accordion.Content>
                                        </div>
                                    </Accordion.Panel>



                                    <Accordion.Panel style={{ marginTop: '20px' }}>
                                        <Accordion.Title className='p-2 text-lg font-medium'>
                                            {
                                                `Weak Words (${weakWordsCount} / ${weakWordsPercentage}%)`
                                            }

                                        </Accordion.Title>
                                        <div className='m-4'>
                                            <Accordion.Content className='m-5'>
                                                <div className='flex justify-center items-center w-full h-16 bg-indigo-50 text-blue-900 p-11'>
                                                    {
                                                        weakWordsCount > 0 ? (
                                                            `You have used ${weakWordsCount} weak words in your speech. You can improve by using more strong words.`
                                                        ) : 'Nice Job! We did not find any weak words in your speech.'
                                                    }
                                                </div>
                                            </Accordion.Content>
                                        </div>
                                    </Accordion.Panel>


                                    <Accordion.Panel style={{ marginTop: '20px' }}>
                                        <Accordion.Title className='p-2 text-lg font-medium'>
                                            {
                                                `Sentence Starters (${sentenceStartersPercentage}%)`
                                            }
                                        </Accordion.Title>
                                        <div className='m-4'>
                                            <Accordion.Content className='m-5'>
                                                <div className='flex justify-center items-center w-full h-16 bg-indigo-50 text-blue-900 p-11'>
                                                    {
                                                        sentenceStartersCount > 0 ? (
                                                            `You have repeated  sentence starters ${sentenceStartersCount} % times in your speech. You can improve by using more strong words.`
                                                        ) : 'Nice Job! We did not find any repetition of sentence starters in your speech.'
                                                    }
                                                </div>
                                            </Accordion.Content>
                                        </div>
                                    </Accordion.Panel>


                                    <Accordion.Panel style={{ marginTop: '20px' }}>
                                        <Accordion.Title className='p-2 text-lg font-medium'>
                                            {
                                                `Negative Words (${negativeWordsCount} / ${negativeWordsPercentage}%)`
                                            }
                                        </Accordion.Title>
                                        <div className='m-4'>
                                            <Accordion.Content className='m-5'>
                                                <div className='flex justify-center items-center w-full h-16 bg-indigo-50 text-blue-900 p-11'>
                                                    {
                                                        negativeWordsCount > 0 ? (
                                                            `You have used ${negativeWordsCount} negative words in your speech. Avoid using negative words in your interview.`
                                                        ) : 'Nice Job! We did not find any negative words in your speech.'

                                                    }
                                                </div>
                                            </Accordion.Content>
                                        </div>
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