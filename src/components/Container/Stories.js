import React from "react";
import CreateStory from "./CreateStory";
import Story from "./Story";
import './Stories.css'

import GokuPic from './pfps/16212b3912a129093bcd8a1b489929dd.jpg';
import AyanamiPic from './pfps/fbc103071adeaa3f088e1e28b3872611.jpg';
import MegumiPic from './pfps/45829afaca4802f9bdfb7aa8c823e48f.jpg';
import SycPic from './pfps/d069bf3cdd2106e58ae88f17f12ab4be.jpg';
import FloppaPic from './pfps/IMG_20221112_195857.jpg';

function Stories(){

    return(
        <div className="scrollbar-x">
            <div className="stories-section">
                <CreateStory story={GokuPic} />
                <Story userpfp={AyanamiPic} username='Ossama' story={AyanamiPic}/>
                <Story userpfp={MegumiPic} username='Megumi' story={MegumiPic}/>
                <Story userpfp={SycPic} username='Syc' story={SycPic}/>
                <Story userpfp={FloppaPic} username='Floppa' story={FloppaPic}/>
            </div>
        </div>
    )
}

export default Stories