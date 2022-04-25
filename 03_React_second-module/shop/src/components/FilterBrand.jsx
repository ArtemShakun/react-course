function FilterBrand(props) {
    const { brand, filterByName = Function.prototype } = props;

    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={brand}
                    id="flexCheckDefault"
                    onChange={filterByName}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    {brand}
                </label>
            </div>
        </>
    );
}

export default FilterBrand;
