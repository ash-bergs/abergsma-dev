import React from 'react'; 

import Container from './common_components/Container'; 

function Nav() {

    return(
        <nav>
            <Container>
                <div className="wrapper flexBox">
                    <h2 className="flexGrow_2 title navAnchor">Ashley Bergsma</h2>
                    <p className="navItem">About</p>
                    <p className="navItem">Blog</p>
                    <p className="navItem">Contact</p>
                </div>
            </Container>
        </nav>
    );
}

export default Nav; 