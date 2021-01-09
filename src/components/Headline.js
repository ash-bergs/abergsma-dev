import React from 'react'; 

function Headline() {

    return(
        <section className="headlineBg">
            <div className="flexBox column header">
                <div class="innerContent">
                    <h1 class="title limited-title"><span class="top-stagger">Ashley</span> <span class="bottom-stagger">Bergsma</span></h1>
                    <p className="paragraph">I'm a full stack developer</p>
                </div>
            </div>
        </section>
    );
}

export default Headline; 

// removed title from h1 replace with headline

//? The <span> element appears to have reduced the letter spacing in the headline font? I didn't know that this happened? 
//? is that specific to react? 