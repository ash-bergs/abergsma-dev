import React from 'react'; 
import SocialLink from './SocialLink';

//* svg icon imports 
import blogIcon from "./blog-icon.svg"; 
import githubIcon from "./github-icon.svg"
import linkedIcon from "./linked-icon.svg";
import searchlightIcon from "./searchlight-icon.svg"
import twitterIcon from "./twitter-icon.svg";



const socials = [
    {
      name: "LinkedIn",
      src: "https://www.linkedin.com/in/ashleybergsma89/",
      alt: "LinkedIn profile",
      icon: linkedIcon
    },
    {
      name: "GitHub",
      src: "https://github.com/ash-bergs",
      alt: "GitHub profile",
      icon: githubIcon
    },
    {
      name: "SearchLight",
      src: "https://my.searchlight.ai/ashley-anderson",
      alt: "SearchLight profile",
      icon: searchlightIcon
    },
    {
      name: "Twitter",
      src: "https://twitter.com/ash_bergs",
      alt: "Twitter profile",
      icon: twitterIcon
    },
    {
      name: "Blog",
      src: "https://dev.to/ash_bergs",
      alt: "Dev.to Blog",
      icon: blogIcon
    }
  ];

function Socials() {
    return (
        <div 
          className="socialsBox">
            {socials.map((social, index) => (
                <SocialLink social={social} key={index} />
            ))}
        </div>
    )
}

export default Socials; 