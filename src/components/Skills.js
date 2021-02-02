import React from 'react'; 

import skillCardsData from '../resources/skillCardsData'; 

//import Container from './common_components/Container'; 
import SkillCard from './SkillCard';
import Typer from './common_components/Typer'; 

function Skills(props) {

    return (
        <div className="main-grid-system">
            <div className="row">
                <div className="col-1-of-2">
                    <div className="four-square-system">
                        {/* mapping over skillCardsData here, to render a SkilLCard for each object in the array passed as "card" */}
                        {skillCardsData.map((card, index) => (
                            <SkillCard card={card} key={index} />
                        ))}
                    </div>
                </div>
                <div className="col-1-of-2">
                    <Typer 
                    head="I can "
                    dataText={[
                        'imagine', 
                        'code',
                        'learn',
                        'explore',
                        'teach',
                    ]} 
                    tail=" anything"
                />
                    <p className="small-text">As a developer, the journey to learn is never over</p>
                </div>
            </div>
        </div>
    ); 
}

export default Skills; 

// As of right now, at desktop style, the skills section is laid out w/ flexbox
// display: flex; defaults to row, which is what we want at this size 
//TODO but for mobile sizing we want to make flex-direction = column 
// IDEA - this component is also going to use the main-grid-system - but it will be flipped with the 4 skills cards on the left laid out in a 4 square layout, to the right there will be more text 
//* REMOVED THESE CLASSNAMES <div className="space-evenly flexBox">
