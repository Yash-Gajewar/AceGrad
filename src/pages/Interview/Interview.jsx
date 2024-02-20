import React, { useState } from 'react';
import SidebarComponent from '../../components/SidebarComponent/SidebarComponent';


function Interview() {
    
    return (
        <div className='flex'>

            {/* side bar div */}

            <SidebarComponent />
            {/* main content div */}

            <div>
                Some Other content
            </div>



        </div>


    );
}

export default Interview;
