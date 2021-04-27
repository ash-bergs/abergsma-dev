import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import './sass/App.scss';
// import { Container } from './components/contact-modal/Container'; 
import Footer from './components/Footer'; 
import Hero from './components/hero/Hero'; 
//import Nav from './components/Nav'; 

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

