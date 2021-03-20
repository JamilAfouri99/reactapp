import React,{Component} from "react"
import "./head.css"

class Head extends Component{
render(){
    const name=this.props.name;
    return(
        <div id="containerHeadGeneric">
            <div id="containerAlldata">
                <p>{name.toUpperCase()}</p>
            </div>
        </div>
    )
}
}
export default Head