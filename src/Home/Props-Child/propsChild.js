import React from "react" 
import "./propsChild.css"

class PropsChild extends React.Component{
    render(){
        return(
            <div id="PropsChildContainer" data-aos="fade-right">
                <span>{this.props.figure}</span>
                <p>{this.props.text}</p>
                <span>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</span>
            </div>
        )
    }
}

export default PropsChild