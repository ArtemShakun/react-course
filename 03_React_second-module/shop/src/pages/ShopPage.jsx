// react
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// store
import { fetchProducts } from '../store/shopSlice';
// react components
import GoodsList from '../components/GoodsList';
import Preloader from '../components/Preloader';
import Cart from '../components/Cart';
import BasketList from '../components/BasketList';
import Alert from '../components/Alert';
import Search from '../components/Search';
import Filters from '../components/Filters';

function ShopPage() {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const { order, isBasketShow, alertName, status, error } = useSelector(
        (state) => state.shop
    );
    const isAuth = useSelector((state) => state.user.userName);

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchProducts());
        }, 1000);
    }, [dispatch]);

    return !isAuth ? (
        navigation('/login')
    ) : (
        <div className="row">
            <div className="col-3">
                <Filters />
            </div>
            <div className="col-9">
                <Search />
                <Cart quantity={order.length} /> {/* iconBasket */}
                {status === 'loading' && <Preloader />}
                {error && <h2>An error: {error}</h2>}
                <GoodsList />
                {isBasketShow && <BasketList order={order} />}
                {alertName && <Alert name={alertName} />}
            </div>
        </div>
    );
}

export default ShopPage;
