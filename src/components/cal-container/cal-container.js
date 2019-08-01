import React, { Component } from "react";
import InputBox from "./../input/";
import NumberButton from "./../number-button";

class CalContainer extends Component {
  render() {
    return (
      <section className="container">
        <div className="inpit-cont">
          <InputBox inputVal="10" />
        </div>
        <div className="button-box">
          <NumberButton>1</NumberButton>
          <NumberButton>2</NumberButton>
          <NumberButton>3</NumberButton>
          <NumberButton>4</NumberButton>
          <NumberButton>5</NumberButton>
          <NumberButton>6</NumberButton>
          <NumberButton>7</NumberButton>
          <NumberButton>8</NumberButton>
          <NumberButton>9</NumberButton>
          <NumberButton>0</NumberButton>
        </div>
        <div>Operators</div>
        <div className="operator-box">
          <NumberButton>Clear</NumberButton>
          <NumberButton>+</NumberButton>
          <NumberButton>-</NumberButton>
          <NumberButton>*</NumberButton>
          <NumberButton>/</NumberButton>
          <NumberButton>%</NumberButton>
          <NumberButton>=</NumberButton>
        </div>
      </section>
    );
  }
}

export default CalContainer;
