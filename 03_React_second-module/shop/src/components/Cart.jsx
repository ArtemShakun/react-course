import { useDispatch } from 'react-redux';
import { handleBasketShow } from '../store/shopSlice';

function Cart(props) {
    const dispatch = useDispatch();
    const { quantity = 0 } = props;
    return (
        <div
            className="cart btn btn-outline-success"
            onClick={() => dispatch(handleBasketShow())}
        >
            <i className="material-icons shopping-cart-icon">shopping_cart</i>
            {quantity ? (
                <span className="cart-quantity">{quantity}</span>
            ) : null}
        </div>
    );
}

export default Cart;
