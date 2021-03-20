import React, { Component } from 'react';
import "./part2.css"
import Button from "./button/button"

class Part2 extends Component {
    render() {
        return (
            <div id="wholepart2">
                <div><h2>BUTTONS</h2></div>
                <div id="containerpart2div1">
                    <div>
                        <div><Button class="default" name="Primary"/></div>
                        <div><Button class="defaultEmpty" name="Default"/></div>
                    </div>
                    <div>
                        <div><Button class="defaultLarge" name="Large"/></div>
                        <div><Button class="defaultEmpty" name="Default"/></div>
                    </div>
                    <div>
                        <div><Button class="small" name="Small"/></div>
                        <div><Button class="wide" name="Wide"/></div>
                    </div>
                    <div>
                        <div><Button class="fit" name="Fit"/></div>
                        <div><Button class="fitEmpty" name="Fit"/></div>
                    </div>
                    <div>
                        <div><Button class="fitSmall" name="Fit+Small"/></div>
                        <div><Button class="fitSmallEmpty" name="Fit+Small"/></div>
                    </div>
                    <div>
                        <div><Button class="icon" name={<i className="fa fa-search"> Icon</i>}/></div>
                        <div><Button class="iconEmpty" name={<i className="fa fa-download"> Icon</i>}/></div>
                    </div>
                    <div>
                        <div><input className="disabled" type="button" value="Primary" disabled/></div>
                        <div><input className="disabledEmpty" type="button" value="Default" disabled/></div>
                    </div>
                </div>
                <div>
                    <h2>FORM</h2>
                    <div id="containerForm">
                        <div>
                            <div><input type="text" placeholder="Name" className="text"/></div>
                            <div><input type="email" placeholder="Email" className="text"/></div>
                        </div>
                        <div>
                            <select className="select">
                                <option>-Select-</option>
                                <option >Alpha</option>
                                <option >Beta</option>
                                <option >Gamma</option>
                            </select>
                        </div>
                        <div>
                            <div>
                                <input type="radio" />
                                <label>Radio Alpha</label>
                            </div>
                            <div>
                                <input type="radio" />
                                <label>Radio Peta</label>
                            </div>
                            <div>
                                <input type="radio" />
                                <label>Radio Gamma</label>
                            </div>
                        </div>
                        <div>
                            <div><input type="checkbox" className="checkbox"/>Checkbox Alpha</div>
                            <div><input type="checkbox" className="checkbox"/>Checkbox Bata</div>
                        </div>
                        <div>
                            <textarea placeholder="Alpha beta gamma delta"></textarea>
                        </div>
                        <div>
                            <div><Button class="fit" name="Submit Form"/></div>
                            <div><Button class="icon" name="Reset"/></div>
                        </div>
                    </div>
                </div>
                <div id="containerIMAGE">
                    <h2>FIT</h2><br/>
                    <h2>LEFT & RIGHT</h2>
                    <p>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Magna et cursus lorem faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod tempus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida lorem ipsum dolor sit amet dolor feugiat consequat.</p>
                    <p>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Magna et cursus lorem faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod tempus. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac sed amet praesent. Nunc lacinia ante nunc ac gravida lorem ipsum dolor sit amet dolor feugiat consequat.</p>
                    <h2>BOX</h2>
                    <p>Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum dolor sit amet nullam.</p>
                    <h2>PREFORMATTED</h2>
                    <div>
                        <textarea placeholder="i = 0;

                            while (!deck.isInOrder()) {
                                print 'Iteration ' + i;
                                deck.shuffle();
                                i++;
                            }

                            print 'It took ' + i + ' iterations to sort the deck.';" readOnly></textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default Part2;