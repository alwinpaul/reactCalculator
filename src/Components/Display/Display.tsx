import './Display.scss'

function Display(props) {
    return (
        <div className="display-box">
            <div className="db--operations">{props.operation}</div>
            <div className="db--output">{props.total || 0}</div>
        </div>
    )
}

export default Display;