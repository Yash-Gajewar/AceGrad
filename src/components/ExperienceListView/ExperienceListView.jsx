import React from 'react'
import './ExperienceListView.css'
import { Badge, Button } from 'react-bootstrap';
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import { Link } from 'react-router-dom';


const ExperienceListView = () => {
    return (
        <div className='ExperienceListView'>
            <h1 className='category'>On-Campus</h1>
            <div className="tags flex justify-between">
                <div className="d-flex align-items-center">
                    <Badge className='TagBadge mr-2' style={{ backgroundColor: '#AAAAFF', color: "#FFFFFF" }}>Popular Articles</Badge>
                    <Badge className='TagBadge mr-2' style={{ borderColor: "#AAAAFF", borderWidth: '2px', color: "#AAAAFF" }}>Recent Articles</Badge>
                </div>

                    <Badge className='create-btn'> <i class="fa-solid fa-pen-to-square pr-3"></i> Create</Badge>
            </div>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
        </div>
    )
}

export default ExperienceListView