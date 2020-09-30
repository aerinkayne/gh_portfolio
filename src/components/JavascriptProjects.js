import React from 'react';


const JavascriptProjects = ()=> {
    return (
        <div id="projects">
            <h1>Javascript Projects</h1>
            <hr />
            <p className="leftText">Click on the image or text links below to navigate to the respective games or apps (this will take you to separate repos). Canvas element apps were created using the p5JS library. I have also contributed to some DOM based games using standard javascript, created a variety of React projects, and have some familiarity with Express/MongoDB (that particular project was through a thorough tutorial/book).</p>

            <h2>React Applications</h2>
            <div className='projectTile'>
				<a className="projectLink" href="https://aerinkayne.github.io/react_projects/#/">Additional projects created using React.   
				</a><p className="leftText">These include a Quote Machine, Markup Editor, Clocks and a <b>CalCuLaToR</b>.  'They' said "never make one", but I made one :o </p>
			</div>

            <h2>Canvas Games</h2>
            <div className='projectTile'>
                <a href="https://aerinkayne.github.io/invaders.html">
                    <img src="./img/invadersLink1.png" alt="a canvas space invaders type shooter game" title="Space Invaders"/>
                </a>
            </div>
            <div className='projectTile'>
                <a href="https://aerinkayne.github.io/seasons_p5.html">
                <img src="./img/seasonsLink2.png" alt="a canvas platform game based on a Khan Academy project by Ryan Kee" title="Seasons (Khan Academy Spin-Off project based on 'Seasons' by Ryan Kee)"/>
                </a>
            </div>


            <h2>DOM Games</h2>
            <div className='projectTile'>project</div>
            <div className='projectTile'>project</div>

            <h2>Other Projects n Experiments</h2>
            <div className='projectTile'>SASS animated abstract art</div>
            <div className='projectTile'>Fishtank Canvas Element</div>
            <div className='projectTile'>Weather App</div>
            <div className='projectTile'>Blog using Express, MongoDB, and AWS on heroku</div>
            
        </div>
    );
};

export default JavascriptProjects;