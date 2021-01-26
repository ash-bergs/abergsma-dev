import React, { useState } from 'react'; 

import Container from './common_components/Container'; 

function ContactForm(){
    const [status, setStatus] = useState(""); 

    const submitForm = (event) => {
        event.preventDefault(); 
        const form = event.target; 
        const data = new FormData(form); 
        const xhr = new XMLHttpRequest(); 
        xhr.open(form.method, form.action); 
        // method and action are props on the form element 
        xhr.setRequestHeader("Accept", "application/json"); 
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset(); 
                setStatus("SUCCESS"); 
            } else {
                setStatus("ERROR"); 
            }
        };
        xhr.send(data); 
    }

    //TODO i should implement a loading state 
    //TODO Also need to implement form validation - i.e. a valid email and a non-empty message 

    //* Figured out the error state handling! I was setting state incorrectly in the handler function 
    // Now that that's done, I'm faced with abstracting logic from UI - i.e. the form, right? 


    return(
        <Container style={{ backgroundColor: 'yellow'}}>
            <div className="flexBox column contact">

                { status === "ERROR" ? <p style={{ fontSize: '4.0rem', color: 'red' }}>Something went wrong. Sorry about that! You can reach out to me directly <a href="mailto:ashley.bergsma42@gmail.com">here</a></p> 
                :
                <div className="contact-form">
                <h2 className="contact-title">Reach Out</h2>
                <p className="small-text">Want to get ahold of me about commissioning some work, collaborating, or just to talk? </p>
                <p className="small-text">Fill out the form below and I'll get back to you quickly.</p>
                <form
                    onSubmit={submitForm}
                    action="https://formspree.io/f/xeqpnvpl"
                    method="POST"
                >
                    <label>Email:</label>
                    <input type="email" name="email" /> 
                    <label>Message:</label>
                    <input type="text" name="message" className="textbox" />
                    {status === "SUCCESS" ? <p style={{ fontSize: '4.0rem', color: 'red' }}>Thanks for reaching out! I'll get back to you in a jiff!</p> : <button type="submit">Submit</button>}
                </form>
                </div> }

            </div>
        </Container>
    );
}

export default ContactForm; 