import { useState } from 'react';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import './CreatePost.css'; // Import CSS file for styles

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [experience, setExperience] = useState('');
    const [tags, setTags] = useState([]);
    const [preview, setPreview] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
        // Update preview with text formatting
        setPreview(event.target.value.replace(/#(.*?)#/g, "<strong>$1</strong>").replace(/~(.*?)~/g, "<em>$1</em>"));
    };

    const handleTagsChange = (event) => {
        const newTag = event.target.value.trim();
        if (event.key === 'Enter' && newTag !== '') {
            setTags([...tags, newTag]);
            event.target.value = ''; // Clear input field after adding tag
        }
    };

    const removeTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleAddPost = () => {
        // Logic to handle post submission goes here
        console.log('Post Added:', { title, experience, tags });
        // Clear the fields after submission
        setTitle('');
        setExperience('');
        setTags([]);
        setPreview('');
    };

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
                            <input type='text' className='p-2 rounded-md w-56 h-9' />
                        </div>

                        <div className='flex companyTitle p-3 justify-center items-center'>
                            <p className='text-xl p-2 font-medium'>Job Title</p>
                            <input type='text' className='p-2 rounded-md w-56 h-9' />
                        </div>


                        <div className='flex companyTitle p-3 justify-center items-center'>
                            <p className='text-xl p-2 font-medium'>Location</p>
                            <input type='text' className='p-2 rounded-md w-56 h-9' />
                        </div>
                    </div>

                </div>

                <div className='flex w-full justify-between items-start mt-4 p-3'>

                    <div className='flex description p-3 justify-between items-center'>

                        <p className='text-xl p-3 font-medium'>Describe Your Interview</p>

                        <textarea className='p-3 rounded-md w-96 h-32' />

                    </div>

                    <div className='flex flex-col p-3'>

                        <div className='flex companyTitle p-3 justify-between items-center'>
                            <p className='text-xl p-2 font-medium'>Interview Difficulty</p>
                            {/* dropdown menu with Difficulty levels */}
                            <select className='p-2 rounded-md w-56 h-9'>
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
                            <select className='p-2 rounded-md w-56 h-9'>
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
                            <input type='text' className='p-2 rounded-md w-56 h-9' />
                        </div>


                        <div className='flex companyTitle p-3 justify-between items-center'>
                            <p className='text-xl p-2 font-medium'>How did you get the interview</p>
                            {/* dropdown menu with Yes or No */}
                            <select className='p-2 rounded-md w-56 h-9'>
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

                    <textarea className='p-3 rounded-md w-96 h-32' />

                    <p className='text-xl p-3 font-medium'>Answers Given</p>

                    <textarea className='p-3 rounded-md w-96 h-32' />

                </div>

                <div className='flex flex-col mt-5 w-full justify-center items-center'>


                    <button className='m-2 p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Submit </button>

                </div>


            </div>
        </div >
    );
}

export default CreatePost;
