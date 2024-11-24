import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Sidebar.css";

const Sidebar = ({ showSidebar, currentMenu }) => {
    const carMenu = (
        <Nav className="flex-column mt-3">
            <Nav.Link as={Link} to="/dashboard" className="nav-link">Car Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/car" className="nav-link">Post New Car</Nav.Link>
        </Nav>
    );

    const eventMenu = (
        <Nav className="flex-column mt-3">
            <Nav.Link as={Link} to="/admin" className="nav-link">Event Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/events" className="nav-link">Post New Event</Nav.Link>
        </Nav>
    );

    return (
        <Navbar
            bg="primary"
            variant="dark"
            className={`sidebar ${showSidebar ? 'visible' : 'hidden'}`}
        >
            <Container>
                <Navbar.Brand className="sidebar-brand" to="/">
                    <strong>{currentMenu === 'Car' ? ' ' : ' '}</strong>
                </Navbar.Brand>
                {currentMenu === 'Car' ? carMenu : eventMenu}
            </Container>
        </Navbar>
    );
};

export default Sidebar;
