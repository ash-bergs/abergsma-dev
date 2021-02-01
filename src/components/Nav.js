import React from 'react'; 
import { Link } from 'react-router-dom'; 

import Container from './common_components/Container'; 

const Nav= () => {

    return(
        <nav>
            <Container>
                <div className="flexBox">
                    <div className="flexGrow_2 navAnchor">
                        <Link to={'/'} className="navTitle-link"><h2 className="navTitle">A.Berg</h2></Link>
                    </div>
                    <Link to={`/`} className="navItem link">Home</Link>
                    <Link to={`/contact`} className="navItem link">Contact</Link>
                    <a href="https://dev.to/ash_bergs" className="navItem link">Blog</a>
                </div>
            </Container>
        </nav>
    );
}

export default Nav; 