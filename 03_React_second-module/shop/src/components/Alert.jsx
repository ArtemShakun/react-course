import { useEffect } from 'react';

function Alert(props) {
    const { name = '', closeAlert = Function.prototype } = props;

    useEffect(() => {
        const timerID = setTimeout(closeAlert, 2000);
        return () => {
            clearTimeout(timerID);
        };
        //  eslint-disable-next-line
    }, [name]);
    return <span className="toast-alert">{name} Added to cart</span>;
}

export default Alert;
