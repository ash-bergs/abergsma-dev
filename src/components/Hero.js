import React from 'react'; 

import About from './About'; 
import Container from './common_components/Container'; 
import Headline from './Headline'; 
import Skills from './Skills'; 

function Hero() {

    return( 
        <section className="hero">
                {/* a box featuring my name and a sunflower animation will go here */}
            <Headline />
            <Container className="about">
                <About /> 
                <Skills />
            </Container>
        </section>
    );
}

export default Hero; 