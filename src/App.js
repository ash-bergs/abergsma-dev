import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import './sass/App.scss';
import Footer from './components/Footer'; 
import MyForm from './components/ContactForm'; 
import Hero from './components/hero/Hero'; 
//import Nav from './components/Nav'; 

function App() {
  
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route path="/contact">
          <MyForm />
        </Route>
        <Route exact path="/">
          <Hero />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

