import React, { Component } from 'react';
import "./part1.css"
import Button from "./button/button"
import Table from "./Table/table"

class Part1 extends Component {
    render() {
        return (
            <div id="containerPart1">
                <div>
                    <h2>TEXT</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugiat atque tempore quidem, mollitia suscipit unde asperiores numquam odio sapiente similique in officia, doloremque maxime adipisci laborum perferendis ratione sed.</p>
                </div>
                <div>
                    <h2>HEADING LEVEL 2</h2><h3>HEADING LEVEL 3</h3><h4>HEADING LEVEL 4</h4><h5>HEADING LEVEL 5</h5><h6>HEADING LEVEL 6</h6>
                </div>
                <div id="list3div">
                    <div><h2>LISTS</h2></div>
                    <div>
                        <div>
                            <h3>UNORDERED</h3>
                            <ul>
                                <li>Dolor pulvinar amet etiam.</li>
                                <li>Sagittis adipiscing lorem eleifend.</li>
                                <li>Felis enim feugiat viverra.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>ALTERNATE</h3>
                            <span>Dolor pulvinar amet etiam.</span>
                            <span>Sagittis adipiscing lorem eleifend.</span>
                            <span>Felis enim feugiat viverra.</span>
                        </div>
                    </div>
                    <div>
                        <h3>ORDERED</h3>
                        <ol>
                            <li>Dolor pulvinar sed etiam.</li>
                            <li>Etiam vel lorem sed amet.</li>
                            <li>Felis enim feugiat viverra.</li>
                            <li>Dolor pulvinar magna etiam.</li>
                            <li>Etiam vel felis at sed viverra.</li>
                            <li>Felis enim feugiat amet dolore.</li>
                            <li>Dolor pulvinar lorem etiam.</li>
                            <li>Etiam vel felis at lorem amet.</li>
                            <li>Felis enim feugiat viverra.</li>
                            <li>Dolor pulvinar magna etiam.</li>
                            <li>Etiam vel felis sed viverra.</li>
                        </ol>
                    </div>
                    <div>
                        <h3>DEFINITION</h3>
                        <p>Alpha</p>
                        <span>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</span>
                        <p>Beta</p>
                        <span>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</span>
                        <p>Gamma</p>
                        <span>Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</span>
                    </div>
                </div>
                <div id="iconsPart1">
                    <h2>ICONS</h2>
                    <span><i className="fa fa-twitter"></i></span>
                    <span><i className="fa fa-facebook"></i></span>
                    <span><i className="fa fa-instagram"></i></span>
                    <span><i className="fa fa-github"></i></span>
                    <span><i className="fa fa-dribbble"></i></span>
                    <span><i className="fa fa-tumblr"></i></span>
                    <span><i className="fa fa-apple"></i></span>
                    <span><i className="fa fa-windows"></i></span>
                    <span><i className="fa fa-500px"></i></span>
                </div>
                <div id="actionpart1">
                    <div><h2>ACTIONS</h2></div>
                    <div>
                        <div><Button name="Default" class={"default"}/></div>
                        <div><Button name="Default" class={"defaultEmpty"}/></div>
                        <div><Button name="small" class={"small"}/></div>
                        <div><Button name="small" class={"smallEmpty"}/></div>
                    </div>
                    <div>
                        <div><Button name="Default" class={"default"}/></div>
                        <div><Button name="small" class={"small"}/></div>
                        <div><Button name="Default" class={"defaultEmpty"}/></div>
                        <div><Button name="small" class={"smallEmpty"}/></div>
                    </div>
                    <div>
                        <div><Button name="Default" class={"default"}/></div>
                        <div><Button name="small" class={"small"}/></div>
                        <div><Button name="Default" class={"defaultEmpty"}/></div>
                        <div><Button name="small" class={"smallEmpty"}/></div>
                    </div>
                </div>
                <div>
                    <h2>BLOCKQUOTE</h2>
                    <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra. Lorem ipsum dolor vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida.</p>
                </div>
                <div>
                    <h2>TABLE</h2>
                    <h3>DEFAULT</h3>
                    <Table/>
                    <h3>ALTERNATE</h3>
                    <Table/>
                </div>
            </div>
        );
    }
}

export default Part1;