import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shopList from '../shopList';
import Preloader from '../components/Preloader';
import ProductItem from '../components/ProductItem';

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        setProduct(shopList.filter((item) => item.id === +id));
    }, [id]);
    return (
        <>
            {!product.length ? (
                <Preloader />
            ) : (
                product.map((item) => <ProductItem key={item.id} {...item} />)
            )}
        </>
    );
}

export default Product;
