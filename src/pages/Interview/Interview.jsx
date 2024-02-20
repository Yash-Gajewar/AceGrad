import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Home } from '@mui/icons-material';
import './Interview.css'
import microphone from '../../assets/microphone.png';
import interview from '../../assets/interview.png';
import dashboard from '../../assets/dashboard.png';
import story from '../../assets/story.png';

const imageHeight = 35;
const imageWidth = 35;

function Interview() {
    const [collapsed, setCollapsed] = useState(false);

    const handleToggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className='flex'>

            {/* side bar div */}

            <div className={`sidebar ${collapsed ? 'collapsed' : ''} flex`}>
                <Sidebar collapsed={collapsed}>
                    <Menu>
                        <MenuItem onClick={handleToggleSidebar} className='mt-12'>
                            {
                                collapsed ? <img src={microphone} alt="microphone" height={imageHeight} width={imageWidth} />
                                    : (
                                        <div className='flex justify-start items-center'>
                                            <img src={microphone} alt="microphone" height={imageHeight} width={imageWidth} />
                                            <span>AceGrad</span>
                                        </div>
                                    )
                            }
                        </MenuItem>
                        <MenuItem className='mt-4'>
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
                        <MenuItem className='mt-4'>
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








            {/* main content div */}

            <div>
                Some Other content
            </div>



        </div>


    );
}

export default Interview;
