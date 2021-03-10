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
                <div className="col-1-of-2 u-center-content u-increase-height">
                    <div className="u-center-text">
                        <Typer 
                        head="I can "
                        dataText={[
                            'imagine', 
                            'code',
                            'learn',
                            'build',
                            'explore',
                            'teach',
                        ]} 
                        tail=" anything"
                        />
                    </div>
                    <p className="small-text">As a developer, our journey to learn is never over. While I'm most proficient with JavaScript, React and the MERN stack, I never shy from the challenge of learning new languages, patterns and libraries. I'm experienced with working on remote teams, adapting to sudden project changes and learning on the go.</p>
                    <p className="small-text"> I know that meaningful things are built on teams - and the best teams have a game plan. My Agile training has given me the skills to foster a team-minded approach to problem solving, while valuing the contributions of the individual.</p>
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
//TODO - I want the text of the Typer component centered.. but not the font below it. 
