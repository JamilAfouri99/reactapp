import React,{Component} from "react";
import "./footer.css"

class Footer extends Component{
    render(){
        return(
            <div id="wholeFooter">
                <div id="containerAlldata">
                    <div id="containerFooter">
                        <div>
                            <p>ACCUMSAN MONTES VIVERRA</p>
                            <span>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing sed feugiat eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</span>
                        </div>
                        <div>
                            <p>SEM TURPIS AMET SEMPER</p>
                            <span><mark>Dolor pulvinar sed etiam.</mark></span>
                            <span><mark>Etiam vel lorem sed amet.</mark></span>
                            <span><mark>Felis enim feugiat viverra.</mark></span>
                            <span><mark>Dolor pulvinar magna etiam.</mark></span>
                        </div>
                        <div>
                            <p>MAGNA SED IPSUM</p>
                            <span><i className="fa fa-twitter"></i><mark>Twitter</mark></span>
                            <span><i className="fa fa-facebook"></i><mark>Facebook</mark></span>
                            <span><i className="fa fa-instagram"></i><mark>Instagram</mark></span>
                            <span><i className="fa fa-github"></i><mark>Github</mark></span>
                        </div>
                    </div>
                    <hr id="hr"></hr>
                    <div id="lasty">© Untitled. Photos Unsplash, Video Coverr.</div>
                </div>
            </div>
        )
    }
}

export default Footer