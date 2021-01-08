import React from 'react'; 

//? How can I pass a dynamic className to the button? i.e. - do i need to use a string template literal on the className prop?

const Button = ({ btnText, handleClick }) => {

    return <button className="btn" onclick={handleClick}> {btnText} </button>; 
}

export default Button; 