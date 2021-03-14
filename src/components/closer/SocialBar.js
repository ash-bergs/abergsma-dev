/* ----------------------------- About SocialBar ---------------------------- */
/*
The social bar component is a box to render links to various social media accounts. 

The items will be cirlces with an icon inside - from the Noun Project 

1. LinkedIn Profile - https://www.linkedin.com/in/ashleybergsma89/
2. SearchLight Profile - https://my.searchlight.ai/ashley-anderson
3. Twitter - https://twitter.com/ash_bergs
4. Dev.To page - https://dev.to/ash_bergs
 */

import socials from "../../resources/socialBarData"; 
import React from 'react'

function SocialBar() {
    return (
        <div className="social-bar">
            {socials.map((social, index) => (
                // grabbing the name to assign logos in the SASS 
                    <a 
                        key={index} 
                        href={social.src} 
                        alt={social.alt}
                        id={social.name}
                        > 
                        <div aria-labelledby={social.name} className={`social-link ${social.name}`}>
                            <p>{social.name}</p>
                        </div> 
                    </a>
            ))}
        </div>
    )
}

export default SocialBar; 