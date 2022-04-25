function BasketItem(props) {
    const {
        id,
        name,
        prices,
        quantity,
        removeFromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return (
        <li className="list-group-item basket-li">
            {name}{' '}
            <i
                className="material-icons basketQuantity"
                onClick={() => decQuantity(id)}
            >
                remove
            </i>{' '}
            Qty {quantity}{' '}
            <i
                className="material-icons basketQuantity"
                onClick={() => incQuantity(id)}
            >
                add
            </i>
            = {prices * quantity}
            <span className="closeButton" onClick={() => removeFromBasket(id)}>
                <i className="material-icons">close</i>
            </span>
        </li>
    );
}

export default BasketItem;
