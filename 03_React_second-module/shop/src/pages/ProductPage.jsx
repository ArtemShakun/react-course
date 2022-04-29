// react
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// mockDataJson
import shopList from 'shopList';
// react components
import Preloader from 'components/Preloader';
import ProductItem from '../components/ProductItem';

function ProductPage() {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const isAuth = useSelector((state) => state.user.userName);
    const navigation = useNavigate();

    useEffect(() => {
        setProduct(shopList.filter((item) => item.id === +id));
    }, [id]);

    return !isAuth ? (
        navigation('/login')
    ) : (
        <>
            {!product.length ? (
                <Preloader />
            ) : (
                product.map((item) => <ProductItem key={item.id} {...item} />)
            )}
        </>
    );
}

export default ProductPage;
