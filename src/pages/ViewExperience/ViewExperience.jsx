import React, { useEffect, useState } from 'react';
import './ViewExperience.css';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import experienceData from './experienceData.json';
import axios from 'axios';



const ViewExperience = () => {
    const [experience, setExperience] = useState(null);


    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');


    const fetchPost = async () => {
        try {
            const response = await axios.get(
                `http://127.0.0.1:8000/api/posts/getpost/${id}`
            );
            console.log(response);
            setExperience(response.data);
        } catch (err) {
            console.log(err); // Handle errors
        }
    };


    useEffect(() => {
        setExperience(experienceData);
        fetchPost();
    }, []);

    const formatText = (text) => {
        if (typeof text !== 'string') {
            console.error('Expected a string but received:', text);
            return '';
        }
        return text
            .replace(/\*([^\*]+)\*/g, '<strong>$1</strong>') // Bold
            .replace(/_([^_]+)_/g, '<em>$1</em>') // Italic
            .replace(/~([^~]+)~/g, '<u>$1</u>'); // Underline
    };

    if (!experience) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex'>
            <SidebarComponent />

            <div className='ViewExperienceContainer'>
                <div className='ExperienceDetails'>
                    <h1 className='ExperienceTitle'>{experience.title}</h1>
                    <p className='ExperienceDate'>Last updated: {experience.date}</p>
                    <hr /> {/* Horizontal ruler below the date */}
                    <div
                        className='ExperienceContent'
                        dangerouslySetInnerHTML={{ __html: formatText(experience.content) }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewExperience;
