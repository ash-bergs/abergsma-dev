import React from 'react'; 

// import About from '../about-me/About'; 
// import Closer from '../closer/Closer'; 
// import Container from '../common_components/Container'; 
import Headline from './Headline'; 
// import Skills from '../skills/Skills'; 



function Hero() {

    return( 
        <section className="hero">
                {/* a box featuring my name and a sunflower animation will go here */}
            <Headline />
        </section>
    );
}

export default Hero; 