import React from "react";
import './Posts.css'
import Post from "./Post";
import SepLine from "../SepLine/SepLine";

import GokuPic from './pfps/16212b3912a129093bcd8a1b489929dd.jpg'
import IzumiPic from './pfps/e0d85c577aec29bcf6821a90aa2a19b8.jpg'
import MegumiPic from './pfps/45829afaca4802f9bdfb7aa8c823e48f.jpg'
import SycPic from './pfps/d069bf3cdd2106e58ae88f17f12ab4be.jpg'
import GokuPost from './pfps/IMG_20221112_195857.jpg'

import SadR from './reactions/sad.png'
import LoveR from './reactions/love.png'
import LikeR from './reactions/like.png'
import CareR from './reactions/care.png'
import AngryR from './reactions/angry.png'
import WowR from './reactions/wow.png'
import HahaR from './reactions/haha.png'

import VerifedIcon from './pfps/verified.png'

function Posts(){

    return(
        <>

            <Post
                username='Az Ossama'
                userpfp={GokuPic}
                date='1d'
                status={VerifedIcon}
                post={GokuPost}
                firstReact={LoveR}
                secondReact={CareR}
                thirdReact={WowR}
                reach='45'
            />

            <SepLine />

            <Post
                username='Oussama B.'
                userpfp={IzumiPic}
                date='5h'
                vIcon='d-none'
                status={VerifedIcon}
                post={IzumiPic}
                firstReact={LoveR}
                secondReact={CareR}
                thirdReact={HahaR}
                reach='41'
            />

            <SepLine />

            <Post 
                username='Megumi Fushiguro'
                userpfp={MegumiPic}
                date='35m'
                vIcon='d-none'
                status={VerifedIcon}
                post={MegumiPic}
                firstReact={CareR}
                secondReact={LoveR}
                thirdReact={SadR}
                reach='156'
            />

            <SepLine />

            <Post 
                username='Syc'
                userpfp={SycPic}
                date='2h'
                status={VerifedIcon}
                post={SycPic}
                firstReact={CareR}
                secondReact={LoveR}
                thirdReact={SadR}
                reach='25'
            />

        </>
    )
}

export default Posts