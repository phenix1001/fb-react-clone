import React from "react";
import './Story.css'

function Story(props){

    return(
        <div style={{backgroundImage:`url(${props.story})`}} className="stories story">
            <img className="story-user" src={props.userpfp}></img>
            <p>{props.username}</p>
        </div>
    )
}

export default Story