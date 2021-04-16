import React from 'react';


const About = ({content}) => {

    const renderContent = content.map( item => {
        return (
            <p>{item}</p>
        );
    });

    return (
        <div className='about'>
            <div className='about-content'>
                {renderContent}
            </div>
            <img src='' alt='' />
        </div>
    )
}

export default About;