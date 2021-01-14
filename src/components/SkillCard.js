import React from 'react'; 

function SkillCard({ card }) {
    return (
        <div className="skill-card">
            <i className=""></i>
            <h3 className="headline skill-title"> {card.title} </h3>
            <ul>
                {card.featuredSkills.map((skill, index) => (
                    <li key={index}> {skill} </li>
                ))}
            </ul>
        </div>
    ); 
}

export default SkillCard; 
