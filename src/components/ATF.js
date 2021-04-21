import React from 'react';
import { Link } from 'react-router-dom';


const ATF = ({tagline}) => {
    
    return (
    
        <div className='ATF row'>
            <div className='d-flex justify-content-center col-12 col-lg-6'>
                <img src='/images/header-logo.png' alt='illustration of typewriter with Lever & Wheel typed on page' />
            </div>
            <div className='col-12 col-lg-6 my-4 tagline'>
                <h2>{tagline}</h2>
                <Link className='btn btn-secondary btn-lg mt-4' to='/contact'>Contact Me!</Link>
            </div>
        </div>
    );
}

export default ATF;