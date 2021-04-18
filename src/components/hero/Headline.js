import React from 'react'; 
import FlowerCard from './FlowerCard'; 
import About from '../about-me/About'; 

function Headline() {

    return(
        <section className="headlineBg">
            <div className="flexBox column header">
                <div className="headline">
                    <p className="headline_first">Ashley</p>
                    <p className="headline_last">Bergsma</p>
                </div>
                <About />
            </div>
        </section>
    );
}

export default Headline; 


/*
<div className="innerContent">
                    <h1 className="headline limited-title"><span className="top-stagger">Ashley</span></h1>
                    <h1 className="headline limited-title"><span className="bottom-stagger">Bergsma</span></h1>
                </div>
*/

/* -------------------------------------------------------------------------- */
/*
I need to consider how to align this headline

Idea: 

In parent div -> contains 2 children (block level elements, h1?)
*/