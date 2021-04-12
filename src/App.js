import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

import  { headerContent, socialContent } from './content';

function App() {
  return (
    <Router>
      <div className='container-fluid p-0'>
        <Header content={headerContent} />
        <Navigation />
        <Footer content={socialContent} />
      </div>
    </Router>
  );
}

export default App;
