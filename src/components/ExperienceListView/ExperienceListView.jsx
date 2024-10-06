import './ExperienceListView.css'
import { Badge, Button } from 'react-bootstrap';
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';




const ExperienceListView = () => {

    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts/getallposts')
            .then((response) => {
                console.log(response.data);
                setExperiences(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div className='ExperienceListView'>
            <h1 className='category'>On-Campus</h1>
            <div className="tags flex justify-between">
                <div className="d-flex align-items-center">
                    <Badge className='TagBadge mr-2' style={{ backgroundColor: '#AAAAFF', color: "#FFFFFF" }}>Popular Articles</Badge>
                    <Badge className='TagBadge mr-2' style={{ borderColor: "#AAAAFF", borderWidth: '2px', color: "#AAAAFF" }}>Recent Articles</Badge>
                </div>

                <Badge className='create-btn'> <i class="fa-solid fa-pen-to-square pr-3"></i>

                    <Link to='/create-experience'>
                        Create
                    </Link>

                </Badge>
            </div>
            {
                experiences.map((experience) => {
                    return (
                        <ExperienceCard experience={experience} />
                    )
                })
            }
        </div>
    )
}

export default ExperienceListView