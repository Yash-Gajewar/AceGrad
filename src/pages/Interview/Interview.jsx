import React, { useState } from 'react';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import { useRecordWebcam } from "react-record-webcam";
import './Interview.css';
import help from '../../assets/help.png';
import DropdownBox from '../../components/DropdownBox/DropdownBox';
import pencil from '../../assets/pencil.png';
import check from '../../assets/check.png';
import camera_on from '../../assets/camera-on.png';
import camera_off from '../../assets/camera-off.png';
import video from '../../assets/video.png';

function Interview() {

    const InterviewerType = ['Professional', 'Friendly', 'Technical', 'Behavioural'];
    const [interviewer, setInterviewer] = useState('');
    const [addQuestion, setAddQuestion] = useState(false);
    const [question, setQuestion] = useState('');
    
    const [questionList, setQuestionList] = useState([
        'Tell me about yourself',
    ]);
    const [cameraOn, setCameraOn] = useState(false);


    const {
        activeRecordings,
        createRecording,
        openCamera,
        startRecording,
        stopRecording,
        closeCamera
    } = useRecordWebcam();


    const example = async () => {
        try {
            const recording = await createRecording();
            if (!recording) return;
            await openCamera(recording.id);
            await startRecording(recording.id);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            await stopRecording(recording.id);
        } catch (error) {
            console.error({ error });
        }
    };

    return (
        <div className='flex'>

            {/* side bar div */}

            <SidebarComponent />
            {/* main content div */}

            <div className="InterviewContainer">

                <div className="InterviewHeading flex flex-col justify-center items-start">
                    <div className='flex ml-16'>
                        <img src={help} alt="help" width={25} height={25} />
                        <p className='ml-2'>Interview Practice</p>
                    </div>
                    <div className='ml-24'>
                        <p>Let's Get Your Dream Job</p>
                    </div>
                </div>

                <div className="InterviewDescription p-5">
                    Hi Yash! 👋 Let's continue your learning journey.
                    <br></br>
                    Enter the number of Questions. Write any Questions you want to answer. Additional Questions will be AI generated.
                </div>

                <div className="InterviewQuestions">
                    <div className='mt-2 mb-5'>
                        Personalize Your Interview
                    </div>

                    {/* Role */}

                    <div className='mb-2 mt-2 mr-10'>
                        <input type="text" placeholder="Enter Your Role eg. Software Enginner" className='p-2.5 rounded-lg w-full' />
                    </div>

                    {/* Company and Interviewer Type */}

                    <div className='CompanyInterviewerContainer justify-center items-center'>

                        <div className="CompanyContainer">
                            <input type="text" placeholder="Type any Company" className='p-2.5 rounded-lg w-full' />
                        </div>

                        <div className="InterviewerContainer ml-10">
                            <DropdownBox
                                InterviewerType={InterviewerType}
                                setInterviewer={setInterviewer}
                            />
                        </div>

                    </div>

                    {/* Interview Questions */}
                    <div>

                        <div className='flex mt-5 mb-5 w-full flex-row justify-between'>
                            <div>
                                Interview Practice Questions
                            </div>

                            <div onClick={() => setAddQuestion(true)}>
                                <img src={pencil} alt="pencil" width={25} height={25} />
                            </div>
                        </div>

                        {
                            questionList.map((question) => (
                                <div className='p-2.5 rounded-lg bg-white w-full mt-2'>
                                    {question}
                                </div>
                            ))
                        }

                        {
                            addQuestion ? (
                                <div className='flex mt-2 mb-2 pl-2 pr-2 flex-row justify-between bg-white rounded-lg'>
                                    <input type="text" placeholder="Add Question" className='p-2.5 w-3/4'
                                        onChange={(e) => setQuestion(e.target.value)}
                                    />
                                    <img src={check} alt="check" width={25} onClick={() => {
                                        setQuestionList([...questionList, question])
                                        setAddQuestion(false)
                                    }

                                    } />
                                </div>

                            ) : <></>





                        }

                    </div>
                </div>

                {/* camera section */}

                <div className="InterviewVideo">
                    <div className="demo w-full h-1/2">
                        <div className="recordings">
                            {
                                cameraOn ? (
                                    <img src={camera_off} alt="camera_off" width={30} height={30} onClick={() => {
                                        setCameraOn(false)
                                    }} className='cursor-pointer' />
                                ) : (
                                    <>
                                        <img src={camera_on} alt="camera_on" width={40} height={40} onClick={() => {
                                            setCameraOn(true)
                                        }} className='cursor-pointer' />

                                        <div className='flex w-4/5 ml-16 h-1/2 p-24 bg-gradient-to-r from-purple-600 to-blue-500 rounded-md justify-center items-center'>
                                            <img src={video} alt="video" width={100} height={100} />
                                        </div>
                                    </>

                                )
                            }

                            {activeRecordings.map((recording) => (
                                <div key={recording.id}>
                                    <video ref={recording.webcamRef} autoPlay muted />
                                    <div className={recording.status === "STOPPED" ? "show" : "hide"}></div>
                                </div>
                            ))}


                            

                        </div>
                    </div>

                    {/* <a href="/interview" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mt-5 mr-5">
                                Start Interview
                            </a> */}

                </div>
            </div>





        </div>


    );
}

export default Interview;