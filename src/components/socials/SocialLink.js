import React from 'react'; 

function SocialLink({ social }) {
    
    return (
        <a  
            className="socialLink"
            alt={social.alt} 
            href={social.src}>
                <img
                    src={social.icon}
                    className="iconBox" 
                    alt="an icon"/>
        </a>
    )
}

export default SocialLink; 