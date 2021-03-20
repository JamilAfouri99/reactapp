import React,{Component} from "react";
import PropsChild from "./Props-Child/propsChild"
import "./props.css"

class Props extends Component{
    render(){
        return(
            <div id="wholeProps">
                <div id="firsto">
                    <p>SEM TURPIS AMET SEMPER</p>
                    <span>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis commodo ornare<br/> aliquet accumsan erat tempus amet porttitor.</span>
                </div>
                <div id="ContainerFor6Items">
                    <PropsChild text="FEUGIAT CONSEQUAT" figure={<i className="fa fa-id-card"></i>}/>
                    <PropsChild text="ANTE SEM INTEGER" figure={<i className="fa fa-passport"></i>}/>
                    <PropsChild text="IPSUM CONSEQUAT" figure={<i className="fa fa-save"></i>}/>
                    <PropsChild text="INTERDUM GRAVIDA" figure={<i className="fa fa-paper-plane"></i>}/>
                    <PropsChild text="FAUCIBUS CONSEQUAT" figure={<i className="fa fa-chart-line"></i>}/>
                    <PropsChild text="ACCUMSAN VIVERRA" figure={<i className="fa fa-circle-notch"></i>}/>
                </div>
            </div>
        )
    }
}

export default Props