function Button(props){
    return(
        <button className={`custom-button ${props.type}`}>
            {props.text}
        </button>
    )
}
export default Button ;