import React, { useState } from 'react';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';

import { useRecordWebcam } from "react-record-webcam";
import '../Interview/Interview.css';
import help from '../../assets/help.png';

import camera_on from '../../assets/camera-on.png';
import camera_off from '../../assets/camera-off.png';
import video from '../../assets/video.png';

import play from '../../assets/play.png';
import pause from '../../assets/pause.png';
import stop from '../../assets/stop.png';


function Session() {

    const [questionList, setQuestionList] = useState([
        'Tell me about yourself',
        'What project did you work on during your Full Stack Developer Internship at Greyfeathers Pvt. Ltd. and what technologies did you use?',
        'Can you explain how you utilized ML algorithms like Na¨ıve Bayes, SVM, and Random Forest in the development of DocBot?',
        'Can you describe your experience working remotely for Orane Intelli Solutions and the challenges you faced?',
        'What inspired the creation of NoteVault and how does it benefit the students of SPIT?',
        'How does Krishi Sathi connect farmers and lending institutions, and what was your role in its development?',
        'What hands-on experience did you gain while working on different projects and internships in terms of languages and technologies?',
        'How have you applied your academic learnings from your Bachelor\'s Degree in Computer Engineering and your Diploma in Computer Engineering to your internships and projects?',
        'Can you explain a situation where you had to use your skills with React Native, Firebase, MongoDB in a practical scenario?',
        'How familiar are you with MongoDB, MySql Workbench, and Tally ERP-9.0 and can you give examples of when you\'ve used these in a project or professional setting?',
        'You were the runner up at Vidyalankar Hackathon and qualified for SIH screening, could you please tell us more about your experience during the Hackathon and how you approached it?'
    ]);
    const [cameraOn, setCameraOn] = useState(false);
    const [index, setIndex] = useState(0);

    const [recordingId, setRecordingId] = useState("");

    const { createRecording, openCamera, startRecording, stopRecording, download, activeRecordings, pauseRecording, resumeRecording } = useRecordWebcam()

    const [recordingStarted, setRecordingStarted] = useState(false);
    const [startInterviewDisabled, setStartInterviewDisabled] = useState(false);

    const recordVideo = async () => {
        try {
            const recording = await createRecording();
            if (!recording) return;

            setRecordingId(recording.id);

            await openCamera(recording.id);
        } catch (error) {
            console.error({ error });
        }
    };

    const downloadVideo = async () => {
        await stopRecording(recordingId);
        await download(recordingId);
    }

    const playButtonPressed = async () => {

        if (recordingStarted) {
            await pauseRecording(recordingId);
            setRecordingStarted(false);
        }

        else {
            await resumeRecording(recordingId);
            setRecordingStarted(true);
        }

    }

    const startInterviewPressed = async () => {
        await startRecording(recordingId);
        setRecordingStarted(true);
        setStartInterviewDisabled(true);
    }




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
                        <p>Session in Progress</p>
                    </div>
                </div>

                <div className="InterviewDescription p-5">
                    Hi Yash! 👋
                    <br></br>
                    Answer the following questions to the best of your ability. Once completed click on Next Question. Good luck! 🍀
                </div>

                <div className='SessionQuestions bg-white'>
                    <div className='p-5 text-black bg-violet-100 '>

                        {
                            questionList[index]
                        }

                    </div>

                    <div className='flex justify-center items-center cursor-default'>
                        <button
                            disabled={startInterviewDisabled}
                            onClick={() => startInterviewPressed()}
                            className={`text-white ${startInterviewDisabled ? 'cursor-not-allowed bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800' : 'bg-gradient-to-br from-purple-400 via-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'} font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mt-5 mr-5`}
                        >
                            Start Interview
                        </button>
                    </div>

                </div>




                {/* camera section */}

                <div className="InterviewVideo">
                    <div className="demo w-full h-1/2">
                        <div className="recordings">
                            {
                                cameraOn ? (
                                    <>
                                        <img src={camera_on} alt="camera_on" width={40} height={40} onClick={() => {
                                            setCameraOn(false)
                                        }} className='cursor-pointer' />

                                        <div className='w-4/5 ml-16 h-8/9'>
                                            {activeRecordings.map((recording) => (
                                                <div key={recording.id}>
                                                    <video ref={recording.webcamRef} autoPlay muted className='rounded-md' />
                                                    <div className={recording.status === "STOPPED" ? "show" : "hide"}></div>
                                                </div>
                                            ))}
                                        </div>
                                    </>

                                ) : (
                                    <>
                                        <img src={camera_off} alt="camera_off" width={40} height={40} onClick={() => {
                                            setCameraOn(true)
                                            recordVideo()
                                        }} className='cursor-pointer' />

                                        <div className='flex w-4/5 ml-16 h-1/2 p-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-md justify-center items-center'>
                                            <div class="flex justify-center items-center w-32 h-32 bg-white rounded-full">
                                                <img src={video} alt="video" width={100} height={100} />
                                            </div>
                                        </div>
                                    </>

                                )
                            }




                            <div className='flex justify-center items-center cursor-default'>
                                <button onClick={() => setIndex(index + 1)} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mt-5 mr-5'>Next Question</button>
                            </div>


                            <div className='flex justify-center items-center cursor-default'>
                                <button className='mt-5 mr-4' onClick={() => playButtonPressed()}>
                                    {
                                        recordingStarted ? <img src={pause} width={30} height={30} alt="Pause" /> : <img src={play} width={35} height={35} alt="Start" />
                                    }
                                </button>

                                <button className='mt-5 mr-4' onClick={() => { downloadVideo(); }}>
                                    <img src={stop} width={35} height={35} alt="End" />
                                </button>
                            </div>








                        </div>
                    </div>







                </div>
            </div>





        </div >


    );
}



export default Session;