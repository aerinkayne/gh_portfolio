import React from 'react';



const Artwork = ()=> {

    return (
        <div>
                
            <h1>Digital Art</h1>
            
            <div className="descriptionContainer">
                <p className="leftText">Below are some examples of my artwork.  I enjoy a wide range of artistic styles, though I prefer creating surreal or fantasy themes.  The work displayed here was created using an iPad app called ArtStudio and/or GIMP.     
                </p>
            </div> 
		
            <div className="itemContainer">
                <div className="artGridItem L">
                    <img className="art" src="./artwork/butterflyGarden1000_72pi.png" alt="" />
                </div>
                <div className="artGridItem R">
                    <img className="art" src="./artwork/TM1100.jpg" alt="" />
                </div>
                <div className="artGridItem L">
                    <img className="art" src="./artwork/TO1100.JPG" alt="" />
                </div>
                <div className="artGridItem R">
                    <img className="art" src="./artwork/Amalgam_gen1000.PNG" alt="" />
                </div>
                <div className="artGridItem L">
                    <img className="art" src="./artwork/ravenAndPhoenix_1_1100_72ppi.png" alt="" />
                </div>
                <div className="artGridItem R">
                    <img className="art" src="./artwork/shakti_1000.jpg" alt="" />
                </div>
                <div className="artGridItem L">
                    <img className="art" src="./artwork/ebr900.jpg" alt="" />
                </div>
                <div className="artGridItem R">
                    <img className="art" src="./artwork/mntdragon1100.JPG" alt="" />
                </div>
                <div className="artGridItem L">
                    <img className="art" src="./artwork/phoenixDA900.jpg" alt="" />
                </div>
                <div className="artGridItem R">
                    <img className="art" src="./artwork/12_display.jpg" alt="" />
                </div>
            </div>
		
	    </div>
        
    );
};

export default Artwork;