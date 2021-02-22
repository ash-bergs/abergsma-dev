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
    //! TODO Also need to implement form validation - i.e. a valid email and a non-empty message 
    // Right now I am just using the `required` prop. Simple, inelegant, but it works. 

    return(
        <Container>
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
                    <label htmlFor="email"></label>
                    <input type="email" name="email" placeholder="Your email" required/> 
                    <label htmlFor="message"></label>
                    <textarea 
                        name="message" 
                        className="textbox" 
                        placeholder="Your message here...." 
                        rows={5}
                        cols={5}
                        required/>
                    {status === "SUCCESS" ? <p style={{ fontSize: '4.0rem', color: 'red' }}>Thanks for reaching out! I'll get back to you in a jiff!</p> : <button className="main-button" type="submit">Submit</button>}
                </form>
                </div> }

            </div>
        </Container>
    );
}

export default ContactForm; 

//TODO - The message input is buggy... vertically centering the new text inside of it. I want it to start at the top. 
//? Does this have something to do with flexbox settings? Or is it just the nature of the input? How can I fix it? 
// While I do think this has something to do with the flex settings wrapping the children, it seems my primary problem could be solved by using *the right tool for the right job* 

//* 👆 the answers to all of these questions, and more! 👇
/* 
the INPUT element specifies a SINGLE LINE input - pressing enter, for example, escapes the input. Because it's a single line! If a user pressed enter in an element intended to contain only one line, then we would assume they're done and want to leave. 

We *could* spend forever trying to code to fix for that... or just use the element intended for MULTI-LINE inputs. The TEXTAREA component. 
? Textarea elements have a lot of properties, like cols and rows, value, and so on. 
? Cols? Wouldn't that split the text area up oddly? 
*/

//? Accessibility - how accessible is this form in its current state? How can I improve it? 
//* ARIA labels, alt tags and so on.... how do these specifically apply to a form? 