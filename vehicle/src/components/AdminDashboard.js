import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = ({ setShowHamburgerMenu }) => {
    const handleCarButtonClick = () => {
        setShowHamburgerMenu(true); // Enable the hamburger menu
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
        </div>
    );
};

export default AdminDashboard;
