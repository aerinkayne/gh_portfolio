import React from 'react';
import { Link } from 'react-router-dom';

const StyleProjects = ()=> {
    return (
        <div>
            <h1>CSS Designs</h1>
            <div className="projectTile">
                <Link to="/gridradio">grid radio test</Link>
            </div>
            <div className="projectTile">
                <Link to="/maskradio">masking radio test</Link>
            </div>
        </div>
    );
};


export default StyleProjects;