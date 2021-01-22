import React from 'react'; 

import Container from './common_components/Container'; 
import ImageCarousel from './ImageCarousel'; 

function About() {

    return(
        <div className="main-grid-system">
            <div className="row">
                <div className="col-1-of-2 u-center-content u-increase-height">
                    <span className="headline section-subtitle">I'm a <span className="highlighted">full stack engineer</span> based in Phoenix, Arizona.</span>
                    <p className="about-text">I have a passion for creating beautiful and accessible web and mobile applications. I believe the internet is for everyone, and accessibility-minded design makes it that way.</p>
                    <p className="about-text">I'm proficient with the MERN stack, but learning new libraries and languages are a welcome challenge. As a developer my journey to learn is never over, I'm currently tackling NextJs and LottieFiles. </p>
                </div>
                <div className="col-1-of-2 u-increase-margin-top u-increase-height">
                    <Container>
                        <ImageCarousel />
                    </Container>
                </div>
            </div>
        </div>
    ); 
}

export default About; 

//! Most of the work being done for this component is in the styling - see the _grid.scss file in the sass/base directory 
