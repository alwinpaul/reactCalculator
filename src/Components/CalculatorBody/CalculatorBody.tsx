import React, { useReducer, useState } from "react";
import Display from "./../Display/Display.tsx";
import ButtonPanel from "./../ButtonPanel/ButtonPanel.tsx";

import "./CalculatorBody.scss";

function CalculatorBody() {

    // const [firstOperand, setFirstOperand] = useState("");
    // const [nextOperand, setNextOperand] = useState("");
    // const [operator, setOperator] = useState("");
    // const [operations, setOperations] = useState("");
    // const [result, setResult] = useState("");

    const calculatorInitialState = {
        firstOperand: "",
        nextOperand: "",
        operator: "",
        operations: "",
        result: ""
    }

    function calculatorReducer(state, action) {
        switch (action.type) {
          case 'reset':
            return calculatorInitialState;
          case 'setOperations':
            return { ...state, operations: action.value };
          case 'setNextOperand':
            return { ...state, nextOperand: action.value };
          case 'setFirstOperand':
            return { ...state, firstOperand: action.value };
          case 'setOperator':
            return { ...state, operator: action.value };
          case 'setResult':
                return { ...state, result: action.value};
          default:
            throw new Error();
        }
      }

    const [state, dispatch] = useReducer(calculatorReducer, calculatorInitialState);

    const operators = ["+", "-", "*", "/"];

    // HANDLE BUTTON CLICKS
    function handleButtonClick(val) {
        // RESET
        if(val === 'reset') {
            dispatch({type: 'reset'})
            return;
        }
        // CALCULATE RESULT
        if(val === "=") {
            dispatch({
                type: 'setOperations',
                value: state.operations + state.nextOperand
            })
            calculateResult()
            return;
        }
        // APPEND NUMBERS
        if(Number.isInteger(parseInt(val)) || val === ".") {
            dispatch({
                type: 'setNextOperand',
                value: state.nextOperand + val
            })
            return;
        }
        // OPERATIONS
        if(operators.includes(val)) {
            dispatch({
                type: 'setOperations',
                value: state.operations + state.nextOperand + val
            })
            if(state.firstOperand && state.nextOperand) {
                calculateResult()
            } else {
                state.nextOperand && dispatch({
                    type: 'setFirstOperand',
                    value: state.nextOperand
                })
                dispatch({
                    type: 'setNextOperand',
                    value: ""
                })
            }
            dispatch({
                type: 'setOperator',
                value: val
            })
        }
    }

    // CALCULATE RESULT
    function calculateResult() {
        if(state.firstOperand && state.nextOperand) {
            let result =eval(`${state.firstOperand} ${state.operator} ${state.nextOperand}`);
            dispatch({
                type: "setResult",
                value: result
            })
            dispatch({
                type: "setFirstOperand",
                value: result
            })
            dispatch({
                type: "setNextOperand",
                value: ""
            })
        }
    }

    return (
        <div className="main-body">
            <div className="mb--container">
                <Display total={state.nextOperand || state.result} operation={state.operations}></Display>
                <ButtonPanel buttonClicked={handleButtonClick}></ButtonPanel>
            </div>
        </div>
    )
}

export default CalculatorBody;