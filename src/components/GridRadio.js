import React from 'react';

const GridRadio = (props)=> {
    
    return (
        <div>                                               {/* I hate you React, like you will never know */}
            <div className="gridRadioDisplay" id="abstract" style={{display: props.gridTheme==='abstract' ? 'grid' : 'none'}}> 
                <div className="spinner">
                    <div className="gridItem gt1"></div>
                </div>
                <div className="gridItem gt2"></div>
                <div className="gridItem gt3"></div>
                <div className="gridItem gt4"></div>
                <div className="gridItem gt5"></div>
                <div className="gridItem gt6"></div>
            </div>
    
            <div className="gridRadioDisplay" id="sandWater" style={{display: props.gridTheme==='sandWater' ? 'grid' : 'none'}}>  
                <div className="gridItem gt1"></div>
                <div className="gridItem gt2"></div>
                <div className="gridItem gt3"></div>
                <div className="gridItem gt4"></div>
                <div className="gridItem gt5"></div>
                <div className="gridItem gt6"></div>
                <div className="gridItem gt7"></div>
            </div>

            <div className="gridRadioDisplay" id="birds" style={{display: props.gridTheme==='birds' ? 'grid' : 'none'}}>   
                <div className="gridItem gt1"></div>
                <div className="gridItem gt2"></div>
                <div className="gridItem gt3"></div>
                <div className="gridItem gt4"></div>
                <div className="gridItem gt5"></div>
                <div className="gridItem gt6"></div>
            </div>

            <div className="gridRadioDisplay" id="trail" style={{display: props.gridTheme==='trail' ? 'grid' : 'none'}} >
                <div className="_x"><h1>Lorem ipsum dolor</h1></div>
                <div className="BG1top _a">
                    <div className="BG2top"></div>
                </div>
                <div className="BG1top _b">
                    <div className="BG2top"></div>
                </div>
                <div className="BG1top _e">
                    <div className="BG2top"></div>
                </div>
                <div className="BG1bottom _f">
                    <div className="BG2bottom"></div>
                </div>
                <div className="BG1bottom _h">
                    <div className="BG2bottom"></div>
                </div>
                <div className="BG1bottomAlt _i">
                    <div className="BG2bottom"></div>
                </div>
                
                <div className="_y"><h3 className="topText">Lorem ipsum dolor</h3></div>
                <div className="_z"><h3 className="bottomText">Lorem ipsum dolor</h3></div>
            </div>


            <h2 id="gridRadioH1">Grid Compositions</h2>
            <div className="radioBtnContainer">
                <div>
                    <label>
                        <input  type="radio" 
                                name="gridTheme" 
                                value="abstract" 
                                checked={props.gridTheme==="abstract"} 
                                onChange={props.onChange} />
                    Abstract</label>
                </div>

                <div>
                    <label>
                        <input  type="radio" 
                                name="gridTheme" 
                                value="sandWater" 
                                checked={props.gridTheme==="sandWater"} 
                                onChange={props.onChange} />
                    Ocean</label>
                </div>

                <div>
                    <label>
                        <input  type="radio" 
                                name="gridTheme" 
                                value="birds" 
                                checked={props.gridTheme==="birds"} 
                                onChange={props.onChange} />
                    Aviary</label>
                </div>

                <div className="last">
                    <label>
                        <input  type="radio" 
                                name="gridTheme" 
                                value="trail" 
                                checked={props.gridTheme==="trail"} 
                                onChange={props.onChange} />
                    Blogtrail</label>
                </div>
            </div>	
            <br />

        </div>
    );
};

export default GridRadio;