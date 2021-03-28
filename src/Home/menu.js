import React,{Component} from "react"
import "./menu.css"
import {BrowserRouter,Route,NavLink} from "react-router-dom"

class Menu extends Component{
    state={
        show:false,
        list:false,
        wrong:true
    }
    Appearance=()=>{
    this.setState({
        show:!this.state.show,
        list:!this.state.list,
        wrong:!this.state.wrong
    })
    }
    render(){
        return(
                <>
                    <div id="menu">
                        <span>Industrious</span>
                        <i onClick={this.Appearance} className="fa fa-list-ul" id={this.state.list==true?"disappearList":null}></i>
                        <i onClick={this.Appearance} className="fa fa-times" id={this.state.wrong==true?"disappearWrong":null}></i>
                    </div>
                    <div className={this.state.show==true?"itemsy":"appear"} >
                        <ul >
                            <NavLink exact activeClassName="navy" to="/">Home</NavLink>
                            <NavLink activeClassName="navy"  to="/element">Element</NavLink>
                            <NavLink activeClassName="navy"  to="/generic">Generic</NavLink>
                        </ul>  
                    </div>
                </>
        )
    }
}

export default Menu