import React from 'react'; 

function About() {

    return(
        <div>
                <div className="about">
                    <span aria-label="introduction" id="intro" className="section-subtitle">I'm a <span className="highlighted">full stack engineer</span> based in Phoenix, Arizona.</span>

                    <p className="small-text" aria-labelledby="intro">I believe the internet is for everyone and it's up to developers to keep it that way. I have a passion for creating beautiful and accessible web and mobile applications, writing illuminating technical articles and challenging myself to learn and create new things daily.</p>
                    <span className="line"></span>
                </div>
        </div>
    ); 
}

export default About; 

//! Most of the work being done for this component is in the styling - see the _grid.scss file in the sass/base directory 

// removed: 
/*
<div className="col-1-of-2 u-increase-margin-top u-increase-height">
                    <Container aria-label="projects carousel">
                        <ImageCarousel />
                    </Container>
                </div>
*/
//! several class names were removed as well, this component is completely changing 
// the classes I left in are all TYPOGRAPHY class names 