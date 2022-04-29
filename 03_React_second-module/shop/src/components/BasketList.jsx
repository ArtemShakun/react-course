import { useDispatch } from 'react-redux';
import { handleBasketShow } from '../store/shopSlice';
import BasketItem from './BasketItem';

function BasketList({ order }) {
    const dispatch = useDispatch();
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.prices * el.quantity;
    }, 0);
    return (
        <ul className="list-group basket-list">
            <li
                className="list-group-item active basket-li"
                aria-current="true"
            >
                <span
                    className="closeButton"
                    onClick={() => dispatch(handleBasketShow())}
                >
                    <i className="material-icons">close</i>
                </span>
                Basket
            </li>
            {order.length ? (
                order.map((item) => <BasketItem key={item.id} {...item} />)
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
