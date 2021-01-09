import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

//import './sass/App.scss';
import './App.css'; 

import Hero from './components/Hero'; 
import Nav from './components/Nav'; 

function App() {
  
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Hero} /> 
    </Router>
  );
}

export default App;
