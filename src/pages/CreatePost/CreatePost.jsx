import React, { useState } from 'react';
import './CreatePost.css';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import { useNavigate } from 'react-router-dom'; // For navigation

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [experience, setExperience] = useState('');
    const [tags, setTags] = useState([]);
    const [preview, setPreview] = useState('');

    const navigate = useNavigate();

    const formatText = (text) => {
        return text
            .replace(/\*([^\*]+)\*/g, '<strong>$1</strong>')  // bold
            .replace(/_([^_]+)_/g, '<em>$1</em>')              // italic
            .replace(/~([^~]+)~/g, '<u>$1</u>');               // underline
    };

    const handleExperienceChange = (e) => {
        const inputText = e.target.value;
        setExperience(inputText);
        setPreview(formatText(inputText));
    };

    const handleTagsChange = (e) => {
        if (e.key === 'Enter' && e.target.value) {
            e.preventDefault();
            setTags([...tags, e.target.value]);
            e.target.value = '';
        }
    };

    const removeTag = (index) => {
        setTags(tags.filter((tag, i) => i !== index));
    };

    const handlePost = () => {
        // Simulate posting the experience
        // After posting, redirect to the Experience page with success message
        navigate('/archieves', { state: { success: true } });
    };

    return (
        <div className='flex'>
            {/* side bar */}
            <SidebarComponent />

            {/* main content */}
            <div className='CreateExperienceContainer'>
                <div className='FormContainer'>
                    <p className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500'>Share Your Experience</p>
                    <form>
                        <label>Title:</label>
                        <input 
                            type='text' 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Enter experience title'
                        />

                        <label>Experience:</label>
                        <textarea 
                            value={experience} 
                            onChange={handleExperienceChange}
                            placeholder='Write your experience here (use * for bold, _ for italic, and ~ for underline)'
                        />

                        <label>Tags:</label>
                        <div className="TagInput">
                            <input 
                                type='text' 
                                onKeyPress={handleTagsChange}
                                placeholder='Add a tag and press Enter'
                            />
                        </div>
                        <div className="TagsContainer">
                            {tags.map((tag, index) => (
                                <div className="Tag" key={index}>
                                    {tag}
                                    <span className="RemoveTag" onClick={() => removeTag(index)}>×</span>
                                </div>
                            ))}
                        </div>

                        {/* Post button */}
                        <button class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mt-5 mr-5">Enter</button>
                        </form>
                </div>

                {/* Preview section */}
                <div className='PreviewContainer'>
                    <h2>Preview</h2>
                    <div className='ExperiencePreview'>
                        <div className="PreviewTitle">
                            <strong>{title}</strong>
                        </div>
                        <div 
                            className='PreviewContent' 
                            dangerouslySetInnerHTML={{ __html: preview }}
                        />
                        <div className="PreviewTags">
                            {tags.map((tag, index) => (
                                <span className="TagPreview" key={index}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
