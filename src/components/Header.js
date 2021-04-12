import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';


const Header = ({content: {title, subtitle}}) => {
    
    return (
        <div className='header'>
        <div className='title'>
            <h4 className=''>Lever & Wheel</h4>
            <h6 className='subtitle'>{subtitle}</h6>
        </div>
            
            <div className='header-right'>
            {/* <h6 className='subtitle'> </h6> */}
               
                <div className='menu'>
                    <NavLink exact to='/'>home</NavLink>
                    <NavLink to='/services'>services</NavLink>
                    <NavLink to='/about'>about</NavLink>
                    <NavLink to='/contact'>contact</NavLink>
                </div>
            </div>
           
           
           


            
        </div>
    );
}

export default withRouter(Header);