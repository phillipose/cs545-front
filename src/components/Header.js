import {
    NavLink
} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';

export const Header = () => {
    const cartItemCount = useSelector(state => state.shoppingCart.length);
    const isAuthenticated = useSelector(state => state.isAuthenticated);

    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch({ type: 'logout' });
    }

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Store:::CS545</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/buy">Buy</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/orders">Orders</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link position-relative" to="/cart">Cart
                                    {
                                        cartItemCount ? (
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {cartItemCount}
                                            </span>
                                        ) : ''
                                    }
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/sellers">Sellers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="/reviews">Reviews</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="text-light">
                        {isAuthenticated}
                        {isAuthenticated ? (<button type="button" onClick={logoutHandler}>logout</button>) : (<NavLink to="/signin">Sign In</NavLink>)}
                    </div>
                </div>
            </nav>
        </header>
    );
}