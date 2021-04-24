import React from 'react';
import RenderService from './Service';

const Services = ({content}) => {

    
    const services = content.map((item, index) => {
        return (item.description) 
            // if item has description, render content
            ? <RenderService service={item} key={index} />
            // if item doesn't have description, retrieve nested content
            : (
                <div className='services-package' key={index}>
                    <h4 className='text-center'>{item.name}</h4>
                    {item.content.map((cItem, cIndex) => {
                        const key = index + '-' + cIndex;
                        return <RenderService service={cItem} key={key} />
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