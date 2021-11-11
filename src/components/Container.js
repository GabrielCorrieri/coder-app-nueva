const Container = ({props}) => {
    console.log(props)
    return (
        <div>
            <p style={{ color: white}}>Esto es un botón</p>
            {props.children [0]}
            {props.children [1]}
            {props.children [2]}
        </div>
    )
}

export default Container