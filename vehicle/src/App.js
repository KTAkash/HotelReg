import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import Sidebar from './components/pages/SideBar/Sidebar';
import CarView from './components/CarView';
import AddminDashboard from './components/Event/admindashboard/AdminDashboard';
import PostEvents from './components/Event/events/PostEvents';
import UpdateEvent from './components/Event/events/UpdateEvent';
import EventView from './components/EventView';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [currentMenu, setCurrentMenu] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userRole = localStorage.getItem('userRole');
        const hamburgerMenuState = localStorage.getItem('showHamburgerMenu') === 'true';

        if (token) {
            setIsAuthenticated(true);
            if (userRole === 'Admin') {
                setShowHamburgerMenu(hamburgerMenuState);
            }
        }
    }, [location.pathname]);

    const toggleSidebar = () => {
        setShowSidebar((prevState) => !prevState);
    };

    const toggleHamburgerMenu = (state) => {
        setShowHamburgerMenu(state);
        localStorage.setItem('showHamburgerMenu', state);
    };

    return (
        <>
            <Header
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
                showHamburgerMenu={showHamburgerMenu}
                toggleSidebar={toggleSidebar}
            />
            <Sidebar showSidebar={showSidebar} currentMenu={currentMenu} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setShowHamburgerMenu={setShowHamburgerMenu} />} />
                <Route
                    path="/admin-dashboard"
                    element={<AdminDashboard setShowHamburgerMenu={toggleHamburgerMenu} setCurrentMenu={setCurrentMenu} />}
                />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/car" element={<PostCar />} />
                <Route path="/view" element={<CarView />} />
                <Route path="/e-view" element={<EventView />} />
                <Route path="/car/:id" element={<UpdateCar />} />
                <Route path="/admin" element={<AddminDashboard />} />
                <Route path="/events" element={<PostEvents />} />
                <Route path="/event/:id" element={<UpdateEvent />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </>
    );
};

export default App;
