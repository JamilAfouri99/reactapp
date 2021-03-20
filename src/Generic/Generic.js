import React,{Component} from "react"
import Menu from "../Home/menu"
import "./Generic.css"
import Footer from "../Home/footer"
import Head from "./head"
import Body from "./body"

class Generic extends Component{
    render(){
        return(
            <div id="gen">
                <Menu/>
                <Head name="GenericName"/>
                <Body/>
                <Footer/>
            </div>
        )
    }
}

export default Generic