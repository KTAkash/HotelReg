import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
    const style={
        color: 'blue',
        backgroundColor: 'lightgrey',
        padding: '10px',
        borderRadius: '5px',
        textAlign: 'center'

    };

    return (
        <div style={style}>
            <h1>User Dashboard</h1>
            <Link to="/view">
                <button 
                    style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    
                >
                    Car
                </button>
            </Link>

            <Link to="/e-view">
                <button 
                    style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    
                >
                    Event
                </button>
            </Link>

            <Link to="/F-view">
                <button 
                    
                >
                    Food Menu
                </button>
            </Link>

            <Link to="/empview">
                <button 
                   
                >
                Employee
                </button>
            </Link>

            
            <Link to="/roomlist">
                <button 
                   
                >
                Rooms
                </button>
            </Link>
        </div>
        
    );
};

export default UserDashboard;
