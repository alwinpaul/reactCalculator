import React, { useState } from "react";
import Display from "./../Display/Display.tsx";
import ButtonPanel from "./../ButtonPanel/ButtonPanel.tsx";

import "./CalculatorBody.scss";

function CalculatorBody() {

    const [firstOperand, setFirstOperand] = useState("");
    const [nextOperand, setNextOperand] = useState("");
    const [operator, setOperator] = useState("");
    const [operations, setOperations] = useState("");
    const [result, setResult] = useState("");

    const operators = ["+", "-", "*", "/"];

    // RESET CALCULATOR
    function resetCalc() {
        setFirstOperand("")
        setNextOperand("")
        setOperator("")
        setOperations("")
        setResult("")
    }

    // HANDLE BUTTON CLICKS
    function handleButtonClick(val) {
        // RESET
        if(val === 'reset') {
            resetCalc()
            return;
        }
        // CALCULATE RESULT
        if(val === "=") {
            setOperations((prevVal) => {
                return prevVal + nextOperand
            })
            calculateResult()
            return;
        }
        // APPEND NUMBERS
        if(Number.isInteger(parseInt(val)) || val === ".") {
            setNextOperand((prevVal) => {
                return prevVal+val
            })
            return;
        }
        // OPERATIONS
        if(operators.includes(val)) {
            setOperations((prevVal) => {
                return prevVal + nextOperand + val
            })
            if(firstOperand && nextOperand) {
                calculateResult()
            } else {
                nextOperand && setFirstOperand(nextOperand)
                setNextOperand("")
            }
            setOperator(val)
        }
    }

    // CALCULATE RESULT
    function calculateResult() {
        if(firstOperand && nextOperand) {
            const result = eval(`${firstOperand} ${operator} ${nextOperand}`)
            setResult(result)
            setFirstOperand(result)
            setNextOperand("")
        }
    }

    return (
        <div className="main-body">
            <div className="mb--container">
                <Display total={nextOperand || result} operation={operations}></Display>
                <ButtonPanel buttonClicked={handleButtonClick}></ButtonPanel>
            </div>
        </div>
    )
}

export default CalculatorBody;