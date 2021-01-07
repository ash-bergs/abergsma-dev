import React from 'react'; 

import Container from './common_components/Container'; 

function Hero() {

    return( 
        <section className="hero">
            <Container>
                {/* a box featuring my name and a sunflower animation will go here */}
            </Container>
            <Container>
                {/* another section will be here - detailed about me, and image carousel */}
            </Container>
        </section>
    );
}

export default Hero; 