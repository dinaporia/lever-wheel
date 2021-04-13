import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';


import  { aboutContent, homeContent, servicesContent } from '../content';

const Navigation = () => {
    return (
    <Switch>
        <Route exact path='/'>
            <Home content={homeContent} />
        </Route>
        <Route path='/about'>
            <About content={aboutContent}/>
        </Route>
        <Route path='/contact'>
            <Contact />
        </Route>
        <Route path='/services'>
            <Services content={servicesContent}/>
        </Route>
        <Redirect to='/' />
    </Switch>
    );
}

export default Navigation;