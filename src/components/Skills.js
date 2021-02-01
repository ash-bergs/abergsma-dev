import React from 'react'; 

import skillCardsData from '../resources/skillCardsData'; 

//import Container from './common_components/Container'; 
import SkillCard from './SkillCard';

function Skills(props) {

    return (
        <div className="space-evenly flexBox">
            {/* mapping over skillCardsData here, to render a SkilLCard for each object in the array passed as "card" */}
            {skillCardsData.map((card, index) => (
                <SkillCard card={card} key={index} />
            ))}
        </div>
    ); 
}

export default Skills; 

// As of right now, at desktop style, the skills section is laid out w/ flexbox
// display: flex; defaults to row, which is what we want at this size 
//TODO but for mobile sizing we want to make flex-direction = column 

