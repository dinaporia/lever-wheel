import React from 'react';
import ATF from './ATF';


const Home = ({content: {tagline, description}}) => {
    return (
        <div className='home container-fluid'>
           <ATF description={description} tagline={tagline} />
           {/* alternate stock images/icons left/right with following */}
           <div>Click here to learn more about my philosophy</div>
           <div>Learn more about services offered</div>
           <div>Contact me to request a quote or more information</div>
        </div>

    );
}

export default Home;