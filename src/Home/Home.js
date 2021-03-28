import React,{Component} from "react";
import Menu from "./menu"
import "./Home.css"
import Header from "./header" 
import Props from "./props"  
import Text from "./text" 
import Social from "./social"
import Footer from "./footer"

class Home extends Component{ 
    render(){
        return(
            <div id="WholeHome">
                <div id="home">
                    <div id="sliderAll">
                        <div><Menu/></div>
                        <div><Header/></div>
                    </div>
                    <div id="bigPart">
                        <div id="bkgrnd">
                            <div id="containerAlldata" >
                                <Props/>
                            </div>    
                            <Text />    
                            <div id="containerAlldata" >
                                <Social/>
                            </div>
                            
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Home