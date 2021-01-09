import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

import './sass/App.scss';

import Hero from './components/Hero'; 
import Nav from './components/Nav'; 

function App() {
  
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Hero} /> 
      {/* //TODO Route path="/contact" */}
      {/* //TODO Route path="/seeMore" Not sure on the path name yet - a place to list social medias and interesting dev social platforms */}
    </Router>
  );
}

export default App;
