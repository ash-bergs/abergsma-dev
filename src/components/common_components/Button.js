import React from 'react'; 

const Button = ({ btnText, handleClick }) => {

    return <button className="btn" onclick={handleClick}> {btnText} </button>; 
}

export default Button; 