import React from 'react';


const ATF = ({description, tagline}) => {
    
    return (
    
        <div className='ATF'>
    
            <p className='tagline'>{tagline}</p>
            <p className='description'>{description}</p>
            <img className='logo' src='/images/header-logo.png' alt='illustration of typewriter with Lever & Wheel typed on page' />
        </div>
            
        
    );
}

export default ATF;