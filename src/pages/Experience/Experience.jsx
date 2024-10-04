import React from 'react'
import './Experience.css'
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';
import ExperienceListView from '../../components/ExperienceListView/ExperienceListView';
import ExperienceRightBar from '../../components/ExperienceRightBar/ExperienceRightBar';


const Experience = () => {
    return (
        <div className='flex'>

            {/* side bar div */}
            <SidebarComponent />
            {/* main content div */}

            <div className='ExperienceContainer'>

                <ExperienceListView className='ExperienceListView'/>
                <ExperienceRightBar className='Rightbar' />

            </div>
        </div>
    )
}

export default Experience;