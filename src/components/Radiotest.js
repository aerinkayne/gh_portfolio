import React from 'react';

const Radiotest = ()=> {
    return (
        <div className="radioBtnContainer">
            <div>
                <input type="radio" id="abstr" name="theme" value="abstract" checked="checked" />
                <label for="abstr">Abstract</label>
            </div>

            <div>
                <input type="radio" id="ocean" name="theme" value="sandWater" />
                <label for="ocean">Ocean</label>
            </div>

            <div>
                <input type="radio" id="bird_forest" name="theme" value="birds" />
                <label for="bird_forest">Aviary</label>
            </div>

            <div class="last">
                <input type="radio" id="blogtrail" name="theme" value="trail" />
                <label for="blogtrail">Blogtrail</label>
            </div>

        </div>	
    )
}

export default Radiotest;