import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = ({ setShowHamburgerMenu, setCurrentMenu }) => {
    const handleCarButtonClick = () => {
        setShowHamburgerMenu(true); // Show and persist the hamburger menu
        setCurrentMenu('Car');
    };

    const handleEventButtonClick = () => {
        setShowHamburgerMenu(true); // Show and persist the hamburger menu
        setCurrentMenu('Event');
    };

    return (
        <div style={{ color: 'blue', backgroundColor: 'lightgrey', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
            <h1>Admin Dashboard</h1>
            <Link to="/dashboard">
                <button
                    style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={handleCarButtonClick}
                >
                    Car
                </button>
            </Link>
            <Link to="/admin">
                <button
                    style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={handleEventButtonClick}
                >
                    Event
                </button>
            </Link>
        </div>
    );
};

export default AdminDashboard;
