import { useSelector } from 'react-redux';
import GoodsItem from './GoodsItem';

function GoodList() {
    const { filterProduct, goods } = useSelector((state) => state.shop);
    const products = filterProduct.length ? filterProduct : goods;

    return (
        <div className="goods m-5">
            {products.map((item) => (
                <GoodsItem key={item.id} {...item} />
            ))}
        </div>
    );
}

export default GoodList;
