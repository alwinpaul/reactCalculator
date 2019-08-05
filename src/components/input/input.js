import React from 'react';
import "./input.css";

const InputBox = (props) => {
    return <div>
        <div className="input-box">{props.inputVal}</div>
    </div>
}

export default InputBox;