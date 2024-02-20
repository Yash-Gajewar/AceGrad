import React, { useState } from 'react';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import { useRecordWebcam } from "react-record-webcam";
import './Interview.css';
import help from '../../assets/help.png';


function Interview() {

    const {
        activeRecordings,
        createRecording,
        openCamera,
        startRecording,
        stopRecording,
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

            <div className="container">

                <div className="heading flex flex-col justify-center items-start">
                    <div className='flex ml-16'>
                        <img src={help} alt="help" width={25} height={25} />
                        <p className='ml-2'>Interview Practice</p>
                    </div>
                    <div className='ml-24'>
                        <p>Let's Get Your Dream Job</p>
                    </div>
                </div>

                <div className="description p-5">
                    Hi Yash! 👋 Let’s continue your learning journey

                    For today’s session, please select at least 2 starter questions. After each answer, 1 additional question will be generated based on your response.
                </div>

                <div className="questions">
                    questions
                </div>

                <div className="video">
                    <div className="demo w-full h-full">
                        <button onClick={example}>Start</button>
                        <div className="recordings">
                            {activeRecordings.map((recording) => (
                                <div key={recording.id}>
                                    <video ref={recording.webcamRef} autoPlay muted />
                                    <div className={recording.status === "STOPPED" ? "show" : "hide"}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>





        </div>


    );
}

export default Interview;
