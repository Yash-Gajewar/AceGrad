import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import microphone from '../../assets/microphone.png';
import interview from '../../assets/interview.png';
import dashboard from '../../assets/dashboard.png';
import story from '../../assets/story.png';
import './SidebarComponent.css';
import { Link } from 'react-router-dom';
import right_arrow from '../../assets/right_arrow.png';



const imageHeight = 35;
const imageWidth = 35;


const SidebarComponent = () => {
    const [collapsed, setCollapsed] = useState(true);

    const handleToggleSidebar = () => {
        setCollapsed(!collapsed);
    };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''} relative`}>
                <Sidebar collapsed={collapsed}>
                    <Menu>
                        <MenuItem onClick={handleToggleSidebar} className='mt-12'>
                            {
                                collapsed ? <img src={right_arrow} alt="right_arrow" height={imageHeight} width={imageWidth} />
                                    : (
                                        <div className='flex justify-start items-center'>

                                        
                                            <img src={microphone} alt="microphone" height={imageHeight} width={imageWidth} />
                                            <span className='ml-2'>AceGrad</span>
                                        </div>
                                    )
                            }
                        </MenuItem>
                        <MenuItem component={<Link to="/interview" />} className='mt-4'>
                            {
                                collapsed ? <img src={interview} alt="interview" height={imageHeight} width={imageWidth} />
                                    : (
                                        <div className='flex justify-start items-center'>
                                            <img src={interview} alt="microphone" height={imageHeight} width={imageWidth} />
                                            <div className='ml-2'>Interview</div>
                                        </div>
                                    )
                            }
                        </MenuItem >
                        <MenuItem className='mt-4'>
                            {
                                collapsed ? <img src={dashboard} alt="interview" height={imageHeight} width={imageWidth} />
                                    : (
                                        <div className='flex justify-start items-center'>
                                            <img src={dashboard} alt="microphone" height={imageHeight} width={imageWidth} />
                                            <div className='ml-2'>Dashboard</div>
                                        </div>
                                    )
                            }
                        </MenuItem>
                        <MenuItem component={<Link to="/experience" />} className='mt-4'>
                            {
                                collapsed ? <img src={story} alt="interview" height={imageHeight} width={imageWidth} />
                                    : (
                                        <div className='flex justify-start items-center'>
                                            <img src={story} alt="microphone" height={imageHeight} width={imageWidth} />
                                            <div className='ml-2'>Interview Experience</div>
                                        </div>
                                    )
                            }
                        </MenuItem>
                        {/* More menu items... */}
                    </Menu>
                </Sidebar>

            </div>

  )
}

export default SidebarComponent