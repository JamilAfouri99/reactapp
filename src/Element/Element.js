import React,{Component} from "react"
import Menu from "../Home/menu"
import "./Element.css"
import Head from "../Generic/head"
import Footer from "../Home/footer"
import Body from "./body2"

class Element extends Component{
    render(){
        return(
            <div id="Ele">
                <Menu/>
                <Head name="Elements"/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default Element