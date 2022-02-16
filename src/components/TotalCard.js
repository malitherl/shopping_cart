function TotalCard (props) {
    const mini = {
        width: "70px",
    }

    const style = {
        textAlign: "right",
    }

    return (
        <div className="mini" >
            <img src={props.src} style={mini} alt=""></img>
            <p style={style}>{props.name} x ({props.value}) </p>
            
            
        </div>
    )
}

export default TotalCard;