import React, { useState, useEffect } from 'react';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';

import { useRecordWebcam, RecordWebcam } from "react-record-webcam";
import '../Interview/Interview.css';
import help from '../../assets/help.png';

import camera_on from '../../assets/camera-on.png';
import camera_off from '../../assets/camera-off.png';
import video from '../../assets/video.png';

import play from '../../assets/play.png';
import pause from '../../assets/pause.png';
import stop_icon from '../../assets/stop_icon.png';

import { useNavigate } from 'react-router-dom';


// import { storage } from '../../firebase';
// import { ref, uploadBytes } from "firebase/storage";
// import { v4 } from 'uuid';
// import { getDownloadURL } from 'firebase/storage';


// import { useCheetah } from "@picovoice/cheetah-react";

let finalTranscript = '';

function Session() {

    const navigate = useNavigate();


    const [questionList, setQuestionList] = useState([]);

    // const {
    //     result,
    //     isLoaded,
    //     isListening,
    //     error,
    //     init,
    //     start,
    //     stop,
    // } = useCheetah();

    // const initEngine = async () => {
    //     await init(
    //         "3TGsoy0Aky13aXHhvEld4GSQNGhHiqirFH6HbpOT4tPMwOtIqA8ZCA==",
    //         { publicPath: "https://yash-gajewar.github.io/Speech_To_Text/filler_words_model.pv" },
    //         { enableAutomaticPunctuation: true }
    //     );
    // };


    const [cameraOn, setCameraOn] = useState(false);
    const [index, setIndex] = useState(0);

    const [recordingId, setRecordingId] = useState("");

    const { createRecording, openCamera, closeCamera, startRecording, stopRecording, download, activeRecordings, pauseRecording, resumeRecording } = useRecordWebcam()


    const [recordingStarted, setRecordingStarted] = useState(false);
    const [startInterviewDisabled, setStartInterviewDisabled] = useState(false);

    const [transcriptSet, setTranscriptSet] = useState(new Set());

    const[currentQuestion, setCurrentQuestion] = useState(1);

    // var responses = [];


    useEffect(() => {
        // Retrieve FinalQuestionList from local storage
        const storedFinalQuestionList = localStorage.getItem('FinalQuestionList');

        if (storedFinalQuestionList) {
            // Parse the stored JSON string back into an array
            const parsedFinalQuestionList = JSON.parse(storedFinalQuestionList);
            setQuestionList(parsedFinalQuestionList);
        }

        // pico voice initialization
        // initEngine();


        // Initialize mediaRecorder after accessing the media stream

        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            // console.log(stream)

            const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });

            const socket = new WebSocket('https://api.deepgram.com/v1/listen?model=nova-2-meeting&dictation=true&punctuate=true&filler_words=true&smart_format=true&endpointing=100', ['token', 'ce6df275da0473562a0fd0d95eef0d78fcbb8fda']);

            socket.onopen = () => {
                mediaRecorder.addEventListener('dataavailable', (event) => {
                    socket.send(event.data);
                })

                mediaRecorder.start(250);
            }

            socket.onmessage = (event) => {
                // console.log(event.data);

                const received = JSON.parse(event.data);
                const transcript = received.channel.alternatives[0].transcript;

                // console.log(received);

                if (!transcriptSet.has(transcript)) {
                    setTranscriptSet(prevSet => new Set(prevSet).add(transcript));
                }

                

            }
        })


    }, []);



    // useEffect(() => {
    //     if (result !== null) {
    //         setTranscript(prev => {
    //             let newTranscript = prev + result.transcript
    //             if (result.isComplete) {
    //                 newTranscript += " "
    //             }
    //             return newTranscript
    //         })

    //         localStorage.setItem('transcript', transcript);
    //     }
    // }, [result])


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


    // upload video to firebase
    const uploadVideo = async () => {

        const video = await stopRecording(recordingId);
        await download(recordingId);
        // await stop();


        localStorage.setItem('videoFileName', video.fileName);

        finalTranscript = [...transcriptSet].join(' ');

        // setFinalTranscript([...transcriptSet].join(' '));

        localStorage.setItem('transcript', finalTranscript);

        // navigate('/analytics');



        // stopRecording(recordingId).then((video) => {


        //     setTimeout(() => {}, 5000);

        //     const videoRef = ref(storage, `${recordingId + v4()}.webm`);

        //     uploadBytes(videoRef, video).then((snapshot) => {
        //         alert("Video uploaded successfully");

        //     }
        //     );

        //     // get the firebase url

        //     const url = getDownloadURL(videoRef);

        //     console.log(url);


        // });

        // const video = await stopRecording(recordingId);

        // const videoRef = ref(storage, `${recordingId + v4()}.webm`);

        // console.log(video)

        // uploadBytes(videoRef, video.Blob).then((snapshot) => {
        //     alert("Video uploaded successfully");
        // }
        // );


    }



    const playButtonPressed = async () => {

        if (recordingStarted) {
            await pauseRecording(recordingId);
            setRecordingStarted(false);
            // await stop();
        }

        else {
            await resumeRecording(recordingId);
            setRecordingStarted(true);
            // await start();
        }

    }

    const startInterviewPressed = async () => {
        await startRecording(recordingId);
        // await start();
        setRecordingStarted(true);
        setStartInterviewDisabled(true);
    }



    // const nextButtonPressed = async () => {
    //     index == questionList.length - 1 ? setIndex(index) : setIndex(index + 1);
    //     setCurrentQuestion(currentQuestion + 1);
    //     responses.push(finalTranscript);
    //     finalTranscript = '';

    // }

    // const previousButtonPressed = async () => {
    //     index == 0 ? setIndex(0) : setIndex(index - 1)
    //     setCurrentQuestion(currentQuestion - 1);
    //     responses[currentQuestion - 1] = finalTranscript;
    //     finalTranscript = '';
    // }




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
                            disabled={startInterviewDisabled} //&& isLoaded}
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
                                            closeCamera(recordingId)
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
                                            <div className="flex justify-center items-center w-32 h-32 bg-white rounded-full">
                                                <img src={video} alt="video" width={100} height={100} />
                                            </div>
                                        </div>
                                    </>

                                )
                            }


                            <div className='flex flex-row justify-center items-center'>
                                <div className='flex justify-center items-center cursor-default'>
                                    <button onClick={() => index == 0 ? setIndex(0) : setIndex(index - 1)} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mt-5 mr-5'>Previous</button>
                                </div>

                                <div className='flex justify-center items-center cursor-default'>
                                    <button onClick={() => index == questionList.length - 1 ? setIndex(index) : setIndex(index + 1)} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mt-5 mr-5'>Next</button>
                                </div>
                            </div>


                            <div className='flex justify-center items-center cursor-default'>
                                <button className='mt-5 mr-4' onClick={() => playButtonPressed()}>
                                    {
                                        recordingStarted ? <img src={pause} width={30} height={30} alt="Pause" /> : <img src={play} width={35} height={35} alt="Start" />
                                    }
                                </button>

                                <button className='mt-5 mr-4' onClick={() => { uploadVideo(); }}>
                                    <img src={stop_icon} width={35} height={35} alt="End" />
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