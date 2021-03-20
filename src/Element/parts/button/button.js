import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button className={this.props.class}>{this.props.name}</button>
            </div>
        );
    }
}

export default Button;