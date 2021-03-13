import React from 'react'; 

import skillCardsData from '../../resources/skillCardsData'; 
import SkillCard from './SkillCard';


//TODO - the whole layout of the skills cards is going to change. They will now run across the screen in a line. 

function Skills() {

    return (
        <div className="skills-bar">
            {/* mapping over skillCardsData here, to render a SkilLCard for each object in the array passed as "card" */}
            {skillCardsData.map((card, index) => (
                <SkillCard card={card} key={index} />
            ))}
        </div>
    ); 
}

export default Skills; 
