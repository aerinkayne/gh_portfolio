import React from 'react';

const MaskRadio = (props)=> {
    return (
        <div>
            <h1>Image Masks</h1> 
            <div className="descriptionContainer">
                <p className="leftText">These image masks were created by experimenting with SASS mixins, functions and loops to generate class names for masking and framing images. It started, in part, simply as a way to become more familiar with functionalities available through SASS.</p>
            </div>

            <div className="maskContainerSection">
                
                <div className="maskedImageDisplay _4to3lg" style={{display: props.maskTheme==='even3' ? 'flex' : 'none'}}>
                    <img src="./img/masks/mountain-view-golden-hour-photography-733168.jpg" />
                    <div className="vertCol2_w3 col1"></div>
                    <div className="vertCol2_w3 col2"></div>
                    <div className="vertCol2_w3 frame1"></div>
                    <div className="vertCol2_w3 frame2"></div>
                    <div className="vertCol2_w3 frame3"></div>
                </div>

                <div className="maskedImageDisplay _4to3lg"  style={{display: props.maskTheme==='even4' ? 'flex' : 'none'}}>
                    <img src="./img/masks/mountain-view-golden-hour-photography-733168.jpg" />
                    <div className="vertCol3_w3 col1"></div>
                    <div className="vertCol3_w3 col2"></div>
                    <div className="vertCol3_w3 col3"></div>
                    <div className="vertCol3_w3 frame1"></div>
                    <div className="vertCol3_w3 frame2"></div>
                    <div className="vertCol3_w3 frame3"></div>
                    <div className="vertCol3_w3 frame4"></div>
                </div>

                <div className="maskedImageDisplay _4to3lg"  style={{display: props.maskTheme==='even5' ? 'flex' : 'none'}}>
                    <img src="./img/masks/mountain-view-golden-hour-photography-733168.jpg" />
                    <div className="vertCol4_w3 col1"></div>
                    <div className="vertCol4_w3 col2"></div>
                    <div className="vertCol4_w3 col3"></div>
                    <div className="vertCol4_w3 col4"></div>
                    <div className="vertCol4_w3 frame1"></div>
                    <div className="vertCol4_w3 frame2"></div>
                    <div className="vertCol4_w3 frame3"></div>
                    <div className="vertCol4_w3 frame4"></div>
                    <div className="vertCol4_w3 frame5"></div>
                </div>

                <div className="maskedImageDisplay _4to3lg"  style={{display: props.maskTheme==='wide3' ? 'flex' : 'none'}}>
                    <img src="./img/masks/mountain-view-golden-hour-photography-733168.jpg" />
                    <div className="vertWideC_40 Lmask"></div>
                    <div className="vertWideC_40 Rmask"></div>
                    <div className="vertWideC_40 Lframe"></div>
                    <div className="vertWideC_40 Midframe"></div>
                    <div className="vertWideC_40 Rframe"></div>
                </div>

                <div className="maskedImageDisplay _4to3lg"  style={{display: props.maskTheme==='wider3' ? 'flex' : 'none'}}>
                    <img src="./img/masks/mountain-view-golden-hour-photography-733168.jpg" />
                    <div className="vertWideC_60 Lmask"></div>
                    <div className="vertWideC_60 Rmask"></div>
                    <div className="vertWideC_60 Lframe"></div>
                    <div className="vertWideC_60 Midframe"></div>
                    <div className="vertWideC_60 Rframe"></div>
                </div>

                <div className="maskedImageDisplay _4to3lg"  style={{display: props.maskTheme==='triU' ? 'flex' : 'none'}}>
                    <img src="./img/masks/mountain-view-golden-hour-photography-733168.jpg" />
                    <div className="triangle up"></div>
                </div>

                <div className="maskedImageDisplay _4to3lg"  style={{display: props.maskTheme==='triD' ? 'flex' : 'none'}}>
                    <img src="./img/masks/mountain-view-golden-hour-photography-733168.jpg" />
                    <div className="triangle down"></div>
                </div>
            </div>

            <div className="radioBtnContainer">
                <div>
                    <label>
                        <input type="radio" 
                                name="maskTheme" 
                                value="even3" 
                                checked={props.maskTheme==="even3"} 
                                onChange={props.onChange} />
                    3 panel, even</label>
                </div>
                <div>
                    <label>
                        <input type="radio" 
                                name="maskTheme" 
                                value="even4" 
                                checked={props.maskTheme==="even4"} 
                                onChange={props.onChange} />
                    4 panel, even</label>
                </div>
                <div>
                    <label>
                        <input type="radio" 
                                name="maskTheme" 
                                value="even5" 
                                checked={props.maskTheme==="even5"} 
                                onChange={props.onChange} />
                    5 panel, even</label>
                </div>
                <div>
                    <label>
                        <input type="radio" 
                                name="maskTheme" 
                                value="wide3" 
                                checked={props.maskTheme==="wide3"} 
                                onChange={props.onChange} />
                    3 panel, wide</label>
                </div>
                <div>
                    <label>
                        <input type="radio" 
                                name="maskTheme" 
                                value="wider3" 
                                checked={props.maskTheme==="wider3"} 
                                onChange={props.onChange} />
                    3 panel, wider</label>
                </div>
                <div>
                    <label>
                        <input type="radio" 
                                name="maskTheme" 
                                value="triU" 
                                checked={props.maskTheme==="triU"} 
                                onChange={props.onChange} />
                    upward triangle</label>
                </div>
                <div className="last">
                    <label>
                        <input type="radio" 
                                name="maskTheme" 
                                value="triD" 
                                checked={props.maskTheme==="triD"} 
                                onChange={props.onChange} />
                    downward triangle</label>
                </div>
            </div>


            <div className="maskContainerSection">
                <div className="maskContainer _4to3">
                    <img src="./img/masks/mountain-view-golden-hour-photography-733168.jpg" />
                    <div className="vertCol3_w3 col1"></div>
                    <div className="vertCol3_w3 col2"></div>
                    <div className="vertCol3_w3 col3"></div>
                    <div className="vertCol3_w3 frame1"></div>
                    <div className="vertCol3_w3 frame2"></div>
                    <div className="vertCol3_w3 frame3"></div>
                    <div className="vertCol3_w3 frame4"></div>
                </div>

                <div className="maskContainer _4to3">
                    <img src="./img/masks/pexels-photo-247431Pixabay1000.jpeg" />
                    <div className="vertWideC_60 Lmask"></div>
                    <div className="vertWideC_60 Rmask"></div>
                    <div className="vertWideC_60 Lframe"></div>
                    <div className="vertWideC_60 Midframe"></div>
                    <div className="vertWideC_60 Rframe"></div>
                </div>

                <div className="maskContainer _4to3">
                    <img src="./img/masks/trees-in-forest-during-sunset-247421.jpg" />
                    <div className="vertCol2_w3 col1"></div>
                    <div className="vertCol2_w3 col2"></div>
                    <div className="vertCol2_w3 frame1"></div>
                    <div className="vertCol2_w3 frame2"></div>
                    <div className="vertCol2_w3 frame3"></div>
                </div>
            </div>


            <div className="maskContainerSection">
                <div className="maskContainer _1to1">
                    <img src="./img/masks/nature-animal-wolf-wildernessPixabay.jpg" /> 
                    <div className="triangle down"></div> 
                </div>

                <div className="maskContainer  _1to1lg">
                    <img src="./img/masks/pexels-photo-2131828QuangNguyenVinh650.jpeg" /> 
                    <div className="triangle up"></div>
                </div>

                <div className="maskContainer _1to1">
                    <img src="./img/masks/silver-bordered-fritillary-butterfly-nature-orangePixabay.jpg" />
                    <div className="triangle down"></div>
                </div>
            </div>


            <div className="maskContainerSection">
                <div className="maskContainer _1to1sm">
                    <img className="circle" src="./img/masks/earth-spaceJaymantri1000.jpg" />
                </div>

                <div className="maskContainer _1to1lg">
                    <img className="circle" src="./img/masks/pexels-photo-2885320RobertoNickson.jpeg" />
                    <div className="eclipse"></div>
                    <div className="border_T"></div>
                    <div className="border_L"></div>
                </div>

                <div className="maskContainer _1to1sm">
                    <img className="circle" src="./img/masks/pexels-photo-55787DonaldTong.jpeg" />
                </div>
            </div>
        </div>
    );
};

export default MaskRadio;