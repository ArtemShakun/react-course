import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/hook/useAuth';

function Layout() {
    const isLogin = localStorage.getItem('userName');
    const { signOut } = useAuth();
    const navigate = useNavigate();
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
                        {!isLogin ? (
                            <button
                                onClick={() =>
                                    signOut(() =>
                                        navigate('/products', { replace: true })
                                    )
                                }
                            >
                                LogIn
                            </button>
                        ) : (
                            <button
                                onClick={() =>
                                    signOut(() =>
                                        navigate('/', { replace: true })
                                    )
                                }
                            >
                                LogOut
                            </button>
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
