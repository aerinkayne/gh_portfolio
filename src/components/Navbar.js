import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = (props)=> {
    return (
        <nav>
            <div id="navContentContainer">
                <div id="navLogoDiv"><span>&#x270E;</span></div>
                
                <ul id="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/javascript">JS Projects</Link></li>
                    <li><Link to="/gridradio">Grid Test</Link></li> 
                    <li><Link to="/artwork">Artwork</Link></li>   
                </ul>

                <div className="burger" onClick={props.handleClicks}>
                    <div className="topB"></div>
                    <div className="midB"></div>
                    <div className="btmB"></div>
                </div>

            </div>


        </nav>
    )
}

export default Navbar;