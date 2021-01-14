import React from 'react'; 

import skillCardsData from '../resources/skillCardsData'; 

//import Container from './common_components/Container'; 
import SkillCard from './SkillCard';

function Skills(props) {

    return (
        <div className="skillsBox flexBox">
            {/* mapping over skillCardsData here, to render a SkilLCard for each object in the array passed as "card" */}
            {skillCardsData.map((card, index) => (
                <SkillCard card={card} key={index} />
            ))}
        </div>
    ); 
}

export default Skills; 