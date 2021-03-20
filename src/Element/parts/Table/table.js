import React, { Component } from 'react';
import "./table.css"

class Table extends Component {
    render() {
        return (
            <div id="containerTablelonely">
                <table >
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Price</td>
                    </tr>
                    <tr>
                        <td>Alpha</td>
                        <td>	Ante turpis integer aliquet porttitor.</td>
                        <td>10.00</td>
                    </tr>
                    <tr>
                        <td>Beta</td>
                        <td>Vis ac commodo adipiscing arcu aliquet.</td>
                        <td>20.00</td>
                    </tr>
                    <tr>
                        <td>Gamma</td>
                        <td>Morbi faucibus arcu accumsan lorem.</td>
                        <td>30.00</td>
                    </tr>
                    <tr>
                        <td>Delta</td>
                        <td>Vitae integer tempus condimentum.</td>
                        <td>40.00</td>
                    </tr>
                    <tr>
                        <td>Epsilon</td>
                        <td>Ante turpis integer aliquet porttitor.</td>
                        <td>50.00</td>
                    </tr>
                    <tr>
                        <td>Zeta</td>
                        <td>Vis ac commodo adipiscing arcu aliquet.</td>
                        <td>60.00</td>
                    </tr>
                    <tr>
                        <td>Eta</td>
                        <td>Morbi faucibus arcu accumsan lorem.</td>
                        <td>70.00</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Table;