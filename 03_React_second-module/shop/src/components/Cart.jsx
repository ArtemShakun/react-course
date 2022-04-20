function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype } = props;
    return (
        <div
            className="cart btn btn-outline-success"
            onClick={handleBasketShow}
        >
            <i className="material-icons shopping-cart-icon">shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}

export default Cart;
