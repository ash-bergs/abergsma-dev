import React from 'react'; 

import Container from './common_components/Container'; 
import Headline from './Headline'; 

function Hero() {

    return( 
        <section className="hero">
                {/* a box featuring my name and a sunflower animation will go here */}
            <Headline />
            <Container>
                {/* another section will be here - detailed about me, and image carousel */}
            </Container>
        </section>
    );
}

export default Hero; 