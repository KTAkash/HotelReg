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

    
    const handleFoodButtonClick = () => {
        setShowHamburgerMenu(true); // Show and persist the hamburger menu
        setCurrentMenu('Food');
    };

    const handleEmployeeButtonClick = () => {
        setShowHamburgerMenu(true); // Show and persist the hamburger menu
        setCurrentMenu('Employee');
    };

    const handleRoomButtonClick = () => {
        setShowHamburgerMenu(true); // Show and persist the hamburger menu
        setCurrentMenu('Room');
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
            <Link to="/add">
                <button
                    style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={handleFoodButtonClick}
                >
                    Food
                </button>
            </Link>
            <Link to="/Edash">
                <button
                    style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={handleEmployeeButtonClick}
                >
                    Employee
                </button>
            </Link>
            <Link to="/view-rooms">
                <button
                    style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    onClick={handleRoomButtonClick}
                >
                    Rooms
                </button>
            </Link>


        </div>
    );
};

export default AdminDashboard;
