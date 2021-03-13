import React from 'react'; 

function SkillCard({ card }) {
    return (
        <div className="skill-card">
            <i className={card.icon}></i>
            <h3 className="headline card-title"> {card.title} </h3>
            <ul className="skill-list">
                {card.featuredSkills.map((skill, index) => (
                    <li key={index}> {skill} </li>
                ))}
            </ul>
        </div>
    ); 
}

export default SkillCard; 

//TODO icons need to be styled - maybe a gradient? 
//TODO font of the <li> elements needs to be bolder, and spaced for easier reading 
//TODO thicker underline 
//TODO Animation effect! Maybe spin around and float up? Not sure yet 
