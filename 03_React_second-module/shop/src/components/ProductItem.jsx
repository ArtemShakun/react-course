import { useNavigate } from 'react-router-dom';

function ProductItem(props) {
    const { name, images, description, prices, rating } = props;
    const goBack = useNavigate();
    return (
        <>
            <div className="row">
                <button className="btn" onClick={() => goBack(-1)}>
                    Go back
                </button>
                <div className="col-4">
                    <img src={images} alt={name} />
                </div>
                <div className="col-8 d-flex">
                    <h1>{name}</h1>
                    <h4>{description}</h4>
                    <p>{rating}</p>
                    <p>{prices}</p>
                </div>
            </div>
            ;
        </>
    );
}
export default ProductItem;
