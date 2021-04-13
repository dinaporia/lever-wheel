import React from 'react';


const ATF = ({description, tagline}) => {
    
    return (
    
        <div className='ATF row'>
            <p className='col-6'>{tagline}</p>
            <div className='col-6'>
                <img src='/images/header-logo.png' alt='illustration of typewriter with Lever & Wheel typed on page' />
            </div>
            <p className='description col-12'>{description}</p>
        </div>
            
        
    );
}

export default ATF;