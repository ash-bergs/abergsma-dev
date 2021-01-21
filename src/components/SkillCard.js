import React from 'react'; 

function SkillCard({ card }) {
    return (
        <div className="skill-card">
            <i className={card.icon}></i>
            <h3 className="headline section-subtitle"> {card.title} </h3>
            <ul className="skill-list">
                {card.featuredSkills.map((skill, index) => (
                    <li key={index}> {skill} </li>
                ))}
            </ul>
        </div>
    ); 
}

export default SkillCard; 

//TODO The icons need to be styled - maybe a gradient? 
//TODO Also the font of the <li> elements needs to be bolder, and spaced for easier reading 
