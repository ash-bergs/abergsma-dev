import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

import './sass/App.scss';
import Footer from './components/Footer'; 
import MyForm from './components/ContactForm'; 
import Hero from './components/hero/Hero'; 
import Nav from './components/Nav'; 

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
    </Router>
  );
}

export default App;


//! Sticking point: I was setting up the ContactForm component, trying to connect it to the Nav bar 
// When contact is clicked, the route should change, and a contact form should appear 
//! The problem: The route was changing, but the component wasn't rendering 
//* What I think it is: It just hit me! I think I need a Switch! Duh! 
//* it seems to have worked! I also changed the rendering method in the main Router here in App 
// Now I must add a third party library - 


// Notes on the React Router Switch component: 
//* Renders a route *exlusively* 

