import './ExperienceListView.css';
import { Badge } from 'react-bootstrap';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import experience from './experience.json';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ExperienceListView = () => {

    


    const [experience, setExperience] = useState([]);

    const fetchExperience = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/posts/getallposts');
            console.log(response.data);
            setExperience(response.data);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        fetchExperience();
    }, []);


    const navigate = useNavigate();

    const handleCreateClick = () => {
        navigate('/create-post'); // Redirect to the create experience page
    };

    const handleCardClick = (id) => {
        navigate(`/experience?id=${id}`); // Redirect to the experience page
    };

    return (
        <div className='ExperienceListView'>
            <h1 className='category'>On-Campus</h1>
            <div className="tags flex justify-between">
                <div className="d-flex align-items-center">
                    <Badge className='TagBadge mr-2' style={{ backgroundColor: '#AAAAFF', color: "#FFFFFF" }}>
                        Popular Articles
                    </Badge>
                    <Badge className='TagBadge mr-2' style={{ borderColor: "#AAAAFF", borderWidth: '2px', color: "#AAAAFF" }}>
                        Recent Articles
                    </Badge>
                </div>

                <Badge className='create-btn' onClick={handleCreateClick} style={{ cursor: 'pointer' }}>
                    <i className="fa-solid fa-pen-to-square pr-3"></i> Create
                </Badge>
            </div>

            {experience.map((exp, index) => (
                <ExperienceCard
                    key={index}
                    id={exp.id}
                    title={exp.title}
                    text={exp.content}
                    tags={exp.tags}
                    date={exp.date}
                    onClick={() => handleCardClick(exp.id)} // Directly call handleCardClick without parameters
                />
            ))}
        </div>
    );
}

export default ExperienceListView;
