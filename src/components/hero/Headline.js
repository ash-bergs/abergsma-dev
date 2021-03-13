import React from 'react'; 
import FlowerCard from './FlowerCard'; 

function Headline() {

    return(
        <section className="headlineBg">
            <div className="flexBox column header">
                <div className="innerContent">
                    <h1 className="headline limited-title"><span className="top-stagger">Ashley</span></h1>
                    <h1 className="headline limited-title"><span className="bottom-stagger">Bergsma</span></h1>
                </div>
                    <FlowerCard /> 
            </div>
        </section>
    );
}

export default Headline; 
