import { useDispatch } from 'react-redux';
import { filteredProductsByBrand } from '../store/shopSlice';

function FilterBrands({ brandName }) {
    const dispatch = useDispatch();
    const filteredProduct = (e) => {
        const brandName = e.target.value;
        const isChecked = e.target.checked;
        dispatch(filteredProductsByBrand({ brandName, isChecked }));
    };

    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={brandName}
                    id="flexCheckDefault"
                    onChange={filteredProduct}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    {brandName}
                </label>
            </div>
        </>
    );
}

export default FilterBrands;
