import React from 'react'

// import SocialBar from './SocialBar'; 
import Typer from '../common_components/Typer'; 

function Closer() {
    return (
        <div className="closer">
            <div className="typer">
                <Typer 
                head="I can "
                dataText={[
                    'imagine', 
                    'code',
                    'learn',
                    'build',
                    'explore',
                ]} 
                tail=" anything"
                />
            </div>
            <div className="closing-statement">
                <p className="small-text">The developer's journey to learn is never over, and while I'm most proficient with the M.E.R.N. stack, I'll never shy from the challenge of undertaking a new language, convention or project. I maintain a blog documenting my journey to master my primary language, JavaScript, and the subjects I really love - like CSS, best practices, the art of reading code, time management and more.</p>
                <br/>
                <p className="small-text"> I love working on teams! I know that to build a team environment means being flexible, communicative and thoughtful in my feedback. I have experience working on fully remote teams, filling both back and frontend roles. These teams used Agile methodologies to coordinate team effort, and I've since implemented many of those approaches into my personal workflow. If you're interested in hearing what peers have to say about working with me, please see my SearchLight profile, linked below.</p>
                {/* SOCIAL BAR RENDERING HERE WHEN COMPLETE */}
            </div>
        </div>
    )
}

export default Closer; 
