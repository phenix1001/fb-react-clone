import React from "react";
import ReactDOM from "react-dom";
import './Container.css'

function Container(props){

    return(

        <div className="main scrollbar-y">
            {props.children}
        </div>
    )
}

export default Container