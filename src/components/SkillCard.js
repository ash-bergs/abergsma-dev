import React from 'react'; 

function SkillCard({ card }) {
    return (
        <div className="skill-card">
            <i className="fas fa-book feature-icon"></i>
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
