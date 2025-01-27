
function Cart({cart}) {
    return(
        <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ): (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.title} - RS.{item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}
export default Cart