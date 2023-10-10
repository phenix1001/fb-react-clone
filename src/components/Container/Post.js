import React from "react";

import ThumbIcon from './reactions/thumb.png'
import CommentIcon from './reactions/comment.png'
import ShareIcon from './reactions/share.png'

function Post(props){

    return(
        <div className="post">
            <div className="post-header">
                <img id="poster" className="poster-pfp" src={props.userpfp}></img>
                <label htmlFor="poster">
                    <h6 className="text-light">{props.username}
                        <span className={props.vIcon}><img src={props.status}></img></span>
                    </h6>
                    <p>{props.date}</p>
                </label>
            </div>

            <div className="post-content">
                <img src={props.post}></img>
                <div className="reactions">
                    <img src={props.firstReact}></img>
                    <img src={props.secondReact}></img>
                    <img src={props.thirdReact}></img>
                    <p>{props.reach}</p>
                </div>
            </div>

            <div className="post-actions">
                <button><img src={ThumbIcon}></img> like</button>
                <button><img src={CommentIcon}></img> comment</button>
                <button><img src={ShareIcon}></img> share</button>
            </div>
        </div>
    )
}

export default Post