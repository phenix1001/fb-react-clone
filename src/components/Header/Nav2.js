import React from "react";
import './Nav2.css'

import MarketIcon from './images/icons/market.png'
import HomeIcon from'./images/icons/home.png'
import NotifIcon from'./images/icons/notifications.png'
import WatchIcon from'./images/icons/watch.png'
import RequestsIcon from'./images/icons/requests.png'
import MenuIcon from'./images/icons/menu.png'
import HomeActiveIcon from './images/icons/home-active.png'

function Nav2(){

    return(
        <div className="nav-2">
            
                <button className="active-btn"><img style={{width:'34px',height:'34px',transform:'translateY(-3px)',opacity:'1'}} src={HomeActiveIcon}></img></button>
                <button><img style={{width:'27px',height:'27px'}} src={RequestsIcon}></img></button>
                <button><img style={{width:'27px',height:'27px',transform:'translateY(-1px)'}} src={WatchIcon}></img></button>
                <button><img style={{width:'27px',height:'27px'}} src={MarketIcon}></img></button>
                <button><img style={{width:'27px',height:'27px'}} src={NotifIcon}></img></button>
                <button><img style={{width:'32px',height:'32px',transform:'translateY(-1px)'}} src={MenuIcon}></img></button>
            
        </div>
    )
}

export default Nav2