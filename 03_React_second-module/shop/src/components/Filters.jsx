import FilterBrand from './FilterBrand';
function Filters(props) {
    const { goods = [], filterByName = Function.prototype } = props;

    const brandArr = [];
    goods.map((item) => {
        if (!brandArr.includes(item.brand)) {
            brandArr.push(item.brand);
        }
    });
    return (
        <div className="col mt-5 filters-block">
            <h3>Filters</h3>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            onClick={() =>
                                document
                                    .querySelector('.accordion-collapse')
                                    .classList.toggle('show')
                            }
                        >
                            Brands
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            {brandArr.map((item, index) => (
                                <FilterBrand
                                    key={index}
                                    brand={item}
                                    filterByName={filterByName}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filters;
