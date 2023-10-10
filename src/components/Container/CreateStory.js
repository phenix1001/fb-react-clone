import React from "react";
import './CreateStory.css';
import AddPic from './pfps/add.png';

function CreateStory(props){

    return(
        <div style={{backgroundImage:`url(${props.story})`}} className="stories create-story">
            <button>
                <img src={AddPic}></img>
            </button>
            <p>Create story</p>
        </div>
    )
}

export default CreateStory