import React from 'react';

const Footer = ()=> {
    return (
        <footer>
            <ul>
                <li className="first"><a href="https://www.freecodecamp.org/"><img height="24" width="24" id="fcc" src="./svgIcons/freecodecamp.svg" alt="link to free code camp"/></a></li>
                <li><a href="https://github.com/aerinkayne"><img height="24" width="24" id="gh" src="./svgIcons/github.svg" alt="link to github account" /></a></li>
                <li><a href="https://www.artstation.com/aerin-kayne"><img id="as" height="24" width="24" src="./svgIcons/artstation.svg" alt="link to artstation account" /></a></li>
			    <li className="last"><a href="mailto:darth_kayne@yahoo.com">Contact</a></li>    
            </ul>
        </footer>
    )
}

export default Footer;