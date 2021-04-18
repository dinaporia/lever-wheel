import React from 'react';


const Footer = ({content}) => {
    const social = content.filter(item => item.url);
    const renderSocial = social.map((item, index) => {
        return <a className='btn' key={index} href={item.url} target="_blank" rel="noreferrer" > <i className={`fab fa-3x  fa-${item.name}`}></i></a>
       
    });

    return (
        <div className='footer'>
           {renderSocial}
        </div>
    );
}

export default Footer;