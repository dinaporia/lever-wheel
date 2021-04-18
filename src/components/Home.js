import React from 'react';
import ATF from './ATF';


const Home = ({content: {tagline, description}}) => {
    return (
        <div className='home container-fluid'>
           <ATF tagline={tagline} />
           {/* alternate stock images/icons left/right with following */}
            <div className='container'>
                <p>{description}</p>
                <div>Click here to learn more about my philosophy</div>
                <div>Learn more about services offered</div>
                <div>Contact me to request a quote or more information</div>
                </div>
           
        </div>

    );
}

export default Home;