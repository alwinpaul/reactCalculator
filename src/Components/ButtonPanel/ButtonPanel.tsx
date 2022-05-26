import React from "react";

import Button from "./../Button/Button.tsx";
import "./ButtonPanel.scss";

let ButtonPanel = (props) => {

    function handleClick(val) {
        props.buttonClicked(val)
    }
    return (
        <React.Fragment>
            <div className="top-controls">
                <div className="number-box">
                <Button value="1" displayText=" 1 " buttonClicked={handleClick}></Button>
                <Button value="2" displayText=" 2 " buttonClicked={handleClick}></Button>
                <Button value="3" displayText=" 3 " buttonClicked={handleClick}></Button>
                <Button value="4" displayText=" 4 " buttonClicked={handleClick}></Button>
                <Button value="5" displayText=" 5 " buttonClicked={handleClick}></Button>
                <Button value="6" displayText=" 6 " buttonClicked={handleClick}></Button>
                <Button value="7" displayText=" 7 " buttonClicked={handleClick}></Button>
                <Button value="8" displayText=" 8 " buttonClicked={handleClick}></Button>
                <Button value="9" displayText=" 9 " buttonClicked={handleClick}></Button>
                <Button value="reset" displayText=" EC " buttonClicked={handleClick}></Button>
                <Button value="0" displayText=" 0 " buttonClicked={handleClick}></Button>
                <Button value="." displayText=" . " buttonClicked={handleClick}></Button>
                </div>
                <div className="right-controls">
                <Button value="+" displayText=" + " buttonClicked={handleClick}></Button>
                <Button value="-" displayText=" - " buttonClicked={handleClick}></Button>
                <Button value="*" displayText=" x " buttonClicked={handleClick}></Button>
                <Button value="/" displayText=" / " buttonClicked={handleClick}></Button>
                <Button value="=" displayText=" = " buttonClicked={handleClick}></Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ButtonPanel