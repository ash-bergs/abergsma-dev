import React from 'react'; 

function SkillCard({ card }) {
    return (
        <div className="skill-card">
            <i className={card.icon}></i>
            <h3 aria-label="skill class" className="headline card-title"> {card.title} </h3>
            <ul className="skill-list">
                {card.featuredSkills.map((skill, index) => (
                    <li aria-label="skill name" key={index}> {skill} </li>
                ))}
            </ul>
        </div>
    ); 
}

export default SkillCard; 
