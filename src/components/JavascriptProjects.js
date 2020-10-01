import React from 'react';


const JavascriptProjects = ()=> {
    return (
        <div className="projects">
            <h1>Javascript Projects</h1>
            <hr />
            <p className="leftText"><b>Click on the image or text links below to open the respective games or apps in a new window. Canvas elements were created using the p5JS library. I have also contributed to some DOM based games using standard javascript, created a variety of React projects, and have some familiarity with Express/MongoDB (that particular project was through a thorough tutorial/book).</b></p>
            <br />
            
            
            <h2>React Applications</h2>
            <hr className="shortHR"/>
            <div className='projectTile'>
				<a href="https://aerinkayne.github.io/react_projects/#/" target="_blank">A variety of React projects.   
				</a><p className="leftText">These include a Quote Machine, Markup Editor, Clocks and a <b>CalCuLaToR</b>.  'They' said "never make one", but I made one :o </p>
			</div>
            <br />
            
            
            <h2>Canvas Games</h2>
            <hr className="shortHR"/>
            <div className='projectTile'>
                <a href="https://aerinkayne.github.io/invaders.html" target="_blank">
                    <img src="./img/invadersLink1.png" alt="a canvas space invaders type shooter game" title="Space Invaders"/>
                </a>
            </div>
            <div className='projectTile'>
                <a href="https://aerinkayne.github.io/seasons_p5.html" target="_blank">
                    <img src="./img/seasonsLink2.png" alt="a canvas platform game based on a Khan Academy project by Ryan Kee" title="Seasons (Khan Academy Spin-Off project based on 'Seasons' by Ryan Kee)"/>
                </a>
            </div>
            <br />
            
            
            <h2>DOM Games</h2>
            <hr className="shortHR"/>
            <div className='projectTile'>
				<a href="https://aerinkayne.github.io/freeCodeCampProjects/tetris/index.html" target="_blank">
				<img src="./img/tetrisLink1.png" alt="DOM tetris" title="Tetris" />
				</a>
            </div>
            <div className='projectTile'>
                <a href="https://aerinkayne.github.io/freeCodeCampProjects/mineSweeper/index.html" target="_blank">
                    <img src="./img/minesweeperLink1.png" alt="DOM minesweeper" title="Minesweeper"/>
                </a>
            </div>
            <br />
            
            
            <h2>Other Projects</h2>
            <hr className="shortHR"/>
            <div className='projectTile'>
                <a href="https://aerinkayne.github.io/darklight/" target="_blank">SASS animated abstract art</a>
            </div>
            <div className='projectTile'>
                <a href="https://aerinkayne.github.io/freeCodeCampProjects/weatherApp/index.html" target="_blank">Weather App fetching from OpenWeather API</a>
            </div>
            <div className='projectTile'>
                <a href="https://glacial-lake-89796.herokuapp.com/" target="_blank">Blog using Express, MongoDB, and AWS on heroku</a>
            </div>
            <div className='projectTile'>
				<a href="https://aerinkayne.github.io/fishtank.html" target="_blank">
				<img src="./img/fishtankLink1.png" alt="a canvas fishtank app" title="Interactive Fishtank Canvas Element" />
				</a>
			</div>
            
        </div>
    );
};

export default JavascriptProjects;