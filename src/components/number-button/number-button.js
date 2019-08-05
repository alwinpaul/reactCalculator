import React, {Component} from 'react'
import './number-button.css'


class NumberButton extends Component {

    render() {
        return (
            <button onClick={this.props.handler}> {this.props.children}</button>
        );
    }
}

export default NumberButton;
