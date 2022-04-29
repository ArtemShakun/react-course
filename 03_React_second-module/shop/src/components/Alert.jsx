import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeAlert } from '../store/shopSlice';

function Alert({ name }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const timerID = setTimeout(() => dispatch(closeAlert()), 2000);
        return () => {
            clearTimeout(timerID);
        };
        //  eslint-disable-next-line
    }, [name]);
    return <span className="toast-alert">{name} Added to cart</span>;
}

export default Alert;
