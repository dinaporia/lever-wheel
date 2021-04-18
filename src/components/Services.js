import React from 'react';

const Services = ({content}) => {

    // renders content name in title, description array as paragraphs
    // receives object with service details and index for use as key
    const renderContent = (service, key) => {
        const position = (key%2 === 0) ? 'left' : 'right'
        return (
            <div className={`services-content row ${position}`} key={key}>
                <div className='col-3 name'>
                    <h4>{service.name}</h4>
                    <p className='price'>{service.price}</p>
                </div>
                <div className='col-9 description'> 
                    {service.description.map((item, index) => {
                        return <p key={key + '-' + index}>{item}</p>;
                    })}
                </div>
               
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
                    <h4 className='text-center'>{item.name}</h4>
                    {item.content.map((cItem, cIndex) => {
                        const key = index + '-' + cIndex;
                        return renderContent(cItem, key);
                    })}
                </div>
            )
    });

    return (
        <div className='services container'>
            <h1>Services</h1>
           {services}
        </div>
    );
}

export default Services;