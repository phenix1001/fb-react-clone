import React from "react";
import './Nav1.css';

import AddIcon from './images/icons/add.png'
import SearchIcon from './images/icons/search.png'
import MessengerIcon from './images/icons/messenger.png'

function Nav1(){

    return(

        <div className="nav-1">
            <a className="logo" href="#logo">facebook</a>
            <ul className="nav-1-btns">
                <li><button><img src={AddIcon}></img></button></li>
                <li><button><img src={SearchIcon}></img></button></li>
                <li><button><img src={MessengerIcon}></img></button></li>
            </ul>
        </div>
    )
}

export default Nav1