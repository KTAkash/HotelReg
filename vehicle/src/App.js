import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import Dashboard from './components/pages/dashboard/Dashboard';
import PostCar from './components/pages/Car/PostCar';
import UpdateCar from './components/pages/Car/UpdateCar';
import NoMatch from './components/pages/noMatch/NoMatch';
import Sidebar from './components/pages/header/Sidebar';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false); // State to control sidebar visibility

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const toggleSidebar = () => {
        setShowSidebar(prevState => !prevState); // Toggle the sidebar visibility
    };

    return (
        <Router>
            <Header 
                isAuthenticated={isAuthenticated} 
                setIsAuthenticated={setIsAuthenticated} 
                showHamburgerMenu={showHamburgerMenu}
                toggleSidebar={toggleSidebar} // Pass the toggleSidebar function
            />
            <Sidebar showSidebar={showSidebar} /> {/* Pass the showSidebar state to Sidebar */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/admin-dashboard" element={<AdminDashboard setShowHamburgerMenu={setShowHamburgerMenu} />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/car" element={<PostCar />} />
                <Route path="/car/:id" element={<UpdateCar />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </Router>
    );
};

export default App;
