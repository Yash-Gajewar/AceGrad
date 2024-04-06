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

import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';


var FinalQuestionList = [];


const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
    return (
        <BaseNumberInput
            slots={{
                root: StyledInputRoot,
                input: StyledInput,
                incrementButton: StyledButton,
                decrementButton: StyledButton,
            }}
            slotProps={{
                incrementButton: {
                    children: <AddIcon fontSize="small" />,
                    className: 'increment',
                },
                decrementButton: {
                    children: <RemoveIcon fontSize="small" />,
                },
            }}
            {...props}
            ref={ref}
        />
    );
});

function Interview() {

    const navigate = useNavigate();

    const InterviewerType = ['Professional', 'Friendly', 'Technical', 'Behavioural'];

    const [role, setRole] = useState('');
    const [company, setCompany] = useState('');

    const [interviewer, setInterviewer] = useState('');
    const [addQuestion, setAddQuestion] = useState(false);
    const [question, setQuestion] = useState('');

    const [numberOfQuestions, setNumberOfQuestions] = useState('10');

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState("No file chosen");


    const [questionList, setQuestionList] = useState([
        'Tell me about yourself',
    ]);
    const [cameraOn, setCameraOn] = useState(false);

    const [recordingId, setRecordingId] = useState(null);


    const {
        activeRecordings,
        createRecording,
        openCamera,
        closeCamera
    } = useRecordWebcam();


    const cameraPressed = async () => {
        try {
            const recording = await createRecording();
            if (!recording) return;
            setRecordingId(recording.id);
            await openCamera(recording.id);
           
        } catch (error) {
            console.error({ error });
        }
    };


    const handleStartInterview = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('role', role);
        formData.append('company', company);
        formData.append('interviewer', interviewer);
        formData.append('numberOfQuestions', numberOfQuestions);
        formData.append('resume', selectedFile);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/generative_ai/get-questions/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            questionList.map((question) => {
                FinalQuestionList.push(question);
            });

            for (var i = 0; i < response.data.length; i++) {
                FinalQuestionList.push(response.data[i]);
            }

            localStorage.setItem('FinalQuestionList', JSON.stringify(FinalQuestionList));
            navigate('/session');


        } catch (error) {
            console.error(error);
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
                    Upload Your Resume. Enter the number of Questions. Write any Questions you want to answer. Additional Questions will be AI generated based on your Resume.
                </div>

                <div className="InterviewQuestions">
                    <div className='mt-2 mb-5'>
                        Personalize Your Interview
                    </div>

                    {/* Role */}

                    <div className='mb-2 mt-2 mr-10'>
                        <input type="text" placeholder="Enter Your Role eg. Software Enginner" className='p-2.5 rounded-lg w-full'
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>

                    {/* Company and Interviewer Type */}

                    <div className='CompanyInterviewerContainer justify-center items-center'>

                        <div className="CompanyContainer">
                            <input type="text" placeholder="Type any Company" className='p-2.5 rounded-lg w-full'
                                onChange={(e) => setCompany(e.target.value)}
                            />
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
                                    <img src={check} alt="check" width={40} onClick={() => {
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
                                    <>
                                        <img src={camera_on} alt="camera_on" width={40} height={40} onClick={() => {
                                            setCameraOn(false)
                                            closeCamera(recordingId);
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
                                            cameraPressed();
                                        }} className='cursor-pointer' />

                                        <div className='flex w-4/5 ml-16 h-1/2 p-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-md justify-center items-center'>
                                            <div class="flex justify-center items-center w-32 h-32 bg-white rounded-full">
                                                <img src={video} alt="video" width={100} height={100} />
                                            </div>
                                        </div>
                                    </>

                                )
                            }

                            <div class="flex flex-row justify-center items-center mt-5">
                                <input
                                    type="file"
                                    id="custom-input"

                                    onChange={(e) => {
                                        setSelectedFileName(e.target.files[0].name)
                                        setSelectedFile(e.target.files[0])
                                    }

                                    }
                                    hidden
                                />
                                <label
                                    for="custom-input"
                                    class="block text-sm  mr-4 py-2 px-4 rounded-md border-0 font-semibold text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800   cursor-pointer"
                                >
                                    Upload Resume
                                </label>
                                <label class="text-sm text-slate-500">{selectedFileName}</label>
                            </div>

                            <div className='flex justify-center items-center mt-2'>
                                <div className='mr-5'>Number of Questions</div> <NumberInput aria-label="Quantity Input" min={1} max={99}
                                    value={numberOfQuestions}
                                    onChange={(e) => setNumberOfQuestions(e.target.value)}
                                />;
                            </div>



                            <div className='flex justify-center items-center cursor-default'>
                                <button onClick={handleStartInterview} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mt-5 mr-5'>Start Interview</button>
                            </div>






                        </div>
                    </div>







                </div>
            </div>





        </div >


    );
}


const blue = {
    100: '#daecff',
    200: '#b6daff',
    300: '#66b2ff',
    400: '#3399ff',
    500: '#007fff',
    600: '#0072e5',
    700: '#0059B2',
    800: '#004c99',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const StyledInputRoot = styled('div')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  `,
);

const StyledInput = styled('input')(
    ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.375;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
        };
    border-radius: 8px;
    margin: 0 8px;
    padding: 10px 12px;
    outline: 0;
    min-width: 0;
    width: 4rem;
    text-align: center;
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
    }
  
    &:focus-visible {
      outline: 0;
    }
  `,
);

const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    line-height: 1.5;
    border: 1px solid;
    border-radius: 999px;
    border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    width: 32px;
    height: 32px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      cursor: pointer;
      background: ${theme.palette.mode === 'dark' ? blue[700] : blue[500]};
      border-color: ${theme.palette.mode === 'dark' ? blue[500] : blue[400]};
      color: ${grey[50]};
    }
  
    &:focus-visible {
      outline: 0;
    }
  
    &.increment {
      order: 1;
    }
  `,
);

export default Interview;