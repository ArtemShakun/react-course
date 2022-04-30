import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../store/shopSlice';

function GoodsItem({ id, name, images, prices, memory }) {
    const dispatch = useDispatch();
    return (
        <div className="card">
            <NavLink to={`/product/${id}`}>
                <img
                    src={images}
                    className="card-img-bottom mx-auto d-block pt-5"
                    alt={name}
                />
            </NavLink>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title mt-auto fs-6">
                    {name} ОЗУ {memory}
                </h5>
                <p className="card-text fs-5">{prices} UAH</p>
                <button
                    className="btn btn-primary"
                    onClick={() =>
                        dispatch(
                            addToBasket({
                                id,
                                name,
                                prices,
                                images,
                            })
                        )
                    }
                >
                    Add to Basket
                </button>
            </div>
        </div>
    );
}

export default GoodsItem;
