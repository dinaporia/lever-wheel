import React from 'react';

const Services = ({content}) => {

    // renders content name in title, description array as paragraphs
    // receives object with service details and index for use as key
    const renderContent = (service, key) => {
        return (
            <div className='services-content' key={key}>
                <h4>{service.name}</h4>
                <p className='price'>{service.price}</p>
                {service.description.map((item, index) => {
                    return <p key={key + '-' + index}>{item}</p>;
                })}
            </div>
        );
    }
    
    const services = content.map((item, index) => {
        return (item.description) 
            // if item has description, render content
            ? renderContent(item, index)
            // if item doesn't have description, retrieve nested content
            : (
                <div className='services-package' key={index}>
                    <h3>{item.name}</h3>
                    {item.content.map((cItem, cIndex) => {
                        const key = index + '-' + cIndex;
                        return renderContent(cItem, key);
                    })}
                </div>
            )
    });

    return (
        <div>
           {services}
        </div>
    );
}

export default Services;