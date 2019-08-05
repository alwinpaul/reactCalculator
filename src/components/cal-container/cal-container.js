import React, { Component } from "react";
import InputBox from "./../input/";
import NumberButton from "./../number-button";
import './cal-container.css';

class CalContainer extends Component {
  previousValue = "";
  result = 0;
  constructor(props) {
    super(props);
    this.state = {
      inputVal: 0
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    let button = e.target.innerHTML.trim();

    if (button === "=") {
      this.calculate();
    } else if (button === "c") {
      this.setState({
        inputVal: 0
      });
    } else {
      this.previousValue = this.state.inputVal + "" + button;

      if (this.state.inputVal == 0) {
        this.setState({
          inputVal: Number(this.previousValue).toString()
        });
      } else {
        this.setState({
          inputVal: this.previousValue
        });
      }
    }
  }

  calculate() {

    try {
      this.setState({
        inputVal: eval(this.state.inputVal)
      });
    } catch(e) {
      console.error(e);
      alert('Something went wrong');
      this.setState({
        inputVal: 0
      });
    }
    
  }

  render() {
    return (
      <section className="container">
        <div className="inpit-cont">
          <InputBox inputVal={this.state.inputVal} />
        </div>
        <div className="button-box">
          <NumberButton handler={this.handleButtonClick}>1</NumberButton>
          <NumberButton handler={this.handleButtonClick}>2</NumberButton>
          <NumberButton handler={this.handleButtonClick}>3</NumberButton>
          <NumberButton handler={this.handleButtonClick}>4</NumberButton>
          <NumberButton handler={this.handleButtonClick}>5</NumberButton>
          <NumberButton handler={this.handleButtonClick}>6</NumberButton>
          <NumberButton handler={this.handleButtonClick}>7</NumberButton>
          <NumberButton handler={this.handleButtonClick}>8</NumberButton>
          <NumberButton handler={this.handleButtonClick}>9</NumberButton>
          <NumberButton handler={this.handleButtonClick}>%</NumberButton>
          <NumberButton handler={this.handleButtonClick}>0</NumberButton>
          <NumberButton handler={this.handleButtonClick}>=</NumberButton>
          <NumberButton handler={this.handleButtonClick}>c</NumberButton>
        </div>
        <div className="operator-box">
          <NumberButton handler={this.handleButtonClick}>-</NumberButton>
          <NumberButton handler={this.handleButtonClick}>+</NumberButton>
          <NumberButton handler={this.handleButtonClick}>*</NumberButton>
          <NumberButton handler={this.handleButtonClick}>/</NumberButton>
        </div>
        <div>
        </div>
      </section>
    );
  }
}

export default CalContainer;
