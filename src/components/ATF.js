import React from 'react';
import { Link } from 'react-router-dom';


const ATF = ({tagline}) => {
    
    return (
    
        <div className='ATF row'>
            <div className='col-6'>
                <img src='/images/header-logo.png' alt='illustration of typewriter with Lever & Wheel typed on page' />
            </div>
            <div className='col-6 tagline'>
                <h2>{tagline}</h2>
                <Link className='btn btn-secondary btn-lg mt-4' to='/contact'>Contact Me!</Link>
            </div>
        </div>
    );
}

export default ATF;