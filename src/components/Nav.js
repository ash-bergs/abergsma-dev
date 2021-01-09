//TODO Remove title class from the nav anchor - this will be the display font and should be a "headline" class item 

import React from 'react'; 

import Container from './common_components/Container'; 

function Nav() {

    return(
        <nav>
            <Container>
                <div className="wrapper flexBox">
                    <h2 className="headline navAnchor flexGrow_2">A. Bergsma</h2>
                    <p className="navItem link">About</p>
                    <p className="navItem link">Blog</p>
                    <p className="navItem link">Contact</p>
                </div>
            </Container>
        </nav>
    );
}

export default Nav; 

// removed title from h2 and replaced with headline