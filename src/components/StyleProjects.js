import React from 'react';
import GridRadio from '../components/GridRadio';
import MaskRadio from '../components/MaskRadio';


const StyleProjects = (props)=> {
    return (
        <div>
            
            <GridRadio gridTheme={props.info.gridTheme} onChange={props.onChange} />
            <hr />
            <MaskRadio maskTheme={props.info.maskTheme} onChange={props.onChange} />

        </div>
    );
};


export default StyleProjects;