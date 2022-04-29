import { useDispatch } from 'react-redux';
import { filteredProducts } from '../store/shopSlice';

function FilterBrand({ brand }) {
    const dispatch = useDispatch();

    const filteredProduct = (e) => {
        const brandName = e.target.value;
        const isChecked = e.target.checked;
        dispatch(filteredProducts({ brandName, isChecked }));
    };

    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={brand}
                    id="flexCheckDefault"
                    onChange={filteredProduct}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    {brand}
                </label>
            </div>
        </>
    );
}

export default FilterBrand;
