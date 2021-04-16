import React from 'react';


const Footer = ({content}) => {
    const social = content.filter(item => item.url);
    const renderSocial = social.map(item => {
        return <a className='btn' href={item.url} target="_blank" rel="noreferrer" > <i className={`fab fa-3x  fa-${item.name}`}></i></a>
        // switch (item.name) {
        //     case 'linkedin':
        //         return <a className='btn' href={item.url} target="_blank" rel="noreferrer" > <i className='fab fa-3x  fa-linkedin'></i></a>;
        //     case 'facebook':
        //         return <a className='btn' href={item.url} target="_blank" rel="noreferrer" > <i className='fab fa-3x  fa-facebook'></i></a>;
        //     case 'instagram':
        //         return <a className='btn' href={item.url} target="_blank" rel="noreferrer" > <i className='fab fa-3x  fa-instagram'></i></a>;
        //     case 'twitter':
        //         return <a className='btn' href={item.url} target="_blank" rel="noreferrer" > <i className='fab fa-3x  fa-twitter'></i></a>;
        //     default:
        //         return <i></i>
        // }
    });

    return (
        <div className='footer'>
           {renderSocial}
        </div>
    );
}

export default Footer;