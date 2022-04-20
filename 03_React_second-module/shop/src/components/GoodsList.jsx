import GoodsItem from './GoodsItem';

function GoodList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    return (
        <div className="goods m-5">
            {goods.map((item) => (
                <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}

export default GoodList;
