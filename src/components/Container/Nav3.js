import React from "react";
import './Nav3.css'

import PfpIcon from './pfps/16212b3912a129093bcd8a1b489929dd.jpg';
import AddPicIcon from './pfps/add-pic.png'

function Nav3(){

    return(
        <div className="nav-3">
            <button style={{backgroundImage:`url(${PfpIcon})`}}></button>
            <button>What's on your mind?</button>
            <button style={{backgroundImage:`url(${AddPicIcon})`}}></button>
        </div>
    )
}

export default Nav3