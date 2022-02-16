
function Modal(props) {

    const style = {
        textAlign: "center",
    }

    //this is the cart itself. it appears as an overlay for the webpage. 
    return <div className="modal">
       <h3>My Cart</h3>
       {props.displayTotal}
       <h4 style={style }>Total: {props.total}</h4>
        <div className="modalButtons">
            <button>Cancel</button>
            <button>Checkout</button> 
        </div>
    </div>
}

export default Modal;