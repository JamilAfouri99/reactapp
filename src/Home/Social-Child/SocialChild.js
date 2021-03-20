import React from "react"
import "./SocialChild.css"

class SocialProps extends React.Component{
    render(){
        return(
            <div id="ContainerSocialChild">
                <p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
                <div id="span">
                    <span>{this.props.imagy}</span>
                    <span><mark>{this.props.name}</mark> CEO - ABC Inc.</span>
                </div>
            </div>
        )
    }
}

export default SocialProps