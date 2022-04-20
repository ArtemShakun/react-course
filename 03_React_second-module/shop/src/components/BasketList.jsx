import BasketItem from './BasketItem';

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.prices * el.quantity;
    }, 0);
    return (
        <ul className="list-group basket-list">
            <li
                className="list-group-item active basket-li"
                aria-current="true"
            >
                <span className="closeButton" onClick={handleBasketShow}>
                    <i className="material-icons">close</i>
                </span>
                Basket
            </li>
            {order.length ? (
                order.map((item) => (
                    <BasketItem
                        key={item.id}
                        {...item}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
                ))
            ) : (
                <li className="list-group-item">Basket empty</li>
            )}

            <li
                className="list-group-item active basket-li"
                aria-current="true"
            >
                total cost: {totalPrice} UAH
            </li>
            <li className="list-group-item" aria-current="true">
                <button className="btn btn-primary">Checkout</button>
            </li>
        </ul>
    );
}

export default BasketList;
