import { useState } from 'react';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import './CreatePost.css'; // Import CSS file for styles
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


const CreatePost = () => {

    // State to store form data

    const [id, setId] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [offerStatus, setOfferStatus] = useState('');
    const [ctc, setCtc] = useState('');
    const [interviewSource, setInterviewSource] = useState('');
    const [questions, setQuestions] = useState('');
    const [answers, setAnswers] = useState('');



    const handleSubmit = async () => {

        // Generate a unique id for each post
        setId(uuidv4());

        // Send form data to backend
        const formData = {
            id: id,
            company_name: companyName,
            job_title: jobTitle,
            location: location,
            description: description,
            difficulty: difficulty,
            offer_status: offerStatus,
            ctc: ctc,
            interview_source: interviewSource,
            questions: questions,
            answers: answers
        }

        console.log(formData);

        try{
            const response = await axios.post('http://localhost:8000/api/posts/createpost', formData, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
            console.log(response.data);
        }

        catch(err){
            console.log(err);
        }
    }


    return (
        <div className='flex'>
            <SidebarComponent />
            <div className="container mt-4 ">
                <h1 className="p-4 mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                    Post Interview Experience
                </h1>

                <div className='PostContainer flex w-full bg-gradient-to-r'>

                    <div className='flex w-full justify-around items-start'>
                        <div className='flex companyTitle p-3 justify-center items-center'>
                            <p className='text-xl p-2 font-medium'>Company Name</p>
                            <input type='text' className='p-2 rounded-md w-56 h-9'
                                onChange={(e) => setCompanyName(e.target.value)} />
                        </div>

                        <div className='flex companyTitle p-3 justify-center items-center'>
                            <p className='text-xl p-2 font-medium'>Job Title</p>
                            <input type='text' className='p-2 rounded-md w-56 h-9'
                                onChange={(e) => setJobTitle(e.target.value)}
                            />
                        </div>


                        <div className='flex companyTitle p-3 justify-center items-center'>
                            <p className='text-xl p-2 font-medium'>Location</p>
                            <input type='text' className='p-2 rounded-md w-56 h-9'
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                    </div>

                </div>

                <div className='flex w-full justify-between items-start mt-4 p-3'>

                    <div className='flex description p-3 justify-between items-center'>

                        <p className='text-xl p-3 font-medium'>Describe Your Interview</p>

                        <textarea className='p-3 rounded-md w-96 h-32'
                            onChange={(e) => setDescription(e.target.value)}

                        />

                    </div>

                    <div className='flex flex-col p-3'>

                        <div className='flex companyTitle p-3 justify-between items-center'>
                            <p className='text-xl p-2 font-medium'>Interview Difficulty</p>
                            {/* dropdown menu with Difficulty levels */}
                            <select className='p-2 rounded-md w-56 h-9' 
                                onChange={(e) => setDifficulty(e.target.value)}
                            >
                                <option value='' disabled selected>Select your option</option>
                                <option value='Very Easy'>Very Easy</option>
                                <option value='Easy'>Easy</option>
                                <option value='Average'>Average</option>
                                <option value='Difficult'>Difficult</option>
                                <option value='Very Difficult'>Very Difficult</option>
                            </select>
                        </div>

                        <div className='flex companyTitle p-3 justify-between items-center'>
                            <p className='text-xl p-2 font-medium'>Did you get an offer?</p>
                            {/* dropdown menu with Yes or No */}
                            <select className='p-2 rounded-md w-56 h-9'
                                onChange={(e) => setOfferStatus(e.target.value)}
                            >
                                <option value='' disabled selected>Select your option</option>
                                <option value='No'>No</option>
                                <option value='Yes, but I declined'>Yes, but I declined</option>
                                <option value='Yes, and I accepted'>Yes, and I accepted</option>
                            </select>
                        </div>

                    </div>


                    <div className='flex flex-col p-3'>

                        <div className='flex p-3 justify-between items-center'>
                            <p className='text-xl p-2 font-medium'>Job CTC</p>
                            <input type='text' className='p-2 rounded-md w-56 h-9' 
                                onChange={(e) => setCtc(e.target.value)}
                            />
                        </div>


                        <div className='flex companyTitle p-3 justify-between items-center'>
                            <p className='text-xl p-2 font-medium'>How did you get the interview</p>
                            {/* dropdown menu with Yes or No */}
                            <select className='p-2 rounded-md w-56 h-9' 
                                onChange={(e) => setInterviewSource(e.target.value)}
                            >
                                <option value='' disabled selected>Select your option</option>
                                <option value='Applied Online'>Applied Online</option>
                                <option value='University'>University</option>
                                <option value='Employee Referral'>Employee Referral</option>
                            </select>
                        </div>

                    </div>




                </div>





                <div className='flex description p-3 justify-around items-center'>

                    <p className='text-xl p-3 font-medium'>Questions Asked</p>

                    <textarea className='p-3 rounded-md w-96 h-32' 
                        onChange={(e) => setQuestions(e.target.value)}
                    />

                    <p className='text-xl p-3 font-medium'>Answers Given</p>

                    <textarea className='p-3 rounded-md w-96 h-32' 
                        onChange={(e) => setAnswers(e.target.value)}
                    />

                </div>

                <div className='flex flex-col mt-5 w-full justify-center items-center'>


                    <button className='m-2 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        onClick={handleSubmit}
                    > Submit </button>

                </div>


            </div>
        </div >
    );
}

export default CreatePost;
