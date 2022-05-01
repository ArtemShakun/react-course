import { useSelector } from 'react-redux';
import GoodsItem from './GoodsItem';

function GoodList() {
    const showProduct = useSelector((state) => state.shop.showProduct);

    return (
        <div className="goods m-5">
            {showProduct.map((item) => (
                <GoodsItem key={item.id} {...item} />
            ))}
        </div>
    );
}

export default GoodList;
