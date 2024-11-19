import React, { useEffect, useState } from 'react';
import './Experience.css';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import ExperienceListView from '../../components/ExperienceListView/ExperienceListView';
import ExperienceRightBar from '../../components/ExperienceRightBar/ExperienceRightBar';
import { useLocation } from 'react-router-dom'; // For detecting state
import Alert from '@mui/material/Alert'; // MUI Alert
import CheckIcon from '@mui/icons-material/Check'; // Check icon for success
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';



const Experience = () => {
    const location = useLocation();
    const success = location.state?.success; // Get success state from the previous page
    const [showAlert, setShowAlert] = useState(success); // Control alert visibility

    // const [searchParams, setSearchParams] = useSearchParams();

    // const id = searchParams.get("id");

    return (
        <div className='flex'>
            {/* side bar */}
            <SidebarComponent />

            <div className='ExperienceContainer'>
                {/* Show success alert if post was created successfully */}
                {showAlert && (
                    <Alert
                        icon={<CheckIcon fontSize="inherit" />}
                        severity="success"
                        className="SuccessAlert"
                    >
                        Post created successfully!
                    </Alert>
                )}

                <ExperienceListView className='ExperienceListView' />
                <ExperienceRightBar className='Rightbar' />
            </div>
        </div>
    );
};

export default Experience;
