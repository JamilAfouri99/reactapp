import React,{Component} from "react";
import "./header.css"
import myVideo from "../images/banner.mp4"

class Header extends Component{
    render(){
        return(
            <div id="header">
                <div id="divVideo"><video id="video" src={myVideo} type='video/mp4' autoPlay loop muted/></div>
                <div id="text">
                    <p>INDUSTRIOUS</p>
                    <span>A responsive business oriented template with a video background
                    designed<br/>by TEMPLATED and released under the Creative Commons License.</span>
                </div>
            </div>
        )
    }
}

export default Header