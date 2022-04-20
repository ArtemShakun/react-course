function GoodsItem(props) {
    const {
        id,
        name,
        images,
        prices,
        addToBasket = Function.prototype,
    } = props;
    return (
        <div className="card">
            <img
                src={images}
                className="card-img-bottom mx-auto pt-5"
                alt={name}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title mt-auto fs-6 pt-5">{name}</h5>
                <p className="card-text fs-5">{prices} UAH</p>
                <button
                    className="btn btn-primary"
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            prices,
                        })
                    }
                >
                    Add to Basket
                </button>
            </div>
        </div>
    );
}

export default GoodsItem;
