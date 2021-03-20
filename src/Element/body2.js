import React, { Component } from 'react';
import Part1 from "./parts/part1"
import Part2 from "./parts/part2"
import "./body2.css"

class Body extends Component {
    render() {
        return (
            <div id="containerBodyGeneric">
                    <div id="wholeDivElement">
                        <div><Part1/></div>
                        <div><Part2/></div>
                    </div>
            </div>
        );
    }
}

export default Body;