import "./Button.scss";

let Button = (props) => {

    function handleClick(val) {
        props.buttonClicked(val)
    }

    return (
        <div className="button" onClick={() => handleClick(props.value)}>
            <div className="button-val">{props.displayText}</div>
        </div>
    )
}

export default Button;