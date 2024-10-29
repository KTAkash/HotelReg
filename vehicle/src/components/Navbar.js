import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/home');
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {!isAuthenticated && <li><Link to="/">Home</Link></li>}
                {isAuthenticated ? (
                    <li><button onClick={handleLogout}>Logout</button></li>
                ) : (
                    <>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
