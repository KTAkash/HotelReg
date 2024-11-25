import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Sidebar.css";

const Sidebar = ({ showSidebar, currentMenu }) => {
    const carMenu = (
        <Nav className="flex-column mt-3">
            <Nav.Link as={Link} to="/dashboard" className="nav-link">
                Car Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/car" className="nav-link">
                Post New Car
            </Nav.Link>
        </Nav>
    );

    const eventMenu = (
        <Nav className="flex-column mt-3">
            <Nav.Link as={Link} to="/admin" className="nav-link">
                Event Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/events" className="nav-link">
                Post New Event
            </Nav.Link>
        </Nav>
    );

    const foodMenu = (
        <Nav className="flex-column mt-3">
            <Nav.Link as={Link} to="/manage-food" className="nav-link">
                Food Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/add" className="nav-link">
                Post New Food
            </Nav.Link>
        </Nav>
    );

    const EmployeeMenu = (
        <Nav className="flex-column mt-3">
            <Nav.Link as={Link} to="/Edash" className="nav-link">
                Employee Dashboard
            </Nav.Link>
            <Nav.Link as={Link} to="/employee" className="nav-link">
                Post New Employee
            </Nav.Link>
        </Nav>
    );

    return (
        <Navbar
            bg="primary"
            variant="dark"
            className={`sidebar ${showSidebar ? "visible" : "hidden"}`}
        >
            <Container>
                {/* Admin Menu at the top */}
                <div className="sidebar-brand">
                    <strong>Admin Menu</strong>
                </div>

                {/* Dynamic Menu Rendering */}
                {currentMenu === "Car" && carMenu}
                {currentMenu === "Event" && eventMenu}
                {currentMenu === "Food" && foodMenu}
                {currentMenu === "Employee" && EmployeeMenu}
            </Container>
        </Navbar>
    );
};

export default Sidebar;
