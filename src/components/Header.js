import React from 'react';


const Header = ({content: {title, subtitle, tagline}}) => {
    
    return (
        <div className='header'>
            <div>
                <h1 className='title'>{title}</h1>
                <h6 className='subtitle'>{subtitle}</h6>
                <p className='tagline'>{tagline}</p>
            </div>
            <div>
                <img className='logo' src='/images/header-logo.png' alt='illustration of typewriter with Lever & Wheel typed on page' />
            </div>
            
        </div>
    );
}

export default Header;