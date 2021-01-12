import React from 'react'; 

function About() {

    return(
        <div className="main-grid-system">
            <div className="row">
                <div className="col-1-of-2 u-center-content">
                    <span className="headline section-subtitle">I'm a full stack engineer based in Phoenix, Arizona.</span>
                    <p>I'm a creative developer, with a passion for making and keeping the internet accessible and beautiful for all users. </p>
                    <p>Though I'm proficient with the MERN stack, learning a new language or library is a welcome challenge. Currently I'm learning about NextJs and Lottie. My journey to master React and JavaScript while learning new patterns and skills can be followed on my <a href="">blog</a></p>
                </div>
                <div className="col-1-of-2">
                    <p>Image carousel goes here 🎠</p>
                </div>
            </div>
        </div>
    ); 
}

export default About; 

//! Most of the work being done for this component is in the styling - see the _grid.scss file in the sass/base directory 