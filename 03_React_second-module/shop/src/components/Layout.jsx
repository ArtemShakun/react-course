import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../store/authSlice';

function Layout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.user.userName);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/products">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                    </ul>
                    <p style={{ color: 'white' }}>
                        {!isAuth ? (
                            <span
                                className="log"
                                onClick={() =>
                                    navigate('/login', { replace: true })
                                }
                            >
                                LogIn
                            </span>
                        ) : (
                            <>
                                <p>Hello, {isAuth}</p>
                                <span
                                    className="log"
                                    onClick={() => {
                                        dispatch(removeUser());
                                        navigate('/login', { replace: true });
                                    }}
                                >
                                    LogOut
                                </span>
                            </>
                        )}
                    </p>
                </div>
            </nav>

            <main className="container">
                <Outlet />
            </main>

            <footer className="navbar bg-dark fixed-bottom">
                <div className="container-fluid">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a className="grey-text" href="#!">
                            Repo
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Layout;
