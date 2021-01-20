import React from 'react'; 
import { Link } from 'react-router-dom'; 

import Container from './common_components/Container'; 

function Nav() {

    return(
        <nav>
            <Container>
                <div className="flexBox">
                    <h2 className="navAnchor flexGrow_2">A<span className="navAccent">.</span> Berg</h2>
                    <Link to="/" className="navItem link">Home</Link>
                    <Link to="/contact" className="navItem link">Contact</Link>
                    <a href="https://dev.to/ash_bergs" className="navItem link">Blog</a>
                </div>
            </Container>
        </nav>
    );
}

export default Nav; 