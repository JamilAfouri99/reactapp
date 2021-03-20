import {Component} from "react"
import SocialProps from "./Social-Child/SocialChild";
import img1 from "../images/pic01.jpg"
import img2 from "../images/pic02.jpg"
import img3 from "../images/pic03.jpg"
import "./social.css"

class Social extends Component{
    render(){
        return(
            <div id="containerSocial">
                <div id="text">
                    <p>FAUCIBUS CONSEQUAT LOREM</p>
                    <span>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor.</span>
                </div>
                <div id="social">
                    <SocialProps name="- Sarah jack" imagy={<img src={img1} width="50px"/>}/>
                    <SocialProps name="- Joly yahn" imagy={<img src={img2} width="50px"/>}/>
                    <SocialProps name="- John Doe" imagy={<img src={img3} width="50px"/>}/>
                </div>
            </div>
        )
    }
}

export default Social