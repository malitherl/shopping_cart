
function Card(props) {

    const bg = {
        backgroundImage: 'url(' + props.link + ')', 
    }

    return (
        <div className="cardText">
            <div className="tea-card" style={bg}>
            </div>
              <p>{props.name}</p>
              <p>${props.price}</p>
              <p><button name={props.name} value= {props.value} onClick={props.decrement}>-</button> {props.value} <button name={props.name} value={props.value} onClick={props.increment}>+</button></p> 
              <button onClick={props.onClick}>Add to Cart</button>
            </div>
    )
}

export default Card;