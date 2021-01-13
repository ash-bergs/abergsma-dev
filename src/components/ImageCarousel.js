import React from 'react'; 

import projectsData from '../resources/projectsData'; 

function ImageCarousel() {
    return (
        <div className="composition">
            {projectsData.map((project, index) => (
                <a href={project.href} key={index}> <img src={project.src} alt="project snap" className={project.className} /> </a>
            ))}
        </div>
    ); 
}

export default ImageCarousel; 