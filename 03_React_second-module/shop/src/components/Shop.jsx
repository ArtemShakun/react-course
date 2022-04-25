import { useEffect, useState } from 'react';
import GoodsList from './GoodsList';
import shopList from '../shopList';
import Preloader from './Preloader';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';
import Search from './Search';
import Filters from './Filters';

function Shop() {
    const [goods, setGoods] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');
    const [filterCatalog, setFilterCatalog] = useState('');
    const [brand, setBrand] = useState([]);

    const filterByName = (e) => {
        if (e.target.checked) {
            const newArr = goods.filter(
                (item) => item.brand === e.target.value
            );
            setBrand([...brand, ...newArr]);
            setFilterCatalog([...brand, ...newArr]);
        } else {
            if (brand.length !== 0) {
                const newArr = brand.filter(
                    (item) => item.brand !== e.target.value
                );
                setBrand(newArr);
                setFilterCatalog(newArr.length !== 0 ? [...newArr] : goods);
            }
        }
    };

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.name);
    };

    const removeFromBasket = (itemID) => {
        const newOrder = order.filter((el) => el.id !== itemID);
        setOrder(newOrder);
    };

    const incQuantity = (itemID) => {
        const newOrder = order.map((el) => {
            if (el.id === itemID) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    const decQuantity = (itemID) => {
        const newOrder = order.map((el) => {
            if (el.id === itemID) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity > 1 ? newQuantity : 1,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    const closeAlert = () => {
        setAlertName('');
    };

    const searchProducts = (e) => {
        setFilterCatalog(
            goods.filter((item) =>
                item.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    };

    useEffect(() => {
        setTimeout(() => {
            setGoods(shopList);
            setFilterCatalog(shopList);
            setLoading(false);
        }, 1000);
    }, [goods]);

    return (
        <div className="row">
            <div className="col-3">
                <Filters
                    goods={goods}
                    searchProducts={searchProducts}
                    filterByName={filterByName}
                />
            </div>
            <div className="col-9">
                <Search searchProducts={searchProducts} />
                <Cart
                    quantity={order.length}
                    handleBasketShow={handleBasketShow}
                />
                {isLoading ? (
                    <Preloader />
                ) : (
                    <GoodsList
                        goods={filterCatalog}
                        addToBasket={addToBasket}
                    />
                )}
                {isBasketShow && (
                    <BasketList
                        order={order}
                        handleBasketShow={handleBasketShow}
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
                )}
                {alertName && (
                    <Alert name={alertName} closeAlert={closeAlert} />
                )}
            </div>
        </div>
    );
}

export default Shop;
