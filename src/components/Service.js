import React, { useState } from 'react';

const RenderService = ({service, key}) => {
    // toggle visibility of description on xs screens
    const [ showDescription, setShowDescription ] = useState(false);
    // alternate service layout
    const position = (key%2 === 0) ? 'left' : 'right';
    
    return (
        <div className={`services-content row ${position}`} key={key}>
            <div className='col-3 name'>
                <div className='description-title'>
                    <h4>{service.name}</h4>
                    <button className={(showDescription) ? 'minus' : 'plus'} onClick={() => setShowDescription(!showDescription)}><span /></button>
                </div>
                <p className='price'>{service.price}</p>
            </div>
            <div className={`col-9 description d-md-flex ${(showDescription) ? 'show' : 'hide'}`}> 
                {service.description.map((item, index) => {
                    return <p key={key + '-' + index}>{item}</p>;
                })}
            </div>
        </div>
    );
    
}

export default RenderService;