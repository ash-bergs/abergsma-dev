import React from 'react'; 

import Container from '../common_components/Container'; 
import ImageCarousel from './ImageCarousel'; 

function About() {

    return(
        <div className="main-grid-system">
            <div className="row">
                <div className="col-1-of-2 u-center-content u-increase-height">
                    
                    <span aria-label="introduction" id="intro" className="headline section-subtitle">I'm a <span className="highlighted">full stack engineer</span> based in Phoenix, Arizona.</span>

                    <p className="small-text" aria-labelledby="intro">I believe the internet is for everyone and it's up to developers to keep it that way. I have a passion for creating beautiful and accessible web and mobile applications, writing illuminating technical articles and challenging myself to learn and create new things daily.</p>
                </div>
                <div className="col-1-of-2 u-increase-margin-top u-increase-height">
                    <Container aria-label="projects carousel">
                        <ImageCarousel />
                    </Container>
                </div>
            </div>
        </div>
    ); 
}

export default About; 

//! Most of the work being done for this component is in the styling - see the _grid.scss file in the sass/base directory 
