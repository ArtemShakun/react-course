import { useDispatch } from 'react-redux';
import { searchProducts } from '../store/shopSlice';

function Search() {
    const dispatch = useDispatch();

    const searchProduct = (e) => {
        const value = e.target.value.toLowerCase();
        dispatch(searchProducts({ value }));
    };
    return (
        <div className="form-floating mb-3 mt-5">
            <input
                type="search"
                className="form-control"
                id="floatingInput"
                placeholder="Search..."
                onChange={searchProduct}
            />
            <label htmlFor="floatingInput">Search</label>
        </div>
    );
}

export default Search;
