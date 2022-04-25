function Search(props) {
    const { searchProducts = Function.prototype } = props;
    return (
        <div className="form-floating mb-3 mt-5">
            <input
                type="search"
                className="form-control"
                id="floatingInput"
                placeholder="Search..."
                onChange={searchProducts}
            />
            <label htmlFor="floatingInput">Search</label>
        </div>
    );
}

export default Search;
