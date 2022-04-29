import { useNavigate } from 'react-router-dom';

function ProductItem(props) {
    const { name, images, description, prices, rating } = props;
    const goBack = useNavigate();
    return (
        <>
            <div className="row mt-5 d-flex ">
                <span className="button-go-back" onClick={() => goBack(-1)}>
                    <i className="large material-icons go-back">chevron_left</i>
                    <span className="button-go-back__text">Back</span>
                </span>
                <div className="col-5 mt-5 ml-5 mb-5">
                    <div className="product-item__img-block">
                        <img src={images} alt={name} />
                    </div>
                </div>
                <div className="col-5 mt-5 d-flex flex-column ">
                    <h1 className="description-block-title">{name}</h1>
                    <p className="description-block-text">{description}</p>
                    <p className="description-block-price">{prices} UAH</p>
                </div>
            </div>
        </>
    );
}
export default ProductItem;
