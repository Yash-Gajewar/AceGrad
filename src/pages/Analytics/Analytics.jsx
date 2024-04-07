import React, { useState } from 'react';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';


function Analytics() {
    return (
        <div className='flex'>
            <SidebarComponent />

            <div className='flex flex-col w-full h-full items-center'>

                <div className="flex justify-center items-start">
                    <div>
                        Interview At Oracle
                    </div>
                </div>


                <div className='flex justify-center items-center'>
                    <video src={require('C:/Users/yash/Downloads/1712429767388.webm')} width="400" height="300" autoPlay loop controls>
                    </video>
                </div>

                <div className='flex flex-col justify-center items-center'>

                    <div>
                        This is transcript 1
                    </div>

                    <div>
                        This is transcript 2
                    </div>

                    <div>
                        This is transcript 3

                    </div>

                </div>

            </div>

            <SidebarComponent />

        </div>
    )
}

export default Analytics;