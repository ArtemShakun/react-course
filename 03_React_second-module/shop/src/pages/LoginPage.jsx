// react
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// store
import { setUser } from '../store/authSlice';

function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validateName = (e) => {
        const inputName = document.querySelector('.form-control');
        const button = document.querySelector('.login-btn');
        if (e.target.value.length < 5) {
            inputName.classList.add('is-invalid');
            button.setAttribute('disabled', 'disabled');
        } else {
            inputName.classList.remove('is-invalid');
            inputName.classList.add('is-valid');
            button.removeAttribute('disabled');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = form.username.value;
        dispatch(setUser({ user }));
        navigate('/products', { replace: true });
    };

    return (
        <>
            <form
                className="registration d-flex flex-column align-items-center justify-content-center "
                onSubmit={handleSubmit}
            >
                <div className="registration-forms">
                    <h4 className="registration-form-title">
                        Welcome enter your Login please
                    </h4>

                    <div className="mb-3 row ">
                        <label
                            htmlFor="inputUserName"
                            className="col-sm-2 col-form-label"
                        >
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="inputUserName"
                                name="username"
                                onBlur={validateName}
                                onKeyDown={validateName}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success login-btn">
                        Login
                    </button>
                </div>
            </form>
        </>
    );
}

export default LoginPage;
