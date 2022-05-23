import { useDispatch } from 'react-redux';
import { incQuantity, decQuantity, removeFromBasket } from '../store/shopSlice';

function BasketItem({ id, name, prices, quantity, images }) {
    const dispatch = useDispatch();

    return (
        <li className="list-group-item basket-li">
            <div className="basket-li-img">
                <img src={images} alt={name} />
            </div>
            <div className="basket-li-name p-3">{name}</div>

            <div className="basket-li-quantity">
                <i
                    className="material-icons basketQuantity"
                    onClick={() => dispatch(decQuantity({ id }))}
                >
                    remove
                </i>{' '}
                Qty {quantity}{' '}
                <i
                    className="material-icons basketQuantity"
                    onClick={() => dispatch(incQuantity({ id }))}
                >
                    add
                </i>
            </div>
            <div className="basket-li-price">{prices * quantity} UAH</div>
            <div
                className="closeButton"
                onClick={() => dispatch(removeFromBasket({ id }))}
            >
                <i className="material-icons">close</i>
            </div>
        </li>
    );
}

export default BasketItem;
