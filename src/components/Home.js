import React from 'react';
import ATF from './ATF';


const Home = ({content: {tagline, description}}) => {
    return (
        <div className='home container-fluid'>
           <ATF tagline={tagline} />
           {/* alternate stock images/icons left/right with following */}
            <div className='home-content container'>
                <p className='description'>{description}</p>
                <div className='home-links row'>
                    <p className='col-12 col-lg-4'>Learn more about my philosophy</p>
                    <p className='col-12 col-lg-4'>Find out about services I offer</p>
                    <p className='col-12 col-lg-4'>Contact me to request a quote or more information</p>
                </div>
            </div>
           
        </div>

    );
}

export default Home;