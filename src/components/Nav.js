import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Nav= () => {

    return(
        <nav>
            
                <div aria-label="nav controls" className="flexBox nav-flex">
                    <div className="flexGrow_2 navAnchor">
                        <Link to={'/'} aria-label="home link" className="navTitle-link"><h2 className="navTitle">A.Berg</h2></Link>
                    </div>
                    <Link to={`/`} aria-label="home link" className="navItem link">Home</Link>
                    <Link to={`/contact`} aria-label="to contact form" className="navItem link">Contact</Link>
                    <a href="https://dev.to/ash_bergs" aria-label="to external blog" className="navItem link">Blog</a>
                </div>
            
        </nav>
    );
}

export default Nav; 